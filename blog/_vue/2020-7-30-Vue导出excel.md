---
date: 2020- 07- 30
tag: 
  -导出excel
author: xweb
location: Alanbang
---
## 导出excel
### 前端做
1. 安装
`npm install xlsx file-saver -S`
`npm install script-loader -S -D`

2. 在 main.js种引入封装好的 excel.js
```js
1. 在main.js中引入
import excel from '@/excel.js'
Vue.use(excel)

2. excel.js代码如下

const formatJson = (filterVal, jsonData) => {
  return jsonData.map(v => filterVal.map(j => v[j]))
}

export default {
  install(Vue) {
    Vue.prototype.$exportExcel = function (tHeader, filterVal, exportList, excelName, multipleSelectionList) {
      if (multipleSelectionList.length == 0) {
        require.ensure([], () => {
          const { exportjsontoexcel } = require('../excel/Export2Excel')
          for (let i = 0; i < exportList.length; i++) {
            exportList[i].index = i + 1 + ''
          }
          const data = formatJson(filterVal, exportList)
          exportjsontoexcel(tHeader, data, excelName)
        })
      } else {
        require.ensure([], () => {
          const { exportjsontoexcel } = require('../excel/Export2Excel')
          for (let i = 0; i < multipleSelectionList.length; i++) {
            multipleSelectionList[i].index = i + 1 + ''
          }
          const data = formatJson(filterVal, multipleSelectionList)
          exportjsontoexcel(tHeader, data, excelName)
        })
      }
    }
  }
}
```
3. 在页面上使用
```js
this.$exportExcel( 
  ['日期', '遊戲盈利', '直播收入/家族分成', '直播盈利', '總盈利'],
  ['id', 'title', 'author', 'pageviews', 'displayTime'],
  this.tableData, '資金報表excel', []
)
```

### 后台给接口
1. 方法一：直接给个链接地址 ，前端直接跳这个地址就可以导出
2. 方法二： 返回一个bold流
```js
1. 导出封装函数
export const downloadFun = function (data, name, type = 'application/vnd.ms-excel', nameType = '.xls') {
  const blob = new Blob([data], { type: type })
  const fileName = name + nameType
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a')
    elink.download = fileName
    elink.style.display = 'none'
    elink.href = URL.createObjectURL(blob)
    document.body.appendChild(elink)
    elink.click()
    URL.revokeObjectURL(elink.href) // 释放URL 对象
    document.body.removeChild(elink)
  } else { // IE10+下载
    navigator.msSaveBlob(blob, fileName)
  }
}
2. 在页面上使用
请求接口成功后直接调用上面函数
downloadFun(res.data,'資金報表excel')
```

