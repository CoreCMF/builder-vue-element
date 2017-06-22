<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input-number
    :min="config.min"
    :max="config.max"
    :step="config.step"
    :size="config.size"
    :disabled="config.disabled"
    :controls="config.controls"
    v-model="currentValue"
  >
    </el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-number',
  props: {
    value:{},
    config: {
        type: Object,
        default: ''
    },
  },
  computed: {
    currentValue: {
      get() {
        return this.value
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
