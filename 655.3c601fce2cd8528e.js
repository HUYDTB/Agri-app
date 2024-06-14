(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{37655:function(e,t,r){"use strict";var n=r(64836),o=n(r(56690)),i=n(r(89728)),a=n(r(94993)),u=n(r(73808)),c=n(r(61655));Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});var d=r(38754),l=r(85893),s=d._(r(67294)),f=d._(r(40090)),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function h(e){var t=e.res,r=e.err;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}var y={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}},v=function(e){function t(){var e,r;return(0,o.default)(this,t),e=t,r=arguments,e=(0,u.default)(e),(0,a.default)(this,!function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(e){return!1}}()?e.apply(this,r):Reflect.construct(e,r||[],(0,u.default)(this).constructor))}return(0,c.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.statusCode,r=e.withDarkMode,n=this.props.title||p[t]||"An unexpected error has occurred";return(0,l.jsxs)("div",{style:y.error,children:[(0,l.jsx)(f.default,{children:(0,l.jsx)("title",{children:t?t+": "+n:"Application error: a client-side exception has occurred"})}),(0,l.jsxs)("div",{style:y.desc,children:[(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(void 0===r||r?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),t?(0,l.jsx)("h1",{className:"next-error-h1",style:y.h1,children:t}):null,(0,l.jsx)("div",{style:y.wrap,children:(0,l.jsxs)("h2",{style:y.h2,children:[this.props.title||t?n:(0,l.jsx)(l.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}])}(s.default.Component);v.displayName="ErrorPage",v.getInitialProps=h,v.origGetInitialProps=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38925:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});var n=r(38754)._(r(67294)).default.createContext({})},96452:function(e,t){"use strict";function r(e){var t=void 0===e?{}:e,r=t.ampFirst,n=t.hybrid,o=t.hasQuery;return void 0!==r&&r||void 0!==n&&n&&void 0!==o&&o}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},40090:function(e,t,r){"use strict";var n=r(64836)(r(38416));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return p},default:function(){return b}});var i=r(38754),a=r(61757),u=r(85893),c=a._(r(67294)),d=i._(r(26807)),l=r(38925),s=r(11295),f=r(96452);function p(e){void 0===e&&(e=!1);var t=[(0,u.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}r(43696);var y=["name","httpEquiv","charSet","itemProp"];function v(e,t){var r,i,a,u,d=t.inAmpMode;return e.reduce(h,[]).reverse().concat(p(d).reverse()).filter((r=new Set,i=new Set,a=new Set,u={},function(e){var t=!0,n=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){n=!0;var o=e.key.slice(e.key.indexOf("$")+1);r.has(o)?t=!1:r.add(o)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var c=0,d=y.length;c<d;c++){var l=y[c];if(e.props.hasOwnProperty(l)){if("charSet"===l)a.has(l)?t=!1:a.add(l);else{var s=e.props[l],f=u[l]||new Set;("name"!==l||!n)&&f.has(s)?t=!1:(f.add(s),u[l]=f)}}}}return t})).reverse().map(function(e,t){var r=e.key||t;if(!d&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){(0,n.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:r})})}var b=function(e){var t=e.children,r=(0,c.useContext)(l.AmpStateContext),n=(0,c.useContext)(s.HeadManagerContext);return(0,u.jsx)(d.default,{reduceComponentsToState:v,headManager:n,inAmpMode:(0,f.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26807:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});var n=r(67294),o=n.useLayoutEffect,i=n.useEffect;function a(e){var t=e.headManager,r=e.reduceComponentsToState;function a(){if(t&&t.mountedInstances){var o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(function(){var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),function(){var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(function(){return t&&(t._pendingUpdate=a),function(){t&&(t._pendingUpdate=a)}}),i(function(){return t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),function(){t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)}}),null}},43696:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});var r=function(e){}}}]);