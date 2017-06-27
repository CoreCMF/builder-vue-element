<template>
  <div
   class="form-html"
   v-html="config.data"
   :style="config.style"
  >
  </div>
</template>

<script>
export default {
  name: 'bve-form-item-html',
  props: {
    config: {
        type: Object,
        default: ''
    },
  },
}
</script>
<style lang="scss" scoped>
.form-html{

}
</style>
