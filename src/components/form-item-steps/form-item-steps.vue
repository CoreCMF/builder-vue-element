<template>
  <div class="steps">
    <el-steps
      :space="space"
      :active="currentValue"
      :finish-status="finishStatus"
      :align-center="alignCenter"
      :center="center"
    >
      <el-step v-for="(title,key) in titles" :title="title" :key="key"></el-step>
    </el-steps>
  </div>
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
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    titles() {
      return this.config.title
    },
    center() {
      return (this.config.center!=null)? this.config.center: true
    },
    alignCenter() {
      return (this.config.alignCenter!=null)? this.config.alignCenter: true
    },
    finishStatus() {
      return (this.config.finishStatus!=null)? this.config.finishStatus: 'success'
    },
    space() {
      return (this.config.space!=null)? this.config.space: null
    }
  }
}
</script>
<style lang="scss" scoped>
  .steps{
    margin-bottom: 22px;
  }
</style>
