import{_ as f}from"./nuxt-link.1a91f683.js";import{_ as u,o as d,c as v,a as t,q as n,b as r,w as l,d as _,p as g,e as x,x as w}from"./entry.e4b4ffa5.js";const k=""+new URL("logo.e6ce0758.png",import.meta.url).href;const C={name:"Navbar",data(){return{msg:"",activator:!1}},methods:{closeBurger(){return this.activator=!1,this.activator},burger(){return this.activator=!this.activator,this.activator}}},c=e=>(g("data-v-744d0be5"),e=e(),x(),e),N={class:"navbar is-spaced is-fixed-top is-transparent"},B={class:"navbar-brand"},y=c(()=>t("a",{class:"navbar-item",href:"/"},[t("img",{src:k,width:"50",height:"50"})],-1)),S=c(()=>t("span",null,null,-1)),I=c(()=>t("span",null,null,-1)),V=c(()=>t("span",null,null,-1)),L=[S,I,V],M={class:"navbar-end"};function R(e,i,h,b,a,s){const o=f;return d(),v("nav",N,[t("div",B,[y,t("button",{onClick:i[0]||(i[0]=(...m)=>s.burger&&s.burger(...m)),class:n(["button navbar-burger has-text-white is-hoverable",{"is-active":a.activator}]),"data-target":"navMenu"},L,2)]),t("div",{class:n(["navbar-menu",{"is-active":a.activator}]),id:"navMenu"},[t("div",M,[r(o,{to:"/rules",class:n(["navbar-item is-uppercase has-text-weight-bold",a.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Rules ")]),_:1},8,["class","onClick"]),r(o,{to:"/stats",class:n(["navbar-item is-uppercase has-text-weight-bold",a.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Player Stats ")]),_:1},8,["class","onClick"]),r(o,{to:"/contact",class:n(["navbar-item is-uppercase has-text-weight-bold",a.activator?"":"has-text-white"]),onClick:s.closeBurger},{default:l(()=>[_(" Contact Us ")]),_:1},8,["class","onClick"])])],2)])}const p=u(C,[["render",R],["__scopeId","data-v-744d0be5"]]);const U={components:{Navbar:p}};function $(e,i,h,b,a,s){const o=p;return d(),v("div",null,[r(o),w(e.$slots,"default")])}const E=u(U,[["render",$]]);export{E as default};
