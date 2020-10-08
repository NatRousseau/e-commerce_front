import Vue from 'vue'
import App from './App.vue'
import VueResouce from 'vue-resource';
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script';


Vue.use(LoadScript);
Vue.config.productionTip = false
Vue.use(VueResouce);
Vue.http.options.root = 'https://localhost:8001/api/';



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
