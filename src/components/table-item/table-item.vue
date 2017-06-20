<template>
  <el-table
    :data="tableData"
    :stripe="stripe"
    border
    @selection-change="handleSelectionChange"
  >
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <template v-for="column in columns">
      <el-table-column
        :type="column.type"
        :column-key="column.columnKey"
        :label="column.label"
        :prop="column.prop"
        :width="column.width"
        :min-width="column.minWidth"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-method="column.sortMethod"
        :resizable="column.resizable"
        :formatter="column.formatter"
        :show-overflow-tooltip="column.showOverflowTooltip"
        :align="column.align"
        :header-align="column.headerAlign"
        :class-name="column.className"
        :reserve-selection="column.reserveSelection"
        :filters="column.filters"
        :filter-multiple="column.filterMultiple"
        :filter-method="column.filterMethod"
        :filtered-value="column.filteredValue"
      >
        <template scope="scope">
          <bve-table-item-statu v-if="column.type=='status'" v-model="scope.row[column.prop]"/>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'bve-table-item',
  props: {
    data: {
      type: Object,
      default: ''
    },
  },
  // created() {
  //   this.initData();//初始化页面数据
  // },
  // data() {
  //   return {
  //     fromData:{},
  //   };
  // },
  computed: {
    tableData() {
      return this.data.data
    },
    stripe() {
      if (this.data.stripe) {
        return this.data.stripe
      }
      return false
    },
    columns() {
      if (this.data.column) {
        return this.data.column
      }
      return []
    }
  },
  methods: {
    handleSelectionChange(val) {
      console.log(val);
      // this.multipleSelection = val;
    },
  }
}
</script>
<style lang="scss" scoped>

</style>
