<template>
  <div class="classify_box">
    <Header />
    <div class="main">
      <div ref="left_nav">
        <van-sidebar v-model="activeKey" class="leftnav">
          <van-sidebar-item
            class="leftnavone"
            :title="item.category.displayName"
            v-for="(item,index) in rightcon"
            :key="index"
            @click="clicknav(index)"
          />
        </van-sidebar>
      </div>
      <div class="main_right" ref="mainRightList">
        <div class="conone" v-for="(item,index) in rightcon" :key="index">
          <div class="main_right_nav">
            <p class="main_right_navname">
              {{item.category.displayName}}
              <span>/共{{item.albumCount}}张专辑</span>
              <i class="iconfont iconiconfonti"></i>
            </p>
          </div>
          <ul>
            <li
              v-for="(child,index) in item.category.subCategories"
              :key="index"
            >{{child.displayValue}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { classifyapi } from "@api/recommend";
export default {
  name: "classify",
  data() {
    return {
      activeKey: 0,
      rightcon: []
    };
  },
  created() {
    this.classify();
  },
  methods: {
    async classify() {
      let data = await classifyapi();
      this.rightcon = data.data;
    },
    clicknav(index) {
      let tit = this.$refs.mainRightList.querySelectorAll(
        ".main_right_navname"
      )[index].offsetTop;
      let tit1 = tit - 56;
      //this.$refs.left_nav.scrollTop;
      this.$refs.mainRightList.scrollTop = tit1;
      let nav = this.$refs.left_nav.querySelectorAll(".leftnavone")[index]
        .offsetTop;
        let nav1=nav-56;
      /* console.log(nav) */
       this.$refs.left_nav.scrollTop=nav1;
     // console.log( this.$refs.left_nav.scrollTop);
    }
  }
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
body {
  width: 100%;
  height: 100%;
  -overflow: hidden;
}
body #app {
  height: 100%;
}
.classify_box {
  height: 100%;
  background: #f0f0f0;
}
.main {
  height: 100%;
  background: #fff;
  -overflow-y: auto;
  margin-top: 0.05rem;
  display: flex;
}
.main>div{
  overflow-y: auto;
  width: 100%;
}
/* .main .leftnav {
    overflow-y:scroll !important ; 
}
 */
.main .leftnav .leftnavone {
  background: #fff;
  text-align: center;
  color: #72727b;
  border-bottom: 0.01rem solid #dad2d2;
}
/*----------------------------------分类右边---------------------------*/
.main .main_right {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  margin-left: -1.2rem;
}
.main .main_right_nav {
  margin-left: 0.15rem;
  height: 0.61rem;
  line-height: 0.61rem;
  border-bottom: 0.01rem solid #dad2d2;
}

.main .main_right_nav > p:nth-of-type(1) {
  font-size: 0.14rem;
  color: #fe7959;
  font-weight: 550;
  position: relative;
}

.main .main_right_nav > p:nth-of-type(1) > span {
  font-size: 0.12rem;
  font-weight: normal;
}

.main .main_right_nav > p > i {
  font-size: 0.12rem;
  position: absolute;
  left: 1.63rem;
}

.iconfont.iconiconfonti {
  font-size: 0.24rem !important;
  color: #dad2d2;
}

.main .main_right .conone > ul {
  padding: 0.075rem 0 0.075rem 0.075rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.main .main_right .conone > ul > li {
  padding: 0.075rem;
  color: #72727b;
  font-size: 0.14rem;
}
</style>