<template>
  <el-input
    type="hidden"
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
    v-model="currentValue">
  </el-input>
</template>

<script>
export default {
  name: 'bve-form-item-hidden',
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
.el-input{
  display:block;
}
</style>
