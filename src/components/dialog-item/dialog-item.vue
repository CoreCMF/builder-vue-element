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
    }
  },
  watch: {
    apiUrl:'onVisible',
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
      this.$store.dispatch('dialogApiUrl',null)
    },
    headerSetTitle(title) {
      this.title = title
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
