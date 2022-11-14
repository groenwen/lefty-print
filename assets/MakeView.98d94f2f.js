import{e as p}from"./emitter.2ccbb68b.js";import{H as g}from"./HeadTitle.14251960.js";import{S as F}from"./ServiceTemp.f338f6e9.js";import{S as k}from"./SweetAlert.0c03e967.js";import{_ as C,r as b,o as u,b as v,e as y,d as e,n as x,A as h,B as a,C as _,F as S,v as T,D as m,f as w,z as V}from"./index.b8e60a57.js";import"./people01.1d41a424.js";const E="/lefty-print/assets/phone_icon.241572ec.svg",I="/lefty-print/assets/email_icon.9ce29ff3.svg";const U={data(){return{VUE_APP:"https://vue3-course-api.hexschool.io/v2/api/groen",isFront:!0,vueCanvas:null,dataURL:{front:"",back:""},colorList:["#46BAC7","#F9A44A","#F37E5F","#48A5D9","#AF89DF"],colorItem:"#46BAC7",frontForm:{company:"\u96F2\u7AEF\u5370\u5237",name:"\u6797\u5C0F\u5E0C",e_name:"Sharon",phone:"0912345678",email:"abc78463@gmail.com"},backForm:{company:"Cloud Print",name:"SHIAU-SHI, Lin",e_name:"Sharon",phone:"0912345678",email:"abc78463@gmail.com"}}},components:{HeadTitle:g,ServiceTemp:F,SweetAlert:k},watch:{colorItem:{handler(s,o){this.createCanvas("front"),this.createCanvas("back")}},frontForm:{handler(s,o){this.createCanvas("front")},deep:!0},backForm:{handler(s,o){this.createCanvas("back")},deep:!0}},methods:{createCanvas(s){const o=this.$refs[s],r=720,i=420;o.width=r,o.height=i;const t=o.getContext("2d");t.fillStyle="#fff",t.fillRect(0,0,r,i),t.save(),t.fillStyle=this.colorItem,t.fillRect(0,i-45,r,45),t.fillRect(0,i-45-2-5,r,2),t.save(),t.restore(),t.font="24px sans-serif",t.fillStyle=this.colorItem,t.fillText(this[`${s}Form`].company,i*.15,i*.15),t.save();const n=120,d=i*.4,c=i*.6,f=i*.7;if(s==="front"){t.font="44px sans-serif",t.fillStyle="#323232",t.fillText(this[`${s}Form`].name,n,d);const l=t.measureText(this[`${s}Form`].name).width;t.save(),t.font="20px sans-serif",t.fillStyle="#323232",t.fillText(this[`${s}Form`].e_name,n+l+20,d),t.save(),t.font="18px sans-serif",t.fillStyle=this.colorItem,t.fillText("\u624B\u6A5F",n,c),t.fillStyle=this.colorItem,t.fillText("|",n+50,c),t.fillStyle="#323232",t.fillText(this[`${s}Form`].phone,n+70,c),t.save(),t.font="18px sans-serif",t.fillStyle=this.colorItem,t.fillText("\u4FE1\u7BB1",n,f),t.fillStyle=this.colorItem,t.fillText("|",n+50,f),t.fillStyle="#323232",t.fillText(this[`${s}Form`].email,n+70,f),t.save()}else{t.font="36px sans-serif",t.fillStyle="#323232",t.fillText(this[`${s}Form`].name,n,d);const l=t.measureText(this[`${s}Form`].name).width;t.font="20px sans-serif",t.fillStyle="#323232",t.fillText(this[`${s}Form`].e_name,n+l+20,d),t.save(),t.font="18px sans-serif",t.fillStyle=this.colorItem,t.fillText("Mobile",n,c),t.fillStyle=this.colorItem,t.fillText("|",n+80,c),t.fillStyle="#323232",t.fillText(this[`${s}Form`].phone,n+100,c),t.save(),t.font="18px sans-serif",t.fillStyle=this.colorItem,t.fillText("Email",n,f),t.fillStyle=this.colorItem,t.fillText("|",n+80,f),t.fillStyle="#323232",t.fillText(this[`${s}Form`].email,n+100,f),t.save()}t.restore(),this.dataURL[s]=o.toDataURL("image/jpeg",.5),this.vueCanvas=t},dataURItoBlob(s){let o;s.split(",")[0].indexOf("base64")>=0?o=atob(s.split(",")[1]):o=unescape(s.split(",")[1]);const r=s.split(",")[0].split(":")[1].split(";")[0],i=new Uint8Array(o.length);for(let t=0;t<o.length;t++)i[t]=o.charCodeAt(t);return new Blob([i],{type:r})},addToCart(s){this.isLoading=!0;let o=`${this.VUE_APP}/cart`;this.$http.get(o).then(r=>{this.carts=r.data.data.carts;let i="post",t=this.carts.find(n=>n.product_id===s);t===void 0?t={product_id:s,qty:1,files:[this.dataURL]}:(o=`${o}/${t.id}`,i="put",t.files.push(this.dataURL),t={product_id:t.product_id,qty:1,files:t.files}),this.$http[i](o,{data:t}).then(n=>{this.isLoading=!1,p.emit("cartCount"),p.emit("sweetalert",`${n.data.message}, success`)}).catch(n=>{console.dir(n),p.emit("sweetalert",`${n.response.data.message}, error`)})}).catch(r=>{alert(r.response.data.message)})}},mounted(){p.emit("cartCount"),this.createCanvas("front"),this.createCanvas("back"),setTimeout(()=>{this.createCanvas("front"),this.createCanvas("back")},2e3)}},A={class:"bg-gray100 py-5 py-sm-6"},L={class:"container"},N={class:"bg-gray100 mb-8"},P={class:"container pt-5 pb-6 pb-lg-8"},B={class:"row justify-content-center"},R={class:"col-xl-11"},H={class:""},M={class:"mb-5"},D={class:"row align-items-start"},j={class:"col-12 col-lg-8"},z={class:"mb-5 mb-lg-0 d-flex flex-md-row flex-column align-items-start"},Y={class:"me-4 mb-xl-0 mb-3 ratio ratio-5x3"},q={ref:"businessCard",class:"canvas-wrap p-shadow"},O={ref:"front",class:"cover-fit",width:"100%",height:"100%"},W={ref:"back",class:"cover-fit",width:"100%",height:"100%"},X={class:"me-xl-5 mb-md-0 mb-3 d-flex flex-md-column flex-row justify-content-center align-items-center align-self-start color-list"},G=["onClick"],J={class:"d-none"},K={ref:"phone_icon",src:E,alt:""},Q={ref:"email_icon",src:I,alt:""},Z={class:"col-12 col-lg-4"},$={class:"mb-2 form-floating"},tt=e("label",{for:"frontCompany",class:"form-label small text-primary"},"\u516C\u53F8\u540D\u7A31",-1),et={class:"mb-2 form-floating"},ot=e("label",{for:"frontName",class:"form-label small text-primary"},"\u540D\u5B57",-1),lt={class:"mb-2 form-floating"},st=e("label",{for:"frontEName",class:"form-label small text-primary"},"\u82F1\u6587\u540D\u5B57",-1),nt={class:"mb-2 form-floating"},it=e("label",{for:"frontPhone",class:"form-label small text-primary"},"\u96FB\u8A71",-1),at={class:"mb-2 form-floating"},rt=e("label",{for:"frontEmail",class:"form-label small text-primary"},"Email",-1),mt={class:"mb-2 form-floating"},ct=e("label",{for:"backCompany",class:"form-label small text-primary"},"\u516C\u53F8\u540D\u7A31",-1),ft={class:"mb-2 form-floating"},dt=e("label",{for:"backName",class:"form-label small text-primary"},"\u540D\u5B57",-1),pt={class:"mb-2 form-floating"},ht=e("label",{for:"backEName",class:"form-label small text-primary"},"\u82F1\u6587\u540D\u5B57",-1),_t={class:"mb-2 form-floating"},bt=e("label",{for:"backPhone",class:"form-label small text-primary"},"Mobile",-1),ut={class:"mb-2 form-floating"},vt=e("label",{for:"backEmail",class:"form-label small text-primary"},"Email",-1),yt={class:"bg-light"},xt={class:"container d-flex align-items-center px-sm-5 px-4 py-3"},gt=e("span",{class:"text-dark me-3 mb-md-0 mb-3"},"90x54mm \uFF0F \u96D9\u9762 \uFF0F \u4E00\u7D1A\u5361 \uFF0F 300 \u5F35",-1),Ft=e("span",{class:"ms-2 material-symbols-sharp align-middle fs-5"},"shopping_cart",-1),kt={class:"py-7 bg-gray200"};function Ct(s,o,r,i,t,n){const d=b("SweetAlert"),c=b("HeadTitle"),f=b("ServiceTemp");return u(),v("div",null,[y(d),e("div",A,[e("div",L,[y(c,{dialog:"Try It !","primary-text":"\u540D\u7247","dark-text":"\u5FEB\u901F\u88FD\u4F5C"})])]),e("div",N,[e("div",P,[e("div",B,[e("div",R,[e("div",H,[e("div",M,[e("a",{href:"#",class:x(["btn btn-sm rounded-pill me-2",[t.isFront?"btn-dark":"btn-outline-dark"]]),onClick:o[0]||(o[0]=h(l=>t.isFront=!0,["prevent"]))},"\u6B63\u9762",2),e("a",{href:"#",class:x(["btn btn-sm rounded-pill",[t.isFront?"btn-outline-dark":"btn-dark"]]),onClick:o[1]||(o[1]=h(l=>t.isFront=!1,["prevent"]))},"\u80CC\u9762",2)]),e("div",D,[e("div",j,[e("div",z,[e("div",Y,[e("div",q,[a(e("canvas",O,null,512),[[_,t.isFront]]),a(e("canvas",W,null,512),[[_,!t.isFront]])],512)]),e("div",X,[(u(!0),v(S,null,T(t.colorList,l=>(u(),v("a",{key:l,href:"#",class:x(["color-item m-1 border shadow-sm",{active:t.colorItem===l}]),style:V({backgroundColor:l}),onClick:h(St=>t.colorItem=l,["prevent"])},null,14,G))),128))]),e("div",J,[e("img",K,null,512),e("img",Q,null,512)])])]),e("div",Z,[e("form",null,[a(e("div",null,[e("div",$,[a(e("input",{type:"text",class:"form-control",id:"frontCompany","onUpdate:modelValue":o[2]||(o[2]=l=>t.frontForm.company=l),placeholder:"\u8F38\u5165\u516C\u53F8\u540D\u7A31"},null,512),[[m,t.frontForm.company]]),tt]),e("div",et,[a(e("input",{type:"text",class:"form-control",id:"frontName","onUpdate:modelValue":o[3]||(o[3]=l=>t.frontForm.name=l),placeholder:"\u8F38\u5165\u540D\u5B57"},null,512),[[m,t.frontForm.name]]),ot]),e("div",lt,[a(e("input",{type:"text",class:"form-control",id:"frontEName","onUpdate:modelValue":o[4]||(o[4]=l=>t.frontForm.e_name=l),placeholder:"\u8F38\u5165\u82F1\u6587\u540D\u5B57"},null,512),[[m,t.frontForm.e_name]]),st]),e("div",nt,[a(e("input",{type:"tel",class:"form-control",id:"frontPhone","onUpdate:modelValue":o[5]||(o[5]=l=>t.frontForm.phone=l),placeholder:"\u8F38\u5165\u96FB\u8A71"},null,512),[[m,t.frontForm.phone]]),it]),e("div",at,[a(e("input",{type:"email",class:"form-control",id:"frontEmail","onUpdate:modelValue":o[6]||(o[6]=l=>t.frontForm.email=l),placeholder:"\u8F38\u5165 Email"},null,512),[[m,t.frontForm.email]]),rt])],512),[[_,t.isFront]]),a(e("div",null,[e("div",mt,[a(e("input",{type:"text",class:"form-control",id:"backCompany","onUpdate:modelValue":o[7]||(o[7]=l=>t.backForm.company=l),placeholder:"\u8F38\u5165\u516C\u53F8\u540D\u7A31"},null,512),[[m,t.backForm.company]]),ct]),e("div",ft,[a(e("input",{type:"text",class:"form-control",id:"backName","onUpdate:modelValue":o[8]||(o[8]=l=>t.backForm.name=l),placeholder:"\u8F38\u5165\u540D\u5B57"},null,512),[[m,t.backForm.name]]),dt]),e("div",pt,[a(e("input",{type:"text",class:"form-control",id:"backEName","onUpdate:modelValue":o[9]||(o[9]=l=>t.backForm.e_name=l),placeholder:"\u8F38\u5165\u82F1\u6587\u540D\u5B57"},null,512),[[m,t.backForm.e_name]]),ht]),e("div",_t,[a(e("input",{type:"tel",class:"form-control",id:"backPhone","onUpdate:modelValue":o[10]||(o[10]=l=>t.backForm.phone=l),placeholder:"\u8F38\u5165\u96FB\u8A71"},null,512),[[m,t.backForm.phone]]),bt]),e("div",ut,[a(e("input",{type:"email",class:"form-control",id:"backEmail","onUpdate:modelValue":o[11]||(o[11]=l=>t.backForm.email=l),placeholder:"\u8F38\u5165 Email"},null,512),[[m,t.backForm.email]]),vt])],512),[[_,!t.isFront]])])])])])])])]),e("div",yt,[e("div",xt,[gt,e("a",{href:"#",class:"btn btn-accent ms-auto flex-shrink-0",onClick:o[12]||(o[12]=h(l=>n.addToCart("-NCAtlm5RkX8T74O5ILR"),["prevent"]))},[w(" \u52A0\u5165\u8CFC\u7269\u8ECA"),Ft])])])]),e("div",kt,[y(f)])])}const At=C(U,[["render",Ct]]);export{At as default};
