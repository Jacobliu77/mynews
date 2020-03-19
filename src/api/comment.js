/**
 * 评论分类接口管理模块
 */
import request from '@/utils/request'

export const getComm = (page, size) => {
  return request({
    method: 'GET',
    url: `/movie/comment?page=${page}&pageSize=${size}`
  })
}
export const getidComm = id => {
  return request({
    method: 'GET',
    url: `/movie/comment/${id}`
  })
}
export const commitcomm = fd => {
  console.log(fd)
  return request({
    method: 'POST',
    url: `/movie/comment`,
    data: fd
  })
}
export const delComm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/comment/${params}`
  })
}
