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
        return this.postData
      }
      return this.$store.state.postData
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
      let _this = this
      let apiUrl = this.apiUrl
      let thenFunction = function(Response) {
        _this.setData(Response.data)
        _this.$emit('set-title', Response.data.title)//设置标题
      }
      this.$store.dispatch('getData',{ apiUrl, postData, thenFunction}) //获取当前路由数据
    },
    handleTabsClick(tab, event) {
      this.tabIndex = tab.name
      this.$store.dispatch('initPostData')
      this.$store.dispatch('setPostData',{key:'tabIndex', value:tab.name})
    },
    //设置页面data数据
    setData(data){
      this.data = data
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex-item{
    padding: 5px;
  }
</style>
