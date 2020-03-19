<template>

<div>
     <el-card>
    <bread-crumb slot="header">
      <template slot="title">管理员 <span style="font-weight:700;color:#ccc">></span> 所有账户信息获取</template>
    </bread-crumb>
    <el-table :data="accoinfoData" style="width: 100%">
        <el-table-column prop="name" label="用户姓名" ></el-table-column>
        <el-table-column prop="account" label="用户账号" ></el-table-column>
        <el-table-column prop="status" label="用户身份"></el-table-column>
        <el-table-column prop="telephone" label="联系电话"></el-table-column>
        <el-table-column prop="email" label="电子邮件"></el-table-column>
        <el-table-column prop="state" label="用户状态"></el-table-column>
        <el-table-column prop="register_time" label="注册时间"></el-table-column>
      </el-table>
      <el-divider></el-divider>
        <el-pagination background
        layout="prev, pager, next"
        :page-count="totalpage"
        :current-page.sync="currentPage"
        :page-size="pageSize"
        @current-change="currentChange"
        :total="totalcomm"></el-pagination>
  </el-card>
</div>

</template>

<script>
import { getall } from '@/api/account.js'
export default {
  data () {
    return {
      pageSize: 5,
      totalcomm: 0,
      currentPage: 1,
      totalpage: 0,
      accoinfoData: [
      ]
    }
  },
  methods: {
    async getallinfo () {
      const page = (this.currentPage) - 1
      const pageSize = this.pageSize
      const { data } = await getall(page, pageSize)
      this.accoinfoData = data.data.items
      this.totalcomm = data.data.total_elements
      this.totalpage = data.data.total_pages
    },
    currentChange () {
      this.getallinfo()
    }
  },
  created () {
    this.getallinfo()
  }
}
</script>

<style>
</style>
