import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'

Vue.config.productionTip = false

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import minins from "@/plugins/newRoute";
Vue.mixin(minins)

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
