import Vue from "vue";
import Head from "./head"


let componentMap = [
    Head
];

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})