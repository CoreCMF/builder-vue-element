<template>
  <div class="">
    <el-row>
      <el-col :md="16">
        <bve-table-item-button
          v-for="(config,key) in topButton"
          :key="key"
          :config="config"
          :multipleSelection="multipleSelection"
          type="topButton"
        />
      </el-col>
      <el-col :md="8">
        <bve-table-item-search :config="search"/>
      </el-col>
    </el-row>
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
            <bve-table-item-scope
              v-if="!column.type"
              v-model="scope.row[column.prop]"
              :config="column.config"
            />
            <bve-table-item-statu
              v-if="column.type=='status'"
              v-model="scope.row[column.prop]"
            />
            <bve-table-item-icon
              v-if="column.type=='icon'"
              v-model="scope.row[column.prop]"
            />
            <bve-table-item-picture
              v-if="column.type=='picture'"
              v-model="scope.row[column.prop]"
              :config="column.config"
            />
            <bve-table-item-tags
              v-if="column.type=='tags'"
              v-model="scope.row[column.prop]"
              :config="column.config"
            />
            <bve-table-item-button
              v-if="column.type=='btn'"
              v-for="(config,key) in rightButton"
              :key="key"
              :config="config"
              v-model="scope.row"
              :multipleSelection="multipleSelection"
              size="mini"
              type="rightButton"
            />
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-bottom">
      <bve-pagination-item v-model="pagination"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bve-item-table',
  props: {
    data: {
      type: Object,
      default: ''
    },
  },
  data() {
    return {
        multipleSelection: [],
    }
  },
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
    },
    rightButton() {
      if (this.data.rightButton) {
        return this.data.rightButton
      }
      return []
    },
    topButton() {
      if (this.data.topButton) {
        return this.data.topButton
      }
      return []
    },
    pagination() {
      if (this.data.pagination) {
        return this.data.pagination
      }
      return null
    },
    search() {
      if (this.data.search) {
        return this.data.search
      }
      return null
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>
<style lang="scss" scoped>
  .table-top{
    padding-bottom:15px;
  }
  .table-bottom{
    padding-top:15px;
  }
</style>
