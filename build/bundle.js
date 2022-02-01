var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach((e=>{e.c(t)||(a.delete(e),e.f())})),0!==a.size&&u(f)}function d(t){let e;return 0===a.size&&u(f),{promise:new Promise((n=>{a.add(e={c:t,f:n})})),abort(){a.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function m(t){const e=y("style");return function(t,e){p(t.head||t,e)}(h(t),e),e.sheet}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function b(){return v(" ")}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}const _=new Map;let x,E=0;function C(t,e,n,o,r,s,c,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=e+(n-e)*s(t);u+=100*t+`%{${c(o,1-o)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,d=h(t),{stylesheet:p,rules:g}=_.get(d)||function(t,e){const n={stylesheet:m(e),rules:{}};return _.set(t,n),n}(d,t);g[f]||(g[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,E+=1,f}function z(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||u((()=>{E||(_.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),_.clear())})))}function A(t){x=t}const N=[],O=[],R=[],I=[],L=Promise.resolve();let T=!1;function j(t){R.push(t)}const B=new Set;let S,U=0;function D(){const t=x;do{for(;U<N.length;){const t=N[U];U++,A(t),G(t.$$)}for(A(null),N.length=0,U=0;O.length;)O.pop()();for(let t=0;t<R.length;t+=1){const e=R[t];B.has(e)||(B.add(e),e())}R.length=0}while(N.length);for(;I.length;)I.pop()();T=!1,B.clear(),A(t)}function G(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function P(){return S||(S=Promise.resolve(),S.then((()=>{S=null}))),S}function q(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const M=new Set;let F;function Y(){F={r:0,c:[],p:F}}function H(){F.r||r(F.c),F=F.p}function J(t,e){t&&t.i&&(M.delete(t),t.i(e))}function K(t,e,n,o){if(t&&t.o){if(M.has(t))return;M.add(t),F.c.push((()=>{M.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const Q={duration:0};function V(t,e,o,c){const{fragment:i,on_mount:l,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,o),c||j((()=>{const e=l.map(n).filter(s);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(j)}function W(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function X(t,e){-1===t.$$.dirty[0]&&(N.push(t),T||(T=!0,L.then(D)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,c,i,l,u,a=[-1]){const f=x;A(e);const d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:o(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&i(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),p&&X(e,t)),n})):[],d.update(),p=!0,r(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach($)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),V(e,n.target,n.anchor,n.customElement),D()}A(f)}class tt{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t){const e=t-1;return e*e*e+1}function nt(t,{delay:e=0,duration:n=400,easing:o=et,start:r=0,opacity:s=0}={}){const c=getComputedStyle(t),i=+c.opacity,l="none"===c.transform?"":c.transform,u=1-r,a=i*(1-s);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${l} scale(${1-u*e});\n\t\t\topacity: ${i-a*e}\n\t\t`}}function ot(t,e,n){const o=t.slice();return o[2]=e[n],o[4]=n,o}function rt(n){let o,r,c,i,u,a=n[2].content.toUpperCase()+"";return{c(){o=y("div"),r=y("div"),c=v(a),w(r,"class","Letter svelte-1ztlne"),w(o,"class",i="Item "+n[2].status+" svelte-1ztlne")},m(t,e){g(t,o,e),p(o,r),p(r,c)},p(t,e){n=t,1&e&&a!==(a=n[2].content.toUpperCase()+"")&&k(c,a),1&e&&i!==(i="Item "+n[2].status+" svelte-1ztlne")&&w(o,"class",i)},i(n){u||j((()=>{u=function(n,o,r){let c,i,u=o(n,r),a=!1,f=0;function p(){c&&z(n,c)}function h(){const{delay:o=0,duration:r=300,easing:s=e,tick:h=t,css:m}=u||Q;m&&(c=C(n,0,1,r,o,s,m,f++)),h(0,1);const g=l()+o,$=g+r;i&&i.abort(),a=!0,j((()=>q(n,!0,"start"))),i=d((t=>{if(a){if(t>=$)return h(1,0),q(n,!0,"end"),p(),a=!1;if(t>=g){const e=s((t-g)/r);h(e,1-e)}}return a}))}let m=!1;return{start(){m||(m=!0,z(n),s(u)?(u=u(),P().then(h)):h())},invalidate(){m=!1},end(){a&&(p(),a=!1)}}}(o,nt,{duration:lt,delay:lt}),u.start()}))},o:t,d(t){t&&$(o)}}}function st(n){let o,c,i,u,a,f,h=n[2].content.toUpperCase()+"";return{c(){o=y("div"),c=y("div"),i=v(h),w(c,"class","Letter svelte-1ztlne"),w(o,"class",u="Item "+n[2].status+" svelte-1ztlne")},m(t,e){g(t,o,e),p(o,c),p(c,i),f=!0},p(t,e){n=t,(!f||1&e)&&h!==(h=n[2].content.toUpperCase()+"")&&k(i,h),(!f||1&e&&u!==(u="Item "+n[2].status+" svelte-1ztlne"))&&w(o,"class",u)},i(t){f||(a&&a.end(1),f=!0)},o(n){a=function(n,o,c){let i,u=o(n,c),a=!0;const f=F;function p(){const{delay:o=0,duration:s=300,easing:c=e,tick:p=t,css:h}=u||Q;h&&(i=C(n,1,0,s,o,c,h));const m=l()+o,g=m+s;j((()=>q(n,!1,"start"))),d((t=>{if(a){if(t>=g)return p(0,1),q(n,!1,"end"),--f.r||r(f.c),!1;if(t>=m){const e=c((t-m)/s);p(1-e,e)}}return a}))}return f.r+=1,s(u)?P().then((()=>{u=u(),p()})):p(),{end(t){t&&u.tick&&u.tick(1,0),a&&(i&&z(n,i),a=!1)}}}(o,nt,{duration:lt}),f=!1},d(t){t&&$(o),t&&a&&a.end()}}}function ct(t){let e,n,o,r,s;const c=[st,rt],i=[];function l(t,e){return"guessing"===t[2].status?0:1}return n=l(t),o=i[n]=c[n](t),{c(){e=y("div"),o.c(),r=b(),w(e,"class","ItemContainer svelte-1ztlne")},m(t,o){g(t,e,o),i[n].m(e,null),p(e,r),s=!0},p(t,s){let u=n;n=l(t),n===u?i[n].p(t,s):(Y(),K(i[u],1,1,(()=>{i[u]=null})),H(),o=i[n],o?o.p(t,s):(o=i[n]=c[n](t),o.c()),J(o,1),o.m(e,r))},i(t){s||(J(o),s=!0)},o(t){K(o),s=!1},d(t){t&&$(e),i[n].d()}}}function it(t){let e,n,o=t[0],r=[];for(let e=0;e<o.length;e+=1)r[e]=ct(ot(t,o,e));const s=t=>K(r[t],1,1,(()=>{r[t]=null}));return{c(){e=y("div");for(let t=0;t<r.length;t+=1)r[t].c();w(e,"class","Grid svelte-1ztlne")},m(t,o){g(t,e,o);for(let t=0;t<r.length;t+=1)r[t].m(e,null);n=!0},p(t,[n]){if(1&n){let c;for(o=t[0],c=0;c<o.length;c+=1){const s=ot(t,o,c);r[c]?(r[c].p(s,n),J(r[c],1)):(r[c]=ct(s),r[c].c(),J(r[c],1),r[c].m(e,null))}for(Y(),c=o.length;c<r.length;c+=1)s(c);H()}},i(t){if(!n){for(let t=0;t<o.length;t+=1)J(r[t]);n=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)K(r[t]);n=!1},d(t){t&&$(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(r,t)}}}const lt=300;function ut(t,e,n){let o,{letters:r=[]}=e;return t.$$set=t=>{"letters"in t&&n(1,r=t.letters)},t.$$.update=()=>{2&t.$$.dirty&&n(0,o=[...r,...Array(30-r.length).fill({content:"",status:"empty"})])},[o,r]}class at extends tt{constructor(t){super(),Z(this,t,ut,it,c,{letters:1})}}function ft(t){let e,n,o,r,s,c,i,l,u,a;return i=new at({props:{letters:t[0]}}),{c(){var t;e=y("main"),n=y("h1"),n.textContent="Birdle",o=b(),r=y("p"),r.textContent="Guess the 5 letter bird",s=b(),c=y("div"),(t=i.$$.fragment)&&t.c(),w(n,"class","svelte-1i224fu"),w(c,"class","Game svelte-1i224fu"),w(e,"class","svelte-1i224fu")},m(f,d){var h,m,$,y;g(f,e,d),p(e,n),p(e,o),p(e,r),p(e,s),p(e,c),V(i,c,null),l=!0,u||(h=window,m="keydown",$=t[1],h.addEventListener(m,$,y),a=()=>h.removeEventListener(m,$,y),u=!0)},p(t,[e]){const n={};1&e&&(n.letters=t[0]),i.$set(n)},i(t){l||(J(i.$$.fragment,t),l=!0)},o(t){K(i.$$.fragment,t),l=!1},d(t){t&&$(e),W(i),u=!1,a()}}}const dt="goose";function pt(t,e,n){let o;const r=["eagle","chook","goose","booby","stork","drake","finch","swift","heron","robin","raven","doves","ducks","crows","wrens","hawks","larks","terns","gulls","serin","swans","grebe","owlet","pipit","pitta","snipe","hobby","crake","galah","miner","egret"];let s=[],c="";return t.$$.update=()=>{12&t.$$.dirty&&n(0,o=[...s.flat(),...s.length<6?c.split("").map((t=>({content:t,status:"guessing"}))):[],...s.length<6?Array(5-c.length).fill({content:"",status:"guessing"}):[]])},[o,t=>{var e;/^[a-z]$/i.test(t.key)&&c.length<5?(e=t.key,n(3,c+=e.toLowerCase())):"Backspace"===t.key?n(3,c=c.slice(0,c.length-1)):"Enter"===t.key&&(()=>{if(c.length<5)return void alert("Not enough letters!");if(r.indexOf(c)<0)return void alert("Not a bird!");const t=c.split("").map(((t,e)=>({content:t,status:dt[e]===t?"correct":dt.indexOf(t)>=0?"misplaced":"incorrect"})));n(2,s=[...s,t]),n(3,c=""),t.reduce(((t,e)=>t&&"correct"===e.status))?setTimeout((()=>alert("You guessed the bird!")),1e3):s.length>=6&&setTimeout((()=>alert("The bird was goose")),1e3)})()},s,c]}return new class extends tt{constructor(t){super(),Z(this,t,pt,ft,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
