(this["webpackJsonpreact-calculator-app"]=this["webpackJsonpreact-calculator-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,c=a(2),r=a(5),i=a.n(r),o=a(6),l=a.n(o),u=a(3),s=["7","8","9","4","5","6","1","2","3","0"],p={"/":{name:"divide",symbol:"\xf7",func:function(e,t){return e/t}},"*":{name:"multiply",symbol:"\xd7",func:function(e,t){return e*t}},"-":{name:"subtract",symbol:"\u2212",func:function(e,t){return e-t}},"+":{name:"add",symbol:"+",func:function(e,t){return e+t}},"=":{name:"equals",symbol:"=",func:function(e,t){return t}},Enter:{name:"enter",symbol:"=",func:function(e,t){return t}}},d=function(e){var t=navigator.language||"en-US",a=parseFloat(e).toLocaleString(t,{useGrouping:!0,maximumFractionDigits:6}),n=/\.\d*?(0*)$/.exec(e);return n&&(a+=/[1-9]/.test(n[0])?n[1]:n[0]),a.length>=14?parseFloat(e).toExponential().toString():a},f=(a(13),a(0)),y=function(e){var t=e.value,a=void 0===t?"0":t,n=Object(c.useState)(1),r=Object(u.a)(n,2),i=r[0],o=r[1],l=Object(c.useRef)(null),s=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e,t,a=null===l||void 0===l||null===(e=l.current)||void 0===e?void 0:e.offsetWidth,n=null===s||void 0===s||null===(t=s.current)||void 0===t?void 0:t.offsetWidth,c=a&&n?a/n:1;c<1?o(c):i<1&&o(1)})),Object(f.jsx)("div",{className:"calculator-display",ref:l,children:Object(f.jsx)("div",{className:"calculator-display__auto-scaling",style:{transform:"scale(".concat(i,",").concat(i,")")},ref:s,children:d(a)})})},v=(a(15),function(e){var t=e.onClick,a=e.className,n=e.keyValue;return Object(f.jsx)("button",{className:"calculator-key ".concat(a),type:"button",onClick:t,children:n})}),g=a(1);!function(e){e.inputDigit="inputDigit",e.inputDot="inputDot",e.inputPercent="inputPercent",e.toggleSign="toggleSign",e.clearLastChar="clearLastChar",e.clearDisplay="clearDisplay",e.performOperation="performOperation",e.clearAll="clearAll"}(n||(n={}));var j={value:null,displayValue:"0",operator:null,waitingForOperand:!1},b=function(e,t){switch(t.type){case n.inputDigit:return e.waitingForOperand?Object(g.a)(Object(g.a)({},e),{},{displayValue:"".concat(t.payload),waitingForOperand:!1}):Object(g.a)(Object(g.a)({},e),{},{displayValue:"0"===e.displayValue?"".concat(t.payload):"".concat(e.displayValue).concat(t.payload)});case n.inputDot:return e.waitingForOperand?Object(g.a)(Object(g.a)({},e),{},{displayValue:"0.",waitingForOperand:!1}):Object(g.a)(Object(g.a)({},e),{},{displayValue:"".concat(e.displayValue,"."),waitingForOperand:!1});case n.inputPercent:if("0"!==e.displayValue){var a=e.displayValue.replace(/^-?\d*\.?/,""),c=parseFloat(e.displayValue)/100;return Object(g.a)(Object(g.a)({},e),{},{displayValue:"".concat(c.toFixed(a.length+2))})}return e;case n.toggleSign:var r=-1*parseFloat(e.displayValue);return Object(g.a)(Object(g.a)({},e),{},{displayValue:"".concat(r)});case n.clearLastChar:return Object(g.a)(Object(g.a)({},e),{},{displayValue:e.displayValue.substring(0,e.displayValue.length-1)||"0"});case n.clearDisplay:return Object(g.a)(Object(g.a)({},e),{},{displayValue:"0"});case n.performOperation:var i=parseFloat(e.displayValue);if(null===e.value)return Object(g.a)(Object(g.a)({},e),{},{value:i,operator:t.payload,waitingForOperand:!0});if(e.operator){var o=e.value||0,l=p[e.operator].func(o,i);return{value:l,displayValue:String(l),operator:t.payload,waitingForOperand:!0}}return Object(g.a)(Object(g.a)({},e),{},{operator:t.payload,waitingForOperand:!1});case n.clearAll:default:return j}},O=(a(16),function(){var e=function(){var e=Object(c.useReducer)(b,j),t=Object(u.a)(e,2),a=t[0],r=t[1],i=function(e){/\d/.test(e.key)?(e.preventDefault(),r({type:n.inputDigit,payload:e.key})):e.key in p?(e.preventDefault(),r({type:n.performOperation,payload:e.key})):","===e.key||"."===e.key?(e.preventDefault(),r({type:n.inputDot})):"%"===e.key?(e.preventDefault(),r({type:n.inputPercent})):"Backspace"===e.key?(e.preventDefault(),r({type:n.clearLastChar})):"Clear"===e.key&&(e.preventDefault(),"0"!==a.displayValue?r({type:n.clearDisplay}):r({type:n.clearAll}))};return Object(c.useEffect)((function(){return document.addEventListener("keydown",i),function(){document.removeEventListener("keydown",i)}})),{state:a,handleClick:function(e,t){r(t?{type:e,payload:t}:{type:e,payload:null})}}}(),t=e.state,a=e.handleClick;return Object(f.jsxs)("div",{className:"calculator",children:[Object(f.jsx)(y,{value:t.displayValue}),Object(f.jsxs)("div",{className:"calculator-keypad",children:[Object(f.jsxs)("div",{className:"input-keys",children:[Object(f.jsxs)("div",{className:"function-keys",children:[Object(f.jsx)(v,{className:"key-clear",onClick:function(){return a("0"!==t.displayValue?n.clearDisplay:n.clearAll)},keyValue:"0"!==t.displayValue?"C":"AC"}),Object(f.jsx)(v,{className:"key-sign",onClick:function(){return a(n.toggleSign)},keyValue:"\xb1"}),Object(f.jsx)(v,{className:"key-percent",onClick:function(){return a(n.inputPercent)},keyValue:"%"})]}),Object(f.jsxs)("div",{className:"digit-keys",children:[s.map((function(e){return Object(f.jsx)(v,{className:"key-".concat(e),onClick:function(){return a(n.inputDigit,e)},keyValue:e},"key-".concat(e))})),Object(f.jsx)(v,{className:"key-dot",onClick:function(){return a(n.inputDot)},keyValue:"\u25cf"})]})]}),Object(f.jsx)("div",{className:"operator-keys",children:l.a.map(p,(function(e,t){return Object(f.jsx)(v,{className:"key-".concat(e.name),onClick:function(){return a(n.performOperation,t)},keyValue:e.symbol},"key-".concat(e.name))}))})]})]})}),k=(a(17),function(){return Object(f.jsx)("div",{className:"app",children:Object(f.jsx)(O,{})})}),m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/.exec(window.location.hostname));function h(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!==a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};a(18);i.a.render(Object(f.jsx)(k,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/React-Calculator-App",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/React-Calculator-App","/service-worker.js");m?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!==n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):h(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):h(t,e)}))}}(),w()}],[[19,1,2]]]);
//# sourceMappingURL=main.3dccc3a0.chunk.js.map