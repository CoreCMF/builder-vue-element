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
      <div class="upload">
        <img v-if="imageUrl"
          :src="imageUrl"
          :style="stylePicture"
          class="img-fluid"
          :width="config.width"
          :height="config.height"
        >
        <i v-else class="el-icon-plus" :style="stylePictureUploaderIcon"></i>
      </div>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: 'bve-form-item-picture',
  props: {
    value:{},
    config: {
        type: Object,
        default: ''
    },
  },
  data() {
    return {
      newImageUrl:'',
    };
  },
  created() {
    this.initData();//初始化页面数据
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
    imageUrl() {
      if (this.newImageUrl && this.config.value!=this.value) {
        return this.newImageUrl
      }
      return this.config.imageUrl
    },
    stylePictureUploaderIcon() {
      if (this.config.stylePictureUploaderIcon) {
        return this.config.stylePictureUploaderIcon
      }
      return {
        fontSize: '28px',
        color: '#8c939d',
        width: '178px',
        height: '178px',
        lineHeight: '178px',
        textAlign: 'center',
      }
    },
    stylePicture() {
      return this.config.stylePicture
    },
    headers() {
      return {
        'Accept': 'application/json',
        'Authorization': localStorage.getItem('token_type') + ' ' + localStorage.getItem('access_token')
      }
    }
  },
  methods: {
    initData() {
      if (!this.config.inputName) { this.config.inputName = 'file' }
      if (!this.config.withCredentials) { this.config.withCredentials = false }
      if (!this.config.showFileList) { this.config.showFileList = false }
      if (!this.config.class) { this.config.class = 'picture-uploader' }
      // 上传文件大小显示语言提示beging
      if (!this.config.maxSizeLang) { this.config.maxSizeLang = {} }
      if (!this.config.maxSizeLang.message) { this.config.maxSizeLang.message = '文件大小超过系统限制' }
      if (!this.config.maxSizeLang.type) { this.config.maxSizeLang.type = 'warning' }
      // 上传文件大小显示语言提示end
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
          this.newImageUrl = URL.createObjectURL(file.raw);
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
          // console.log(event, file, fileList);
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
