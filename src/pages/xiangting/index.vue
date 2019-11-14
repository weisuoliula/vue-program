<template>
<div class="xiangting">
  <div class="header">
        <b>喜马拉雅</b>
        <div class="header_input">
            <strong>想啥都有</strong>
        </div>
        <span>打开App</span>
    </div>
    <!-- 上传预览的图片 -->
    <div class="nn" >
        <div class="nav" >
                <img :src="'//imagev2.xmcdn.com/'+datail.cover">
                <div class="nav_2">
                    <p>{{datail.title}}</p>
                    <hr>
                    <h6>
                        <b>已订阅34.77万人</b><span>+免费订阅</span>
                    </h6>
                </div>
            </div>
    </div>
    
    <!-- 上传用户 -->
    <div class="open">
        <p>
            <img
                src="//imagev2.xmcdn.com/group69/M08/68/E6/wKgMeV29iaiSiU-QAAGQoFwfrYs359.jpg!op_type=3&columns=144&rows=144&magick=webp">
            <span>打开APP，完整收听</span>
        </p>
    </div>
    <div class="title">
        <span>节目（1284）</span><i>批量下载</i>
    </div>
    <div class="list">
        <ul>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
            <li>
                <a href="javascript:void(0)">做自己喜欢的事，慢一点也没关系</a>
            </li>
        </ul>
        <p>加载更多</p>
    </div>
</div>
</template>

<script>
import {xiangting} from "@api/qinggan"
export default {
    name:"xiangting",
    props:["id"],
    data() {
        return {
            datail:{}
        }
    },
    async created() {
        let data= await xiangting(this.id)
        console.log(data)
        this.datail=data.data.albumBriefDetailInfos[2].albumInfo
    }
    
}
</script>

<style scoped>
.xiangting{
    font-size:0.16rem
}
.header{
    height:0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.2rem;
    background: rgba(34,35,37,.8);
    flex-shrink: 0;

}
.header_input{
    display: flex;
    width:1.32rem;
    height:0.2rem;
    align-items: center;
    color: #fff;
    font-style: italic;
    font-size:0.16rem;
    font-weight: bold;
    flex-shrink: 0;

}
.header b{
    color:#f86442;
    font-weight: bold;
    font-size: 0.15rem;
}
.header span{
    width:0.68rem;
    height:0.24rem;
    border:1px solid #f86442;
    border-radius: 0.5rem;
    font-size: 0.1rem;
    text-align: center;
    line-height: 0.22rem;
    display: block;
    color:#f86442
}
/* nav */
.nav{
    height:1.55rem;
    background: rgba(121, 3, 3, 0.212);
    display: flex;
    padding-left:0.2rem;
    align-items: center;
}
.nav img{
    width:1rem;
    height:1rem
}
.nav_2{
    margin-left:0.2rem
}
.nav_2 p{
    color:#fff;
    font-size:0.16rem
}
.nav_2 h6 b{
    font-size:0.10rem;
}
.nav_2 h6 span{
    color:#000;
    
    border-radius: 0.2rem;
    padding:0.03rem;
    margin-left:0.1rem;
    background: #fff;

}
.open{
    height:1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
}
.open p{
    width:2rem;
    height:0.5rem;
    background: #f86442;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.5rem;
    color: #fff;
    display: flex;
}
.open img{
    width:0.5rem;
    height:0.5rem;
    border-radius: 0.5rem;
}
.title{
    height:0.25rem;
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.2rem;
}
.title span{
    font-size:0.16rem
}
.title i{
    color: #c33;
}

/* 加载更多*/
.list li{
    height:0.5rem;
    line-height:0.5rem;
    text-align: center;
}
.list li a{
    color: #000;
}
.list p{
    margin:0 auto;
    height:0.5rem;
    background: #f86442;
    width:2rem;
    text-align: center;
    line-height: 0.5rem;
    border-radius: 0.5rem;
    color: #fff;
}
</style>