
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
        "browserName": "opera",
        "version": "66.0",
        "enableVNC": True,
        "enableVideo": False
        
    }
    ip=socket.gethostbyname(socket.gethostname())
    command = "http://{}:4444/wd/hub".format(ip)
       
    options = webdriver.ChromeOptions()
    # options.add_extension('D:\\androiddeezerapp\\AC.zip')
    options.add_extension('/root/deezer/AC.zip')
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
    
    

    
def music(driver,v):
    
    p=0
    x=0
    driver.implicitly_wait(10)
    try:
        driver.find_element_by_class_name('states-button-label').click()
        driver.find_element_by_class_name('svg-icon-shuffle').click()
        
        driver.find_element_by_class_name('svg-icon-next').click()
    except:
        False
        
 
    while p<5:
        while x<32:
            
            try:
                WebDriverWait(driver, 50).until(lambda x: x.find_element_by_class_name('slider-counter-current'))
            except:
                driver.refresh()
                driver.switch_to.alert.accept()     
            e = driver.find_element_by_class_name("slider-counter-current").text
            s=e.split(':')
            x=int(s[1])
            sleep(1)
    
                           
        try:
            WebDriverWait(driver, 50).until(lambda x: x.find_element_by_class_name('svg-icon-next'))  
            driver.find_element_by_class_name('svg-icon-next').click()
            
        except:
            try:
                driver.refresh()
                driver.switch_to.alert.accept() 
                music(driver,v)
            except:
                False
        
        p=p+1
       
    try:
        driver.refresh()
        driver.switch_to.alert.accept()
    except:
        music(driver,v)
    WebDriverWait(driver, 30).until(lambda x: x.find_element_by_class_name('logo-deezer-black'))    
  
  
   
    now = datetime.now()
    dt_string = now.strftime("%H:%M")
    v=v+1
   
    print("date and time ={} et vues {}".format(dt_string,v))

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
    launch(driver,em,mdp)

    
    
    
    
    

def launch(driver,em,mdp):
    v=0
    m=0
    driver.get("https://www.deezer.com/fr/login")
    driver.implicitly_wait(10)
        
    driver.refresh()
    # sleep(100)
    driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/button[1]').click()
    driver.find_element_by_id('login_mail').send_keys(em)
    driver.find_element_by_id('login_password').send_keys(mdp)
    
    
    try:
        WebDriverWait(driver, 300).until(lambda x: x.find_element_by_class_name('logo-deezer-black'))  
    except:
        driver.delete_all_cookies()
        driver.refresh()
        launch(driver,em,mdp)             
    new()
    driver.get("https://www.deezer.com/fr/album/60566312")
    music(driver,v)
   
    
   
   
    

def new():
    Thread(target = driver).start()
  

p=0
while p<1:
    Thread(target = driver).start()
    Thread(target = driver).start()
    Thread(target = driver).start()
    Thread(target = driver).start()    
    p=p+1











