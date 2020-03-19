<template>
  <div class="homeindex">
    <el-carousel height="300px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in 3" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=1404503996&auto=0&height=66"></iframe>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>
<style lang="less">
.homeindex {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel__item:nth-child(1) {
    background: url("../../../assets/img/timga.jpg");
    background-size: cover;
  }

  .el-carousel__item:nth-child(2) {
    background: url("../../../assets/img/timgb.jpg");
    background-size: cover;
  }

  .el-carousel__item:nth-child(3) {
    background: url("../../../assets/img/timgc.jpg");
    background-size: cover;
  }
}
</style>
