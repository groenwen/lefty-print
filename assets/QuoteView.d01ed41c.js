import{H as h}from"./HeadTitle.14251960.js";import{S as f}from"./ServiceTemp.f338f6e9.js";import{_ as u,r as a,o as _,b as x,d as e,e as m,B as n,D as d,t as v,F as b,x as g,f as c}from"./index.b8e60a57.js";import"./people01.1d41a424.js";const y={data(){return{mode:{width:92,height:56,result:0}}},components:{HeadTitle:h,ServiceTemp:f},methods:{caluMode(){if((this.mode.width===""||this.mode.width===0||this.mode.height===""||this.mode.height===0)&&(this.mode.result=0),this.mode.width>0&&this.mode.height>0){const o=Math.ceil(this.mode.width/92)*Math.ceil(this.mode.height/56),s=Math.ceil(this.mode.width/56)*Math.ceil(this.mode.height/92);this.mode.result=o>s?s:o}}},mounted(){this.caluMode()}},w={class:"mb-7 bg-gray100 py-5 py-sm-6"},M={class:"container"},V={class:"container"},T=g('<div class="mb-5 d-flex flex-sm-row flex-column align-items-sm-end"><h4 class="mb-3 mb-sm-0 me-4"><span class="material-symbols-outlined me-2 text-primary fs-1 align-bottom">request_quote</span>\u5831\u50F9\u6D41\u7A0B</h4><span class="text-secondary">\u53EF\u5148\u4F7F\u7528\u4E0B\u65B9\u6A21\u6578\u8A66\u7B97\u5C0F\u5DE5\u5177\u8A66\u7B97</span></div><div class="mb-7 px-4 py-6 p-xl-6 border border-light rounded-4"><div class="row flex-sm-row flex-column justify-content-center"><div class="col-md-5 col-lg-4"><div class="d-flex flex-column align-items-center"><h5 class="mb-3 mb-sm-5 d-flex align-items-center"><span class="me-3 step-circle">1</span><span>\u63D0\u4F9B\u6240\u9700\u5370\u88FD\u898F\u683C</span></h5><span class="mb-3 quote-item-icon material-symbols-outlined text-primary">style</span><p class="text-primary">\u5C3A\u5BF8\uFF0F\u6750\u8CEA\uFF0F\u55AE\u96D9\u9762\uFF0F\u6578\u91CF</p></div></div><div class="col-md-1 col-lg-2 text-center align-self-center lh-1"><span class="my-md-0 my-5 material-symbols-sharp text-light fs-1 rotate90">arrow_circle_right</span></div><div class="col-md-5 col-lg-4"><div class="d-flex flex-column align-items-center"><h5 class="mb-3 mb-sm-5 d-flex align-items-center"><span class="me-3 step-circle">2</span><span>\u5BC4\u9001 Email \u7531\u5C08\u4EBA\u70BA\u60A8\u5831\u50F9</span></h5><span class="mb-3 quote-item-icon material-symbols-outlined text-primary">mail</span><a class="text-primary">abcdef@gmail.com</a></div></div></div></div>',2),H={class:"mb-3 p-5 p-sm-6 bg-gray100"},S={class:"row justify-content-between align-items-center"},j=e("div",{class:"col-xl-5"},[e("h4",{class:"mb-4"},"\u6A21\u6578\u8A66\u7B97"),e("p",{class:"mb-4 mb-xl-0 text-secondary"},[c("\u5C3A\u5BF8\u82E5\u5C0F\u65BC\u4E00\u6A21\uFF0C\u4E5F\u5C07\u4EE5\u4E00\u6A21\u8A08\u50F9\u3002"),e("br"),c("\u516C\u5F0F\uFF1A\u9078\u64C7\u540D\u7247\u6750\u8CEA\u6578\u91CF\u7684\u50F9\u683C X \u6A21\u6578 \uFF1D \u50F9\u683C")])],-1),q={class:"col-auto"},B={class:"d-flex align-items-center align-items-md-center"},N={class:"me-2 me-sm-5 d-flex flex-md-row flex-column"},k=e("label",{for:"modeWidth",class:"me-md-2 d-flex justify-content-center align-items-center"},[e("span",{class:"me-1 fs-4 fw-bold"},"\u5BEC"),e("span",{class:"fs-8"},"(mm)")],-1),D=e("div",{class:"mt-5 mt-sm-0 me-2 me-sm-5"},[e("span",{class:"material-symbols-outlined fs-2 text-secondary"},"close")],-1),E={class:"me-3 me-sm-5 d-flex flex-md-row flex-column"},F=e("label",{for:"modeHeight",class:"me-md-2 d-flex justify-content-center align-items-center"},[e("span",{class:"me-1 fs-4 fw-bold"},"\u9AD8"),e("span",{class:"fs-8"},"(mm)")],-1),K={class:"mt-5 mt-sm-0"},Q={class:"me-2 fs-1 fw-bolder text-primary"},U=e("span",null,"\u6A21",-1),W=e("p",{class:"text-end text-secondary fs-7"},"\u4E00\u6A21 92mm X 56mm (\u540D\u7247\u51FA\u8840\u5C3A\u5BF8)",-1),X={class:"mt-8 py-7 bg-gray200"};function z(o,s,C,A,t,i){const r=a("HeadTitle"),p=a("ServiceTemp");return _(),x(b,null,[e("div",null,[e("div",w,[e("div",M,[m(r,{dialog:"\u5831\u50F9","primary-text":"\u7279\u6B8A\u5C3A\u5BF8","dark-text":"\u5831\u50F9"})])]),e("div",V,[T,e("div",H,[e("div",S,[j,e("div",q,[e("form",null,[e("div",B,[e("div",N,[k,n(e("input",{type:"number",class:"form-control fs-5 border-0",id:"modeWidth","onUpdate:modelValue":s[0]||(s[0]=l=>t.mode.width=l),onKeyup:s[1]||(s[1]=l=>i.caluMode()),style:{width:"100px"}},null,544),[[d,t.mode.width]])]),D,e("div",E,[F,n(e("input",{type:"number",class:"form-control fs-5 border-0",id:"modeHeight","onUpdate:modelValue":s[2]||(s[2]=l=>t.mode.height=l),onKeyup:s[3]||(s[3]=l=>i.caluMode()),style:{width:"100px"}},null,544),[[d,t.mode.height]])]),e("div",K,[e("span",Q,v(t.mode.result),1),U])])])])])]),W])]),e("div",X,[m(p)])],64)}const O=u(y,[["render",z]]);export{O as default};
