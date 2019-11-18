<template>
  <div class="content">
    <div class="goods" v-for="(item,index) in goodsList" :key="index">
      <label>
        <input type="checkbox" :checked="item.flag" @change="handleGoodsItemchange(index)">
      </label>
      <div class="goodsImg">
        <img :src="item.img">
      </div>
      <!-- <div class="goodsInfo">{{item.goodsName}}</div> -->
      <p class="goodsPrice">{{item.price}}</p>
      <div class="num">
        <button @click="handleReducer(index)">-</button>
        <input type="text" :value="item.num"/>
        <button @click="handleAdd(index)">+</button>
      </div>
      <p class="Subtotal">{{item.num | sign(item.price)}}</p>
      <p class="operation" @click="handledelete(index)">删除</p>
    </div>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from "vuex";
export default {
  name: "Center",
  computed:{
      ...mapState({
          goodsList:state=>state.goodsList
      })
  },
  methods:{
      ...mapMutations({
          handleGoodsItemchange:"handleGoodsItemchange",
          handleReducer:"handleReducer",
          handleAdd:"handleAdd",
      }),
      ...mapActions({
          handledelete:"handledelete"
      })
  },

  
  filters:{
      sign(num,price){
          return "$"+(price*100*num)/100
      }
  }
};
</script>


<style>
.goods {
  width: 100%;
  display: flex;
  height: 1.07rem;
  align-items: center;
  /* background: #ddd; */
   background: url(//s1.xmcdn.com/yx/ximalaya-mobile-resource/last/dist/images/footer_bg_2b1fa03.png)
    no-repeat center;
}
.goods > label {
  width: 1rem;
  text-align: center;
}
/* .goods > .goodsInfo {
  width: 2rem;
} */
.goods > .goodsPrice {
  width: 1rem;
  text-align: center;
}
.goods > .num {
  overflow: hidden;
  display: flex;
}
.goods > .num > button {
  width: 1rem;
  height: 0.2rem;
  border: 0;
}
.goods > .num > input {
  width: 0.2rem;
}

.goods > .Subtotal {
  width: 2rem;
  text-align: center;
}

.goods > .operation {
  -width: 0.8rem;
  text-align: center;
}
.goodsImg img{
    width:0.6rem;
    height:0.6rem;
}
</style>