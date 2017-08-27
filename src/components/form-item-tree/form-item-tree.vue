<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-tree
      :data="options"
      :show-checkbox="config.showCheckbox"
      :default-expand-all="config.defaultExpandAll"
      :node-key="config.nodeKey"
      ref="tree"
      :check-strictly="config.checkStrictly"
      highlight-current
      :props="config.props"
    >
    </el-tree>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-tree',
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
        if (this.value!=null) {
          return this.value.toString()
        }
        return
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    options() {
      return this.config.options
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
