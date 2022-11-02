import{H as p}from"./HeadTitle.f7550d29.js";import{S as u}from"./ServiceTemp.042e829c.js";import{_ as f,r as a,o as _,a as x,b as e,d,z as n,B as c,t as b,F as v,f as g,e as m}from"./index.13155763.js";import"./people01.1d41a424.js";const y={data(){return{mode:{width:92,height:56,result:0}}},components:{HeadTitle:p,ServiceTemp:u},methods:{caluMode(){if((this.mode.width===""||this.mode.width===0||this.mode.height===""||this.mode.height===0)&&(this.mode.result=0),this.mode.width>0&&this.mode.height>0){const o=Math.ceil(this.mode.width/92)*Math.ceil(this.mode.height/56),s=Math.ceil(this.mode.width/56)*Math.ceil(this.mode.height/92);this.mode.result=o>s?s:o}}},mounted(){this.caluMode()}},w={class:"container"},M=g('<div class="mb-5 d-flex align-items-end"><h4 class="mb-0 me-4"><span class="material-symbols-outlined me-2 text-primary fs-1 align-bottom">request_quote</span>\u5831\u50F9\u6D41\u7A0B</h4><span class="text-secondary">\u53EF\u5148\u4F7F\u7528\u4E0B\u65B9\u6A21\u6578\u8A66\u7B97\u5C0F\u5DE5\u5177\u8A66\u7B97</span></div><div class="mb-7 p-6 border border-light rounded-4"><div class="row justify-content-center align-items-center"><div class="col-4 text-center"><div class="d-flex flex-column align-items-center"><h5 class="mb-5"><span class="me-3 px-2 py-1 lh-1 bg-accent text-white rounded-circle">1</span>\u63D0\u4F9B\u6240\u9700\u5370\u88FD\u898F\u683C</h5><span class="mb-3 quote-item-icon material-symbols-outlined text-primary">style</span><p class="text-primary">\u5C3A\u5BF8\uFF0F\u6750\u8CEA\uFF0F\u55AE\u96D9\u9762\uFF0F\u6578\u91CF</p></div></div><div class="col-2 text-center"><span class="material-symbols-sharp text-light fs-1">arrow_circle_right</span></div><div class="col-4"><div class="d-flex flex-column align-items-center"><h5 class="mb-5"><span class="me-3 px-2 py-1 lh-1 bg-accent text-white rounded-circle">2</span>\u5BC4 Email \u7531\u5C08\u4EBA\u70BA\u60A8\u5831\u50F9</h5><span class="mb-3 quote-item-icon material-symbols-outlined text-primary">mail</span><a class="text-primary">abcdef@gmail.com</a></div></div></div></div>',2),V={class:"mb-3 p-7 bg-gray100"},T={class:"row justify-content-between align-items-center"},H=e("div",{class:"col-5"},[e("h5",{class:"mb-4"},"\u6A21\u6578\u8A66\u7B97"),e("p",null,[m("\u5C3A\u5BF8\u82E5\u5C0F\u65BC\u4E00\u6A21\uFF0C\u4E5F\u5C07\u4EE5\u4E00\u6A21\u8A08\u50F9\u3002"),e("br"),m("\u5831\u50F9\u516C\u5F0F\uFF1A\u9078\u64C7\u540D\u7247\u6750\u8CEA\u6578\u91CF\u7684\u50F9\u683C X \u6A21\u6578 \uFF1D \u50F9\u683C")])],-1),S={class:"col-auto"},j={class:"d-flex align-items-end align-items-md-center"},q={class:"d-flex flex-md-row flex-column me-4 me-md-5"},B=e("label",{for:"modeWidth",class:"me-md-2 pt-1 d-flex fs-5 justify-content-center align-items-center lh-1 fw-bold"},[e("span",{class:"mb-2 mb-md-0"},"\u5BEC"),e("span",{class:"fs-8"},"(mm)")],-1),N=e("div",{class:"me-5"},[e("span",{class:"material-symbols-outlined fs-1"},"close")],-1),k={class:"d-flex flex-md-row flex-column me-4 me-md-5"},z=e("label",{for:"modeHeight",class:"me-md-2 pt-1 d-flex fs-5 justify-content-center align-items-center lh-1 fw-bold"},[e("span",{class:"mb-2 mb-md-0"},"\u9AD8"),e("span",{class:"fs-8"},"(mm)")],-1),D={class:"text-primary"},E={class:"fs-1 fw-bolder me-2"},F=e("span",null,"\u6A21",-1),K=e("p",{class:"text-end text-secondary fs-7"},"\u4E00\u6A21 92mm X 56mm (\u540D\u7247\u51FA\u8840\u5C3A\u5BF8)",-1),Q={class:"mt-8 py-7 bg-gray200"};function U(o,s,W,X,t,l){const r=a("HeadTitle"),h=a("ServiceTemp");return _(),x(v,null,[e("div",null,[d(r,{class:"mb-7",dialog:"\u5831\u50F9","primary-text":"\u7279\u6B8A\u5C3A\u5BF8","dark-text":"\u5831\u50F9"}),e("div",w,[M,e("div",V,[e("div",T,[H,e("div",S,[e("form",null,[e("div",j,[e("div",q,[B,n(e("input",{type:"number",class:"form-control fs-5 border-0",id:"modeWidth","onUpdate:modelValue":s[0]||(s[0]=i=>t.mode.width=i),onKeyup:s[1]||(s[1]=i=>l.caluMode()),style:{width:"100px"}},null,544),[[c,t.mode.width]])]),N,e("div",k,[z,n(e("input",{type:"number",class:"form-control fs-5 border-0",id:"modeHeight","onUpdate:modelValue":s[2]||(s[2]=i=>t.mode.height=i),onKeyup:s[3]||(s[3]=i=>l.caluMode()),style:{width:"100px"}},null,544),[[c,t.mode.height]])]),e("div",D,[e("span",E,b(t.mode.result),1),F])])])])])]),K])]),e("div",Q,[d(h)])],64)}const J=f(y,[["render",U]]);export{J as default};