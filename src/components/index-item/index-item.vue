<template>
<el-row v-if="data">
  <el-col
    :xs="layout.xs"
    :sm="layout.sm"
    :md="layout.md"
    :lg="layout.lg"
    class="flex-item"
    v-for="(item,key) in data.items"
    :key="key"
  >
    <bve-form
      v-if="item.type == 'form'"
      @tab-click="handleTabsClick"
      :tab-index="tabIndex"
      :data="item"
      @postDataChange="handlePostDataChange"
      />
    <bve-table
      v-if="item.type == 'table'"
      @tab-click="handleTabsClick"
      :tab-index="tabIndex"
      :data="item"
      @postDataChange="handlePostDataChange"
      />
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'bve-index-item',
  data() {
    return {
      data: null,
      tabIndex:null,
      childPostData:{}
    }
  },
  props: {
    apiUrl:{},
    postData:{}
  },
  computed: {
    layout() {
      this.data.config = !this.data.config? [] : this.data.config
      return this.data.config.layout? this.data.config.layout: {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 24
      }
    },
    refresh() {
      return (this.data.config.refresh!=null)? this.data.config.refresh: true
    },
    currentPostData() {
      if (this.postData) {
        return Object.assign(this.postData, this.childPostData)
      }
      return this.childPostData
    },
    callbackData() {
      return this.$store.state.callbackData
    }
  },
  created () {
    this.initData()
  },
  watch: {
    apiUrl: 'initData',
    /**
     * [callbackData 刷新refresh关闭时直接返回数据对象的 对下一步数据进行渲染而 ]
     * @type {Object}
     */
    callbackData:{
      handler: function (val, oldVal) {
        this.refresh? this.getData(this.currentPostData): this.setData(val)
      },
      deep: true
    },
    currentPostData:{
      handler: function (val, oldVal) {
        this.getData(val)
      },
      deep: true
    }
  },
  methods: {
    initData() {
      this.data = null
      this.getData(this.currentPostData)
    },
    /**
     * [getData 获取api通信数据]
     */
    getData(postData) {
      let apiUrl = this.apiUrl
      let thenFunction = data => {
        this.setData(data)
        this.$emit('set-title', data.title)//设置标题
      }
      this.$store.dispatch('getData',{ apiUrl, postData, thenFunction}) //获取当前路由数据
    },
    handleTabsClick(tab, event) {
      this.tabIndex = tab.name
      this.$set(this.childPostData,'tabIndex',tab.name)
    },
    //设置页面data数据
    setData(data){
      this.data = data
    },
    handlePostDataChange(key,val) {
      this.$set(this.childPostData,key,val)
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex-item{
    padding: 5px;
  }
</style>
