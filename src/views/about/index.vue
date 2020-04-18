<!--
 * @Description:论文说明
 * @Author: jacob
 * @Date: 2020-04-18 18:19:48
 * @LastEditTime: 2020-04-18 21:13:11
 * @LastEditors: jacob
 -->
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
         <el-card class="hotwords-card" style="text-align:left;margin-top:20px">
          <div slot="header" class="clearfix">
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-info"></i>关于我的</span>
          </div>
        <p> <i style="color:red;font-size:22px" class="el-icon-sugar"> </i> 当项目写到这里的时候，项目和论文大概已经接近尾声了，我一直都很喜欢的一句话是“山山而川，迢迢其泽”，大概讲的就是说：“在经历过各种困难的洗礼、
            各种困境的磨练后，那颗灵魂也一定会更佳纯净，面对过去的四年，时间似乎成了最无情的刽子手，他不会去顾及我们这一路走的有多苦、有多甜、有多幸福
            又或者有多不幸，他只是眼都不眨一下地斩断了那段从幼稚到成熟、从懵懂到了解那段迷迷糊糊又十分迷人的时光；这段时光里有亲情、友情、爱情，又哭也有笑
            回首的时候还是要歌颂吧，毕竟那是我最喜欢的一段时光了，最少到现在是最喜欢的了。”</p>
        </el-card>
         <el-card class="hotwords-card" style="text-align:left;margin-top:20px">
          <div slot="header" class="clearfix">
              <span style="font-size:20px;font-weight:700"><i style="color:#545c64;font-size:20px" class="el-icon-chat-dot-round"></i>联系我呀</span>
          </div>
        <img src="../../assets/img/weixin.jpg" style="width:100%" alt="">
        </el-card>
      </el-aside>
      <el-main style="">
          <el-card class="hot-card" style="text-align:left;">
          <div slot="header" class="clearfix">
            <span style="font-size:28px;font-weight:700"><i style="color:#545c64;font-size:32px" class="el-icon-finished"></i> 毕设相关说明</span>
          </div>
          <el-timeline>
            <el-timeline-item timestamp="2019/12/31" placement="top" size="large" icon ="el-icon-upload2" color="rgb(177, 173, 173)">
            <el-card>
                <h4>初始化仓库</h4>
                <p>刘雅阁 提交于 2019/12/31 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/1" placement="top" size="large" icon ="el-icon-upload2" color="rgb(197, 164, 164)">
            <el-card>
                <h4>更新 创建项目工程文件</h4>
                <p>刘雅阁 提交于 2020/2/1 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/5" placement="top" size="large" icon ="el-icon-upload2" color="rgb(231, 151, 151)">
            <el-card>
                <h4>更新 完善后端相关工作</h4>
                <p>刘雅阁 提交于 2020/2/5 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/15" placement="top" size="large" icon ="el-icon-upload2" color="rgb(236, 87, 87)">
            <el-card>
                <h4>更新 对后端的初步设计与实现</h4>
                <p>刘雅阁 提交于 2020/2/15 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/18" placement="top" size="large" icon ="el-icon-upload2" color="rgb(230, 28, 28)">
            <el-card>
                <h4>更新 对后端的设计完善及接口的整合</h4>
                <p>刘雅阁 提交于 2020/2/18 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/23" placement="top" size="large" icon ="el-icon-upload2" color="rgb(228, 74, 27)">
            <el-card>
                <h4>更新 对后端服务进行打包</h4>
                <p>刘雅阁 提交于 2020/2/23 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/2/27" placement="top" size="large" icon ="el-icon-upload2" color="rgb(230, 119, 28)">
            <el-card>
                <h4>更新 编写POSTMAN相关的文档</h4>
                <p>刘雅阁 提交于 2020/2/27 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/3/5" placement="top" size="large" icon ="el-icon-upload2" color="rgb(228, 164, 27)">
            <el-card>
                <h4>更新 创建前端项目工程文件</h4>
                <p>刘雅阁 提交于 2020/3/5 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/3/8" placement="top" size="large" icon ="el-icon-upload2" color="rgb(228, 208, 27)">
            <el-card>
                <h4>更新 对vue-cli脚手架的使用</h4>
                <p>刘雅阁 提交于 2020/3/8 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/3/15" placement="top" size="large" icon ="el-icon-upload2" color="rgb(239, 241, 65)">
            <el-card>
                <h4>更新 后台业务逻辑的初步实现</h4>
                <p>刘雅阁 提交于 2020/3/15 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/3/21" placement="top" size="large" icon ="el-icon-upload2" color="rgb(155, 235, 51)">
            <el-card>
                <h4>更新 对后台业务逻辑的完善</h4>
                <p>刘雅阁 提交于 2020/3/21 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4/2" placement="top" size="large" icon ="el-icon-upload2" color="rgb(66, 235, 51)">
            <el-card>
                <h4>更新 对后台的最终设计实现</h4>
                <p>刘雅阁 提交于 2020/4/2 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4/6" placement="top" size="large" icon ="el-icon-upload2" color="rgb(51, 235, 97)">
            <el-card>
                <h4>更新 对前台的最初设计与实现</h4>
                <p>刘雅阁 提交于 2020/4/6 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4/10" placement="top" size="large" icon ="el-icon-upload2" color="rgb(51, 235, 174)">
            <el-card>
                <h4>更新 对前台设计的完善</h4>
                <p>刘雅阁 提交于 2020/4/10 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4/15" placement="top" size="large" icon ="el-icon-upload2" color="rgb(51, 229, 235)">
            <el-card>
                <h4>更新 对前台的细节进行完善</h4>
                <p>刘雅阁 提交于 2020/4/15 </p>
            </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2020/4/20" size="large"  color="blue"   icon="el-icon-check"   placement="top">
            <el-card>
                <h4>项目就此完成！！</h4>
                <p>刘雅阁 提交于 2020/4/20 </p>
            </el-card>
            </el-timeline-item>
        </el-timeline>
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
  name: 'about',
  components: {},
  data () {
    return {
      recent: []
    }
  },
  methods: {
    async loadRecentComm () {
      const { data } = await recentcomm()
      this.recent = data.data.items
    }
  },
  created () {
    this.loadRecentComm()
  }
}
</script>
<style lang="less" scoped>
.new_info {
    overflow: hidden;
    margin-top: 20px;
    color: rgb(51, 229, 235);
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
