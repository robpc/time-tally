import{s as T,c as j,u as w,g as D,d as E,e as I}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as L,i as V,s as b,g as h,x as H,f as u,c as g,h as v,y as z,j as C,k as _,a as m,d as M,t as S}from"../chunks/index.0Z0BhWBB.js";import{e as q}from"../chunks/singletons.9usQVcWy.js";import{p as A}from"../chunks/stores.-x5MNuMX.js";function $(n){let t,s="⋘ projects";return{c(){t=h("a"),t.textContent=s,this.h()},l(o){t=v(o,"A",{href:!0,class:!0,"data-svelte-h":!0}),z(t)!=="svelte-ixl588"&&(t.textContent=s),this.h()},h(){_(t,"href","/"),_(t,"class","font-mono text-xs text-zinc-500 hover:underline")},m(o,r){m(o,t,r)},d(o){o&&u(t)}}}function B(n){let t,s,o=`<img src="${`${q}/timer.png`}" class="h-4" alt="app logo"/> <div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>`,r,c,d,a,p,l=n[0]&&$();const x=n[3].default,i=j(x,n,n[2],null);return{c(){t=b(),s=h("div"),s.innerHTML=o,r=b(),c=h("div"),l&&l.c(),d=b(),a=h("div"),i&&i.c(),this.h()},l(e){H("svelte-mofpkv",document.head).forEach(u),t=g(e),s=v(e,"DIV",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-1ds96ep"&&(s.innerHTML=o),r=g(e),c=v(e,"DIV",{class:!0});var y=C(c);l&&l.l(y),y.forEach(u),d=g(e),a=v(e,"DIV",{class:!0});var k=C(a);i&&i.l(k),k.forEach(u),this.h()},h(){document.title="Time Tally",_(s,"class","border-b border-zinc-500 bg-zinc-300 p-4 flex flex-row items-center gap-2"),_(c,"class","mx-2 h-8 w-full"),_(a,"class","flex flex-col items-center justify-center px-4 py-1")},m(e,f){m(e,t,f),m(e,s,f),m(e,r,f),m(e,c,f),l&&l.m(c,null),m(e,d,f),m(e,a,f),i&&i.m(a,null),p=!0},p(e,[f]){e[0]?l||(l=$(),l.c(),l.m(c,null)):l&&(l.d(1),l=null),i&&i.p&&(!p||f&4)&&w(i,x,e,e[2],p?E(x,e[2],f,null):D(e[2]),null)},i(e){p||(M(i,e),p=!0)},o(e){S(i,e),p=!1},d(e){e&&(u(t),u(s),u(r),u(c),u(d),u(a)),l&&l.d(),i&&i.d(e)}}}function F(n,t,s){let o,r;I(n,A,a=>s(1,r=a));let{$$slots:c={},$$scope:d}=t;return n.$$set=a=>{"$$scope"in a&&s(2,d=a.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&s(0,o=r.route.id!="/")},[o,r,d,c]}class O extends L{constructor(t){super(),V(this,t,F,B,T,{})}}export{O as component};
