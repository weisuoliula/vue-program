import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import VueTouch from "vue-touch";
import store from './store'
import { Swipe, SwipeItem } from 'vant';


Vue.use(Swipe).use(SwipeItem);
Vue.use(VueTouch,{name:'v-touch'})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')