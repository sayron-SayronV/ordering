(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[4],{644:function(r,t,e){"use strict";function i(r){return"object"===Object.prototype.toString.call(r).slice(8,-1).toLowerCase()}e.d(t,"a",(function(){return i}))},737:function(r,t,e){"use strict";function i(r,t){return Object.keys(t).reduce((function(e,i){i.startsWith(r)&&(e[i.substr(r.length)]=t[i]);return e}),{})}e.r(t),e.d(t,"queryString",(function(){return s}));var a=e(201),n=e(644);function s(r,t){var e=document.createElement("a");e.href=t;var s=e.search.slice(1).split("&").reduce((function(r,t){var e=t.split("="),i=e[0],n=e[1];return r[i]=Object(a.a)(n),r}),{}),u=[],o=s.ajs_uid,c=s.ajs_event,d=s.ajs_aid,j=Object(n.a)(r.options.useQueryString)?r.options.useQueryString:{},_=j.aid,f=void 0===_?/.+/:_,p=j.uid,v=void 0===p?/.+/:p;if(d){var y=Array.isArray(s.ajs_aid)?s.ajs_aid[0]:s.ajs_aid;f.test(y)&&r.setAnonymousId(y)}if(o){var l=Array.isArray(s.ajs_uid)?s.ajs_uid[0]:s.ajs_uid;if(v.test(l)){var b=i("ajs_trait_",s);u.push(r.identify(l,b))}}if(c){var g=Array.isArray(s.ajs_event)?s.ajs_event[0]:s.ajs_event,h=i("ajs_prop_",s);u.push(r.track(g,h))}return Promise.all(u)}}}]);