export default {
    path:"/xiangting/:id",
    component:_=>import("@pages/xiangting"),//_代表当前函数不传参数,()传参
    name:"xiangting",
    props:true
    // children:[
    //     {
    //         path:"/qinggan",
    //         redirect:"/qinggan/main"
    //     },
    //     {
    //         path:"main",
    //         component:_=>import("@components/main"),
    //         meta:{
    //             title:"情感"
    //         }
    //     },
    // ]
}