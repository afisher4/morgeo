(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{aYcc:function(t,e,a){"use strict";a("ykqQ")},xtqI:function(t,e,a){"use strict";a.r(e);var s={metaInfo:function(){return{title:this.$page.post.title}}},i=(a("aYcc"),a("KHd+")),o=null,n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"blogPost"},[a("p",[a("g-link",{attrs:{to:"/articles"}},[t._v("Articles")]),t._v(" / \n      "+t._s(t.$page.post.path.slice(10,-1).split("-").join(" ").replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).split(" ").join("-")))],1),a("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.title)}}),a("p",{staticClass:"mb-0",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(t.$page.post.author)+" - "+t._s(t._f("luxon")(t.$page.post.date)))]),t.$page.post.category?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n      ")],1),a("g-link",{attrs:{to:t.$page.post.category.path}},[t._v(t._s(t.$page.post.category.title))])],1):t._e(),t.$page.post.tags.length>0?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n      ")],1),t._l(t.$page.post.tags,(function(e,s){return a("span",{key:s},[a("g-link",{attrs:{to:e.path}},[t._v(t._s(e.title))]),s+1<t.$page.post.tags.length?a("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),a("VueRemarkContent",{staticClass:"mt-5"}),a("Disqus",{staticClass:"mt-5",attrs:{shortname:"liquid-crystal-membrane",identifier:t.$page.post.title}})],1)])}),[],!1,null,"1c0c480a",null);"function"==typeof o&&o(n);e.default=n.exports},ykqQ:function(t,e,a){}}]);