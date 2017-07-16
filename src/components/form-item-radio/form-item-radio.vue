<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-radio-group v-model="currentValue">
      <el-radio v-for="(option,key) in config.options" :label="key" :key="key">{{ option }}</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-radio',
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
          return this.value;
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
