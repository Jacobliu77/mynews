/**
 * 电影分类接口管理模块
 */
import request from '@/utils/request'

export const getStyleChannels = () => {
  return request({
    method: 'GET',
    url: '/movie/style'
  })
}
export const getAddresChannels = () => {
  return request({
    method: 'GET',
    url: '/movie/area'
  })
}
