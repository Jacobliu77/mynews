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
    accountid: getItem('accountid')
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新数据丢失，这里还需要把数据放到本地存储持久化
      setItem('user-token', state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
