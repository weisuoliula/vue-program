import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueTouch from "vue-touch";
Vue.use(VueTouch,{name:'v-touch'})
import store from './store'
import "@common/components"

import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);

/* import { IndexBar, IndexAnchor } from 'vant';
Vue.use(IndexBar).use(IndexAnchor); */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')