<template>
  <div>
    <el-tabs v-if="data.tabs">
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
          asd
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'form',
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
      console.log(this.data);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
