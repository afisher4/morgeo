(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5nT/":function(t,e,s){"use strict";s.r(e);s("ToJy"),s("+2oP");var a={metaInfo:{title:"Tags"},data:function(){return{currentPage:1,perPage:4,selected:"A",options:[{item:"A",name:"Sort By Count"},{item:"B",name:"Sort Alphabetically"}]}},computed:{lists:function(){var t=this.$page.tags.edges;return"A"==this.selected?t.sort((function(t,e){return t.node.belongsTo.totalCount>e.node.belongsTo.totalCount?-1:0})):"B"==this.selected&&t.sort((function(t,e){return t.node.title>e.node.title?1:-1})),t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},totalRows:function(){return this.$page.tags.edges.length}}},n=s("KHd+"),o=null,r=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("p",[s("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / Tags")]),s("h2",[t._v("Tags")]),s("div",{staticClass:"mt-2"},[s("g-link",{attrs:{to:"/articles/categories"}},[t._v("Search by Category")])],1),s("b-form-radio-group",{staticClass:"mt-4",attrs:{options:t.options,"value-field":"item","text-field":"name","disabled-field":"notEnabled",stacked:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._l(t.lists,(function(e){return s("div",{key:e.node.id},[s("div",{staticClass:"media mt-5"},[s("div",{staticClass:"media-body"},[s("g-link",{attrs:{to:e.node.path}},[s("h4",{staticClass:"my-0"},[t._v(t._s(e.node.title)+" ("+t._s(e.node.belongsTo.totalCount)+")")])])],1)])])})),t.$page.tags.edges.length>t.perPage?s("b-pagination",{staticClass:"mb-0 mt-5",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}):t._e()],2)}),[],!1,null,null,null);"function"==typeof o&&o(r);e.default=r.exports},ToJy:function(t,e,s){"use strict";var a=s("I+eb"),n=s("HAuM"),o=s("ewvW"),r=s("0Dky"),i=s("pkCn"),l=[],c=l.sort,u=r((function(){l.sort(void 0)})),d=r((function(){l.sort(null)})),g=i("sort");a({target:"Array",proto:!0,forced:u||!d||!g},{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),n(t))}})}}]);