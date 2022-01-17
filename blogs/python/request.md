---
title: python爬取小说
date: 2021-07-23
tags:
 - python
categories:
 -  python
---
# python爬取小说
## 源码
::: tip
 目前需要手动输入想要下载的小说的主页（笔趣阁），后续优化成 携带小说名参数 自动下载，  
 以及连接web页面和服务端相关内容，数据库管理
:::
``` py
# -*- coding: utf-8 -*-
import requests
import io
from lxml import etree

path = './test/'

def get_text(url,name):
    r = requests.get(url)
    print(r.status_code)
    if(r.status_code == 200):
        r.encoding = 'utf-8'
        selector = etree.HTML(r.text)
        #print(r.text)
        #获取文章标题
        # title = selector.xpath('/html/head/title/text()')
        title = selector.xpath('//*[@class="bookname"]/h1/text()')
        if(len(title)):
            #print(title)
            print(title[0])
            #获取小说正文内容
            text = selector.xpath('//*[@id="content"]/text()')
            #print(text.decode('unicode_escape'))
            with io.open(path + name+'.txt', 'a+', encoding = 'utf-8') as f:
                f.write(title[0]+'\n')
                for i in text:
                    f.write(u'{}'.format(i))
          
if __name__ == '__main__':

    baseUrl = 'https://www.xbiquge.la'
    url =  'https://www.xbiquge.la/0/10489/'
 
   
    headers = {'User-Agent': 'Mozilla/5.0'}
    r = requests.get(url,headers=headers)
    r = requests.get(url)
    r.encoding = 'utf-8'
    selector = etree.HTML(r.text)

    name=selector.xpath('//*[@id="info"]/h1/text()')[0]  
    length=len(selector.xpath('//*[@id="list"]/dl/dd'))
    xpaths=['//*[@id="list"]/dl/dd[{}]/a/@href'.format(i) for i in range(1,length+1)]
    urls=[]
    for i in xpaths:
        urls.append(baseUrl+selector.xpath(i)[0])
    for url in urls:
        print(url)
        get_text(url,name)



```
