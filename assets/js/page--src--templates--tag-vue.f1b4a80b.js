(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2qYH":function(t,e,r){"use strict";r.r(e);var n=r("a3WO");var a=r("BsWD");function i(t){return function(t){if(Array.isArray(t))return Object(n.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r("QWBl"),r("FZtP"),r("07d7"),r("YGK4"),r("PKPk"),r("3bBZ"),r("ToJy"),r("rB9j"),r("hByQ"),r("TeQF"),r("SYor"),r("yq1k"),r("JTJg"),r("fbCW"),r("+2oP");var s={metaInfo:function(){return{title:this.$page.tag.title}},components:{Pager:r("Wsvf").a},data:function(){return{search:"",currentPage:1,perPage:2}},methods:{getTagsLowercaseArray:function(t){var e=[];return t.forEach((function(t){e.push(t.title.toLowerCase())})),e},categoriesFound:function(){var t=[];for(var e in this.$page.tag.belongsTo.edges.forEach((function(e){t.push(e.node.category.title)})),t)t=i(new Set(t));return t.sort()},updateSearch:function(t){this.search=t}},computed:{searchResults:function(){var t=this;return this.$page.tag.belongsTo.edges.filter((function(e){var r=t.search.toLowerCase().trim();return e.node.title.toLowerCase().includes(r)?e.node.title.toLowerCase().includes(r):e.node.excerpt.toLowerCase().includes(r)?e.node.excerpt.toLowerCase().includes(r):e.node.author.toLowerCase().includes(r)?e.node.author.toLowerCase().includes(r):e.node.content.toLowerCase().includes(r)?e.node.content.toLowerCase().includes(r):e.node.category.title.toLowerCase().includes(r)?e.node.category.title.toLowerCase().includes(r):t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(r)}))?t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(r)})):t.$luxon(e.node.date).toLowerCase().includes(r)?t.$luxon(e.node.date).toLowerCase().includes(r):void 0}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},o=(r("dOQ9"),r("KHd+")),u=null,l=Object(o.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("p",[r("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / "),r("a",{attrs:{href:"/articles/tags"}},[t._v("Tags")]),t._v(" / "+t._s(t.$page.tag.title))]),r("h2",{staticClass:"my-4"},[t._v("Tag: "+t._s(t.$page.tag.title))]),r("b-input-group",{staticStyle:{"max-width":"400px"},attrs:{size:"md"}},[r("b-input-group-prepend",{attrs:{"is-text":""}},[r("b-icon",{attrs:{icon:"search"}})],1),r("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._l(t.categoriesFound(),(function(e,n){return r("button",{key:n,on:{click:function(r){return t.updateSearch(e)}}},[t._v(t._s(e))])})),t.searchResults.length>0?r("div",[1==t.searchResults.length?r("div",[r("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):r("div",[r("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return r("article",{key:e.node.id},[r("div",{staticClass:"media my-5"},[r("div",{staticClass:"media-body"},[r("g-link",{attrs:{to:e.node.path}},[r("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),r("p",{staticClass:"mb-2",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),r("p",{staticClass:"mb-0"},[t._v(t._s(e.node.excerpt))]),e.node.category?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n            ")],1),r("g-link",{attrs:{to:e.node.category.path}},[t._v(t._s(e.node.category.title))])],1):t._e(),e.node.tags.length>0?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n            ")],1),t._l(e.node.tags,(function(n,a){return r("span",{key:a},[r("g-link",{attrs:{to:n.path}},[t._v(t._s(n.title))]),a+1<e.node.tags.length?r("span",[t._v(", ")]):t._e()],1)}))],2):t._e()],1)])])})),t.searchResults.length>t.perPage?r("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):r("div",{staticClass:"my-4"},[r("p",[t._v("Your search didn't return any results. Please try again.")])])],2)}),[],!1,null,"41a491a7",null);"function"==typeof u&&u(l);e.default=l.exports},"8YOa":function(t,e,r){var n=r("0BK2"),a=r("hh1v"),i=r("UTVS"),s=r("m/L8").f,o=r("kOOl"),u=r("uy83"),l=o("meta"),c=0,f=Object.isExtensible||function(){return!0},d=function(t){s(t,l,{value:{objectID:"O"+ ++c,weakData:{}}})},v=t.exports={REQUIRED:!1,fastKey:function(t,e){if(!a(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,l)){if(!f(t))return"F";if(!e)return"E";d(t)}return t[l].objectID},getWeakData:function(t,e){if(!i(t,l)){if(!f(t))return!0;if(!e)return!1;d(t)}return t[l].weakData},onFreeze:function(t){return u&&v.REQUIRED&&f(t)&&!i(t,l)&&d(t),t}};n[l]=!0},JTJg:function(t,e,r){"use strict";var n=r("I+eb"),a=r("WjRb"),i=r("HYAF");n({target:"String",proto:!0,forced:!r("qxPZ")("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},TeQF:function(t,e,r){"use strict";var n=r("I+eb"),a=r("tycR").filter;n({target:"Array",proto:!0,forced:!r("Hd5f")("filter")},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,e,r){"use strict";var n=r("I+eb"),a=r("HAuM"),i=r("ewvW"),s=r("0Dky"),o=r("pkCn"),u=[],l=u.sort,c=s((function(){u.sort(void 0)})),f=s((function(){u.sort(null)})),d=o("sort");n({target:"Array",proto:!0,forced:c||!f||!d},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),a(t))}})},Wsvf:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("Kw5r");var n=r("DOVJ"),a=(r("Y6W1"),r("VTBJ")),i=(r("qePV"),r("rB9j"),r("UxlC"),r("2B1R"),r("ma9I"),r("fVfk")),s={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var r=e.props,s=e.data,u=e.parent,l=r.info,c=r.showLinks,f=r.showNavigation,d=r.ariaLabel,v=function(t,e){var r=t.currentPage,n=void 0===r?1:r,a=t.totalPages,i=void 0===a?1:a,s=Math.ceil(e/2),o=Math.floor(n-s),u=Math.floor(n+s);i<=e?(o=0,u=i):n<=s?(o=0,u=e):n+s>=i&&(o=i-e,u=i);for(var l=[],c=o+1;c<=u;c++)l.push(c);return{current:n,total:i,start:o,end:u,pages:l}}(l,r.range),g=v.current,p=v.total,h=v.pages,y=v.start,b=v.end,x=Object(i.d)(u.$route),C=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===g&&(s=r.ariaCurrentLabel);var l={to:o(x,e),exact:!0};return r.activeLinkClass&&(l.activeClass=r.activeLinkClass),r.exactActiveLinkClass&&(l.exactActiveClass=r.exactActiveLinkClass),t(n.a,{class:[r.linkClass,u],attrs:Object(a.a)(Object(a.a)({},l),{},{"aria-label":s.replace("%n",e),"aria-current":g===e})},[i])},m=c?h.map((function(t){return C(t,t,r.ariaLinkLabel)})):[];if(f){var L=r.firstLabel,w=r.prevLabel,k=r.nextLabel,S=r.lastLabel,_=r.ariaFirstLabel,P=r.ariaPrevLabel,O=r.ariaNextLabel,R=r.ariaLastLabel,E=r.firstClass,A=r.prevClass,I=r.nextClass,T=r.lastClass,j=r.navClass;g>1&&m.unshift(C(g-1,w,P,[A,j])),y>0&&m.unshift(C(1,L,_,[E,j])),g<p&&m.push(C(g+1,k,O,[I,j])),b<p&&m.push(C(p,S,R,[T,j]))}return m.length<2?null:t("nav",Object(a.a)(Object(a.a)({},s),{},{attrs:{role:"navigation","aria-label":d}}),m)}};function o(t,e){var r=/\/$/.test(t)?"/":"";return e>1?Object(i.g)(t)+"/".concat(e).concat(r):t}r("6NbQ")},YGK4:function(t,e,r){"use strict";var n=r("bWFh"),a=r("ZWaQ");t.exports=n("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},ZWaQ:function(t,e,r){"use strict";var n=r("m/L8").f,a=r("fHMY"),i=r("4syw"),s=r("A2ZE"),o=r("GarU"),u=r("ImZN"),l=r("fdAy"),c=r("JiZb"),f=r("g6v/"),d=r("8YOa").fastKey,v=r("afO8"),g=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,r,l){var c=t((function(t,n){o(t,c,e),g(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),f||(t.size=0),null!=n&&u(n,t[l],{that:t,AS_ENTRIES:r})})),v=p(e),h=function(t,e,r){var n,a,i=v(t),s=y(t,e);return s?s.value=r:(i.last=s={index:a=d(e,!0),key:e,value:r,previous:n=i.last,next:void 0,removed:!1},i.first||(i.first=s),n&&(n.next=s),f?i.size++:t.size++,"F"!==a&&(i.index[a]=s)),t},y=function(t,e){var r,n=v(t),a=d(e);if("F"!==a)return n.index[a];for(r=n.first;r;r=r.next)if(r.key==e)return r};return i(c.prototype,{clear:function(){for(var t=v(this),e=t.index,r=t.first;r;)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete e[r.index],r=r.next;t.first=t.last=void 0,f?t.size=0:this.size=0},delete:function(t){var e=v(this),r=y(this,t);if(r){var n=r.next,a=r.previous;delete e.index[r.index],r.removed=!0,a&&(a.next=n),n&&(n.previous=a),e.first==r&&(e.first=n),e.last==r&&(e.last=a),f?e.size--:this.size--}return!!r},forEach:function(t){for(var e,r=v(this),n=s(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:r.first;)for(n(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!y(this,t)}}),i(c.prototype,r?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return h(this,0===t?0:t,e)}}:{add:function(t){return h(this,t=0===t?0:t,t)}}),f&&n(c.prototype,"size",{get:function(){return v(this).size}}),c},setStrong:function(t,e,r){var n=e+" Iterator",a=p(e),i=p(n);l(t,e,(function(t,e){g(this,{type:n,target:t,state:a(t),kind:e,last:void 0})}),(function(){for(var t=i(this),e=t.kind,r=t.last;r&&r.removed;)r=r.previous;return t.target&&(t.last=r=r?r.next:t.state.first)?"keys"==e?{value:r.key,done:!1}:"values"==e?{value:r.value,done:!1}:{value:[r.key,r.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),r?"entries":"values",!r,!0),c(e)}}},bWFh:function(t,e,r){"use strict";var n=r("I+eb"),a=r("2oRo"),i=r("lMq5"),s=r("busE"),o=r("8YOa"),u=r("ImZN"),l=r("GarU"),c=r("hh1v"),f=r("0Dky"),d=r("HH4o"),v=r("1E5z"),g=r("cVYH");t.exports=function(t,e,r){var p=-1!==t.indexOf("Map"),h=-1!==t.indexOf("Weak"),y=p?"set":"add",b=a[t],x=b&&b.prototype,C=b,m={},L=function(t){var e=x[t];s(x,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return h&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(h&&!c(t))&&e.call(this,0===t?0:t)}:function(t,r){return e.call(this,0===t?0:t,r),this})};if(i(t,"function"!=typeof b||!(h||x.forEach&&!f((function(){(new b).entries().next()})))))C=r.getConstructor(e,t,p,y),o.REQUIRED=!0;else if(i(t,!0)){var w=new C,k=w[y](h?{}:-0,1)!=w,S=f((function(){w.has(1)})),_=d((function(t){new b(t)})),P=!h&&f((function(){for(var t=new b,e=5;e--;)t[y](e,e);return!t.has(-0)}));_||((C=e((function(e,r){l(e,C,t);var n=g(new b,e,C);return null!=r&&u(r,n[y],{that:n,AS_ENTRIES:p}),n}))).prototype=x,x.constructor=C),(S||P)&&(L("delete"),L("has"),p&&L("get")),(P||k)&&L(y),h&&x.clear&&delete x.clear}return m[t]=C,n({global:!0,forced:C!=b},m),v(C,t),h||r.setStrong(C,t,p),C}},dOQ9:function(t,e,r){"use strict";r("lDox")},fbCW:function(t,e,r){"use strict";var n=r("I+eb"),a=r("tycR").find,i=r("RNIs"),s=!0;"find"in[]&&Array(1).find((function(){s=!1})),n({target:"Array",proto:!0,forced:s},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("find")},lDox:function(t,e,r){},uy83:function(t,e,r){var n=r("0Dky");t.exports=!n((function(){return Object.isExtensible(Object.preventExtensions({}))}))},yq1k:function(t,e,r){"use strict";var n=r("I+eb"),a=r("TWQb").includes,i=r("RNIs");n({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);