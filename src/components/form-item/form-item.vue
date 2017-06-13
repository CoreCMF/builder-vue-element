<template>
  <div>
      item
  </div>
</template>

<script>
export default {
  name: 'bve-form-item',
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
