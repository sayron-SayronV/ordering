(window.webpackJsonpOrderingUI=window.webpackJsonpOrderingUI||[]).push([[0],{579:function(t,n,e){"use strict";function i(t,n){var e,i;return"boolean"==typeof(null==n?void 0:n.enabled)?n.enabled:null===(i=null===(e=null==t?void 0:t.__default)||void 0===e?void 0:e.enabled)||void 0===i||i}e.d(n,"a",(function(){return i}))},674:function(t,n,e){"use strict";e.r(n),e.d(n,"LegacyDestination",(function(){return O})),e.d(n,"ajsDestinations",(function(){return _}));var i=e(3),r=e(51),o=e(43),a=e(16),s=e(96),c=e(59),u=e(58),d=e(579),l=e(184),h=e(188),v=e(44),f=e(64),b=e(328),p=e(81),g=e(100);function y(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function j(t,n){return void 0===n&&(n=!1),n?btoa(t).replace(/=/g,""):void 0}function m(t,n,e,r,o,a){return Object(i.b)(this,void 0,void 0,(function(){var s,c,u,d,l,h,v,f;return Object(i.d)(this,(function(b){switch(b.label){case 0:s=y(e),c=j(s,a),u=Object(p.b)(),d="".concat(u,"/integrations/").concat(null!=c?c:s,"/").concat(r,"/").concat(null!=c?c:s,".dynamic.js.gz"),b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Object(g.a)(d)];case 2:return b.sent(),function(t,n,e){var r,o;try{var a=(null!==(o=null===(r=null===window||void 0===window?void 0:window.performance)||void 0===r?void 0:r.getEntriesByName(t,"resource"))&&void 0!==o?o:[])[0];a&&n.stats.gauge("legacy_destination_time",Math.round(a.duration),Object(i.f)([e],a.duration<100?["cached"]:[],!0))}catch(t){}}(d,t,e),[3,4];case 3:throw l=b.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(e),"failed"]),l;case 4:return h=window["".concat(s,"Deps")],[4,Promise.all(h.map((function(t){return Object(g.a)(u+t+".gz")})))];case 5:return b.sent(),window["".concat(s,"Loader")](),(v=window["".concat(s,"Integration")]).Integration&&(v({user:function(){return n.user()},addIntegration:function(){}}),v=v.Integration),(f=new v(o)).analytics=n,[2,f]}}))}))}function w(t,n){return Object(i.b)(this,void 0,void 0,(function(){var e,r=this;return Object(i.d)(this,(function(s){switch(s.label){case 0:return e=[],Object(o.a)()?[2,n]:[4,Object(h.a)((function(){return n.length>0&&Object(o.b)()}),(function(){return Object(i.b)(r,void 0,void 0,(function(){var r,o;return Object(i.d)(this,(function(i){switch(i.label){case 0:return(r=n.pop())?[4,Object(c.a)(r,t)]:[2];case 1:return o=i.sent(),o instanceof a.a||e.push(r),[2]}}))}))}))];case 1:return s.sent(),e.map((function(t){return n.pushWithBackoff(t)})),[2,n]}}))}))}var O=function(){function t(t,n,e,r){void 0===e&&(e={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=n,this.settings=Object(i.a)({},e),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=r,this.buffer=r.disableClientPersistence?new v.b(4,[]):new f.a(4,"dest-".concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,n){return Object(i.b)(this,void 0,void 0,(function(){var e,r=this;return Object(i.d)(this,(function(i){switch(i.label){case 0:return this._ready||void 0!==this.onReady?[2]:(e=this,[4,m(t,n,this.name,this.version,this.settings,this.options.obfuscate)]);case 1:e.integration=i.sent(),this.onReady=new Promise((function(t){r.integration.once("ready",(function(){r._ready=!0,t(!0)}))})),this.onInitialize=new Promise((function(t){r.integration.on("initialize",(function(){r._initialized=!0,t(!0)}))}));try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(n){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),n}return[2]}}))}))},t.prototype.unload=function(t,n){return function(t,n,e){return Object(i.b)(this,void 0,void 0,(function(){var r,o,a,s;return Object(i.d)(this,(function(i){return r=Object(p.b)(),o=y(t),a=j(t,e),s="".concat(r,"/integrations/").concat(null!=a?a:o,"/").concat(n,"/").concat(null!=a?a:o,".dynamic.js.gz"),[2,Object(g.b)(s)]}))}))}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];this.middleware=(t=this.middleware).concat.apply(t,n)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&(Object(o.a)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,n,e){var r,o;return Object(i.b)(this,void 0,void 0,(function(){var s,c,l,h,v,f;return Object(i.d)(this,(function(p){switch(p.label){case 0:if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(s=null===(o=null===(r=this.options)||void 0===r?void 0:r.plan)||void 0===o?void 0:o.track,c=t.event.event,s&&c&&"Segment.io"!==this.name){if(l=s[c],!Object(d.a)(s,l))return t.updateEvent("integrations",Object(i.a)(Object(i.a)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new a.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",Object(i.a)(Object(i.a)({},t.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&!1===(null==l?void 0:l.integrations[this.name]))return t.cancel(new a.b({retry:!1,reason:"Event ".concat(c," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,Object(b.applyDestinationMiddleware)(this.name,t.event,this.middleware)];case 1:if(null===(h=p.sent()))return[2,t];v=new n(h,{}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(e),"integration_name:".concat(this.name)]),p.label=2;case 2:return p.trys.push([2,5,,6]),this.integration?[4,Object(u.a)(this.integration.invoke.call(this.integration,e,v))]:[3,4];case 3:p.sent(),p.label=4;case 4:return[3,6];case 5:throw f=p.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(e),"integration_name:".concat(this.name)]),f;case 6:return[2,t]}}))}))},t.prototype.track=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Track,"track")]}))}))},t.prototype.page=function(t){var n;return Object(i.b)(this,void 0,void 0,(function(){var e=this;return Object(i.d)(this,(function(i){return(null===(n=this.integration)||void 0===n?void 0:n._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return e.send(t,r.Page,"page")}))]}))}))},t.prototype.identify=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Identify,"identify")]}))}))},t.prototype.alias=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Alias,"alias")]}))}))},t.prototype.group=function(t){return Object(i.b)(this,void 0,void 0,(function(){return Object(i.d)(this,(function(n){return[2,this.send(t,r.Group,"group")]}))}))},t.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout((function(){return Object(i.b)(t,void 0,void 0,(function(){var t;return Object(i.d)(this,(function(n){switch(n.label){case 0:return this.flushing=!0,t=this,[4,w(this,this.buffer)];case 1:return t.buffer=n.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},t}();function _(t,n,e,i){var r,o;if(void 0===n&&(n={}),void 0===e&&(e={}),Object(s.b)())return[];t.plan&&((e=null!=e?e:{}).plan=t.plan);var a=null!==(o=null===(r=t.middlewareSettings)||void 0===r?void 0:r.routingRules)&&void 0!==o?o:[],c=Object(l.a)(t,null!=e?e:{});return Object.entries(t.integrations).map((function(t){var r,o=t[0],s=t[1];if(!o.startsWith("Segment")){var u=!1===n.All&&void 0===n[o];if(!1!==n[o]&&!u){var d=s.type,l=s.bundlingStatus,h=s.versionSettings;if(("unbundled"!==l&&("browser"===d||(null===(r=null==h?void 0:h.componentTypes)||void 0===r?void 0:r.includes("browser")))||"Segment.io"===o)&&"Iterable"!==o){var v=function(t){var n,e,i,r;return null!==(r=null!==(e=null===(n=t.versionSettings)||void 0===n?void 0:n.override)&&void 0!==e?e:null===(i=t.versionSettings)||void 0===i?void 0:i.version)&&void 0!==r?r:"latest"}(s),f=new O(o,v,c[o],e);return a.filter((function(t){return t.destinationName===o})).length>0&&i&&f.addMiddleware(i),f}}}})).filter((function(t){return void 0!==t}))}}}]);