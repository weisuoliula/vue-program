<template>
        <ul class="nav1">
            <li>推荐</li>
            <li>有声书</li>
            <li>相声</li>
            <li>音乐</li>
            <li>儿童</li>
        </ul>
</template>

<script>
export default {
  name: "All_nav",
  data() {
    return {};
  }
};
</script>

<style scoped>
    .nav1 {
    width: 100%;
    height: 0.34rem;
    display: flex;
    overflow-y: hidden;
    border-bottom: 0.005rem solid #e8e8e8;
    align-items: center;
    background: #fff;
    z-index: 10;
    position:absolute;
    border-bottom: 0.01rem solid #e8e8e8; 
}

::-webkit-scrollbar {
    display: none
}

.nav1>li {
    flex: 1;
    font-size: 0.12rem;
    padding: 0.07rem 0.125rem;
    color: #72727b;
}

.nav1>li:nth-of-type(1) {
    font-size: 0.18rem;
    color: #000;
}

.active {
    font-size: 0.18rem;
    color: #000;
}
</style>