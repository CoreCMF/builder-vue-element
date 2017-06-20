<template>
  <div>
    <template v-if="currentConfig.keyNmae">{{ currentValue[currentConfig.keyNmae] }}</template>
    <template v-else>{{ currentValue }}</template>
  </div>
</template>

<script>
export default {
  name: 'bve-table-item-scope',
  props: {
    value:{},
    config:{}
  },
  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    currentConfig() {
      if (this.config) {
        return this.config;
      }
      return {
        keyNmae: null
      }
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
