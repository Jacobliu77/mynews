import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import HeaderAll from './home/hearder-all'
import Footer from './home/footer'
import Echarts from './home/hotwords'
import breadCrumb from './common/bread-crumb'
import breadCrumbFront from './common/bread-crumb-front'
import { quillEditor } from 'vue-quill-editor' // quill编辑器组件对象
import CoverImage from './publish/cover-image'
import SelectImage from './publish/select-image'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default {
  install (Vue) {
    Vue.component('layout-aside', layoutAside) // 注册一个全局组件
    Vue.component('layout-header', layoutHeader) // 注册一个全局组件
    Vue.component('bread-crumb', breadCrumb) // 全局注册一个后台面包屑组件
    Vue.component('bread-crumb-front', breadCrumbFront) // 全局注册一个前台面包屑组件
    Vue.component('quill-editor', quillEditor) // 注册一个全局的富文本编辑器
    Vue.component('cover-image', CoverImage) // 注册一个封面组件
    Vue.component('select-image', SelectImage) // 注册一个封面组件
    Vue.component('header-all', HeaderAll) // 注册头
    Vue.component('footer-all', Footer) // 注册尾
    Vue.component('hot-words', Echarts) // 注册尾
  }
}
