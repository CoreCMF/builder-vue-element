<template>
  <div>
    <el-tabs v-if="data.tabs">
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
        <bve-form-item :data="data"/>
      </el-tab-pane>
    </el-tabs>
    <bve-form-item :data="data" v-else/>
  </div>
</template>

<script>
export default {
  name: 'bve-form',
  props: {
      data: {
          type: Object,
          default: ''
      },
  },
  created() {
    this.initData();//初始化页面数据
  },
  methods: {
    initData() {
      // console.log(this.data);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
