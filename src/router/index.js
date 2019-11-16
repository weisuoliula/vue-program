import Vue from "vue";
import VueRouter from "vue-router";
import tuijian_ from "./tuijian";
import search from "./search";

import qinggan from './qinggan'
import shenghuo from './shenghuo'
import xiangting from './xiangting'
import datail from './datail'
import shopping from "./shopping";
Vue.use(VueRouter);
const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/tuijian"
        },
        tuijian_,
        search,
        qinggan,
        shenghuo,
        xiangting,
        datail,
        shopping,
        {
          path:"/login",
          component:_=>import("@pages/login"),//_代表当前函数不传参数,()传参
          name:"login",
        },
        {
            path:"/register",
            component:_=>import("@pages/register"),//_代表当前函数不传参数,()传参
             name:"register",
        }
    ]
})

/**
 * 全局路由守卫，去购物车需登录
 */
router.beforeEach((to,from,next)=>{
  if(to.path !="/login" && to.meta.requiredAuth){
    if(localStorage.getItem("token")){
      next();
    }else{
      next({name:"login",params:{to:to.path}})
    }
  }else{
    next()
  }
})
export default router
