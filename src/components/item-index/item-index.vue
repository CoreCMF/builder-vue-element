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
  name: 'bve-item-index',
  data() {
    return {
      data: null,
      tabIndex:null
    }
  },
  props: {
    apiUrl:{},
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
    postData() {
      return {
        tabIndex: this.tabIndex
      }
    },
    update() {
      return this.$store.state.update
    }
  },
  created () {
    this.initData()
  },
  watch: {
    apiUrl: 'initData',
    update: 'getData'
  },
  methods: {
    initData() {
      this.data = null
      this.tabIndex = null
      this.getData()
    },
    /**
     * [getData 获取api通信数据]
     */
    getData() {
      let _this = this
      let apiUrl = this.apiUrl
      let postData = this.postData
      let thenFunction = function(Response) {
        _this.data = Response.data
        _this.$emit('set-title', Response.data.title)//设置标题
      }
      let catchFunction = function(Error){
      }
      this.$store.dispatch('getData',{ apiUrl, postData, thenFunction, catchFunction}) //获取当前路由数据
    },
    handleTabsClick(tab, event) {
      this.tabIndex = tab.index
      this.getData()
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex-item{
    padding: 5px;
  }
</style>
