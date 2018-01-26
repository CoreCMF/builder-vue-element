<template>
  <el-dialog
   :title="title"
   :visible.sync="dialogVisible"
   :width="width"
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
  computed: {
    width() {
      return this.$store.state.dialogWidth
    }
  },
  methods: {

    /**
     * [headerColse 关闭dialog时自动清空 apiurl]
     */
    headerColse() {
      this.$store.dispatch('deleteDialog',this.apiUrl)
      this.$store.dispatch('dialogWidth','618px')
    },
    headerSetTitle(title) {
      this.title = title
    }
  }
}
</script>
<style lang="scss">
    .el-dialog{
        max-width: 90%
    }
</style>
