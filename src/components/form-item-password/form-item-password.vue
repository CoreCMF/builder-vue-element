<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-input
      type="password"
      :placeholder="config.placeholder"
      :maxlength="config.maxlength"
      :minlength="config.minlength"
      :disabled="config.disabled"
      :size="config.size"
      :icon="config.icon"
      :rows="config.rows"
      :autosize="config.autosize"
      :name="config.name"
      :max="config.max"
      :min="config.min"
      :autofocus="config.autofocus"
      :form="config.form"
      v-model="currentValue">
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-password',
  props: {
    value:{},
    config: {
        type: Object,
        default: ''
    },
  },
  data() {
    return {
      currentValue:this.value
    };
  },
  created() {
    this.initData();//初始化页面数据
  },
  watch: {
    value() {
      this.currentValue = this.value
    },
    currentValue() {
      this.$emit('input', this.currentValue)
    }
  },
  methods: {
    initData() {
        // console.log(this.config)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
