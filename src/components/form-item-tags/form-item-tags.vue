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
    data: {
        type: '',
        default: ''
    },
    config: {
        type: Object,
        default: ''
    },
  },
  data() {
    return {
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
      data:'initData'
  },
  methods: {
    initData() {
      console.log('demo')
      let name = this.config.name
      this.dynamicTags = this.data[name].toString().split(',')
    },
    handleClose(tag) {
      let name = this.config.name
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.data[name] = this.dynamicTags.join(',')
      console.log(this.data[name])
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
