import http from "@utils/request";

export const tuijianrecommendapi=()=>http({
    method:'get',
    url:"/api/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian"
//https://m.ximalaya.com/m-revision/page/index/queryIndexTabContent?moduleKey=tuijian
})
export const soundbookrecommendapi=()=>http({
    method:'get',
    url:"/api/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu"
//https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu
})

export const searchconrecommendapi=(flag)=>http({
    method:'get',
    url:"/api/hotWordBillboard/list/2.0?categoryId="+flag+"&size=24"
//https://search.ximalaya.com/hotWordBillboard/list/2.0?categoryId=-1&size=24
})
