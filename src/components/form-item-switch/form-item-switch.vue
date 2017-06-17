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
      if (!this.config.onText) {
          return this.onText = '开启';
      }
      return this.config.onText
    },
    offText() {
      if (!this.config.offText) {
          return this.offText = '关闭';
      }
      return this.config.offText
    },
    onColor() {
      if (!this.config.onColor) {
          return this.onColor = '#1abc9c';
      }
      return this.config.onColor
    },
    offColor() {
      if (!this.config.offColor) {
          return this.offColor = '#95a5a6';
      }
      return this.config.offColor
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
