<template>
  <el-dialog size="large" title="标题" v-model="dialogVisible">
    dialog内容
  </el-dialog>
</template>

<script>
export default {
  name: 'bve-dialog-item',
  data() {
    return {
      dialogVisible: true,
    };
  },
  computed: {

  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>

</style>
