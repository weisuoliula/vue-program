export default {
    path: "/search",
    component: _ => import("@pages/search"),
    name: "search",
    meta: {
        flag: true,
        requiredAuth: false
    },
    children: [{
        path: "hot",
        // redirect:"/tuijian/tuijian_main"
        component: _ => import("@components/search")
    }, 
    {
        path: "",
        // redirect:"/tuijian/tuijian_main"
        component: _ => import("@components/search")
    },
]
}