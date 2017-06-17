<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input
      type="text"
      :placeholder="config.placeholder"
      :maxlength="config.maxlength"
      :minlength="config.minlength"
      :disabled="config.disabled"
      :size="config.size"
      :icon="config.icon"
      :rows="config.rows"
      :autosize="config.autosize"
      :name="config.name"
      :max="config.max"
      :min="config.min"
      :autofocus="config.autofocus"
      :form="config.form"
      v-model="currentValue"
    />
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-text',
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
