<template>
  <div>
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
