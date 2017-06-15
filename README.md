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
| apiUrl | form项目使用到的通信url 。| Object | — | — | 是 | [apiUrl](#items-form-apiurl) |
| config | form项目配置参数 。| Object | — | — | 是 | [config](#items-form-config) |
| data   | form项目渲染数据（由多个数据对象构成的数组）| array | — | — | 是 | [data](#items-form-data) |
| tabs   | form项目使用tab标签页分组显示form 。| array/Object | — | — | — | — |
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
#### items form apiUrl
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| submit | form项目数据提交保持通常地址 。| string | — | — | 是 | - |
```
{
  'submit':'http://corecmf.dev/api/admin/system/system/update',
}
```
#### items form config
具体参考饿了么框架form表单使用说明 [飞机票](https://github.com/ElemeFE/element/blob/dev/examples/docs/zh-CN/form.md#form-attributes)

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| labelWidth | 表单域标签的宽度，所有的 form-item 都会继承 form 组件的 labelWidth 的值 。| string | — | — | - | - |
| inline | 行内表单模式 。| boolean | - | false | - | - |
| labelPosition | 表单域标签的位置 。| string | right/left/top | right | - | - |
| labelSuffix | 表单域标签的后缀 。| string | — | — | - | - |
```
{
  labelWidth:"100px",
  inline:false,
  labelPosition:"right",
  labelSuffix:"",
}
```
#### items form data
由于form item很多下面是公共部分说明
具体form组件参数请自行 饿了么ui参考 [飞机票](http://element.eleme.io/#/zh-CN/component/radio)

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| label | 标签文本 。| string | — | — | 是 | - |
| name | 字段名 。| string | — | — | 是 | - |
| type | form item 元素样式(具体样式类型数据请飞机票) 。| string | text/checkbox/switch/number | — | 是 | [text](#items-form-data-text) [checkbox](#items-form-data-checkbox) [switch](#items-form-data-switch) [number](#items-form-data-number) |
| value | 数据值 。| string/number/boolean | — | — | 是 | - |
| group | 使用tabs数据分组字段 。| string | — | — | form启用tabs必填 | - |
| placeholder | 输入框占位文本 。| string | — | — | - | - |
```
{
  'submit':'http://corecmf.dev/api/admin/system/system/update',
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
