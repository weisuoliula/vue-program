<template>
  <div class="qinggan">
    <Header />
    <Nav/>
    <router-view></router-view>
      <!--<div class="main">
       
     <div class="banner">
        <img src="http://fdfs.xmcdn.com/group68/M0B/4C/AB/wKgMeF28Cn7CoB2LAAGCKYBqWc8961.jpg" />
        <img src="http://fdfs.xmcdn.com/group67/M07/4E/64/wKgMd128EpzzGj39AAFupgqnEDg030.jpg" />
        <img src="http://fdfs.xmcdn.com/group68/M09/B8/91/wKgMeF2y2WfTX_7VAAIRdH-z8xw301.jpg" />
        <img src="http://fdfs.xmcdn.com/group69/M06/4F/63/wKgMb128GTvyIO4wAAI3vopceAI361.jpg" />
        <img src="http://fdfs.xmcdn.com/group68/M02/DE/EC/wKgMeF3E6DGj2obCAAHal_21Tdw680.jpg" />
      </div>
      <div class="list">
        <a href="javascript:void(0)">
          <img src="http://fdfs.xmcdn.com/group62/M01/01/81/wKgMZ1z15-rDbfG1AAC1BsOfxGU909.png" />
          <p>情感</p>
        </a>
        <a href="javascript:void(0)">
          <img src="http://fdfs.xmcdn.com/group62/M01/01/70/wKgMcVz15-6xWADdAACXJQArjzk196.png" />
          <p>故事</p>
        </a>
        <a href="javascript:void(0)">
          <img src="http://fdfs.xmcdn.com/group62/M01/01/83/wKgMZ1z15_PjyHdkAABpGYHXgdY732.png" />
          <p>女性</p>
        </a>
        <a href="javascript:void(0)">
          <img src="http://fdfs.xmcdn.com/group61/M07/01/80/wKgMcFz15_bBdP9nAAC8uF4L2Hw546.png" />
          <p>恋爱</p>
        </a>
        <a href="javascript:void(0)">
          <img src="http://fdfs.xmcdn.com/group61/M07/01/81/wKgMcFz15_qCSbMbAAAO9ZkPU-I556.png" />
          <p>全部分类</p>
        </a>
      </div>
      <div class="banner_two">
        <img src="//imagev2.xmcdn.com/group61/M0A/CD/B2/wKgMZl0W1legiUgkAACPrBBFcJ4381.png" />
      </div>
      <div class="title">每日优选</div>
      <div class="Audio">
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img
              src="//imagev2.xmcdn.com/group14/M07/84/FB/wKgDZFYfb6yCFunhAAHdq6TqnLc358.jpg!op_type=3&columns=144&rows=144&magick=webp"
            />
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">1444万播放</div>
          </div>
          <p>不再让你孤单</p>
        </a>
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img
              src="//imagev2.xmcdn.com/group32/M0B/94/22/wKgJUFn5dnSSgFDzAAEvbUVduEo979.jpg!op_type=3&columns=144&rows=144&magick=webp"
            />
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">999万播放</div>
          </div>
          <p>与泥相遇，最暖时光与你</p>
        </a>
        <a href="javascript:void(0)">
          <div class="Audio_1">
            <img
              src="//imagev2.xmcdn.com/group56/M07/06/66/wKgLgFx2ZZei-GuCAAVp2JonAv8269.jpg!op_type=3&columns=144&rows=144&magick=webp"
            />
            <div class="iconfont icon-bofangkaishishipinyuanxingxianxing">188.5万播放</div>
          </div>
          <p>高情商恋爱课</p>
        </a>
      </div>
      <div class="BYM">
        <a href="javascript:void(0)">
          <img
            src="//imagev2.xmcdn.com/group62/M08/6B/28/wKgMcV0u6E7j-Mn-AAIMcL2LRAA507.jpg!op_type=3&columns=144&rows=144&magick=webp"
          />
          <div class="BYM_1">
            <b>心理情报局</b>
            <p>BYM职场17：面试官让你自我介绍你知道该怎么办做吗？</p>
            <p>41.58万播放</p>
          </div>
        </a>
        <a href="javascript:void(0)">
          <img
            src="//imagev2.xmcdn.com/group59/M02/EC/00/wKgLelzsr1TQhjZBABxYxOWfjqQ78.jpeg!op_type=3&columns=144&rows=144&magick=webp"
          />
          <div class="BYM_1">
            <b>心理情报局</b>
            <p>BYM职场17：面试官让你自我介绍你知道该怎么办做吗？</p>
            <p>41.58万播放</p>
          </div>
        </a>
        <a href="javascript:void(0)">
          <img
            src="//imagev2.xmcdn.com/group65/M01/6F/94/wKgMdF2dn1PCoTkJAAFB-iVu6Nc007.jpg!op_type=3&columns=144&rows=144&magick=webp"
          />
          <div class="BYM_1">
            <b>心理情报局</b>
            <p>BYM职场17：面试官让你自我介绍你知道该怎么办做吗？</p>
            <p>41.58万播放</p>
          </div>
        </a>
      </div>
    </div>-->
  </div>
</template>

<script>
import Header from "@components/header";
import Nav  from "@components/nav"
export default {
  name: "qinggan",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
/* .main{
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    height:100%;
    padding-top:0.95rem;
} */
/* .nav{
    height:0.45rem;
    background: #fff;
    position: fixed;
    top:0.5rem;
    left:0;
    z-index: 1;
    width:100%;
}
.nav ul{
    height:100%;
    display: flex;
    line-height:0.4rem;
    overflow-x: auto;
    white-space: nowrap;
}
.nav ul a{
    display: block;
    font-size:0.14rem;
    padding:0.07rem 0.125rem;
    color:#72727b
}
.nav ul a:hover{
    border-bottom:2px solid red;
    font-size:0.16rem;
    color:#000
}
.nav p{
    border: 1px solid #ddd;
} */
/* .banner{
    height:1.52rem;
    display: flex;
    align-items: center;
    overflow-x: auto;
}
.banner img{
    width:2.7rem;
    height:1.2rem;
    margin-left:0.1rem;
    border-radius: 0.1rem;
}
.list{
    height:0.54rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:0 0.2rem
}
.list a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:0.62rem;
    height:0.54rem;
}
.list a img{
    width:0.34rem;
    height:0.34rem;
    border-radius: 50%;
}
.list a p{
    font-size:0.10rem;
    color:#72727b
}
.banner_two{
    height:1rem;
    display: flex;
    align-items: center;
}
.banner_two img{
    width:100%;
    height:0.7rem;
}
.title{
    height:0.25rem;
    font-weight: 700;
    font-size: 0.16rem;
    padding-left:0.15rem;
    line-height: 0.25rem;
}
.Audio{
    display: flex;
    height:1.62rem;
 
    justify-content: space-between;
    align-content: center;
    font-size:0.12rem;
    overflow: hidden;
    padding:0 0.1rem
}
.Audio a{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0.2rem 0;
    width: 1.2rem;
    height:1.62rem;
}
.Audio a p{
    margin-top:0.05rem;
    color:#72727b
}
.Audio a img{
    width:0.95rem;
    height:0.95rem
}
.Audio_1{
    position: relative;
}
.iconfont.icon-bofangkaishishipinyuanxingxianxing{
    position: absolute;
    bottom:0;
    left:0;
    color:#fff;
    font-size:0.12rem
}
.BYM{
    display: flex;
    flex-direction: column;
}
.BYM a{
    display: flex;
    height:1.23rem;
    padding: 0 0.1rem;
    align-items: center;
    font-size: 0.12rem;
    color: #72727b;
}
.BYM a img{
    width: 0.9rem;
    height:0.9rem
}
.BYM_1{
    padding-left: 0.1rem;
}
.BYM_1 b{
    font-size: 0.14rem;
    line-height: 0.4rem;
    color: #000;
} */
</style>