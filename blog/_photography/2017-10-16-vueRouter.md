---
date: 2017- 10- 16
tag: 
 - vueRouter
author: xweb
location: Alanbang
---

# vueRouter

name | age
---- | ---
声明式 | 编程式
`< router-link :to="...">` |  `router.push(...)`

params 和 name 搭配， 和 path 搭配会不生效。如:
```js
const userId = '123'
router.push({ name: 'user', params: { userId }}) // -> /user/123
router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
router.push({ path: '/user', params: { userId }}) // -> /user

// 这跟代码调用router-link  是一回事：  
// 要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：

<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

**全局路由守卫**
1. 前置守卫
```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```