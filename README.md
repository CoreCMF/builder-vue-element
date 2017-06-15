# builder-vue-element

> a vue admin packages


## Build Setup
```
npm install builder-vue-element -D
npm install builder-vue -D
npm install container-vue-element -D
npm install element-ui -D

```
## 配置
1、引入builder-vue-element builder页面构建组件
```
import BuilderVueElement from 'builder-vue-element'
Vue.use(BuilderVueElement)
```
2、在builder-vue vuex中配置 容器组件
```
store.state.builderIndex = { template: '<bve-index/>' }
```
## 数据结构（必须）

### Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| select | 当用户手动勾选数据行的 Checkbox 时触发的事件 | selection, row |
| select-all | 当用户手动勾选全选 Checkbox 时触发的事件 | selection |
| selection-change | 当选择项发生变化时会触发该事件 | selection |
| cell-mouse-enter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cell-mouse-leave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cell-click | 当某个单元格被点击时会触发该事件 | row, column, cell, event |
| row-click | 当某一行被点击时会触发该事件 | row, event |
| row-dblclick | 当某一行被双击时会触发该事件 | row, event |
| header-click | 当某一列的表头被点击时会触发该事件 | column, event |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { column, prop, order } |
| current-change | 当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性 | currentRow, oldCurrentRow |

2、在config下面增加 topNavActive(默认激活顶部菜单)
```
{
  "config":{
    "topNavActive":"admin"
  }
}
```
3、apiUrl>topNav通信地址数据返回要求 例子如下:
  1、apiUrl 为侧栏数据通信地址
```
{
    "admin": {
        "name": "admin",
        "title": "系统",
        "icon": "fa fa-cog",
        "sort": 0,
        "apiUrl": "http://corecmf.dev/api/admin/nav/sidebar"
    },
    "cms": {
        "name": "cms",
        "title": "文章",
        "icon": "fa fa-archive",
        "sort": 1,
        "apiUrl": "http://corecmf.dev/api/cms/nav/sidebar"
    }
}
```
4、apiUrl>topNav => apiUrl 侧栏通信地址数据返回要求
 1、subMenus子菜单信息（可以多级）（包含subMenus的侧栏path自动失效）
 2、path 前端访问路径
```
{
    "0": {
        "title": "首页 Dashboard",
        "icon": "fa fa-dashboard",
        "path": "/admin/dashboard",
    },
    "1": {
        "title": "系统功能",
        "icon": "fa fa-cog",
        "path": "",
        "subMenus": {
            "2": {
                "title": "系统设置",
                "icon": "fa fa-wrench",
                "path": "/admin/system/system",
            },
        }
    },

}
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
