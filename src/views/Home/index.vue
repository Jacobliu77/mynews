<template>
  <el-container class="" style="width:100%;text-align:center;">
    <header-all></header-all>
     <el-container style="width:80%;margin-left:10%;" >
      <el-main style="">
        <el-carousel :interval="5000" arrow="always" style="height:450px;width:100%;" >
        <el-carousel-item style="height:450px" v-for="(item,index) in imgs" :key="index">
          <img :src="item" style="width:100%;height:100%;" alt="">
        </el-carousel-item>
      </el-carousel>
      <el-card class="hot-card" style="text-align:left;margin-top:20px">
        <div slot="header" class="clearfix">
          <span style="font-size:28px;font-weight:700"><i style="color:#545c64;font-size:32px" class="el-icon-s-promotion"></i>最热推荐</span>
          <el-button style="float: right; padding: 3px 0;font-size:30px" type="text">>></el-button>
        </div>
         <div v-for="items in hotnews" :key="items.id.toString()"  class="common_news_list" @click="godetails(items.id)">
                <a href="#" class="list_pic"><img style="width:190px;height:130px" :src="items.picture?items.picture:morenp" alt=""></a>
                <h4><a href="#">{{items.title}} </a></h4>
                <p>{{items.newsAbstract}}</p>
                <div class="new_info">
                    <span>标签：{{items.newsTypes.type}}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( {{items.readNum}}
                        )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论热度( {{items.commentNum}} )</span>
                    <b>发布于 2018-08-30 12:18:58</b>
                </div>
          </div>
      </el-card>
      </el-main>
      <el-aside width="300px" style="margin-top:20px">
        <el-card style="width:99%;height:450px">
          <!-- 热搜榜 -->
          <weibo></weibo>
        </el-card>
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
    </el-container>
    <el-footer style="margin:0;padding:0">
      <footer-all></footer-all>
    </el-footer>
  </el-container>
</template>
<script>
import { gethotnews, recentcomm } from '@/api/news.js'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584691787583&di=4e48cc0b077255c1f61e4b7ba9b20965&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200227%2Feed4fc377a514e50a382e64849131946.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692609687&di=f904d7e1d4821b27c760c1d2aa0cf4ea&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1207%2F09%2Fc1%2F12275680_1341814069050.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692649184&di=eb0cd0c9b17c7a876cd1191bb5b0a0a8&imgtype=0&src=http%3A%2F%2Fpcs4.clubstatic.lenovo.com.cn%2Fdata%2Fattachment%2Fforum%2F201601%2F29%2F090020nejbgt8ckgefjxcc.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692432073&di=24f2d937ba25c982312af147bdaa55a2&imgtype=0&src=http%3A%2F%2Fdimg02.c-ctrip.com%2Fimages%2Ffd%2Ftg%2Fg2%2FM02%2F8B%2F33%2FCghzf1Ww3rCAKMvTABUl9T2-0U8651_R_1600_10000_Mtg_7.jpg'],
      hotnews: [],
      recent: [],
      morenp: ' https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586945111561&di=5d655776ef6f3dde092c754c6c7e43c7&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F92%2F40573c69065b76e.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue'
    }
  },
  methods: {
    async loadHotNews () {
      const { data } = await gethotnews()
      this.hotnews = data.data.items
      // console.log(this.hotnews)
    },
    godetails (id) {
      this.$store.commit('setarticalid', id)
      this.$router.push('/details')
    },
    async loadRecentComm () {
      const { data } = await recentcomm()
      this.recent = data.data.items
      // console.log(this.recent)
    }
  },
  created () {
    this.loadHotNews()
    this.loadRecentComm()
  }
}
</script>
<style lang="less" scoped>
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
