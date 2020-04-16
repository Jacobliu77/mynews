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
export const savefilminfo = fd => {
  return request({
    method: 'POST',
    url: `/movie`,
    data: fd
  })
}
export const delfilm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/${params}`
  })
}
export const getnewslist = (page, size) => {
  return request({
    method: 'GET',
    url: `/news/list?page=${page}&pageSize=${size}`
  })
}
export const searchfilm = params => {
  return request({
    method: 'GET',
    url: `/movie/search?name=${params}`
  })
}
export const recentcomm = () => {
  return request({
    method: 'GET',
    url: `/news/comment/recent`
  })
}
