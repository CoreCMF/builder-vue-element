<template>
    <div>
        <bve-index-item
          :apiUrl="apiUrl"
          @set-title="headerSetTitle"
        />
        <bve-dialog-item
          v-if="currentDiaolog"
          v-for="(postData,dialogaApiUrl,key) in currentDiaolog"
          :key="dialogaApiUrl"
          :postData="postData"
          :apiUrl="dialogaApiUrl"
        />
    </div>
</template>

<script>
export default {
  name: 'bve-index',
  computed: {
    apiUrl() {
      return this.$route.meta.apiUrl
    },
    currentDiaolog() {
      return _.isEmpty(this.$store.state.dialog)? false: this.$store.state.dialog
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
