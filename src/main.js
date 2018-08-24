import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import route from './routers/router.js'
import "./assets/css/cssreset.css"
import "./assets/css/data.css"
import "./assets/css/myplayer.css"
//要加use,记住
Vue.use(VueRouter)
//ajax数据加载要用到resource
Vue.use(VueResource)
new Vue({
  el: '#app',
  render: h => h(App),
  router:route
})
