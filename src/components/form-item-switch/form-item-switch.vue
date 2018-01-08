<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-switch
      :disabled="config.disabled"
      :width="config.width"
      :active-icon-class="config.activeIconClass"
      :inactive-icon-class="config.inactiveIconClass"
      :active-text="config.activeText"
      :inactive-text="config.inactiveText"
      :active-color="config.activeColor"
      :inactive-color="config.inactiveColor"
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
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
