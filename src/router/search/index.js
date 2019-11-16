export default {
    path: "/search",
    component: _ => import("@pages/search"),
    name: "search",
    meta: {
        flag: true,
        requiredAuth: false
    },
    children: [
        {
            path: "/search",
            redirect:"/search/hot"
        },
        {
            path: "hot",
            component: _ => import("@components/search")
        },
        {
            path: "sound",
            component: _ => import("@components/search/sound")
        },
        {
            path: "xiangshengcomment",
            component: _ => import("@components/search/xiangshengcomment")
        },
    ]
}