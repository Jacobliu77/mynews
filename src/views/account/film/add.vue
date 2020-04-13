<template>

<div>
     <el-card class="bigcard">
    <bread-crumb slot="header">
      <template slot="title">新闻管理 <span style="font-weight:700;color:#ccc">></span> 添加文章</template>
    </bread-crumb>
    <el-form ref="publishForm" :model="formData" :rules="publishRules" style="margin-left:50px" label-width="100px">
          <el-form-item prop="title" label="标题">
              <el-input v-model="formData.title" style="width:60%"></el-input>
          </el-form-item>
          <el-form-item prop="content" label="内容">
                <quill-editor
                v-model="formData.content"
                style="height:220px"
                ></quill-editor>
          </el-form-item>
          <el-form-item style="margin-top:120px"  prop="cover" label="封面">
              <el-radio-group @change="changeType"  v-model="formData.cover.type">
                  <!-- // 封面类型 -1:自动，0-无图，1-1张，3-3张 -->
                  <el-radio :label="1">单图</el-radio>
                  <el-radio :label="3">三图</el-radio>
                  <el-radio :label="0">无图</el-radio>
                  <el-radio :label="-1">自动</el-radio>
              </el-radio-group>
          </el-form-item>
          <!-- 封面组件 -->
          <cover-image @selectTwoImg="receiveImg" :list="formData.cover.images"></cover-image>
          <el-form-item prop="channel_id" label="频道">
              <el-select v-model="formData.channel_id">
                  <el-option v-for="item in channels" :value="item.id" :label="item.name" :key="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item>
              <el-button @click="publishArticle()" type='primary'>发布</el-button>
              <el-button @click="publishArticle(true)">存入草稿</el-button>

          </el-form-item>
      </el-form>
  </el-card>
</div>

</template>

<script>
import { getChannels } from '@/api/channel.js'
// import { savefilminfo } from '@/api/film.js'
export default {
  data () {
    return {
      loading: false,
      channels: [], // 接收频道数据
      formData: {
        title: '', // 文章标题
        content: '', // 文章内容
        cover: {
          type: 0, // 封面类型 -1:自动，0-无图，1-1张，3-3张
          images: [] // 放置封面地址的数组
        },
        channel_id: null // 频道id
      },
      publishRules: {
        //   校验规则 title/content/channel_id 必填项
        title: [{ required: true, message: '文章标题不能为空' }, {
          min: 5,
          max: 30,
          message: '标题的长度在5到30个字符之间'
        }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '文章频道不能为空' }]
      }
    }
  },
  methods: {
    async loadChannels () {
      const { data } = await getChannels()
      this.typeoptions = data.data.items
    },
    async savenews () {
      // const fd = this.formData
      // const { data } = await savenewsinfo(fd)
      // if (data.code === 200) {
      //   this.$message({
      //     type: 'success',
      //     message: '保存电影信息成功'
      //   })
      // } else {
      //   this.$message({
      //     type: 'error',
      //     message: '保存电影信息失败' + data.error
      //   })
      // }
    },
    resetForm (formName) {
      this.actors = ''
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.loadChannels()
  }
}
</script>

<style lang="less" scoped>

</style>
