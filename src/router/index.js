import Vue from "vue";
import VueRouter from "vue-router";
import tuijian_ from "./tuijian";
import search from "./search";
Vue.use(VueRouter);
const router=new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/tuijian"
        },
        tuijian_,
        search
    ]
})
export default router;
