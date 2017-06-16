<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-tag
      v-for="(tag,key) in dynamicTags"
      :key="key"
      :closable="true"
      :close-transition="false"
      :style="tagStyle"
      type="success"
      @close="handleClose(tag)"
    >
    {{tag}}
    </el-tag>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-tags',
  props: {
    value:{
      type: '',
      default: ''
    },
    config: {
      type: Object,
      default: ''
    }
  },
  data() {
    return {
      currentValue:this.value,
      dynamicTags: [],
      inputValue: '',
      tagStyle:{
        marginLeft:'10px' ,
        marginBottom:'10px' ,
      }
    };
  },
  created() {
    this.initData();//初始化页面数据
  },
  watch: {
    'value'(val, oldValue) {
      this.setCurrentValue(val)
    }
  },
  methods: {
    initData() {
      this.dynamicTags = this.currentValue.toString().split(',')
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.currentValue = this.dynamicTags.join(',')
      this.$emit('input', this.currentValue)
    },
    setCurrentValue(value) {
      this.currentValue = this.value
      this.initData()
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
