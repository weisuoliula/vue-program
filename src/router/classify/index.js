export default {
    path: "/classify",
    component: _ => import("@pages/classify"),
    name: "classify",
    meta: {
        flag: true,
        requiredAuth: false
    },
    /* children: [
        {
            path: "/classify",
            redirect:"/classify/hot"
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
    ] */
}