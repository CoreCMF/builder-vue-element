<template>
  <el-form-item :label="config.label" :prop="config.name">
    <a class="link" :href="currentValue">
      {{ currentValue }}
    </a>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-link',
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
    }
  }
}
</script>
<style lang="scss" scoped>
  .link {
    text-decoration: none;
    color: #99A9BF;
    &:hover{
      color: #1D8CE0;
    }
  }
</style>
