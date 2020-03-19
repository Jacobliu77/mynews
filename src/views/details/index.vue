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
        <el-menu-item @click="$router.push('/home')" index="1">首页</el-menu-item>
        <el-submenu @click="$router.push('/search')" index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item
            v-for="(item,index) in stylechannel"
            :key="index"
            :index="`2-${item.id}`"
             @click="$router.push('/search')"
          >{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu @click="$router.push('/search')" index="3">
          <template slot="title">位置选电影</template>
          <el-menu-item
            v-for="(item,index) in addresschannel"
            :key="index"
            :index="`3-${item.id}`"
             @click="$router.push('/search')"
          >{{item.area}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="4" @click="$router.push('/account')">个人中心</el-menu-item>
        <el-menu-item style="float: right;margin-right:40px" index="5">
          <el-input size="small" v-model="$store.state.searchkeywords" placeholder="搜索电影"></el-input>
          <el-button
            @click="onsearch"
            type="text"
            style="background-color:#545c64;color:#fff;margin-left:20px"
            icon="el-icon-search"
          ></el-button>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <el-card>
        <el-page-header slot="header" @back="$router.push('/search')" title="回搜索页" content="电影详情页"></el-page-header>
        <div class="top">
            <div class="topbanner"></div>
            <div class="bottombanner"></div>
            <div class="toptext">
                <div class="left">
                    <img :src="infodata.picture_url?infodata.picture_url:imgurl" alt="">
                </div>
                <div class="right">
                    <div class="right-title">
                        <h1 style="font-size:38px;line-hight:40px">{{infodata.name}} <span style="font-size:34px;color:yellow;margin-left:30px">{{infodata.score}}</span> </h1>
                        <h3 style="font-size:22px">{{infodata.hits}}<a href="#" style="text-decoration: none;color:#fff;margin-left:10px">次点击</a></h3>
                    </div>
                    <div class="right-main">
                       <div>
                          <span style="font-size:25px">导演：</span>
                          <span>{{infodata.director}}</span>
                      </div>
                      <div style="margin-top:15px">
                          <span style="font-size:22px;margin-top:30px">演员列表:  </span>
                            <span  v-for="(item,index) in infodata.actors " :key="index">{{item}} | </span>
                      </div>
                      <el-rate
                        v-model="showscore"
                        disabled
                        style="margin:15px 0 ;font-size:25px;display:inline-block">
                      </el-rate><span style="font-size:25px;color: rgb(243, 213, 44);">{{infodata.score}} 分</span>
                       <div class="plot">
                          <p>{{infodata.introduce}}</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <el-row :gutter="12" class="bottom">
          <el-col :span="18">
            <el-card shadow="always">
             <p style="font-size:25px;margin-top:-5px;font-weight:700">精彩快播</p>
              <el-divider></el-divider>
             <video src="../../assets/video/test.mp4" controls></video>
             <el-divider></el-divider>
             <h2 style="text-align:left;margin-left:40px">发表我的观点</h2>
                <el-input class="texta" type="textarea" rows="5" v-model="mycomm"></el-input>
                <el-button type="primary" style="margin-top:20px" @click="onSubmit">立即发表</el-button>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always" style="height:900px;overflow:scroll">
            <p style="font-size:25px;margin-top:-5px;font-weight:700">相关评论</p>
             <el-divider></el-divider>
             <el-timeline>
              <el-timeline-item
                v-for="(activity, index) in commData"
                :key="index"
                :timestamp="activity.create_time">
                {{activity.content}}
              </el-timeline-item>
            </el-timeline>
            </el-card>
          </el-col>
        </el-row>
      </el-card>
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
import { getfilminfo } from '@/api/film.js'
import { getidComm, commitcomm } from '@/api/comment.js'
export default {
  data () {
    return {
      id: '',
      imgurl: '../../assets/img/testbig.jpg',
      videourl: '',
      activeIndex: '1',
      stylechannel: [],
      addresschannel: [],
      filters: [],
      commData: [],
      type: 'info',
      sort: '',
      showscore: 0,
      infodata: {},
      mycomm: ''
    }
  },
  methods: {
    onsearch () {
      console.log('触发了搜索事件')
    },
    handleSelect (key, keyPath) {
      this.$store.state.active = key
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.stylechannel = data.data.items
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.addresschannel = data.data.items
    },
    async getidcomm (id) {
      const { data } = await getidComm(id)
      this.commData = data.data.items
    },
    async getidfilm (id) {
      const { data } = await getfilminfo(id)
      if (data.code === 200) {
        this.infodata = data.data
      } else {
        this.$message({
          type: 'error',
          message: '查询电影信息失败' + data.error
        })
      }
    },
    async onSubmit () {
      const fd = {}
      fd.movie_id = this.id
      fd.account_name = window.localStorage.getItem('user-account')
      fd.content = this.mycomm
      console.log(fd)
      const { data } = await commitcomm(fd)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '评论发表成功！！'
        })
        this.getidcomm(this.id)
      } else {
        this.$message({
          type: 'error',
          message: '评论发表失败' + data.error
        })
      }
    },
    starLevel (evaluate) {
      return evaluate / 2 // 最高评分为10，星级只有5级 所以需要除2，再四舍五入获取评分数
    }
  },
  created () {
    this.id = this.$store.state.keyid
    this.loadStyleChannels()
    this.loadAddresChannels()
    this.getidfilm(this.id)
    this.getidcomm(this.id)
    // vue 数据获取存在时间问题
    setTimeout(() => {
      this.showscore = this.starLevel(parseInt(this.infodata.score))
    }, 400)
  }
}
</script>
<style lang="less" scope>
.head-upload {
  border-radius: 50%;
  position: absolute;
  top: 180px;
  right: 260px;
  img {
    width: 200px;
    height: 200px;
  }
}
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
body > .el-container {
  margin-bottom: 40px;
}
.el-main {
  .top {
      position: relative;
      overflow: hidden;
  }
  .topbanner {
      width: 105%;
      margin-left: -25px;
      height: 180px;
      background: url('../../assets/img/banner-blackbig.jpg') no-repeat center center;
      background-size: cover;
  }
  .bottombanner {
      width: 105%;
      margin-left: -25px;
      height: 300px;
      background:rgb(247, 246, 246);
  }
  .toptext {
      position: absolute;
      width: 90%;
      height: 390px;
      top: 40px;
      left: 80px;
      .left {
          float: left;
          height: 100%;
          width: 25%;
          box-shadow: 1px 2px 3px 3px #ccc;
          img {
              width: 100%;
          }
      }
      .right {
          float: right;
          height: 100%;
          width: 75%;
          text-align: left;
          box-sizing: border-box;
          padding-left: 80px;
          .right-title {
            color: #fff;
            height: 90px;
            width: 100%;
          }
          .right-main {
            margin-top:20px;
            color: #000;
            height: 300px;
            width: 100%;
            .plot {
              width: 100%;
              height: 300px;
              background: url('../../assets/img/001.png')no-repeat;
              background-size: contain;
              p {
                padding: 30px 25px 25px 103px;
                line-height: 30px;
                font-size: 15px;
              }
            }
          }
      }
  }
  .bottom {
    .el-card__header {
      padding: 0 10px;
    }
    .texta {
      resize:none;
    }
  }
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
    background-color: #545c64;
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
  a:link,
  a:visited,
  a:hover {
    text-decoration: none;
  }
}
</style>
