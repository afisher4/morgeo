(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{JTJg:function(t,e,a){"use strict";var r=a("I+eb"),n=a("WjRb"),s=a("HYAF");r({target:"String",proto:!0,forced:!a("qxPZ")("includes")},{includes:function(t){return!!~String(s(this)).indexOf(n(t),arguments.length>1?arguments[1]:void 0)}})},LnWj:function(t,e,a){"use strict";a("aMtr")},TeQF:function(t,e,a){"use strict";var r=a("I+eb"),n=a("tycR").filter;r({target:"Array",proto:!0,forced:!a("Hd5f")("filter")},{filter:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("Kw5r");var r=a("DOVJ"),n=(a("Y6W1"),a("VTBJ")),s=(a("qePV"),a("rB9j"),a("UxlC"),a("2B1R"),a("ma9I"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,l=e.parent,c=a.info,u=a.showLinks,d=a.showNavigation,g=a.ariaLabel,f=function(t,e){var a=t.currentPage,r=void 0===a?1:a,n=t.totalPages,s=void 0===n?1:n,i=Math.ceil(e/2),o=Math.floor(r-i),l=Math.floor(r+i);s<=e?(o=0,l=s):r<=i?(o=0,l=e):r+i>=s&&(o=s-e,l=s);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:r,total:s,start:o,end:l,pages:c}}(c,a.range),p=f.current,v=f.total,h=f.pages,b=f.start,y=f.end,C=Object(s.d)(l.$route),L=function(e){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===p&&(i=a.ariaCurrentLabel);var c={to:o(C,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:[a.linkClass,l],attrs:Object(n.a)(Object(n.a)({},c),{},{"aria-label":i.replace("%n",e),"aria-current":p===e})},[s])},m=u?h.map((function(t){return L(t,t,a.ariaLinkLabel)})):[];if(d){var w=a.firstLabel,_=a.prevLabel,S=a.nextLabel,x=a.lastLabel,k=a.ariaFirstLabel,P=a.ariaPrevLabel,R=a.ariaNextLabel,j=a.ariaLastLabel,A=a.firstClass,T=a.prevClass,B=a.nextClass,N=a.lastClass,O=a.navClass;p>1&&m.unshift(L(p-1,_,P,[T,O])),b>0&&m.unshift(L(1,w,k,[A,O])),p<v&&m.push(L(p+1,S,R,[B,O])),y<v&&m.push(L(v,x,j,[N,O]))}return m.length<2?null:t("nav",Object(n.a)(Object(n.a)({},i),{},{attrs:{role:"navigation","aria-label":g}}),m)}};function o(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(s.g)(t)+"/".concat(e).concat(a):t}a("6NbQ")},aMtr:function(t,e,a){},fbCW:function(t,e,a){"use strict";var r=a("I+eb"),n=a("tycR").find,s=a("RNIs"),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},nldV:function(t,e,a){"use strict";a.r(e);a("QWBl"),a("FZtP"),a("TeQF"),a("SYor"),a("rB9j"),a("hByQ"),a("yq1k"),a("JTJg"),a("fbCW"),a("+2oP");var r={metaInfo:function(){return{title:this.$page.category.title}},components:{Pager:a("Wsvf").a},data:function(){return{search:"",currentPage:1,perPage:3}},methods:{getTagsLowercaseArray:function(t){var e=[];return t.forEach((function(t){e.push(t.title.toLowerCase())})),e}},computed:{searchResults:function(){var t=this;return this.$page.category.belongsTo.edges.filter((function(e){var a=t.search.toLowerCase().trim();return e.node.title.toLowerCase().includes(a)?e.node.title.toLowerCase().includes(a):e.node.excerpt.toLowerCase().includes(a)?e.node.excerpt.toLowerCase().includes(a):e.node.author.toLowerCase().includes(a)?e.node.author.toLowerCase().includes(a):e.node.content.toLowerCase().includes(a)?e.node.content.toLowerCase().includes(a):e.node.category.title.toLowerCase().includes(a)?e.node.category.title.toLowerCase().includes(a):t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(a)}))?t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(a)})):t.$luxon(e.node.date).toLowerCase().includes(a)?t.$luxon(e.node.date).toLowerCase().includes(a):void 0}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},n=(a("LnWj"),a("KHd+")),s=null,i=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("p",[a("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / "),a("a",{attrs:{href:"/articles/categories"}},[t._v("Categories")]),t._v(" / "+t._s(t.$page.category.title))]),a("h2",{staticClass:"my-4"},[t._v("Category: "+t._s(t.$page.category.title))]),a("b-input-group",{staticStyle:{"max-width":"400px"},attrs:{size:"md"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.searchResults.length>0?a("div",[1==t.searchResults.length?a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return a("article",{key:e.node.id},[a("div",{staticClass:"media my-5"},[a("div",{staticClass:"media-body"},[a("g-link",{attrs:{to:e.node.path}},[a("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),a("p",{staticClass:"mb-2",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.node.excerpt))]),e.node.category?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n            ")],1),a("g-link",{attrs:{to:e.node.category.path}},[t._v(t._s(e.node.category.title))])],1):t._e(),e.node.tags.length>0?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n            ")],1),t._l(e.node.tags,(function(r,n){return a("span",{key:n},[a("g-link",{attrs:{to:r.path}},[t._v(t._s(r.title))]),n+1<e.node.tags.length?a("span",[t._v(", ")]):t._e()],1)}))],2):t._e()],1)])])})),t.searchResults.length>t.perPage?a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):a("div",{staticClass:"my-4"},[a("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,"ba907fda",null);"function"==typeof s&&s(i);e.default=i.exports},yq1k:function(t,e,a){"use strict";var r=a("I+eb"),n=a("TWQb").includes,s=a("RNIs");r({target:"Array",proto:!0},{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);