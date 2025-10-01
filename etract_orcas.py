import os
import json
import csv
import requests

# Config
OLLAMA_HOST = "http://10.40.20.2:11434/api/generate"
MODEL = "llama4:16x17b"
SLIDES_DIR = "./slides"
OUTPUT_CSV = "components_extracted.csv"

PROMPT = (
    "You are given a slide image. "
    "Extract all listed components in a JSON array, where each object has: "
    "{'id': number, 'item': string, 'quantity': number}. "
    "Return only valid JSON."
)

def query_ollama(image_path):
    """Send image + prompt to Ollama and return text output."""
    with open(image_path, "rb") as img_file:
        files = {"image": img_file}
        data = {"model": MODEL, "prompt": PROMPT}
        response = requests.post(OLLAMA_HOST, data=data, files=files, stream=True)
        text = ""
        for line in response.iter_lines():
            if line:
                obj = json.loads(line.decode("utf-8"))
                if "response" in obj:
                    text += obj["response"]
        return text.strip()

def main():
    results = []

    for filename in os.listdir(SLIDES_DIR):
        if filename.lower().endswith((".png", ".jpg", ".jpeg")):
            image_path = os.path.join(SLIDES_DIR, filename)
            print(f"📑 Processing {filename}...")

            raw_response = query_ollama(image_path)

            try:
                components = json.loads(raw_response)
                for comp in components:
                    comp["slide"] = filename
                    results.append(comp)
            except json.JSONDecodeError:
                print(f"⚠️ JSON parse error on {filename}, saving raw output")
                results.append({"slide": filename, "raw_output": raw_response})

    # Save to CSV
    if results:
        keys = sorted({key for r in results for key in r.keys()})
        with open(OUTPUT_CSV, "w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=keys)
            writer.writeheader()
            writer.writerows(results)
        print(f"✅ Results saved to {OUTPUT_CSV}")
    else:
        print("⚠️ No results extracted.")

if __name__ == "__main__":
    main()
