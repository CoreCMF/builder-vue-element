<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input
      type="text"
      :placeholder="config.placeholder"
      :maxlength="config.maxlength"
      :minlength="config.minlength"
      :disabled="config.disabled"
      :size="config.size"
      :suffix-icon="config.suffixIcon"
      :prefix-icon="config.prefixIcon"
      :rows="config.rows"
      :autosize="config.autosize"
      :name="config.name"
      :max="config.max"
      :min="config.min"
      :autofocus="config.autofocus"
      :form="config.form"
      v-model="currentValue"
      :style="style"
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
        if (this.value!=null) {
           return this.value.toString()
        }
        return
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    style() {
      return this.config.style
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
