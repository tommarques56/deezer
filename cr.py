from selenium.webdriver.common.keys import Keys
import shutil 
from selenium import webdriver 
from time import sleep 
from selenium.webdriver.common.by import By 
from random import randrange
import json, requests
import socket
from selenium.common.exceptions import NoSuchElementException
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.proxy import Proxy
from selenium.webdriver.common.proxy import Proxy, ProxyType
from threading import Thread
import os
from urllib.request import urlopen
import socket
import urllib.error
import threading
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.action_chains import ActionChains
from multiprocessing import Process
import random
import string
from fake_useragent import UserAgent
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from bs4 import BeautifulSoup
from python_anticaptcha import AnticaptchaClient, NoCaptchaTaskProxylessTask
import re
import pandas as pd
import os
import pickle
from datetime import datetime
import time
from requests import post, get
p=0


def proxy():
    j=0
    h=1
    url = 'http://api.proxies.lol/?apiKey=fef1cc7a0390468f9fb5797ebe2ba7f3'
    resp = requests.get(url=url)
	#print(resp)
    data = json.loads(resp.text)
	#print(data)
    IP = data["ip"]
	#print(IP)
    PORT = data["port"]
	#print(PORT)
    PROXY = "{}:{}".format(IP,PORT)
	#print(PROXY)
    
    socket.setdefaulttimeout(120)
		
    currentProxy = PROXY	
		
    if is_bad_proxy(currentProxy):
		
        proxy()
        sleep(1)
    else:
		
		
        print(currentProxy)
    return currentProxy
def is_bad_proxy(pip):    
    try:
        proxy_handler = urllib.request.ProxyHandler({'so': pip})
        opener = urllib.request.build_opener(proxy_handler)
        opener.addheaders = [('User-agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36')]
        urllib.request.install_opener(opener)
        req=urllib.request.Request('https://www.deezer.com/register')  # change the URL to test here
        sock=urllib.request.urlopen(req)
    except urllib.error.HTTPError as e:
        print('Error code: ', e.code)
        return e.code
    except Exception as detail:
        print("ERROR:", detail)
        return True

    return False

def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))

N = random.randrange(18,45)

def al():
    e = "{}@gmail.com".format(random_char(20))    
    
    return e



def driver():
    capabilities = {
        "browserName": "chrome",
        "version": "79.0",
        "enableVNC": True,
        "enableVideo": False
        
    }
    ip=socket.gethostbyname(socket.gethostname())
    command = "http://{}:4444/wd/hub".format(ip)
       
    options = webdriver.ChromeOptions()
    # options.add_extension('D:\\androiddeezerapp\\AC.zip')
    # options.add_extension('/root/deezer/az.zip')
    # options.add_argument('--proxy-server=%s' % proxy())
    options.add_argument(f'user-agent={"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36"}')
    options.add_argument("--start-maximized")   

    # driver = webdriver.Chrome(options=options)
    driver = webdriver.Remote(command_executor=command, desired_capabilities=capabilities, options=options)
   

    launch(driver)

def close(driver):
    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        return False

def style(driver):
    v=0
   
    screen = driver.find_element_by_class_name('onboarding-screen-search-btn')
    if screen.is_displayed():
        screen.click()
    else:
        driver.get("https://www.deezer.com/fr/album/60566312")
        style(driver)


    close(driver)
        
    try:
        driver.find_element_by_class_name('sidebar-nav-item')
    except:
        style(driver)
        print("style")
    driver.get("https://www.deezer.com/fr/album/60566312")    
    
    
    
# def music(driver,em,md):
    
    # p=0
    # driver.implicitly_wait(50)
    
    # driver.find_element_by_class_name('states-button-label').click()
    
    
    # # f = open("/root/login.txt","a+")
    # # f.write("{}:{}\n".format(em,md))
    # # f.close() 
    # # # driver.get("https://www.deezer.com/fr")   
    # # # pickle.dump( driver.get_cookies() , open("/root/cookies.pkl","wb"))
    # # # driver.get("https://www.deezer.com/fr/signout")
    # # # sleep(8)
    # # # driver.get("https://www.deezer.com/fr")
    # # # sleep(5)
    # # # cookies = pickle.load(open("/root/cookies.pkl", "rb"))
    # # # sleep(2)
    # # # for cookie in cookies:
        # # # driver.add_cookie(cookie)
    # # # sleep(5)
    # # # driver.refresh()
    # driver.quit()
    
    # new()
    
def music(driver,v):
    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        False    
    p=0
    x=0
    l(driver)
    
    A = random.randrange(200,300)
    while p<A:
        x=0
        while x<31:
            
            try:
                WebDriverWait(driver, 10).until(lambda x: x.find_element_by_class_name('slider-counter-current'))
                e = driver.find_element_by_class_name("slider-counter-current").text
                s=e.split(':')
                x=int(s[1])
                sleep(2)
                
            except:
                
                driver.refresh()
                try:
                    driver.switch_to.alert.accept() 
                except:
                    music(driver,v)
                music(driver,v)   
    
                           
        try:
            
            WebDriverWait(driver, 40).until(lambda x: x.find_element_by_class_name('svg-icon-next'))  
            driver.find_element_by_class_name('svg-icon-next').click()
            v=v+1
            print(v)
        except:
            
            music(driver,v)

        
        p=p+1
       
    try:
        
        driver.refresh()
        
        try:
            
            driver.switch_to.alert.accept() 
        except:
            
            music(driver,v)
        WebDriverWait(driver, 20).until(lambda x: x.find_element_by_class_name('logo-deezer-black'))    
    except:
        
        music(driver,v)
    
  

    
    music(driver,v)    
   
    
    
def send_captcha(site_key,driver):
    
    api_key = "t8jzfb2xcjfwhw4qkgxmc9y7qn3ymvdh"
    send_url = "https://azcaptcha.com/in.php?key={}&method=userrecaptcha&googlekey={}&pageurl=https://www.deezer.com/fr/register?appear=1&here=now".format(api_key,site_key)
    request = get(send_url)
    id = request.text.split('|')[1]  
    get_url = "http://azcaptcha.com/res.php?key={}&action=get&id={}".format(api_key,id)
    request = get(get_url) 
    while request.text.split('|')[0] != "OK":
        sleep(2)
        request = get(get_url) 
        if request.text.split('|')[0] == "ERROR_CAPTCHA_UNSOLVABLE":
            driver.quit()
            new()
    t = request.text.split('|')[1]
    
    return t    

def launch(driver):
    
    v=0
    driver.get("https://www.deezer.com/register")
    try:
        
        WebDriverWait(driver, 10).until(lambda x: x.find_element_by_class_name('logo-deezer'))  
        
    except:
        driver.quit()
        new()    
    try:
        driver.find_element_by_id('register_form_phone_input')
        driver.quit()
    except:
        True
        

    driver.refresh()
    driver.implicitly_wait(10)

    em = al()
    md = random_char(15)
    try:
        driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/button[1]').click()
    except:
        driver.quit()
        new()
    driver.find_element_by_xpath('//*[@id="register_form_mail_input"]').send_keys(em)
    driver.find_element_by_xpath('//*[@id="register_form_username_input"]').send_keys(random_char(9))
    driver.find_element_by_xpath('//*[@id="register_form_password_input"]').send_keys(md)
    genre = ActionChains(driver) 
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN)
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN*N)
    genre.perform()

    
    response = send_captcha(driver.find_element_by_class_name("g-recaptcha").get_attribute("data-sitekey"),driver)
    
    driver.execute_script('document.getElementById("g-recaptcha-response").innerHTML = "%s"' % response)
    sleep(1)
    # input("Press Enter to continue...")
    print("ok")
    driver.find_element_by_xpath('//*[@id="register_form_submit"]').click()  
    sleep(5)

    try:
        driver.find_element_by_class_name('onboarding-screen-artist-item').click()
        style(driver)
    except:
        driver.quit()
        new()
    new()    
    music(driver,v)

def new():
  
    Thread(target = driver).start()


    
def l(driver):
    genre = ActionChains(driver) 
    genre.send_keys(Keys.SPACE)
   
    genre.perform()
    try:
        driver.find_element_by_class_name('svg-icon-next').click()
       
        driver.find_element_by_class_name('svg-icon-shuffle').click()
       
        driver.find_element_by_class_name('svg-icon-next').click()

        
        
    except:
        False
    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        False      
while p<3:
    Thread(target = driver).start()
    sleep(15)
    p=p+1