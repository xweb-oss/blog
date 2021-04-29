---
date: 2020- 05- 18
tag: 
  -export,export default小技巧
author: xweb
location: Alanbang
---

## export,export default小技巧

1. export default
`export default fristmethos。或 export default function fristmethos(参数看需求而定){。。。}` 时,在使用的时候 `import fristmethos(这个名字可以自取) from '路径'`

2. export 
`export fristmethos({。。。})` 时,在使用的时候 `import { fristmethos } from '路径'`
或  
`export { fristmethos }` 

eg
```js
import createServe from './createServe.js'
const service = createServe()
export { createServe }
export default service

使用
import request, { createServe } from '@/plugins'
const LiveServe = createServe(process.env.VUE_APP_LIVE_API)
```



