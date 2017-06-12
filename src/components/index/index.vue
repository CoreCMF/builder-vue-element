<template>
  <div class="layout-content-main">
    builder-vue-element-main
  </div>
</template>

<script>
export default {
  name: 'index',
  created () {

  },
  watch: {
      $route: 'initData',
  },
  methods: {
    initData() {
      let apiUrl = this.$route.meta.apiUrl
      this.$store.dispatch('getData',{ apiUrl }) //获取当前路由数据
    }
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
