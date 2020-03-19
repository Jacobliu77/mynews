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
        <el-submenu index="2">
          <template slot="title">风格选电影</template>
          <el-menu-item
            v-for="(item) in stylechannel"
           :key="item.id"
            :index="item.style"
          >{{item.style}}</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">位置选电影</template>
          <el-menu-item
            v-for="(item) in addresschannel"
            :key="item.id"
            :index="item.area"
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
        <el-page-header slot="header" @back="$router.push('/home')" title="回首页" content="搜索电影页"></el-page-header>
        <div style="text-align:left;font-size:18px;margin-left:40px">
          <span>电影条件筛选</span>
        </div>
        <div style="text-align:left;font-size:18px;margin:20px 60px">
          <el-divider direction="vertical"></el-divider>
          <span>地区：</span>
          <el-divider direction="vertical"></el-divider>
          <el-tag :type="type" style="font-size:17px;margin-left:10px ;">全部</el-tag>
          <el-tag
            v-for="(item,index) in addresschannel"
            :key="index"
            :index="`3-${item.id}`"
            :type="type"
            @click="handleareaAdd(item.area)"
            style="font-size:17px;margin-left:10px ;"
          >{{item.area}}</el-tag>
        </div>
        <div style="text-align:left;font-size:18px;margin:20px 60px">
          <el-divider direction="vertical"></el-divider>
          <span>类型：</span>
          <el-divider direction="vertical"></el-divider>
          <el-tag :type="type" style="font-size:17px;margin-left:10px ;">全部</el-tag>
          <el-tag
            v-for="(item,index) in stylechannel"
            :key="index"
            :index="`3-${item.id}`"
            :type="type"
            @click="handlestyleAdd(item.style)"
            style="font-size:17px;margin-left:10px ;"
          >{{item.style}}</el-tag>
        </div>
        <div style="text-align:left;font-size:18px;margin-left:40px">
          <span>已为您筛选条件为：</span>
          <el-divider direction="vertical"></el-divider>
          <el-tag
            v-for="(item,index) in filters"
            :key="index"
            :index="item"
            :closable=true
            @close="handleClose(item)"
            style="font-size:17px;margin:10px ;"
          >{{item}}</el-tag>
          <span>共</span>
          <span style="color:blue;font-weight:700">{{ filmitems.length }}</span>
          <span>条数据</span>
        </div>
        <el-divider></el-divider>
        <div style="text-align:left;font-size:18px;margin-left:40px">
          <el-select v-model="sort" placeholder="请选择排序方式" @change="getsortfilm">
            <el-option value="0" label="最新"></el-option>
            <el-option value="1" label="最热"></el-option>
            <el-option value="2" label="好评"></el-option>
          </el-select>
        </div>
       <div style="display:flex;justify:space-around;flex-wrap: wrap;"  class="row-bg" >
            <el-card v-for="item in filmitems" :key="item.id" class="maincard" :body-style="{ padding: '0px' }" >
          <img
            :src="item.picture_url"
            class="image"
            @click="godetails(item.id)"
          />
          <div style="padding: 14px;">
            <span style="font-weight:700;font-size:22px">{{item.name}}   </span>   <span style="color:orange"> {{item.score}}分</span>
            <div class="bottom clearfix">
             <span>由 {{item.director}} 导演</span>
            </div>
          </div>
          </el-card>
        </div>
        <el-divider></el-divider>
        <el-pagination background layout="prev, pager, next"  :page-count="totalpage"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        @current-change="currentChange"
        :total="totalcomm"></el-pagination>
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
import { searchfilm, sortserchfilm } from '@/api/film.js'

export default {
  data () {
    return {
      pageSize: 3,
      totalcomm: 0,
      currentPage: 0,
      totalpage: 0,
      areaserch: '',
      styleserch: '',
      selectarea: '',
      selecttype: '',
      activeIndex: '1',
      stylechannel: [],
      addresschannel: [],
      filters: [],
      type: 'info',
      sort: '',
      filmitems: []
      // currentDate: new Date()
    }
  },
  methods: {
    onsearch () {
      this.getfilm()
    },
    handleSelect (key, keyPath) {
      this.$store.state.active = key
    },
    handleClose (tag) {
      this.filters.splice(this.filters.indexOf(tag), 1)
      this.getsortfilm()
    },
    handleareaAdd (tag) {
      this.areaserch = tag
      this.filters = []
      this.filters.push(tag)
      this.getsortfilm()
    },
    handlestyleAdd (tag) {
      this.filters.push(tag)
      this.getsortfilm()
    },
    handleSelecttype (key) {
      this.selecttype = key
    },
    handleSelectarea (key) {
      this.selectarea = key
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.stylechannel = data.data.items
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.addresschannel = data.data.items
    },
    godetails (id) {
      this.$store.state.keyid = id
      this.$router.push('/details')
    },
    async getfilm () {
      const name = this.$store.state.searchkeywords
      const { data } = await searchfilm(name)
      this.filmitems = data.data.items
    },
    async getsortfilm () {
      const area = this.areaserch
      const sort = this.sort
      const { data } = await sortserchfilm(area, sort)
      if (data.code === 200) {
        this.filmitems = data.data.items
        this.$message({
          type: 'success',
          message: '分类获取电影成功'
        })
      } else {
        this.$message({
          type: 'error',
          message: '分类获取电影失败原因是' + data.error
        })
      }
    },
    currentChange () {

    }
  },
  created () {
    this.loadStyleChannels()
    this.loadAddresChannels()
    this.getfilm()
    this.filters.push(this.$store.state.selectindex)
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
  .el-row {
    margin: 40px 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
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
.maincard {
  width: 300px;
  height: 500px;
  margin: 30px 1.85%;
   .image {
    width: 100%;
    height: 430px;
    display: block;
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
