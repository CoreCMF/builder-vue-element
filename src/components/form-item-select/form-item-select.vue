<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-select
      @change="handleChange"
      :placeholder="config.placeholder"
      :multiple="config.multiple"
      :disabled="config.disabled"
      :size="config.size"
      :clearable="config.clearable"
      :multiple-limit="config.multipleLimit"
      :name="config.name"
      :filterable="config.filterable"
      :allow-create="config.allowCreate"
      :filter-method="config.filterMethod"
      :remote="config.remote"
      :remote-method="config.remoteMethod"
      :loading="config.loading"
      :loading-text="config.loadingText"
      :no-match-text="config.noMatchText"
      :no-data-text="config.noDataText"
      :popper-class="config.popperClass"
      v-model="currentValue">
      <el-option
        v-for="(item,key) in options"
        :label="item"
        :key="key"
        :value="key.toString()">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-select',
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
        if (this.value!=null) {
          return this.value.toString()
        }
        return
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    options() {
      return this.config.options
    }
  },
  methods: {
    handleChange() {
      this.$emit('item-change',this.config, this.currentValue)
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
