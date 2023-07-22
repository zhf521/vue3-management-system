<template>
  <div>
    <el-table :data="tableData" v-if="tableData.length > 0">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
    </el-table>

    <el-button type="primary" @click="exportToExcel">导出Excel</el-button>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElTable, ElTableColumn, ElButton } from 'element-plus'
import *as XLSX from 'xlsx'

interface Data {
  name: string
  age: number
  gender: string
}

const tableData = reactive<Data[]>([
  { name: '张三', age: 20, gender: '男' },
  { name: '李四', age: 25, gender: '女' },
  { name: '王五', age: 30, gender: '男' },
])

const exportToExcel = () => {
  const worksheet = XLSX.utils.json_to_sheet(tableData)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1')
  XLSX.writeFile(workbook, 'data.xlsx')
}
</script>

<style scoped></style>