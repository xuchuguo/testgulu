(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{123:function(t,e,r){},235:function(t,e,r){"use strict";var n=r(123);r.n(n).a},259:function(t,e,r){"use strict";r.r(e);var n=r(91),s=r(90),a={components:{"x-col":n.a,"x-row":s.a}},i=(r(235),r(0)),c=Object(i.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[r("x-col",{attrs:{span:"8"}},[r("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),r("x-col",{attrs:{span:"8"}},[r("div",{staticClass:"demoCol"},[t._v("8")])]),t._v(" "),r("x-col",{attrs:{span:"8"}},[r("div",{staticClass:"demoCol"},[t._v("8")])])],1),t._v(" "),r("x-row",{staticClass:"demoRow",attrs:{gutter:"10"}},[r("x-col",{attrs:{span:"6"}},[r("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),r("x-col",{attrs:{span:"6"}},[r("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),r("x-col",{attrs:{span:"6"}},[r("div",{staticClass:"demoCol"},[t._v("6")])]),t._v(" "),r("x-col",{attrs:{span:"6"}},[r("div",{staticClass:"demoCol"},[t._v("6")])])],1)],1)},[],!1,null,"6ba80bdd",null);e.default=c.exports},48:function(t,e,r){},49:function(t,e,r){},53:function(t,e,r){"use strict";var n=r(13),s=r(57)(0),a=r(31)([].forEach,!0);n(n.P+n.F*!a,"Array",{forEach:function(t){return s(this,t,arguments[1])}})},60:function(t,e,r){"use strict";var n=r(10),s=r(17),a=r(25),i=r(94),c=r(29),o=r(12),u=r(65).f,l=r(71).f,f=r(18).f,p=r(93).trim,d=n.Number,v=d,h=d.prototype,g="Number"==a(r(55)(h)),m="trim"in String.prototype,b=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var r,n,s,a=(e=m?e.trim():p(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+e}for(var i,o=e.slice(2),u=0,l=o.length;u<l;u++)if((i=o.charCodeAt(u))<48||i>s)return NaN;return parseInt(o,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof d&&(g?o(function(){h.valueOf.call(r)}):"Number"!=a(r))?i(new v(b(e)),r,d):b(e)};for(var C,_=r(11)?u(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;_.length>w;w++)s(v,C=_[w])&&!s(d,C)&&f(d,C,l(v,C));d.prototype=h,h.constructor=d,r(20)(n,"Number",d)}},61:function(t,e,r){"use strict";var n=r(13),s=r(33)(!0);n(n.P,"Array",{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r(54)("includes")},62:function(t,e,r){"use strict";var n=r(13),s=r(86);n(n.P+n.F*r(87)("includes"),"String",{includes:function(t){return!!~s(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},86:function(t,e,r){var n=r(95),s=r(23);t.exports=function(t,e,r){if(n(e))throw TypeError("String#"+r+" doesn't accept regex!");return String(s(t))}},87:function(t,e,r){var n=r(16)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(r){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},88:function(t,e,r){"use strict";var n=r(48);r.n(n).a},89:function(t,e,r){"use strict";var n=r(49);r.n(n).a},90:function(t,e,r){"use strict";r(37),r(53),r(61),r(62),r(60);var n={name:"GuluRow",props:{gutter:{type:[Number,String]},align:{type:String,validator:function(t){return["left","right","center"].includes(t)}}},computed:{rowStyle:function(){var t=this.gutter;return{marginLeft:-t/2+"px",marginRight:-t/2+"px"}},rowClass:function(){var t=this.align;return[t&&"align-".concat(t)]}},mounted:function(){var t=this;this.$children.forEach(function(e){e.gutter=t.gutter})}},s=(r(89),r(0)),a=Object(s.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"row",class:this.rowClass,style:this.rowStyle},[this._t("default")],2)},[],!1,null,"b3c35404",null);e.a=a.exports},91:function(t,e,r){"use strict";var n=r(100),s=(r(60),r(61),r(62),r(53),r(37),r(82),function(t){var e=Object.keys(t),r=!0;return e.forEach(function(t){["span","offset"].includes(t)||(r=!1)}),r}),a={name:"GuluCol",props:{span:{type:[Number,String]},offset:{type:[Number,String]},ipad:{type:Object,validator:s},narrowPc:{type:Object,validator:s},pc:{type:Object,validator:s},widePc:{type:Object,validator:s}},data:function(){return{gutter:0}},methods:{createClasses:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t)return[];var r=[];return t.span&&r.push("col-".concat(e).concat(t.span)),t.offset&&r.push("offset-".concat(e).concat(t.offset)),r}},computed:{colClass:function(){var t=this.span,e=this.offset,r=this.ipad,s=this.narrowPc,a=this.pc,i=this.widePc,c=this.createClasses;return[].concat(Object(n.a)(c({span:t,offset:e})),Object(n.a)(c(r,"ipad-")),Object(n.a)(c(s,"narrow-pc-")),Object(n.a)(c(a,"pc-")),Object(n.a)(c(i,"wide-pc-")))},colStyle:function(){return{paddingLeft:this.gutter/2+"px",paddingRight:this.gutter/2+"px"}}}},i=(r(88),r(0)),c=Object(i.a)(a,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"col",class:this.colClass,style:this.colStyle},[this._t("default")],2)},[],!1,null,"3377b81e",null);e.a=c.exports}}]);