<template>
  <div class="detail">
    <div class="header">
      <b>喜马拉雅</b>
      <div class="header_input">
        <strong>想啥都有</strong>
      </div>
      <span>打开App</span>
    </div>
    <div class="nav">
      <img
        :src="'//imagev2.xmcdn.com/'+datail.smallHeader"
      />
      <p>{{datail.nickname}}</p>
      <span>倍速播放</span>
      <span>下载收听</span>
      <v-touch @tap="handleTap()" tag="h1">去购买商品</v-touch>
    </div>
  </div>
</template>

<script>
import {datail} from "@api/qinggan"
export default {
  name:"datail",
   props:["id"],
  data(){
    return {
      datail:[]
    }
  },
  created() {
    this.handleCbDatail()
  },
  methods: {
    async handleCbDatail(){
      let data= await datail(this.id)
       console.log(data)
       this.datail=data.data.comments[0]
      
    },
    handleTap(){
      this.$router.push("/shopping")
    }
  },
};
</script>

<style scoped>
.detail {
  font-size: 0.16rem;
}
.header {
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.2rem;
  background: rgba(34, 35, 37, 0.8);
  flex-shrink: 0;
}
.header_input {
  display: flex;
  width: 1.32rem;
  height: 0.2rem;
  align-items: center;
  color: #fff;
  font-style: italic;
  font-size: 0.16rem;
  font-weight: bold;
  flex-shrink: 0;
}
.header b {
  color: #f86442;
  font-weight: bold;
  font-size: 0.15rem;
}
.header span {
  width: 0.68rem;
  height: 0.24rem;
  border: 1px solid #f86442;
  border-radius: 0.5rem;
  font-size: 0.1rem;
  text-align: center;
  line-height: 0.22rem;
  display: block;
  color: #f86442;
}

/*nav*/
.nav {
  height: 3.5rem;
  background: rgba(172, 205, 211, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav p {
  font-size: 0.18rem;
  color: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
}
.nav span {
  color: #c33;
}
.nav h1 {
  width: 2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  background: #f86442;
  border-radius: 0.5rem;
  color: #fff;
  margin-top: 0.2rem;
}
.nav img{
  height:1rem;
  width:1rem
}
</style>