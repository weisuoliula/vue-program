<template>
  <div id="app">
    <!-- <Tuijian/> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
import Tuijian from "@pages/tuijian"
export default({
    name:"App",
    components:{
        /* Tuijian */
    }
})
</script>
<style lang="scss">
#app{
  width: 100%;
  
}
/* .page{
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  bottom:0;
  right: 0;
} */
</style>
