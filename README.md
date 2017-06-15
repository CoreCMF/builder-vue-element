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

### Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | — | — |
| height | Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式。  | string/number | — | — |
| stripe | 是否为斑马纹 table | boolean | — | false |
| border | 是否带有纵向边框 | boolean | — | false |
| fit | 列的宽度是否自撑开 | boolean | — | true |
| show-header | 是否显示表头 | boolean | - | true |
| highlight-current-row | 是否要高亮当前行 | boolean | — | false |
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function(row, index)/String | — | — |
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function(row, index)/Object | — | — |
| row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的 | Function(row)/String | — | — |

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
