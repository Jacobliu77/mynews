<template>
  <div class="login">
    <el-card class="box-card">
       <img src="../../assets/img/icon.png"  style="height:60px" />
      <el-form ref="myForm" :model="formdata" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="formdata.mobile" :placeholder="codeshow?'请输入账号':'请输入手机号码'" class="mobile"></el-input>
        </el-form-item>
        <el-form-item prop="code" v-if="codeshow">
          <el-input type="password" v-model="formdata.code" placeholder="请输入密码" class="code"></el-input>
        </el-form-item>
         <el-form-item prop="code" v-else>
          <el-input  v-model="formdata.pcode" placeholder="请输入验证码" class="pcode"></el-input>
          <el-button plain @click="sendMessage" style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="formdata.check" class="check">我已阅读用户协议且同意上述条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button @click="Loginnow" type="primary" class="submit">登录</el-button>
          <el-row>
            <el-col :span="12" >
              <el-button style="text-align:left" @click="showcode" type="text" class="submit">{{codeshow?'手机验证码登录':'账号密码登录'}}</el-button>
            </el-col>
            <el-col :span="12" >
                <el-button style="text-align:right" @click="register" type="text" class="submit">没有账号？去注册</el-button>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { login, loginBysms, smscode } from '@/api/user.js'
export default {
  data () {
    let validator = function (rule, value, callBack) {
      value ? callBack() : callBack(new Error('您必须同意无条件被我们蒙骗'))
    }
    return {
      codeshow: true,
      formdata: {
        mobile: '',
        code: '',
        pcode: '',
        check: false
      },
      loginRules: {
        mobile: [
          { required: true, message: '请输入您的账号或手机号' }
          // { pattern: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/, message: '账号为5-20个以字母开头包含数字句点符或下划线组成' }
        ],
        // code: [
        //   { required: true, message: '请输入您的密码或验证码' }
        //   // { pattern: /^(?!([a-zA-Z]+|\d+)$)[a-zA-Z\d]{6,20}$/, message: '密码为6-21字母和数字组成' }
        // ],
        check: [{ validator }]
      }
    }
  },
  methods: {
    Loginnow () {
      if (this.codeshow) {
        this.onLogin()
      } else {
        this.onLoginByMs()
      }
    },
    async onLoginByMs () {
      const phone = this.formdata.mobile
      const pcode = this.formdata.pcode
      const res = await loginBysms(phone, pcode)
      if (res.data.code === 200) {
        this.$message({
          type: 'success',
          message: '账户登录成功!'
        })
        window.localStorage.setItem('user-token', res.data.data.token)
        window.localStorage.setItem('isAdmin', res.data.data.isAdmin)
        window.localStorage.setItem('user-account', res.data.data.account)
        window.localStorage.setItem('accountid', res.data.data.id)
        this.$router.push('/home')
      } else {
        this.$message({
          type: 'error',
          message: `账户登录失败！${res.data.error}`
        })
      }
    },
    async sendMessage () {
      const phone = this.formdata.mobile
      const { data } = await smscode(phone)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '验证码发送成功!'
        })
      } else {
        this.$message({
          type: 'error',
          message: `验证码发送失败！${data.error}`
        })
      }
    },
    async onLogin () {
      const success = await this.$refs.myForm.validate()
      if (!success) {
        // 验证不通过待处理
        this.$message.error('请仔细核验表单项')
      }
      try {
        // await 不能忘记！！！
        const res = await login({
          account: this.formdata.mobile,
          password: this.formdata.code
        })
        if (res.data.code === 200) {
          this.$message({
            type: 'success',
            message: '账户登录成功!'
          })
          window.localStorage.setItem('user-token', res.data.data.token)
          window.localStorage.setItem('isAdmin', res.data.data.isAdmin)
          window.localStorage.setItem('user-account', res.data.data.account)
          window.localStorage.setItem('accountid', res.data.data.id)
          this.$router.push('/home')
        } else {
          this.$message({
            type: 'error',
            message: `账户登录失败！${res.data.error}`
          })
        }
      } catch (err) {
        this.$message.error(err)
      }
    },
    showcode () {
      this.codeshow = !this.codeshow
    },
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  background-image: url("../../assets/img/bgc.jpg");
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .box-card {
    width: 440px;
    height: 380px;
    opacity: 0.9;
    img {
      height: 40px;
      margin-bottom: 20px;
    }
    .check {
      float: left;
    }
    .submit {
      width: 100%;
    }
  }
}
.pcode {
      float: left;
      width: 70%;
    }
</style>
