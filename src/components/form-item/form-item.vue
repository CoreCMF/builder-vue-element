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
    <template v-for="config in currentData.data">
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
      <bve-form-item-file
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'file'"
      />
      <bve-form-item-select
        v-model="fromData[config.name]"
        :config="config"
        @item-change="handleChange"
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
      <bve-form-item-link
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'link'"
      />
      <bve-form-item-tree
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'tree'"
      />
      <bve-qrcode-item
        v-model="fromData[config.name]"
        :config="config"
        v-if="config.type == 'tree'"
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
      fromData:null,
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
      },
      currentDatas:null
    };
  },
  computed: {
    apiUrlSubmit() {
      return this.currentData.apiUrl.submit
    },
    fromConfig() {
      Object.assign(this.config,this.currentData.config)
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
    currentData() {
       return this.currentDatas? this.currentDatas :this.data
    }
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
      let datas = this.currentData.data
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
        let apiUrl = this.apiUrlSubmit
        let postData = this.fromData
        let catchFunction
        let thenFunction = data => {
            this.$store.dispatch('callbackData', data)
        }
        if(stepsName){
          if (steps == 'previous') {
            postData[stepsName] = postData[stepsName]-1
            catchFunction = function(Response) {
              postData[stepsName] = postData[stepsName]+1
            }
            valid = true
          }
          if (steps == 'next' && valid) {
            postData[stepsName] = postData[stepsName]+1
            catchFunction = function(Response) {
              postData[stepsName] = postData[stepsName]-1
            }
          }
        }
        if (valid) {
          this.$store.dispatch('getData',{ apiUrl, postData, thenFunction, catchFunction})
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
    /**
     * 禁用按钮事件
     */
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
            let data = this.currentData.data
            for (var k in data) {
              if (data[k].name == event[key]) {
                data[k].disabled = disabled
              }
            }
        }
      }
    },
    /**
     * 组件数据改变事件
     * 组件存在apiUrl 会访问api
     * 如果返回form 组件会重新渲染 form组件
     */
    handleChange(config, value){
      if (config.apiUrl) {
        let apiUrl = config.apiUrl
        let postData = {}
        postData[config.name] = value
        let thenFunction = data => {
          if (Response.data.type == 'form') {
            this.currentDatas = data
          }
        }
        this.$store.dispatch('getData',{ apiUrl, postData, thenFunction}) //获取当前路由数据
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
