import{s as j,c as w,u as D,g as E,d as I,e as L}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as V,i as q,s as b,g as h,x as H,f as u,c as g,h as v,y as z,j as $,k as _,a as m,d as M,t as S}from"../chunks/index.0Z0BhWBB.js";import{e as T}from"../chunks/singletons.V7ul-Jl-.js";import{p as A}from"../chunks/stores.pnt45jYP.js";function C(o){let t,s="⋘ projects";return{c(){t=h("a"),t.textContent=s,this.h()},l(n){t=v(n,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-oqkeal"&&(t.textContent=s),this.h()},h(){_(t,"href","$"+T+"/"),_(t,"class","font-mono text-xs text-zinc-500 hover:underline")},m(n,r){m(n,t,r)},d(n){n&&u(t)}}}function B(o){let t,s,n=`<img src="${`${T}/timer.png`}" class="h-4" alt="app logo"/> <div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>`,r,c,d,i,p,l=o[0]&&C();const x=o[3].default,a=w(x,o,o[2],null);return{c(){t=b(),s=h("div"),s.innerHTML=n,r=b(),c=h("div"),l&&l.c(),d=b(),i=h("div"),a&&a.c(),this.h()},l(e){H("svelte-mofpkv",document.head).forEach(u),t=g(e),s=v(e,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1ds96ep"&&(s.innerHTML=n),r=g(e),c=v(e,"DIV",{class:!0});var y=$(c);l&&l.l(y),y.forEach(u),d=g(e),i=v(e,"DIV",{class:!0});var k=$(i);a&&a.l(k),k.forEach(u),this.h()},h(){document.title="Time Tally",_(s,"class","border-b border-zinc-500 bg-zinc-300 p-4 flex flex-row items-center gap-2"),_(c,"class","mx-2 h-8 w-full"),_(i,"class","flex flex-col items-center justify-center px-4 py-1")},m(e,f){m(e,t,f),m(e,s,f),m(e,r,f),m(e,c,f),l&&l.m(c,null),m(e,d,f),m(e,i,f),a&&a.m(i,null),p=!0},p(e,[f]){e[0]?l||(l=C(),l.c(),l.m(c,null)):l&&(l.d(1),l=null),a&&a.p&&(!p||f&4)&&D(a,x,e,e[2],p?I(x,e[2],f,null):E(e[2]),null)},i(e){p||(M(a,e),p=!0)},o(e){S(a,e),p=!1},d(e){e&&(u(t),u(s),u(r),u(c),u(d),u(i)),l&&l.d(),a&&a.d(e)}}}function F(o,t,s){let n,r;L(o,A,i=>s(1,r=i));let{$$slots:c={},$$scope:d}=t;return o.$$set=i=>{"$$scope"in i&&s(2,d=i.$$scope)},o.$$.update=()=>{o.$$.dirty&2&&s(0,n=r.route.id!="/")},[n,r,d,c]}class O extends V{constructor(t){super(),q(this,t,F,B,j,{})}}export{O as component};
