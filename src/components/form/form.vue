<template>
  <div class="form-item">
    <el-tabs v-if="data.tabs">
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
        <bve-form-item :data="data" :tab="key"/>
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
      }
  }
}
</script>
<style lang="scss" scoped>
  .form-item{
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
    padding: 10px;
  }
</style>
