<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input-number
    :min="config.min"
    :max="config.max"
    :step="config.step"
    :size="config.size"
    :disabled="config.disabled"
    :controls="config.controls"
    v-model="data[config.name]"
  >
    </el-input-number>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-number',
  props: {
    data: {
        type: '',
        default: ''
    },
    config: {
        type: Object,
        default: ''
    },
  },
  data() {
    return {

    };
  },
  created() {
    this.initData();//初始化页面数据
  },
  watch: {
      data:'initData',
  },
  methods: {
    initData() {
      if (!this.config.min) {
          this.config.min = 0;
      }
      if (!this.config.max) {
          this.config.max = Infinity;
      }
      if (!this.config.step) {
          this.config.step = 1;
      }
      if (!this.config.disabled) {
          this.config.disabled = false;
      }
      if (!this.config.controls) {
          this.config.controls = true;
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
