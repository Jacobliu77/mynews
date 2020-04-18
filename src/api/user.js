/*
 * @Description:
 * @Author: jacob
 * @Date: 2020-03-17 14:14:03
 * @LastEditTime: 2020-04-18 16:08:01
 * @LastEditors: jacob
 */
/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'

/**
 * 用户登录
 */
export const login = data => {
  return request({
    method: 'POST',
    url: '/news/manager/login',
    data
  })
}
/**
 * 用户验证码登录
 */
export const loginBysms = (mobile, pcode) => {
  return request({
    method: 'POST',
    url: `/news/manager/mobile/login?phone=${mobile}&code=${pcode}`
  })
}
/**
 * 用户注册
 */
export const register = data => {
  return request({
    method: 'POST',
    url: '/news/manager',
    data
  })
}
// 发送验证码
export const smscode = mobile => {
  return request({
    method: 'POST',
    url: `/news/manager/sendsms/${mobile}`
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/news/manager/'
  })
}
// 获取用户的频道分类
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
