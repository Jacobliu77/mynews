<template>

<div>
     <el-card>
    <bread-crumb slot="header">
      <template slot="title">修改密码页</template>
    </bread-crumb>
     <el-form
      :model="formdata"
      status-icon
      :rules="rules"
      ref="myForm"
      label-width="100px"
      class="demo-ruleForm"
      style="text-align:left;margin-left:20px"
    >
      <el-form-item label="账号/用户名" prop="account">
        <el-input type="text" v-model="formdata.account" placeholder="请确认您的账户名" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="旧密码" prop="old_passwd">
        <el-input type="password" v-model="formdata.old_passwd" placeholder="请输入旧密码" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="new_passwd">
        <el-input type="password" v-model="formdata.new_passwd" placeholder="请输入新密码" style="width:40%"></el-input>
      </el-form-item>
       <el-form-item label="确认新密码" prop="repassword">
        <el-input type="password" v-model="formdata.repassword" placeholder="请再次确认新密码" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="repass">提交修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>

</template>

<script>
import { repassword } from '@/api/account.js'
export default {
  data () {
    return {

      formdata: {
        account: '',
        old_passwd: '',
        new_passwd: '',
        repassword: ''
      },
      rules: {
        account: [
          { required: true, message: '用户名不能为空' }
        ],
        old_passwd: [
          { required: true, message: '原有密码不能为空' }
        ],
        new_passwd: [
          { required: true, message: '请输入您的密码' },
          {
            pattern: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/,
            message: '密码为6-21字母和数字组成'
          }
        ],
        repassword: [
          { required: true, message: '请确认您的密码' },
          {
            pattern: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/,
            message: '密码6-21字母和数字组成'
          }
        ]
      }
    }
  },
  methods: {
    async repass () {
      const success =
        (await this.$refs.myForm.validate()) &&
        this.formdata.new_passwd === this.formdata.repassword
      if (success) {
        const fd = this.formdata
        // fd.account = this.formdata.account
        // fd.old_passwd = this.formdata.old_passwd
        // fd.new_passwd = this.formdata.new_passwd
        const { data } = await repassword(fd)
        if (data.code === 200) {
          this.$message({
            type: 'success',
            message: '账户修改密码成功!'
          })
          this.$router.push('/')
        } else {
          this.$message({
            type: 'error',
            message: `账户修改密码失败！${data.error}`
          })
        }
      } else {
        this.$message.error('请仔细核验表单项或检查两次输入密码是否一致')
      }
    }
  },
  created () {

  }
}

</script>

<style>

</style>
