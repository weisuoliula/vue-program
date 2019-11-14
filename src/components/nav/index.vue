<template>
  <div class="Nav">
       <div class="nav_nav" v-show="flag">
        <div class="nav">
            <ul>
                <a href="javascript:void(0)">推荐</a>
                <a href="javascript:void(0)">情感</a>
                <a href="javascript:void(0)">有声书</a>
                <a href="javascript:void(0)">相声</a>
                <a href="javascript:void(0)">音乐</a>
                <a href="javascript:void(0)">儿童</a>
                <a href="javascript:void(0)">人文</a>
                <a href="javascript:void(0)">历史</a>
                <a href="javascript:void(0)">科技</a>
                <a href="javascript:void(0)">更多</a>
            </ul>
            <span></span>
            <b @click="handleClick()">∨</b>
        </div>
        <div class="hr"></div>
    </div>
        <!--点击分类框  -->
    <div class="nav_2" v-show="flags">
        <div class="nav_2_one" >
            <p>请选择分类</p>
            <span></span>
            <b @click="handleClicks()">∧</b>
        </div>
        <div class="hr"></div>
        <ul>
            <a href="javascript:void(0)">全部</a>
            <a href="javascript:void(0)">情感</a>
            <a href="javascript:void(0)">故事</a>
            <a href="javascript:void(0)">美食</a>
            <a href="javascript:void(0)">人文</a>
            <a href="javascript:void(0)">美文</a>
            <a href="javascript:void(0)">女性</a>
            <a href="javascript:void(0)">恋爱</a>
            <a href="javascript:void(0)">心理</a>
            <a href="javascript:void(0)">婚姻</a>
            <a href="javascript:void(0)">星座</a>
            <a href="javascript:void(0)">我要恋爱</a>
            <a href="javascript:void(0)">两性婚姻</a>
            <a href="javascript:void(0)">精彩女人</a>
            <a href="javascript:void(0)">美文故事</a>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    name:"Nav",
    data() {
        return {
            flag:1,
            flags:"",
        }
    },
    methods:{
        handleClick(){
             this.flag=!this.flag
             this.flags=!this.flag
            
        },
        handleClicks(){
            this.flags=!this.flags
            this.flag=!this.flags
             
        }
    }
}
</script>

<style scoped>
/*点击分类框*/
.Nav{
    font-size:0.14rem;
    position: fixed;
    width:100%;
    padding-top:0.4rem;
    z-index: 2;
    height:0.45rem;
    width:100%
}
.nav_nav{
    -display: none;
}

.nav{
    height:0.45rem;
    display: flex;
    padding-right:0.1rem;
}
.nav ul{
    height:100%;
    width:2.6rem;
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
.nav span,.nav_2_one span{
    height:0.4rem;
    border: 1px solid #ddd;
    margin-left:0.1rem
}
.hr{
    border: 1px solid #ddd;
}
.nav b,.nav_2_one b{
    width:0.4rem;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
/**/
.nav_2{
    -display: none;
}
.nav_2_one{
    height:0.45rem;
    display: flex;
    padding-right:0.1rem;
}
.nav_2_one p{
    height:100%;
    width:2.6rem;
    line-height:0.4rem;
    padding:0 0.125rem;
}
/**/
.nav_2 ul{
    width:100%;
    height:2.65rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding:0 0.08rem;
    position: absolute;
    -display: none;
    z-index: 2;
}
.nav_2 ul a{
    flex-shrink: 0;
    width:30%;
    height:0.32rem;
    text-align: center;
    line-height: 0.32rem;
    background: #f3f4f5;
    color:#40404c
}
</style>