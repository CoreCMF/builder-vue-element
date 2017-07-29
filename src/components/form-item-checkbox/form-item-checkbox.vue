<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-checkbox-group v-model="currentValue">
      <el-checkbox
        v-for="(option,key,index) in config.options"
        :label="key.toString()"
        :key="key.toString()"
        @change="handleChange"
      >
      {{ option.name }}
    </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-checkbox',
  props: {
    value:{},
    config: {
        type: Object,
        default: ''
    },
  },
  computed: {
    currentValue: {
      get() {
        for (var key in this.value) {
          this.value[key] = this.value[key].toString()
        }
        return this.value? this.value: []
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    handleChange(value) {
      let checked = value.target.checked
      let targetValue = value.target.value
      let eventEnable = this.config.options[targetValue].eventEnable
      let eventDisable = this.config.options[targetValue].eventDisable
      if (eventEnable) {
        this.$emit('checkbox-event',eventEnable,checked)
      }
      if (eventDisable) {
        this.$emit('checkbox-event',eventDisable,!checked)
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
