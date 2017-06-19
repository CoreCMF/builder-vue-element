<template>
  <div class="flex-container" v-if="data">
    <el-col
      :xs="layout.xs"
      :sm="layout.sm"
      :md="layout.md"
      :lg="layout.lg"
      class="flex-item"
      v-for="(item,key) in data.items"
      :key="key"
    >
      <bve-form  @tab-click="handleTabsClick" :tab-index="tabIndex" :data="item"  v-if="item.type == 'form'"/>
      <bve-table @tab-click="handleTabsClick" :tab-index="tabIndex" :data="item"  v-if="item.type == 'table'"/>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'bve-index',
  data() {
    return {
      data: null,
      tabIndex:null
    }
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
          sm: 12,
          md: 8,
          lg: 6
        }
      }
    },
    postData() {
      return {
        tabIndex: this.tabIndex
      }
    }
  },
  created () {
    this.getData()
  },
  watch: {
    $route: 'getData',
  },
  methods: {
    /**
     * [getData 获取api通信数据]
     * @return {[type]} [description]
     */
    getData() {
      let _this = this
      let apiUrl = this.$route.meta.apiUrl
      let postData = this.postData
      let thenFunction = function(Response) {
        _this.data = Response.data
        document.title = Response.data.title //设置页面标题
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
  .flex-container{
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
  }
  .flex-item{
    padding: 5px;
  }
</style>
