import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home/'
import login from '@/views/login/'
import register from '@/views/register/'
import account from '@/views/account/home/'
import acchome from '@/views/account/home/Home.vue'
import visitor from '@/views/visitor'
import search from '@/views/search'
import details from '@/views/details'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/visitor',
    name: 'visitor',
    component: visitor
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
  {
    path: '/details',
    name: 'details',
    component: details
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/account',
    name: 'account',
    component: account,
    children: [
      {
        path: '',
        component: acchome
      },
      {
        path: 'userinfo', // 修改用户信息
        component: () => import('../views/account/account')
      },
      {
        path: 'resetpass', // 修改用户密码
        component: () => import('../views/account/account/resetpass.vue')
      },
      {
        path: 'admin/del', // 账户操作
        component: () => import('../views/account/admin/del.vue')
      },
      {
        path: 'comment/getcomm', // 获取电影评论
        component: () => import('../views/account/comment/get')
      },
      {
        path: 'film/addfilm', // 添加电影
        component: () => import('../views/account/film/add')
      },
      {
        path: 'film/getfilminfo', // 获取电影操作
        component: () => import('../views/account/film/getinfo')
      },
      {
        path: 'admin/find', // 获取电影详情
        component: () => import('../views/account/admin/find')
      },
      {
        path: 'admin/all', // 获取电影详情
        component: () => import('../views/account/admin/all')
      }
    ]
  },
  {
    path: '*',
    component: () => import('../views/404')
  }
  // {
  // path: '/about',
  // name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
