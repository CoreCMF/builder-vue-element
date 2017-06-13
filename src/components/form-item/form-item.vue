<template>
  <el-form :model="fromData" ref="bve-from" :label-width="config.labelWidth">
    <template v-for="config in data.data">
      <bve-form-item-text :data="fromData" :config="config" v-if="config.type == 'text'" />
    </template>
  </el-form>
</template>

<script>
export default {
  name: 'bve-form-item',
  props: {
    data: {
      type: Object,
      default: ''
    },
  },
  created() {
    this.initData();//初始化页面数据
  },
  data() {
    return {
      fromData:{},
      config:{
        labelWidth:'80px',
      }
    };
  },
  methods: {
    initData() {
      this.setFromData()
    },
    /**
     * [setFromData 设置form渲染数据]
     */
    setFromData(){
      let datas = this.data.data
      this.fromData = {}
      for (var key in datas) {
        var name = datas[key].name
        var value = datas[key].value
        this.fromData[name] = value
      }
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
