import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '@/views/Home/'
import login from '@/views/login/'
import about from '@/views/about/'
import register from '@/views/register/'
import account from '@/views/account/home/'
import acchome from '@/views/account/home/Home.vue'
import visitor from '@/views/visitor'
import search from '@/views/search'
import details from '@/views/details'

Vue.use(VueRouter)
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component: about
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
        path: 'news/add', // 添加资讯文章
        component: () => import('../views/account/news/add')
      },
      {
        path: 'news/getnewsinfo', // 获取资讯文章
        component: () => import('../views/account/news/getinfo')
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
