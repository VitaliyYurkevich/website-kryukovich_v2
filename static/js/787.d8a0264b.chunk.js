"use strict";(self.webpackChunkwebsite_kryukovich_v2=self.webpackChunkwebsite_kryukovich_v2||[]).push([[787],{787:(e,t,n)=>{n.r(t),n.d(t,{getCLS:()=>T,getFCP:()=>h,getFID:()=>F,getLCP:()=>P,getTTFB:()=>D});var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},s=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},v=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},m=-1,d=function(){return"hidden"===document.visibilityState?0:1/0},p=function(){s((function(e){var t=e.timeStamp;m=t}),!0)},l=function(){return m<0&&(m=d(),p(),f((function(){setTimeout((function(){m=d(),p()}),0)}))),{get firstHiddenTime(){return m}}},h=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(s&&s.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],s=o?null:c("paint",a);(o||s)&&(n=v(e,r,t),o&&a(o),f((function(i){r=u("FCP"),n=v(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},g=!1,y=-1,T=function(e,t){g||(h((function(e){y=e.value})),g=!0);var n,i=function(t){y>-1&&e(t)},r=u("CLS",0),a=0,o=[],m=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},d=c("layout-shift",m);d&&(n=v(i,r,t),s((function(){d.takeRecords().map(m),n(!0)})),f((function(){a=0,y=-1,r=u("CLS",0),n=v(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,S=function(e,t){i||(i=t,r=e,a=new Date,k(removeEventListener),L())},L=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},b=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){S(e,t),r()},i=function(){r()},r=function(){removeEventListener("pointerup",n,E),removeEventListener("pointercancel",i,E)};addEventListener("pointerup",n,E),addEventListener("pointercancel",i,E)}(t,e):S(t,e)}},k=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,b,E)}))},F=function(e,t){var n,a=l(),m=u("FID"),d=function(e){e.startTime<a.firstHiddenTime&&(m.value=e.processingStart-e.startTime,m.entries.push(e),n(!0))},p=c("first-input",d);n=v(e,m,t),p&&s((function(){p.takeRecords().map(d),p.disconnect()}),!0),p&&f((function(){var a;m=u("FID"),n=v(e,m,t),o=[],r=-1,i=null,k(addEventListener),a=d,o.push(a),L()}))},C=new Set,P=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e)),n()},o=c("largest-contentful-paint",a);if(o){n=v(e,r,t);var m=function(){C.has(r.id)||(o.takeRecords().map(a),o.disconnect(),C.add(r.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,m,{once:!0,capture:!0})})),s(m,!0),f((function(i){r=u("LCP"),n=v(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,C.add(r.id),n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0)return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("pageshow",t)}}}]);
//# sourceMappingURL=787.d8a0264b.chunk.js.map