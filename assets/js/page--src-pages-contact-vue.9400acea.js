(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{JNGo:function(t,e,a){},LGkc:function(t,e,a){t.exports=a.p+"assets/img/email.cf78973c.svg"},tkto:function(t,e,a){var r=a("I+eb"),i=a("ewvW"),n=a("33Wh");r({target:"Object",stat:!0,forced:a("0Dky")((function(){n(1)}))},{keys:function(t){return n(i(t))}})},tsNn:function(t,e,a){"use strict";a("JNGo")},w981:function(t,e,a){"use strict";a.r(e);var r=a("VTBJ");a("oVuX"),a("2B1R"),a("tkto"),a("sMBO"),a("07d7");function i(){return(i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}var n=Object.prototype.hasOwnProperty;var o,s,c,l=(o=!1,s=[],c={resolved:function(){return o},resolve:function(t){if(!o){o=!0;for(var e=0,a=s.length;e<a;e++)s[e](t)}},promise:{then:function(t){o?t():s.push(t)}}},{notify:function(){c.resolve()},wait:function(){return c.promise},render:function(t,e,a){this.wait().then((function(){a(window.grecaptcha.render(t,e))}))},reset:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.reset(t)})))},execute:function(t){void 0!==t&&(this.assertLoaded(),this.wait().then((function(){return window.grecaptcha.execute(t)})))},checkRecaptchaLoad:function(){n.call(window,"grecaptcha")&&n.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!c.resolved())throw new Error("ReCAPTCHA has not been loaded")}});"undefined"!=typeof window&&(window.vueRecaptchaApiLoaded=l.notify);var d={components:{VueRecaptcha:{name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!1},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},beforeMount:function(){if(this.loadRecaptchaScript&&!document.getElementById(this.recaptchaScriptId)){var t=document.createElement("script");t.id=this.recaptchaScriptId,t.src="https://"+this.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+this.language,t.async=!0,t.defer=!0,document.head.appendChild(t)}},mounted:function(){var t=this;l.checkRecaptchaLoad();var e=i({},this.$props,{callback:this.emitVerify,"expired-callback":this.emitExpired,"error-callback":this.emitError}),a=this.$slots.default?this.$el.children[0]:this.$el;l.render(a,e,(function(e){t.$widgetId=e,t.$emit("render",e)}))},methods:{reset:function(){l.reset(this.$widgetId)},execute:function(){l.execute(this.$widgetId)},emitVerify:function(t){this.$emit("verify",t)},emitExpired:function(){this.$emit("expired")},emitError:function(){this.$emit("error")}},render:function(t){return t("div",{},this.$slots.default)}}},metaInfo:{title:"Contact"},data:function(){return{form:{name:"",email:"",subject:"",message:""},validation:{human:!1,captchaError:!1,nameError:!1,emailError:!1,subjectError:!1,messageError:!1}}},methods:{encode:function(t){return Object.keys(t).map((function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])})).join("&")},validate:function(){var t=this,e=!0;this.validation.human?this.validation.captchaError=!1:(this.validation.captchaError=!0,e=!1),this.form.name?this.validation.nameError=!1:(this.validation.nameError=!0,e=!1);return this.form.email&&/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t.form.email)?this.validation.emailError=!1:(this.validation.emailError=!0,e=!1),this.form.subject?this.validation.subjectError=!1:(this.validation.subjectError=!0,e=!1),this.form.message?this.validation.messageError=!1:(this.validation.messageError=!0,e=!1),!!e},handleSubmit:function(t){var e=this;this.validate()&&fetch("https://script.google.com/macros/s/AKfycbxpa_5TqeAKKtIrJCLOXIu42QDQUGHiJpnj3ExPNdKdwyrK9RI/exec",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:this.encode(Object(r.a)({"form-name":t.target.getAttribute("name")},this.form))}).then((function(){return e.$router.push("/success")})).catch((function(t){return alert(t)}))},onVerify:function(t){t&&(this.validation.human=!0)}}},u=(a("tsNn"),a("KHd+")),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",[r("h2",{staticClass:"mb-4"},[t._v("Contact")]),r("div",[r("img",{staticClass:"contact-image mb-4",staticStyle:{"max-width":"200px"},attrs:{src:a("LGkc")}}),r("div",{staticStyle:{display:"none"}},[t._v("Icons made by "),r("a",{attrs:{href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"}},[t._v("Pixel perfect")]),t._v(" from "),r("a",{attrs:{href:"https://www.flaticon.com/",title:"Flaticon"}},[t._v("www.flaticon.com")])]),r("b-form",{attrs:{name:"contact",method:"post",action:"/success/"},on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[r("input",{attrs:{type:"hidden",name:"name",value:"contact"}}),r("p",{attrs:{hidden:""}},[r("label",[t._v("\n        Don’t fill this out: "),r("input",{attrs:{name:"bot-field"}})])]),r("b-form-group",{attrs:{id:"input-group-1",label:"Name:","label-for":"form-name"}},[r("b-form-input",{attrs:{id:"name",name:"name",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),this.validation.nameError?r("div",{staticStyle:{color:"red"}},[t._v("Please enter your name.")]):t._e()],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",name:"email",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),this.validation.emailError?r("div",{staticStyle:{color:"red"}},[t._v("Please enter a valid email address.")]):t._e()],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Subject:","label-for":"form-subject"}},[r("b-form-input",{attrs:{id:"subject",name:"subject",placeholder:"Enter subject"},model:{value:t.form.subject,callback:function(e){t.$set(t.form,"subject",e)},expression:"form.subject"}}),this.validation.subjectError?r("div",{staticStyle:{color:"red"}},[t._v("Please enter a subject.")]):t._e()],1),r("b-form-group",{attrs:{id:"input-group-4",label:"Message:","label-for":"message"}},[r("b-form-textarea",{attrs:{id:"message",name:"message",placeholder:"Enter message"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}}),this.validation.messageError?r("div",{staticStyle:{color:"red"}},[t._v("Please enter a message.")]):t._e()],1),r("div",{staticStyle:{"margin-bottom":"16px"}},[r("vue-recaptcha",{attrs:{sitekey:"6Ldk9nUaAAAAAHhS05g7v7mOV05VVG0NqrUrByHQ",type:"checkbox",loadRecaptchaScript:!0},on:{verify:t.onVerify}}),this.validation.captchaError?r("div",{staticStyle:{color:"red"}},[t._v("Please fill out the Captcha.")]):t._e()],1),r("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")])],1)],1)])}),[],!1,null,"82315fda",null);e.default=m.exports}}]);