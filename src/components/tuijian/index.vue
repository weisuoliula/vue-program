<template>
  <div class="main">
    <Bar />
    <div>
      <div class="banner">
        <img src="http://imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png" />
      </div>
    </div>
    <!--  <div class="tuijianBody" ref="tuijianBody"> -->
    <Alley-scroll ref="scroll">
      <div class="scroll_content" >
        <div class="list_tuijian" v-for="(item,index) in tuijian_list" :key="index">
          <div class="nav3">
            <p>{{item.title}}</p>
            <span>更多 ></span>
          </div>
          <div
            class="listone"
            v-for="(child,index) in item.rankingContentInfoList.rankModuleInfoList"
            :key="index"
          >
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
      <!--  </div> -->
    </Alley-scroll>
  </div>
</template>

<script>
/* import BScroll from "better-scroll"; */
import Bar from "@common/components/bar";
import { tuijianrecommendapi } from "@api/recommend";

export default {
  name: "tuijian_main",
  components: {
    Bar
  },
  data() {
    return {
      tuijian_list: []
    };
  },
  watch:{
      tuijian_list(){ 
          this.$refs.scroll.handlefinishPullDown();
      }
  },
  created() {
    //console.log("000");
    this.handletuijian_();
  },
  methods: {
    async handletuijian_() {
      let data = await tuijianrecommendapi();
      this.tuijian_list = data.data.moduleContent.moduleRankDatas;
      //console.log(this.tuijian_list);
    }
  },
  mounted() {
   this.$refs.scroll.handlepullingDown(()=>{
     this.handletuijian_();
   });
  }
};

</script>

<style scoped>
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
/* .main .tuijianBody{
    height: inherit;
} */
.main .list_tuijian {
  width: 100%;
  padding: 0.15rem;
}

.main .list_tuijian .nav3 {
  height: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main .list_tuijian .nav3 > p {
  font-size: 0.18rem;
  font-weight: 600;
}

.main .list_tuijian .nav3 > span {
  font-size: 0.12rem;
  color: #72727b;
}

.main .list_tuijian .listone {
  width: 100%;
  padding: 0.15rem 0.1rem 0.15rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.01rem solid #f3f4f5;
}

.main .list_tuijian .listone > img {
  width: 0.7rem;
  height: 0.7rem;
}

.main .list_tuijian .listone > div > h3 {
  color: #333;
  font-size: 0.16rem;
  width: 1.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.main .list_tuijian .listone > div > p {
  width: 1.95rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #999;
  font-size: 0.13rem;
  margin: 0.05rem 0 0.07rem;
}

.main .list_tuijian .listone > div > span {
  color: #999;
  font-size: 0.12rem;
  margin: 0 0.1rem 0 0;
}
</style>