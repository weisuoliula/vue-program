<template>
  <div class="footer">
    <label>
      <input type="checkbox" :checked="this.$store.state.selectedAll" @change="handleChange()" />全选
    </label>
    <p>删除所有商品</p>
    <p class="count">
      已选择
      <span>{{countPrice.sCount}}</span>商品
    </p>
    <p class="total">{{countPrice.sPrice}}</p>
    <a href="##">结算</a>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "bottom",
  computed: {
    ...mapGetters({
      countPrice: "countPrice"
    })
  },
  methods: {
    ...mapMutations({
      //不需要异步处理直接用muta
      handleChange: "handleChange"
    })
  }
};
</script>



<style>
.footer {
  margin-top: 0.05rem;
  display: flex;
  height: 0.52rem;
  width: 100%;
  align-items: center;
  border: 1px solid #f3f3f3;
  justify-content: space-between;
}
.footer > a {
  height: 100%;
  width: 0.9rem;
  color: #fff;
  text-align: center;
  display: block;
  background: #c33;
  line-height: 0.52rem;
  font-size: 0.16rem;
}
.footer > .total,
.footer > .count {
  width: 2rem;
  text-align: center;
}
</style>