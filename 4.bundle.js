(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{148:function(e){e.exports=JSON.parse('{"sc":{"lang":"sc","language":"简体","sc":"简体中文","tc":"繁体中文","tc-jp":"繁日双语","sc-jp":"简日双语","jp":"日文","scName":"简体译名","tcName":"繁体译名","jpName":"日文原名","engName":"英文/罗马音标题","co":"合作","coSub":"合作字幕组","sub":"字幕组","rip":"压制组","title":"喵萌奶茶屋","confirm":"确认","cancel":"取消","redirect":"跳转","option":"选项","preview":"预览","homepage":"首页","time":"时间","otherTime":"其他时间","type":"类型","shortAnime":"泡面","anime":"TV动画","movie":"剧场版","ova":"OVA","other":"非动画类","status":"状态","update":"更新中","finished":"完结","info":"作品信息","subInfo":"字幕信息","bgm":"萌番组","dmhy":"动漫花园","nyaa":"Nyaa","subType":"字幕类型","videoType":"合集类型","officialSite":"HP","staff":"Staff","translator":"翻译","translationChecker":"校对","timer":"时轴","effect":"特效","script":"后期","production":"","webRip":"WEB压制","bdRip":"BD压制","poster":"海报","tcTranslator":"繁化","consultant":"顾问","search":"搜索","searchPlaceholder":"请输入作品名","note":"喵萌奶茶屋","copyright":"© 2021 Nekomoe"},"tc":{"lang":"tc","language":"繁體"},"jp":{"lang":"jp","language":"日本語","title":"猫萌え喫茶店","confirm":"確認","cancel":"キャンセル","translator":"翻译","redirect":"跳转","note":"声明","copyright":"© 2021 Nekomoe"}}')},276:function(e,t,n){},281:function(e,t,n){},291:function(e,t,n){},293:function(e,t,n){},297:function(e,t,n){},298:function(e,t,n){},299:function(e,t,n){},300:function(e,t,n){},393:function(e,t,n){"use strict";n.r(t);n(33),n(119),n(83),n(84),n(85),n(86),n(81),n(87),n(88),n(89),n(90);var a=n(0),r=n.n(a),o=n(2),c=n(97),l=(n(123),n(149)),i=n.n(l),u=n(21),s=localStorage.getItem("token")||"",m={"X-Requested-With":"XMLHttpRequest"};s&&(m.Authorization="Bearer ".concat(s));var f=i.a.create({baseURL:"https://sena.moe",timeout:1e6,headers:m});f.interceptors.response.use((function(e){return e}),(function(e){if(403!==e.status)throw e;(new u.a).history.push("/login"),console.log("请先登陆")}));var h=f,d=(n(122),n(228)),y=n(396);n(276);function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"],v=["anime","movie","ova","shortAnime","other"],E=Object(a.memo)((function(e){var t,n=b(Object(c.a)(),2),a=n[0],o=a.lang,l=a.theme,i=a.menuKey,u=n[1].changeMenu;"1px solid ".concat("white"===l?"#ddd":"#444");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-menu-screen ".concat(e.className||"")},r.a.createElement(d.a,{mode:e.mode||"horizontal",triggerSubMenuAction:"click",getPopupContainer:function(e){return e},onClick:function(e){var t;"homepage"===(t=e).key?u({type:"",value:t.key}):v.includes(t.key)?u({type:"type",value:t.key}):u({type:"time",value:t.key})},selectedKeys:[i.value],style:{background:"transparent"}},(t=v.map((function(e){return{key:e,name:o[e]}})),r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Item,{key:"homepage"},r.a.createElement("css-icon",{class:"icon-bookmark"}),o.homepage),r.a.createElement(d.a.SubMenu,{title:r.a.createElement("span",null,o.type,r.a.createElement("css-icon",{class:"icon-caret"}))},t.map((function(e,t){return r.a.createElement(d.a.Item,{key:e.key},r.a.createElement(y.a,{color:p[t]}),e.name)}))),r.a.createElement(d.a.SubMenu,{title:r.a.createElement("span",null,o.time,r.a.createElement("css-icon",{class:"icon-caret"}))},r.a.createElement(d.a.Item,{key:"2021"},r.a.createElement(y.a,{status:"processing"}),"2021"),r.a.createElement(d.a.Item,{key:"2020"},r.a.createElement(y.a,{status:"processing"}),"2020"),r.a.createElement(d.a.Item,{key:"2019"},r.a.createElement(y.a,{status:"processing"}),"2019"),r.a.createElement(d.a.Item,{key:"2018"},r.a.createElement(y.a,{status:"processing"}),"2018"),r.a.createElement(d.a.Item,{key:"2017"},r.a.createElement(y.a,{status:"processing"}),"2017"),r.a.createElement(d.a.Item,{key:"otherTime"},r.a.createElement(y.a,{status:"processing"}),o.otherTime)))))))})),w=(n(155),n(135)),S=n(382);n(281);function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var k=Object(a.memo)((function(e){var t,n=j(Object(c.a)(),1)[0],a=n.lang,o=n.theme;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-box"},null===(t=e.data)||void 0===t?void 0:t.map((function(e){return r.a.createElement("div",{className:"flex-item anime-card",key:e.jpTitle},r.a.createElement(u.b,{to:{pathname:"/detail/".concat(e.jpTitle.replace(/\//g,"\\")),state:e}},r.a.createElement("div",{className:"anime-card-img"},r.a.createElement("div",{style:{backgroundImage:"url(".concat(e.thumbUrl||"images/蓝色001.png",")")}}))),r.a.createElement(w.a,{placement:"topLeft",color:"white"===o?"#1890ff":"",title:e["".concat(a.lang,"Title")]},r.a.createElement("div",{className:"anime-card-title"},e.coSub?"【".concat(a.co,"】"):"",e["".concat(a.lang,"Title")])),r.a.createElement("div",{className:"anime-card-note"},r.a.createElement("span",null,e.year,"-",e.month),r.a.createElement("div",null,a.status,": ",a[e.status])))}))),r.a.createElement("div",{className:"mobile-invisible",style:{textAlign:"center",margin:"20px auto"}},r.a.createElement(S.a,{current:e.page||1,pageSize:e.pageSize||16,defaultPageSize:16,pageSizeOptions:[8,16,24,30],total:e.total||0,showSizeChanger:!0,showTotal:function(){return"Total ".concat(e.total)},onChange:function(t,n){return e.changePage(t,n)},onShowSizeChange:function(t,n){return e.changePage(1,n)}})),r.a.createElement("div",{className:"screen-invisible",style:{textAlign:"center",margin:"10px auto"}},r.a.createElement(S.a,{current:e.page,pageSize:e.pageSize,simple:!0,total:e.total,onChange:function(t,n){return e.changePage(t,n)}})))})),I=n(283),A=n.n(I),T=n(395);function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var x=function(e){var t=N(Object(a.useState)([]),2),n=t[0],o=t[1],c=N(Object(a.useState)(!1),2),l=c[0],i=c[1],u=N(Object(a.useState)(""),2),s=u[0],m=u[1];Object(a.useEffect)((function(){if(e.imageList){var t=e.imageList;o(t)}else h("testData/imageList.json").then((function(e){200===e.status&&o(e.data)})).catch((function(){o([])}))}),[e.imageList]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{items:n,onErrorImageURL:"images/蓝色001.png",onClick:function(e){return function(e){var t,n;e.target.currentSrc&&(m(null!==(t=null===(n=e.target)||void 0===n?void 0:n.currentSrc)&&void 0!==t?t:""),i(!0))}(e)},slideInterval:3e4,lazyLoad:!0,showThumbnails:!1,showFullscreenButton:!1,showPlayButton:!1,showBullets:n.length>1,autoPlay:!0}),r.a.createElement(T.a,{getContainer:!1,footer:null,centered:!0,visible:l,style:{paddingBottom:0},bodyStyle:{padding:5,textAlign:"center",maxHeight:"95vh",overflow:"hidden"},closeIcon:r.a.createElement("div",null,r.a.createElement("css-icon",{class:"icon-close",style:{backgroundColor:"rgba(255,255,255, 0.6)",borderRadius:"10%"}})),onCancel:function(){return i(!1)},width:"auto"},r.a.createElement("img",{src:s,alt:"",style:{maxHeight:"90vh",maxWidth:"100%"}})))};n(291);function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var M=Object(a.memo)((function(e){var t=L(Object(c.a)(),1)[0],n=(t.lang,t.theme),o=t.menuKey,l=L(Object(a.useState)([]),2),i=l[0],u=l[1],s=L(Object(a.useState)([]),2),m=s[0],f=s[1],d=L(Object(a.useState)(1),2),y=d[0],b=d[1],g=L(Object(a.useState)(16),2),p=g[0],v=g[1],w=L(Object(a.useState)(0),2),S=w[0],j=w[1],O=function(){var e=o.type,t=void 0===e?"":e,n=o.value,a=void 0===n?"homepage":n,r=i;"type"===t?r=i.filter((function(e){return e.type===a})):"time"===t&&(r=i.filter((function(e){return e.year===a})),"otherTime"===a&&(r=i.filter((function(e){return e.year<2017})))),j(r.length);var c=r.slice((y-1)*p,y*p);f(c)};Object(a.useEffect)((function(){h("testData/list.json").then((function(e){if(200===e.status){var t=e.data;u(t),f(t),j(t.length)}else u([])})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){b(1),O()}),[o,i]),Object(a.useEffect)((function(){O()}),[y,p]);var I={borderTop:"1px solid ".concat("white"===n?"#ddd":"#444"),display:e.match?"block":"none"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"carousel-wrap",style:I},r.a.createElement(x,null)),r.a.createElement("div",{className:"content",style:I},r.a.createElement(E,{className:"mobile-invisible"}),r.a.createElement(k,{page:y,pageSize:p,data:m,total:S,changePage:function(e,t){b(e),v(t)}})))})),U=(n(164),n(214),n(147),n(398));n(293);function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var R=Object(a.memo)((function(e){var t,n=z(Object(c.a)(),1)[0],l=n.lang,i=n.theme,u=Object(o.g)().name,s=z(Object(a.useState)({}),2),m=s[0],f=s[1],d=z(Object(a.useState)([]),2),y=d[0],b=d[1],g=z(Object(a.useState)([]),2),p=g[0],v=g[1];Object(a.useEffect)((function(){h("testData/subList.json").then((function(e){200===e.status?b(e.data):b([])}))}),[]),Object(a.useEffect)((function(){return h("testData/list.json").then((function(e){if(200===e.status){var t={},n=[],a=u.replace(/\\/g,"/");e.data.forEach((function(e){if(e.jpTitle===a){var r,o=null===(r=(t=e).posterUrl)||void 0===r?void 0:r.split(",");null==o||o.forEach((function(e){n.push({description:a,original:e,originalAlt:a,originalTitle:a})}))}})),v(n),f(t)}else v([]),f({})})),function(){f({})}}),[u]);var E,w,S,j={borderRight:"1px solid ".concat("white"===i?"#ddd":"#444")},O={borderTop:"1px solid ".concat("white"===i?"#ddd":"#444")};return r.a.createElement("div",{className:"detail-content",style:{display:e.match?"block":"none"}},r.a.createElement("div",{className:"left-carousel mobile-invisible",style:j},r.a.createElement(x,{imageList:p})),r.a.createElement("div",{className:"left-carousel screen-invisible",style:O},r.a.createElement(x,{imageList:p})),r.a.createElement("div",{className:"right-message-box"},r.a.createElement("div",{className:"mobile-invisible",style:{height:60}}),r.a.createElement(U.b,{column:1,title:l.info},m.jpTitle&&r.a.createElement(U.b.Item,{label:l.jpName},m.jpTitle),m.scTitle&&r.a.createElement(U.b.Item,{label:l.scName},m.scTitle),m.tcTitle&&r.a.createElement(U.b.Item,{label:l.tcName},m.tcTitle),m.engTitle&&r.a.createElement(U.b.Item,{label:l.engName},m.engTitle),r.a.createElement(U.b.Item,{label:l.type},l[m.type]),m.officialSite&&r.a.createElement(U.b.Item,{label:l.officialSite},r.a.createElement("a",{href:m.officialSite},m.officialSite)))),r.a.createElement("div",{className:"right-message-box"},r.a.createElement(U.b,{column:1,title:l.subInfo},m.coSub&&(w=null===(E=m.coSub)||void 0===E?void 0:E.split(","),S=y.filter((function(e){return w.includes(e.subName)})),r.a.createElement(U.b.Item,{label:l.coSub},S.map((function(e){return r.a.createElement("a",{href:e.subUrl},m.coSub,"【".concat(l[e.subType],"】"))})))),r.a.createElement(U.b.Item,{label:l.subType},null===(t=m.subType)||void 0===t?void 0:t.split(",").map((function(e){return l[e]})).join("、")),r.a.createElement(U.b.Item,{label:l.time},m.year,"-",m.month),r.a.createElement(U.b.Item,{label:l.status},l[m.status]),r.a.createElement(U.b.Item,{label:l.videoType},m.videoType),m.bgm&&r.a.createElement(U.b.Item,{label:l.bgm},r.a.createElement("a",{href:m.bgm},m.bgm)),m.dmhy&&r.a.createElement(U.b.Item,{label:l.dmhy},r.a.createElement("a",{href:m.dmhy},m.dmhy)),m.nyaa&&r.a.createElement(U.b.Item,{label:l.nyaa},r.a.createElement("a",{href:m.nyaa},m.nyaa)))))})),B=(n(294),n(295),n(394)),$=n.p+"logo-white.webp",F=n.p+"logo-dark.webp";n(297);function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var H=Object(a.memo)((function(e){var t=D(Object(c.a)(),2),n=t[0],o=n.lang,l=n.theme,i=n.searchWord,u=t[1].changeSearchWord,s=D(Object(a.useState)([]),2),m=s[0],f=s[1],d=D(Object(a.useState)([]),2),y=d[0],b=d[1],g=D(Object(a.useState)(1),2),p=g[0],v=g[1],E=D(Object(a.useState)(16),2),w=E[0],S=E[1],j=D(Object(a.useState)(0),2),O=j[0],I=j[1],A=function(){var e=m.filter((function(e){var t=!1;return["scTitle","tcTitle","jpTitle","engTitle"].forEach((function(n){e[n]&&-1!==e[n].indexOf(i)&&(t=!0)})),t}));I(e.length);var t=e.slice((p-1)*w,p*w);b(t)};Object(a.useEffect)((function(){h("testData/list.json").then((function(e){if(200===e.status){var t=e.data;f(t),b(t),I(t.length)}else f([])})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){A()}),[p,w]),Object(a.useEffect)((function(){v(1),A()}),[i]);var T={borderTop:"1px solid ".concat("white"===l?"#ddd":"#444"),display:e.match?"block":"none"},N={backgroundImage:"url(".concat("white"===l?$:F,")")};return r.a.createElement("div",{className:"search-content",style:T},r.a.createElement("div",{className:"search-column"},r.a.createElement("div",{className:"search-logo",style:N}),r.a.createElement("span",{className:"search-input"},r.a.createElement(B.a.Search,{size:"large",defaultValue:i,enterButton:o.search,style:{width:400,maxWidth:"60vw",marginLeft:10},placeholder:o.searchPlaceholder,onSearch:function(e){u(e)}}))),r.a.createElement(k,{data:y,page:p,pageSize:w,total:O,changePage:function(e,t){v(e),S(t)}}))})),J=[{path:"/",component:function(e){return r.a.createElement(M,{match:e})}},{path:"/category/:param",component:function(e){return r.a.createElement(M,{match:e})}},{path:"/detail/:name",component:function(e){return r.a.createElement(R,{match:e})}},{path:"/search/:keyword",component:function(e){return r.a.createElement(H,{match:e})}}],V=n(227),q=n(400),X=n(397);n(165);var _=n.p+"title-dark.webp",Y=n.p+"title-white.webp";n(298);function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Q(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var Z=Object(a.memo)((function(e){var t=G(Object(c.a)(),2),n=t[0],o=n.lang,l=n.theme,i=(n.searchWord,t[1]),s=i.changeLang,m=i.changeTheme,f=i.changeSearchWord,h=G(Object(a.useState)(!1),2),d=h[0],y=h[1],b=G(Object(a.useState)("inherit"),2),g=b[0],p=b[1];Object(a.useEffect)((function(){var e,t,n,a=(e=function(){window.scrollY>100?p("white"===l?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"):p("inherit")},t=100,n=null,function(){null!==n&&clearTimeout(n),n=setTimeout(e,t)});return window.onscroll=a,function(){window.onscroll=null}}),[l]);var v=function(e){m(e?"white":"dark")},w=function(t){t&&(e.history.push("/search/".concat(t.replace(/\//g,"\\"))),f(t))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V.a.Option,{key:"sc",value:"sc"},"简体"),r.a.createElement(V.a.Option,{key:"tc",value:"tc"},"繁體"))},j={backgroundImage:"url(".concat("white"===l?$:F,")")},O={backgroundImage:"url(".concat("white"===l?Y:_,")")},k={borderLeft:"1px solid ".concat("white"===l?"#ddd":"#444")};return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{style:{backgroundColor:g}},r.a.createElement("div",{className:"header-body"},r.a.createElement(u.b,{to:"/"},r.a.createElement("div",{className:"header-logo",style:j}),r.a.createElement("div",{className:"header-title",style:O})),r.a.createElement("span",{className:"mobile-invisible"},r.a.createElement(B.a.Search,{style:{width:200,marginTop:15,marginLeft:10},placeholder:o.searchPlaceholder,onSearch:function(e){return w(e)}})),r.a.createElement("div",{className:"header-button-group mobile-invisible"},r.a.createElement(q.a,{style:{marginRight:10},checked:"white"===l,checkedChildren:"☀",unCheckedChildren:"🌙",onChange:function(e){return v(e)}}),r.a.createElement(V.a,{style:{width:85},value:o.lang,getPopupContainer:function(e){return e},onChange:function(e){return s(e)}},S())),r.a.createElement("div",{className:"header-button-group screen-invisible"},r.a.createElement("div",{className:"header-button-switch",style:k,onClick:function(){y(!d)}},r.a.createElement("div",{className:d?" switch-on":""},r.a.createElement("css-icon",{class:"icon-menu"})))))),r.a.createElement(X.a,{title:o.option,width:"60vw",getContainer:!1,placement:"right",bodyStyle:{padding:5},drawerStyle:{backgroundColor:"aaa"},closable:!0,onClose:function(){return y(!1)},visible:d},r.a.createElement("div",{className:"mobile-navbar-item"},r.a.createElement(q.a,{style:{marginRight:10},checked:"white"===l,checkedChildren:"☀",unCheckedChildren:"🌙",onChange:function(e){return v(e)}}),r.a.createElement(V.a,{style:{width:85,textAlign:"left"},value:o.lang,getPopupContainer:function(e){return e},onChange:function(e){return s(e)}},S()),r.a.createElement(B.a.Search,{style:{width:"80%",marginTop:15,marginLeft:10},placeholder:o.searchPlaceholder,onSearch:function(e){return w(e)}}),r.a.createElement(E,{mode:"inline"}))),r.a.createElement("div",{className:"history-back",onClick:function(){return e.history.goBack()}},r.a.createElement("css-icon",{class:"icon-arrow-left"})))})),ee=n.p+"cup-white.webp",te=n.p+"cup-dark.webp";n(299);function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var re=Object(a.memo)((function(){var e=ne(Object(c.a)(),1)[0],t=e.theme,n=e.lang,a={color:"white"===t?"#777":"#aaa",borderTop:"1px solid ".concat("white"===t?"#ddd":"#444")},o={backgroundImage:"url(".concat("white"===t?ee:te,")")};return r.a.createElement("footer",{style:a},r.a.createElement("div",{className:"footer-note"},r.a.createElement("span",{className:"float-left"},n.copyright),r.a.createElement("span",{className:"float-right"},n.note)),r.a.createElement("div",{className:"footer-logo",style:o,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))})),oe=n.p+"wp_white.webp",ce=n.p+"wp_dark.webp";n(300);function le(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ie(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ie(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var ue=Object(a.memo)((function(e){var t=le(Object(c.a)(),1)[0],n=(t.lang,t.theme),a={backgroundImage:"url(".concat("white"===n?oe:ce,")")};return r.a.createElement("div",{className:"".concat(n,"-theme")},r.a.createElement("div",{className:"home-background",style:a}),r.a.createElement("div",{className:"home-gap"}),r.a.createElement(Z,{history:e.history}),r.a.createElement("div",{className:"homepage"},J.map((function(e){return r.a.createElement(o.a,{path:e.path,children:function(t){var n=t.match;return e.component(n)},key:e.path,exact:!0})})),r.a.createElement(re,null),r.a.createElement("div",{style:{display:"none"}},r.a.createElement("img",{alt:"背景图预加载",src:oe}),r.a.createElement("img",{alt:"背景图预加载",src:ce}))))}));t.default=ue},97:function(e,t,n){"use strict";var a,r=n(0),o=n.n(r),c=n(226),l=(n(184),n(147),n(122),n(148)),i={lang:(a=window.localStorage.getItem("lang")||"sc",l[a]),theme:window.localStorage.getItem("theme")||"white",token:window.localStorage.getItem("token")||"",menuKey:{type:"",value:"homepage"},searchWord:""},u={changeTheme:function(e,t){!function(e){window.localStorage.setItem("theme",e)}(t),e.setState({theme:t})},changeLang:function(e,t){var n=function(e){if(!Object.keys(l).includes(e))throw new Error("Can't set ".concat(e,"!"));return window.localStorage.setItem("lang",e),l[e]}(t);e.setState({lang:n})},changeUser:function(e,t){!function(e){window.localStorage.setItem("token",e)}(t),e.setState({token:t})},changeMenu:function(e,t){e.setState({menuKey:t})},changeSearchWord:function(e,t){e.setState({searchWord:t})}},s=Object(c.a)(o.a,i,u);t.a=s}}]);