<template>
  <div class="alert">
    <el-alert
      :title="title"
      :type="type"
      :description="description"
      :show-icon="showIcon"
      :closable="closable"
    />
  </div>
</template>

<script>
export default {
  name: 'bve-form-item-alert',
  props: {
    config: {
        type: Object,
        default: ''
    },
    value:{}
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
    title() {
      return this.config.title? this.config.title :null
    },
    type() {
      return this.config.itemType? this.config.itemType :'info'
    },
    description() {
      return this.config.description? this.config.description :null
    },
    showIcon() {
      return this.config.showIcon? this.config.showIcon :true
    },
    closable() {
      return this.config.closable? true :false
    }
  }
}
</script>
<style lang="scss" scoped>
  .alert{
    margin-bottom: 22px;
    line-height: 36px;
  }
</style>
