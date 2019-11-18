import http from "@utils/request";
//首页推荐的数据
export const tuijianrecommendapi=()=>http({
    method:'get',
    url:"/api/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian"
//https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian
})

//首页有声书二级路由的数据
export const soundbookrecommendapi=()=>http({
    method:'get',
    url:"/api/m-revision/page/index/queryCategoryFeed?moduleKey=youshengshu"
})//https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=youshengshu
//首页有声书二级路由轮播图
export const soundbook1recommendapi=()=>http({
    method:'get',
    url:"/api/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu"
})//https://m.ximalaya.com/m-revision/page/index/queryCategoryFeed?moduleKey=youshengshu

//搜索页面搜索内容数据
export const searchconrecommendapi=(flag)=>http({
    method:'get',
    url:"/api/hotWordBillboard/list/2.0?categoryId="+flag+"&size=24"
//https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24
})

//搜索接口
export const searchrecommendapi=(kw)=>http({
    method:'get',
    url:"/api/revision/suggest?paidFilter=false&scope=all",
    data:{
        kw
    }
//https://m.ximalaya.com/revision/suggest?kw=g&paidFilter=false&scope=all
})
export const classifyapi=(kw)=>http({
    method:'get',
    url:"/api/m-revision/page/category/queryCategories",
    /* data:{
        kw
    } */
//https://m.ximalaya.com/m-revision/page/category/queryCategories
})



