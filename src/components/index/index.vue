<template>
  <div class="flex-container">
    <div class="flex-item" v-for="(item,key) in data.items">
      <bve-form  :data="item"  v-if="item.type == 'form'"/>
      <bve-table :data="item"  v-if="item.type == 'table'"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bve-index',
  data() {
    return {
      data: null,
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
      this.initData()
      let _this = this
      let apiUrl = this.$route.meta.apiUrl
      let thenFunction = function(Response) {
        _this.data = Response.data
      }
      let catchFunction = function(Error){
      }
      this.$store.dispatch('getData',{ apiUrl, thenFunction, catchFunction}) //获取当前路由数据
    },
    /**
     * [initData 数据初始化]
     * @return {[type]} [description]
     */
    initData() {
      this.data = {
        items:null,
      }
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
    margin: 5px;
    background: #fff;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
  }
</style>
