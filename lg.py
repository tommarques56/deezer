
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
        proxy_handler = urllib.request.ProxyHandler({'https': pip})
        opener = urllib.request.build_opener(proxy_handler)
        opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        urllib.request.install_opener(opener)
        req=urllib.request.Request('https://www.deezer.com/fr/register')  # change the URL to test here
        sock=urllib.request.urlopen(req)
    except urllib.error.HTTPError as e:
        print('Error code: ', e.code)
        return e.code
    except Exception as detail:
        print("ERROR:", detail)
        return True

    return False

def user():
    ua = UserAgent()
    userAgent = ua.random
    print(userAgent)
    return userAgent

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
        "enableVideo": True
        
    }
    ip=socket.gethostbyname(socket.gethostname())
    command = "http://{}:4444/wd/hub".format(ip)
       
    options = webdriver.ChromeOptions()
    # options.add_extension('D:\\androiddeezerapp\\AC.zip')
    # options.add_extension('/root/deezer/az.zip')
    # options.add_argument(f'user-agent={user()}')
    # options.add_argument('--proxy-server=%s' % proxy())
       

    # driver = webdriver.Chrome(options=options)
    driver = webdriver.Remote(command_executor=command, desired_capabilities=capabilities, options=options)
    count(driver)

def close(driver):
    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        return False

def style(driver):
    v=0
   
    driver.find_element_by_class_name('onboarding-screen-search-btn').click()


    close(driver)
        
    try:
        driver.find_element_by_class_name('sidebar-nav-item')
    except:
        style(driver)
        print("style")
    driver.get("https://www.deezer.com/fr/album/60566312")    
    
 
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






    
def music(driver,v):
    
    p=0
    x=0
    l(driver)
    print("1")
    
 
    while p<5:
        x=0
        while x<31:
            
            try:
                WebDriverWait(driver, 10).until(lambda x: x.find_element_by_class_name('slider-counter-current'))
                e = driver.find_element_by_class_name("slider-counter-current").text
                s=e.split(':')
                x=int(s[1])
                sleep(4)
                print("2")
            except:
                print("3")
                driver.refresh()
                try:
                    driver.switch_to.alert.accept() 
                except:
                    music(driver,v)
                music(driver,v)   
    
                           
        try:
            print("4")
            WebDriverWait(driver, 40).until(lambda x: x.find_element_by_class_name('svg-icon-next'))  
            driver.find_element_by_class_name('svg-icon-next').click()
            
        except:
            print("5")
            music(driver,v)

        
        p=p+1
       
    try:
        print("6")
        driver.refresh()
        
        try:
            print("7")
            driver.switch_to.alert.accept() 
        except:
            print("8")
            music(driver,v)
        WebDriverWait(driver, 20).until(lambda x: x.find_element_by_class_name('logo-deezer-black'))    
    except:
        print("9")
        music(driver,v)
    
  

    print("10")
    music(driver,v)
  


def file_lengthy(fname):
        with open(fname) as f:
                for i, l in enumerate(f):
                        pass
        return i + 1

    
def count(driver):
   
    f = open("/root/login.txt","r+")
    num_lines = sum(1 for line in f)
    f.close()
    f = open("/root/login.txt","r+")
    N = random.randrange(0,num_lines-1)
    
    lines=f.readlines()
    l=lines[N]
    s=l.split(':')
    em =s[0]
    md=s[1]
    md2=md.split('\n')
    mdp=md2[0]
    
    
    
    print("email : {}  mdp : {}".format(em,mdp))
    f.close()
    launch(driver,em,mdp,N)

    

    
# def send_captcha():
    
    # api_key = "t8jzfb2xcjfwhw4qkgxmc9y7qn3ymvdh"
    # send_url = "https://azcaptcha.com/in.php?key={}&method=userrecaptcha&version=v3&action=verify&min_score=0.2&googlekey=6Lev7QYUAAAAAP-fd0U1UoHz9FwgWesPlARPj3Pr&pageurl=https://www.deezer.com/fr/login".format(api_key)
    # request = get(send_url)
    # id = request.text.split('|')[1]  
    # get_url = "http://azcaptcha.com/res.php?key={}&action=get&id={}".format(api_key,id)
    # request = get(get_url) 
    # while request.text.split('|')[0] != "OK":
        # sleep(2)
        # request = get(get_url) 
    
    # t = request.text.split('|')[1]
    
    # return t  

def send_captcha(driver):
    
    api_key = "t8jzfb2xcjfwhw4qkgxmc9y7qn3ymvdh"
    # send_url = "https://azcaptcha.com/in.php?key={}&method=userrecaptcha&googlekey=6Lev7QYUAAAAAP-fd0U1UoHz9FwgWesPlARPj3Pr&pageurl=https://www.deezer.com/fr/login".format(api_key)
    send_url = "https://azcaptcha.com/in.php?key={}&method=userrecaptcha&version=v3&action=verify&min_score=0.2&googlekey=6Lev7QYUAAAAAP-fd0U1UoHz9FwgWesPlARPj3Pr&pageurl=https://www.deezer.com/fr/login".format(api_key)
    request = get(send_url)
    while request.text == "ERROR_NO_SLOT_AVAILABLE":
        sleep(30)
        driver.refresh()
    id = request.text.split('|')[1]  
    get_url = "http://azcaptcha.com/res.php?key={}&action=get&id={}".format(api_key,id)
    request = get(get_url) 
    
    while request.text.split('|')[0] != "OK":
        sleep(10)
        request = get(get_url) 
        if request.text.split('|')[0] == "ERROR_CAPTCHA_UNSOLVABLE":
            driver.quit()
            new()
    t = request.text.split('|')[1]
    print(t)
    
    return t        
    

def launch(driver,em,mdp,N):
    v=0
    m=0
    driver.get("https://www.deezer.com/fr/login")
    driver.implicitly_wait(10)
        
    driver.refresh()
    # sleep(100)
    try:
        driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/button[1]').click()
    except:
        True
    driver.find_element_by_id('login_mail').send_keys(em)
    driver.find_element_by_id('login_password').send_keys(mdp)
    response = send_captcha(driver)
    
    driver.execute_script('document.getElementById("g-recaptcha-response").innerHTML = "%s"' % response)
    sleep(2)
    driver.find_element_by_id('g-recaptcha-response')
    driver.find_element_by_id('login_form_submit').click()
 
 
    sleep(500)
    driver.get("https://www.deezer.com/fr/album/60566312")
    close(driver)
    new()
    music(driver,v)
    
   
    
def delete(N):

    with open("/root/login.txt", "r") as infile:
        lines = infile.readlines()

    with open("/root/login.txt", "w") as outfile:
        for pos, line in enumerate(lines):
            if pos != N:
                outfile.write(line)


    infile.close()
    outfile.close()
   
    

def new():
    # Thread(target = driver).start()
    True

  

p=0
while p<1:
    Thread(target = driver).start()
    # Thread(target = driver).start()    

    p=p+1












