<template>
  <div class="top">
    <label>
      <input type="checkbox" :checked="this.$store.state.selectedAll" @change="handleChange()" />全选
    </label>
    <p>商品</p>
    <p>单价</p>
    <p>数量</p>
    <p>小计</p>
    <p>操作</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "top",
  methods: {
    ...mapMutations({
      handleChange: "handleChange"
    })
    // handleChange(){
    //     this.$store.commit("handleChange")
    // }
  }
};
</script>

<style>
.top {
  width: 100%;
  height:0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>