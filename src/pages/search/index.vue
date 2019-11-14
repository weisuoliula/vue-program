<template>
  <div class="box">
    <div class="search">
      <input type="text" />
      <p class="iconfont iconsousuo"></p>
      <span>取消</span>
    </div>
    <div class="nav11">
      <p>搜索历史</p>
      <i class="iconfont iconshanchu"></i>
    </div>
    <div class="search_history">
      <p>新概念英语</p>
      <p>郭德纲</p>
    </div>
    <div class="main_">
      <ul class="nav2">
        <router-link
          tag="li"
          v-for="(item,index) in navs"
          :key="index"
          :to="item.path"
        >{{item.text}}</router-link>
        <!-- <li>有声书</li>
                <li>相声评书</li>
                <li>儿童</li>
                <li>历史</li>
                <li>音乐</li>
                <li>人文</li>
                <li>商业财经</li>
        <li>其他</li>-->
      </ul>
      <!-- --------------------------切换显示内容--------------------------------- -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { searchnavrecommendapi } from "@api/recommend";
/* import { searchconrecommendapi } from "@api/recommend"; */
import searchcon from "@components/search";
export default {
  name: "search",
  components: {
    searchcon
  },
  data() {
    return {
      //searchnavList: [],
      navs: [
        {
          text: "热门",
          path: "/search/hot"
        },
        {
          text: "有声书",
          path: "/search/hot"
        },
        {
          text: "相声评书",
          path: "/hot"
        },
        {
          text: "儿童",
          path: "/hot"
        },
        {
          text: "历史",
          path: "/hot"
        },
         {
          text: "音乐",
          path: "/hot"
        },
         {
          text: "人文",
          path: "/hot"
        },
         {
          text: "商业财经",
          path: "/hot"
        },
         {
          text: "其他",
          path: "/hot"
        }
      ]
      //searchconList: []
    };
  },
  created() {
    //console.log("000");
    //this.handlesearchnav();
    //this.handlesearchcon(this.flag);
  },
  methods: {
    /* navclick(index) {
      //console.log('000')
      this.flag = index;
      //console.log(this.flag)
      switch (index){
        case -1:
          this.activeIndex = "listHot";
          break;
        case 3:
          this.activeIndex = "listSound";
          break;
        case 12:
          this.activeIndex = "listComment";
          break;
      }
    }, */
    /* async handlesearchnav() {
      let data = await searchnavrecommendapi();
      this.searchnavList = data.category;
      //console.log(this.tuijian_list);
    }, */
  }
};
</script>

<style>
.box {
  padding: 0 0.14rem;
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 100%;
}
/*-----------------------搜索栏-----------------------*/
.search {
  height: 0.46rem;
  padding: 0.08rem 0;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
}

.search > p {
  position: absolute;
  top: 0.11rem;
  left: 0.05rem;
  color: #999;
}

.search > input {
  width: 2.5rem;
  height: 0.3rem;
  border-radius: 0.3rem;
  background: #eff1f4;
  border: 0;
  padding-left: 0.3rem;
}

.iconfont.iconsousuo {
  font-size: 0.2rem;
}

/*---------------------搜索历史导航--------------------------*/
.nav11 {
  height: 0.3rem;
  padding: 0.1rem 0 0.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.iconfont.iconshanchu {
  font-size: 0.2rem;
}
.nav11 > p {
  font-size: 0.14rem;
}
/*----------------------搜索历史内容-------------------------*/
.search_history {
  width: 100%;
}
.search_history > p {
  margin: 0.05rem 0.1rem 0.1rem 0;
  padding: 0.05rem 0.15rem;
  display: inline-block;
  line-height: 0.3rem;
  background: #f3f4f5;
  border-radius: 0.04rem;
  color: #333;
  font-size: 0.14rem;
}

/* -----------------------------备选搜索导航-------------------------------- */
.nav2 {
  width: 100%;
  height: 0.35rem;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  overflow-y: hidden;
  border-bottom: 0.005rem solid #e8e8e8;
  align-items: center;
}
::-webkit-scrollbar {
  display: none;
}
.nav2 > li {
  flex: 1;
  font-size: 0.14rem;
  padding: 0.07rem;
  color: #72727b;
}

.nav2 > li:nth-of-type(1) {
  font-size: 0.18rem;
  color: #000;
}

.active {
  font-size: 0.18rem;
  color: #000;
}
/* .search_con {
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
} */
</style>