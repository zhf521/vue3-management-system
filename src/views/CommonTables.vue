<template>
  <el-card class="card">
    <template #header>
      <div class="card-header">
        <el-button type="primary" @click="handleAdd">
          <span>
            <el-icon>
              <Plus />
            </el-icon>
          </span>
          <span>&nbsp;</span>
          <span>新增</span>
        </el-button>
      </div>
    </template>
    <el-table :data="currentPageData" style="width: 100%">
      <el-table-column align="center" type="index" :index="1" />
      <el-table-column align="center" label="时间" prop="date" />
      <el-table-column align="center" label="姓名" prop="name" />
      <el-table-column align="center" label="地址" prop="address" />
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"><el-icon>
              <Edit />
            </el-icon>编辑</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"><el-icon>
              <Delete />
            </el-icon>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :current-page="currentPage" :page-size="pageSize" layout="total, prev, pager, next"
      :total="tableData.length" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    <!-- 编辑对话框 -->
    <el-dialog v-model="editFormVisible" title="编辑">
      <el-form :model="editForm">
        <el-form-item label="时间">
          <el-date-picker v-model="editForm.date" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="editForm.address" placeholder="请输入地址" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="editFormVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEdit">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
    <!-- 新增对话框 -->
    <el-dialog v-model="addFormVisible" title="新增">
      <el-form :model="addForm">
        <el-form-item label="时间">
          <el-date-picker v-model="addForm.date" value-format="YYYY-MM-DD" type="date" placeholder="请选择时间" />
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="addForm.name" placeholder="请输入姓名" />
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="addForm.address" placeholder="请输入地址" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="addFormVisible = false">取消</el-button>
          <el-button type="primary" @click="saveAdd">
            确定
          </el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>
<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref, computed } from 'vue'
// @ts-ignore
import { v4 as uuidv4 } from 'uuid'
interface User {
  id: string
  date: string
  name: string
  address: string
}
// @ts-ignore
const tableData: User[] = reactive([
  {
    id: 1,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 5,
    date: '2016-05-11',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
])
// 删除操作
const handleDelete = (index: number, row: User) => {
  ElMessageBox.confirm(
    '确定删除吗？',
    '提示',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      let idx = tableData.findIndex((item) => {
        return item.id == row.id
      })
      // 根据索引删除数据
      tableData.splice(idx, 1)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
      // 判断当前页码是否大于总页数，如果是，则将当前页码减1
      const totalPages = Math.ceil(tableData.length / pageSize.value)
      if (currentPage.value > totalPages) {
        currentPage.value--
      }
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
}
// 编辑操作
const editFormVisible = ref(false)
const editForm = reactive({
  id: '',
  date: '',
  name: '',
  address: ''
})
const handleEdit = (index: number, row: User) => {
  editFormVisible.value = true // 打开编辑对话框
  editForm.id = row.id // 保存编辑的用户ID
  editForm.date = row.date // 填充表单数据
  editForm.name = row.name
  editForm.address = row.address
}
const saveEdit = () => {
  const editedUser = tableData.find((item) => item.id === editForm.id)
  if (editedUser) {
    editedUser.date = editForm.date
    editedUser.name = editForm.name
    editedUser.address = editForm.address
  }
  editFormVisible.value = false
}

// 新增操作
const addFormVisible = ref(false)
const addForm = reactive({
  id: '',
  date: '',
  name: '',
  address: ''
})
const handleAdd = () => {
  addForm.id = uuidv4()
  addForm.date = '' // 清空日期
  addForm.name = '' // 清空姓名
  addForm.address = '' // 清空地址
  addFormVisible.value = true // 打开新增对话框
}
const saveAdd = () => {
  const newUserData = { ...addForm } // 创建新的对象，并复制 addForm 对象的值
  console.log(newUserData)

  tableData.push(newUserData) // 将新对象添加到 tableData 数组中
  addFormVisible.value = false // 关闭新增对话框
}
// 分页
const currentPage = ref(1) //当前页码
const pageSize = ref(5) // 每页显示的记录数
const currentPageData = computed(() => {
  const totalPages = Math.ceil(tableData.length / pageSize.value)
  // 如果当前页码大于总页数，则将当前页码设置为最后一页
  if (currentPage.value > totalPages) {
    currentPage.value = totalPages
  }
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  if (start >= tableData.length) {
    // 如果起始索引超出数据范围，则将当前页码设置为最后一页
    currentPage.value = Math.ceil(tableData.length / pageSize.value)
  }
  return tableData.slice(start, end)
})
const handleSizeChange = (val: number) => {
  pageSize.value = val
  currentPage.value = 1
}
const handleCurrentChange = (val: number) => {
  currentPage.value = val
}
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
}
</style>