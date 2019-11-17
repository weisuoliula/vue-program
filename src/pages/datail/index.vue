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
      <div class="iconfont iconbofang"></div>
      <img :src="datail.picUrl" />
      <span>倍速播放</span>
      <span>下载收听</span>
      <v-touch @tap="handleTap()" tag="h1">去购买商品 <s>￥{{datails}}</s></v-touch>
    </div>
    <div class="loglog">
      <div class="log"></div>
      <div class="log_2"></div>
    </div>
  </div>
</template>

<script>
import { datail,shopping} from "@api/qinggan";
export default {
  name: "datail",
  props: ["id"],
  data() {
    return {
      datail: [],
      datails:[]
    };
  },
  created() {
    this.handleCbDatail();
    // this.handleDbDatails()
  },
  methods: {
    async handleCbDatail() {
      let data = await datail(this.id);
      this.datail = data;
      this.datails=data.__ob__.dep.id;
    },
   async handleTap() {
      let data =await shopping(this.datail.picUrl,this.datails)
      console.log(data)
      this.$router.push("/shopping");
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
  height: 2.25rem;
  width: 100%;
  -background: rgba(243, 241, 243, 0.678);
  background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_bg_2b1fa03.png)
    no-repeat center;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}
.nav p {
  font-size: 0.18rem;
  color: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
}
.nav span {
  /* color: red;
  font-size: 0.14rem; */
  display: inline-block;
    padding: 2px 7px;
    background: rgba(65,65,65,.5);
    border: 1px solid #ffdf00;
    border-radius: 100px;
    font-size: 11px;
    color: #ffdf00;
    margin-top:0.1rem
}
.nav h1 {
  width: 1.8rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background: #f86442;
  border-radius: 0.5rem;
  color: #fff;
  margin-top: 0.1rem;
  font-size: 0.14rem;
}
.nav h1 s{
  color: yellow;
  font-weight: bold
}
.nav img {
  height: 1rem;
  width: 1rem;
  margin-top: 0.14rem;
}
.loglog {
  position: relative;
  overflow: hidden;
}
.log {
  background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_logo_f90f028.png)
    no-repeat center;
  background-size: 1.6rem 0.4rem;
  width: 100%;
  height: 2rem;
  position: absolute;
}
.log_2 {
  height: 2.94rem;
  background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_bg_2b1fa03.png)
    no-repeat center;
}
.iconfont.iconbofang {
  position: absolute;
  top: 115px;
  left: 164px;
  z-index: 1;
  font-size: 0.5rem;
  color: #fff;
}
</style>