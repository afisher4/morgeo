(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{F3eR:function(t,e,a){"use strict";a.r(e);a("QWBl"),a("FZtP"),a("TeQF"),a("SYor"),a("rB9j"),a("hByQ"),a("yq1k"),a("JTJg"),a("fbCW"),a("+2oP");var r={metaInfo:{title:"Articles"},components:{Pager:a("Wsvf").a},data:function(){return{search:"",currentPage:1,perPage:3,categoryFilter:"All Categories",tagFilter:"All Tags"}},methods:{getTagsLowercaseArray:function(t){var e=[];return t.forEach((function(t){e.push(t.title.toLowerCase())})),e},getCategoriesArray:function(t){var e=[];return t.forEach((function(t){e.push(t.node.title)})),e.unshift("All Categories"),e},getTagsArray:function(t){var e=[];return t.forEach((function(t){e.push(t.node.title)})),e.unshift("All Tags"),e},resetData:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.mounted=!0}},computed:{searchResults:function(){var t=this;return this.$page.posts.edges.filter((function(e){var a=t.search.toLowerCase().trim(),r=!1,s=!1;if(("All Categories"==t.categoryFilter||e.node.category.title.toLowerCase().includes(t.categoryFilter.toLowerCase()))&&(r=!0),(""==t.tagFilter||"All Tags"==t.tagFilter||t.getTagsLowercaseArray(e.node.tags).find((function(e){return e.includes(t.tagFilter.toLowerCase())})))&&(s=!0),r&&s){if(e.node.title.toLowerCase().includes(a))return e.node.title.toLowerCase().includes(a);if(e.node.excerpt.toLowerCase().includes(a))return e.node.excerpt.toLowerCase().includes(a);if(e.node.author.toLowerCase().includes(a))return e.node.author.toLowerCase().includes(a);if(e.node.content.toLowerCase().includes(a))return e.node.content.toLowerCase().includes(a);if(e.node.category.title.toLowerCase().includes(a))return e.node.category.title.toLowerCase().includes(a);if(t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(a)})))return t.getTagsLowercaseArray(e.node.tags).find((function(t){return t.includes(a)}));if(t.$luxon(e.node.date).toLowerCase().includes(a))return t.$luxon(e.node.date).toLowerCase().includes(a)}}))},lists:function(){return this.searchResults.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},s=(a("T4Dg"),a("KHd+")),n=null,i=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("h2",{staticClass:"mb-5 mt-4"},[t._v("Articles")]),a("div",{staticStyle:{"max-width":"400px"}},[a("b-input-group",{attrs:{size:"md"}},[a("b-input-group-prepend",{attrs:{"is-text":""}},[a("b-icon",{attrs:{icon:"search"}})],1),a("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-select",{staticClass:"mt-2",attrs:{options:t.getCategoriesArray(t.$page.categories.edges),clearable:!1},model:{value:t.categoryFilter,callback:function(e){t.categoryFilter=e},expression:"categoryFilter"}}),a("v-select",{staticClass:"mt-2",attrs:{options:t.getTagsArray(t.$page.tags.edges),clearable:!1},model:{value:t.tagFilter,callback:function(e){t.tagFilter=e},expression:"tagFilter"}})],1),a("div",[a("b-button",{staticClass:"mr-2 mt-2",on:{click:t.resetData}},[t._v("Clear")]),a("b-button",{staticClass:"mr-2 mt-2",attrs:{variant:"primary","g-link":"",to:"/articles/categories"}},[t._v("Search by Category")]),a("b-button",{staticClass:"mt-2",attrs:{variant:"primary","g-link":"",to:"/articles/tags"}},[t._v("Search by Tag")])],1),t.searchResults.length>0?a("div",[1==t.searchResults.length?a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v("1 article found.")])]):a("div",[a("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.searchResults.length)+" articles found.")])]),t._l(t.lists,(function(e){return a("article",{key:e.node.id},[a("div",{staticClass:"media my-5"},[a("div",{staticClass:"media-body"},[a("g-link",{attrs:{to:e.node.path}},[a("h4",{staticClass:"mt-0"},[t._v(t._s(e.node.title))])]),a("p",{staticClass:"mb-2",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(e.node.author)+" - "+t._s(t._f("luxon")(e.node.date)))]),a("p",{staticClass:"mb-0"},[t._v(t._s(e.node.excerpt))]),e.node.category?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n            ")],1),a("g-link",{attrs:{to:e.node.category.path}},[t._v(t._s(e.node.category.title))])],1):t._e(),e.node.tags.length>0?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n            ")],1),t._l(e.node.tags,(function(r,s){return a("span",{key:s},[a("g-link",{attrs:{to:r.path}},[t._v(t._s(r.title))]),s+1<e.node.tags.length?a("span",[t._v(", ")]):t._e()],1)}))],2):t._e()],1)])])})),t.searchResults.length>t.perPage?a("b-pagination",{staticClass:"mb-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):a("div",{staticClass:"my-4"},[a("p",[t._v("Your search didn't return any results. Please try again.")])])])}),[],!1,null,"0fb0d328",null);"function"==typeof n&&n(i);e.default=i.exports},JTJg:function(t,e,a){"use strict";var r=a("I+eb"),s=a("WjRb"),n=a("HYAF");r({target:"String",proto:!0,forced:!a("qxPZ")("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},T4Dg:function(t,e,a){"use strict";a("a21Z")},TeQF:function(t,e,a){"use strict";var r=a("I+eb"),s=a("tycR").filter;r({target:"Array",proto:!0,forced:!a("Hd5f")("filter")},{filter:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},Wsvf:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("Kw5r");var r=a("DOVJ"),s=(a("Y6W1"),a("VTBJ")),n=(a("qePV"),a("rB9j"),a("UxlC"),a("2B1R"),a("ma9I"),a("fVfk")),i={functional:!0,props:{info:{type:Object,required:!0},showLinks:{type:Boolean,default:!0},showNavigation:{type:Boolean,default:!0},firstLabel:{type:String,default:"«"},firstClass:{type:String,default:""},prevLabel:{type:String,default:"‹"},prevClass:{type:String,default:""},nextLabel:{type:String,default:"›"},nextClass:{type:String,default:""},lastLabel:{type:String,default:"»"},lastClass:{type:String,default:""},navClass:{type:String,default:""},linkClass:{type:String,default:""},range:{type:Number,default:5},activeLinkClass:{type:String,default:void 0},exactActiveLinkClass:{type:String,default:void 0},ariaLabel:{type:String,default:"Pagination Navigation"},ariaLinkLabel:{type:String,default:"Go to page %n"},ariaFirstLabel:{type:String,default:"Go to first page"},ariaCurrentLabel:{type:String,default:"Current page. Page %n"},ariaPrevLabel:{type:String,default:"Go to previous page. Page %n"},ariaNextLabel:{type:String,default:"Go to next page. Page %n"},ariaLastLabel:{type:String,default:"Go to last page. Page %n"}},render:function(t,e){var a=e.props,i=e.data,l=e.parent,c=a.info,u=a.showLinks,g=a.showNavigation,d=a.ariaLabel,f=function(t,e){var a=t.currentPage,r=void 0===a?1:a,s=t.totalPages,n=void 0===s?1:s,i=Math.ceil(e/2),o=Math.floor(r-i),l=Math.floor(r+i);n<=e?(o=0,l=n):r<=i?(o=0,l=e):r+i>=n&&(o=n-e,l=n);for(var c=[],u=o+1;u<=l;u++)c.push(u);return{current:r,total:n,start:o,end:l,pages:c}}(c,a.range),p=f.current,v=f.total,h=f.pages,b=f.start,y=f.end,C=Object(n.d)(l.$route),L=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";e===p&&(i=a.ariaCurrentLabel);var c={to:o(C,e),exact:!0};return a.activeLinkClass&&(c.activeClass=a.activeLinkClass),a.exactActiveLinkClass&&(c.exactActiveClass=a.exactActiveLinkClass),t(r.a,{class:[a.linkClass,l],attrs:Object(s.a)(Object(s.a)({},c),{},{"aria-label":i.replace("%n",e),"aria-current":p===e})},[n])},m=u?h.map((function(t){return L(t,t,a.ariaLinkLabel)})):[];if(g){var w=a.firstLabel,_=a.prevLabel,k=a.nextLabel,S=a.lastLabel,x=a.ariaFirstLabel,P=a.ariaPrevLabel,A=a.ariaNextLabel,F=a.ariaLastLabel,T=a.firstClass,R=a.prevClass,j=a.nextClass,B=a.lastClass,N=a.navClass;p>1&&m.unshift(L(p-1,_,P,[R,N])),b>0&&m.unshift(L(1,w,x,[T,N])),p<v&&m.push(L(p+1,k,A,[j,N])),y<v&&m.push(L(v,S,F,[B,N]))}return m.length<2?null:t("nav",Object(s.a)(Object(s.a)({},i),{},{attrs:{role:"navigation","aria-label":d}}),m)}};function o(t,e){var a=/\/$/.test(t)?"/":"";return e>1?Object(n.g)(t)+"/".concat(e).concat(a):t}a("6NbQ")},a21Z:function(t,e,a){},fbCW:function(t,e,a){"use strict";var r=a("I+eb"),s=a("tycR").find,n=a("RNIs"),i=!0;"find"in[]&&Array(1).find((function(){i=!1})),r({target:"Array",proto:!0,forced:i},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("find")},yq1k:function(t,e,a){"use strict";var r=a("I+eb"),s=a("TWQb").includes,n=a("RNIs");r({target:"Array",proto:!0},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")}}]);