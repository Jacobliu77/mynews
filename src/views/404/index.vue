<template>

<div class="bgc">
    <el-row class="btn">
        <el-button type="primary" @click="goback" plain>返回首页</el-button>
        <el-button type="warning" @click="subwarning" plain>报告错误</el-button>
    </el-row>

</div>

</template>

<script>
import router from '../../router'
export default {
  methods: {
    goback () {
      router.push('/home')
    },
    subwarning () {
      this.$message({
        message: '感谢您的反馈，我们会及时处理哒！！3秒后我们会把您送回主页！！',
        type: 'success'
      })
      setTimeout(() => {
        router.push('/home')
      }, 3000)
    }
  }
}

</script>

<style lang="less" scoped>
    .bgc{
        width: 100%;
        height: 100vh;
        background-image: url('../../assets/img/404a.png');
        background-size: cover;
        .btn{
            position: absolute;
            top: 50px;
            left:42%;
        }
    }
</style>
