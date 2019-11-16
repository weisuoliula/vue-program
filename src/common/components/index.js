import Vue from "vue";
import Head from "./head";
import Bscroll from "./bscroll";


let componentMap = [
    Head,
    Bscroll
];

componentMap.forEach(item=>{
    Vue.component(item.name,item);
})