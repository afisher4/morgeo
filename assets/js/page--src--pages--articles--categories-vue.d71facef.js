(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Hq1E:function(t,e,s){"use strict";s.r(e);s("TeQF"),s("SYor"),s("rB9j"),s("hByQ"),s("yq1k"),s("JTJg"),s("ToJy"),s("+2oP");var r={metaInfo:{title:"Categories"},data:function(){return{search:"",currentPage:1,perPage:2,selected:"A",options:[{item:"A",name:"Sort By Count"},{item:"B",name:"Sort Alphabetically"}]}},methods:{resetData:function(){Object.assign(this.$data,this.$options.data.apply(this)),this.mounted=!0}},computed:{searchResults:function(){var t=this;return this.$page.categories.edges.filter((function(e){var s=t.search.toLowerCase().trim();if(e.node.title.toLowerCase().includes(s))return e.node.title.toLowerCase().includes(s)}))},lists:function(){var t=this.searchResults;return"A"==this.selected?t.sort((function(t,e){return t.node.belongsTo.totalCount>e.node.belongsTo.totalCount?-1:0})):"B"==this.selected&&t.sort((function(t,e){return t.node.title>e.node.title?1:-1})),t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.searchResults.length}}},a=s("KHd+"),i=null,n=Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("p",[s("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / Categories")]),s("h2",{staticClass:"mb-4"},[t._v("Categories")]),s("div",{staticStyle:{"max-width":"400px"}},[s("b-input-group",{attrs:{size:"md"}},[s("b-input-group-prepend",{attrs:{"is-text":""}},[s("b-icon",{attrs:{icon:"search"}})],1),s("b-form-input",{attrs:{type:"search",name:"search",id:"search",placeholder:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),s("div",{staticClass:"mt-2"},[s("b-button",{on:{click:t.resetData}},[t._v("Clear")]),s("b-button",{staticClass:"ml-2",attrs:{variant:"primary","g-link":"",to:"/articles/tags"},on:{click:t.resetData}},[t._v("Search by Tag")])],1),s("b-form-radio-group",{staticClass:"mt-4",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled",stacked:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t.searchResults.length>0?s("div",[1==t.$page.categories.edges.length?s("div",[s("p",{staticClass:"mt-4 mb-0"},[t._v("1 category found.")])]):s("div",[s("p",{staticClass:"mt-4 mb-0"},[t._v(t._s(t.$page.categories.edges.length)+" categories found.")])]),t._l(t.lists,(function(e){return s("div",{key:e.node.id},[s("div",{staticClass:"media mt-5"},[s("div",{staticClass:"media-body"},[s("g-link",{attrs:{to:e.node.path}},[s("h4",{staticClass:"my-0"},[t._v(t._s(e.node.title)+" ("+t._s(e.node.belongsTo.totalCount)+")")])])],1)])])})),t.searchResults.length>t.perPage?s("b-pagination",{staticClass:"mb-0 mt-5",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2):s("div",{staticClass:"my-4"},[s("p",[t._v("Your search didn't return any results. Please try again.")])])],1)}),[],!1,null,null,null);"function"==typeof i&&i(n);e.default=n.exports},JTJg:function(t,e,s){"use strict";var r=s("I+eb"),a=s("WjRb"),i=s("HYAF");r({target:"String",proto:!0,forced:!s("qxPZ")("includes")},{includes:function(t){return!!~String(i(this)).indexOf(a(t),arguments.length>1?arguments[1]:void 0)}})},TeQF:function(t,e,s){"use strict";var r=s("I+eb"),a=s("tycR").filter;r({target:"Array",proto:!0,forced:!s("Hd5f")("filter")},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},ToJy:function(t,e,s){"use strict";var r=s("I+eb"),a=s("HAuM"),i=s("ewvW"),n=s("0Dky"),o=s("pkCn"),c=[],l=c.sort,u=n((function(){c.sort(void 0)})),d=n((function(){c.sort(null)})),g=o("sort");r({target:"Array",proto:!0,forced:u||!d||!g},{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),a(t))}})},yq1k:function(t,e,s){"use strict";var r=s("I+eb"),a=s("TWQb").includes,i=s("RNIs");r({target:"Array",proto:!0},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")}}]);