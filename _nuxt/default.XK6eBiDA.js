import{_ as f}from"./nuxt-link.vJNVFvNn.js";import{_ as u,o as d,c as h,a as t,q as r,b as n,w as l,d as _,p as g,e as x,x as w}from"./entry.paKz5-FL.js";const k=""+new URL("logo.gRpKVia3.png",import.meta.url).href,C={name:"Navbar",data(){return{msg:"",activator:!1}},methods:{closeBurger(){return this.activator=!1,this.activator},burger(){return this.activator=!this.activator,this.activator}}},c=a=>(g("data-v-744d0be5"),a=a(),x(),a),B={class:"navbar is-spaced is-fixed-top is-transparent"},N={class:"navbar-brand"},S=c(()=>t("a",{class:"navbar-item",href:"/"},[t("img",{src:k,width:"50",height:"50"})],-1)),I=c(()=>t("span",null,null,-1)),V=c(()=>t("span",null,null,-1)),R=c(()=>t("span",null,null,-1)),L=[I,V,R],M={class:"navbar-end"};function U(a,i,v,b,e,s){const o=f;return d(),h("nav",B,[t("div",N,[S,t("button",{onClick:i[0]||(i[0]=(...m)=>s.burger&&s.burger(...m)),class:r(["button navbar-burger has-text-white is-hoverable",{"is-active":e.activator}]),"data-target":"navMenu"},L,2)]),t("div",{class:r(["navbar-menu",{"is-active":e.activator}]),id:"navMenu"},[t("div",M,[n(o,{to:"/rules",class:r(["navbar-item is-uppercase has-text-weight-bold",e.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Rules ")]),_:1},8,["class","onClick"]),n(o,{to:"/stats",class:r(["navbar-item is-uppercase has-text-weight-bold",e.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Player Stats ")]),_:1},8,["class","onClick"]),n(o,{to:"/contact",class:r(["navbar-item is-uppercase has-text-weight-bold",e.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Contact Us ")]),_:1},8,["class","onClick"])])],2)])}const p=u(C,[["render",U],["__scopeId","data-v-744d0be5"]]),$={components:{Navbar:p}};function q(a,i,v,b,e,s){const o=p;return d(),h("div",null,[n(o),w(a.$slots,"default")])}const E=u($,[["render",q]]);export{E as default};
