<template>
  <div class="main">
    <Bar />
    <div>
      <div class="banner">
        <img src="http://imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png" />
      </div>
    </div>
    <Alley-scroll ref="scroll">
      <div class="scroll_con">
        <div class="nav3">
          <p>有声书</p>
          <span>更多>></span>
        </div>
        <div class="list" v-for="(item,index) in soundBook_list" :key="index">
          <div>
            <!-- <div class="list_top" v-for="(item,index) in top" :key="index">
          <figure>
            <img
              :src="'http://imagev2.xmcdn.com/'+item.albumInfo.cover+'!op_type=3&columns=144&rows=144&magick=webp'"
              alt
            />
            <figcaption>{{item.albumInfo.title}}</figcaption>
          </figure>
            </div>-->
            <div class="listone">
              <img
                :src="'http://imagev2.xmcdn.com/'+item.data.albumInfo.cover+'!op_type=3&columns=144&rows=144&magick=webp'"
                alt
              />
              <div>
                <h3>{{item.data.albumInfo.title}}</h3>
                <p>{{item.data.albumInfo.salePoint}}</p>
                <span class="iconfont iconerji">{{item.data.statCountInfo.trackCount}}</span>
                <span class="iconfont iconerji">{{item.data.statCountInfo.playCount}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Alley-scroll>
  </div>
</template>

<script>
import { soundbookrecommendapi } from "@api/recommend";
import Bar from "@common/components/youshengshubar";
export default {
  name: "Yousheng_main",
  components: {
    Bar
  },
  data() {
    return {
      soundBook_list: []
    };
  },
  watch: {
    soundBook_list() {
      this.$refs.scroll.handlefinishPullDown();
      this.$refs.scroll.handlefinishPullUp();
    }
  },
  created() {
    this.soundBooklist();
  },
  methods: {
    async soundBooklist() {
      let data = await soundbookrecommendapi();
      this.soundBook_list = data.data.materials;
    }
  },
  mounted() {
    this.$refs.scroll.handlepullingDown(() => {
      this.soundBooklist();
    });
    this.$refs.scroll.handlepullingUp(() => {
      this.soundBooklist();
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
.main .list {
  width: 100%;
  padding: 0.08rem;
}
.main .list .list_top {
  width: 2.9rem;
  height: 1.44rem;
  display: flex;
  justify-content: space-around;
}
.main .list .list_top figure {
  width: 0.91rem;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main .list .list_top figure > img {
  width: 0.91rem;
  height: 0.91rem;
}
.main .list .list_top figure > figcaption {
  width: 100%;
  font-size: 0.13rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
}
.main .nav3 {
  height: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.15rem;
}

.main .nav3 > p {
  font-size: 0.18rem;
  font-weight: 600;
}

.main .nav3 > span {
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