<template>
  <el-tabs v-model="editableTabsValue" type="card" closable @tab-click="clickTab" @tab-remove="removeTab">
    <el-tab-pane v-for="(item, key) in tabsStore.list" :key="key" :name="item.name">
      <template #label>
        {{ item.title }}
      </template>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { TabPaneName, TabsPaneContext } from 'element-plus'
//导入定义的store
import { useTabsStore } from '../store/tabs'
//获取容器中的state
const tabsStore = useTabsStore()

const route = useRoute()
const router = useRouter()

const editableTabsValue = ref()

// 监听路由变化
watch(
  route,
  () => {
    editableTabsValue.value = route.name
    setTabs(route)
  },
  {
    immediate: true,
  }
)

// 设置标签
function setTabs(route: any) {
  const isExist = tabsStore.list.some((item) => {
    return item.path === route.fullPath
  })
  if (!isExist) {
    tabsStore.setTabsItem({
      name: route.name,
      title: route.meta.name || route.meta.title,
      path: route.fullPath,
    })
  }
}

// 点击tab切换路由
function clickTab(pane: TabsPaneContext) {
  router.push('/' + pane.paneName)
}

// 单个tab移除
const removeTab = (name: TabPaneName) => {
  const index = tabsStore.list.findIndex((item) => item.name == name)
  tabsStore.delTabsItem(index)
  console.log(tabsStore.list[0].path)
  if (tabsStore.list.length === 0 ) {
    router.push('/')
  }else {
    const item = tabsStore.list[tabsStore.list.length - 1]
    // 最后一个链接
    router.push(item.path)
  }
}

</script>
<style scoped lang="scss">
.el-tabs {
  transition: none;
  position: absolute;
  top: 8px;
  margin-left: -21px;
}
</style>