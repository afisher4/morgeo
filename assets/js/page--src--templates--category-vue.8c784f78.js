(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8YOa":function(t,e,r){var a=r("0BK2"),n=r("hh1v"),i=r("UTVS"),s=r("m/L8").f,o=r("kOOl"),l=r("uy83"),u=o("meta"),c=0,f=Object.isExtensible||function(){return!0},d=function(t){s(t,u,{value:{objectID:"O"+ ++c,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,u)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[u].objectID},getWeakData:function(t,e){if(!i(t,u)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[u].weakData},onFreeze:function(t){return l&&v.REQUIRED&&f(t)&&!i(t,u)&&d(t),t}};a[u]=!0},JTJg:function(t,e,r){"use strict";var a=r("I+eb"),n=r("WjRb"),i=r("HYAF");a({target:"String",proto:!0,forced:!r("qxPZ")("includes")},{includes:function(t){return!!~String(i(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},KQm4:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var a=r("a3WO");var n=r("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(a.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},TeQF:function(t,e,r){"use strict";var a=r("I+eb"),n=r("tycR").filter;a({target:"Array",proto:!0,forced:!r("Hd5f")("filter")},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,e,r){"use strict";var a=r("I+eb"),n=r("HAuM"),i=r("ewvW"),s=r("0Dky"),o=r("pkCn"),l=[],u=l.sort,c=s((function(){l.sort(void 0)})),f=s((function(){l.sort(null)})),d=o("sort");a({target:"Array",proto:!0,forced:c||!f||!d},{sort:function(t){return void 0===t?u.call(i(this)):u.call(i(this),n(t))}})},UUjV:function(t,e,r){"use strict";r("unWv")},Wsvf:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("Kw5r");var a=r("DOVJ"),n=(r("Y6W1"),r("VTBJ")),i=(r("qePV"),r("rB9j"),r("UxlC"),r("2B1R"),r("ma9I"),r("fVfk")),s={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var r=e.props,s=e.data,l=e.parent,u=r.info,c=r.showLinks,f=r.showNavigation,d=r.ariaLabel,v=function(t,e){var r=t.currentPage,a=void 0===r?1:r,n=t.totalPages,i=void 0===n?1:n,s=Math.ceil(e/2),o=Math.floor(a-s),l=Math.floor(a+s);i<=e?(o=0,l=i):a<=s?(o=0,l=e):a+s>=i&&(o=i-e,l=i);for(var u=[],c=o+1;c<=l;c++)u.push(c);return{current:a,total:i,start:o,end:l,pages:u}}(u,r.range),g=v.current,p=v.total,h=v.pages,y=v.start,b=v.end,C=Object(i.d)(l.$route),m=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===g&&(s=r.ariaCurrentLabel);var u={to:o(C,e),exact:!0};return r.activeLinkClass&&(u.activeClass=r.activeLinkClass),r.exactActiveLinkClass&&(u.exactActiveClass=r.exactActiveLinkClass),t(a.a,{class:[r.linkClass,l],attrs:Object(n.a)(Object(n.a)({},u),{},{"aria-label":s.replace("%n",e),"aria-current":g===e})},[i])},x=c?h.map((function(t){return m(t,t,r.ariaLinkLabel)})):[];if(f){var L=r.firstLabel,w=r.prevLabel,k=r.nextLabel,S=r.lastLabel,_=r.ariaFirstLabel,P=r.ariaPrevLabel,O=r.ariaNextLabel,A=r.ariaLastLabel,j=r.firstClass,E=r.prevClass,R=r.nextClass,I=r.lastClass,T=r.navClass;g>1&&x.unshift(m(g-1,w,P,[E,T])),y>0&&x.unshift(m(1,L,_,[j,T])),g<p&&x.push(m(g+1,k,O,[R,T])),b<p&&x.push(m(p,S,A,[I,T]))}return x.length<2?null:t("nav",Object(n.a)(Object(n.a)({},s),{},{attrs:{role:"navigation","aria-label":d}}),x)}};function o(t,e){var r=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+"/".concat(e).concat(r):t}r("6NbQ")},YGK4:function(t,e,r){"use strict";var a=r("bWFh"),n=r("ZWaQ");t.exports=a("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n)},ZWaQ:function(t,e,r){"use strict";var a=r("m/L8").f,n=r("fHMY"),i=r("4syw"),s=r("A2ZE"),o=r("GarU"),l=r("ImZN"),u=r("fdAy"),c=r("JiZb"),f=r("g6v/"),d=r("8YOa").fastKey,v=r("afO8"),g=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,r,u){var c=t((function(t,a){o(t,c,e),g(t,{type:e,index:n(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=a&&l(a,t[u],{that:t,AS_ENTRIES:r})})),v=p(e),h=function(t,e,r){var a,n,i=v(t),s=y(t,e);return s?s.value=r:(i.last=s={index:n=d(e,!0),key:e,value:r,previous:a=i.last,next:void 0,removed:!1},i.first||(i.first=s),a&&(a.next=s),f?i.size++:t.size++,"F"!==n&&(i.index[n]=s)),t},y=function(t,e){var r,a=v(t),n=d(e);if("F"!==n)return a.index[n];for(r=a.first;r;r=r.next)if(r.key==e)return r};return i(c.prototype,{clear:function(){for(var t=v(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=v(this),r=y(this,t);if(r){var a=r.next,n=r.previous;delete e.index[r.index],r.removed=!0,n&&(n.next=a),a&&(a.previous=n),e.first==r&&(e.first=a),e.last==r&&(e.last=n),f?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=v(this),a=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(a(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),i(c.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&a(c.prototype,"size",{get:function(){return v(this).size}}),c},setStrong:function(t,e,r){var a=e+" Iterator",n=p(e),i=p(a);u(t,e,(function(t,e){g(this,{type:a,target:t,state:n(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(e)}}},bWFh:function(t,e,r){"use strict";var a=r("I+eb"),n=r("2oRo"),i=r("lMq5"),s=r("busE"),o=r("8YOa"),l=r("ImZN"),u=r("GarU"),c=r("hh1v"),f=r("0Dky"),d=r("HH4o"),v=r("1E5z"),g=r("cVYH");t.exports=function(t,e,r){var p=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),y=p?"set":"add",b=n[t],C=b&&b.prototype,m=b,x={},L=function(t){var e=C[t];s(C,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof b||!(h||C.forEach&&!f((function(){(new b).entries().next()})))))m=r.getConstructor(e,t,p,y),o.REQUIRED=!0;else if(i(t,!0)){var w=new m,k=w[y](h?{}:-0,1)!=w,S=f((function(){w.has(1)})),_=d((function(t){new b(t)})),P=!h&&f((function(){for(var t=new b,e=5;e--;)t[y](e,e);return!t.has(-0)}));_||((m=e((function(e,r){u(e,m,t);var a=g(new b,e,m);return null!=r&&l(r,a[y],{that:a,AS_ENTRIES:p}),a}))).prototype=C,C.constructor=m),(S||P)&&(L("delete"),L("has"),p&&L("get")),(P||k)&&L(y),h&&C.clear&&delete C.clear}return x[t]=m,a({global:!0,forced:m!=b},x),v(m,t),h||r.setStrong(m,t,p),m}},fbCW:function(t,e,r){"use strict";var a=r("I+eb"),n=r("tycR").find,i=r("RNIs"),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),a({target:"Array",proto:!0,forced:s},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},nldV:function(t,e,r){"use strict";r.r(e);var a=r("KQm4"),n=(r("QWBl"),r("FZtP"),r("07d7"),r("YGK4"),r("PKPk"),r("3bBZ"),r("ToJy"),r("TeQF"),r("SYor"),r("rB9j"),r("hByQ"),r("fbCW"),r("yq1k"),r("JTJg"),r("+2oP"),{metaInfo:function(){return{title:this.$page.category.title}},components:{Pager:r("Wsvf").a},data:function(){return{search:"",currentPage:1,perPage:2,tagFilter:"All Tags"}},methods:{getTagsLowercaseArray:function(t){var e=[];return t.forEach((function(t){e.push(t.title.toLowerCase())})),e},resetData:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.mounted=!0},tagsFound:function(){var t=[];for(var e in this.$page.category.belongsTo.edges.forEach((function(e){e.node.tags.forEach((function(e){t.push(e.title)}))})),t)t=Object(a.a)(new Set(t));return t.unshift("All Tags"),t.sort()}},computed:{searchResults:function(){var t=this;return this.$page.category.belongsTo.edges.filter((function(e){var r=t.search.toLowerCase().trim();if("All Tags"==t.tagFilter||e.node.tags.find((function(e){return e.title.toLowerCase().includes(t.tagFilter.toLowerCase())}))){if(e.node.title.toLowerCase().includes(r))return e.node.title.toLowerCase().includes(r);if(e.node.excerpt.toLowerCase().includes(r))return e.node.excerpt.toLowerCase().includes(r);if(e.node.author.toLowerCase().includes(r))return e.node.author.toLowerCase().includes(r);if(e.node.content.toLowerCase().includes(r))return e.node.content.toLowerCase().includes(r);if(e.node.category.title.toLowerCase().includes(r))return e.node.category.title.toLowerCase().includes(r);if(t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(r)})))return t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(r)}));if(t.$luxon(e.node.date).toLowerCase().includes(r))return t.$luxon(e.node.date).toLowerCase().includes(r)}}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}}),i=(r("UUjV"),r("KHd+")),s=null,o=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("p",[r("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / "),r("a",{attrs:{href:"/articles/categories"}},[t._v("Categories")]),t._v(" / "+t._s(t.$page.category.title))]),r("h2",{staticClass:"my-4"},[t._v("Category: "+t._s(t.$page.category.title))]),r("div",{staticStyle:{"max-width":"400px"}},[r("b-input-group",{attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{attrs:{icon:"search"}})],1),r("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),r("v-select",{staticClass:"mt-2",attrs:{options:t.tagsFound(),clearable:!1},model:{value:t.tagFilter,callback:function(e){t.tagFilter=e},expression:"tagFilter"}})],1),r("b-button",{staticClass:"mt-2",on:{click:t.resetData}},[t._v("Clear")]),t.searchResults.length>0?r("div",[1==t.searchResults.length?r("div",[r("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):r("div",[r("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return r("article",{key:e.node.id},[r("div",{staticClass:"media my-5"},[r("div",{staticClass:"media-body"},[r("g-link",{attrs:{to:e.node.path}},[r("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),r("p",{staticClass:"mb-2",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),r("p",{staticClass:"mb-0"},[t._v(t._s(e.node.excerpt))]),e.node.category?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n            ")],1),r("g-link",{attrs:{to:e.node.category.path}},[t._v(t._s(e.node.category.title))])],1):t._e(),e.node.tags.length>0?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n            ")],1),t._l(e.node.tags,(function(a,n){return r("span",{key:n},[r("g-link",{attrs:{to:a.path}},[t._v(t._s(a.title))]),n+1<e.node.tags.length?r("span",[t._v(", ")]):t._e()],1)}))],2):t._e()],1)])])})),t.searchResults.length>t.perPage?r("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):r("div",{staticClass:"my-4"},[r("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,"69c1db5d",null);"function"==typeof s&&s(o);e.default=o.exports},unWv:function(t,e,r){},uy83:function(t,e,r){var a=r("0Dky");t.exports=!a((function(){return Object.isExtensible(Object.preventExtensions({}))}))},yq1k:function(t,e,r){"use strict";var a=r("I+eb"),n=r("TWQb").includes,i=r("RNIs");a({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);