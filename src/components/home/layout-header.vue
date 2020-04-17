<template>
<!-- el-row -->
  <el-row class='layout-header' type='flex' align="middle">
      <!-- 先定义一行 -->
     <el-col class='left' :span="12">
         <i  @click="forder" :class='{"el-icon-s-unfold":$store.state.isforder,"el-icon-s-fold":!$store.state.isforder}'></i>
         <span>热点资讯后台管理©jacob</span>
     </el-col>
     <el-col class='right' :span="12">
         <el-row type='flex' justify="end" align="middle">
             <img :src="userInfo.headImage ? userInfo.headImage : defaultImg" alt="">
             <!-- 下拉菜单 -->
             <el-dropdown @command="clickMenu">
                 <!-- 匿名插槽  下拉菜单显示的元素内容 -->
                 <span>欢迎您 {{ userInfo.name }} ！</span>
                 <el-dropdown-menu slot="dropdown">
                     <el-dropdown-item command="info">个人信息</el-dropdown-item>
                     <el-dropdown-item command="git">git地址</el-dropdown-item>
                     <el-dropdown-item command="lgout">退出</el-dropdown-item>
                 </el-dropdown-menu>
             </el-dropdown>
         </el-row>
     </el-col>
  </el-row>
</template>
<script>
import { getuserinfo } from '@/api/account.js'
export default {
  data () {
    return {
      userInfo: {
        name: ''
      }, // 定义一个用户对象
      defaultImg: require('../../assets/img/icon.png') // 先将图片转化成了一个变量
    }
  },
  created () {
    this.userInfo.name = window.localStorage.getItem('user-account')
    this.getuserinfo()
  },
  methods: {
    async getuserinfo () {
      const id = window.localStorage.getItem('accountid')
      const { data } = await getuserinfo(id)
      if (data.code === 200) {
        this.userInfo = data.data
        this.$message({
          type: 'success',
          message: '获取用户信息成功！'
        })
      } else {
        this.$message({
          type: 'error',
          message: `获取用户信息失败！${data.error}`
        })
      }
    },
    forder () {
      this.$store.state.isforder = !this.$store.state.isforder
    },
    // 点击菜单项时触发
    clickMenu (command) {
      if (command === 'info') {
        this.$router.push('/account/userinfo') // 个人中心
      } else if (command === 'git') {
        //   跳转到git地址
        window.location.href = 'https://github.com/Jacobliu77/'
      } else {
        //    退出
        window.localStorage.removeItem('user-token') // 删除令牌
        this.$router.push('/') // 回到登录页
      }
    }
  }
}
</script>

<style lang='less' scoped>
.layout-header {
    height:60px;
    .left {
        font-size: 20px;
        text-align: left;
        span {
           color: #2c3e50;
           font-size: 16px;
           margin-left:4px;
        }
    }
    .right {
      img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin-right: 5px;
      }
    }
}
</style>
