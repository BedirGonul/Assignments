#!/usr/bin/env python
# coding: utf-8

# In[5]:


pip install requests


# In[6]:


import requests


# In[7]:


response = requests.get("https://api.nasa.gov/planetary/apod")


# In[8]:


print(response.status_code)


# In[9]:


response = requests.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")


# In[10]:


print(response.status_code)


# In[11]:


print(response.json())


# In[12]:


import json


# In[13]:


def jsonprint(obj):
    text = json.dumps(obj, sort_keys=True, indent=4)
    print(text)


# In[14]:


jsonprint(response.json())


# In[26]:


response = requests.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-03-26")


# In[27]:


print(response.status_code)


# In[28]:


jsonprint(response.json())


# In[ ]:


def main():
    

