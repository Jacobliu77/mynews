/**
 * 评论分类接口管理模块
 */
import request from '@/utils/request'

export const getComm = (page, size) => {
  return request({
    method: 'GET',
    url: `/news/comment?page=${page}&pageSize=${size}`
  })
}
export const getidComm = id => {
  return request({
    method: 'GET',
    url: `/news/comment/${id}`
  })
}
export const delComm = params => {
  return request({
    method: 'DELETE',
    url: `/news/comment/${params}`
  })
}
