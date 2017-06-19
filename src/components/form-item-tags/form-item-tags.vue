<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-tag
      v-for="(tag,key) in dynamicTags"
      :key="key"
      :closable="true"
      :close-transition="false"
      :style="tagStyle"
      type="success"
      @close="handleClose(tag)"
    >
    {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-model="inputValue"
      ref="saveTagInput"
      size="mini"
      placeholder="添加Tags"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-tags',
  props: {
    value:{},
    config: {
      type: Object,
      default: ''
    }
  },
  data() {
    return {
      inputValue: '',
      tagStyle:{
        marginLeft:'10px' ,
        marginBottom:'10px' ,
      }
    };
  },
  computed: {
    currentValue: {
      get() {
          return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    dynamicTags() {
      if (this.currentValue) {
        return this.currentValue.toString().split(',')
      }
      return []
    }
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      this.currentValue = this.dynamicTags.join(',')
    },
    handleInputConfirm() {
      let name = this.config.name
      let inputValue = this.inputValue;
      let dynamicTags = this.dynamicTags;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
        this.currentValue = dynamicTags.join(',')
      }
      this.inputValue = '';
    }
  }
}
</script>
<style lang="scss" scoped>
  .input-new-tag{
    width:78px !important;
    margin-left:10px !important;
  }
</style>
