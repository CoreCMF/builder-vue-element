<template>
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
    v-model="data[config.name]">
  </el-input>
</template>

<script>
export default {
  name: 'bve-form-item-password',
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
  created() {
    this.initData();//初始化页面数据
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
