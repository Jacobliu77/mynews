<template>
    <div>

   <el-header class="el-header" style="height: 70px;width:80%;margin-left:10%;line-height: 70px">
      <el-row type="flex" justify="space-between" style="height:80px">
        <el-col :span="4" style="text-align:left">
          <div class="leftimg">
              <img src="../../assets/img/icon.png" alt="">
          </div>
        </el-col>
        <el-col :span="8">
          <div class="middlesearch">
            <el-input style="width:115%;margin-top:25px" placeholder="请输入内容" v-model="search" class="input-with-select">
              <el-button  slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="6"><div class="rightherf" style="margin-top:25px"></div>
        <p style="line-height:0px"> <a style="text-decoration: none;" target="black" href="https://github.com/Jacobliu77/mynews"><i class="el-icon-link"></i>Github仓库</a> </p>
        <p style="line-height:0px"> <a style="text-decoration: none;" target="black" href="https://jacobliu77.github.io"><i class="el-icon-link"></i>个人博客</a> </p>
        </el-col>
      </el-row>
    </el-header>
    <el-menu
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="2" style="margin-left:10%">
        <template slot="title"> <i class="el-icon-menu"></i>所有分类</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-menu-item index="3"  >娱乐演艺</el-menu-item>
    <el-menu-item index="4"  >国防军事</el-menu-item>
    <el-menu-item index="5"  >科技未来</el-menu-item>
    <el-menu-item index="6"  >金融财经</el-menu-item>
    <el-menu-item index="7"  >个人中心</el-menu-item>
    <el-menu-item style="margin-left:38%" index="7"  >欢迎你！</el-menu-item>
    </el-menu>
</div>
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
     .leftimg {
    img {
      height: 70px;
    }
  }
  .rightherf{
      a {
          text-decoration: none;
      }
  }
  .el-menu-demo{
      margin-top:20px;
      height: 60px;
  }
</style>
