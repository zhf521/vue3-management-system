<template>
  <el-menu unique-opened @select="handleSelect" :default-active="route.path">
    <el-menu-item index="/dashboard">
      <el-icon>
        <HomeFilled></HomeFilled>
      </el-icon>
      <span>系统首页</span>
    </el-menu-item>
    <el-sub-menu index="s1">
      <template #title>
        <el-icon>
          <List></List>
        </el-icon>
        <span>表格相关</span>
      </template>
      <el-menu-item index="/common-tables">
        <span>常用表格</span>
      </el-menu-item>
      <el-menu-item index="/import-excel">
        <span>导入Excel</span>
      </el-menu-item>
      <el-menu-item index="/export-excel">
        <span>导出Excel</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="s2">
      <template #title>
        <el-icon>
          <Pointer />
        </el-icon>
        <span>拖拽相关</span>
      </template>
      <el-menu-item index="/drag-board">
        <span>可拖拽看板</span>
      </el-menu-item>
      <el-menu-item index="/drag-list">
        <span>可拖拽列表</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="s3">
      <template #title>
        <el-icon>
          <Notebook />
        </el-icon>
        <span>文章相关</span>
      </template>
      <el-menu-item index="/rich-text">
        <span>富文本</span>
      </el-menu-item>
      <el-menu-item index="/markdown">
        <span>MarkDown</span>
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/data-screen">
      <el-icon>
        <DataAnalysis />
      </el-icon>
      <span>数据大屏</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <el-icon>
        <UserFilled>
        </UserFilled>
      </el-icon>
      <span>个人中心</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

import {
  HomeFilled,
  List,
  UserFilled,
  Pointer
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key)

  router.push(key)
}
</script>
<style lang="scss" scoped>
.el-menu {
  width: 140px;
}
</style>