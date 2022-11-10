import{e as f}from"./emitter.2ccbb68b.js";import{H as P}from"./HeadTitle.82fee9b4.js";import{S as g}from"./SweetAlert.77780dc9.js";import{P as v}from"./ProductItem.c8284325.js";import{_ as w,r as i,o as c,a as p,d as a,b as h,F as x,u as L}from"./index.cc3b274a.js";import"./people01.1d41a424.js";import"./card_img.f69fa5f3.js";const $={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isLoading:!1,allProds:[],pords:[]}},components:{SweetAlert:g,HeadTitle:P,ProdItem:v},methods:{getProds(){this.isLoading=!0;const m=`${this.VUE_APP}/products/all`;this.$http.get(m).then(r=>{this.isLoading=!1,this.allProds=r.data.products;let s=this.allProds.map(t=>t.title);s=s.filter((t,e)=>s.indexOf(t)===e);const n=this.allProds.map((t,e)=>({index:e,value:t}));["width","height","side","qty"].forEach(t=>{n.sort((e,o)=>e.value[t]>o.value[t]?1:e.value[t]<o.value[t]?-1:0)}),this.allProds=n.map(t=>this.allProds[t.index]),s.forEach((t,e)=>{const o=this.allProds.find(l=>t===l.title);this.pords.push(o)})}).catch(r=>{f.emit("sweetalert",`${r.response.data.message}, error`)})}},mounted(){this.getProds()}},A={class:"container mt-5 pb-8"},E={class:"row row-cols-sm-2 row-cols-lg-3 g-4"};function V(m,r,s,n,d,t){const e=i("v-loading"),o=i("SweetAlert"),l=i("HeadTitle"),_=i("ProdItem");return c(),p("div",null,[a(e,{active:d.isLoading},null,8,["active"]),a(o),a(l,{dialog:"Products","dark-text":"\u6240\u6709\u7522\u54C1"}),h("div",A,[h("div",E,[(c(!0),p(x,null,L(d.pords,u=>(c(),p("div",{key:u.id},[a(_,{prod:u},null,8,["prod"])]))),128))])])])}const F=w($,[["render",V]]);export{F as default};