<template>
  <div class="boxsound">
    <van-swipe @change="onChange" class="soundImg" :autoplay="1500" indicator-color="white">
      <van-swipe-item v-for="(item,index) in tuijian_list" :key="index">
        <img :src="item.adFocusPictureDetail.cover" alt />
      </van-swipe-item>
     <!--  <div class="custom-indicator" slot="indicator">{{ current + 1 }}/4</div> -->
    </van-swipe>
   
    <div class="nav2">
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M03/00/EF/wKgMclz13MPBZzrTAACa07xW7PU710.png" alt />
        <figcaption>言情</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M03/00/E8/wKgMaFz13MjDAnt_AACVeUyfRiA157.png" alt />
        <figcaption>都市</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M03/00/E9/wKgMaFz13M3jLqMZAADhZejycAc850.png" alt />
        <figcaption>悬疑</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M05/00/E9/wKgMaFz13NHTvod5AACml8OQjPI794.png" alt />
        <figcaption>幻想</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M03/00/F1/wKgMclz13NXj3_S6AAAO9ZkPU-I921.png" alt />
        <figcaption>全部分类</figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
import { soundbook1recommendapi } from "@api/recommend";
export default {
  name: "Bar",
  data() {
    return {
      tuijian_list: [],
      current: 0
    };
  },
  //https://m.ximalaya.com/m-revision/page/index/queryIndexCategoryTabContent?moduleKey=youshengshu
  created() {
    this.soundBookimg();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    async soundBookimg() {
      let data = await soundbook1recommendapi();
      this.tuijian_list = data.data.moduleContent.focusImages;
     // console.log(this.tuijian_list);
    }
  }
};
</script>
<style scoped>
.main .boxsound{
  margin-top: 0.08rem;
}
.main .boxsound .soundImg .van-swipe-item{
  text-align: center;
}
.main .boxsound .soundImg img{
  width: 2.48rem;
  height: 1.08rem;
  border-radius: 0.1rem;
}
.main .nav2 {
  width: 3.08rem;
  height: 0.54rem;
  display: flex;
  margin: 0 auto;
  margin-top: 0.15rem;
  border-bottom: none;
}

.main .nav2 figure {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.main .nav2 figure figcaption {
  font-size: 0.12rem;
  color: #666;
}

.main .nav2 figure img {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 100%;
}
</style>