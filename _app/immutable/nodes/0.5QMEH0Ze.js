import{s as k,c as z,u as j,g as w,d as D,e as I}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as L,i as V,g as _,s as b,h,x as $,c as g,j as y,f as u,k as p,a as d,d as E,t as H}from"../chunks/index.Y8YiFaFG.js";import{e as M}from"../chunks/singletons.-ZaNfC4Y.js";import{p as S}from"../chunks/stores.BzY2lnOO.js";function C(n){let e,f="⋘ projects";return{c(){e=_("a"),e.textContent=f,this.h()},l(i){e=h(i,"A",{href:!0,class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1le4etc"&&(e.textContent=f),this.h()},h(){p(e,"href","/"),p(e,"class","font-mono text-xs text-zinc-500")},m(i,l){d(i,e,l)},d(i){i&&u(e)}}}function T(n){let e,f=`<img src="${`${M}/timer.png`}" class="h-4" alt="app logo"/> <div class="font-mono text-xs font-bold text-zinc-600">time-tally</div>`,i,l,m,c,o,s=n[0]&&C();const v=n[3].default,a=z(v,n,n[2],null);return{c(){e=_("div"),e.innerHTML=f,i=b(),l=_("div"),s&&s.c(),m=b(),c=_("div"),a&&a.c(),this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1ds96ep"&&(e.innerHTML=f),i=g(t),l=h(t,"DIV",{class:!0});var r=y(l);s&&s.l(r),r.forEach(u),m=g(t),c=h(t,"DIV",{class:!0});var x=y(c);a&&a.l(x),x.forEach(u),this.h()},h(){p(e,"class","border-b border-zinc-500 bg-zinc-300 p-4 flex flex-row items-center gap-2"),p(l,"class","mx-2 h-8 w-full"),p(c,"class","flex flex-col items-center justify-center px-4 py-1")},m(t,r){d(t,e,r),d(t,i,r),d(t,l,r),s&&s.m(l,null),d(t,m,r),d(t,c,r),a&&a.m(c,null),o=!0},p(t,[r]){t[0]?s||(s=C(),s.c(),s.m(l,null)):s&&(s.d(1),s=null),a&&a.p&&(!o||r&4)&&j(a,v,t,t[2],o?D(v,t[2],r,null):w(t[2]),null)},i(t){o||(E(a,t),o=!0)},o(t){H(a,t),o=!1},d(t){t&&(u(e),u(i),u(l),u(m),u(c)),s&&s.d(),a&&a.d(t)}}}function q(n,e,f){let i,l;I(n,S,o=>f(1,l=o));let{$$slots:m={},$$scope:c}=e;return n.$$set=o=>{"$$scope"in o&&f(2,c=o.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&f(0,i=l.route.id!="/")},[i,l,c,m]}class J extends L{constructor(e){super(),V(this,e,q,T,k,{})}}export{J as component};
