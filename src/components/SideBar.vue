<template>
  <el-menu @select="handleSelect" :default-active="route.path">
    <el-menu-item index="/dashboard">
      <el-icon>
        <HomeFilled></HomeFilled>
      </el-icon>
      <span>系统首页</span>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon>
          <List></List>
        </el-icon>
        <span>表格</span>
      </template>
      <el-menu-item index="2-1">
        <span>简单表格</span>
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>
        <el-icon>
          <Pointer />
        </el-icon>
        <span>拖拽</span>
      </template>
      <el-menu-item index="/drag-board">
        <span>可拖拽看板</span>
      </el-menu-item>
      <el-menu-item index="/drag-list">
        <span>可拖拽列表</span>
      </el-menu-item>
    </el-sub-menu>
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
  width: 120px;
}
</style>