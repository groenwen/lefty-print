import{e as c}from"./emitter.2ccbb68b.js";import{H as u}from"./HeadTitle.aa06f509.js";import{_ as v,r as x,o as p,a as h,d as y,b as e,n as _,A as f,F as g,x as F,u as a,B as d,v as r,z as k}from"./index.887741cb.js";const C="/lefty-print/assets/phone_icon.241572ec.svg",w="/lefty-print/assets/email_icon.9ce29ff3.svg";const T={data(){return{isFront:!0,vueCanvas:null,dataURL:{front:"",back:""},colorList:["#46BAC7","#F9A44A","#F37E5F","#48A5D9","#AF89DF"],colorItem:"#46BAC7",frontForm:{company:"\u96F2\u7AEF\u5370\u5237",name:"\u6797\u5C0F\u5E0C",e_name:"Sharon",phone:"0912345678",email:"abc78463@gmail.com"},backForm:{company:"Cloud Print",name:"SHIAU-SHI, Lin",e_name:"Sharon",phone:"0912345678",email:"abc78463@gmail.com"}}},components:{HeadTitle:u},watch:{colorItem:{handler(n,l){this.createCanvas("front"),this.createCanvas("back")}},frontForm:{handler(n,l){this.createCanvas("front")},deep:!0},backForm:{handler(n,l){this.createCanvas("back")},deep:!0}},methods:{createCanvas(n){const l=this.$refs[n];l.width=590,l.height=360;const t=l.getContext("2d");if(t.fillStyle="#fff",t.fillRect(0,0,590,360),t.save(),t.fillStyle=this.colorItem,t.fillRect(0,315,590,45),t.fillRect(0,308,590,2),t.save(),t.restore(),t.font="20px sans-serif",t.fillStyle=this.colorItem,t.fillText(this[`${n}Form`].company,40,50),t.save(),n==="front"){t.font="36px sans-serif",t.fillStyle="#323232",t.fillText(this[`${n}Form`].name,120,150);const o=t.measureText(this[`${n}Form`].name).width;t.save(),t.font="20px sans-serif",t.fillStyle="#323232",t.fillText(this[`${n}Form`].e_name,120+o+20,150),t.save(),t.font="14px sans-serif",t.fillStyle=this.colorItem,t.fillText("\u624B\u6A5F |",120,223),t.fillStyle="#323232",t.fillText(this[`${n}Form`].phone,175,223),t.save(),t.font="14px sans-serif",t.fillStyle=this.colorItem,t.fillText("\u4FE1\u7BB1 |",120,253),t.fillStyle="#323232",t.fillText(this[`${n}Form`].email,175,253),t.save()}else{t.font="28px sans-serif",t.fillStyle="#323232",t.fillText(this[`${n}Form`].name,120,150);const o=t.measureText(this[`${n}Form`].name).width;t.font="20px sans-serif",t.fillStyle="#323232",t.fillText(this[`${n}Form`].e_name,120+o+20,150),t.save(),t.font="14px sans-serif",t.fillStyle=this.colorItem,t.fillText("Mobile |",120,223),t.save(),t.font="14px sans-serif",t.fillStyle="#323232",t.fillText(this[`${n}Form`].phone,193,223),t.save(),t.font="14px sans-serif",t.fillStyle=this.colorItem,t.fillText("Email   |",120,253),t.fillStyle="#323232",t.fillText(this[`${n}Form`].email,191,253),t.save()}t.restore(),this.dataURL[n]=l.toDataURL("image/jpeg",.5),this.vueCanvas=t},dataURItoBlob(n){let l;n.split(",")[0].indexOf("base64")>=0?l=atob(n.split(",")[1]):l=unescape(n.split(",")[1]);const t=n.split(",")[0].split(":")[1].split(";")[0],i=new Uint8Array(l.length);for(let o=0;o<l.length;o++)i[o]=l.charCodeAt(o);return new Blob([i],{type:t})},addToCart(n){this.isLoading=!0;let l=`${this.VUE_APP}/cart`;this.$http.get(l).then(t=>{this.carts=t.data.data.carts;let i="post",o=this.carts.find(m=>m.product_id===n);o===void 0?o={product_id:n,qty:1,files:[this.dataURL]}:(l=`${l}/${o.id}`,i="put",o.files.push(this.dataURL),o={product_id:o.product_id,qty:1,files:o.files}),this.$http[i](l,{data:o}).then(m=>{this.isLoading=!1,c.emit("cartCount"),c.emit("sweetalert",`${m.data.message}, success`)}).catch(m=>{c.emit("sweetalert",`${m.response.data.message}, error`)})}).catch(t=>{alert(t.response.data.message)})}},mounted(){c.emit("cartCount"),this.createCanvas("front"),this.createCanvas("back"),setTimeout(()=>{this.createCanvas("front"),this.createCanvas("back")},2e3)}},S={class:"container"},V={class:"row justify-content-center"},E={class:"col"},U={class:"overflow-hidden"},I={class:"p-sm-5 p-4 bg-gray-100"},A={class:"mb-4"},L={class:"row align-items-start"},N={class:"col-xl-8 col-12"},B={class:"d-flex flex-lg-row flex-column align-items-start"},R={class:"order-lg-1 order-2 mt-lg-2 me-lg-3 mb-lg-0 mb-3 color-list d-flex flex-lg-column flex-row justify-content-center align-items-center align-self-start"},P=["onClick"],X={class:"order-lg-2 order-1 me-4 mb-xl-0 mb-3 ratio ratio-5x3"},H={ref:"businessCard",class:"canvas-wrap"},M={ref:"front",class:"cover-fit shadow-sm",width:"100%",height:"100%"},D={ref:"back",class:"cover-fit shadow-sm",width:"100%",height:"100%"},j={class:"d-none"},z={ref:"phone_icon",src:C,alt:""},q={ref:"email_icon",src:w,alt:""},O={class:"col-xl-4 col-12"},W={class:"mb-2 form-floating"},G=e("label",{for:"frontCompany",class:"form-label small text-primary"},"\u516C\u53F8\u540D\u7A31",-1),J={class:"mb-2 form-floating"},K=e("label",{for:"frontName",class:"form-label small text-primary"},"\u540D\u5B57",-1),Q={class:"mb-2 form-floating"},Y=e("label",{for:"frontEName",class:"form-label small text-primary"},"\u82F1\u6587\u540D\u5B57",-1),Z={class:"mb-2 form-floating"},$=e("label",{for:"frontPhone",class:"form-label small text-primary"},"\u96FB\u8A71",-1),tt={class:"mb-2 form-floating"},et=e("label",{for:"frontEmail",class:"form-label small text-primary"},"Email",-1),ot={class:"mb-2 form-floating"},lt=e("label",{for:"backCompany",class:"form-label small text-primary"},"\u516C\u53F8\u540D\u7A31",-1),st={class:"mb-2 form-floating"},nt=e("label",{for:"backName",class:"form-label small text-primary"},"\u540D\u5B57",-1),at={class:"mb-2 form-floating"},rt=e("label",{for:"backEName",class:"form-label small text-primary"},"\u82F1\u6587\u540D\u5B57",-1),it={class:"mb-2 form-floating"},mt=e("label",{for:"backPhone",class:"form-label small text-primary"},"Mobile",-1),ct={class:"mb-2 form-floating"},ft=e("label",{for:"backEmail",class:"form-label small text-primary"},"Email",-1),dt={class:"d-flex flex-md-row flex-column align-items-md-center bg-gray100 px-sm-5 px-4 py-3"},pt=e("span",{class:"text-dark mb-md-0 mb-3"},"90x54mm \uFF0F \u96D9\u9762\u4E00\u7D1A\u5361 \uFF0F 300 \u5F35",-1);function ht(n,l,t,i,o,m){const b=x("HeadTitle");return p(),h("div",null,[y(b,{dialog:"Try It!","primary-text":"\u540D\u7247","dark-text":"\u5FEB\u901F\u88FD\u4F5C"}),e("div",S,[e("div",V,[e("div",E,[e("div",U,[e("div",I,[e("div",A,[e("a",{href:"#",class:_(["btn btn-sm rounded-pill me-2",[o.isFront?"btn-dark":"btn-outline-dark"]]),onClick:l[0]||(l[0]=f(s=>o.isFront=!0,["prevent"]))},"\u6B63\u9762",2),e("a",{href:"#",class:_(["btn btn-sm rounded-pill",[o.isFront?"btn-outline-dark":"btn-dark"]]),onClick:l[1]||(l[1]=f(s=>o.isFront=!1,["prevent"]))},"\u80CC\u9762",2)]),e("div",L,[e("div",N,[e("div",B,[e("div",R,[(p(!0),h(g,null,F(o.colorList,s=>(p(),h("a",{key:s,href:"#",class:_(["color-item m-1 border shadow-sm",{active:o.colorItem===s}]),style:k({backgroundColor:s}),onClick:f(_t=>o.colorItem=s,["prevent"])},null,14,P))),128))]),e("div",X,[e("div",H,[a(e("canvas",M,null,512),[[d,o.isFront]]),a(e("canvas",D,null,512),[[d,!o.isFront]])],512)]),e("div",j,[e("img",z,null,512),e("img",q,null,512)])])]),e("div",O,[e("form",null,[a(e("div",null,[e("div",W,[a(e("input",{type:"text",class:"form-control",id:"frontCompany","onUpdate:modelValue":l[2]||(l[2]=s=>o.frontForm.company=s),placeholder:"\u8F38\u5165\u516C\u53F8\u540D\u7A31"},null,512),[[r,o.frontForm.company]]),G]),e("div",J,[a(e("input",{type:"text",class:"form-control",id:"frontName","onUpdate:modelValue":l[3]||(l[3]=s=>o.frontForm.name=s),placeholder:"\u8F38\u5165\u540D\u5B57"},null,512),[[r,o.frontForm.name]]),K]),e("div",Q,[a(e("input",{type:"text",class:"form-control",id:"frontEName","onUpdate:modelValue":l[4]||(l[4]=s=>o.frontForm.e_name=s),placeholder:"\u8F38\u5165\u82F1\u6587\u540D\u5B57"},null,512),[[r,o.frontForm.e_name]]),Y]),e("div",Z,[a(e("input",{type:"tel",class:"form-control",id:"frontPhone","onUpdate:modelValue":l[5]||(l[5]=s=>o.frontForm.phone=s),placeholder:"\u8F38\u5165\u96FB\u8A71"},null,512),[[r,o.frontForm.phone]]),$]),e("div",tt,[a(e("input",{type:"email",class:"form-control",id:"frontEmail","onUpdate:modelValue":l[6]||(l[6]=s=>o.frontForm.email=s),placeholder:"\u8F38\u5165 Email"},null,512),[[r,o.frontForm.email]]),et])],512),[[d,o.isFront]]),a(e("div",null,[e("div",ot,[a(e("input",{type:"text",class:"form-control",id:"backCompany","onUpdate:modelValue":l[7]||(l[7]=s=>o.backForm.company=s),placeholder:"\u8F38\u5165\u516C\u53F8\u540D\u7A31"},null,512),[[r,o.backForm.company]]),lt]),e("div",st,[a(e("input",{type:"text",class:"form-control",id:"backName","onUpdate:modelValue":l[8]||(l[8]=s=>o.backForm.name=s),placeholder:"\u8F38\u5165\u540D\u5B57"},null,512),[[r,o.backForm.name]]),nt]),e("div",at,[a(e("input",{type:"text",class:"form-control",id:"backEName","onUpdate:modelValue":l[9]||(l[9]=s=>o.backForm.e_name=s),placeholder:"\u8F38\u5165\u82F1\u6587\u540D\u5B57"},null,512),[[r,o.backForm.e_name]]),rt]),e("div",it,[a(e("input",{type:"tel",class:"form-control",id:"backPhone","onUpdate:modelValue":l[10]||(l[10]=s=>o.backForm.phone=s),placeholder:"\u8F38\u5165\u96FB\u8A71"},null,512),[[r,o.backForm.phone]]),mt]),e("div",ct,[a(e("input",{type:"email",class:"form-control",id:"backEmail","onUpdate:modelValue":l[11]||(l[11]=s=>o.backForm.email=s),placeholder:"\u8F38\u5165 Email"},null,512),[[r,o.backForm.email]]),ft])],512),[[d,!o.isFront]])])])])]),e("div",dt,[pt,e("a",{href:"#",class:"btn btn-accent ms-auto",onClick:l[12]||(l[12]=f(s=>m.addToCart("-NCAtlm5RkX8T74O5ILR"),["prevent"]))},"\u52A0\u5165\u8CFC\u7269\u8ECA")])])])])])])}const xt=v(T,[["render",ht]]);export{xt as default};
