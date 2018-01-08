<template>
  <el-input
      class="input-with-select"
      v-if="currentConfig.title"
      v-model="inputSearch"
      :placeholder="currentConfig.title"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
  >
      <el-select
        v-if="currentConfig.select"
        v-model="selectSearch"
        slot="prepend"
        placeholder="请选择"
      >
          <el-option v-for="(label, value) in currentConfig.select"  :key="value" :label="label" :value="value"></el-option>
      </el-select>
      <el-button slot="append" icon="el-icon-search" @click="handleInputConfirm"></el-button>
  </el-input>
</template>

<script>
export default {
  name: 'bve-table-item-search',
  props: {
    value:{},
    config:{}
  },
  data() {
    return {
      selectSearch:null,
      inputSearch: null,
    }
  },
  computed: {
    currentConfig() {
      if (this.config) {
        return this.config;
      }
      return null
    },
  },
  created() {
    if (this.config.Value) {
      this.selectSearch = this.config.Value;
    }else{
       let selectKeys = Object.keys(this.currentConfig.select)
       this.selectSearch = selectKeys[0]
    }
  },
  methods: {
      /**
       * [handleInputConfirm 根据搜索获取数据]
       */
      handleInputConfirm(){
        this.$emit('inputSearchChange',this.inputSearch)
        this.$emit('selectSearchChange',this.selectSearch)
      }
  }
}
</script>
<style lang="scss" >
  .input-with-select{
    .el-select .el-input {
        width: 1.2in;
     }
  }
</style>
