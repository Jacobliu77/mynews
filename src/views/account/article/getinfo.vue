<template>

<div>
     <el-card>
    <bread-crumb slot="header">
      <template slot="title">电影管理 <span style="font-weight:700;color:#ccc">></span> 指定电影信息获取</template>
    </bread-crumb>
     <el-input v-model="idinput" style="margin-bottom:20px" placeholder="请输入id"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="getid" circle></el-button>
      <el-divider></el-divider>
      <el-card class="box-card">
        <h3 v-text="filmData.name ? filmData.name : name"></h3>
        <el-divider></el-divider>
        <el-row :gutter="20">
          <el-col :span="8"><el-image :src="filmData.picture_url ? filmData.picture_url : picurl"></el-image></el-col>
          <el-col :span="16" style="text-align:left">
            <h4>评分： <el-rate
                        v-model="showscore"
                        disabled
                        style="margin:15px 0 ;font-size:25px;display:inline-block">
                      </el-rate><span style="font-size:25px;color: rgb(243, 213, 44);">{{filmData.score}} 分</span></h4>
            <h4>导演：{{filmData.director}}</h4>
            <span class="tag-group__title" style="font-weight:700">演员列表：</span>
              <el-tag
              style="margin-left:15px"
                v-for="(item,index) in filmData.actors"
                :key="index"
                type=''
                effect="dark">
                {{ item }}
              </el-tag>
               <h4>电影简介：</h4>
               <h5 style="margin-left:12px">{{filmData.introduce}}</h5>
          </el-col>
        </el-row>
      </el-card>
      <el-button type="danger" icon="el-icon-delete" style="margin-top:15px" @click="open">删除当前电影信息</el-button>
  </el-card>
</div>

</template>

<script>
import { getfilminfo, delfilm } from '@/api/film.js'
export default {
  data () {
    return {
      name: 'Sunshine电影欢迎你',
      picurl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347128054,3544728610&fm=26&gp=0.jpg',
      idinput: '',
      showscore: 0,
      filmData: {
        actors: [
          '刘亦菲',
          '胡歌'
        ],
        score: '7.1'
      }

    }
  },
  methods: {
    async getidfilm (id) {
      const { data } = await getfilminfo(id)
      if (data.code === 200) {
        this.filmData = data.data
      } else {
        this.$message({
          type: 'error',
          message: '查询电影信息失败' + data.error
        })
      }
    },
    async delidfilm (id) {
      const { data } = await delfilm(id)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      } else {
        this.$message({
          type: 'error',
          message: '查询电影信息失败' + data.error
        })
      }
    },
    getid () {
      this.getidfilm(this.idinput)
    },
    open () {
      const filmid = this.filmData.id
      this.$confirm('此操作将永久删除该电影信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delidfilm(filmid)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    starLevel (evaluate) {
      return evaluate / 2 // 最高评分为10，星级只有5级 所以需要除2，再四舍五入获取评分数
    }
  },
  created () {
    this.showscore = this.starLevel(this.filmData.score)
  }
}

</script>

<style>

</style>
