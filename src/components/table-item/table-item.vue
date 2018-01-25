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
        <bve-table-item-search
          :config="search"
          @inputSearchChange="handleInputSearchChange"
          @selectSearchChange="handleSelectSearchChange"
        />
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
          <template slot-scope="scope">
            <bve-table-item-scope
              v-if="!column.type"
              v-model="scope.row[column.prop]"
              :config="column.config"
            />
            <bve-table-item-statu
              v-if="column.type=='status'"
              v-model="scope.row[column.prop]"
              :config="column.config"
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
            <template v-if="column.type=='btn'">
              <bve-table-item-button
                v-for="(config,index) in scope.row[column.prop]"
                :key="'prop'+index"
                :config="config"
                v-model="scope.row"
                size="mini"
                type="rightButton"
              />
              <bve-table-item-button
                v-for="(config,index) in rightButton"
                :key="index"
                :config="config"
                v-model="scope.row"
                size="mini"
                type="rightButton"
              />
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="table-bottom">
      <bve-pagination-item
        v-if="pagination"
        v-model="pagination"
        @SizeChange="handleSizeChange"
        @CurrentChange="handleCurrentChange"
      />
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
    },
    /**
    * [handleSizeChange 设置每页显示数量并获取数据]
    */
    handleSizeChange(val){
      this.handlePostData('pageSize',val)
    },
    /**
    * [handleCurrentChange 根据页码获取页面数据]
    */
    handleCurrentChange(val) {
      this.handlePostData('page',val)
    },
    handleInputSearchChange(val) {
      this.handlePostData('inputSearch',val)
    },
    handleSelectSearchChange(val) {
      this.handlePostData('selectSearch',val)
    },
    handlePostData(key,val) {
      this.$emit('postDataChange',key,val)
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
