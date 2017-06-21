<template>
  <el-button
    :type="button.type"
    :style="buttonStyle"
    :size="size"
    @click="handleClick()"
  >
    <i :class="button.icon"></i>
    {{button.title}}
  </el-button>
</template>

<script>
export default {
  name: 'bve-table-item-button',
  props: {
    config:{},
    value:{},
    size:{},
    type:{},
    multipleSelection:{}
  },
  data() {
    return {
      buttonProperty:{
        add:{
          title:'新增',
          icon:'fa fa-plus',
          type:'primary',
          method:'default'
        },
        default:{
          title:'无属性按钮',
          icon:'fa fa-check',
          type:'success',
          method:'default'
        },
        edit:{
          title:'编辑',
          icon:'fa fa-edit',
          type:'info',
          method:'default'
        },
        resume:{
          title:'启用',
          icon:'fa fa-check',
          type:'success',
          method:'resume'
        },
        forbid:{
          title:'禁用',
          icon:'fa fa-ban',
          type:'warning',
          method:'forbid'
        },
        display:{
          title:'显示',
          icon:'fa fa-check',
          type:'success',
          method:'display'
        },
        hide:{
          title:'隐藏',
          icon:'fa fa-eye-slash',
          type:'warning',
          method:'hide'
        },
        delete:{
          title:'删除',
          icon:'fa fa-trash',
          type:'danger',
          method:'delete'
        },
      }
    };
  },
  computed: {
    button() {
      let button
      switch(this.type) {
        case 'topButton':
          button = this.compileTopButton()
          break;
        case 'rightButton':
          button = this.compileRightButton()
          break;
      }
      return button
    },
    status() {
      return this.value.status
    },
    id() {
      if (this.value) {
        return this.value.id
      }
    },
    buttonStyle() {
      switch(this.type) {
        case 'topButton':
          return {
            marginBottom:'10px',
            marginLeft:'0px',
            marginRight:'10px',
          }
          break;
        case 'rightButton':
          return {
            marginBottom:'5px',
            marginLeft:'0px',
            marginRight:'5px',
          }
          break;
      }
    }
  },
  methods: {
    /**
       * [compileTopButton 编译表格顶部按钮]
       */
    compileTopButton(){
      let button
      let config = this.config;
      let buttonProperty = this.buttonProperty;
      switch(config.buttonType) {
        case 'add':  // 新增按钮
          button = Object.assign(buttonProperty.add,config);
          break;
        case 'resume':  // 启用按钮
          button = Object.assign(buttonProperty.resume,config);
          break;
        case 'forbid':  // 禁用按钮
          button = Object.assign(buttonProperty.forbid,config);
          break;
        case 'delete':  // 删除按钮
          button = Object.assign(buttonProperty.delete,config);
          break;
        default:
          button = Object.assign(buttonProperty.default,config);
          break;
      }
      return button
    },
    /**
     * [compileRightButton 编译表格右侧按钮]
     */
    compileRightButton(){
      let button
      let config = this.config;
      let buttonProperty = this.buttonProperty;
      switch(config.buttonType) {
        case 'edit':  // 编辑按钮
          button = Object.assign(buttonProperty.edit,config);
          break;
        case 'forbid':  //改变记录状态按钮，会更具数据当前的状态自动选择应该显示启用/禁用
          if(this.status=='1'){
              button = Object.assign(buttonProperty.forbid,config);
          }else if(this.status=='0'){
              button = Object.assign(buttonProperty.resume,config);
          }
          break;
        case 'hide':  //改变记录状态按钮，会更具数据当前的状态自动选择应该显示 显示/因此
          if(this.status=='1'){
              button = Object.assign(buttonProperty.hide,config);
          }else if(this.status=='2'){
              button = Object.assign(buttonProperty.display,config);
          }
          break;
        case 'delete':  // 禁用按钮
          button = Object.assign(buttonProperty.delete,config);
          break;
        default:
          button = Object.assign(buttonProperty.default,config);
          break;
      }
      return button
    },
    handleClick() {
      let postData
      switch (this.button.method) {
        case 'default':
          postData = {'id':this.id};        //发送数据ID
          this.getData(postData)
          break;
        case 'resume':
          postData = this.changeDataState(this.id,1);//批量数据更改状态
          this.httpNotify(postData)
          break;
        case 'forbid':
          postData = this.changeDataState(this.id,0);//批量数据更改状态
          this.httpNotify(postData)
          break;
        case 'display':
          postData = this.changeDataState(this.id,1);//批量数据更改状态
          this.httpNotify(postData)
          break;
        case 'hide':
          postData = this.changeDataState(this.id,2);//批量数据更改状态
          this.httpNotify(postData)
          break;
        case 'delete':
          postData = this.changeDataState(this.id,-1);//批量数据更改状态
          this.$confirm('此操作将永久删除此数据, 是否继续?', '危险提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error'
          }).then(() => {
            this.httpNotify(postData)
          }).catch(() => {
            this.$message({
              message: '已取消删除',
              type: 'info',
            });
          });
          break;
        default:
      }
    },
    httpNotify(postData) {
      let _this  = this
      let apiUrl = this.button.apiUrl
      let message = this.$message
      let thenFunction = function(Response) {
        _this.$store.dispatch('update')
      }
      this.$store.dispatch('getData',{ apiUrl, postData, message, thenFunction})
    },
    /**
     * [changeDataState 批量更改数据状态]
     */
    changeDataState(id,state){
      let data = new Object();
      if (id) {
        data[id] = state
      }else{
        for (var key in this.multipleSelection) {
          data[this.multipleSelection[key].id] = state
        }
      }
      return data;
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
