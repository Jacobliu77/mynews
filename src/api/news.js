/**
 * 新闻接口管理模块
 */
import request from '@/utils/request'

export const gethotnews = () => {
  return request({
    method: 'GET',
    url: `/news/hot`
  })
}
export const getnews = params => {
  return request({
    method: 'GET',
    url: `/news/${params}`
  })
}
export const saveNewsInfo = fd => {
  return request({
    method: 'POST',
    url: `/news`,
    data: fd
  })
}
export const delNews = params => {
  return request({
    method: 'DELETE',
    url: `/news/${params}`
  })
}
export const getnewslist = (page, size) => {
  return request({
    method: 'GET',
    url: `/news/list?page=${page}&pageSize=${size}`
  })
}
export const searchnewsbyname = params => {
  return request({
    method: 'GET',
    url: `/news/search?name=${params}`
  })
}
export const searchnewsbytype = params => {
  return request({
    method: 'GET',
    url: `/news/search?type=${params}`
  })
}
export const recentcomm = () => {
  return request({
    method: 'GET',
    url: `/news/comment/recent`
  })
}
