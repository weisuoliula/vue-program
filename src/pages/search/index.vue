<template>
   <div class="box">
        <div class="search">
            <input type="text">
            <p class="iconfont iconsousuo"></p>
            <span>取消</span>
        </div>
        <div class="nav1">
            <p>搜索历史</p>
            <i class="iconfont iconshanchu"></i>
        </div>
        <div class="search_history">
            <p>新概念英语</p>
            <p>郭德纲</p>
        </div>
        <div class="main">
            <ul class="nav2">
                <li>热门</li>
                <li>有声书</li>
                <li>相声评书</li>
                <li>儿童</li>
                <li>历史</li>
                <li>音乐</li>
                <li>人文</li>
                <li>商业财经</li>
                <li>其他</li>
            </ul>
           <!-- --------------------------切换显示内容--------------------------------- -->

        </div>
        
    </div>
</template>

<script>
export default {
    name:"Search"
}
</script>

<style>
.box {
    padding: 0 0.14rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
}
/*-----------------------搜索栏-----------------------*/
.search {
    height: 0.46rem;
    padding: 0.08rem 0;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
}

.search>p {
    position: absolute;
    top: 0.11rem;
    left: 0.05rem;
    color: #999;
}

.search>input {
    width: 2.5rem;
    height: 0.3rem;
    border-radius: 0.3rem;
    background: #eff1f4;
    border: 0;
    padding-left: 0.3rem;
}

.iconfont.iconsousuo {
    font-size: 0.2rem;
}

/*---------------------搜索历史导航--------------------------*/

.nav1 {
    height: 0.3rem;
    padding: 0.1rem 0 0.05rem;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.iconfont.iconshanchu{
    font-size: 0.2rem;
}
.nav1>p{
    font-size: 0.14rem;
}
/*----------------------搜索历史内容-------------------------*/
.search_history{
    width: 100%;

}
.search_history>p{
    margin: 0.05rem 0.1rem 0.1rem 0;
    padding: 0.05rem 0.15rem;
    display: inline-block;
    line-height: 0.3rem;
    background: #f3f4f5;
    border-radius: 0.04rem;
    color: #333;
    font-size: 0.14rem;
}

/* -----------------------------备选搜索导航-------------------------------- */
.nav2{
    width: 100%;
    height: 0.35rem;
    white-space: nowrap;
    overflow-x: auto;
    display: flex;
    overflow-y: hidden;
    border-bottom: 0.005rem solid #e8e8e8;
    align-items: center;
}
::-webkit-scrollbar {
    display: none
}
.nav2>li {
    flex: 1;
    font-size: 0.14rem;
    padding: 0.07rem;
    color: #72727b;
}

.nav2>li:nth-of-type(1) {
    font-size: 0.18rem;
    color: #000;
}

.active {
    font-size: 0.18rem;
    color: #000;
}
                         

</style>