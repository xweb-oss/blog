---
date: 2020- 04- 11
tag: 
  -axios中得cookie配置
author: xweb
location: Alanbang
---
## axios的cookie跨域以及相关配置

### axios的cookie跨域以及相关配置
> 说明 : 并不是因为axios请求不能携带cookie，axios的原理和ajax一样，只不过axios引入了promise，之所以不能携带cookie，是因为后端使用了CORS解决了跨域，这种方式默认是不携带cookie的，所以需要设置这样一个参数.

1.  带cookie请求 :axios默认是发送请求的时候不会带上cookie的，需要通过设置withCredentials: true来解决。 这个时候需要注意需要后端配合设置：
> header信息 Access-Control-Allow-Credentials:true
> Access-Control-Allow-Origin不可以为 '*'，因为 '*' 会和Access-Control-Allow-Credentials:true 冲突，需配置指定的地址

2. 如果后端设置 Access-Control-Allow-Origin: '*', 会有如下报错信息
> Failed to load http://localhost:8090/category/lists: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'. Origin 'http://localhost:8081' is therefore not allowed access. The credentials mode of requests initiated by the XMLHttpRequest is controlled by the withCredentials attribute.

3. 后端配置缺一不可，否则会出错，贴上我的后端示例：
```js
const express = require('express')
const app = express()
const cors = require('cors') // 此处我的项目中使用express框架，跨域使用了cors npm插件

app.use(cors{
            credentials: true, 
            origin: 'http://localhost:8081', // web前端服务器地址
            // origin: '*' // 这样会出错
        })
```

4. 我的前端项目代码的axios配置
```js
axios统一配置，会很好的提升效率，避免bug，以及定位出bug所在（方便捕获到error信息）

建立一个单独的fetch.js封装axios请求并作为方法暴露出来

import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // node环境的不同，对应不同的baseURL
  timeout: 5000, // 请求的超时时间
  //设置默认请求头，使post请求发送的是formdata格式数据// axios的header默认的Content-Type好像是'application/json;charset=UTF-8',我的项目都是用json格式传输，如果需要更改的话，可以用这种方式修改
  // headers: {  
    // "Content-Type": "application/x-www-form-urlencoded"
  // },
  withCredentials: true // 允许携带cookie
})

// 发送请求前处理request的数据
axios.defaults.transformRequest = [function (data) {
  let newData = ''
  for (let k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]

// request拦截器
service.interceptors.request.use(
  config => {
    // 发送请求之前，要做的业务
    return config
  },
  error => {
    // 错误处理代码
    
    return Promise.reject(error)
  }
)

// response拦截器
service.interceptors.response.use(
  response => {
    // 数据响应之后，要做的业务
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service


如下所示，如果需要调用ajax请求

import fetch from '@/utils/fetch'
fetch({
  method: 'get',
  url: '/users/list'
})
  .then(res => {
  cosole.log(res)
})
```