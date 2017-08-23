<template>
  <div class="table-item">
    <el-tabs
      v-if="data.tabs"
      @tab-click="handleTabsClick"
      v-model="index"
    >
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
        <bve-item-table v-if="index == key" :data="data"/>
      </el-tab-pane>
    </el-tabs>
    <bve-item-table :data="data" v-else/>
  </div>
</template>

<script>
export default {
  name: 'bve-table',
  props: {
      data: {
          type: Object,
          default: ''
      },
      tabIndex:{}
  },
  computed: {
    index: {
      get() {
          let defaultTabIndex = this.data.defaultTabs? this.data.defaultTabs: Object.keys(this.data.tabs)[0].toString()
          return this.tabIndex? this.tabIndex.toString(): defaultTabIndex
      },
      set(newValue) {
      }
    },
  },
  methods: {
    handleTabsClick(tab, event) {
      this.$emit('tab-click',tab, event)
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-item{
    background: #fff;
    overflow: hidden;
    border-radius: 4px;
    padding: 10px;
  }
</style>
