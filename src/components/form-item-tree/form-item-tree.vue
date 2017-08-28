<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-tree
      :data="options"
      :show-checkbox="config.showCheckbox"
      :default-expand-all="config.defaultExpandAll"
      :default-checked-keys="currentValue"
      :node-key="config.nodeKey"
      ref="tree"
      :check-strictly="config.checkStrictly"
      highlight-current
      :props="config.props"
      @check-change="handleCheckChange"
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
          return this.value
        }
        return
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    options() {
      return this.ObjectToArray(this.config.options)
    }
  },
  methods: {
      // 清空无用键值
      ObjectToArray(options) {
          let children = this.config.props.children
          let data = new Array();
          for (var key in options) {
              if (options[key][children]) {
                options[key][children] = this.ObjectToArray(options[key][children])
              }
              data.push(options[key]) //清空键值
          }
          return data
      },
      /**
       * 节点选中时改变value值
       */
      handleCheckChange() {
        this.currentValue = this.$refs.tree.getCheckedKeys() //获取当前选中的节点
      }
  }
}
</script>
<style lang="scss" scoped>

</style>
