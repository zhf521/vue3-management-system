import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/NotFound.vue'
import Dashboard from '../views/Dashboard.vue'
import ComplexTable from '../views/ComplexTable.vue'

const routes = [
  // 重定向
  {
    path: '/',
    redirect:'/dashboard'
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
          icon: 'Menu',
          name:'系统首页'
        },
        component:Dashboard
      },
      {
        path: '/complex-table',
        name: 'ComplexTable',
        component:ComplexTable
      }
    ]
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
  },
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
