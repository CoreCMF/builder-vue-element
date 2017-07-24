<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-switch
      :disabled="config.disabled"
      :width="config.width"
      :on-icon-class="config.onIconClass"
      :off-icon-class="config.offIconClass"
      :on-text="onText"
      :off-text="offText"
      :on-color="onColor"
      :off-color="offColor"
      :name="config.name"
      v-model="currentValue"
    >
    </el-switch>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-switch',
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
    },
    onText() {
      return !this.config.onText? '开启': null
    },
    offText() {
      return !this.config.offText? '关闭': null
    },
    onColor() {
      return !this.config.onColor? '#1abc9c': null
    },
    offColor() {
      return !this.config.offColor? '#95a5a6': null
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
