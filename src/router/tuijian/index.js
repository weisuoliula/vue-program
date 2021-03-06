export default {
    path: "/tuijian",
    component: _ => import("@pages/tuijian"),
    name: "tuijian_",
    meta: {
        flag: true,
        requiredAuth: false
    },
    children: [{
            path: "/tuijian",
            redirect: "/tuijian/tuijian_main"
        },
        {
            path: "youshengshu",
            component: _ => import("@components/youshengshu"),
            name: "youshengshu",
            meta: {
                flag: true,
                requiredAuth: false
            },
        },
        {
            path: "tuijian_main",
            component: _ => import("@components/tuijian"),
            name: "tuijian_main",
            meta: {
                flag: true,
                requiredAuth: false
            },
        }
    ]
}