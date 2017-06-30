<template>
  <el-dialog
   size="large"
   :title="title"
   v-model="dialogVisible"
   @close="headerColse"
  >
    <bve-item-index
      v-if="dialogVisible"
      :apiUrl="currentApiUrl"
      :postData="postData"
      @set-title="headerSetTitle"
    />
  </el-dialog>
</template>

<script>
export default {
  name: 'bve-dialog-item',
  data() {
    return {
      title: null,
      dialogVisible: false,
      currentApiUrl: null
    };
  },
  computed: {
    apiUrl() {
      return this.$store.state.dialog.apiUrl
    },
    postData() {
      return this.$store.state.dialog.postData
    },
    callbackData() {
      return this.$store.state.callbackData
    },
  },
  watch: {
    apiUrl:'onVisible',
    callbackData: 'thenFunction'
  },
  methods: {
    /**
     * [onVisible dialog开启]
     * @return {[type]} [传入apiurl 不为空时自动打开]
     */
    onVisible() {
      if (this.apiUrl) {
        this.currentApiUrl = this.apiUrl
        this.dialogVisible = true
      }
    },
    /**
     * [headerColse 关闭dialog时自动清空 apiurl]
     */
    headerColse() {
      let apiUrl = null
      this.$store.dispatch('dialog',{apiUrl})
    },
    headerSetTitle(title) {
      this.title = title
    },
    thenFunction() {
      this.dialogVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
