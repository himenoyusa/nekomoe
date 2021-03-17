(self.webpackChunknekomoe_react=self.webpackChunknekomoe_react||[]).push([[609],{8678:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(7294),a=n(7504);n(7476),n(2850),n(2773);const o=JSON.parse('{"sc":{"lang":"sc","language":"简体","title":"喵萌奶茶屋","confirm":"确认","cancel":"取消","redirect":"跳转","status":"状态","update":"更新中","finished":"完结","type":"类型","shortAnime":"泡面","anime":"季番","subType":"字幕类型","videoType":"片源类型","staff":"Staff","translator":"翻译","translationChecker":"校对","timer":"时轴","effect":"特效","script":"后期","production":"","webRip":"WEB压制","bdRip":"BD压制","poster":"海报","tcTranslator":"繁化","search":"搜索","searchPlaceholder":"请输入搜索内容","note":"测试声明","copyright":"© 2021 Nekomoe"},"tc":{"lang":"tc","language":"繁體"},"jp":{"lang":"jp","language":"日本語","title":"猫萌え喫茶店","confirm":"確認","cancel":"キャンセル","translator":"翻译","redirect":"跳转","note":"声明","copyright":"© 2021 Nekomoe"}}');var c,l={lang:(c=window.localStorage.getItem("lang")||"sc",o[c]),theme:window.localStorage.getItem("theme")||"white"},i={changeTheme:function(e,t){!function(e){window.localStorage.setItem("theme",e)}(t),e.setState({theme:t})},changeLang:function(e,t){var n=function(e){if(!Object.keys(o).includes(e))throw new Error("Can't set ".concat(e,"!"));return window.localStorage.setItem("lang",e),o[e]}(t);e.setState({lang:n})}};const s=(0,a.Z)(r,l,i)},5609:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N}),n(9371),n(774),n(5767),n(9115),n(6253),n(6997),n(1181),n(110),n(6059),n(522);var r=n(7294),a=n(5977),o=n(8678),c=n(684);const l=[{path:"/",component:(0,c.ZP)((function(){return Promise.all([n.e(669),n.e(132),n.e(511)]).then(n.bind(n,4511))}),{fallback:null})},{path:"/detail/:name",component:(0,c.ZP)((function(){return Promise.all([n.e(669),n.e(913)]).then(n.bind(n,6913))}),{fallback:null})}];var i=n(3727),s=n(4513),u=n(9783),m=n(2028);n(1822);const d=n.p+"logo-white.png",h=n.p+"logo-dark.png",f=n.p+"title-dark.png",p=n.p+"title-white.png";function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(2519);const v=function(){var e=g((0,o.Z)(),2),t=e[0],n=t.lang,a=t.theme,c=e[1],l=c.changeLang,y=c.changeTheme,v=g((0,r.useState)(!1),2),b=v[0],w=v[1],E=g((0,r.useState)("inherit"),2),k=E[0],S=E[1];(0,r.useEffect)((function(){if(window.innerWidth>768){var e=(t=function(){window.scrollY>100?S("white"===a?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"):S("inherit")},100,n=null,function(){null!==n&&clearTimeout(n),n=setTimeout(t,100)});window.onscroll=e}var t,n;return function(){window.onscroll=null}}),[a]);var C=function(e){y(e?"white":"dark")},A=function(){return r.createElement(r.Fragment,null,r.createElement(s.Z.Option,{key:"sc",value:"sc"},"简体"),r.createElement(s.Z.Option,{key:"tc",value:"tc"},"繁體"),r.createElement(s.Z.Option,{key:"jp",value:"jp"},"日本語"))},N={backgroundImage:"url(".concat("white"===a?d:h,")")},j={backgroundImage:"url(".concat("white"===a?p:f,")")},I={borderLeft:"1px solid ".concat("white"===a?"#ddd":"#444")},Z={borderTop:"1px solid ".concat("white"===a?"#ddd":"#444")};return r.createElement(r.Fragment,null,r.createElement("header",{style:{backgroundColor:k}},r.createElement("div",{className:"header-body"},r.createElement(i.rU,{to:"/"},r.createElement("div",{className:"header-logo",style:N}),r.createElement("div",{className:"header-title",style:j})),r.createElement("span",{className:"mobile-invisible"},r.createElement(u.Z.Search,{style:{width:200,marginTop:15,marginLeft:10},placeholder:n.searchPlaceholder})),r.createElement("div",{className:"header-button-group header-screen"},r.createElement(m.Z,{style:{marginRight:10},checked:"white"===a,checkedChildren:"☀",unCheckedChildren:"🌙",onChange:function(e){return C(e)}}),r.createElement(s.Z,{style:{width:85},value:n.lang,getPopupContainer:function(e){return e},onChange:function(e){return l(e)}},A())),r.createElement("div",{className:"header-button-group screen-invisible"},r.createElement("div",{className:"header-button-switch",style:I,onClick:function(){w(!b)}},r.createElement("div",{className:b?" switch-on":""},r.createElement("css-icon",{class:"icon-arrow-left"})))))),r.createElement("div",{className:"mobile-navbar".concat(b?" mobile-navbar-show":"")},r.createElement("div",{className:"mobile-navbar-item",style:Z},r.createElement("div",{style:{textAlign:"right"}},r.createElement(m.Z,{style:{marginRight:10},checked:"white"===a,checkedChildren:"☀",unCheckedChildren:"🌙",onChange:function(e){return C(e)}}),r.createElement(s.Z,{style:{width:85,textAlign:"left"},value:n.lang,getPopupContainer:function(){return document.getElementsByClassName("header-body")[0]},onChange:function(e){return l(e)}},A())))))},b=n.p+"cup-white.png",w=n.p+"cup-dark.png";function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(3488);const k=function(){var e,t,n=(e=(0,o.Z)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],a=n.theme,c=n.lang,l={color:"white"===a?"#777":"#aaa",borderTop:"1px solid ".concat("white"===a?"#ddd":"#444")},i={backgroundImage:"url(".concat("white"===a?b:w,")")};return r.createElement("footer",{style:l},r.createElement("div",{className:"footer-note"},r.createElement("span",{className:"float-left"},c.copyright),r.createElement("span",{className:"float-right"},c.note)),r.createElement("div",{className:"footer-logo",style:i,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))};n(5804),n(8578);const S=n.p+"wp_white.webp",C=n.p+"wp_dark.webp";function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const N=function(){var e,t,n=(e=(0,o.Z)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(r=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],c=(n.lang,n.theme),i={backgroundImage:"url(".concat("white"===c?S:C,")")};return r.createElement("div",{className:"".concat(c,"-theme home-background"),style:i},r.createElement(v,null),r.createElement("div",{className:"homepage"},l.map((function(e){return r.createElement(a.AW,{path:e.path,component:e.component,exact:!0,key:e.path})})),r.createElement(k,null),r.createElement("div",{style:{display:"none"}},r.createElement("img",{alt:"背景图预加载",src:S}),r.createElement("img",{alt:"背景图预加载",src:C}))))}},3488:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},2519:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},5804:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)},8578:(e,t,n)=>{"use strict";var r=n(4783)(e.id,{locals:!1});e.hot.dispose(r),e.hot.accept(void 0,r)}}]);