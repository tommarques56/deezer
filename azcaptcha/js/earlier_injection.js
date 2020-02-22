chrome.runtime.onMessage.addListener(function(e, t, n) {
    if (typeof e.type !== "undefined") {
        if (e.type == "funcaptchaApiScriptRequested") {
            delete e.type;
            var c = e;
            var a = document.createElement("script");
            a.dataset["parameters"] = JSON.stringify(c);
            a.src = chrome.runtime.getURL("/js/funcaptcha_object_inteceptor.js");
            a.onload = function() {
                this.remove()
            };
            (document.head || document.documentElement).appendChild(a)
        }
    }
});