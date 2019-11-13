<template>
    <div class="nav2">
      <figure>
        <img src="http://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png" alt />
        <figcaption>排行榜</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group57/M0A/3B/D0/wKgLgVyQuqWRZsJtAAAnr8tg4rs307.png" alt />
        <figcaption>排行榜</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group63/M01/B2/54/wKgMcl0Arv-gbwo4AABqDmN0C8Q090.png" alt />
        <figcaption>排行榜</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group56/M09/3B/BD/wKgLgFyQujLCAVYRAAAuwA7DZMg198.png" alt />
        <figcaption>排行榜</figcaption>
      </figure>
      <figure>
        <img src="http://fdfs.xmcdn.com/group60/M02/18/F4/wKgLeVziZxHRlc-lAAAO9ZkPU-I489.png" alt />
        <figcaption>全部分类</figcaption>
      </figure>
    </div>
 
</template>

<script>
export default {
  name: "Bar",
  data() {
    return {};
  }
};
</script>

<style>


.main .nav2 {
  width: 3.08rem;
  height: 0.54rem;
  display: flex;
  margin: 0 auto;
  margin-top: 0.15rem;
}

.main .nav2 figure {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
}

.main .nav2 figure figcaption {
  font-size: 0.12rem;
  color: #666;
}

.main .nav2 figure img {
  width: 0.34rem;
  height: 0.34rem;
  border-radius: 100%;
}
</style>