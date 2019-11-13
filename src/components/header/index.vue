<template>
  <div class="header">
    <b v-for="item in headers" :key="item.title">{{item.title}}</b>
    <div class="header_input">
      <div class="iconfont icon-sou"></div>
      <router-link 
      v-for="item in search_input" :key="item.path"
      tag="input"
      :to="item.path"
      id="search_input"
      placeholder="搜索"
      ></router-link>
    </div>
    <span>打开App</span>
  </div>
</template>

<script>
export default {
  name:"Header",
  data(){
    return {
      headers:[
        {
          title:"喜马拉雅",
        }
      ],
      search_input:[
        {
          path:"/sousuo"
        }
      ]
     
    }
  }
};
</script>

<style>
.header{
    height:0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.2rem;
    position: fixed;
    top:0;
    left:0;
    background: #fff;
    z-index: 1;
    width:100%
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
    width:1rem
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
</style>