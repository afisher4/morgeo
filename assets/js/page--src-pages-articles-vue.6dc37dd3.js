(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{F3eR:function(t,e,a){"use strict";a.r(e);a("QWBl"),a("FZtP"),a("oVuX"),a("TeQF"),a("SYor"),a("rB9j"),a("hByQ"),a("yq1k"),a("JTJg"),a("+2oP"),a("Kw5r");var s=a("DOVJ"),r=(a("Y6W1"),a("VTBJ")),n=(a("qePV"),a("UxlC"),a("2B1R"),a("ma9I"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,o=e.parent,c=a.info,u=a.showLinks,d=a.showNavigation,p=a.ariaLabel,g=function(t,e){var a=t.currentPage,s=void 0===a?1:a,r=t.totalPages,n=void 0===r?1:r,i=Math.ceil(e/2),l=Math.floor(s-i),o=Math.floor(s+i);n<=e?(l=0,o=n):s<=i?(l=0,o=e):s+i>=n&&(l=n-e,o=n);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:s,total:n,start:l,end:o,pages:c}}(c,a.range),f=g.current,h=g.total,v=g.pages,b=g.start,C=g.end,y=Object(n.d)(o.$route),L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===f&&(i=a.ariaCurrentLabel);var c={to:l(y,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(s.a,{class:[a.linkClass,o],attrs:Object(r.a)(Object(r.a)({},c),{},{"aria-label":i.replace("%n",e),"aria-current":f===e})},[n])},m=u?v.map((function(t){return L(t,t,a.ariaLinkLabel)})):[];if(d){var w=a.firstLabel,x=a.prevLabel,S=a.nextLabel,P=a.lastLabel,_=a.ariaFirstLabel,k=a.ariaPrevLabel,R=a.ariaNextLabel,j=a.ariaLastLabel,O=a.firstClass,T=a.prevClass,A=a.nextClass,B=a.lastClass,I=a.navClass;f>1&&m.unshift(L(f-1,x,k,[T,I])),b>0&&m.unshift(L(1,w,_,[O,I])),f<h&&m.push(L(f+1,S,R,[A,I])),C<h&&m.push(L(h,P,j,[B,I]))}return m.length<2?null:t("nav",Object(r.a)(Object(r.a)({},i),{},{attrs:{role:"navigation","aria-label":p}}),m)}};function l(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(n.g)(t)+"/".concat(e).concat(a):t}a("6NbQ");var o={metaInfo:{title:"Articles"},components:{Pager:i},data:function(){return{search:"",currentPage:1,perPage:4}},methods:{getTags:function(t){var e=[];return t.forEach((function(t){e.push(t.title)})),e.join(", ")}},computed:{searchResults:function(){var t=this;return this.$page.posts.edges.filter((function(e){var a=t.search.toLowerCase().trim();return e.node.title.toLowerCase().includes(a)?e.node.title.toLowerCase().includes(a):e.node.excerpt.toLowerCase().includes(a)?e.node.excerpt.toLowerCase().includes(a):e.node.author.toLowerCase().includes(a)?e.node.author.toLowerCase().includes(a):e.node.content.toLowerCase().includes(a)?e.node.content.toLowerCase().includes(a):e.node.category.title.toLowerCase().includes(a)?e.node.category.title.toLowerCase().includes(a):t.$luxon(e.node.date).toLowerCase().includes(a)?t.$luxon(e.node.date).toLowerCase().includes(a):void 0}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},c=(a("ptIo"),a("KHd+")),u=null,d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h2",{staticClass:"my-4"},[t._v("Articles")]),a("b-input-group",{staticStyle:{"max-width":"400px"},attrs:{size:"md"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.searchResults.length>0?a("div",[1==t.searchResults.length?a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return a("article",{key:e.node.id},[a("div",{staticClass:"media my-5"},[a("div",{staticClass:"media-body"},[a("g-link",{attrs:{to:e.node.path}},[a("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),a("p",{staticClass:"mb-2",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),a("p",{staticClass:"mb-2"},[t._v(t._s(e.node.excerpt))]),e.node.category?a("p",{staticClass:"mb-0"},[a("span",{staticStyle:{"font-weight":"500"}},[t._v("Category:")]),t._v(" "+t._s(e.node.category.title))]):t._e(),t.getTags(e.node.tags)?a("p",{staticClass:"mb-0"},[a("span",{staticStyle:{"font-weight":"500"}},[t._v("Tags:")]),t._v(" "+t._s(t.getTags(e.node.tags)))]):t._e()],1)])])})),t.searchResults.length>t.perPage?a("div",[a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],2):a("div",{staticClass:"my-4"},[a("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,"02673450",null);"function"==typeof u&&u(d);e.default=d.exports},JTJg:function(t,e,a){"use strict";var s=a("I+eb"),r=a("WjRb"),n=a("HYAF");s({target:"String",proto:!0,forced:!a("qxPZ")("includes")},{includes:function(t){return!!~String(n(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},TeQF:function(t,e,a){"use strict";var s=a("I+eb"),r=a("tycR").filter;s({target:"Array",proto:!0,forced:!a("Hd5f")("filter")},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},b4lk:function(t,e,a){},ptIo:function(t,e,a){"use strict";a("b4lk")},yq1k:function(t,e,a){"use strict";var s=a("I+eb"),r=a("TWQb").includes,n=a("RNIs");s({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);