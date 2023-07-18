<template>
  <h2>可拖拽列表</h2>
  <el-card style="margin: 10px;">
    <h3>可拖拽列表1</h3>
    <el-table :data="tableData" id="dragTable1" border>
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-card>
  <el-card style="margin: 10px;">
    <h3>可拖拽列表2</h3>
    <el-table :data="tableData" id="dragTable2" border>
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column prop="address" label="Address" />
      <el-table-column label="operation">
        <template #default>
          <div class="handle-drag">
            <el-icon>
              <Sort />
            </el-icon>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import Sortable from 'sortablejs'
import { onMounted } from 'vue'
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Cilly',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Linda',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const setSort1 = () => {
  const el = document.querySelector('#dragTable1 table tbody')
  new Sortable(el, {
    sort: true,
    ghostClass: 'sortable-ghost',
    onEnd: (e: any) => {
      const targetRow = tableData.splice(e.oldIndex, 1)[0]
      tableData.splice(e.newIndex, 0, targetRow)
    }
  })
}
const setSort2 = () => {
  const el = document.querySelector('#dragTable2 table tbody')
  new Sortable(el, {
    sort: true,
    ghostClass: 'sortable-ghost',
    handle: '.handle-drag',
    onEnd: (e: any) => {
      const targetRow = tableData.splice(e.oldIndex, 1)[0]
      tableData.splice(e.newIndex, 0, targetRow)
    }
  })
}
onMounted(() => {
  setSort1()
  setSort2()
})
</script>