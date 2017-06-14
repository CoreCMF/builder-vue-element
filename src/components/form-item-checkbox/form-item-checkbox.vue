<template>
  <el-form-item :label="config.label" :prop="config.name">
      SADA
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-checkbox',
  props: {
    data: {
        type: '',
        default: ''
    },
    config: {
        type: Object,
        default: ''
    },
  },
  created() {
    this.initData();//初始化页面数据
  },
  methods: {
    initData() {
        // console.log(this.config)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
