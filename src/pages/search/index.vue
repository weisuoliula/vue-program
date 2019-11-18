<template>
  <div class="box">
    <div class="search">
      <input type="text" v-model="value" v-on:keyup.enter="submit" />
      <p class="iconfont iconsousuo"></p>
      <v-touch tag="span" @tap="cancleclick()">取消</v-touch>
    </div>
    <div class="search_fade" v-show="flag">
      <div class="fade_con">
        <img
          src="http://imagev2.xmcdn.com/group65/M00/FE/07/wKgMdF1dz9jBTxzaAAHQytNvIsc785.jpg!op_type=3&columns=86&rows=86&magick=png"
          alt
        />
        <div class="fade_con_right">
          <h4>{{listfade.keyword}}</h4>
          <div>
            <p>{{listfade.category}}</p>
            <p>{{listfade.play}}亿</p>
            <p>{{listfade.tracks}}集</p>
          </div>
        </div>
      </div>
      <ul class="fade_list">
        <li v-for="(item,index) in listfadelist" :key="index">{{item.keyword}}</li>
      </ul>
    </div>
    <div v-show="flag1">
      <div class="nav11">
        <p>搜索历史</p>
        <v-touch class="iconfont iconshanchu" @tap="deleteHistory()"></v-touch>
      </div>
      <div class="search_history">
        <p v-for="(item,index) in record" :key="index">{{item}}</p>
      </div>
      <div class="main_">
        <ul class="nav2">
          <router-link
            tag="li"
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
          >{{item.text}}</router-link>
        </ul>
        <!-- --------------------------切换显示内容--------------------------------- -->
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { searchnavrecommendapi, searchrecommendapi } from "@api/recommend";
import { throttle } from "@utils/throttle";

export default {
  name: "search",
  data() {
    return {
      value: "",
      listfade: {},
      listfadelist: [],
      flag: 0,
      flag1: 1,
      record: [],
      navs: [
        {
          text: "热门",
          path: "/search/hot"
        },
        {
          text: "有声书",
          path: "/search/sound"
        },
        {
          text: "相声评书",
          path: "/search/xiangshengcomment"
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
    };
  },
  watch: {
    value(newVal) {
      throttle(async () => {
        let data = await searchrecommendapi(newVal);
        if (data.data.result.albumResultList) {
          this.flag = 1;
          this.flag1 = 0;
        }
        this.listfade = data.data.result.albumResultList[0];
        this.listfadelist = data.data.result.queryResultList;
        if (this.value == "") {
          this.listfade = [];
          this.flag = 0;
          this.flag1 = 1;
        }
      }, 300);

      //console.log(this.listfadelist)
    }
  },
  created() {},
  methods: {
    cancleclick() {
      this.$router.push("/tuijian");
    },
    submit() {
      this.record.push(this.value);
      
      //console.log(this.record)
    },
    deleteHistory(){
        this.record=[];
    }
  }
};
</script>

<style scoped>
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
.box .fade_con {
  padding: 0.15rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box .fade_con img {
  margin-right: 0.1rem;
  width: 0.4rem;
  height: 0.4rem;
}
.box .fade_con .fade_con_right {
  flex: 1;
  color: #a3a3ac;
}
.box .fade_con .fade_con_right > div {
  flex: 1;
  color: #a3a3ac;
  display: flex;
  align-items: center;
  margin-top: 0.05rem;
}
.box .fade_con .fade_con_right > div h4 {
  padding-bottom: 4px;
  line-height: 20px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  font-size: 0.14rem;
  color: #40404c;
}
.box .fade_con .fade_con_right > div > p:nth-of-type(1) {
  border: 1px solid #a3a3ac;
  border-radius: 0.06rem;
  margin-right: 0.15rem;
  padding: 0 0.045rem;
  height: 0.18rem;
  line-height: 0.18rem;
  font-size: 0.09rem;
  text-align: center;
}
.box .fade_con .fade_con_right > div > p:nth-of-type(2) {
  font-family: "PingFangSC-Regular";
  font-size: 0.12rem;
  color: #a3a3ac;
  line-height: 0.16rem;
  margin-right: 0.15rem;
}
.box .fade_con .fade_con_right > div > p:nth-of-type(3) {
  font-family: " PingFangSC-Regular";
  font-size: 0.12rem;
  color: #a3a3ac;
  line-height: 0.16rem;
}
.box .fade_list > li {
  height: 0.4rem;
  line-height: 0.4rem;
  color: #40404c;
  font-size: 0.14rem;
  border-bottom: 0.01rem solid #e1e1e1;
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
.nav2 .router-link-active {
  font-size: 0.16rem;
  border-bottom: 0.02rem solid #c33;
}
</style>