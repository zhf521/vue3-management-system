<template>
  <div class="fillcontain">
    <div class="header">
      <div class="logo">管理系统</div>
      <div class="right">
        <!-- 用户名下拉菜单 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <el-avatar icon="UserFilled" style="padding:8px"></el-avatar><span class="name">{{ username }}</span>
            <el-icon><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
              <!-- todo 个人中心等 -->
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <el-container class="fillcontain">
      <!-- 侧边显示 -->
      <el-aside class="aside">
        <el-button @click="router.push('/dashboard')">首页</el-button>
      </el-aside>
      <!-- 主显示 -->
      <el-main>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: breadcrumb.path }">{{ breadcrumb.title }}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"></component>
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, RouterView, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
const username = localStorage.getItem('username')
const handleCommand = (command: string) => {
  if (command == 'loginOut')
    localStorage.removeItem('username')
  sessionStorage.removeItem('token')
  router.push('/login')
}

// 面包屑
const breadcrumb = computed(() => {
  return {
    name: route.name,
    title: route.meta.name || route.meta.title,
    path: route.fullPath
  }
})
</script>
<style scoped lang="scss">
.header {
  height: 48px;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 24px;

  .right {
    display: flex;
    align-items: center;

    .name {
      font-size: 16px;
      padding-left: 8px;
      font-weight: 600;
    }
  }
}

.aside {
  width: 80px;
  height: 100%;
}

a {
  img {
    width: 82px;
    padding-right: 12px;
    border-radius: inherit;
  }
}

img {
  vertical-align: middle;
  width: 42px;
  border-radius: 50%;
}
</style>