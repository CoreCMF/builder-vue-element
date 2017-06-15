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
此处数据通过路由对应的apiUrl返回数据
### apiUrl json
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| items | 页面显示项目(可以是form、table等数据对象) 。| array | — | — | 是 | [formObject](#items-form-object) [tableObject](#items-table-object) |
| title | 页面标题  | string | — | — | — | 是 |
```
{
  'items':[
    0:{form Object},
    1:{table Object}
  ],
  'title': '页面标题'
}
```
#### items form Object
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| apiUrl | form项目使用到的通信url 。| Object | — | 是 | [apiUrl](#items-form-apiUrl) |
| config | form项目配置参数 。| Object | — | 是 | [config](#items-form-config) |
| data   | form项目渲染数据| array | — | — | 是 | [data](#items-form-data) |
| tabs   | form项目使用tab分组数据显示 。| array/Object | — | — | — | — |
| tabsGroup | data数据进行tab分组的依据字段 。| string | — | — | 使用tabs后必填 | — |
| type   | 项目类型 | string | form | form | 是 | — |
```
{
  'apiUrl':{ apiUrl Object },
  'config': '{ config Object },
  'data': [
    0:{data Object},
    1:{data Object}
  ],
  'tabs':{
    'index' :'title name',
    'index1':'title name1',
  },
  tabsGroup:'group',
  type:'form'
}
```
#### items table Object
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| apiUrl | form项目使用到的通信url 。| Object | — | — | — |
| config | form项目配置参数 。| Object | — | — | — |
| data   | form项目渲染数据| array | — | — | — | — |
| apiUrl | form项目使用到的通信结构url定义于此处 。| Object | — | — | — | — |
| apiUrl | form项目使用到的通信结构url定义于此处 。| Object | — | — | — | — |
```
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
