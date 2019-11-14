<template>
  <div class="head">
    <h1>喜马拉雅</h1>
    <v-touch @tap="handleSearch()">
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
  methods:{
    handleSearch(){
        this.$router.push('/search')
    }
  }
};
</script>

<style>
.head {
  height: 0.5rem;
  width: 100%;
  padding: 0.15rem 0.15rem 0.05rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f86442;
  position: relative;
  z-index: 2;
  background: #fff;
}

.head input {
  width: 1.27rem;
  height: 0.3rem;
  font-size: 0.12rem;
  color: #7e8c8d;
  border-radius: 0.3rem 0.3rem;
  border: #000;
  background: #eff1f4;
  padding-left: 0.25rem;
}
.iconsousuo {
  color: #7e8c8d;
}
.head > i {
  position: absolute;
  left: 1rem;
  top: 0.22rem;
  font-size: 0.16rem;
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