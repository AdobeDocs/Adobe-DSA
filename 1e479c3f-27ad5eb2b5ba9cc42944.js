"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[661],{6147:function(e,t,i){i.d(t,{i:function(){return y}});var a=i(58168),n=i(80045),s=i(88763),l=i(94760),o=i(89745),r=i(33678),d=i(46942),c=i.n(d),m=i(83707),p=i(75914);const u=["className","theme","swiperSpeed","delay","enableNavigation","variant","bulletActiveClass","bulletClass","navigationPre","navigationNext","isCenter","videos","position","navigationIconColor"];p.Ay.use([p.Ij,p.dK,p.Vx]);const h="767px",g=e=>{let{texts:t,index:i}=e;return t.slots.split(",").map((e=>e.trim())).filter((e=>e.startsWith("text"))).map((e=>t[`${e}${i}`]))};var x={name:"2uwxbw",styles:"height:auto;width:570px"};const v=e=>{let{textKeys:t,heading:i,buttons:a,props:n,index:s,theme:d,isCenter:m,videos:p,position:u}=e;return(0,l.Y)("div",{className:c()(`spectrum--${d}`),css:(0,l.AH)("display:flex;gap:5%;margin-bottom:var(--spectrum-global-dimension-size-500);flex-direction:","left"===u?"row":"row-reverse",";@media screen and (max-width: ",o.TN,"){flex-direction:column;max-width:calc(",(0,o.I6)(6),")!important;gap:25px;}@media screen and (max-width: ",h,"){max-width:calc(",(0,o.I6)(3.5),")!important;gap:25px;}","")},(0,l.Y)("div",{css:(0,l.AH)("flex:1;justify-content:center;width:100%;padding-right:5%;@media screen and (max-width: ",o.fy,"){margin:auto;}@media screen and (max-width: ",o.Vh,"){margin:0;max-width:calc(",(0,o.I6)(3.5),")!important;}@media screen and (max-width: ",o.TN,"){max-width:calc(",(0,o.I6)(6),")!important;margin:0;}","")},p.length&&(0,l.Y)("video",{name:"media3",loop:"true",muted:"true",autoPlay:!0,preload:"metadata",playsInline:!0,css:x},(0,l.Y)("source",{src:p[s]}))),t.length>0||i||a?(0,l.Y)("div",{css:(0,l.AH)("padding-left:5%;text-align:left;flex:1;display:",m?"flex":"block",";flex-direction:",m&&"column ",";height:",m&&"auto",";justify-content:",m&&"center",";padding-bottom:var(--spectrum-global-dimension-size-200);@media only screen and (min-width: ","375px",") and(max-width:",o.Vh,"){margin:0;text-align:center!important;max-width:calc(",(0,o.I6)(3.5),")!important;padding-left:var(--spectrum-global-dimension-size-100)!important;}","")},i&&(0,l.Y)("h3",{className:"spectrum-Heading--sizeL",css:(0,l.AH)("@media only screen and (max-width: ",o.TN,"){font-size:27px!important;}@media only screen and (max-width: ",h,"){font-size:22px!important;}","")},i.props.children),t.length>0?(0,l.Y)("div",{className:"textWrapper",css:(0,l.AH)("@media only screen and (max-width: ",o.Vh,"){&>h3{font-size:var(--spectrum-alias-heading-xxs-text-size)!important;}}","")},(0,l.Y)(g,{texts:n,index:s})):null,a?(0,l.Y)("div",{css:(0,l.AH)("margin-top:var(--spectrum-global-dimension-size-200);@media only screen and (max-width: ",o.Vh,"){div:first-child{justify-content:center!important;}}","")},(0,l.Y)(r.mR,{buttons:a})):null):null)};var w={name:"ps4nqr",styles:"position:relative;z-index:0;background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-200) 0"},b={name:"1fbykcp",styles:"position:relative;z-index:0;background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-600) 0 var(--spectrum-global-dimension-size-600) 0"};const y=e=>{var t,i;let{className:r,theme:d="dark",swiperSpeed:p=600,delay:h=2500,enableNavigation:g=!1,variant:x="fullWidth",bulletActiveClass:y="swiper-pagination-bullet-active",bulletClass:f="swiper-pagination-bullet",navigationPre:Y="swiper-button-prev",navigationNext:A="swiper-button-next",isCenter:N=!1,videos:k=[],position:C="left",navigationIconColor:z="black"}=e,H=(0,n.A)(e,u);const{0:I,1:$}=(0,s.useState)([]);let V=Object.keys(H).filter((e=>e.startsWith("heading")));V=V.map(((e,t)=>({heading:H[e],buttons:H[`buttons${t}`]})));async function P(){let e=await(async e=>{const t=[];for(let i=0;i<(null==e?void 0:e.length);i++){const a=e[i],n=document.createElement("video");n.src=a,await new Promise((e=>{n.onloadedmetadata=()=>{t[i]=1e3*n.duration,e()}}))}return t})(k);$(e)}(0,s.useEffect)((()=>{P()}),[]);const q=null===(t=H.slots)||void 0===t||null===(i=t.split(","))||void 0===i?void 0:i.filter((e=>e.trim().startsWith("text")));return null!=k&&k.length&&!I.length?(0,l.Y)(s.default.Fragment,null):"halfWidth"===x?(0,l.Y)("section",{className:c()(r,`spectrum--${d}`),css:b,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,l.Y)("div",{css:(0,l.AH)("max-width:calc(",(0,o.I6)(10),");margin:auto;@media screen and (max-width: ",o.Vh,"){max-width:calc(",(0,o.I6)(2.75),")!important;}@media screen and (min-width: ",o.Vh,") and (max-width: ",o.TN,"){padding-bottom:0;margin-top:0;max-width:calc(",(0,o.I6)(6),")!important;}","")},(0,l.Y)(m.RC,{speed:p,slidesPerView:"auto",autoplay:{delay:h},pagination:{bulletActiveClass:y,bulletClass:f,clickable:!0},navigation:{nextEl:`.${A}`,prevEl:`.${Y}`}},V.map(((e,t)=>(0,l.Y)(m.qr,(0,a.A)({key:t},null!=k&&k.length&&I[t]?{"data-swiper-autoplay":`${I[t]}`}:{}),(0,l.Y)(v,{textKeys:q,heading:e.heading,buttons:e.buttons,props:H,index:t,theme:d,videos:k,isCenter:N,position:C}),g?(0,l.Y)(s.default.Fragment,null,(0,l.Y)("div",{css:(0,l.AH)("color:",z,";",""),className:Y}),(0,l.Y)("div",{css:(0,l.AH)("color:",z,";",""),className:A})):null)))))):"fullWidth"===x?(0,l.Y)("section",{className:c()(r,`spectrum--${d}`),css:w,role:"button",tabindex:0,onKeyDown:e=>{if("ArrowRight"===e.key){document.querySelector(".swiper").swiper.slideNext()}if("ArrowLeft"===e.key){document.querySelector(".swiper").swiper.slidePrev()}}},(0,l.Y)(m.RC,{speed:p,slidesPerView:"auto",autoplay:{delay:h},pagination:{bulletActiveClass:y,bulletClass:f,clickable:!0},navigation:{nextEl:`.${A}`,prevEl:`.${Y}`}},V.map(((e,t)=>(0,l.Y)(m.qr,(0,a.A)({key:t},null!=k&&k.length&&I[t]?{"data-swiper-autoplay":`${I[t]}`}:{}),(0,l.Y)("div",{css:(0,l.AH)("width:100%;@media screen and (max-width: ",o.Vh,"){width:100%!important;}","")},(0,l.Y)("div",{css:(0,l.AH)("max-width:calc(",(0,o.I6)(12),");margin:auto;@media screen and (min-width: ",o.Vh,") and (max-width: ",o.TN,"){max-width:calc(",(0,o.I6)(6),");}","")},(0,l.Y)(v,{textKeys:q,heading:e.heading,buttons:e.buttons,props:H,videos:k,index:t,theme:d,isCenter:N,position:C}),g?(0,l.Y)("div",null,(0,l.Y)("div",{css:(0,l.AH)("color:",z,";",""),className:Y}),(0,l.Y)("div",{css:(0,l.AH)("color:",z,";",""),className:A})):null))))))):void 0}}}]);
//# sourceMappingURL=1e479c3f-27ad5eb2b5ba9cc42944.js.map