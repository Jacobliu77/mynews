<template>

<div>
     <el-card class="bigcard">
    <bread-crumb slot="header">
      <template slot="title">电影管理 <span style="font-weight:700;color:#ccc">></span> 添加电影</template>
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
      <el-form-item label="电影名" prop="name">
        <el-input type="text" v-model="formData.name" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="导演" prop="director">
        <el-input type="text" v-model="formData.director" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="海报路径" prop="picture">
        <el-input v-model="formData.picture" style="width:40%"></el-input>
      </el-form-item>
      <el-form-item label="区域" prop="area">
         <el-select v-model="formData.area"  style="width:40%" placeholder="请选择区域">
            <el-option
              v-for="item in areaoptions"
              :key="item.id"
              :label="item.area"
              :value="item.area">
            </el-option>
          </el-select>
      </el-form-item>
       <el-form-item label="简介" prop="introduce">
        <el-input type="textarea"
         :rows="2" v-model="formData.introduce" style="width:40%" ></el-input>
      </el-form-item>
       <el-form-item label="点击量" prop="hits">
        <el-input v-model="formData.hits" style="width:40%" ></el-input>
      </el-form-item>
       <el-form-item label="评分" prop="score">
        <el-input v-model="formData.score" style="width:40%" ></el-input>
      </el-form-item>
       <el-form-item label="演员" prop="actors">
        <el-input v-model="actors" placeholder="请依次输入演员姓名以逗号分开" style="width:40%" ></el-input>
      </el-form-item>
       <el-form-item label="风格类型" prop="types">
         <el-select
            v-model="formData.types"
            multiple
            filterable
            allow-create
            default-first-option
            placeholder="请选择类型标签" style="width:40%">
            <el-option
              v-for="item in typeoptions"
              :key="item.id"
              :label="item.style"
              :value="item.style">
            </el-option>
          </el-select>
        <!-- <el-input v-model="types" placeholder="请依次输入风格类型以逗号分开" style="width:40%" ></el-input> -->
      </el-form-item>
       <el-form-item label="上映时间" prop="release_time">
        <el-date-picker
          v-model="time"
          type="date"
          placeholder="选择日期"
          value-format="timestamp">
        </el-date-picker>
      </el-form-item>
      <el-form-item style="text-align:center">
        <el-button type="primary" @click="saveInfo">提交</el-button>
        <el-button @click="resetForm('myForm')">重置</el-button>
      </el-form-item>
    </el-form>
     <div class="imgblock">
        <span class="demonstration">海报图片预览</span>
        <el-image :src="formData.picture ? formData.picture : picurl">
          <div slot="placeholder" class="image-slot" style="margin-top:20px">
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </div>
  </el-card>
</div>

</template>

<script>
import { getStyleChannels, getAddresChannels } from '@/api/channel.js'
import { savefilminfo } from '@/api/film.js'
export default {
  data () {
    return {
      picurl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=347128054,3544728610&fm=26&gp=0.jpg',
      actors: '',
      types: '',
      time: 0,
      areaoptions: [],
      typeoptions: [],
      formData: {
        name: '', // 电影名
        director: '', // 导演
        picture: '', // 海报
        area: '', // 区域
        introduce: '', // 简介
        hits: '', // 点击量
        score: '', // 评分
        actors: [], // 演员
        types: [], // 风格
        release_time: '' // 发行时间
      },
      rules: {
        name: [
          { required: true, message: '电影名不能为空' }
        ],
        director: [
          { required: true, message: '导演不能为空' }
        ],
        picture: [
          { required: true, message: '海报图片路径不能为空' }
        ],
        area: [
          { required: true, message: '区域必须选择' }
        ],
        introduce: [
          { required: true, message: '介绍不能为空' }
        ],
        hits: [
          { required: true, message: '点击量不能为空' }
        ],
        score: [
          { required: true, message: '评分不能为空' }
        ]
      }
    }
  },
  methods: {
    saveInfo () {
      this.formData.actors = this.actors.split('，')
      this.formData.release_time = this.time.toString()
      this.$refs.myForm.validate().then(result => {
        //  调用保存接口
        this.savefilm()
      })
    },
    async loadAddresChannels () {
      const { data } = await getAddresChannels()
      this.areaoptions = data.data.items
    },
    async loadStyleChannels () {
      const { data } = await getStyleChannels()
      this.typeoptions = data.data.items
    },
    async savefilm () {
      const fd = this.formData
      const { data } = await savefilminfo(fd)
      if (data.code === 200) {
        this.$message({
          type: 'success',
          message: '保存电影信息成功'
        })
      } else {
        this.$message({
          type: 'error',
          message: '保存电影信息失败' + data.error
        })
      }
    },
    resetForm (formName) {
      this.actors = ''
      this.$refs[formName].resetFields()
    }
  },
  created () {
    this.loadAddresChannels()
    this.loadStyleChannels()
  }
}
</script>

<style lang="less" scoped>
  .bigcard {
    position: relative;
    .imgblock {
      width: 30%;
      position: absolute;
      top: 10%;
      right:10%;
    }
  }
</style>
