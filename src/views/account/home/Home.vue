<template>
  <div class="homeindex">
    <el-carousel height="300px" direction="vertical" :autoplay="true">
      <el-carousel-item v-for="item in 3" :key="item">
        <!-- <h3 class="medium">{{ item }}</h3> -->
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="12">
        <el-card class="box-card" style="width:100%;margin-top:20px;padding:0">
          <line-chart></line-chart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card" style="width:100%;margin-top:20px;padding:0">
          <pie-chart></pie-chart>
        </el-card>
      </el-col>
    </el-row>
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
