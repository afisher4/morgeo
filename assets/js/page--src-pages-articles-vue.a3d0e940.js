(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+xzD":function(t,e,a){},F3eR:function(t,e,a){"use strict";a.r(e);a("TeQF"),a("SYor"),a("hByQ"),a("rB9j"),a("yq1k"),a("JTJg"),a("+2oP"),a("Kw5r");var r=a("DOVJ"),s=(a("Y6W1"),a("VTBJ")),n=(a("qePV"),a("UxlC"),a("2B1R"),a("ma9I"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,o=e.parent,c=a.info,u=a.showLinks,d=a.showNavigation,p=a.ariaLabel,g=function(t,e){var a=t.currentPage,r=void 0===a?1:a,s=t.totalPages,n=void 0===s?1:s,i=Math.ceil(e/2),l=Math.floor(r-i),o=Math.floor(r+i);n<=e?(l=0,o=n):r<=i?(l=0,o=e):r+i>=n&&(l=n-e,o=n);for(var c=[],u=l+1;u<=o;u++)c.push(u);return{current:r,total:n,start:l,end:o,pages:c}}(c,a.range),f=g.current,h=g.total,v=g.pages,b=g.start,L=g.end,C=Object(n.d)(o.$route),y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===f&&(i=a.ariaCurrentLabel);var c={to:l(C,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:[a.linkClass,o],attrs:Object(s.a)(Object(s.a)({},c),{},{"aria-label":i.replace("%n",e),"aria-current":f===e})},[n])},x=u?v.map((function(t){return y(t,t,a.ariaLinkLabel)})):[];if(d){var w=a.firstLabel,S=a.prevLabel,m=a.nextLabel,P=a.lastLabel,k=a.ariaFirstLabel,_=a.ariaPrevLabel,R=a.ariaNextLabel,j=a.ariaLastLabel,O=a.firstClass,A=a.prevClass,J=a.nextClass,N=a.lastClass,B=a.navClass;f>1&&x.unshift(y(f-1,S,_,[A,B])),b>0&&x.unshift(y(1,w,k,[O,B])),f<h&&x.push(y(f+1,m,R,[J,B])),L<h&&x.push(y(h,P,j,[N,B]))}return x.length<2?null:t("nav",Object(s.a)(Object(s.a)({},i),{},{attrs:{role:"navigation","aria-label":p}}),x)}};function l(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(n.g)(t)+"/".concat(e).concat(a):t}a("6NbQ");var o={metaInfo:{title:"Articles"},components:{Pager:i},data:function(){return{search:"",currentPage:1,perPage:5}},computed:{searchResults:function(){var t=this;return this.$page.posts.edges.filter((function(e){var a=t.search.toLowerCase().trim();return e.node.title.toLowerCase().includes(a)?e.node.title.toLowerCase().includes(a):e.node.excerpt.toLowerCase().includes(a)?e.node.excerpt.toLowerCase().includes(a):e.node.author.toLowerCase().includes(a)?e.node.author.toLowerCase().includes(a):e.node.content.toLowerCase().includes(a)?e.node.content.toLowerCase().includes(a):e.node.category.title.toLowerCase().includes(a)?e.node.category.title.toLowerCase().includes(a):t.$luxon(e.node.date).toLowerCase().includes(a)?t.$luxon(e.node.date).toLowerCase().includes(a):void 0}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},c=(a("ScM3"),a("KHd+")),u=null,d=Object(c.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h2",{staticClass:"my-4"},[t._v("Articles")]),a("b-input-group",{staticStyle:{"max-width":"400px"},attrs:{size:"md"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t.searchResults.length>0?a("div",[1==t.searchResults.length?a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return a("article",{key:e.node.id},[a("div",{staticClass:"media my-5"},[a("div",{staticClass:"media-body"},[a("g-link",{attrs:{to:e.node.path}},[a("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),a("p",{staticClass:"text-dark mb-2",staticStyle:{"font-weight":"500"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),a("p",{staticClass:"text-dark"},[t._v(t._s(e.node.excerpt))])],1)])])})),t.searchResults.length>t.perPage?a("div",[a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1):t._e()],2):a("div",{staticClass:"my-4"},[a("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,"6adb2620",null);"function"==typeof u&&u(d);e.default=d.exports},JTJg:function(t,e,a){"use strict";var r=a("I+eb"),s=a("WjRb"),n=a("HYAF");r({target:"String",proto:!0,forced:!a("qxPZ")("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},ScM3:function(t,e,a){"use strict";a("+xzD")},TeQF:function(t,e,a){"use strict";var r=a("I+eb"),s=a("tycR").filter;r({target:"Array",proto:!0,forced:!a("Hd5f")("filter")},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},yq1k:function(t,e,a){"use strict";var r=a("I+eb"),s=a("TWQb").includes,n=a("RNIs");r({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);