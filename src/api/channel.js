/**
 * 新闻分类接口管理模块
 */
import request from '@/utils/request'

export const getChannels = () => {
  return request({
    method: 'GET',
    url: '/news/channel'
  })
}
