
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

def close(driver):
    try:
        driver.find_element_by_xpath('//*[@id="modal-close"]').click() #close offre d'essai 9.99
        
    except:
        return False

def style(driver):
    v=0

    if driver.find_element_by_class_name('onboarding-screen-search-btn').is_displayed():
        driver.find_element_by_class_name('onboarding-screen-search-btn').click()
    else:
        driver.get("https://www.deezer.com/fr/album/60566312")
        if driver.find_element_by_class_name('onboarding-screen-artist-item').is_displayed():
            driver.find_element_by_class_name('onboarding-screen-artist-item').click()
            style(driver)
        


    close(driver)
        
 
    driver.get("https://www.deezer.com/fr/album/60566312")    
    
    
    
# def music(driver,em,md):
    
    # p=0
    # driver.implicitly_wait(50)
    
    # driver.find_element_by_class_name('states-button-label').click()
    
    
    # f = open("/root/login.txt","a+")
    # f.write("{}:{}\n".format(em,md))
    # f.close() 
    # # driver.get("https://www.deezer.com/fr")   
    # # pickle.dump( driver.get_cookies() , open("/root/cookies.pkl","wb"))
    # # driver.get("https://www.deezer.com/fr/signout")
    # # sleep(8)
    # # driver.get("https://www.deezer.com/fr")
    # # sleep(5)
    # # cookies = pickle.load(open("/root/cookies.pkl", "rb"))
    # # sleep(2)
    # # for cookie in cookies:
        # # driver.add_cookie(cookie)
    # # sleep(5)
    # # driver.refresh()
    # driver.quit()
    # new()
    
    
    
def music(driver,v):
    
    p=0
    x=0
    p=0
    driver.implicitly_wait(50)
    

    
    if driver.find_element_by_class_name('states-button-label').is_displayed():
        driver.find_element_by_class_name('states-button-label').click()
   
    if driver.find_element_by_class_name('svg-icon-shuffle').is_displayed():
        driver.find_element_by_class_name('svg-icon-shuffle').click()

    if driver.find_element_by_class_name('svg-icon-next').is_displayed():
        driver.find_element_by_class_name('svg-icon-next').click()

    if driver.find_element_by_class_name("slider-counter-current").is_displayed():
        while x<32:
              
            e = driver.find_element_by_class_name("slider-counter-current").text
            s=e.split(':')
            x=int(s[1])
            sleep(1)
    else:
        sleep(1)
        if driver.find_element_by_class_name('svg-icon-next').is_displayed():
            sleep(30)
            music(driver,v)
  
        else:
            driver.refresh()
            driver.get("https://www.deezer.com/fr/album/60566312")
            music(driver,v)

            
    if driver.find_element_by_class_name('svg-icon-next').is_displayed():
        driver.find_element_by_class_name('svg-icon-next').click()
        v=v+1
        p=p+1
        print(v)
    
    else:
        music(driver,v)
        
        

    if p%50==0 and driver.find_element_by_class_name('states-button-action').is_displayed():
        driver.find_element_by_class_name('states-button-action').click()
        if driver.find_element_by_class_name('states-button-label').is_displayed() and v<500:
            driver.refresh()
            driver.get("https://www.deezer.com/fr/album/60566312")
        elif driver.find_element_by_class_name('states-button-label').is_displayed() and v>500:
            driver.quit()
            Thread(target = driver).start()
            
            
            
    else:
        music(driver,v)
        


    music(driver,v)    
    
    
    

def launch(driver):

    v=0
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
    myelement = driver.find_element_by_xpath("//a[@id='form1']")

    if myelement.is_displayed():
        myelement.click()
    else:
        print (" ")





    if driver.find_element_by_class_name('onboarding-screen-artist-item').is_displayed():
        driver.find_element_by_class_name('onboarding-screen-artist-item').click()
        style(driver)
            
    elif driver.find_element_by_id('register_form_global_error').is_displayed():
        driver.delete_all_cookies()
        driver.refresh()
        print("launch")
        launch(driver)           
     
        
    music(driver,v)




while p<1:
    Thread(target = driver).start()
    
    p=p+1











