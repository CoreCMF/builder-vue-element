<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-switch
      :disabled="config.disabled"
      :width="config.width"
      :on-icon-class="config.onIconClass"
      :off-icon-class="config.offIconClass"
      :on-text="onText"
      :off-text="offText"
      :on-color="onColor"
      :off-color="offColor"
      :name="config.name"
      v-model="data[config.name]"
    >
    </el-switch>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-switch',
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
      onText:   this.config.onText,
      offText:  this.config.offText,
      onColor:  this.config.onColor,
      offColor: this.config.offColor,
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
      if (!this.config.onText) {
          this.onText = '开启';
      }
      if (!this.config.offText) {
          this.offText = '关闭';
      }
      if (!this.config.onColor) {
          this.onColor = '#1abc9c';
      }
      if (!this.config.offColor) {
          this.offColor = '#95a5a6';
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
