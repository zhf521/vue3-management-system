<template>
  <div>
    <el-upload class="upload-excel" :action="''" :before-upload="handleBeforeUpload" :on-success="handleSuccess"
      :on-error="handleError" :accept="'.xlsx'">
      <el-button size="small" type="primary">选择文件</el-button>
    </el-upload>

    <el-table :data="tableData" v-if="tableData.length > 0">
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="gender" label="性别"></el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ElUpload, ElButton, ElTable, ElTableColumn, ElMessageBox } from 'element-plus'
import *as XLSX from 'xlsx'

interface Data {
  name: string
  age: number
  gender: string
}

const tableData = reactive<Data[]>([])

const handleBeforeUpload = (file: File) => {
  const reader = new FileReader()
  reader.onload = (e: ProgressEvent<FileReader>) => {
    const data = new Uint8Array(e.target?.result as ArrayBuffer)
    const workbook = XLSX.read(data, { type: 'array' })
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 })

    if (jsonData.length > 0) {
      const headers = jsonData[0]
      const rows = jsonData.slice(1)

      tableData.length = 0
      rows.forEach((row: any) => {
        const rowData: Data = {
          name: row[0] || '',
          age: row[1] || 0,
          gender: row[2] || '',
        }
        tableData.push(rowData);
      })
    } else {
      ElMessageBox.alert('Excel中没有有效数据', '提示')
    }
  }

  reader.readAsArrayBuffer(file)
  return false // 取消自动上传
}

const handleSuccess = () => {
  // 处理上传成功逻辑
}

const handleError = () => {
  // 处理上传失败逻辑
}
</script>

<style scoped lang="scss">
.upload-excel {
  margin-bottom: 20px;
}
</style>