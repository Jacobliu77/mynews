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
           <el-form-item prop="author" label="责任编辑">
              <el-input v-model="formData.author" style="width:60%"></el-input>
          </el-form-item>
          <el-form-item prop="newsAbstract" label="摘要">
              <el-input
                type="textarea"
                :rows="3"
                placeholder="请输入摘要内容"
                v-model="formData.newsAbstract"
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
            <el-select
              v-model="formData.type"
              multiple
              filterable
              allow-create
              default-first-option
              placeholder="请选择文章类型">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
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
          </el-form-item>
      </el-form>
  </el-card>
</div>

</template>

<script>
import { getChannels } from '@/api/channel.js'
import { saveNewsInfo } from '@/api/news.js'
export default {
  data () {
    return {
      loading: false,
      // channels: [],
      options: [],
      formData: {
        title: '', // 文章标题
        content: '', // 文章内容
        abstract: '',
        picture: '',
        type: [] // 频道id
      },
      publishRules: {
        //   校验规则 title/content/channel_id 必填项
        title: [{ required: true, message: '文章标题不能为空' }, {
          min: 5,
          max: 30,
          message: '标题的长度在5到30个字符之间'
        }],
        author: [{ required: true, message: '作者不能为空' }, {
          min: 2,
          max: 10,
          message: '作者姓名的长度在2到10个字符之间'
        }],
        newsAbstract: [{ required: true, message: '文章摘要不能为空' }, {
          min: 20,
          max: 100,
          message: '标题的长度在20到50个字符之间'
        }],
        content: [{ required: true, message: '文章内容不能为空' }],
        type: [{ required: true, message: '文章频道不能为空' }]
      }
    }
  },
  methods: {
    async loadChannels () {
      const { data } = await getChannels()
      var channels = data.data.items
      for (var i = 0; i <= channels.length; i++) {
        // console.log(channels[i].style)
        var obj = {}
        obj.value = channels[i].style
        obj.lable = channels[i].style
        this.options.push(obj)
      }
    },
    async publishArticle () {
      const fd = this.formData
      fd.state = 'PUBLIC'
      fd.picture = [this.formData.picture]
      fd.type = [this.formData.type[0]]
      fd.readNum = parseInt(this.formData.readNum)
      fd.commentNum = parseInt(this.formData.commentNum)
      const { data } = await saveNewsInfo(fd)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '保存新闻文章信息成功'
        })
      } else {
        this.$message({
          type: 'error',
          message: '保存新闻文章信息失败' + data.error
        })
      }
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
