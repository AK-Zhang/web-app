// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'



Vue.config.productionTip = false


import './assets/js/jquery.min.js'
import './assets/js/index.js'
import './assets/css/base.css'

// // 4.0 注册mint-ui
// // 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css'
// // 导入mint-ui组件对象
import mintui from 'mint-ui'
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import './assets/libs/mui/css/mui.css'
import './assets/libs/mui/css/icons-extra.css'
// import mui from '../static/mui/js/mui.min.js'
// Vue.use(mui);

//6.0 导入iconfont字体图标
import './assets/libs/iconfont/iconfont.css'

//导入全局
import { number } from './assets/js/numberFilter.js'
Vue.directive('numbers', number)

//7.0 导入axios 
import Api from './api/index.js';
Vue.prototype.$api = Api;

//7.1 导入我的axios 
import MyApi from './api/mypost.js';
Vue.prototype.$apim = MyApi;

// 8.0 定义一个全局过滤器实现日期的格式化
import moment from 'moment';
Vue.filter('datefmt', function (input, fmtstring) {
  return moment(input).format(fmtstring)
})
//兼容ie8
import promise from 'es6-promise';
promise.polyfill();

//导入vueX
import store from './store/store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  //监听路由检查登录
  data() {
    return {

    }
  },
  watch: {
    // "$route": 'checkLogin',
    $route: function (newroute, oldroute) {
      var path = newroute.path.toLowerCase();
      if (path == "/indexpage") {
      } else if (path == "/referprice") {
      } else if (path == "/mine") {
      } else if (path == "/help") {
      } else if (path == "/guide") {
      } else if (path == "/register") {
      } else if (path == "/forgetpassword") {
      } else if (path == "/optimaltrade") {
      } else if (path == "/agreement") {
      } else if (path == "/news/newslist") {
      } else if (path == "/lastnews") {
      } else if (path == "/newsinfo") {
      } else if (path.slice(1, 16) == "trade/tradeinfo") {
      } else if (path == "/") {
      } else {
        this.checkLogin();
      }
    }
  },
  created() {
    //this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (!window.loginToken) {
        this.$router.push('/Login');
        // window.location.href = '#/Login'
      }

      // else
      // this.$router.push('/');
    }
  },
})
window.rootVue = app;
