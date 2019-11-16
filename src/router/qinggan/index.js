export default {
    path:"/qinggan",
    component:_=>import("@pages/qinggan"),//_代表当前函数不传参数,()传参
    name:"qinggan",
    children:[
        // {
        //     path:"/qinggan",
        //     redirect:"/qinggan/main"
        // },
        {
            path:"main",
            component:_=>import("@components/main"),
            meta:{
                title:"情感"
            }
        },
    ]
}