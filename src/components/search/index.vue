<template>
  <ul class="search_con">
    <li v-for="(item,index) in conList" :key="index">
      <span>1</span>
      <span>{{item.word}}</span>
    </li>
    <!-- <li>
      <span>2</span>
      <span>周建龙</span>
    </li>

    <li>
      <span>3</span>
      <span>周建龙</span>
    </li>

    <li>
      <span>1</span>
      <span>周建龙</span>
    </li>

    <li>
      <span>1</span>
      <span>周建龙</span>
    </li>

    <li>
      <span>1</span>
      <span>周建龙</span>
    </li>

    <li>
      <span>1</span>
      <span>周建龙</span>
    </li>-->
  </ul>
</template>

<script>
import { searchconrecommendapi } from "@api/recommend";
export default {
  name: "Searchcon",
  props: ["flag",'activeIndex'],
  data() {
    return {
      conList: {
        listHot: [],
        listSound: [],
        listComment: []
      }
    };
  },
  created() {
    //console.log(this.flag,this.activeIndex)
    this.handlesearchconHot(-1);
    this.handlesearchconSound(3);
    this.handlesearchconComment(12);
  },
  methods: {
    async handlesearchconHot(flag) {
      let data = await searchconrecommendapi(flag);
      this.listHot = data.hotWordResultList;
      // console.log(this.listHot);
    },
    async handlesearchconSound(flag) {
      let data = await searchconrecommendapi(flag);
      this.listSound = data.hotWordResultList;
      //console.log(this.listSound);
    },
    async handlesearchconComment(flag) {
      let data = await searchconrecommendapi(flag);
      this.listSound = data.hotWordResultList;
      //console.log(this.listSound);
    },
    
  }
};
</script>

<style>
.search_con {
  width: 100%;
}
.search_con > li {
  width: 100%;
  display: flex;
  height: 0.45rem;
  line-height: 0.45rem;
  border-bottom: 0.005rem solid #f1efef;
}
.search_con > li > span:nth-of-type(1) {
  display: inline-block;
  width: 0.2rem;
  text-align: center;
}
.search_con > li:nth-of-type(1) > span:nth-of-type(1) {
  color: #ff0b0b;
}
.search_con > li:nth-of-type(2) > span:nth-of-type(1) {
  color: #f86442;
}
.search_con > li:nth-of-type(3) > span:nth-of-type(1) {
  color: #f8a642;
}
.search_con > li:nth-of-type(4) > span:nth-of-type(1) {
  color: #dabda6;
}
.search_con > li > span:nth-of-type(2) {
  flex: 1;
  display: inline-block;
  padding-left: 0.1rem;
  color: #333;
  font-size: 0.16rem;
}
</style>