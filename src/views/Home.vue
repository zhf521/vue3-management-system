<template>
  <div class="fillcontain">
    <div class="header">
      <div class="logo">管理系统</div>
      <div class="right">
        <el-button icon="FullScreen" @click="fullScreen"></el-button>
        <el-popover placement="bottom-start" title="主题设置" :width="175" trigger="hover">
          <!-- 表单元素 -->
          <el-form>
            <el-form-item label="主题颜色">
              <el-color-picker @change="setColor" size="small" v-model="color" show-alpha :predefine="predefineColors" />
            </el-form-item>
            <el-form-item label="暗黑模式">
              <el-switch v-model="dark" size="small" inline-prompt :active-icon="Moon" :inactive-icon="Sunny"
                @change="changeDark" />
            </el-form-item>
          </el-form>
          <template #reference>
            <el-button icon="Operation"></el-button>
          </template>
        </el-popover>
        <!-- 消息通知 -->
        <MessageDropdown></MessageDropdown>
        <!-- 用户名下拉菜单 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="../assets/user.svg" alt="">
            <span class="name">{{ username }}</span>
            <el-icon><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="user">个人中心</el-dropdown-item>
              <el-dropdown-item command="loginOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
    <el-container class="fillcontain">
      <!-- 侧边显示 -->
      <SideBar></SideBar>
      <!-- 主显示 -->
      <el-main>
        <!-- tab栏 -->
        <Tabs></Tabs>
        <!-- 面包屑 -->
        <el-breadcrumb style="margin-bottom: 20px;" separator="/">
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
import { computed, ref } from 'vue'
import { useRouter, RouterView, useRoute } from 'vue-router'
import MessageDropdown from '../components/MessageDropdown.vue'
import SideBar from '../components/SideBar.vue'
import Tabs from '../components/Tabs.vue'
import { Sunny, Moon } from '@element-plus/icons-vue/global'
import { drawerEmits } from 'element-plus'

const router = useRouter()
const route = useRoute()
const username = localStorage.getItem('username')
const handleCommand = (command: string) => {
  if (command == 'loginOut') {
    localStorage.removeItem('username')
    sessionStorage.removeItem('token')
    router.push('/login')
  } else if (command == 'user') {
    router.push('/user')
  }
}

// 面包屑
const breadcrumb = computed(() => {
  return {
    name: route.name,
    title: route.meta.name || route.meta.title,
    path: route.fullPath
  }
})

// 全屏切换
const fullScreen = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// 主题切换
const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])
const setColor = () => {
  // 通过js修改根节点的样式

  // document.documentElement 是全局变量时
  const html = document.documentElement

  // 设置 css 变量
  html.style.setProperty('--el-color-primary', color.value)
}

// 暗黑模式
let dark = ref(false)
const changeDark = () => {
  let html = document.documentElement
  dark.value ? html.className = 'dark' : html.className = ''
}
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