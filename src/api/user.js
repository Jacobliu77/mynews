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
    url: '/movie/account/login',
    data
  })
}
/**
 * 用户注册
 */
export const register = data => {
  return request({
    method: 'POST',
    url: '/movie/account/register',
    data
  })
}
// 发送验证码
export const smscode = mobile => {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}
// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user'
  })
}
// 获取用户的频道分类
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: '/app/v1_0/user/channels'
  })
}
