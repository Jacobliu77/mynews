<!--
 * @Description:
 * @Author: jacob
 * @Date: 2020-03-20 11:34:15
 * @LastEditTime: 2020-04-18 19:39:53
 * @LastEditors: jacob
 -->
<template>
    <div class="footer">
        <p style="line-height:25px;"> <a @click="$router.push('/about')" style="text-decoration: none;color:#fff">关于我</a> |
        <a @click="$router.push('/about')" style="text-decoration: none;color:#fff">联系我们</a> | <a @click="$router.push('/about')" style="text-decoration: none;color:#fff">毕设说明</a></p>
        <p style="line-height:25px">CopyRight © 2020 南昌华东交通大学理工学院jacob All Rights Reserved</p>
        <p style="line-height:25px">电话：0721-****888 赣ICP备*******8号</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang='less' scoped>
.footer{
    width: 100%;
    height: 150px;
    padding: 20px 0;
    background:#545c64;
    color: aliceblue;
}
</style>
