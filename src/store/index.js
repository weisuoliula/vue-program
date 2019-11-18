import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex)

let state={
    goodsList:[],
    selectedAll:true
}
let actions={//异步处理
    async handleActionsGetGoods({commit}){
        let data= await axios({
            method:"GET",
            url:"http://localhost:3000/good"
        })
        for(var i=0;i<data.data.length;i++){
            data.data[i].flag=true
        }
        commit("handleMutationsGetGoods",data.data)
        
    },
  
}
let mutations={
    handleMutationsGetGoods(state,params){
        state.goodsList=params
    },
    


    handleChange(state){
        state.selectedAll=!state.selectedAll;
        
        // for(var i=0;i<state.goodsList.length;i++){
        //     state.goodsList[i].flag=state.selectedAll
        // }
        state.goodsList.forEach(item => {
            item.flag=state.selectedAll;
        });
    },
    handleGoodsItemchange(state,index){
        state.goodsList[index].flag=!state.goodsList[index].flag;
        let stop=true;
        for(var i=0;i<state.goodsList.length;i++){
            if(!state.goodsList[i].flag){
                stop=false;
                break
            }
        }
        state.selectedAll=stop
    },
    handleReducer(state,index){
        if(state.goodsList[index].num<=1){
            state.goodsList[index].num = 1
        }else{
            state.goodsList[index].num--
        }
    },
    handleAdd(state,index){
        state.goodsList[index].num++
    }
}

let getters={
    countPrice(){
        let sPrice=0,sCount=0;
        for(var i=0;i<state.goodsList.length;i++){
            if(state.goodsList[i].flag){
                sCount+=state.goodsList[i].num;
                sPrice+=(state.goodsList[i].price * state.goodsList[i].num )
            }
        }
        return{
            sPrice,
            sCount
        }
    }
}

const store =new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})
export default store