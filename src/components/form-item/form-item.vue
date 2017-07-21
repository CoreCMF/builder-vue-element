<template>
  <el-form
    :model="fromData"
    ref="bvefrom"
    :rules="rules"
    :style="fromConfig.formStyle"
    :inline="fromConfig.inline"
    :label-position="fromConfig.labelPosition"
    :label-suffix="fromConfig.labelSuffix"
    :label-width="fromConfig.labelWidth">
    <template v-for="config in data.data">
      <bve-form-item-text
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'text'"
      />
      <bve-form-item-textarea
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'textarea'"
      />
      <bve-form-item-hidden
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'hidden'"
      />
      <bve-form-item-password
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'password'"
      />
      <bve-form-item-checkbox
        v-model="fromData[config.name]"
        :config="config"
        @checkbox-event="handleCheckedEvent"
        v-if="config.type == 'checkbox'"
      />
      <bve-form-item-switch
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'switch'"
      />
      <bve-form-item-number
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'number'"
      />
      <bve-form-item-tags
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'tags'"
      />
      <bve-form-item-picture
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'picture'"
      />
      <bve-form-item-select
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'select'"
      />
      <bve-form-item-html
        :config="config"
        v-if="config.type == 'html'"
      />
      <bve-form-item-steps
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'steps'"
      />
      <bve-form-item-scrollbar
        :config="config"
        v-if="config.type == 'scrollbar'"
      />
      <bve-form-item-alert
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'alert'"
      />
      <bve-form-item-radio
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'radio'"
      />
    </template>
    <div class="form-button">
     <el-button
      v-if="!fromConfig.formPrevious.hidden"
      type="primary"
      @click="submitForm('bvefrom',fromConfig.formPrevious.steps,'previous')"
      :style="fromConfig.formPrevious.style"
      :disabled="fromConfig.formPrevious.disabled"
     >
      {{ fromConfig.formPrevious.name }}
     </el-button>
     <el-button
      v-if="!fromConfig.formSubmit.hidden"
      type="primary"
      @click="submitForm('bvefrom',fromConfig.formSubmit.steps,'next')"
      :style="fromConfig.formSubmit.style"
      :disabled="fromConfig.formSubmit.disabled"
     >
      {{ fromConfig.formSubmit.name }}
     </el-button>
     <el-button
      v-if="!fromConfig.formReset.hidden"
      @click="resetForm('bvefrom')"
      :style="fromConfig.formReset.style"
      :disabled="fromConfig.formReset.disabled"
     >
      {{ fromConfig.formReset.name }}
     </el-button>
   </div>
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
  },
  created() {
    this.initData();//初始化页面数据
  },
  data() {
    return {
      fromData:{},
      config: {
        labelWidth:'80px',
        inline:false,
        labelPosition:'right',
        labelSuffix:'',
        formPrevious:{
          name: '上一步 ',
          style: null,
          value:0,
          hidden: true,
          disabled:false
        },
        formSubmit: {
          name: '提交',
          style: null,
          hidden: false,
          disabled:false
        },
        formReset: {
          name: '重置 ',
          style: null,
          hidden: false,
          disabled:false
        },
      }
    };
  },
  computed: {
    apiUrlSubmit() {
      return this.data.apiUrl.submit
    },
    fromConfig() {
      Object.assign(this.config,this.data.config)
      return this.config
    },
    rules() {
      let rules = this.data.rules;
      if (rules!==undefined) {
          for (var name in rules) {
              for (var key in rules[name]) {
                  let validator = rules[name][key].validator
                  if (validator!==undefined) {
                      rules[name][key].validator = eval(validator) //执行自定义JS规则代码
                  }
              }
          }
      }
      return rules
    },
  },
  watch: {
    data:'initData'
  },
  methods: {
    initData() {
      this.setFromData()
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
     * [submitForm 提交数据]
     * @param  {[type]} formName [description]
     * @param  {[type]} steps    [下一步的隐藏item name]
     */
    submitForm(formName,stepsName,steps) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this  = this
          let apiUrl = this.apiUrlSubmit
          let postData = this.fromData
          let message = this.$message
          let thenFunction = function(Response) {
              _this.$store.dispatch('callbackData',Response.data)
          }
          if(stepsName){
            if (steps == 'previous') {
              postData[stepsName] = postData[stepsName]-1
            }
            if (steps == 'next') {
              postData[stepsName] = postData[stepsName]+1
            }
          }
          this.$store.dispatch('getData',{ apiUrl, postData, message, thenFunction})
        } else {
          console.log('error submit!! 请检查你的提交信息是否符合规则');
          return false
        }
      });
    },
    /**
     * [resetForm 重置数据]
     */
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCheckedEvent(event, checked){
      let disabled = checked? false: true
      for (var key in event) {
        switch (event[key]) {
          case 'submitButton':
            this.config.formSubmit.disabled = disabled
            break;
          case 'resetButton':
            this.config.formReset.disabled = disabled
            break;
          default:
            let data = this.data.data
            for (var k in data) {
              if (data[k].name == event[key]) {
                data[k].disabled = disabled
              }
            }
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
</style>
