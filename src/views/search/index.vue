<template>
  <el-container class="" style="width:100%;text-align:center;">
    <el-header>
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
                    <el-button  slot="append" icon="el-icon-search" @click="searchname(search)"></el-button>
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
              <el-menu-item :index="item.id.toString()" v-for="item in channels" :key="item.id" @click="searchtype(item.style)" style="margin-left:0;text-align:center;">{{item.style}}</el-menu-item>
          </el-submenu>
          <el-menu-item index="1" @click="searchtype('娱乐演艺')"  >娱乐演艺</el-menu-item>
          <el-menu-item index="2"  @click="searchtype('国防军事')" >国防军事</el-menu-item>
          <el-menu-item index="3"  @click="searchtype('科技未来')" >科技未来</el-menu-item>
          <el-menu-item index="4"  @click="searchtype('金融财经')" >金融财经</el-menu-item>
          <el-menu-item index="7" :disabled="!isClick" @click="tosomewhere"  >个人中心</el-menu-item>
          <el-menu-item style="margin-left:25%" index="7" :disabled="isClick" @click="$router.push('/login')"  > <i class="el-icon-user-solid"></i><span v-text="statu">欢迎你！</span></el-menu-item>
          <el-menu-item :disabled="!isClick" style="margin-left:0"  index="8" @click="logout()"><span>安全登出</span></el-menu-item>
          </el-menu>
      </div>
    </el-header>
     <el-container style="width:80%;margin-left:10%;margin-top:6%" >
      <el-aside width="300px" style="margin-top:0px">
        <el-card class="comm-card" style="text-align:left;margin-top:20px;padding:0">
          <div slot="header" class="clearfix" >
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-s-comment"></i>  最新评论</span>
          </div>
          <ul class="content_list comment_list">
                      <li v-for="items in recent" :key="items.id">
                        <span>{{items.author.charAt(0)}}</span>
                        <b><em style="color:skyblue">{{items.author}}</em> &nbsp;&nbsp;&nbsp;在  {{items.createTime}}说:</b>
                        <strong>{{items.content}}</strong>
                    </li>
                </ul>
        </el-card>
        <el-card class="hotwords-card" style="text-align:left;margin-top:20px">
          <div slot="header" class="clearfix">
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-loading"></i>热词星球</span>
          </div>
        <hot-words></hot-words>
        </el-card>
      </el-aside>
      <el-main style="">
        <el-card class="hot-card" style="text-align:left;">
          <div slot="header" class="clearfix">
            <span style="font-size:28px;font-weight:700"><i style="color:#545c64;font-size:32px" class="el-icon-finished"></i>  相关结果列表</span>
          </div>
          <div v-for="items in findnews" :key="items.id.toString()"  class="common_news_list" @click="godetails(items.id)">
                <a href="#" class="list_pic"><img style="width:190px;height:130px" :src="items.picture?items.picture:morenp" alt=""></a>
                <h4>{{items.title}}</h4>
                <p>{{items.newsAbstract}}</p>
                <div class="new_info">
                    <span>&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( {{items.readNum}}
                        )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论热度( {{items.commentNum}} )</span>
                    <b>发布于 2018-08-30 12:18:58</b>
                </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
    <el-footer style="margin:0;padding:0">
      <footer-all></footer-all>
    </el-footer>
  </el-container>
</template>
<script>
import { getChannels } from '@/api/channel.js'
import { recentcomm, searchnewsbytype, searchnewsbyname } from '@/api/news.js'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      search: '',
      statu: '',
      channels: [],
      isClick: false,
      recent: [],
      findnews: []
    }
  },
  methods: {
    haoway () {
      if (window.localStorage.getItem('by') === 1) {
        this.loadSearchNewsByType()
      } else {
        this.loadSearchNewsByName()
      }
    },
    godetails (id) {
      this.$store.commit('setarticalid', id)
      this.$router.push('/details')
    },
    async loadRecentComm () {
      const { data } = await recentcomm()
      this.recent = data.data.items
    },
    async loadSearchNewsByName () {
      const name = this.$store.state.searchname
      const { data } = await searchnewsbyname(name)
      this.findnews = data.data.items
    },
    async loadSearchNewsByType () {
      const type = this.$store.state.searchtype
      const { data } = await searchnewsbytype(type)
      this.findnews = data.data.items
    },
    searchname (name) {
      this.$store.commit('setsearchname', name)
      window.localStorage.setItem('by', 0)
      this.loadSearchNewsByName()
    },
    searchtype (type) {
      this.$store.commit('setsearchtype', type)
      window.localStorage.setItem('by', 1)
      this.loadSearchNewsByType()
    },
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
  },
  created () {
    this.getsta()
    this.loadChannels()
    this.loadRecentComm()
    setTimeout(this.haoway(), 100)
  }
}
</script>
<style lang="less" scoped>
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
  .common_news_list {
    height: 135px;
    padding-left: 195px;
    position: relative;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
      .list_pic {
      position: absolute;
      width: 180px;
      height: 135px;
      left: 0;
      top: 0;
        .common_news_list .list_pic img {
        width: 180px;
        height: 135px;
        }
      }
      h4 {
          font-size: 18px;
          line-height: 20px;
          font-weight: bold;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-top: -1px;
        }
       p {
          font-size: 12px;
          color: #666;
          line-height: 22px;
          margin-top: 12px;
      }
}
.new_info {
    overflow: hidden;
    margin-top: 20px;
   span {
        font-size: 12px;
        color: #999;
        float: left;
    }
    b {
        font-size: 12px;
        color: #999;
        float: right;
        font-weight: normal;
    }
}
ul {
    list-style: none;
    padding:0;
    margin:0;
}
.content_list {
    margin: 5px 15px;
     li {
      height: 59px;
      border-bottom: 1px dashed #e6e6e6;
      overflow: hidden;
       span {
          float: left;
          width: 18px;
          height: 18px;
          background-color: #999999;
          text-align: center;
          line-height: 18px;
          color: #fff;
          font-size: 12px;
          margin-top: 9px;
      }
      span {
          width: 40px;
          height: 40px;
          line-height: 40px;
          font-size: 20px;
          background-color: #545c64;
          border-radius: 50%;
          margin: 10px 10px 0 0;
      }
       b, strong {
          font-size: 12px;
          font-weight: normal;
          float: left;
          width: 168px;
          color: #999;
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
      }
      strong {
          margin-top: 5px;
      }
    }
}

</style>
