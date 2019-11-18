import http from "@utils/request";

/**
 * 情感
 */
export const  qinggan =()=>http({
        method:"get",
        url:"/api/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=qinggan",
        data:{
        }
    
})
/**
 * 情感生活二级路由
 */
export const  shenghuotwo =(page)=>http({
        
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=0",
        data:{
        }
})
/**
 * 情感生活二级路由
 */
export const  zuiduobofang =(page)=>http({
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=2",
        data:{
        }
})
/**
 * 情感生活二级路由
 */
export const  zuijingengxin =(page)=>http({
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=1",
        data:{
        }
})

/**
 * 想听页
 */
export const  xiangting =(anchorId,track)=>http({
        method:"get",
        url:"/api/m-revision/page/album/v2/queryAlbumPage/"+anchorId,
        data:{
                albumCounts:track//拼接？后的数据
        }
})

export const  xiangtingtwo =(anchorId)=>http({
        method:"get",
        url:"/api/m-revision/common/album/queryAlbumTrackRecordsByPage?albumId="+anchorId+"&page=2&pageSize=10&asc=true",
        data:{
        }
})
/**
 * 详情
 */
export const  datail =(anchorId)=>http({
        method:"get",
        url:"/api/mobile/v1/track/share/content?trackId="+anchorId+"&tpName=weixin&device=h5",
        data:{
        }
})

/**
 * 登陆
 */
export const  login =(username,password)=>http({
        method: "GET",
        url: "http://localhost:3000/data",
        data:{
                username:username,
                password:password
        }
})
/**
 * 注册
 */
export const  register =(username,password)=>http({
        method: "POST",
        url: "http://localhost:3000/data",
        data:{
                username:username,
                password:password,
        }
})
/**
 * 向购物车添数据
 */
export const  shopping =(datail,datails)=>http({
        method: "POST",
        url: "http://localhost:3000/good",
        data:{
                img:datail,
                price:datails,
                num:1
        }
})