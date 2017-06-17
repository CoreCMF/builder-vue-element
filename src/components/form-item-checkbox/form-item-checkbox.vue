<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-checkbox-group v-model="currentValue">
      <el-checkbox v-for="(option,key) in config.options" :label="option.id" :key="key">{{ option.name }}</el-checkbox>
    </el-checkbox-group>
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
