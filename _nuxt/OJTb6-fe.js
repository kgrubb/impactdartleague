import{_ as f}from"./Bca1v-dJ.js";import{_ as u,o as d,c as v,a,n,b as o,w as i,d as l,u as h}from"./ROQwSwIp.js";const g=""+new URL("logo.CBGkpWJr.png",import.meta.url).href,x={name:"Navbar",data(){return{msg:"",activator:!1}},methods:{closeBurger(){return this.activator=!1,this.activator},burger(){return this.activator=!this.activator,this.activator}}},k={class:"navbar is-spaced is-fixed-top is-transparent"},w={class:"navbar-brand"},C={class:"navbar-end"};function B(c,t,_,b,s,e){const r=f;return d(),v("nav",k,[a("div",w,[t[2]||(t[2]=a("a",{class:"navbar-item",href:"/"},[a("img",{src:g,width:"50",height:"50"})],-1)),a("button",{onClick:t[0]||(t[0]=(...m)=>e.burger&&e.burger(...m)),class:n(["button navbar-burger has-text-white is-hoverable",{"is-active":s.activator}]),"data-target":"navMenu"},t[1]||(t[1]=[a("span",null,null,-1),a("span",null,null,-1),a("span",null,null,-1)]),2)]),a("div",{class:n(["navbar-menu",{"is-active":s.activator}]),id:"navMenu"},[a("div",C,[o(r,{to:"/rules",class:n(["navbar-item is-uppercase has-text-weight-bold",s.activator?"":"has-text-white"]),onClick:e.closeBurger},{default:i(()=>t[3]||(t[3]=[l(" Rules ")])),_:1},8,["class","onClick"]),o(r,{to:"/stats",class:n(["navbar-item is-uppercase has-text-weight-bold",s.activator?"":"has-text-white"]),onClick:e.closeBurger},{default:i(()=>t[4]||(t[4]=[l(" Player Stats ")])),_:1},8,["class","onClick"]),o(r,{to:"/contact",class:n(["navbar-item is-uppercase has-text-weight-bold",s.activator?"":"has-text-white"]),onClick:e.closeBurger},{default:i(()=>t[5]||(t[5]=[l(" Contact Us ")])),_:1},8,["class","onClick"])])],2)])}const p=u(x,[["render",B],["__scopeId","data-v-744d0be5"]]),N={components:{Navbar:p}};function V(c,t,_,b,s,e){const r=p;return d(),v("div",null,[o(r),h(c.$slots,"default")])}const R=u(N,[["render",V]]);export{R as default};
