(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"9yVz":function(t,e,a){"use strict";a("P2rC")},P2rC:function(t,e,a){},xtqI:function(t,e,a){"use strict";a.r(e);a("07d7"),a("PKPk"),a("3bBZ"),a("oVuX"),a("rB9j"),a("EnZy"),a("UxlC"),a("+2oP");var s={components:{Facebook:function(){return a.e(1).then(a.t.bind(null,"rI/W",7)).then((function(t){return t.Facebook})).catch()},Twitter:function(){return a.e(1).then(a.t.bind(null,"rI/W",7)).then((function(t){return t.Twitter})).catch()},Email:function(){return a.e(1).then(a.t.bind(null,"rI/W",7)).then((function(t){return t.Email})).catch()}},metaInfo:function(){return{title:this.$page.post.title}},methods:{slug:function(){var t=this.$page.post.path.slice(10,-1).split("-").join(" ").replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).split(" ").join("-");return t},url:function(){return"https://liquidcrystalmembrane.com"+this.$page.post.path},breadcrumbs:function(){return[{text:"Articles",to:"/articles"},{text:this.slug(),active:!0}]}}},i=(a("9yVz"),a("KHd+")),r=null,n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("article",{staticClass:"blogPost"},[a("b-breadcrumb",{attrs:{items:t.breadcrumbs()}}),a("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"my-4",domProps:{innerHTML:t._s(t.$page.post.title)}}),a("div",{staticClass:"mb-2"},[a("span",{staticStyle:{"font-size":"20.5px"}},[t._v("By "+t._s(t.$page.post.author)+" - "+t._s(t._f("luxon")(t.$page.post.date)))])]),t.$page.post.category?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n      ")],1),a("g-link",{attrs:{to:t.$page.post.category.path}},[t._v(t._s(t.$page.post.category.title))])],1):t._e(),t.$page.post.tags.length>0?a("p",{staticClass:"mb-0 mt-1"},[a("span",{staticStyle:{"font-weight":"500"}},[a("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n      ")],1),t._l(t.$page.post.tags,(function(e,s){return a("span",{key:s},[a("g-link",{attrs:{to:e.path}},[t._v(t._s(e.title))]),s+1<t.$page.post.tags.length?a("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),a("VueRemarkContent",{staticClass:"article-text mt-5"}),a("div",{staticClass:"mt-5"},[a("ClientOnly",[a("facebook",{staticClass:"mr-3 social-btn",attrs:{url:t.url(),scale:"3"}}),a("twitter",{staticClass:"mr-3 social-btn",attrs:{url:t.url(),title:t.$page.post.title,scale:"3"}}),a("email",{staticClass:"social-btn",attrs:{url:t.url(),subject:t.$page.post.title,scale:"3"}})],1)],1),a("Disqus",{staticClass:"mt-5",attrs:{shortname:"liquid-crystal-membrane",identifier:t.$page.post.title}})],1)])}),[],!1,null,"5bf37082",null);"function"==typeof r&&r(n);e.default=n.exports}}]);