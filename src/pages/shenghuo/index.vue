<template>
  <div class="shenghuo">
    <div class="header">
      <v-touch @tap="handletap()" tag="b">〈 情感生活</v-touch>
      <div class="header_input">
        <div class="iconfont iconsousuo"></div>
        <input type="text" value id="search_input" placeholder="搜索" />
      </div>
      <span>打开App</span>
    </div>
    <Nav/>
    <List/>
    <!-- 二级路由优化缓存 -->
    <keep-alive>
       <router-view></router-view>
    </keep-alive>
    
  </div>
</template>

<script>
import Nav from "@components/nav"
import List from "@components/list"
export default {
    components:{
        Nav,
        List
    },
    created() {
      document.title=this.$route.meta.title
  },
  methods: {
    handletap(){
      this.$router.push("/qinggan/main")
    }
  },
};
</script>

<style scoped>
.header{
    height:0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:0 0.1rem;
    position: fixed;
    background: #fff;
    width:100%;
    z-index: 5;
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
.iconfont.iconsousuo{
    font-size:0.2rem;
}
</style>