import{e as n}from"./emitter.2ccbb68b.js";import{S as V}from"./SweetAlert.f5e4cf8d.js";import{_ as $}from"./people01.1d41a424.js";import{_ as L,r as g,o as h,a as u,d as i,b as s,w as C,F as y,u as k,t as d,e as p,n as x}from"./index.a95f69e0.js";const P={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isLoading:!1,total:0,final_total:0,carts:[],order:{user:{name:"",email:"",tel:"",address:""},message:""}}},components:{SweetAlert:V},methods:{getCarts(){this.isLoading=!0;const r=`${this.VUE_APP}/cart`;this.$http.get(r).then(e=>{console.log(e.data.data),this.isLoading=!1,this.total=e.data.data.total,this.final_total=e.data.data.final_total;const b=e.data.data.carts,_=[];b.forEach(t=>{if(t.files===void 0||t.files.length<=1)_.push(t);else{const c=t.files.length;for(let l=0;l<c;l++){const o={...t};o.files=[t.files[l]],o.files[0].id=l+1,_.push(o)}}}),this.carts=_,n.emit("cartCount")}).catch(e=>{this.isLoading=!1,n.emit("sweetalert",`${e.response.data.message}, error`)})},clearCarts(){this.isLoading=!0;const r=`${this.VUE_APP}/carts`;this.$http.delete(r).then(e=>{this.isLoading=!1,n.emit("sweetalert",`${e.data.message}, success`),this.getCarts()}).catch(e=>{this.isLoading=!1,n.emit("sweetalert",`${e.response.data.message}, error`)})},delCart(r,e){this.isLoading=!0;const b=`${this.VUE_APP}/cart`;this.$http.get(b).then(_=>{const c=_.data.data.carts.find(l=>l.product_id===r.product_id);if(c.files===void 0||c.files.length<=1){const l=`https://vue3-course-api.hexschool.io/v2/api/groen/cart/${r.id}`;this.$http.delete(l).then(o=>{this.isLoading=!1,n.emit("sweetalert",`${o.data.message}, success`),this.getCarts()}).catch(o=>{this.isLoading=!1,n.emit("sweetalert",`${o.response.data.message}, error`)})}else{c.files.splice(e-1,1);const l=`https://vue3-course-api.hexschool.io/v2/api/groen/cart/${r.id}`;this.$http.put(l,{data:{product_id:c.id,qty:1,files:c.files}}).then(o=>{this.isLoading=!1,n.emit("sweetalert",`${o.data.message}, success`),this.getCarts()}).catch(o=>{this.isLoading=!1,n.emit("sweetalert",`${o.response.data.message}, error`)})}}).catch(_=>{this.isLoading=!1,n.emit("sweetalert",`${_.response.data.message}, error`)})},onSubmit(){this.isLoading=!0;const r=`${this.VUE_APP}/order`;this.$http.post(r,{data:{...this.order}}).then(e=>{this.isLoading=!1,n.emit("sweetalert",`${e.data.message}, success`),this.getCarts(),this.$refs.form.resetForm()}).catch(e=>{this.isLoading=!1,n.emit("sweetalert",`${e.response.data.message}, error`)})}},mounted(){this.getCarts()}},U={class:"container mt-5 pb-8"},E=s("div",{class:"mb-3 d-flex align-items-end"},[s("img",{class:"me-3 headtitle-img",src:$,alt:""}),s("div",null,[s("span",{class:"d-inline-block mb-3 px-4 py-2 text-white lh-1 bg-primary rounded-pill position-relative dialog"},"Cart"),s("h2",{class:"mb-0 fw-bolder"},"\u8CFC\u7269\u8ECA")])],-1),S={class:"row g-4"},A={class:"col-lg-8 col-12"},q={class:"bg-gray100 py-6"},F={class:"row justify-content-center"},B={class:"col-xl-9 col-sm-8 col-10"},N=s("h4",{class:"fw-bolder text-primary"}," \u6536\u4EF6\u4EBA ",-1),j={class:"mb-4"},I=s("label",{for:"name",class:"form-label fs-7"},"\u59D3\u540D",-1),z={class:"mb-4"},D=s("label",{for:"email",class:"form-label fs-7"},"Email",-1),M={class:"mb-4"},T=s("label",{for:"tel",class:"form-label fs-7"},"\u96FB\u8A71",-1),X={class:"mb-4"},G=s("label",{for:"address",class:"form-label fs-7"},"\u5730\u5740",-1),H={class:"mb-4"},J=s("label",{for:"message",class:"form-label fs-7"},"\u8A02\u55AE\u5099\u8A3B",-1),K=s("div",{class:"d-grid col-6 mx-auto"},[s("button",{type:"submit",class:"btn btn-accent"},"\u7D50\u5E33")],-1),O={class:"col-lg-4 col-12"},Q={class:"mb-6 bg-gray-100 sticky-top"},R=s("div",{class:"px-3 py-2 bg-gray100"},[s("span",{class:"text-secondary small"},"\u9805\u76EE")],-1),W={key:0,class:"p-4 text-secondary"},Y={key:1},Z={class:"mb-3"},ss={key:0,style:{height:"80px"}},es={key:1},ts=["src"],as=["src"],os={class:"px-2 d-flex justify-content-between align-items-center"},ls={class:""},is={class:"fw-bold mb-2"},ns=s("br",null,null,-1),rs={class:"text-secondary fs-7"},ds=s("br",null,null,-1),cs={class:"text-secondary fs-7"},ms=s("span",{class:"me-3"},"\u6750\u8CEA",-1),_s=s("br",null,null,-1),hs=s("span",{class:"me-3"},"\u6578\u91CF",-1),us={class:"text-nowrap fw-bold"},ps={class:""},fs=s("div",{class:"mb-3 px-3 py-2 bg-gray100"},[s("span",{class:"text-secondary small"},"\u8A02\u55AE\u6458\u8981")],-1),gs={class:"mb-3 px-3"},bs={class:"mb-3 d-flex"},vs=s("span",{class:"me-auto text-secondary small"},"\u5C0F\u8A08",-1),xs={class:"fw-bold"},ys=s("div",{class:"mb-3 d-flex"},[s("span",{class:"me-auto text-secondary small"},"\u904B\u8CBB"),s("span",null,"\u514D\u904B\u8CBB")],-1),ws={class:"mb-3 px-3 d-flex"},Vs=s("span",{class:"me-auto text-secondary small"},"\u7E3D\u8A08",-1),$s={class:"fw-bolder text-accent"},Ls={class:"fs-4"};function Cs(r,e,b,_,t,c){const l=g("v-loading"),o=g("SweetAlert"),f=g("v-field"),v=g("error-message"),w=g("v-form");return h(),u(y,null,[i(l,{active:t.isLoading},null,8,["active"]),i(o),s("div",U,[E,s("div",S,[s("div",A,[s("div",q,[s("div",F,[s("div",B,[N,i(w,{class:"py-5",ref:"form",onSubmit:c.onSubmit},{default:C(({errors:a})=>[s("div",j,[I,i(f,{name:"\u59D3\u540D",id:"name",type:"text",rules:"required",class:x(["form-control",{"is-invalid":a.\u59D3\u540D}]),modelValue:t.order.user.name,"onUpdate:modelValue":e[0]||(e[0]=m=>t.order.user.name=m),placeholder:"\u8F38\u5165\u6536\u4EF6\u4EBA\u59D3\u540D"},null,8,["class","modelValue"]),i(v,{name:"\u59D3\u540D",class:"invalid-feedback"})]),s("div",z,[D,i(f,{name:"email",id:"email",type:"email",rules:"required|email",class:x(["form-control",{"is-invalid":a.email}]),modelValue:t.order.user.email,"onUpdate:modelValue":e[1]||(e[1]=m=>t.order.user.email=m),placeholder:"\u8F38\u5165Email"},null,8,["class","modelValue"]),i(v,{name:"email",class:"invalid-feedback"})]),s("div",M,[T,i(f,{name:"\u96FB\u8A71",id:"tel",type:"tel",rules:"required|numeric|min:7|max:10",class:x(["form-control",{"is-invalid":a.\u96FB\u8A71}]),modelValue:t.order.user.tel,"onUpdate:modelValue":e[2]||(e[2]=m=>t.order.user.tel=m),placeholder:"\u8F38\u5165\u6536\u4EF6\u4EBA\u96FB\u8A71"},null,8,["class","modelValue"]),i(v,{name:"\u96FB\u8A71",class:"invalid-feedback"})]),s("div",X,[G,i(f,{name:"\u5730\u5740",id:"address",type:"text",rules:"required",class:x(["form-control",{"is-invalid":a.\u5730\u5740}]),modelValue:t.order.user.address,"onUpdate:modelValue":e[3]||(e[3]=m=>t.order.user.address=m),placeholder:"\u8F38\u5165\u6536\u4EF6\u5730\u5740"},null,8,["class","modelValue"]),i(v,{name:"\u5730\u5740",class:"invalid-feedback"})]),s("div",H,[J,i(f,{as:"textarea",name:"message",id:"message",class:"form-control",rows:"3",modelValue:t.order.message,"onUpdate:modelValue":e[4]||(e[4]=m=>t.order.message=m),placeholder:"\u53EF\u5099\u8A3B\u6536\u8CA8\u6642\u9593"},null,8,["modelValue"])]),K]),_:1},8,["onSubmit"])])])])]),s("div",O,[s("div",Q,[R,s("div",null,[t.carts.length<=0?(h(),u("p",W,"\u8CFC\u7269\u8ECA\u5C1A\u7121\u5167\u5BB9")):(h(),u("div",Y,[(h(!0),u(y,null,k(t.carts,a=>(h(),u("div",{key:a.id,class:"py-4 border-bottom"},[s("div",Z,[a.files===void 0?(h(),u("div",ss," \xA0 ")):(h(),u("div",es,[s("img",{src:a.files[0].front,class:"border",height:"80",alt:""},null,8,ts),p("\xA0 "),s("img",{src:a.files[0].back,class:"border",height:"80",alt:""},null,8,as)]))]),s("div",os,[s("div",ls,[s("span",is,d(a.product.title),1),ns,s("span",rs,[p(d(a.product.width)+" mm X "+d(a.product.height)+" mm ",1),ds,p(" "+d(a.product.side),1)])]),s("div",cs,[s("span",null,[ms,p(d(a.product.material),1)]),_s,s("span",null,[hs,p(d(a.product.p_qty)+" "+d(a.product.unit),1)])]),s("div",us,"$ "+d(a.product.price),1)])]))),128))]))])]),s("div",ps,[fs,s("div",gs,[s("div",bs,[vs,s("span",xs,"$ "+d(t.total),1)]),ys]),s("div",ws,[Vs,s("span",$s,[p("$ "),s("span",Ls,d(Math.round(t.final_total)),1)])])])])])])],64)}const Ss=L(P,[["render",Cs]]);export{Ss as default};
