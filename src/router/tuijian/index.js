export default {
    path:"/tuijian",
    component:_=>import("@pages/tuijian"),//_代表当前函数不传参数,()传参
    name:"tuijian",
    meta:{
        requiredAuth:false//路由守卫
    },
    children:[
        {
            path:"tuijiantwo",
            component:_=>import("@components/tuijiantwo")
        }
    ]
}