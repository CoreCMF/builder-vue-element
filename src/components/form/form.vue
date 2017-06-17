<template>
  <div v-bind:style="formStyle">
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
  },
  data() {
    return {
      formStyle: {
        width: '500px'
      }
    };
  },
}
</script>
<style lang="scss" scoped>

</style>
