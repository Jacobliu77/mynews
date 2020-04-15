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
          <div slot="header" class="clearfix">
            <span style="font-size:28px;font-weight:700"><i style="color:#545c64;font-size:32px" class="el-icon-finished"></i>  最热推荐</span>
            <el-button style="float: right; padding: 3px 0;font-size:30px" type="text">>></el-button>
          </div>
          <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic09.jpg" alt=""></a>
                  <h4><a href="#">亚马逊金融试水中国？背后却是和华尔街的“金融战争” </a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
            </div>
              <el-divider></el-divider>
              <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic03.jpg" alt=""></a>
                  <h4><a href="#">马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱,马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱</a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
              </div>
              <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic09.jpg" alt=""></a>
                  <h4><a href="#">亚马逊金融试水中国？背后却是和华尔街的“金融战争” </a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
            </div>
              <el-divider></el-divider>
              <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic03.jpg" alt=""></a>
                  <h4><a href="#">马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱,马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱</a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
              </div>
              <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic09.jpg" alt=""></a>
                  <h4><a href="#">亚马逊金融试水中国？背后却是和华尔街的“金融战争” </a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
            </div>
              <el-divider></el-divider>
              <div class="common_news_list">
                  <a href="#" class="list_pic"><img src="../../assets/img/pic03.jpg" alt=""></a>
                  <h4><a href="#">马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱,马斯克的新花样？连接人脑和电脑的初创公司又筹了一笔钱</a></h4>
                  <p>亚马逊抛弃了中国的买家们，却难以割舍庞大的卖家市场，有消息指出亚马逊中国将针对中国庞大的卖家群体推出一项贷款推荐计划。在连续对印度、墨西哥等新兴市场大力推广线上支付服务后，亚马逊金融试水进军中国市场的信号终于被放出。
                  </p>
                  <div class="new_info">
                      <span>标签：财经&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<i class="el-icon-view"></i>&nbsp;阅读( 5
                          )&nbsp;&nbsp;&nbsp;<i class="el-icon-chat-dot-round"></i>&nbsp;评论( 10 )</span>
                      <b>发布于 2018-08-30 12:18:58</b>
                  </div>
              </div>
               <el-pagination background
                  layout="prev, pager, next"
                  :page-count="totalpage"
                  :current-page.sync="currentPage"
                  :page-size="pageSize"
                  @current-change="currentChange"
                  :total="totalcomm">
                </el-pagination>

        </el-card>
      </el-main>
    </el-container>
    <el-footer style="margin:0;padding:0">
      <footer-all></footer-all>
    </el-footer>
  </el-container>
</template>
<script>
import { recentcomm } from '@/api/news.js'
export default {
  name: 'home',
  components: {},
  data () {
    return {
      pageSize: 5,
      totalcomm: 0,
      currentPage: 1,
      totalpage: 0,
      recent: []
    }
  },
  methods: {
    currentChange () {
      console.log('页码变换了')
    },
    async loadRecentComm () {
      const { data } = await recentcomm()
      this.recent = data.data.items
      // console.log(this.recent)
    }
  },
  created () {
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
