<template>
  <i :class="currentValue"></i>
</template>

<script>
export default {
  name: 'bve-table-item-icon',
  props: {
    value:{}
  },
  computed: {
    currentValue() {
      return this.value
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
