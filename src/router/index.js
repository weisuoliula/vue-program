import Vue from 'vue'
import VueRouter from 'vue-router'
import qinggan from './qinggan'
import tuijian from './tuijian'
import youshusheng from './youshusheng'
import sousuo from './sousuo'
Vue.use(VueRouter)


const router = new VueRouter({
  mode:"hash",
  routes:[
    {
      path:"/",
      redirect:"/qinggan"
    },
    qinggan,
    tuijian,
    youshusheng,
    sousuo,
    {
      path:"/login",
      component:_=>import("@pages/login"),//_代表当前函数不传参数,()传参
      name:"login",
    }
  ]
})

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
