<template>
<div>
  <el-card class="bigcard">
    <bread-crumb slot="header">
      <template slot="title">信息更新</template>
    </bread-crumb>
    <el-form
      :model="formData"
      status-icon
      :rules="rules"
      ref="myForm"
      label-width="100px"
      class="demo-ruleForm"
      style="text-align:left;margin-left:20px"
    >
      <el-form-item label="账号/用户名" prop="account">
        <el-input type="text" v-model="formData.account" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="formData.name" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="个人头像" prop="photo">
        <el-input type="text" v-model="formData.headImage" placeholder="请输入百度图库图片地址" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="formData.email" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="mobile">
        <el-input v-model="formData.telephone" style="width:40%" ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="saveInfo">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="imgblock">
        <span class="demonstration">个人头像预览</span>
        <el-image :src="formData.headImage ? formData.headImage : picurl">
          <div slot="placeholder" class="image-slot" style="margin-top:20px">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
    </div>
  </el-card>
</div>
</template>
<script>
import { getuserinfo, updateInfo } from '@/api/account.js'
export default {
  data () {
    return {
      picurl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586945111561&di=5d655776ef6f3dde092c754c6c7e43c7&imgtype=0&src=http%3A%2F%2Fpic.soutu123.cn%2Felement_origin_min_pic%2F01%2F37%2F92%2F40573c69065b76e.jpg%2521%2Ffw%2F700%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
      formData: {
      },
      rules: {
        name: [
          { required: true, message: '用户名不能为空' },
          {
            min: 1,
            max: 7,
            message: '用户名长度在1到7个字符'
          }
        ],
        email: [
          { required: true, message: '邮箱不能为空' },
          {
            pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            message: '邮箱格式不正确'
          }
        ]
      }
    }
  },
  methods: {
    async getuserinfo () {
      const id = window.localStorage.getItem('accountid')
      const { data } = await getuserinfo(id)
      if (data.code === 200) {
        this.formData = data.data
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
    async saveInfo () {
      let fd = {}
      fd.account = this.formData.account
      fd.name = this.formData.name
      fd.headImage = this.formData.headImage
      fd.email = this.formData.email
      fd.phone = this.formData.telephone
      const id = window.localStorage.getItem('accountid')
      const { data } = await updateInfo(fd)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '保存用户信息成功'
        })
        this.getuserinfo(id)
      } else {
        this.$message({
          type: 'error',
          message: `保存用户信息失败！${data.error}`
        })
      }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.getuserinfo()
  }
}
</script>
<style lang="less" scoped>
  .bigcard {
    position: relative;
    .imgblock {
      width: 30%;
      position: absolute;
      top: 12%;
      right:10%;
    }
  }
</style>
