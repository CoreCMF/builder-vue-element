<template>
  <el-form-item :label="config.label" :prop="config.name">
    <div
      class="scrollbar"
      :style="style"
      v-html="config.value"
    >
    </div>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-scrollbar',
  props: {
    config: {
        type: Object,
        default: ''
    }
  },
  computed: {
    style() {
      return this.config.style? this.config.style : {
        maxHeight: '200px',
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.scrollbar{
  overflow: auto;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #bfcbd9;
  padding: 10px;
  line-height: 20px;
  font-size: 14px;
}
</style>
