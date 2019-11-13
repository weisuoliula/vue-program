<template>
  <div>
    <Header />
    <Nav />
    <Main/>
  </div>
</template>
    
<script>
import Nav from "@common/components/nav";
import Main from "@components/tuijian"
export default {
  name: "tuijian",
  components: {
    Nav,
    Main
  }
};
</script>

<style>

</style>