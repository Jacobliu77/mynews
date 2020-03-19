<template>
  <div>
    <el-card>
      <bread-crumb slot="header">
        <template slot="title">
          电影评论管理
        </template>
      </bread-crumb>
      <el-input v-model="idinput" style="margin-bottom:20px" placeholder="请输入id"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="getid" circle></el-button>
      <el-divider></el-divider>
      <el-table :data="commData" style="width: 100%">
        <el-table-column prop="create_time" label="日期" width="280" ></el-table-column>
        <el-table-column prop="author" label="留言者" width="180"></el-table-column>
        <el-table-column prop="movie_name" label="电影" width="180"></el-table-column>
        <el-table-column prop="content" label="留言内容"></el-table-column>
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
import { getComm, getidComm, delComm } from '@/api/comment.js'
export default {
  data () {
    return {
      idinput: '',
      pageSize: 8,
      totalcomm: 0,
      currentPage: 1,
      totalpage: 0,
      commData: [
      ]
    }
  },
  methods: {
    async getallcomm () {
      const page = (this.currentPage) - 1
      const pagesize = this.pageSize
      const { data } = await getComm(page, pagesize)
      this.commData = data.data.items
      this.totalcomm = data.data.total_elements
      this.totalpage = data.data.total_pages
    },
    async getidcomm (id) {
      const { data } = await getidComm(id)
      this.commData = data.data.items
      this.totalcomm = data.data.total_elements
      this.totalpage = data.data.total_pages
    },
    currentChange () {
      this.getallcomm()
    },
    async delidcomm (id) {
      await delComm(id)
      this.getallcomm()
    },
    getid () {
      this.getidcomm(this.idinput)
    },
    handleClick (row) {
      this.open(row.id)
    },
    open (id) {
      const commid = id
      this.$confirm('此操作将永久删除该评论, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delidcomm(commid)
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
    this.getallcomm()
  }
}
</script>

<style>
</style>
