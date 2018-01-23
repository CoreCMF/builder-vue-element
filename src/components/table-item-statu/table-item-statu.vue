<template>
  <el-tag :type="tags.type">
      <i :class="tags.icon"></i>
      {{tags.title}}
  </el-tag>
</template>

<script>
export default {
  name: 'bve-table-item-statu',
  props: {
    value:{},
    config:{}
  },
  computed: {
    tags: {
      get() {
        let _this = this
        let tags
        _.forEach(this.config, function(config, key){
            if (_this.value == key) {
                tags = config
            }
        })
        return tags
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
