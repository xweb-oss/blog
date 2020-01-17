---
date: 2016-6- 9
tag: 
 - package.json
author: xweb
location: Alanbang
---

### package.json注意事项

在package.json里面dependencies依赖包的版本号前面的符号有两种，一种是~，一种是^：
1. ~ 的意思是匹配最近的小版本 比如~1.0.2将会匹配所有的1.0.x版本，但不匹配1.1.0
2. ^ 的意思是最近的一个大版本 比如1.0.2 将会匹配 所有 1.x.x, 但不包括2.x.x