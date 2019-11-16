<template>
  <div class="head">
    <v-touch tag="h1" @tap="head_back_()">喜马拉雅</v-touch>
    <v-touch @tap="handleSearch()" tag="div">
      <input type="text" value="搜索" />
    </v-touch>
    <i class="iconfont iconsousuo"></i>
    <p>打开APP</p>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {
    handleSearch() {
      this.$router.push("/search");
    },
    head_back_(){
        this.$router.back("/tuijian")
    }
  }
};
</script>

<style scoped>
.head {
  height: 0.5rem;
  width: 100%;
  padding: 0.15rem 0.15rem 0.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f86442;
  z-index: 10;
  background: #fff;
  position: relative;
}
.head > div {
  height: 100%;
  position: relative;
  width: 1.27rem;
}
.head > div > input {
  width: 1.27rem;
  height: 0.3rem;
  font-size: 0.12rem;
  color: #7e8c8d;
  border-radius: 0.3rem 0.3rem;
  border: #000;
  background: #eff1f4;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 0.28rem;
}
.iconsousuo {
  color: #7e8c8d;
}
.head > i {
  position: absolute;
  left: 0.98rem;
  top: 0.22rem;
  font-size: 0.16rem;
  z-index: 10;
  margin: 0 0.04rem;
}
.head > p {
  width: 0.68rem;
  height: 0.3rem;
  font-size: 0.12rem;
  color: #f86442;
  border-radius: 0.15rem 0.15rem;
  border: 0.01rem solid #f86442;
  line-height: 0.3rem;
  text-align: center;
}
</style>