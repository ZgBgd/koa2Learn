// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from "./api";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "element-ui/lib/theme-chalk/reset.css";
Vue.config.productionTip = false;
Vue.prototype.$ajax = ajax.ajaxs;
/* eslint-disable no-new */
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
