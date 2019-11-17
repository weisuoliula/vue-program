<template>
  <div class="cart">
    <Top/>
    <Center/>
    <Bottom/>
  </div>
</template>

<script>
import Top from "@components/top"
import Center from "@components/center"
import Bottom from "@components/bottom"
export default {
  name:"shopping",
  components:{
    Top,
    Center,
    Bottom
  },
   created(){
    this.$store.dispatch("handleActionsGetGoods")
  }
}
</script>

<style>

</style>