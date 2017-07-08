<template>
<el-steps
  :space="100"
  :active="0"
  finish-status="success"
  :center="true"
>
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
</template>

<script>
export default {
  name: 'bve-form-item-steps',
  props: {
    config: {
        type: Object,
        default: ''
    },
    value:{}
  },
  computed: {
    currentValue: {
      get() {
        if (this.value!=null) {
           return this.value.toString()
        }
        return
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
