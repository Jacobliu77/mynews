<template>

<div>
     <el-card class="bigcard">
    <bread-crumb slot="header">
      <template slot="title">账户删除页面</template>
    </bread-crumb>
    <el-input v-model="idinput" style="margin-bottom:20px" placeholder="请输入要查询账户的id"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="getuserinfo" circle></el-button>
      <el-divider></el-divider>
    <el-form
      :model="formData"
      status-icon
      ref="myForm"
      label-width="100px"
      class="demo-ruleForm"
      style="text-align:left;margin-left:20px"
    >
      <el-form-item label="账号/用户名" prop="account">
        <el-input type="text" v-model="formData.account" style="width:40%" disabled></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="formData.name" style="width:40%" disabled></el-input>
      </el-form-item>
      <el-form-item label="个人头像" prop="photo">
        <el-input type="text" v-model="formData.image" placeholder="请输入百度图库图片地址" style="width:40%" disabled></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" style="width:40%" disabled></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.telephone" style="width:40%" disabled></el-input>
      </el-form-item>
       <span style="font-size:28px;margin-left:9%;"> 当前用户状态</span> <i :class=" status==='NORMAL'? classt:classf" style="font-size:28px"></i>
      <el-form-item style="margin-top:20px">
        <el-button type="primary" @click="opena" :disabled="status==='NORMAL'? true:false" >解除封禁</el-button>
        <el-button type="danger" @click="open" :disabled="status==='NORMAL'?false:true " >封禁账户</el-button>
      </el-form-item>
    </el-form>
    <div class="imgblock">
        <span class="demonstration">用户头像预览</span>
        <el-image :src="formData.image ? formData.image : picurl">
          <div slot="placeholder" class="image-slot" style="margin-top:20px">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
    </div>
  </el-card>
</div>

</template>

<script>
import { getuserinfo, delfilm, open } from '@/api/account.js'
export default {
  data () {
    return {
      idinput: '',
      picurl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347128054,3544728610&fm=26&gp=0.jpg',
      formData: {
      },
      status: '',
      classt: 'el-icon-success',
      classf: 'el-icon-error'
    }
  },
  methods: {
    async getuserinfo () {
      const id = this.idinput
      const { data } = await getuserinfo(id)
      if (data.code === 200) {
        this.formData = data.data
        this.status = data.data.state
        this.$message({
          type: 'success',
          message: '获取用户信息成功！'
        })
      } else {
        this.$message({
          type: 'error',
          message: `获取用户信息失败！${data.error}`
        })
      }
    },
    async delacco () {
      const id = this.idinput
      const { data } = await delfilm(id)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '账户封禁成功!'
        })
        this.getuserinfo(id)
      } else {
        this.$message({
          type: 'error',
          message: `账户封禁失败！${data.error}`
        })
      }
    },
    async openacco () {
      const id = this.idinput
      const { data } = await open(id)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '账户解封成功!'
        })
        this.getuserinfo(id)
      } else {
        this.$message({
          type: 'error',
          message: `账户解封失败！${data.error}`
        })
      }
    },
    open () {
      this.$confirm('此操作将封禁该账户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delacco()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    opena () {
      this.$confirm('此操作将封禁账户解除封禁, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.openacco()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .bigcard {
    position: relative;
    .imgblock {
      width: 22%;
      position: absolute;
      top: 32%;
      right:15%;
    }
  }
</style>
