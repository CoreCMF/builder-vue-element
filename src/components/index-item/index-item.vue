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
      @tab-click="handleTabsClick"
      :tab-index="tabIndex"
      :data="item"
      v-if="item.type == 'form'"
      />
    <bve-table
      @tab-click="handleTabsClick"
      :tab-index="tabIndex"
      :data="item"
      v-if="item.type == 'table'"
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
      tabIndex:null
    }
  },
  props: {
    apiUrl:{},
    postData:{}
  },
  computed: {
    layout() {
      try{
        if (this.data.config.layout) {
          return this.data.config.layout
        }
      }catch(e){
        return {
          xs: 24,
          sm: 24,
          md: 24,
          lg: 24
        }
      }
    },
    currentPostData() {
      if (this.postData) {
        return this.postData
      }
      let postData = {
        tabIndex: this.tabIndex
      }
      Object.assign(postData,this.$store.state.postData)
      return postData
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
    callbackData:{
      handler: function (val, oldVal) {
        this.getData(this.currentPostData)
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
      let postData = null
      this.getData(postData)
    },
    /**
     * [getData 获取api通信数据]
     */
    getData(postData) {
      let _this = this
      let apiUrl = this.apiUrl
      let thenFunction = function(Response) {
        _this.data = Response.data
        _this.$emit('set-title', Response.data.title)//设置标题
      }
      let catchFunction = function(Error){
      }
      this.$store.dispatch('getData',{ apiUrl, postData, thenFunction, catchFunction}) //获取当前路由数据
    },
    handleTabsClick(tab, event) {
      this.$store.dispatch('initPostData')
      this.tabIndex = tab.index
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex-item{
    padding: 5px;
  }
</style>
