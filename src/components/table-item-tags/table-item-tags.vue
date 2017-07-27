<template>
  <div class="">
    <el-tag
        class="tags"
        v-for="(tag,key) in currentValue"
        :key="key"
        :type="config.type"
    >
      <template v-if="config.keyNmae">{{tag[config.keyNmae]}}</template>
      <template v-else>{{tag}}</template>
    </el-tag>
  </div>
</template>

<script>
export default {
  name: 'bve-table-item-tags',
  props: {
    value:{},
    config:{}
  },
  computed: {
    currentValue() {
      return this.value
    }
  }
}
</script>
<style lang="scss" scoped>
  .tags{
    margin-top:5px;
    margin-left:10px;
    margin-bottom:5px;
  }
</style>
