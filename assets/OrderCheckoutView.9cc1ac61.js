import{_ as r,o as d,b as a,d as s,F as i,v as _,t,f as l}from"./index.e4510dc4.js";const h={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",order:{},user:{}}},watch:{orderId(){this.getOrder()}},computed:{orderId(){return this.$route.params.orderId}},methods:{getOrder(){const n=`${this.VUE_APP}/order/${this.orderId}`;console.log(this.$route.params),this.$http.get(n).then(c=>{this.order=c.data.order,this.user=c.data.order.user,console.log(this.order)}).catch(c=>{console.dir(c)})}},mounted(){this.getOrder()}},p={class:"container mt-5 mb-8"},u={class:"row justify-content-center"},m={class:"col-6"},x=s("h4",{class:"mb-3 text-center"},[s("span",{class:"material-symbols-sharp text-primary fs-2 align-text-bottom"},"check_circle"),l(" \u8A02\u55AE\u5DF2\u6210\u7ACB ")],-1),f={class:"mb-3"},v=s("div",{class:"px-3 py-1 bg-gray100"},[s("span",{class:"text-secondary small"},"\u8A02\u8CFC\u9805\u76EE")],-1),b={class:"px-3 d-flex align-items-center"},y={class:"me-4 fs-7 fw-bold"},g={class:"me-4 fs-7 text-secondary"},w=s("br",null,null,-1),$={class:"fs-7 text-secondary"},k=s("br",null,null,-1),V={class:"text-end"},I={class:"text-nowrap fw-bolder"},O={class:"px-3"},P={class:"mb-1 d-flex"},B=s("span",{class:"me-auto text-secondary small"},"\u5C0F\u8A08",-1),E={class:"fw-bold"},j=s("div",{class:"mb-1 d-flex"},[s("span",{class:"me-auto text-secondary small"},"\u904B\u8CBB"),s("span",null,"\u514D\u904B\u8CBB")],-1),A={class:"px-3 d-flex"},F=s("span",{class:"me-auto text-secondary small"},"\u7E3D\u8A08",-1),N={class:"fw-bold text-accent"},U={class:"fs-5"},q={class:""},C=s("div",{class:"mb-3 px-3 py-1 bg-gray100"},[s("span",{class:"text-secondary small"},"\u6536\u4EF6\u4EBA")],-1),D={class:"px-3"},L={class:"d-flex"},M=s("span",{class:"me-3 text-secondary small"},"\u6536\u4EF6\u4EBA",-1),S={class:"fw-bold"},T={class:"d-flex"},z=s("span",{class:"me-3 text-secondary small"},"email",-1),G={class:"fw-bold"},H={class:"d-flex"},J=s("span",{class:"me-3 text-secondary small"},"\u96FB\u8A71",-1),K={class:"fw-bold"},Q={class:"d-flex"},R=s("span",{class:"me-3 text-secondary small"},"\u5730\u5740",-1),W={class:"fw-bold"};function X(n,c,Y,Z,o,ss){return d(),a("div",null,[s("div",p,[s("div",u,[s("div",m,[x,s("div",f,[v,s("div",null,[(d(!0),a(i,null,_(o.order.products,e=>(d(),a("div",{key:e.id,class:"mb-3 py-3 pe-3 d-flex justify-content-between align-items-center border-bottom"},[s("div",b,[s("span",y,t(e.product.title),1),s("div",g,[s("span",null,t(e.product.width)+" x "+t(e.product.height)+" mm",1),w,s("span",null,t(e.product.side),1)]),s("div",$,[s("span",null,t(e.product.material),1),k,s("span",null,t(e.product.p_qty)+" "+t(e.product.unit),1)])]),s("div",V,[s("div",I,"$ "+t(e.product.price),1)])]))),128)),s("div",O,[s("div",P,[B,s("span",E,"$ "+t(o.order.total),1)]),j]),s("div",A,[F,s("span",N,[l("$ "),s("span",U,t(Math.round(o.order.total)),1)])])])]),s("div",q,[C,s("div",D,[s("div",L,[M,s("span",S,t(o.user.name),1)]),s("div",T,[z,s("span",G,t(o.user.email),1)]),s("div",H,[J,s("span",K,t(o.user.tel),1)]),s("div",Q,[R,s("span",W,t(o.user.address),1)])])])])])])])}const es=r(h,[["render",X]]);export{es as default};
