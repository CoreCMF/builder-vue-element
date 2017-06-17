<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input
      type="password"
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
      v-model="currentValue">
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-password',
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
