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
      this.isShow()
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
  watch: {
    value: 'isShow',
  },
  methods: {
    /**
     * [compileRightButton 编译表格右侧按钮]
     */
    isShow(){
        let showStatus = false
        if (this.config.show) {
          _.forEach(this.config.show, (show) => {
              if (this.status == show) {
                  showStatus = true
              }
          })
          this.show = showStatus
        }
        let hideStatus = true
        if (this.config.hide) {
          _.forEach(this.config.hide, (hide) => {
              if (this.status == hide) {
                  hideStatus = false
              }
          })
          this.show = hideStatus
        }
    },
    handleClick() {
      let postData
      switch (this.button.method) {
        case 'dialog':
          let apiUrl = this.button.apiUrl
          postData = {'id':this.id};        //发送数据ID
          this.$store.dispatch('dialog',{apiUrl, postData})
          this.$store.dispatch('dialogWidth',this.config.width)
          break;
        case 'warning':
          postData = this.changeDataState(this.id,this.config.data);//批量数据更改状态
          this.$confirm(this.config.warning, '危险提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'error'
          }).then(() => {
            this.httpNotify(postData)
          }).catch(() => {
            this.$message({
              message: '已取消操作',
              type: 'info',
            });
          });
          break;
        default:
          if (this.config.data) {
              postData = this.changeDataState(this.id,this.config.data);//批量数据更改状态
          }else{
              postData = {'id':this.id};
          }
          this.httpNotify(postData)
          break;
      }
    },
    httpNotify(postData) {
      let apiUrl = this.button.apiUrl
      let thenFunction = data => {
        this.$store.dispatch('callbackData',data)
      }
      this.$store.dispatch('getData',{ apiUrl, postData, thenFunction})
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
