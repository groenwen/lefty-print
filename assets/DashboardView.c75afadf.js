import{e as i}from"./emitter.2ccbb68b.js";import{S as p}from"./SweetAlert.5cac8fcb.js";import{_ as h,r as c,o as _,a as f,d as t,b as n,w as s,e,A as $}from"./index.887741cb.js";const k={data(){return{}},components:{SweetAlert:p},methods:{checkAdmin(){const d="https://vue3-course-api.hexschool.io/v2/api/user/check",r=document.cookie.replace(/(?:(?:^|.*;\s*)groenToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=r,r?this.$http.post(d).then(a=>{this.$router.push("/admin/products")}).catch(a=>{i.emit("sweetalert",`${a.response.data.message}, error`),this.$router.push("/login")}):(i.emit("sweetalert","\u5C1A\u672A\u767B\u5165, info"),this.$router.push("/login"))},logout(){document.cookie="groenToken=;expires=;",i.emit("sweetalert","\u5DF2\u767B\u51FA, success"),this.$router.push("/login")}},mounted(){this.checkAdmin()}},w={class:"container"},v=n("p",null,"Dashboard",-1),g={class:"mb-5"};function x(d,r,a,A,b,u){const l=c("SweetAlert"),o=c("router-link"),m=c("router-view");return _(),f("div",null,[t(l),n("div",w,[v,n("nav",g,[t(o,{to:"/admin"},{default:s(()=>[e("\u5F8C\u53F0\u9996\u9801")]),_:1}),e(" | "),t(o,{to:"/admin/products"},{default:s(()=>[e("\u7522\u54C1\u5217\u8868")]),_:1}),e(" | "),t(o,{to:"/admin/orders"},{default:s(()=>[e("\u8A02\u55AE\u7BA1\u7406")]),_:1}),e(" | "),t(o,{to:"/admin/coupons"},{default:s(()=>[e("\u6298\u6263\u78BC\u7BA1\u7406")]),_:1}),e(" | "),t(o,{to:"/admin/upload"},{default:s(()=>[e("\u4E0A\u50B3\u5716\u7247")]),_:1}),e(" |\u2003\u2003 "),n("a",{href:"#",onClick:r[0]||(r[0]=$(S=>u.logout(),["prevent"]))},"\u767B\u51FA"),e(" |\u2003\u2003 "),t(o,{to:"/"},{default:s(()=>[e("\u56DE\u9996\u9801")]),_:1})]),t(m)])])}const N=h(k,[["render",x]]);export{N as default};
