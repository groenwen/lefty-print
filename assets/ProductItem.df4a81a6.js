import{_ as r}from"./card_img.f69fa5f3.js";import{_ as n,r as a,o as d,b as c,d as t,z as i,t as o,e as _,w as l,f as m}from"./index.fd3407f3.js";const p={data(){return{}},props:["prod"],mounted(){}},u={class:"prod-item bg-gray100 border border-gray200 p-4 p-sm-5"},b=t("img",{class:"img-fluid",src:r,alt:""},null,-1),g=[b],h={class:"mb-2"},f={class:"mb-4 prod-item-text text-secondary small"},x={class:"text-end"};function y(v,k,e,B,N,P){const s=a("router-link");return d(),c("div",u,[t("div",{class:"mb-4 prod-item-img",style:i(`background-image: url(${e.prod.imageUrl})`)},g,4),t("div",null,[t("h5",h,o(e.prod.title),1),t("p",f,o(e.prod.content),1),t("div",x,[_(s,{to:`/product/${e.prod.id}`,class:"prod-item-btn btn btn-sm btn-outline-secondary stretched-link"},{default:l(()=>[m("\u67E5\u770B\u7522\u54C1")]),_:1},8,["to"])])])])}const z=n(p,[["render",y]]);export{z as P};
