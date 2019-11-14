<template>
  <div class="qinggan">
     <div class="header">
        <b>喜马拉雅</b>
        <div class="header_input">
            <div class="iconfont icon-sou"></div>
            <input type="text" value="" id="search_input" placeholder="搜索">
        </div>
        <span>打开App</span>
    </div>
    
    <div class="nav">
        <ul>
            <a href="javascript:void(0)">推荐</a>
            <a href="javascript:void(0)">情感</a>
            <a href="javascript:void(0)">有声书</a>
            <a href="javascript:void(0)">相声</a>
            <a href="javascript:void(0)">音乐</a>
            <a href="javascript:void(0)">儿童</a>
            <a href="javascript:void(0)">人文</a>
            <a href="javascript:void(0)">历史</a>
            <a href="javascript:void(0)">科技</a>
            <a href="javascript:void(0)">更多</a>
        </ul>
        <p></p>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "qinggan",
  created() {
      document.title=this.$route.meta.title
  },
};
</script>

<style scoped>
.header{
    height:0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left:0;
    top:0;
    background: #fff;
    z-index: 1;
    width:100%;
    padding:0 0.2rem
}
.header_input{
    display: flex;
    background: #eff1f4;
    width:1.32rem;
    height:0.2rem;
    border:1px solid #eff1f4;
    border-radius: 0.05rem;
    align-items: center;
}
.header_input input{
    background: #eff1f4;
    border:0;
    width:1rem;
    height:0.2rem;
    font-size:0.1rem
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
.iconfont.icon-sou{
    font-size:0.2rem;
}

.nav{
    height:0.45rem;
    background: #fff;
    position: fixed;
    top:0.5rem;
    left:0;
    z-index: 1;
    width:100%;
}
.nav ul{
    height:100%;
    display: flex;
    line-height:0.4rem;
    overflow-x: auto;
    white-space: nowrap;
}
.nav ul a{
    display: block;
    font-size:0.14rem;
    padding:0.07rem 0.125rem;
    color:#72727b
}
.nav ul a:hover{
    border-bottom:2px solid red;
    font-size:0.16rem;
    color:#000
}
.nav p{
    border: 1px solid #ddd;
}
</style>