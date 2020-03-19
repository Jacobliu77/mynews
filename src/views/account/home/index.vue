<template>
<el-container>
    <!-- 左右布局 -->
    <el-aside  :style="{width:$store.state.isforder?'65px':'230px'}" style="transition: all 0.5s; min-height:100vh;background-color:#000;">
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧容器 -->
    <el-container>
      <!-- 上下布局 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header></layout-header>
      </el-header>
      <el-main>
         <!-- 二级路由容器 -->
         <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    // eventBus.$on('forderchange', status => {
    //   this.isCollapse = status
    // })
  }
}

</script>

<style>

</style>
