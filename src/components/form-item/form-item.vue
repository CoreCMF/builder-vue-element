<template>
  <el-form
    :model="fromData"
    ref="bvefrom"
    :inline="fromConfig.inline"
    :label-position="fromConfig.labelPosition"
    :label-suffix="fromConfig.labelSuffix"
    :label-width="fromConfig.labelWidth">
    <template v-for="config in data.data">
      <bve-form-item-text
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'text'"
      />
      <bve-form-item-textarea
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'textarea'"
      />
      <bve-form-item-hidden
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'hidden'"
      />
      <bve-form-item-password
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'password'"
      />
      <bve-form-item-checkbox
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'checkbox'"
      />
      <bve-form-item-switch
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'switch'"
      />
      <bve-form-item-number
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'number'"
      />
      <bve-form-item-tags
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'tags'"
      />
      <bve-form-item-picture
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'picture'"
      />
      <bve-form-item-checkbox
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'checkbox'"
      />
      <bve-form-item-select
        v-model="fromData[config.name]"
        :config="config"
        v-if="config[data.tabsGroup] == tab && config.type == 'select'"
      />
    </template>
    <el-form-item>
     <el-button type="primary" @click="submitForm('bvefrom')">提交</el-button>
     <el-button @click="resetForm('bvefrom')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'bve-form-item',
  props: {
    data: {
      type: Object,
      default: ''
    },
    tab: {
      type: '',
      default: null
    },

  },
  created() {
    this.initData();//初始化页面数据
  },
  data() {
    return {
      fromData:{},
      fromConfig:{
        labelWidth:'80px',
        inline:false,
        labelPosition:'right',
        labelSuffix:'',
      }
    };
  },
  methods: {
    initData() {
      this.setFromData()
      this.setFromConfig()
    },
    /**
     * [setFromData 设置form渲染数据]
     */
    setFromData(){
      let datas = this.data.data
      this.fromData = {}
      for (var key in datas) {
        this.$set(this.fromData, datas[key].name, datas[key].value)
      }
    },
    /**
     * [setFromConfig 设置form配置]
     */
    setFromConfig(){
        let config = this.data.config;
        if (config!==undefined) {
            if (config.labelWidth) { this.fromConfig.labelWidth = config.labelWidth }
            if (config.inline) { this.fromConfig.inline = config.inline }
            if (config.labelPosition) { this.fromConfig.labelPosition = config.labelPosition }
            if (config.labelSuffix) { this.fromConfig.suffix = config.labelSuffix }
        }
    },
    /**
     * [submitForm 提交数据]
     */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(this.fromData)
        } else {
          console.log('error submit!! 请检查你的提交信息是否符合规则');
          return false;
        }
      });
    },
    /**
     * [resetForm 重置数据]
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
