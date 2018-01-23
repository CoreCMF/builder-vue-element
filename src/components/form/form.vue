<template>
  <div class="form-item">
    <div v-html="htmlBegin"></div>
    <el-tabs
      v-if="data.tabs"
      @tab-click="handleTabsClick"
      v-model="index"
      type="card"
    >
      <el-tab-pane v-for="(tab,key) in data.tabs" :key="key" :name="key.toString()" :label="tab">
        <bve-form-item  v-if="index == key" :data="data"/>
      </el-tab-pane>
    </el-tabs>
    <bve-form-item :data="data" v-else/>
    <div v-html="htmlEnd"></div>
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
    index: {
      get() {
          return this.tabIndex? this.tabIndex.toString(): Object.keys(this.data.tabs)[0].toString()
      },
      set(newValue) {
      }
    },
    htmlEnd() {
      return this.data.htmlEnd;
    },
    htmlBegin() {
      return this.data.htmlBegin;
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
