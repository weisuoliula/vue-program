export default {
    path:"/datail/:id",
    component:_=>import("@pages/datail"),//_代表当前函数不传参数,()传参
    name:"datail",
    props:true,
    // meta: {
       
    //     requiredAuth: true
    // }
}