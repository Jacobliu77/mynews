import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getItem('user-token'),
    isforder: false,
    searchkeywords: '',
    active: '',
    keyid: 5,
    selectindex: '',
    searchname: '',
    searchtype: '',
    articalid: '',
    accountid: getItem('accountid')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新数据丢失，这里还需要把数据放到本地存储持久化
      setItem('user-token', state.user)
    },
    setsearchname (state, data) {
      state.searchname = data
    },
    setsearchtype (state, data) {
      state.searchtype = data
    },
    setarticalid (state, data) {
      state.articalid = data
    }
  },
  actions: {
  },
  modules: {
  }
})
