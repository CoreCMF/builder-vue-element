<template>
    <bve-index-item
      :apiUrl="apiUrl"
    />
</template>

<script>
export default {
  name: 'bve-index',
  computed: {
    apiUrl() {
      return this.$route.meta.apiUrl
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
