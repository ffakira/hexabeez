import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$http = Axios;

const token = localStorage.getItem('token');
if (token) {
	Vue.prototype.$http.defaults.header.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
