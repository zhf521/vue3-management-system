<template>
  <el-menu default-active="1" @open="handleOpen" @close="handleClose">
    <el-menu-item index="1">
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
    <el-menu-item index="3">
      <el-icon>
        <UserFilled>
        </UserFilled>
      </el-icon>
      <span>个人中心</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import router from '@/router'
import {
  HomeFilled,
  List,
  UserFilled,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  if (key == '1') {
    router.push('/dashboard')
  } else if (key === '3') {
    router.push('/user')
  }
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.el-menu {
  width: 120px;
}
</style>