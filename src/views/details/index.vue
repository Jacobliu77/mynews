<template>
  <el-container class="" style="width:100%;text-align:center;">
    <header-all></header-all>
     <el-container style="width:80%;margin-left:10%;" >
      <el-aside width="300px" style="margin-top:0px">
        <el-card class="comm-card" style="text-align:left;margin-top:20px;padding:0">
          <div slot="header" class="clearfix" >
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-s-comment"></i>最新评论</span>
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
         <bread-crumb-front slot="header">
            <template slot="title"> <a href="">上一级页面</a>  <span style="font-weight:700;color:#ccc">></span> 文章详情</template>
          </bread-crumb-front>
          <h3 class="article_title" id="title">{{newsdetails.title}}</h3>
          <div class="article_info"><span id="author">{{newsdetails.author}} </span> 发布于 <span id="date"> {{newsdetails.releaseTime}}</span>&nbsp;&nbsp;&nbsp;阅读:
                ( <span id="readcount"> {{newsdetails.readNum}}</span> )&nbsp;&nbsp;&nbsp;评论: ( <span id="commentCount">{{newsdetails.commentNum}}</span> )
          </div>
          <img :src="newsdetails.picture" alt="" style="width:70%;margin-left:13.5%;margin-top:15px">
          <div class="article_con" id="content" v-html="newsdetails.content">
          </div>
          <div class="">
              上一篇： <a href="#">世界第一台可以玩游戏的冰箱</a><br>
              下一篇： <a href="#">世界第一个可以玩游戏的马桶、世界上第一个可以玩游戏的茶杯</a>
          </div>
          <form :model="formData" class="comment_form" v-if="islogin">
                <div class="form_group">
                    <label>评论内容：</label>
                    <textarea v-model="formData.content" placeholder="请发表您的评论" id="usercontent" class="comment_input"></textarea>
                </div>
                <div class="form_group" style="text-align:right">
                <el-button type="primary" round  @click="sub">发表己见</el-button>
                </div>
          </form>
          <div class="notlogin" style="text-align:center" v-else>
            <h3>亲！您未登录不可以评论哦！</h3>
            <el-button type="primary" round  @click="$router.push('/login')">这就去登录</el-button>
          </div>
          <div class="comment_count">
               <span id="comment_count">{{relavtivecomm.length}}</span> 条评论
          </div>
          <div class="comment_list_con" id="comment_list_down" v-for="item in relavtivecomm" :key="item.id">
                <div class="comment_detail_list">
                    <div class="person_pic fl">{{item.author.charAt(0)}}</div>
                    <div class="name_time fl"><b>{{item.author}}</b><span>在{{item.createTime}}说</span></div>
                    <div class="comment_text fl">
                       {{item.content}}
                    </div>
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
import { recentcomm, getnews } from '@/api/news.js'
import { getidComm, publicComm } from '@/api/comment.js'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      formData: {},
      islogin: false,
      recent: [],
      newsdetails: {},
      relavtivecomm: []
    }
  },
  methods: {
    sub () {
      this.pubComm()
    },
    async pubComm () {
      const fd = this.formData
      fd.newsId = this.$store.state.articalid
      fd.accountName = window.localStorage.getItem('user-account')
      const { data } = await publicComm(fd)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '发表评论成功'
        })
        this.loadComm()
      } else {
        this.$message({
          type: 'error',
          message: '评论发表失败' + data.error
        })
      }
    },
    async loadRecentComm () {
      const { data } = await recentcomm()
      this.recent = data.data.items
    },
    async loadNews () {
      const id = this.$store.state.articalid
      const { data } = await getnews(id)
      this.newsdetails = data.data.info
    },
    async loadComm () {
      const id = this.$store.state.articalid
      const { data } = await getidComm(id)
      this.relavtivecomm = data.data.items
    },
    islogined () {
      var flag = window.localStorage.getItem('user-token')
      if (flag) {
        this.islogin = true
      } else {
        this.islogin = false
      }
    }
  },
  created () {
    this.loadRecentComm()
    this.islogined()
    setTimeout(this.loadNews(), 100)
    setTimeout(this.loadComm(), 100)
  }
}
</script>
<style lang="less" scoped>
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
  .article_title {
      text-align: center;
      font-size: 24px;
      color: #666;
      margin-top: 34px;
      line-height: 30px;
  }
  .article_info {
    text-align: center;
    font-size: 12px;
    color: #999;
    border-bottom: 1px solid #ddd;
    padding: 20px 0 15px 0;
}
.article_con p {
    margin: 20px 0;
    font-size: 14px;
    line-height: 24px;
    color: #666;
    text-indent: 28px;
}
.article_links {
    font-size: 12px;
    color: #999;
    line-height: 24px;
    margin-top: 60px;
    a {
    color: #999;
    }
}
.comment_form {
    margin-top: 50px;
    overflow: hidden;
    .form_group {
    overflow: hidden;
    margin-bottom: 15px;
      label {
          width: 80px;
          float: left;
          font-size: 12px;
          color: #333;
          text-align: right;
          line-height: 24px;
      }
      .comment_input {
          float: left;
          width: 648px;
          height: 60px;
          border-radius: 4px;
          padding: 10px;
          outline: none;
          border: 1px solid #ddd;
          font-family: 'Microsoft YaHei';
      }
       .comment_sub {
          float: right;
          width: 58px;
          height: 28px;
          border: 1px solid #ddd;
          background: #fff;
          border-radius: 4px;
          cursor: pointer;
      }
    }
}
.comment_count {
    font-size: 16px;
    color: #333;
    border-bottom: 1px solid #ebebeb;
    padding: 12px 0;
}
.fl {
    float: left;
}
.comment_detail_list {
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
    margin-top: 15px;
    padding-bottom: 15px;
    .person_pic {
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 20px;
      background-color: #545c64;
      border-radius: 50%;
      color: #fff;
      text-align: center;
  }
    .name_time {
      width: 680px;
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      color: #333;
      margin: 0 0 5px 20px;
      b {
          float: left;
      }
      span {
          float: right;
          font-size: 12px;
          color: #999;
      }
  }
    .comment_text {
        width: 680px;
        font-size: 14px;
        line-height: 20px;
        color: #333;
        margin: 5px 0 0 20px;
        text-align: justify;
    }
}
</style>
