<template>
  <el-button
    v-if="show"
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
import { forIn } from 'lodash'
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
        show:true,//控制按钮显示
    };
  },
  computed: {
    button() {
      switch(this.type) {
        case 'topButton':
          break;
        case 'rightButton':
          this.compileRightButton()
          break;
      }
      return this.config
    },
    status() {
      //如果后端设定状态column 根据后端设定column读取
      return this.config.statusKey? this.value[this.config.statusKey]: this.value.status
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
     * [compileRightButton 编译表格右侧按钮]
     */
    compileRightButton(){
        let _this = this
        let showStatus = false
        if (this.config.show) {
          _.forEach(this.config.show, function(show){
              if (_this.status == show) {
                  showStatus = true
              }
          })
          this.show = showStatus
        }
        let hideStatus = true
        if (this.config.hide) {
          _.forEach(this.config.hide, function(hide){
              if (_this.status == hide) {
                  hideStatus = false
              }
          })
          this.show = hideStatus
        }
    },
    handleClick() {
      let postData
      switch (this.button.method) {
        case 'default':
          let apiUrl = this.button.apiUrl
          postData = {'id':this.id};        //发送数据ID
          this.$store.dispatch('dialog',{apiUrl, postData})
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
        _this.$store.dispatch('callbackData',Response.data)
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
