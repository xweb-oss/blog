---
date: 2017-9- 28
tag: 
 -  Object.keys方法之详解
author: xweb
location: Alanbang
---
### Object.keys方法之详解
一、语法
Object.keys(obj)
返回值：一个表示给定对象的所有可枚举属性的字符串数组
**二、处理对象，返回可枚举的属性数组**
```js
let person = {name:"张三",age:25,address:"深圳",getName:function(){}}
Object.keys(person) // ["name", "age", "address","getName"]

```
**三、处理数组，返回索引值数组**
```js
let arr = [1,2,3,4,5,6]
Object.keys(arr) // ["0", "1", "2", "3", "4", "5"]
```
**四、处理字符串，返回索引值数组**
```js
let str = "saasd字符串"
Object.keys(str) // ["0", "1", "2", "3", "4", "5", "6", "7"]
```
**五、常用技巧**
```js
let person = {name:"张三",age:25,address:"深圳",getName:function(){}}

Object.keys(person).map((key)=>{

　　person[key] // 获取到属性对应的值，做一些处理

}) 

事列2:
  import * as filters from './utils/filter'
  Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
  })

```
### Object.values方法之详解
1. 与Object.keys相反。
```js
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]
```

* hasOwnProperty检查一个对象中是否含有对应的属性
eg: 
```js
   var obj ={
     name:'苍老师',
     age:18,
   }
   obj.hasOwnProperty('name')  // true
   obj.hasOwnProperty('msg')  // false
```