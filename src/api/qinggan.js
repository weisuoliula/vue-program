import http from "@utils/request";


export const  qinggan =()=>http({
        method:"get",
        url:"/api/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=qinggan",
        data:{
        }
    
})

export const  shenghuotwo =(page)=>http({
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=0",
        data:{
        }
})

export const  zuiduobofang =(page)=>http({
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=2",
        data:{
        }
})

export const  zuijingengxin =(page)=>http({
        method:"get",
        url:"/api/m-revision/page/category/queryCategoryAlbumsByPage?categoryCode=qinggan&subCategoryCode=qinggan&page="+page+"&pageSize=30&sort=1",
        data:{
        }
})


export const  xiangting =(anchorId)=>http({
        method:"get",
        url:"/api/m-revision/common/anchor/queryAnchorAlbumsByPage?anchorId=1372222&page=1&pageSize=3&asc=false",
        data:{
                anchorId       
        }
    
})