<template>
  <div class="">
    <template>
      <img
        :src="src"
        :class="config.class"
        :alt="config.alt"
        :width="config.width"
        :height="config.height"
        @click="pictureDialogVisible = true"
        style="cursor:pointer"
      >
    </template>
    <el-dialog v-model="pictureDialogVisible">
      <img
        :src="src"
        class="img-responsive img-rounded img-atuo"
        :alt="config.alt"
      >
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'bve-table-item-picture',
  props: {
    value:{},
    config:{}
  },
  computed: {
    src() {
      if (this.config.keyNmae) {
        return this.value[this.config.keyNmae]
      }else{
        return this.value
      }
    }
  },
  data() {
      return {
          pictureDialogVisible:false,
      };
  }
}
</script>
<style lang="scss" scoped>
  .img-responsive{
    display:block;
    height:auto;
  }
  .img-circle{
    border-radius:50%
  }
  .img-rounded{
    border-radius:6px
  }
  .img-atuo{
    width: 100%
  }
</style>
