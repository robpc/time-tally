import{s as j,c as w,u as D,g as E,d as I,e as L}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as V,i as H,s as b,g as h,x as M,f as u,c as g,h as v,y as z,j as C,k as _,a as m,d as S,t as q}from"../chunks/index.0Z0BhWBB.js";import{e as T}from"../chunks/singletons.AJeJw8_x.js";import{p as A}from"../chunks/stores.zdqHkslm.js";function $(n){let t,s="⋘ projects";return{c(){t=h("a"),t.textContent=s,this.h()},l(o){t=v(o,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-1pd07sx"&&(t.textContent=s),this.h()},h(){_(t,"href",T+"/"),_(t,"class","font-mono text-xs text-zinc-500 hover:underline")},m(o,r){m(o,t,r)},d(o){o&&u(t)}}}function B(n){let t,s,o=`<img src="${`${T}/timer.png`}" class="h-4" alt="app logo"/> <div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>`,r,c,d,i,p,l=n[0]&&$();const x=n[3].default,a=w(x,n,n[2],null);return{c(){t=b(),s=h("div"),s.innerHTML=o,r=b(),c=h("div"),l&&l.c(),d=b(),i=h("div"),a&&a.c(),this.h()},l(e){M("svelte-mofpkv",document.head).forEach(u),t=g(e),s=v(e,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1ds96ep"&&(s.innerHTML=o),r=g(e),c=v(e,"DIV",{class:!0});var y=C(c);l&&l.l(y),y.forEach(u),d=g(e),i=v(e,"DIV",{class:!0});var k=C(i);a&&a.l(k),k.forEach(u),this.h()},h(){document.title="Time Tally",_(s,"class","border-b border-zinc-500 bg-zinc-300 p-4 flex flex-row items-center gap-2"),_(c,"class","mx-2 h-8 w-full"),_(i,"class","flex flex-col items-center justify-center px-4 py-1")},m(e,f){m(e,t,f),m(e,s,f),m(e,r,f),m(e,c,f),l&&l.m(c,null),m(e,d,f),m(e,i,f),a&&a.m(i,null),p=!0},p(e,[f]){e[0]?l||(l=$(),l.c(),l.m(c,null)):l&&(l.d(1),l=null),a&&a.p&&(!p||f&4)&&D(a,x,e,e[2],p?I(x,e[2],f,null):E(e[2]),null)},i(e){p||(S(a,e),p=!0)},o(e){q(a,e),p=!1},d(e){e&&(u(t),u(s),u(r),u(c),u(d),u(i)),l&&l.d(),a&&a.d(e)}}}function F(n,t,s){let o,r;L(n,A,i=>s(1,r=i));let{$$slots:c={},$$scope:d}=t;return n.$$set=i=>{"$$scope"in i&&s(2,d=i.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&s(0,o=r.route.id!="/")},[o,r,d,c]}class O extends V{constructor(t){super(),H(this,t,F,B,j,{})}}export{O as component};