
1. snabbdom库是DOM库,不能在node.js环境运行,
需要搭建webpack和webpack-dev-sercer开发环境

2. 必须安装最新版的 webpack@5,因为webpack@4没有读取身份证(package.json)中 exports 的能力。

3. npm i -D webpack@5 webpack-cli@3 webpack-dev-server@3


snabbdom 官方 git    ' http://github.com/snabbdom/snabbdom'