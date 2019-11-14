<template>
   <div class="list">
        <div class="list_2">
            
            <router-link v-for="(item,index) in tiao" :key="index"
            :to="item.path" tag="a"
            >{{item.title}}</router-link>
            
        </div>
    
        
        <p class="shaiXuan"  @click="handleClick()">筛选
            <ul v-show="flag">
                <li>
                    <a href="javascript:void(0)">全部类型</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                </li>
                <li>
                    <a href="javascript:void(0)">全部场景</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                </li>
                <li>
                    <a href="javascript:void(0)">全部情绪</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                </li>
                <li>
                    <a href="javascript:void(0)">全部风格</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                    <a href="javascript:void(0)">访谈</a>
                </li>
                <li>
                    <a href="javascript:void(0)">全部人群</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口秀</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                    <a href="javascript:void(0)">阅读</a>
                    <a href="javascript:void(0)">脱口</a>
                    <a href="javascript:void(0)">课堂</a>
                    <a href="javascript:void(0)">访谈</a>
                </li>
                <li>
                    <a href="javascript:void(0)">不限</a>
                    <a href="javascript:void(0)">免费</a>
                    <a href="javascript:void(0)">付费</a>
                    
                </li>
            </ul>
        </p>
    </div>
</template>

<script>
export default {
    name:"List",
    data() {
        return {
            flag:0,
            tiao:[
                {
                    path:"/shenghuo/shenghuotwo",
                    title:"综合排序"
                },
                 {
                    path:"/shenghuo/zuiduobofang",
                    title:"最多播放"
                },
                 {
                    path:"/shenghuo/zuijingengxin",
                    title:"最近更新"
                }
            ]
        }
    },
    methods:{
        handleClick(){
            this.flag=!this.flag
        }
    }
}
</script>

<style scoped>

.list{
    display: flex;
   
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    background: #fff;
    width:100%;
   font-size:0.14rem;
    padding-top:1rem;
    z-index: 1;
}
.list_2{
    width:2.67rem;
    display: flex;
    justify-content: space-around; 
    align-items: center; 
    color:#40404c;
    z-index: 3
}
.list_2 a{
    color:#40404c
}
.list a:hover{

   
    border-radius: 0.5rem;
    color:red
}
.shaiXuan{
    color:#40404c;
    width:0.5rem;
    background: #ddd;
    border-radius: 0.05rem;
    padding:0.05rem;
    text-align: center;
   
}
/* 筛选隐藏*/
.list ul{
    display: flex;
    flex-direction: column;
    width:100%;
    height:2.65rem;
    background: #fff;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding:0 0.08rem;
    position: absolute;
    top:1.25rem; 
    left:0;
    -display: none;
    z-index: 2;
}
.list ul li{
    width:100%;
    display: flex;
    align-items: center;
    height:0.42rem;
    overflow-x:auto;
    padding-left:0.1rem
}
.list ul li a{
    color: #72727b;
    padding:0.05rem;
    text-align: center;
    flex-shrink: 0;
    margin-left:0.04rem
}

</style>