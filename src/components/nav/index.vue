<template>
  <div class="nav">
    <ul>
      <router-link 
      tag="a"
      v-for="item in nav" :key="item.id"
      :to="item.path"
      class="active"
      >{{item.text}}</router-link>
    </ul>
    <p></p>
  </div>
</template>

<script>

export default {
  name: "Nav",
  data(){
      return {
          nav:[
              {   id:0,
                  text:"推荐",
                  path:"/tuijian"
              },
              {   
                  id:1,
                  text:"情感",
                  path:"/qinggan"
              },
              {
                  id:2,
                  text:"有声书",
                  path:"/youshusheng"
              },
              {
                  id:3,
                  text:"相声",
                  path:"/tuijian"
              },
              {
                  id:4,
                  text:"音乐",
                  path:"/tuijian"
              },
              {
                  id:5,
                  text:"儿童",
                  path:"/tuijian"
              },
              {
                  id:6,
                  text:"人文",
                  path:"/tuijian"
              },
              {
                  id:7,
                  text:"更多",
                  path:"/tuijian"
              },
            
          ]
      }
  }
};
</script>

<style>
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
.nav p{
    border: 1px solid #ddd;
}
.router-link-active{
    border-bottom:2px solid red;
    font-size:0.16rem;
    color:#000
}
</style>