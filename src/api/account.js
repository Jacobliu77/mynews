/**
 * 账户接口管理模块
 */
import request from '@/utils/request'

export const getuserinfo = params => {
  return request({
    method: 'GET',
    url: `/news/manager/${params}`
  })
}
export const updateInfo = fd => {
  return request({
    method: 'PUT',
    url: `/news/manager/update`,
    data: fd
  })
}
export const repassword = fd => {
  return request({
    method: 'POST',
    url: `/news/manager/reset`,
    data: fd
  })
}
export const deluser = params => {
  return request({
    method: 'DELETE',
    url: `/news/manager?id=${params}`
  })
}
export const open = params => {
  return request({
    method: 'PUT',
    url: `/news/manager/reopen?id=${params}`
  })
}
export const getall = (page, size) => {
  return request({
    method: 'GET',
    url: `/news/manager/list?page=${page}&pageSize=${size}`
  })
}
