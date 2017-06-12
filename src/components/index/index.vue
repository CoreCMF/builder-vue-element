<template>
  <div class="layout-content-main">

    <el-tabs type="card" v-if="data.tabs" v-model="tabIndex" @tab-click="handleTabsClick">
      <el-tab-pane v-for="(tabs,key) in data.tabs" :key="key" :name="key.toString()" :label="tabs">
        <bve-form v-if="data.form"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      data: {
        tabs:null,
      },
      tabIndex:null
    }
  },
  created () {
    this.initData()
  },
  watch: {
    $route: 'initData',
  },
  methods: {
    initData() {
      let _this = this
      let apiUrl = this.$route.meta.apiUrl
      let thenFunction = function(Response) {
        _this.data = Response.data
      }
      this.$store.dispatch('getData',{ apiUrl, thenFunction }) //获取当前路由数据
    },
    handleTabsClick(tab, event){
        console.log(tab.name, event);
    },
  }
}
</script>
<style lang="scss" scoped>
  .layout-content-main{
    min-height: 300px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
  }
</style>
