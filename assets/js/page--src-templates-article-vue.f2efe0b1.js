(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"eF+F":function(t,e,s){},f5NF:function(t,e,s){"use strict";s("eF+F")},xtqI:function(t,e,s){"use strict";s.r(e);s("QWBl"),s("FZtP"),s("oVuX");var a={metaInfo:function(){return{title:this.$page.post.title}},methods:{getTags:function(){var t=[];return this.$page.post.tags.forEach((function(e){t.push(e.title)})),t.join(", ")}}},i=(s("f5NF"),s("KHd+")),o=null,n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"blogPost"},[s("p",[s("a",{attrs:{href:"/articles"}},[t._v("Articles")]),t._v(" / \n      "+t._s(t.$page.post.path.slice(10,-1).split("-").join(" ").replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).split(" ").join("-")))]),s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.title)}}),s("p",{staticClass:"mb-0",staticStyle:{"font-size":"20px"}},[t._v("By "+t._s(t.$page.post.author)+" - "+t._s(t._f("luxon")(t.$page.post.date)))]),t.$page.post.category?s("p",{staticClass:"mb-0 mt-1"},[s("span",{staticStyle:{"font-weight":"500"}},[t._v("Category:")]),t._v(" "+t._s(t.$page.post.category.title))]):t._e(),this.getTags()?s("p",{staticClass:"mb-0 mt-1"},[s("span",{staticStyle:{"font-weight":"500"}},[t._v("Tags:")]),t._v(" "+t._s(this.getTags()))]):t._e(),s("VueRemarkContent",{staticClass:"mt-5"})],1)])}),[],!1,null,"0a4f30f4",null);"function"==typeof o&&o(n);e.default=n.exports}}]);