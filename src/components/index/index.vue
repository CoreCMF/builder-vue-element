<template>
  <div>
    <bve-index-item
      :apiUrl="apiUrl"
      @set-title="headerSetTitle"
    />
    <bve-dialog-item
      v-for="(postData,dialogaApiUrl,index) in currentDiaolog"
      :key="index"
      :postData="postData"
      :apiUrl="dialogaApiUrl"
    />
  </div>
</template>

<script>
export default {
  name: 'bve-index',
  computed: {
    currentDiaolog() {
      return this.$store.state.dialog
    },
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

</style>
