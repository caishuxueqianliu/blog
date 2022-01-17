---
title: pm2启动端口占用
date: 2019-10-01
tags:
 - pm2
categories:
 -  node
---
# pm2启动端口占用
linux服务器下通过pm2启动node项目，经常会出现端口占用问题，  
之前每次都需要 netstat -anp |grep 3000 查找进程id   
然后kill -9 进程id  
觉得很是麻烦，所以用node调用python脚本解决  
``` js
var spawn = require('child_process').spawn; 
  free = spawn('python', ['../util.py']);
  free.on('exit', function (code, signal) { 
        app.listen(3000, res=>() {
        });
    });
  // 捕获标准错误输出并将其打印到控制台 
    free.stderr.on('data', function (data) { 
    console.log(data.toString()); 
    }); 
```


``` py
# -* - coding: UTF-8 -* -
import os
if __name__ == '__main__':
    a=os.popen('netstat -anp |grep 3000').readlines()
    if (a):
        a="/".join(a)
        index=a.find('/node')
        index1=a.find('LISTEN')
        port=a[index1+6:index]
        port=port.strip()
        os.system('kill -9 '+port)
```