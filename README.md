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
### apiUrl 返回json结构
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| items | 页面显示项目(可以是form、table等数据对象) 。| array | — | — |
| title | 页面标题  | string | — | — |
```
{
  'items':[
    0:{form Object},
    1:{table Object}
  ],
  'title': '页面标题'
}
```
#### items form Object 结构
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| items | 页面显示项目(可以是form、table等数据对象) 。| array | — | — |
| title | 页面标题  | string | — | — |
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
