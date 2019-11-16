export default {
    path:"/shopping",
    component:_=>import("@pages/shopping"),//_代表当前函数不传参数,()传参
    name:"shopping",
    props:true,
    meta: {
        requiredAuth: true
    }
}