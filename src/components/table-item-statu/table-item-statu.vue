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
    value:{}
  },
  computed: {
    tags: {
      get() {
        switch(this.value) {
          case -1:
            return {
              'type':'danger',
              'icon':'fa fa-trash',
              'title':'删除',
            };
            break;
          case 0:
            return {
              'type':'warning',
              'icon':'fa fa-ban',
              'title':'禁用',
            };
            break;
          case 1:
            return {
              'type':'success',
              'icon':'fa fa-check',
              'title':'正常',
            };
            break;
          case 2:
            return {
              'type':'warning',
              'icon':'fa fa-eye-slash',
              'title':'隐藏',
            };
            break;
        }
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
