(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{CCFp:function(t,e,r){},dIm7:function(t,e,r){"use strict";r("CCFp")},xtqI:function(t,e,r){"use strict";r.r(e);r("07d7"),r("PKPk"),r("3bBZ"),r("oVuX"),r("rB9j"),r("EnZy"),r("UxlC"),r("+2oP");var a={data:function(){return{urlHover:!1}},components:{Facebook:function(){return r.e(1).then(r.t.bind(null,"rI/W",7)).then((function(t){return t.Facebook})).catch()},Twitter:function(){return r.e(1).then(r.t.bind(null,"rI/W",7)).then((function(t){return t.Twitter})).catch()},WhatsApp:function(){return r.e(1).then(r.t.bind(null,"rI/W",7)).then((function(t){return t.WhatsApp})).catch()},Telegram:function(){return r.e(1).then(r.t.bind(null,"rI/W",7)).then((function(t){return t.Telegram})).catch()},Email:function(){return r.e(1).then(r.t.bind(null,"rI/W",7)).then((function(t){return t.Email})).catch()}},metaInfo:function(){return{title:this.$page.post.title}},methods:{urlHoverTrue:function(){this.urlHover=!0},urlHoverFalse:function(){this.urlHover=!1},slug:function(){var t=this.$page.post.path.slice(10,-1).split("-").join(" ").replace(/\w\S*/g,(function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).split(" ").join("-");return t},url:function(){return"https://liquidcrystalmembrane.com"+this.$page.post.path},breadcrumbs:function(){return[{text:"Articles",to:"/articles"},{text:this.slug(),active:!0}]}}},i=(r("dIm7"),r("KHd+")),s=null,o=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("article",{staticClass:"blogPost"},[r("b-breadcrumb",{attrs:{items:t.breadcrumbs()}}),r("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"my-4",domProps:{innerHTML:t._s(t.$page.post.title)}}),r("div",{staticClass:"mb-2"},[r("span",{staticStyle:{"font-size":"20.5px"}},[t._v("By "+t._s(t.$page.post.author)+" - "+t._s(t._f("luxon")(t.$page.post.date)))])]),t.$page.post.category?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/categories",title:"Search By Category"}},[t._v("Category")]),t._v(":\n      ")],1),r("g-link",{attrs:{to:t.$page.post.category.path}},[t._v(t._s(t.$page.post.category.title))])],1):t._e(),t.$page.post.tags.length>0?r("p",{staticClass:"mb-0 mt-1"},[r("span",{staticStyle:{"font-weight":"500"}},[r("g-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{to:"/articles/tags",title:"Search By Tag"}},[t._v("Tags")]),t._v(":\n      ")],1),t._l(t.$page.post.tags,(function(e,a){return r("span",{key:a},[r("g-link",{attrs:{to:e.path}},[t._v(t._s(e.title))]),a+1<t.$page.post.tags.length?r("span",[t._v(", ")]):t._e()],1)}))],2):t._e(),r("VueRemarkContent",{staticClass:"article-text mt-5"}),r("div",{staticClass:"mt-5"},[r("ClientOnly",[r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3",attrs:{title:"Share on Facebook"}},[r("facebook",{staticClass:"social-btn",attrs:{url:t.url(),scale:"3"}})],1),r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3",attrs:{title:"Share on Twitter"}},[r("twitter",{staticClass:"social-btn",attrs:{url:t.url(),title:t.$page.post.title,scale:"3"}})],1),r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3",attrs:{title:"Share on WhatsApp"}},[r("whats-app",{staticClass:"social-btn",attrs:{url:t.url(),title:t.$page.post.title,scale:"3"}})],1),r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3",attrs:{title:"Share on Telegram"}},[r("telegram",{staticClass:"social-btn",attrs:{url:t.url(),scale:"3"}})],1),r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"d-inline-block mr-3",attrs:{title:"Share by Email"}},[r("email",{staticClass:"social-btn",attrs:{url:t.url(),subject:t.$page.post.title,scale:"3"}})],1),r("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}},{name:"clipboard",rawName:"v-clipboard",value:function(){return t.url()},expression:"() => url()"}],staticClass:"d-inline-block",attrs:{title:"Copy Link"}},[r("div",{staticStyle:{height:"3px",cursor:"pointer"},on:{mouseover:function(e){return t.urlHoverTrue()},mouseleave:function(e){return t.urlHoverFalse()}}}),r("b-button",{staticClass:"url-btn",class:{urlHoverCss:t.urlHover},staticStyle:{height:"42px"},attrs:{variant:"secondary"}},[r("b-icon",{attrs:{icon:"link45deg"}})],1),r("div",{staticStyle:{height:"3px",cursor:"pointer"},on:{mouseover:function(e){return t.urlHoverTrue()},mouseleave:function(e){return t.urlHoverFalse()}}})],1)])],1),r("Disqus",{staticClass:"mt-5",attrs:{shortname:"liquid-crystal-membrane",identifier:t.$page.post.title}})],1)])}),[],!1,null,"0a9c7cb0",null);"function"==typeof s&&s(o);e.default=o.exports}}]);