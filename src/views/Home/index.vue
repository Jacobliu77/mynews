<template>
  <el-container class="" style="width:100%;text-align:center;">
    <el-header style="width:85%;background:#000;margin-left:8%">
      <el-row type="flex" justify="space-between" style="height:80px">
        <el-col :span="4">
          <div class="leftimg">
              <img src="../../assets/img/icon.png" alt="">
          </div>
        </el-col>
        <el-col :span="6"><div class="middlesearch">中间的搜索框</div></el-col>
        <el-col :span="6"><div class="rightherf"></div>右边的连接</el-col>
      </el-row>
    </el-header>
    <el-main>
    </el-main>
    <el-footer>
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
el-container {
  el-header {
   height: 70px
  }
}
 .leftimg {
    img {
      height: 70px;
    }
  }

</style>
