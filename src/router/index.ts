import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import CommonTables from '../views/CommonTables.vue'
import ImportExcel from '../views/ImportExcel.vue'
import ExportExcel from '../views/ExportExcel.vue'
import DragBoard from '../views/DragBoard.vue'
import DragList from '../views/DragList.vue'
import DataScreen from '../views/DataScreen.vue'
import User from '../views/User.vue'

const routes = [
  // 重定向
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    //嵌套路由
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {
          name: '系统首页'
        },
        component: Dashboard
      },
      {
        path: '/common-tables',
        name: 'common-tables',
        meta: {
          name: '常用表格'
        },
        component: CommonTables
      },
      {
        path: '/import-excel',
        name: 'import-excel',
        meta: {
          name: '导入Excel'
        },
        component: ImportExcel
      },
      {
        path: '/export-excel',
        name: 'export-excel',
        meta: {
          name: '导出Excel'
        },
        component: ExportExcel
      },
      {
        path: '/drag-board',
        name: 'drag-board',
        meta: {
          name: '可拖拽看板'
        },
        component: DragBoard
      },
      {
        path: '/drag-list',
        name: 'drag-list',
        meta: {
          name: '可拖拽列表'
        },
        component: DragList
      },
      {
        path: '/user',
        name: 'user',
        meta: {
          name: '个人中心'
        },
        component: User
      }
    ]
  },
  {
    path: '/data-screen',
    name: 'data-screen',
    meta: {
      name: '数据大屏'
    },
    component: DataScreen
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  },
  {
    path: '/not-found',
    name: 'not-found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

//全局前置守卫
router.beforeEach((to, from, next) => {
  const isLogin = sessionStorage.getItem('token')
  if (!isLogin && to.path !== '/login') {
    next('/login')
  } else {
    next()
  }
})
export default router
