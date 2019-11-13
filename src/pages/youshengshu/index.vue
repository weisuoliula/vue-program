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
  name: "Youshengshu",
  components: {
    Nav,
    Main
  }
};
</script>

<style>

</style>