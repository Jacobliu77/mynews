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

      </el-card>
      </el-main>
      <el-aside width="300px" style="margin-top:20px">
        <el-card style="width:99%;height:450px">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="微博热搜" name="first">
              <iframe src="https://s.weibo.com/top/summary" width="90%" frameborder="0"></iframe>
            </el-tab-pane>
            <el-tab-pane label="知乎热搜" name="second">配置管理</el-tab-pane>
          </el-tabs>
        </el-card>
        <el-card class="comm-card" style="text-align:left;margin-top:20px;padding:0">
          <div slot="header" class="clearfix" >
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-s-comment"></i>最新评论</span>
          </div>
          <ul class="content_list comment_list">
                    <li>
                        <span>山</span>
                        <b><em>山治</em> 9个月前(08-14)说:</b>
                        <strong>挺会玩的</strong>
                    </li>
                    <li>
                        <span>丽</span>
                        <b><em>丽丽</em> 9个月前(08-14)说:9个月前(08-14)说:9个月前(08-14)说:</b>
                        <strong>挺会玩的挺会玩的挺会玩的挺会玩的</strong>
                    </li>
                    <li>
                        <span>R</span>
                        <b><em>Rechael</em> 9个月前(08-14)说:</b>
                        <strong>挺会玩的</strong>
                    </li>
                    <li>
                        <span>J</span>
                        <b><em>John</em> 9个月前(08-14)说:</b>
                        <strong>挺会玩的</strong>
                    </li>
                    <li>
                        <span>段</span>
                        <b><em>段正淳</em> 9个月前(08-14)说:</b>
                        <strong>挺会玩的</strong>
                    </li>
                    <li>
                        <span>乔</span>
                        <b><em>乔峰</em> 9个月前(08-14)说:</b>
                        <strong>挺会玩的</strong>
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

export default {
  name: 'home',
  components: {},
  data () {
    return {
      imgs: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584691787583&di=4e48cc0b077255c1f61e4b7ba9b20965&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200227%2Feed4fc377a514e50a382e64849131946.jpeg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692609687&di=f904d7e1d4821b27c760c1d2aa0cf4ea&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1207%2F09%2Fc1%2F12275680_1341814069050.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692649184&di=eb0cd0c9b17c7a876cd1191bb5b0a0a8&imgtype=0&src=http%3A%2F%2Fpcs4.clubstatic.lenovo.com.cn%2Fdata%2Fattachment%2Fforum%2F201601%2F29%2F090020nejbgt8ckgefjxcc.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584692432073&di=24f2d937ba25c982312af147bdaa55a2&imgtype=0&src=http%3A%2F%2Fdimg02.c-ctrip.com%2Fimages%2Ffd%2Ftg%2Fg2%2FM02%2F8B%2F33%2FCghzf1Ww3rCAKMvTABUl9T2-0U8651_R_1600_10000_Mtg_7.jpg'],
      activeName: 'first'
    }
  },
  methods: {
    handleClick () {
      console.log('微博知乎热搜切换事件')
    }
  },
  created () {
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
