import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant';
import VueTouch from 'vue-touch'

Vue.use(Swipe).use(SwipeItem);
Vue.use(VueTouch,{name:'v-touch'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
