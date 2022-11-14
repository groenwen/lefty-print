import{e as v}from"./emitter.2ccbb68b.js";import{H as x}from"./HeadTitle.14251960.js";import{S as y}from"./SweetAlert.0c03e967.js";import{_ as b,r as i,o as n,b as c,e as l,d as t,F as w,v as P,z as $,t as p,f as m,w as k}from"./index.b8e60a57.js";import"./people01.1d41a424.js";const V={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isLoading:!1,allProds:[],prods:[]}},components:{HeadTitle:x,SweetAlert:y},methods:{getProds(){this.isLoading=!0;const d=`${this.VUE_APP}/products/all`;this.$http.get(d).then(r=>{this.isLoading=!1,this.allProds=r.data.products;let o=this.allProds.map(s=>s.title);o=o.filter((s,e)=>o.indexOf(s)===e),o.forEach(s=>{const e=this.allProds.find(_=>s===_.title);this.prods.push(e)})}).catch(r=>{v.emit("sweetalert",`${r.response.data.message}, error`)})}},mounted(){this.getProds()}},S={class:"pb-8"},A={class:"mb-7 bg-gray100 py-5 py-sm-6"},L={class:"container"},D={class:"container"},E=t("p",null,"\u5370\u5237\u5DE5\u4F5C\u5929\u5DF2\u4E0B\u55AE\u5929\u958B\u59CB\u7B97\u8D77",-1),H={class:"row g-3 g-lg-5"},T={class:"d-flex flex-lg-row flex-column p-3 p-sm-3 position-relative border border-gray200"},B={class:"me-auto d-flex flex-grow-1 align-items-center"},N={class:""},U={class:"mb-2 mb-sm-3 fs-5"},z={class:"mb-2 mb-sm-3 text-primary"},C=t("span",{class:"material-symbols-sharp me-1 align-text-bottom"},"calendar_month",-1);function F(d,r,o,s,e,_){const h=i("v-loading"),g=i("SweetAlert"),u=i("HeadTitle"),f=i("router-link");return n(),c("div",S,[l(h,{active:e.isLoading},null,8,["active"]),l(g),t("div",A,[t("div",L,[l(u,{dialog:"Daily","primary-text":"\u5370\u5237","dark-text":"\u5DE5\u4F5C\u5929"})])]),t("div",D,[E,t("div",H,[(n(!0),c(w,null,P(e.prods,a=>(n(),c("div",{class:"col-md-6 col-xl-4",key:a.id},[t("div",T,[t("div",B,[t("div",{class:"me-4 card-days-img bg-cover",style:$({backgroundImage:`url(${a.imageUrl})`})},null,4),t("div",N,[t("h2",U,p(a.title),1),t("p",z,[C,m(" "+p(a.description),1)]),l(f,{to:`/product/${a.id}`,class:"btn btn-sm btn-outline-secondary stretched-link"},{default:k(()=>[m("\u67E5\u770B\u7522\u54C1")]),_:2},1032,["to"])])])])]))),128))])])])}const J=b(V,[["render",F]]);export{J as default};