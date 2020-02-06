#!/usr/bin/python3
### BEGIN INIT INFO
# Provides: test.py
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5 
# Default-Stop:      0 1 6 
# Short-Description: coucou 
# Description: coucou 2 
### END INIT INFO
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
import time
import requests

import json

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


def random_char(y):
       return ''.join(random.choice(string.ascii_letters) for x in range(y))

N = random.randrange(18,45)

def al():
    e = "{}@gmail.com".format(random_char(20))    
    
    return e
    
    
def acp_api_send_request(driver, message_type, data={}):
        message = {
            # this receiver has to be always set as antiCaptchaPlugin
            'receiver': 'antiCaptchaPlugin',
            # request type, for example setOptions
            'type': message_type,
            # merge with additional data
            **data
        }
        # run JS code in the web page context
        # preceicely we send a standard window.postMessage method
        return driver.execute_script("""
        return window.postMessage({});
        """.format(json.dumps(message)))
    

def captcha(driver):
    
    WebDriverWait(driver, 300).until(lambda x: x.find_element_by_css_selector('.antigate_solver.solved'))
    
    
   
def user():
    ua = UserAgent()
    userAgent = ua.random
    print(userAgent)
    return userAgent

        
def creat(nb):
    
    t=0
    nb=nb
    capabilities = {
    "browserName": "chrome",
    "version": "79.0",
    "enableVNC": True,
    "enableVideo": False
    
}
    ip=socket.gethostbyname(socket.gethostname())
    
    command = "http://{}:4444/wd/hub".format(ip)
   
    options = webdriver.ChromeOptions()
    # options.add_argument(f'user-agent={user()}')
    # options.add_extension('D:\\androiddeezerapp\\AC.zip')
    options.add_extension('/root/deezer/AC.zip')
    # driver = webdriver.Chrome(options=options)
    driver = webdriver.Remote(command_executor=command, desired_capabilities=capabilities, options=options)
    driver.implicitly_wait(80)
    driver.get("https://www.deezer.com/fr/register") 
    
    sleep(2)
    
    
    try:
        driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/button[1]').click()
    except:
        print("")
    email = driver.find_element_by_xpath('//*[@id="register_form_mail_input"]')
    email.send_keys(al())
    sleep(1)
    name =  driver.find_element_by_xpath('//*[@id="register_form_username_input"]')
    name.send_keys(random_char(9))
    sleep(1)
    mdp =  driver.find_element_by_xpath('//*[@id="register_form_password_input"]')
    mdp.send_keys("0571Zezette")
    sleep(1)
    genre = ActionChains(driver) 
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN)
    sleep(1)
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN*N)
    # genre.send_keys(Keys.ENTER)
    genre.perform()
    
    try:
        captcha(driver) 
    except:
        print("ERROR THREAD {} à {}".format(threading.current_thread().ident,time.asctime()))
        driver.quit()
        Thread(target = creat, args=[nb]).start()
        
   
    sleep(5)
   
    
    driver.find_element_by_xpath('//*[@id="register_form_submit"]').click()
   
        
       
    driver.implicitly_wait(60)
    try:
        driver.find_element_by_class_name('onboarding-screen-artist-item').click() #love artist
        driver.find_element_by_xpath('/html/body/div[1]/div/div[1]/div[2]/div[1]/div[3]/div/button').click() #love artist ok
        
        
    except:
       print("")
       
       
       
       
    try:
        driver.find_element_by_class_name('onboarding-channel').click() #style
        driver.find_element_by_class_name('onboarding-btn').click() #valide style
        driver.find_element_by_class_name('onboarding-btn-next').click() #passer reste conf
        
    except:
        print("")


    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        print("")
   
    driver.get("https://www.deezer.com/fr/album/60566312")

    driver.implicitly_wait(40)
   
    play = ActionChains(driver) 
    play.send_keys(Keys.SPACE)
    play.perform()
    

    
    if nb>0:
        Thread(target = creat, args=[nb-1]).start()
        
    sleep(5)
    n=0
    while True:
        
        
        x=0
        while x<31:
            sleep(5)
            e = driver.find_element_by_class_name("slider-counter-current").text
            s=e.split(':')
            x=int(s[1])
        try:
                
            driver.find_element_by_class_name('svg-icon-next').click()
            print("NOMBRE DE VUE pour {}: {}".format(threading.current_thread().ident,n))
            n=n+1
                
        except:
            print("ERROR THREAD {} à {} avec {} vue(s)".format(threading.current_thread().ident,time.asctime(),n))
            driver.quit()
            Thread(target = creat, args=[nb]).start()    


p=0

while p<20:
    Thread(target = creat, args=[0]).start()
    p=p+1

