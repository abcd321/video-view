import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入mint-ui全部组件
import Mint from 'mint-ui'
// 引入视频播放插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import 'mint-ui/lib/style.css'

Vue.use(Mint);
Vue.use(VideoPlayer)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
