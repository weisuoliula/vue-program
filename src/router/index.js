import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/tuijian"
        },
        {
            path:"/tuijian",
            component:_=>import("@pages/tuijian"),
            name:"tuijian"
        },
        {
            path:"/youshengshu",
            component:_=>import("@pages/youshengshu"),
            name:"youshengshu"
        },
    ]
})
export default router;
