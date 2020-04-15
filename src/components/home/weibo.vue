<template>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="微博热搜" name="first">
              <ul class="listul">
                 <li class="listli" v-for="(items,index) in weibo" :key="index"><a :href="items.url" target="blank">{{index+1}}.{{items.keywords}}</a></li>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="实时时间" name="second">
                <span style="color:skyblue;font-weight:700;font-size:20px">{{ timenow | dateformat('YYYY-MM-DD')}}</span>
                <FlipClock style="margin-top:30px"></FlipClock>
            </el-tab-pane>
    </el-tabs>
</template>
<script>
import FlipClock from '../common/FlipClock.vue'
export default {
  name: 'weiboComponents',
  props: {
    // 接收父组件传递过来的信息
    chartData: {
      type: Array,
      default: () => []
    }
  },
  components: {
    FlipClock
  },
  data () {
    return {
      activeName: 'first',
      weibo: [
        {
          keywords: '钟南山说One world One fight',
          searchNums: 2232363.0,
          url: 'http://s.weibo.com/weibo?q=%23%E9%92%9F%E5%8D%97%E5%B1%B1%E8%AF%B4One+world+One+fight%23'
        },
        {
          keywords: '日军慰安妇制度受害者刘海鱼去世',
          searchNums: 1694182.0,
          url: 'http://s.weibo.com/weibo?q=%23%E6%97%A5%E5%86%9B%E6%85%B0%E5%AE%89%E5%A6%87%E5%88%B6%E5%BA%A6%E5%8F%97%E5%AE%B3%E8%80%85%E5%88%98%E6%B5%B7%E9%B1%BC%E5%8E%BB%E4%B8%96%23'
        },
        {
          keywords: '只要上场就要漂亮',
          searchNums: 1529996.0,
          url: 'http://s.weibo.com/weibo?q=%23%E5%8F%AA%E8%A6%81%E4%B8%8A%E5%9C%BA%E5%B0%B1%E8%A6%81%E6%BC%82%E4%BA%AE%23'
        },
        {
          keywords: '安倍考虑给每人发10万日元现金',
          searchNums: 1225077.0,
          url: 'http://s.weibo.com/weibo?q=%23%E5%AE%89%E5%80%8D%E8%80%83%E8%99%91%E7%BB%99%E6%AF%8F%E4%BA%BA%E5%8F%9110%E4%B8%87%E6%97%A5%E5%85%83%E7%8E%B0%E9%87%91%23'
        },
        {
          keywords: '误入武汉的小伙回家又遇囧途',
          searchNums: 1225058.0,
          url: 'http://s.weibo.com/weibo?q=%23%E8%AF%AF%E5%85%A5%E6%AD%A6%E6%B1%89%E7%9A%84%E5%B0%8F%E4%BC%99%E5%9B%9E%E5%AE%B6%E5%8F%88%E9%81%87%E5%9B%A7%E9%80%94%23'
        },
        {
          keywords: '音色撩人的明星',
          searchNums: 1224009.0,
          url: 'http://s.weibo.com/weibo?q=%23%E9%9F%B3%E8%89%B2%E6%92%A9%E4%BA%BA%E7%9A%84%E6%98%8E%E6%98%9F%23'
        },
        {
          keywords: '联合国秘书长谈特朗普暂停资助世卫',
          searchNums: 1222499.0,
          url: 'http://s.weibo.com/weibo?q=%23%E8%81%94%E5%90%88%E5%9B%BD%E7%A7%98%E4%B9%A6%E9%95%BF%E8%B0%88%E7%89%B9%E6%9C%97%E6%99%AE%E6%9A%82%E5%81%9C%E8%B5%84%E5%8A%A9%E4%B8%96%E5%8D%AB%23'
        }],
      isFlipping: false,
      flipType: 'down',
      frontTextFromData: 0,
      backTextFromData: 1,
      timenow: ''
    }
  },
  methods: {
    handleClick () {
      // console.log('微博知乎热搜切换事件')
      this.$message({
        type: 'success',
        message: '这就为您切换显示！！'
      })
    },
    time () {
      var now = new Date()
      this.timenow = now
    //   console.log(now)
    }
  },
  created () {
    this.time()
  }
}
</script>

<style lang='less' scoped>
    .listul{
        list-style: none;
        font-size: 1rem;
        text-align: left;
        line-height: 35px;
        padding: 0;
        .listli {
            margin: 0;
            border-bottom: dashed 3px #ccc;
            a{
                text-decoration: none;
                color: rgb(131, 119, 240);
            }
        }
    }
</style>
