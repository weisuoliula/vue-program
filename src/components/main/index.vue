<template>
  <div class="main">
      <div class="banner">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,qingganlist) in qingganlist" :key="qingganlist">
            <img :src="item.adFocusPictureDetail.cover" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <div class="list">
        <router-link v-for="(items,index) in qingganlist_2" :key="index" to="/shenghuo" tag="a" >
          <img :src="items.img" />
          <p>{{items.name}}</p>
        </router-link>
      </div>


      <div class="banner_two">
        <img src="//imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png" />
      </div>

      <div class="title">每日优选</div>
      
      <div class="Audio">
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img src="//imagev2.xmcdn.com/group56/M07/06/66/wKgLgFx2ZZei-GuCAAVp2JonAv8269.jpg!op_type=3&columns=144&rows=144&magick=webp"/>
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">1444万播放</div>
          </div>
          <p>不再让你孤单</p>
        </a>
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img
              src="//imagev2.xmcdn.com/group32/M0B/94/22/wKgJUFn5dnSSgFDzAAEvbUVduEo979.jpg!op_type=3&columns=144&rows=144&magick=webp"
            />
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">999万播放</div>
          </div>
          <p>与泥相遇，最暖时光与你</p>
        </a>
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img
              src="//imagev2.xmcdn.com/group56/M07/06/66/wKgLgFx2ZZei-GuCAAVp2JonAv8269.jpg!op_type=3&columns=144&rows=144&magick=webp"
            />
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">188.5万播放</div>
          </div>
          <p>高情商恋爱课</p>
        </a>
      </div>
      

      <div class="BYM"  v-for="(item,index) in qingganlist_3" :key="index">
        <a href="javascript:void(0)" v-for="(child,index) in item.albumBriefDetailInfos" :key="index">
            <img :src="'//imagev2.xmcdn.com/'+child.albumInfo.cover"  />
          <div class="BYM_1">
            <b>{{child.albumInfo.title}}</b>
            <p>{{child.albumInfo.subTitle}}</p>
            <p>{{child.albumInfo.id}}播放</p>
          </div>
        </a>
      </div>
   
  </div>
</template>

<script>
import { qinggan } from "@api/qinggan";
export default {
  name: "Main",
  data() {
    return {
      qingganlist: [],
      qingganlist_2:[],
      qingganlist_3:[]
    };
  },
  created() {
    this.handleGetHomeData();
  },
  methods: {
    async handleGetHomeData() {
      let data = await qinggan();
       console.log(data.data);
      this.qingganlist= data.data.moduleContent.focusImages;
      this.qingganlist_2 = data.data.moduleContent.tomatoes;
      this.qingganlist_3 =data.data.moduleContent.moduleRankDatas
      // console.log(this.qingganlist_3)
    }
  }
};
</script>

<style scoped>
.main {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  padding-top: 0.95rem;
}
.banner {
  height: 1.52rem;
  display: flex;
  align-items: center;
}
.banner .van-swipe {
  width: 100%;
}
.banner img {
  width: 2.7rem;
  height: 1.2rem;
  margin-left: 0.25rem;
  border-radius: 0.1rem;
}
.list {
  height: 0.54rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0.2rem;
}
.list a {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 0.62rem;
  height: 0.54rem;
}
.list a img {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 50%;
}
.list a p {
  font-size: 0.1rem;
  color: #72727b;
}
.banner_two {
  height: 1rem;
  display: flex;
  align-items: center;
}
.banner_two img {
  width: 100%;
  height: 0.7rem;
}
.title {
  height: 0.25rem;
  font-weight: 700;
  font-size: 0.16rem;
  padding-left: 0.15rem;
  line-height: 0.25rem;
}
.Audio {
  display: flex;
  height: 1.62rem;

  justify-content: space-between;
  align-content: center;
  font-size: 0.12rem;
  overflow: hidden;
  padding: 0 0.1rem;
}
.Audio a {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.2rem 0;
  width: 1.2rem;
  height: 1.62rem;
}
.Audio a p {
  margin-top: 0.05rem;
  color: #72727b;
}
.Audio a img {
  width: 0.95rem;
  height: 0.95rem;
}
.Audio_1 {
  position: relative;
}
.iconfont.icon-bofangkaishishipinyuanxingxianxing {
  position: absolute;
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 0.12rem;
}
.BYM {
  display: flex;
  flex-direction: column;
}
.BYM a {
  display: flex;
  height: 1.23rem;
  padding: 0 0.1rem;
  align-items: center;
  font-size: 0.12rem;
  color: #72727b;
}
.BYM a img {
  width: 0.9rem;
  height: 0.9rem;
}
.BYM_1 {
  padding-left: 0.1rem;
}
.BYM_1 b {
  font-size: 0.14rem;
  line-height: 0.4rem;
  color: #000;
}
</style>