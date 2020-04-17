<template>

<div>
     <el-card>
     <bread-crumb slot="header">
        <template slot="title">
          资讯文章管理
        </template>
      </bread-crumb>
      <el-table :data="commData" style="width: 100%">
        <el-table-column prop="id" label="文章id" width="180"></el-table-column>
        <el-table-column prop="id" label="文章封面" width="180">
          <template  slot-scope="scope">
              <img :src="scope.row.picture" width="100" height="80" alt=""/>
          </template>
        </el-table-column>
        <el-table-column prop="releaseTime" label="创建日期" width="280" ></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="author" label="作者" width="180"></el-table-column>
        <el-table-column prop="readNum" label="阅读量"></el-table-column>
        <el-table-column prop="state" label="文章状态" width="180"></el-table-column>
         <el-table-column
            label="操作"
            width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
      <el-divider></el-divider>
        <el-pagination background layout="prev, pager, next"
         :page-count="totalpage"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        @current-change="currentChange"
        :total="totalcomm"></el-pagination>
      </el-card>
</div>

</template>

<script>
import { getnewslist, delNews } from '@/api/news.js'
export default {
  data () {
    return {
      idinput: '',
      pageSize: 7,
      totalcomm: 0,
      currentPage: 1,
      totalpage: 0,
      commData: [
      ]
    }
  },
  methods: {
    async getalllist () {
      const page = (this.currentPage) - 1
      const pagesize = this.pageSize
      const { data } = await getnewslist(page, pagesize)
      console.log(data)
      this.commData = data.data.items
      this.totalcomm = data.data.totalElements
      this.totalpage = data.data.totalPages
    },
    // async getidcomm (id) {
    //   const { data } = await getidComm(id)
    //   this.commData = data.data.items
    //   this.totalcomm = data.data.totalElements
    //   this.totalpage = data.data.totalPages
    // },
    currentChange () {
      this.getalllist()
    },
    async delidnews (id) {
      await delNews(id)
      this.getalllist()
    },
    getid () {
      this.getidcomm(this.idinput)
    },
    handleClick (row) {
      this.open(row.id)
    },
    open (id) {
      const commid = id
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delidnews(commid)
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
    }
  },
  created () {
    this.getalllist()
  }
}

</script>

<style>

</style>
