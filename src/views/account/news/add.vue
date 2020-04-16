<template>

<div>
     <el-card class="bigcard">
    <bread-crumb slot="header">
      <template slot="title">新闻管理 <span style="font-weight:700;color:#ccc">></span> 添加文章</template>
    </bread-crumb>
    <el-form ref="publishForm" :model="formData" :rules="publishRules" style="margin-left:50px;text-align:left;" label-width="100px">
          <el-form-item prop="title" label="标题">
              <el-input v-model="formData.title" style="width:60%"></el-input>
          </el-form-item>
          <el-form-item prop="abstract" label="摘要">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入摘要内容"
                v-model="formData.abstract"
                style="width:60%">
              </el-input>
          </el-form-item>
          <el-form-item prop="content" label="内容">
                <quill-editor
                v-model="formData.content"
                style="height:320px"
                ></quill-editor>
          </el-form-item>
          <el-form-item style="margin-top:120px"  prop="cover" label="封面路径">
            <el-input v-model="formData.picture" style="width:60%"></el-input>
          </el-form-item>
          <el-form-item prop="channel_id" label="频道">
              <el-select v-model="formData.channel_id">
                  <el-option v-for="item in channels" :value="item.id" :label="item.style" :key="item.id"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item style=""  prop="readNum" label="阅读量">
            <el-input v-model="formData.readNum" style="width:20%"></el-input>
          </el-form-item>
          <el-form-item style=""  prop="commentNum" label="讨论热度">
            <el-input v-model="formData.commentNum" style="width:20%"></el-input>
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
      channels: [],
      formData: {
        title: '', // 文章标题
        content: '', // 文章内容
        abstract: '',
        picture: '',
        channel_id: null // 频道id
      },
      publishRules: {
        //   校验规则 title/content/channel_id 必填项
        title: [{ required: true, message: '文章标题不能为空' }, {
          min: 5,
          max: 30,
          message: '标题的长度在5到30个字符之间'
        }],
        abstract: [{ required: true, message: '文章摘要不能为空' }, {
          min: 20,
          max: 50,
          message: '标题的长度在20到50个字符之间'
        }],
        content: [{ required: true, message: '文章内容不能为空' }],
        channel_id: [{ required: true, message: '文章频道不能为空' }]
      }
    }
  },
  methods: {
    async loadChannels () {
      const { data } = await getChannels()
      this.channels = data.data.items
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
