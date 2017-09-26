<template>
  <el-form-item :label="config.label" :prop="config.name">
    <el-upload
      :class="config.class"
      :action="config.uploadUrl"
      :headers="headers"
      :multiple="config.multiple"
      :data="config.data"
      :name="config.inputName"
      :with-credentials="config.withCredentials"
      :file-list="fileList"
      :show-file-list="config.showFileList"
      :accept="config.accept"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :on-success="handleSuccess"
      :on-error="handleError"
      :on-progress="handleProgress"
      :list-type="config.picture"
      :before-upload="beforeUpload"
      :auto-upload="true"
    >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传{{ showExtension }}文件，且不超过{{ showMaxSize }}</div>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-file',
  props: {
    value:{},
    config: {
        type: Object,
        default: ''
    },
  },
  data() {
    return {
    };
  },
  created() {
    this.initData();//初始化页面数据
  },
  computed: {
    fileList() {
      let fileList = []
      if (this.config.fileName) {
        fileList.push({name:this.config.fileName})
      }
      return fileList;
    },
    currentValue: {
      get() {
          return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    },
    headers() {
      if (window.axios.defaults.headers.common) {
        return window.axios.defaults.headers.common
      }
      return
    },
    /**
     * [showMaxSize 字节计算]
     * @return {[type]} [description]
     */
    showMaxSize(){
      let size;
      let show = 'B';
      if (this.config.maxSize>1024) {
        size = this.config.maxSize/1024;
        show = 'KB';
      }
      if (size>1024) {
        size = size/1024;
        show = 'MB';
      }
      if (size>1024) {
        size = size/1024;
        show = 'GB';
      }
      if (size>1024) {
        size = size/1024;
        show = 'TB';
      }
      return size+show;
    },
    showExtension()
    {
        return this.config.extension.join(',')
    }
  },
  methods: {
    initData() {
      if (!this.config.inputName) { this.config.inputName = 'file' }
      if (!this.config.withCredentials) { this.config.withCredentials = false }
      if (!this.config.showFileList) { this.config.showFileList = true }
      if (!this.config.class) { this.config.class = 'upload-demo' }
      // 上传文件大小显示语言提示beging
      if (!this.config.maxSizeLang) { this.config.maxSizeLang = {} }
      if (!this.config.maxSizeLang.message) { this.config.maxSizeLang.message = '文件大小超过系统限制' }
      if (!this.config.maxSizeLang.type) { this.config.maxSizeLang.type = 'warning' }
      // 上传文件大小显示语言提示end
      if (!this.config.extensionLang) { this.config.extensionLang = {} }
      if (!this.config.extensionLang.message) { this.config.extensionLang.message = '文件上传类型不正确' }
      if (!this.config.extensionLang.type) { this.config.extensionLang.type = 'warning' }

    },
    handleRemove(file, fileList) {
        // let name = this.config.name
        // this.datas[name] = null;
    },
     handlePreview(file) {
           // console.log(file);
     },
     handleSuccess(Response, file, fileList){
        /* [if 上传成功定义显示图片赋值ID]*/
        if (Response.type=="success") {
          this.currentValue = Response.uploadData.id;
        }
        this.$message({
          message: Response.message,
          type: Response.type,
        })
    },
    handleError(err, response, file){
          // console.log(err, response, file);
    },
    handleProgress(event, file, fileList){
      if (fileList.length>1) {
        this.$delete(fileList,0)
      }
    },
    beforeUpload(file){
      /* [if 判断是否符合上传大小] */
      if (this.config.maxSize<file.size) {
          this.$message({
            message: this.config.maxSizeLang.message,
            type: this.config.maxSizeLang.type,
          })
          return false;
      }
      if (!this.checkExtension(file)) {
          this.$message({
            message: this.config.extensionLang.message,
            type: this.config.extensionLang.type,
          })
          return false;
      }
    },
    /**
     * [checkExtension 检查文件类型是否符合要求]
     * @return {[type]} [description]
     */
    checkExtension(file){
      let extension = file.name.substr(file.name.lastIndexOf(".")+1).toLowerCase();//截取字符串
      return this.config.extension.includes(extension)//检查数组包含
    }
  }
}
</script>
<style lang="scss" scoped>
  .upload {
    line-height: 0px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .upload:hover {
    border-color: #20a0ff;
  }
  .img-fluid{
    box-sizing:border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    max-width: 100%;
    height: auto;
    padding:0.07in;
  }
</style>
