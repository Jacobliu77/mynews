/**
 * 账户接口管理模块
 */
import request from '@/utils/request'

export const getuserinfo = params => {
  return request({
    method: 'GET',
    url: `/movie/account/${params}`
  })
}
export const updateInfo = fd => {
  return request({
    method: 'PUT',
    url: `/movie/account/update`,
    data: fd
  })
}
export const repassword = fd => {
  return request({
    method: 'POST',
    url: `/movie/account/reset`,
    data: fd
  })
}
export const delfilm = params => {
  return request({
    method: 'DELETE',
    url: `/movie/account/${params}`
  })
}
export const open = params => {
  return request({
    method: 'PUT',
    url: `/movie/account/reopen?id=${params}`
  })
}
export const getall = (page, size) => {
  return request({
    method: 'GET',
    url: `/movie/account/list?state=NORMAL&page=${page}&pageSize=${size}`
  })
}
