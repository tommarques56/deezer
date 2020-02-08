
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
p=0
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
    options.add_extension('/root/deezer/AC.zip')
       

    # driver = webdriver.Chrome(options=options)
    driver = webdriver.Remote(command_executor=command, desired_capabilities=capabilities, options=options)
    launch(driver)



def style(driver):
    v=0
    driver.find_element_by_class_name('onboarding-screen-artist-item').click()
    driver.find_element_by_class_name('onboarding-screen-search-btn').click()


    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        return False
        
    try:
        driver.find_element_by_class_name('sidebar-nav-item')
    except:
        style(driver)
        print("style")
    driver.get("https://www.deezer.com/fr/album/60566312")    
    music(driver,v)
    
    
def music(driver,v):
    
    p=0
    driver.implicitly_wait(50)
    
    driver.find_element_by_class_name('states-button-label').click()
    driver.find_element_by_class_name('svg-icon-shuffle').click()
    
    driver.find_element_by_class_name('svg-icon-next').click()
    
 
    while p<200:
        x=0
        while x<32:
            e = driver.find_element_by_class_name("slider-counter-current").text
            s=e.split(':')
            x=int(s[1])
            sleep(1)
            
                           
              
        driver.find_element_by_class_name('svg-icon-next').click()
        v=v+1
        print(v)
        
        p=p+1
        
    try:
        driver.find_element_by_class_name('states-button-action').click()
    except:
     return True
    music(driver,v)
    
    
    
    

def launch(driver):
    
    
    driver.get("https://www.deezer.com/fr/register")
    driver.implicitly_wait(10)

    em = al()
    md = random_char(15)
    driver.find_element_by_xpath('/html/body/div[4]/div/div[2]/button[1]').click()
    driver.find_element_by_xpath('//*[@id="register_form_mail_input"]').send_keys(em)
    driver.find_element_by_xpath('//*[@id="register_form_username_input"]').send_keys(random_char(9))
    driver.find_element_by_xpath('//*[@id="register_form_password_input"]').send_keys(md)
    genre = ActionChains(driver) 
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN)
    genre.send_keys(Keys.TAB)
    genre.send_keys(Keys.DOWN*N)
    genre.perform()

    WebDriverWait(driver, 300).until(lambda x: x.find_element_by_css_selector('.antigate_solver.solved'))    
    
    driver.find_element_by_xpath('//*[@id="register_form_submit"]').click()  
    sleep(5)

    try:
        driver.find_element_by_class_name('onboarding-screen-artist-item')
        style(driver)
    except:
        driver.find_element_by_id('register_form_global_error')
        driver.delete_all_cookies()
        driver.refresh()
        print("launch")
        launch(driver)   
        






while p<10:
    Thread(target = driver).start()
    p=p+1











