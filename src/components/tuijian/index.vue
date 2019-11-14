<template>

  <div class="main">
    <Bar />
    <div>
      <div class="banner">
        <img src="http://imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png" />
      </div>
    </div>
    <div class="list" v-for="(item,index) in tuijian_list" :key="index">
      <div class="nav3">
        <p>{{item.title}}</p>
        <span>更多 ></span>
      </div>
      <div class="listone" v-for="(child,index) in item.rankingContentInfoList.rankModuleInfoList" 
      :key="index">
        <img
          :src="'//imagev2.xmcdn.com/'+child.albumInfo.cover+'!op_type=3&columns=144&rows=144&magick=webp'"
          alt
        />
        <div>
          <h3>{{child.albumInfo.title}}</h3>
          <p>{{child.albumInfo.customTitle}}</p>
          <span class="iconfont iconerji">{{child.statCountInfo.trackCount}}</span>
          <span class="iconfont iconerji">{{child.statCountInfo.playCount}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "@common/components/bar";
import { tuijianrecommendapi } from "@api/recommend";

export default {
  name: "tuijian_main",
  components: {
    Bar
  },
  data(){
    return{
      tuijian_list:[]
    }
  },
  created() {
    //console.log("000");
    this.handletuijian_();
  },
  methods: {
    async handletuijian_() {
      let data = await tuijianrecommendapi();
      this.tuijian_list=data.data.moduleContent.moduleRankDatas;
      //console.log(this.tuijian_list);
    }
  }
};
//group62/M08/57/04/wKgMZ1z7asCSSAR8AAFp44juMnc336.jpg
////imagev2.xmcdn.com/group62/M08/57/04/wKgMZ1z7asCSSAR8AAFp44juMnc336.jpg!op_type=3&columns=144&rows=144&magick=webp
</script>

<style>
.main {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 0.84rem;
  overflow-y: auto;
}
.main .banner {
  width: 100%;
  height: 0.81rem;
  margin: 0.18rem 0 0.08rem;
}

.main .banner img {
  width: 100%;
  height: 100%;
}
.main .list {
  width: 100%;
  padding: 0.15rem;
}

.main .list .nav3 {
  height: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main .list .nav3 > p {
  font-size: 0.18rem;
  font-weight: 600;
}

.main .list .nav3 > span {
  font-size: 0.12rem;
  color: #72727b;
}

.main .list .listone {
  width: 100%;
  padding: 0.15rem 0.1rem 0.15rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #f3f4f5;
}

.main .list .listone > img {
  width: 0.7rem;
  height: 0.7rem;
}

.main .list .listone > div > h3 {
  color: #333;
  font-size: 0.16rem;
  width: 1.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.main .list .listone > div > p {
  width: 1.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999;
  font-size: 0.13rem;
  margin: 0.05rem 0 0.07rem;
}

.main .list .listone > div > span {
  color: #999;
  font-size: 0.12rem;
  margin: 0 0.1rem 0 0;
}
</style>