<template>
    <div>

   <el-header class="el-header" style="height: 70px;width:80%;margin-left:10%;line-height: 70px">
      <el-row type="flex" justify="space-between" style="height:80px">
        <el-col :span="4" style="text-align:left">
          <div class="leftimg">
              <img src="../../assets/img/icon.png" alt="">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="middlesearch">
            <el-input style="width:115%;margin-top:25px" placeholder="请输入内容" v-model="search" class="input-with-select">
              <el-button  slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6"><div class="rightherf" style="margin-top:25px"></div>
        <p style="line-height:0px"> <a style="text-decoration: none;" target="black" href="https://github.com/Jacobliu77/mynews"><i class="el-icon-link"></i>Github仓库</a> </p>
        <p style="line-height:0px"> <a style="text-decoration: none;" target="black" href="https://jacobliu77.github.io"><i class="el-icon-link"></i>个人博客</a> </p>
        </el-col>
      </el-row>
    </el-header>
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="7" style="margin-left:10%;">
        <template slot="title"> <i class="el-icon-menu"></i>所有分类</template>
        <el-menu-item :index="item.id.toString()" v-for="item in channels" :key="item.id" style="margin-left:0;text-align:center;">{{item.style}}</el-menu-item>
    </el-submenu>
    <el-menu-item index="1"  >娱乐演艺</el-menu-item>
    <el-menu-item index="2"  >国防军事</el-menu-item>
    <el-menu-item index="3"  >科技未来</el-menu-item>
    <el-menu-item index="4"  >金融财经</el-menu-item>
    <el-menu-item index="7" @click="tosomewhere"  >个人中心</el-menu-item>
    <el-menu-item style="margin-left:25%" index="7" :disabled="isClick" @click="$router.push('/login')"  > <i class="el-icon-user-solid"></i><span v-text="statu">欢迎你！</span></el-menu-item>
    <el-menu-item :disabled="!isClick" style="margin-left:0"  index="8" @click="logout()"><span>安全登出</span></el-menu-item>
    </el-menu>
</div>
</template>
<script>
import { getChannels } from '@/api/channel.js'
export default {
  data () {
    return {
      search: '',
      statu: '',
      channels: [],
      isClick: false
    }
  },
  created () {
    this.getsta()
    this.loadChannels()
  },
  methods: {
    getsta () {
      var token = window.localStorage.getItem('user-token')
      var name = window.localStorage.getItem('user-account')
      if (token) {
        this.statu = `欢迎你！${name}`
        this.isClick = true
      } else {
        this.statu = `去登录！`
        this.isClick = false
      }
    },
    tosomewhere () {
      if (window.localStorage.getItem('isAdmin') === 'true') {
        this.$router.push('/account')
      } else {
        this.$router.push('/visitor')
      }
    },
    logout () {
      window.localStorage.removeItem('user-token')
      window.localStorage.removeItem('user-account')
      window.localStorage.removeItem('isAdmin')
      window.localStorage.removeItem('accountid')
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '账户登出成功!'
      })
      this.getsta()
    },
    async loadChannels () {
      const { data } = await getChannels()
      this.channels = data.data.items
    }
  }
}
</script>

<style lang='less' scoped>
     .leftimg {
    img {
      height: 70px;
    }
  }
  .rightherf{
      a {
          text-decoration: none;
      }
  }
  .el-menu-demo{
      margin-top:20px;
      height: 60px;
  }
</style>
