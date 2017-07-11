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
| config | 配置参数(layout 布局参数参考饿了么框架布局)  | Object | — | — | — | - |
| title | 页面标题  | string | — | — | — | 是 |
```
{
  'items':[
    0:{form Object},
    1:{table Object}
  ],
  'config':{
    'layout':{
      'xs': 24,
      'sm': 12,
      'md': 8,
      'lg': 6
    }
  }
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
| formStyle | 自定义form外部div样式 。| Object | — | — | - | - |
| formSubmit | 自定义form提交按钮 。| Object | — | — | - | [formSubmit](#items-form-data-formSubmit) |
| formReset | 自定义form刷新按钮 。| Object | — | — | - | [formReset](#items-form-data-formReset) |

```
{
  labelWidth:"100px",
  inline:false,
  labelPosition:"right",
  labelSuffix:"",
  formStyle: {
    max-width:'600px'
  }
}
```

#### items form data formReset

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| label | 标签文本 。| string | — | — | 是 | - |

```
{


}
```
#### items form data formSubmit

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| label | 标签文本 。| string | — | — | 是 | - |

```
{


}
```
#### items form data
由于form item很多下面是公共部分说明
具体form组件参数请自行 饿了么ui参考 [飞机票](http://element.eleme.io/#/zh-CN/component)

| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |
| label | 标签文本 。| string | — | — | 是 | - |
| name | 字段名 。| string | — | — | 是 | - |
| type | form item 元素样式(具体样式类型数据请飞机票) 。| string | text/checkbox/switch/number | — | 是 | [text](#items-form-data-text) [checkbox](#items-form-data-checkbox) [switch](#items-form-data-switch) [number](#items-form-data-number) |
| value | 数据值 。| string/number/boolean | — | — | 是 | - |
| group | 使用tabs数据分组字段 。| string/number | — | — | form启用tabs必填 | - |
```
{
  'label':'网站标题',
  'name': 'WEB_SITE_TITLE',
  'type': 'text',
  'value':'corecmf'
  'group':0

}
```
#### items-form-data-checkbox
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |-------- |
| options | 选项 | Object | — | — | 对象名必填 |[checkbox-options](#items-form-data-checkbox-options) |
```
{
  'userAgreement': {
    name: "我同意相关用户协议",
    eventEnable: ["submitButton"],
    eventDisable: ["resetButton","password"]
  },
}
```
#### items-form-data-checkbox-options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  | 必填值 | 飞机票 |
|---------- |-------------- |---------- |--------------------------------  |-------- |-------- |-------- |-------- |
| name | checkbox标题名 | string | — | — | — | — |
| eventEnable | 勾选后启用的form item name | Array | resetButton/submitButton等。还包括自动移字段 | — | — | — |
| eventDisable | 勾选后禁用的form item name | Array | resetButton/submitButton等。还包括自动移字段 | — | — | — |
```
{
  name: "我同意相关用户协议",
  eventEnable: ["submitButton","resetButton","username"],
  eventDisable: ["resetButton","password"]
},
```
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
