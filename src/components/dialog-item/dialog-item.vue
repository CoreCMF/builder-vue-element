<template>
  <el-dialog
   size="large"
   :title="title"
   v-model="dialogVisible"
   @close="headerColse"
  >
    <bve-index-item
      v-if="dialogVisible"
      :apiUrl="apiUrl"
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
      dialogVisible: true
    };
  },
  props: {
    apiUrl:{},
    postData:{}
  },
  methods: {

    /**
     * [headerColse 关闭dialog时自动清空 apiurl]
     */
    headerColse() {
      this.$store.dispatch('deleteDialog',this.apiUrl)
    },
    headerSetTitle(title) {
      this.title = title
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
