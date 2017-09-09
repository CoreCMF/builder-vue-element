<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :page-sizes="currentValue.pageSizes"
    :page-size="currentValue.pageSize"
    :layout="currentValue.layout"
    :total="currentValue.total">
  </el-pagination>
</template>
<script>
export default {
  name: 'bve-pagination-item',
	props: {
    value: {},
  },
  computed: {
    currentValue: {
      get() {
        if (this.value!=null) {
           return this.value
        }
        return {
          pageSizes:[10,20,30],
          pageSize:10,
          layout:'total, sizes, prev, pager, next, jumper',
          total:0
        }
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  },
	methods: {
		/**
    * [handleSizeChange 设置每页显示数量并获取数据]
    */
    handleSizeChange(val){
      this.$emit('SizeChange',val)
    },
    /**
    * [handleCurrentChange 根据页码获取页面数据]
    */
    handleCurrentChange(val) {
      this.$emit('CurrentChange',val)
    },
	}
}
</script>
