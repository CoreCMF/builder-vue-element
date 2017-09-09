<template>
  <div class="flex-container">
    <bve-index-item
      :apiUrl="apiUrl"
      @set-title="headerSetTitle"
    />
    <bve-dialog-item/>
  </div>
</template>

<script>
export default {
  name: 'bve-index',
  computed: {
    apiUrl() {
      return this.$route.meta.apiUrl
    }
  },
  methods: {
    headerSetTitle(title) {
      if (title) {
          document.title = title //设置页面标题
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .flex-container{
    padding: 10px;
  }
</style>
