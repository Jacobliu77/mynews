<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="0">
          <img src="../../assets/img/icon.png" alt />
        </el-menu-item>
        <el-menu-item  @click="$router.push('/home')" index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item
            v-for="(item) in stylechannel"
            :key="item.id"
            :index="item.style"
            @click="$router.push('/search')"
          >{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu  index="3">
          <template slot="title">位置选电影</template>
          <el-menu-item
            v-for="(item) in addresschannel"
            :key="item.id"
            :index="item.area"
            @click="$router.push('/search')"
          >{{item.area}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="tosomewhere">个人中心</el-menu-item>
        <el-menu-item style="float: right;margin-right:40px" index="5">
          <el-input  size="small" v-model="$store.state.searchkeywords" placeholder="搜索电影"> </el-input>
          <el-button @click="$router.push('/search')" type="text" style="background-color:#545c64;color:#fff;margin-left:20px"  icon="el-icon-search"></el-button>
          </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-carousel indicator-position="none" height="460px">
        <el-carousel-item v-for="item in 5" :key="item"></el-carousel-item>
      </el-carousel>
      <template class="news">
         <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="hh">新闻要闻</span>
            </div>
            <div v-for="(item,index) in newsa" :key="index" class="text item">{{item}}</div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="hh">新闻快讯</span>
            </div>
            <div v-for="(item,index) in newsb" :key="index" class="text item">{{item}}</div>
          </el-card>
        </el-col>
        <el-col :span="7">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span class="hh">最热电视剧</span>
            </div>
            <div v-for="(item,index) in hotfilm" :key="index" class="text item">{{item}}</div>
          </el-card>
        </el-col>
      </el-row>
      </template>
      <el-divider></el-divider>
      <h2 style="text-align:left;padding-left:45px"><i class="el-icon-video-camera-solid"></i> 评分最高</h2>
      <el-row type="flex" class="row-bg" justify="space-around">
          <el-col :span="4">
            <div class="top" >1</div>
            <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583333828791&di=114d98ce128116c02a50d68e695c96ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F202fa81329a57daac9fce253907845ca611b0aae1bb85-Tqfz3j_fw658"
            class="image"
           @click="godetails(6)"
          />
          <div style="padding: 14px;">
            <span style="font-weight:700;font-size:22px" >肖申克的救赎</span>  <span style="color:orange"> 9.7分</span>
            <div class="bottom clearfix">
               <span>由 弗兰克·德拉邦特 导演</span>
            </div>
          </div>
        </el-card>
          </el-col>
          <el-col :span="4">
            <div class="top bb" >2</div>
            <el-card id=7 :body-style="{ padding: '0px' }">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2916036695,1359483048&fm=26&gp=0.jpg"
            class="image"
            @click="godetails(7)"
          />
          <div style="padding: 14px;">
            <span style="font-weight:700;font-size:22px" >霸王别姬</span>  <span style="color:orange"> 9.6分</span>
            <div class="bottom clearfix">
               <span>由 陈凯歌 导演</span>
            </div>
          </div>
        </el-card>
          </el-col>
           <el-col :span="4">
             <div class="top cc" >3</div>
            <el-card id=9 :body-style="{ padding: '0px' }">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583334443290&di=7eaf862ac4c299fffeef57d1f8f82d24&imgtype=0&src=http%3A%2F%2Fwx2.sinaimg.cn%2Fmw690%2Fe4be24adgy1fqk82zgifoj21ig2bckjl.jpg"
            class="image"
            @click="godetails(9)"
          />
          <div style="padding: 14px;">
            <span style="font-weight:700;font-size:22px" >控方证人</span>  <span style="color:orange"> 9.6分</span>
            <div class="bottom clearfix">
               <span>由 比利·怀德 导演</span>
            </div>
          </div>
        </el-card>
          </el-col>
          <el-col :span="4">
            <el-card id=8 :body-style="{ padding: '0px' }">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583338557734&di=88238d47962a57f453784bcb43bc5439&imgtype=0&src=http%3A%2F%2Fmov.tw.mm52.com%2F1998%2Felizabeth%2Felizabeth_0001_620px.jpg"
            class="image"
            @click="godetails(8)"
          />
          <div style="padding: 14px;">
             <span style="font-weight:700;font-size:22px" >伊丽莎白</span>  <span style="color:orange"> 9.6分</span>
            <div class="bottom clearfix">
               <span>由 谢加·凯普尔 导演</span>
            </div>
          </div>
        </el-card>
          </el-col>
           <el-col :span="4">
            <el-card id=5 :body-style="{ padding: '0px' }">
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583334244343&di=2e009ea1a48ffdc95ed9104a39a47797&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F47%2F37%2F19300001208995130320373359586.jpg"
            class="image"
            @click="godetails(5)"
          />
          <div style="padding: 14px;">
             <span style="font-weight:700;font-size:22px" >阿甘正传</span>  <span style="color:orange"> 9.5分</span>
            <div class="bottom clearfix">
               <span>由 罗伯特·泽米吉斯 导演</span>
            </div>
          </div>
        </el-card>
          </el-col>
        </el-row>
    </el-main>
    <el-footer>
      <footer class="footer" style="width: 100%;">
        <div class="footer-inner">
          <h3 class="homeico">
            <img src="../../assets/img/icon.png" alt />
          </h3>
          <p class="footer-inner-links">
            <a
              href="https://www.1905.com/about/aboutus/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >关于我们</a>
            <span>|</span>
            <a
              href="https://www.1905.com/sitemap.html?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >网站地图</a>
            <span>|</span>
            <a
              href="https://www.1905.com/jobs/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >诚聘英才</a>
            <span>|</span>
            <a
              href="https://www.1905.com/about/copyright/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >版权声明</a>
            <span>|</span>
            <a
              href="https://www.1905.com/about/contactus/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >联系我们</a>
            <span>|</span>
            <a
              href="https://www.1905.com/error_report/error_report-p-pid-125-cid-126-tid-128.html?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >帮助与反馈</a>
            <span>|</span>
            <a
              href="https://www.1905.com/link/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >友情链接</a>
            <span>|</span>
            <a
              href="https://www.1905.com/cctv6/advertise/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >CCTV6广告招商</a>
            <!--<span>|</span>
            <a href="javascript:void(0)">合作媒体</a>-->
          </p>
          <div class="footer-inner-bottom">
            <a
              href="https://www.1905.com/about/licence/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >网络视听许可证0107199号</a>
            <a
              href="https://www.1905.com/about/cbwjyxkz/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >出版物经营许可证</a>
            <a
              href="https://www.1905.com/about/dyfxjyxkz/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >电影发行经营许可证</a>
            <a
              href="https://www.1905.com/about/jyxyc/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >经营性演出许可证</a>
            <a
              href="https://www.1905.com/about/gbdsjm/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >广播电视节目制作经营许可证</a>
            <br />
            <a
              href="https://www.1905.com/about/beian/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >企业法人营业执照</a>
            <a
              href="https://www.1905.com/about/zzdxyw/?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >增值电信业务经营许可证</a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202000300?fr=homepc_bottom"
              target="_blank"
              data-hrefexp="fr=homepc_bottom"
            >京ICP备12022675号-3</a>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010202000300"
              target="_blank"
            >京公网安备 11010202000300号</a>
          </div>
        </div>
      </footer>
    </el-footer>
  </el-container>
</template>
<script>
import { getStyleChannels, getAddresChannels } from '@/api/channel.js'

export default {
  name: 'home',
  components: {},
  data () {
    return {
      activeIndex: '1',
      stylechannel: [],
      addresschannel: [],
      hotfilm: ['安家', '完美关系', '三生三世十里桃花--枕上书', '想见你'],
      newsa: ['papi酱生子', '外交部 坚决反对称新冠病毒是中国病毒', '英国再现集装箱藏人案', '甘薇放弃财产优先分配权'],
      newsb: ['4128万多名党员捐款47.3亿元', '迪丽热巴翻牌', '中国科研团队发现新冠病毒已突变', '新冠肺炎与季节性流感有4大不同']
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$store.state.selectindex = key
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.stylechannel = data.data.items
    },
    godetails (id) {
      this.$store.state.keyid = id
      this.$router.push('/details')
    },
    // 获取时下新闻
    async getnewsall () {
      // 调用删除接口
      const { data } = await this.$axios({
        method: 'get',
        url: `https://www.enlightent.cn/research/top/getWeiboRank.do?type=realTimeHotSearchList`,
        headers: {
          'Content-Type': 'application/json', // 设置请求头请求格式为JSON
          'access_token': this.token // 设置token 其中K名要和后端协调好
        }
      })
      this.newsa = data.slice(1, 5)
      this.newsb = data.slice(-1, -5)
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.addresschannel = data.data.items
    },
    tosomewhere () {
      if (window.localStorage.getItem('isAdmin') === 'ADMIN') {
        this.$router.push('/account')
      } else {
        this.$router.push('/visitor')
      }
    }
    // load () {
    //   this.count += 2
    // }
  },
  created () {
    this.loadStyleChannels()
    this.loadAddresChannels()
    // this.getnewsall()
  }
}
</script>
<style lang="less" scoped>
.el-header,
.el-footer {
  // background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu-item {
  img {
    height: 100%;
  }
}
.el-main {
  .news {
    //news
.row-bg {
  padding: 10px 0;
}
.el-row {
  margin: 20px 0;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
  }
}
  }
  .el-row {
    margin: 40px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    .top {
      background-color:#e63131;
      color: aliceblue;
      width:45px;
      height:45px;
      position: absolute;
      font-size: 35px;
      font-weight: 700
    }
    .bb {
      background-color:#ee8447;
    }
    .cc {
       background-color:#ebee47;
    }
     .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 300px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
}

body > .el-container {
  margin-bottom: 40px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(3) {
  background: url("../../assets/img/01.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(4) {
  background: url("../../assets/img/02.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(5) {
  background: url("../../assets/img/03.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(6) {
  background: url("../../assets/img/04.jpg");
  background-size: cover;
}
.el-carousel__item:nth-child(7) {
  background: url("../../assets/img/05.jpg");
  background-size: cover;
}
.el-footer {
  // min-width: 980px;
  // background: #20232c;
  color: #666;
  img {
    height: 80px;
  }
  .footer-inner {
    width: 100%;
    padding: 29px 0 33px;
  }
  .footer-inner,
  .copy-right-conts {
    margin: 0;
    background-color:#545c64;
  }
  .footer-inner-links {
    font: 12px/12px "Microsoft Yahei";
    height: 12px;
    margin-bottom: 8px;
    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
      }
    a {
    color: #d5d5d5;
    }
  }
  .footer-inner-bottom a {
    font: 12px/28px "Microsoft Yahei";
    color: #858ca1;
    display: inline-block;
    margin-right: 23px;
  }
  a:link, a:visited, a:hover {
    text-decoration: none;
}
}
</style>
