export default {
    path:"/youshusheng",
    component:_=>import("@pages/youshusheng"),//_代表当前函数不传参数,()传参
    name:"youshusheng",
    meta:{
        requiredAuth:true//路由守卫
    }
}