(self.webpackChunknekomoe_react=self.webpackChunknekomoe_react||[]).push([[913],{6913:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u}),r(6059),r(4336),r(774),r(5767),r(9115),r(6253),r(6997),r(1181),r(110),r(522);var n=r(7294),o=r(5977),a=r(9075),i=r(8678);function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||function(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r(4582);const u=function(){var t=c((0,i.Z)(),1)[0],e=(t.lang,t.theme),r=(0,o.UO)().name,s=c((0,n.useState)({}),2),u=s[0],l=s[1];(0,n.useEffect)((function(){return(0,a.Z)("testData/list.json").then((function(t){if(200===t.status){var e={};t.data.forEach((function(t){t.jpTitle[0]===r&&(e=t)})),l(e)}else l({})})),function(){l({})}}),[r]);var f={borderTop:"1px solid ".concat("white"===e?"#ddd":"#444")};return n.createElement("div",{className:"detail-content",style:f},n.createElement("div",null,u.jpTitle),n.createElement("img",{src:u.posterUrl,alt:""}))}},9075:(t,e,r)=>{"use strict";r.d(e,{Z:()=>u});var n=r(9669),o=r.n(n),a=r(3727),i=localStorage.getItem("token")||"",c={"X-Requested-With":"XMLHttpRequest"};i&&(c.Authorization="Bearer ".concat(i));var s=o().create({baseURL:"http://localhost:3000",timeout:1e6,headers:c});s.interceptors.response.use((function(t){return t}),(function(t){if(403!==t.status)throw t;(new a.UT).history.push("/login"),console.log("请先登陆")}));const u=s},4336:(t,e,r)=>{"use strict";var n=r(2985),o=r(50)(0),a=r(7717)([].forEach,!0);n(n.P+n.F*!a,"Array",{forEach:function(t){return o(this,t,arguments[1])}})},4582:(t,e,r)=>{"use strict";var n=r(4783)(t.id,{locals:!1});t.hot.dispose(n),t.hot.accept(void 0,n)}}]);