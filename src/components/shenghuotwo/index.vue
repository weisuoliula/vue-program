<template>
   <div class="main">
        <div class="BYM">
            <router-link :to="'/xiangting/'+item.id" tag="a" v-for="(item,index) in shenghuotwo" :key="index">
                <img :src="'//imagev2.xmcdn.com/'+item.albumInfo.cover">
                <div class="BYM_1">
                    <b>{{item.albumInfo.title}}</b>
                    <p>{{item.albumInfo.shortIntro}}</p>
                    <p>{{item.albumInfo.id}}播放</p>
                </div>
            </router-link>
        </div>
        <v-touch class="jiazai" 
        @tap="handleGetshenghuotwo()" 
        tag="div">加载更多</v-touch>
      </div>
       
</template>

<script>
import {shenghuotwo} from "@api/qinggan"
export default {
  name:"shenghuotwo",
  data() {
    return {
      shenghuotwo:[],
      page:1
    }
  },
  created() {
    this.handleGetshenghuotwo()
  },
  methods: {
    async handleGetshenghuotwo(){
      let data =await shenghuotwo(this.page++)
      // console.log(data)
      this.shenghuotwo=data.data.albumBriefDetailInfos
    }
  },
}
</script>

<style scoped>
.main{
   position: absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    padding-top:1.3rem;
    height:100%;

}
.BYM a{
    display: flex;
    height:1.23rem;
    padding: 0 0.1rem;
    align-items: center;
    font-size: 0.12rem;
    color: #72727b;
}
.BYM a img{
    width: 0.9rem;
    height:0.9rem
}
.BYM_1{
    padding-left: 0.1rem;
}
.BYM_1 b{
    font-size: 0.14rem;
    line-height: 0.4rem;
    color: #000;
}
.jiazai{
  height:0.3rem;
  width:80%;
  background: #c33;
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.3rem;
  border-radius: 0.5rem;
  margin: auto;
  color: #fff
}
</style>