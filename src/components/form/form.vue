<template>
  <div class="form-item">
    <el-tabs v-if="data.tabs" @tab-click="handleTabsClick">
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
        <bve-form-item  v-if="index == key" :data="data"/>
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
      tabIndex:{}
  },
  computed: {
    index() {
      if (this.tabIndex) {
        return this.tabIndex
      }
      return Object.keys(this.data.tabs)[0].toString()
    }
  },
  methods: {
    handleTabsClick(tab, event) {
      this.$emit('tab-click',tab, event)
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
