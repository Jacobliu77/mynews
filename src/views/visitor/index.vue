<template>
<el-container>
    <el-header>
     <header-all></header-all>
    </el-header>
    <el-main style="margin-top:70px">
        <el-tabs v-model="activeName">
        <el-tab-pane label="个人信息更新" name="center">
        <el-card class="bigcard">
        <bread-crumb slot="header">
        <template slot="title">个人信息更新</template>
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
            <el-input v-model="formData.phone" style="width:40%" ></el-input>
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
      </el-card></el-tab-pane>
            <el-tab-pane label="密码修改" name="repass"><el-card>
        <bread-crumb slot="header">
          <template slot="title">密码修改中心</template>
        </bread-crumb>
          <el-form
              :model="formdata"
              status-icon
              :rules="passrules"
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
        </el-tab-pane>
          </el-tabs>
    </el-main>
    <el-footer >
      <footer-all></footer-all>
    </el-footer>
  </el-container>
</template>

<script>
import { getuserinfo, updateInfo, repassword } from '@/api/account.js'
export default {
  data () {
    return {
      activeName: 'center',
      picurl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347128054,3544728610&fm=26&gp=0.jpg',
      formData: {
      },
      activeIndex2: '1',
      stylechannel: [],
      addresschannel: [],
      hotfilm: [],
      defaultImg: '../../../assets/img/icon.png',
      formdata: {
        account: '',
        old_passwd: '',
        new_passwd: '',
        repassword: ''
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
      },
      passrules: {
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
    async getuserinfo () {
      const id = this.$store.state.accountid
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
      fd.image = this.formData.image
      fd.email = this.formData.email
      fd.telephone = this.formData.telephone
      const id = this.$store.state.accountid
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
<style lang="less" scope>
  .head-upload{
    border-radius: 50%;
    position: absolute;
    top: 180px;
    right: 260px;
    img{
      width: 200px;
      height: 200px;
    }
  }
  .el-header,
.el-footer {
  // background-color: #ccc;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-menu-item {
  img {
    height: 100%;
  }
}
body > .el-container {
  margin-bottom: 40px;
}
.bigcard {
    position: relative;
    .imgblock {
      width: 15%;
      position: absolute;
      top: 12%;
      right:10%;
    }
  }
.el-col {
  border-radius: 4px;
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
  }
}
.el-footer {
  // min-width: 980px;
  // background: #20232c;
  color: #666;
  img {
    height: 80px;
  }
  .footer-inner {
    width: 100%;
    padding: 29px 0 33px;
  }
  .footer-inner,
  .copy-right-conts {
    margin: 0;
    background-color:#4169E1;
  }
  .footer-inner-links {
    font: 12px/12px "Microsoft Yahei";
    height: 12px;
    margin-bottom: 8px;
    p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
      }
    a {
    color: #d5d5d5;
    }
  }
  .footer-inner-bottom a {
    font: 12px/28px "Microsoft Yahei";
    color: #858ca1;
    display: inline-block;
    margin-right: 23px;
  }
  a:link, a:visited, a:hover {
    text-decoration: none;
}
}
</style>
