import router from '../router'
import progresss from 'nprogress'
import 'nprogress/nprogress.css'

router.beforeEach((to, from, next) => {
  progresss.start() // 开启进度条
  // to and from are both route objects. must call `next`.
  if (to.path.startsWith('/home')) {
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/')
    }
  } else if (to.path.startsWith('/account')) {
    let admin = window.localStorage.getItem('isAdmin')
    if (admin === 'ADMIN') {
      next()
    } else {
      next('/visitor')
    }
  } else {
    next()
  }
})
router.afterEach(() => {
  // setTimeout(() => progresss.done(), 1000)
  progresss.done()
  // 关闭进度条
})
