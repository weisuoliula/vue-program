<template>
  <ul class="nav11">
    <router-link
        tag="li"
        v-for="item in nav"
        :key="item.id"
        :to="item.path"
    >{{item.text}}</router-link>
    <!-- <li>有声书</li>
    <li>相声</li>
    <li>音乐</li>
    <li>儿童</li>
    <li>人文</li>
    <li>情感</li>
    <li>历史</li>
    <li>科技</li>
    <li>更多</li> -->
  </ul>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      nav: [
        {
          id: 0,
          text: "推荐",
          path: "/tuijian/tuijian_main"
        },
        {
          id: 1,
          text: "有声书",
          path: "/tuijian/youshengshu"
        },
        {
          id: 2,
          text: "相声",
          path: "/tuijian_main"
        },
        {
          id: 3,
          text: "音乐",
          path: "/tuijian_main"
        },
        {
          id: 4,
          text: "儿童",
          path: "/tuijian_main"
        },
        {
          id: 5,
          text: "人文",
          path: "/tuijian_main"
        },
        {
          id: 6,
          text: "情感",
          path: "/qinggan"
        },
        {
          id: 7,
          text: "历史",
          path: "/tuijian_main"
        },
        {
          id: 8,
          text: "科技",
          path: "/tuijian_main"
        },
        {
          id: 9,
          text: "更多",
          path: "/tuijian_main"
        }
      ]
    };
  }
};
</script>

<style scoped>
.nav11 {
  width: 100%;
  height: 0.34rem;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  overflow-y: hidden;
  border-bottom: 0.005rem solid #e8e8e8;
  align-items: center;
  background: #fff;
  z-index: 10;
  position: absolute;
  border-bottom: 0.01rem solid #e8e8e8;
}

::-webkit-scrollbar {
  display: none;
}

.nav11 > li {
  flex: 1;
  font-size: 0.12rem;
  padding: 0.07rem 0.125rem;
  color: #72727b;
}
.nav11 .router-link-active {
  font-size: 0.18rem;
}

</style>