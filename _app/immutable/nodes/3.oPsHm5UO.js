import{s as vt,o as Zt,n as _t,i as Jt,r as qt,b as Ut,h as Ht,e as kt}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as gt,i as $t,g as j,m as x,s as P,r as ot,h as O,j as A,n as G,f as k,c as W,u as at,k as Y,a as Z,z as b,v as ut,o as st,d as R,t as K,w as lt,y as yt,A as dt,B as Mt,x as xt,p as Nt,b as At,C as zt,e as bt}from"../chunks/index.0Z0BhWBB.js";import{p as Gt}from"../chunks/stores.KfhVBbJk.js";import{B as It,I as Qt,e as Lt,u as Rt,o as Kt,n as Xt,m as te}from"../chunks/InvertedButton.n9NVC3MM.js";const Pt=1e3,St=60*Pt,Yt=60*St;function X(s){if(!s)return"0:00:00";let t=s;const e=Math.floor(t/Yt);t-=e*Yt;const n=Math.floor(t/St);t-=n*St;const o=Math.round(t/Pt);return`${e}:${(""+n).padStart(2,"0")}:${(""+o).padStart(2,"0")}`}function ee(s){let t;return{c(){t=x("Start")},l(e){t=G(e,"Start")},m(e,n){Z(e,t,n)},d(e){e&&k(t)}}}function ne(s){let t;return{c(){t=x("Stop")},l(e){t=G(e,"Stop")},m(e,n){Z(e,t,n)},d(e){e&&k(t)}}}function se(s){let t,e,n,o,l,r,m,f,c;return r=new It({props:{disabled:!!s[0],$$slots:{default:[ee]},$$scope:{ctx:s}}}),r.$on("click",s[3]),f=new It({props:{disabled:!!s[1],$$slots:{default:[ne]},$$scope:{ctx:s}}}),f.$on("click",s[4]),{c(){t=j("div"),e=j("div"),n=x(s[2]),o=P(),l=j("div"),ot(r.$$.fragment),m=P(),ot(f.$$.fragment),this.h()},l(d){t=O(d,"DIV",{class:!0});var _=A(t);e=O(_,"DIV",{class:!0});var y=A(e);n=G(y,s[2]),y.forEach(k),o=W(_),l=O(_,"DIV",{class:!0});var v=A(l);at(r.$$.fragment,v),m=W(v),at(f.$$.fragment,v),v.forEach(k),_.forEach(k),this.h()},h(){Y(e,"class","text-center font-mono text-4xl"),Y(l,"class","flex flex-row justify-center gap-2 h-8"),Y(t,"class","flex flex-row justify-between gap-2 items-center rounded-2xl bg-zinc-200 p-4")},m(d,_){Z(d,t,_),b(t,e),b(e,n),b(t,o),b(t,l),ut(r,l,null),b(l,m),ut(f,l,null),c=!0},p(d,[_]){(!c||_&4)&&st(n,d[2]);const y={};_&1&&(y.disabled=!!d[0]),_&1024&&(y.$$scope={dirty:_,ctx:d}),r.$set(y);const v={};_&2&&(v.disabled=!!d[1]),_&1024&&(v.$$scope={dirty:_,ctx:d}),f.$set(v)},i(d){c||(R(r.$$.fragment,d),R(f.$$.fragment,d),c=!0)},o(d){K(r.$$.fragment,d),K(f.$$.fragment,d),c=!1},d(d){d&&k(t),lt(r),lt(f)}}}function re(s,t,e){let n,{onUpdate:o}=t,{onStop:l}=t,r,m,f=X(n),c;function d(){c&&(clearInterval(c),c=void 0)}Zt(()=>d);function _(){d(),e(0,r=new Date),e(1,m=void 0),e(2,f=X(n)),o(n),c=setInterval(()=>{const v=r?Date.now()-r.getTime():0;e(2,f=X(v)),o(v)},1e3)}function y(){d(),e(1,m=new Date),e(2,f=X(n)),r&&(l(r,m),e(0,r=void 0),e(1,m=void 0),e(2,f=X(n)),o(n))}return s.$$set=v=>{"onUpdate"in v&&e(5,o=v.onUpdate),"onStop"in v&&e(6,l=v.onStop)},s.$$.update=()=>{s.$$.dirty&3&&(n=r&&m?m.getTime()-r.getTime():0)},[r,m,f,_,y,o,l]}class ie extends gt{constructor(t){super(),$t(this,t,re,se,vt,{onUpdate:5,onStop:6})}}var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wt={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){var e=1e3,n=6e4,o=36e5,l="millisecond",r="second",m="minute",f="hour",c="day",d="week",_="month",y="quarter",v="year",S="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var h=["th","st","nd","rd"],u=$%100;return"["+$+(h[(u-20)%10]||h[u]||h[0])+"]"}},N=function($,h,u){var a=String($);return!a||a.length>=h?$:""+Array(h+1-a.length).join(u)+$},z={s:N,z:function($){var h=-$.utcOffset(),u=Math.abs(h),a=Math.floor(u/60),i=u%60;return(h<=0?"+":"-")+N(a,2,"0")+":"+N(i,2,"0")},m:function $(h,u){if(h.date()<u.date())return-$(u,h);var a=12*(u.year()-h.year())+(u.month()-h.month()),i=h.clone().add(a,_),p=u-i<0,D=h.clone().add(a+(p?-1:1),_);return+(-(a+(u-i)/(p?i-D:D-i))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:_,y:v,w:d,d:c,D:S,h:f,m,s:r,ms:l,Q:y}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},F="en",Q={};Q[F]=I;var ft="$isDayjsObject",q=function($){return $ instanceof tt||!(!$||!$[ft])},U=function $(h,u,a){var i;if(!h)return F;if(typeof h=="string"){var p=h.toLowerCase();Q[p]&&(i=p),u&&(Q[p]=u,i=p);var D=h.split("-");if(!i&&D.length>1)return $(D[0])}else{var L=h.name;Q[L]=h,i=L}return!a&&i&&(F=i),i||!a&&F},V=function($,h){if(q($))return $.clone();var u=typeof h=="object"?h:{};return u.date=$,u.args=arguments,new tt(u)},T=z;T.l=U,T.i=q,T.w=function($,h){return V($,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var tt=function(){function $(u){this.$L=U(u.locale,null,!0),this.parse(u),this.$x=this.$x||u.x||{},this[ft]=!0}var h=$.prototype;return h.parse=function(u){this.$d=function(a){var i=a.date,p=a.utc;if(i===null)return new Date(NaN);if(T.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var D=i.match(w);if(D){var L=D[2]-1||0,E=(D[7]||"0").substring(0,3);return p?new Date(Date.UTC(D[1],L,D[3]||1,D[4]||0,D[5]||0,D[6]||0,E)):new Date(D[1],L,D[3]||1,D[4]||0,D[5]||0,D[6]||0,E)}}return new Date(i)}(u),this.init()},h.init=function(){var u=this.$d;this.$y=u.getFullYear(),this.$M=u.getMonth(),this.$D=u.getDate(),this.$W=u.getDay(),this.$H=u.getHours(),this.$m=u.getMinutes(),this.$s=u.getSeconds(),this.$ms=u.getMilliseconds()},h.$utils=function(){return T},h.isValid=function(){return this.$d.toString()!==g},h.isSame=function(u,a){var i=V(u);return this.startOf(a)<=i&&i<=this.endOf(a)},h.isAfter=function(u,a){return V(u)<this.startOf(a)},h.isBefore=function(u,a){return this.endOf(a)<V(u)},h.$g=function(u,a,i){return T.u(u)?this[a]:this.set(i,u)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(u,a){var i=this,p=!!T.u(a)||a,D=T.p(u),L=function(it,J){var et=T.w(i.$u?Date.UTC(i.$y,J,it):new Date(i.$y,J,it),i);return p?et:et.endOf(c)},E=function(it,J){return T.w(i.toDate()[it].apply(i.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(J)),i)},C=this.$W,H=this.$M,B=this.$D,ct="set"+(this.$u?"UTC":"");switch(D){case v:return p?L(1,0):L(31,11);case _:return p?L(1,H):L(0,H+1);case d:var rt=this.$locale().weekStart||0,ht=(C<rt?C+7:C)-rt;return L(p?B-ht:B+(6-ht),H);case c:case S:return E(ct+"Hours",0);case f:return E(ct+"Minutes",1);case m:return E(ct+"Seconds",2);case r:return E(ct+"Milliseconds",3);default:return this.clone()}},h.endOf=function(u){return this.startOf(u,!1)},h.$set=function(u,a){var i,p=T.p(u),D="set"+(this.$u?"UTC":""),L=(i={},i[c]=D+"Date",i[S]=D+"Date",i[_]=D+"Month",i[v]=D+"FullYear",i[f]=D+"Hours",i[m]=D+"Minutes",i[r]=D+"Seconds",i[l]=D+"Milliseconds",i)[p],E=p===c?this.$D+(a-this.$W):a;if(p===_||p===v){var C=this.clone().set(S,1);C.$d[L](E),C.init(),this.$d=C.set(S,Math.min(this.$D,C.daysInMonth())).$d}else L&&this.$d[L](E);return this.init(),this},h.set=function(u,a){return this.clone().$set(u,a)},h.get=function(u){return this[T.p(u)]()},h.add=function(u,a){var i,p=this;u=Number(u);var D=T.p(a),L=function(H){var B=V(p);return T.w(B.date(B.date()+Math.round(H*u)),p)};if(D===_)return this.set(_,this.$M+u);if(D===v)return this.set(v,this.$y+u);if(D===c)return L(1);if(D===d)return L(7);var E=(i={},i[m]=n,i[f]=o,i[r]=e,i)[D]||1,C=this.$d.getTime()+u*E;return T.w(C,this)},h.subtract=function(u,a){return this.add(-1*u,a)},h.format=function(u){var a=this,i=this.$locale();if(!this.isValid())return i.invalidDate||g;var p=u||"YYYY-MM-DDTHH:mm:ssZ",D=T.z(this),L=this.$H,E=this.$m,C=this.$M,H=i.weekdays,B=i.months,ct=i.meridiem,rt=function(J,et,pt,Dt){return J&&(J[et]||J(a,p))||pt[et].slice(0,Dt)},ht=function(J){return T.s(L%12||12,J,"0")},it=ct||function(J,et,pt){var Dt=J<12?"AM":"PM";return pt?Dt.toLowerCase():Dt};return p.replace(M,function(J,et){return et||function(pt){switch(pt){case"YY":return String(a.$y).slice(-2);case"YYYY":return T.s(a.$y,4,"0");case"M":return C+1;case"MM":return T.s(C+1,2,"0");case"MMM":return rt(i.monthsShort,C,B,3);case"MMMM":return rt(B,C);case"D":return a.$D;case"DD":return T.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return rt(i.weekdaysMin,a.$W,H,2);case"ddd":return rt(i.weekdaysShort,a.$W,H,3);case"dddd":return H[a.$W];case"H":return String(L);case"HH":return T.s(L,2,"0");case"h":return ht(1);case"hh":return ht(2);case"a":return it(L,E,!0);case"A":return it(L,E,!1);case"m":return String(E);case"mm":return T.s(E,2,"0");case"s":return String(a.$s);case"ss":return T.s(a.$s,2,"0");case"SSS":return T.s(a.$ms,3,"0");case"Z":return D}return null}(J)||D.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(u,a,i){var p,D=this,L=T.p(a),E=V(u),C=(E.utcOffset()-this.utcOffset())*n,H=this-E,B=function(){return T.m(D,E)};switch(L){case v:p=B()/12;break;case _:p=B();break;case y:p=B()/3;break;case d:p=(H-C)/6048e5;break;case c:p=(H-C)/864e5;break;case f:p=H/o;break;case m:p=H/n;break;case r:p=H/e;break;default:p=H}return i?p:T.a(p)},h.daysInMonth=function(){return this.endOf(_).$D},h.$locale=function(){return Q[this.$L]},h.locale=function(u,a){if(!u)return this.$L;var i=this.clone(),p=U(u,a,!0);return p&&(i.$L=p),i},h.clone=function(){return T.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},$}(),mt=tt.prototype;return V.prototype=mt,[["$ms",l],["$s",r],["$m",m],["$H",f],["$W",c],["$M",_],["$y",v],["$D",S]].forEach(function($){mt[$[1]]=function(h){return this.$g(h,$[0],$[1])}}),V.extend=function($,h){return $.$i||($(h,tt,V),$.$i=!0),V},V.locale=U,V.isDayjs=q,V.unix=function($){return V(1e3*$)},V.en=Q[F],V.Ls=Q,V.p={},V})})(Wt);var oe=Wt.exports;const nt=Tt(oe);var Ft={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,o,l){var r=o.prototype,m=r.format;l.en.formats=e,r.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var c=this.$locale().formats,d=function(_,y){return _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,S,g){var w=g&&g.toUpperCase();return S||y[g]||e[g]||y[w].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,I,N){return I||N.slice(1)})})}(f,c===void 0?{}:c);return m.call(this,d)}}})})(Ft);var ae=Ft.exports;const ue=Tt(ae);var Bt={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){return function(e,n,o){n.prototype.isToday=function(){var l="YYYY-MM-DD",r=o();return this.format(l)===r.format(l)}}})})(Bt);var le=Bt.exports;const fe=Tt(le);function jt(s){let t,e;return{c(){t=j("div"),e=x(s[3])},l(n){t=O(n,"DIV",{});var o=A(t);e=G(o,s[3]),o.forEach(k)},m(n,o){Z(n,t,o),b(t,e)},p(n,o){o&8&&st(e,n[3])},d(n){n&&k(t)}}}function Ot(s){let t,e;return{c(){t=j("div"),e=x(s[2])},l(n){t=O(n,"DIV",{});var o=A(t);e=G(o,s[2]),o.forEach(k)},m(n,o){Z(n,t,o),b(t,e)},p(n,o){o&4&&st(e,n[2])},d(n){n&&k(t)}}}function ce(s){let t,e,n,o=s[6](s[0])+"",l,r,m,f="-",c,d,_,y=s[6](s[1])+"",v,S=!s[5]&&jt(s),g=!s[5]&&!s[4]&&Ot(s);return{c(){t=j("div"),S&&S.c(),e=P(),n=j("div"),l=x(o),r=P(),m=j("div"),m.textContent=f,c=P(),g&&g.c(),d=P(),_=j("div"),v=x(y),this.h()},l(w){t=O(w,"DIV",{class:!0});var M=A(t);S&&S.l(M),e=W(M),n=O(M,"DIV",{});var I=A(n);l=G(I,o),I.forEach(k),r=W(M),m=O(M,"DIV",{"data-svelte-h":!0}),yt(m)!=="svelte-fd8uot"&&(m.textContent=f),c=W(M),g&&g.l(M),d=W(M),_=O(M,"DIV",{});var N=A(_);v=G(N,y),N.forEach(k),M.forEach(k),this.h()},h(){Y(t,"class","flex flex-row gap-1")},m(w,M){Z(w,t,M),S&&S.m(t,null),b(t,e),b(t,n),b(n,l),b(t,r),b(t,m),b(t,c),g&&g.m(t,null),b(t,d),b(t,_),b(_,v)},p(w,[M]){w[5]?S&&(S.d(1),S=null):S?S.p(w,M):(S=jt(w),S.c(),S.m(t,e)),M&1&&o!==(o=w[6](w[0])+"")&&st(l,o),!w[5]&&!w[4]?g?g.p(w,M):(g=Ot(w),g.c(),g.m(t,d)):g&&(g.d(1),g=null),M&2&&y!==(y=w[6](w[1])+"")&&st(v,y)},i:_t,o:_t,d(w){w&&k(t),S&&S.d(),g&&g.d()}}}function de(s,t,e){let n,o,l,r,m,{start:f}=t,{stop:c}=t;nt.extend(ue),nt.extend(fe);const d=v=>nt(v).format("M/DD/YYYY"),_=v=>nt(v).format("M/DD"),y=v=>nt(v).format("h:mma");return s.$$set=v=>{"start"in v&&e(0,f=v.start),"stop"in v&&e(1,c=v.stop)},s.$$.update=()=>{s.$$.dirty&1&&e(5,n=nt(f).isToday()),s.$$.dirty&1&&e(7,o=nt(f).year()==nt().year()),s.$$.dirty&3&&e(4,l=d(f)==d(c)),s.$$.dirty&129&&e(3,r=o?_(f):d(f)),s.$$.dirty&130&&e(2,m=o?_(c):d(c))},[f,c,m,r,l,n,y,o]}class me extends gt{constructor(t){super(),$t(this,t,de,ce,vt,{start:0,stop:1})}}function he(s){let t;return{c(){t=x("🞪")},l(e){t=G(e,"🞪")},m(e,n){Z(e,t,n)},d(e){e&&k(t)}}}function pe(s){let t,e,n=X(Math.round(new Date(s[0].stop).getTime()-new Date(s[0].start).getTime()))+"",o,l,r,m,f,c,d,_,y,v,S,g,w;return f=new me({props:{start:s[0].start,stop:s[0].stop}}),v=new Qt({props:{$$slots:{default:[he]},$$scope:{ctx:s}}}),v.$on("click",function(){Jt(s[1])&&s[1].apply(this,arguments)}),{c(){t=j("div"),e=j("div"),o=x(n),l=P(),r=j("div"),m=j("div"),ot(f.$$.fragment),c=P(),d=j("input"),y=P(),ot(v.$$.fragment),this.h()},l(M){t=O(M,"DIV",{class:!0});var I=A(t);e=O(I,"DIV",{class:!0});var N=A(e);o=G(N,n),N.forEach(k),l=W(I),r=O(I,"DIV",{class:!0});var z=A(r);m=O(z,"DIV",{class:!0});var F=A(m);at(f.$$.fragment,F),F.forEach(k),c=W(z),d=O(z,"INPUT",{id:!0,placeholder:!0,class:!0}),z.forEach(k),y=W(I),at(v.$$.fragment,I),I.forEach(k),this.h()},h(){Y(e,"class","font-mono text-lg"),Y(m,"class","ml-2 w-full text-right text-xs text-zinc-500"),Y(d,"id",_="session_name_"+s[0].id),Y(d,"placeholder","Session name"),Y(d,"class","svelte-oxet75"),Y(r,"class","gap-0.75 flex w-full flex-col"),Y(t,"class","flex w-full flex-row items-center gap-2")},m(M,I){Z(M,t,I),b(t,e),b(e,o),b(t,l),b(t,r),b(r,m),ut(f,m,null),b(r,c),b(r,d),dt(d,s[0].name),b(t,y),ut(v,t,null),S=!0,g||(w=Mt(d,"input",s[2]),g=!0)},p(M,[I]){s=M,(!S||I&1)&&n!==(n=X(Math.round(new Date(s[0].stop).getTime()-new Date(s[0].start).getTime()))+"")&&st(o,n);const N={};I&1&&(N.start=s[0].start),I&1&&(N.stop=s[0].stop),f.$set(N),(!S||I&1&&_!==(_="session_name_"+s[0].id))&&Y(d,"id",_),I&1&&d.value!==s[0].name&&dt(d,s[0].name);const z={};I&8&&(z.$$scope={dirty:I,ctx:s}),v.$set(z)},i(M){S||(R(f.$$.fragment,M),R(v.$$.fragment,M),S=!0)},o(M){K(f.$$.fragment,M),K(v.$$.fragment,M),S=!1},d(M){M&&k(t),lt(f),lt(v),g=!1,w()}}}function _e(s,t,e){let{item:n}=t,{onDelete:o}=t;function l(){n.name=this.value,e(0,n)}return s.$$set=r=>{"item"in r&&e(0,n=r.item),"onDelete"in r&&e(1,o=r.onDelete)},[n,o,l]}class ve extends gt{constructor(t){super(),$t(this,t,_e,pe,vt,{item:0,onDelete:1})}}function Et(s,t,e){const n=s.slice();return n[12]=t[e],n[13]=t,n[14]=e,n}function Ct(s){let t,e="No sessions logged so far";return{c(){t=j("div"),t.textContent=e},l(n){t=O(n,"DIV",{"data-svelte-h":!0}),yt(t)!=="svelte-19p8o4v"&&(t.textContent=e)},m(n,o){Z(n,t,o)},p:_t,d(n){n&&k(t)}}}function Vt(s,t){let e,n,o,l;function r(){return t[10](t[12])}function m(c){t[11](c,t[12],t[13],t[14])}let f={onDelete:r};return t[12]!==void 0&&(f.item=t[12]),n=new ve({props:f}),Ut.push(()=>zt(n,"item",m)),{key:s,first:null,c(){e=bt(),ot(n.$$.fragment),this.h()},l(c){e=bt(),at(n.$$.fragment,c),this.h()},h(){this.first=e},m(c,d){Z(c,e,d),ut(n,c,d),l=!0},p(c,d){t=c;const _={};d&1&&(_.onDelete=r),!o&&d&1&&(o=!0,_.item=t[12],Ht(()=>o=!1)),n.$set(_)},i(c){l||(R(n.$$.fragment,c),l=!0)},o(c){K(n.$$.fragment,c),l=!1},d(c){c&&k(e),lt(n,c)}}}function ge(s){let t,e,n,o,l,r,m=X(s[2])+"",f,c,d,_,y,v,S,g,w,M,I,N,z,F,Q="Past Sessions",ft,q,U=[],V=new Map,T,tt,mt;document.title=t=s[0].name+" - Time Tally",I=new ie({props:{onStop:s[8],onUpdate:s[9]}});let $=Lt(s[0].sessions);const h=a=>a[12].id;for(let a=0;a<$.length;a+=1){let i=Et(s,$,a),p=h(i);V.set(p,U[a]=Vt(p,i))}let u=null;return $.length||(u=Ct()),{c(){e=P(),n=j("div"),o=j("input"),l=P(),r=j("div"),f=x(m),c=P(),d=j("div"),_=j("label"),y=j("input"),v=x(`
			Time Limit`),S=P(),g=j("input"),M=P(),ot(I.$$.fragment),N=P(),z=j("div"),F=j("h2"),F.textContent=Q,ft=P(),q=j("div");for(let a=0;a<U.length;a+=1)U[a].c();u&&u.c(),this.h()},l(a){xt("svelte-1x2m9dk",document.head).forEach(k),e=W(a),n=O(a,"DIV",{class:!0});var p=A(n);o=O(p,"INPUT",{id:!0,placeholder:!0,class:!0}),l=W(p),r=O(p,"DIV",{class:!0});var D=A(r);f=G(D,m),D.forEach(k),c=W(p),d=O(p,"DIV",{class:!0});var L=A(d);_=O(L,"LABEL",{for:!0});var E=A(_);y=O(E,"INPUT",{id:!0,type:!0,class:!0}),v=G(E,`
			Time Limit`),E.forEach(k),S=W(L),g=O(L,"INPUT",{id:!0,class:!0}),L.forEach(k),M=W(p),at(I.$$.fragment,p),N=W(p),z=O(p,"DIV",{class:!0});var C=A(z);F=O(C,"H2",{class:!0,"data-svelte-h":!0}),yt(F)!=="svelte-183ax76"&&(F.textContent=Q),ft=W(C),q=O(C,"DIV",{class:!0});var H=A(q);for(let B=0;B<U.length;B+=1)U[B].l(H);u&&u.l(H),H.forEach(k),C.forEach(k),p.forEach(k),this.h()},h(){Y(o,"id","project_name"),Y(o,"placeholder","Project Name"),Y(o,"class","text-4xl svelte-1n5zvr5"),Y(r,"class","text-center font-mono text-6xl"),Y(y,"id","has_time_limit"),Y(y,"type","checkbox"),Y(y,"class","svelte-1n5zvr5"),Y(_,"for","has_time_limit"),Y(g,"id","time_limit"),g.disabled=w=!s[0].isTimeLimited,Y(g,"class","svelte-1n5zvr5"),Y(d,"class","flex flex-col items-center gap-2"),Y(F,"class","mb-2 text-2xl"),Y(q,"class","flex flex-col-reverse gap-4"),Y(z,"class","flex flex-col gap-4"),Y(n,"class","flex flex-col justify-center gap-8")},m(a,i){Z(a,e,i),Z(a,n,i),b(n,o),dt(o,s[0].name),b(n,l),b(n,r),b(r,f),b(n,c),b(n,d),b(d,_),b(_,y),y.checked=s[0].isTimeLimited,b(_,v),b(d,S),b(d,g),dt(g,s[0].timeLimitDuration),b(n,M),ut(I,n,null),b(n,N),b(n,z),b(z,F),b(z,ft),b(z,q);for(let p=0;p<U.length;p+=1)U[p]&&U[p].m(q,null);u&&u.m(q,null),T=!0,tt||(mt=[Mt(o,"input",s[5]),Mt(y,"change",s[6]),Mt(g,"input",s[7])],tt=!0)},p(a,[i]){(!T||i&1)&&t!==(t=a[0].name+" - Time Tally")&&(document.title=t),i&1&&o.value!==a[0].name&&dt(o,a[0].name),(!T||i&4)&&m!==(m=X(a[2])+"")&&st(f,m),i&1&&(y.checked=a[0].isTimeLimited),(!T||i&1&&w!==(w=!a[0].isTimeLimited))&&(g.disabled=w),i&1&&g.value!==a[0].timeLimitDuration&&dt(g,a[0].timeLimitDuration);const p={};i&1&&(p.onStop=a[8]),i&2&&(p.onUpdate=a[9]),I.$set(p),i&9&&($=Lt(a[0].sessions),Nt(),U=Rt(U,i,h,1,a,$,V,q,Kt,Vt,null,Et),At(),!$.length&&u?u.p(a,i):$.length?u&&(u.d(1),u=null):(u=Ct(),u.c(),u.m(q,null)))},i(a){if(!T){R(I.$$.fragment,a);for(let i=0;i<$.length;i+=1)R(U[i]);T=!0}},o(a){K(I.$$.fragment,a);for(let i=0;i<U.length;i+=1)K(U[i]);T=!1},d(a){a&&(k(e),k(n)),lt(I);for(let i=0;i<U.length;i+=1)U[i].d();u&&u.d(),tt=!1,qt(mt)}}}function $e(s,t,e){let n,o,{project:l}=t;function r(g){e(0,l.sessions=l.sessions.filter(w=>w.id!=g),l)}let m=0;function f(){l.name=this.value,e(0,l)}function c(){l.isTimeLimited=this.checked,e(0,l)}function d(){l.timeLimitDuration=this.value,e(0,l)}const _=(g,w)=>{e(0,l.sessions=[...l.sessions,{id:Xt(6),start:g.toISOString(),stop:w.toISOString()}],l)},y=g=>{e(1,m=g)},v=g=>r(g.id);function S(g,w,M,I){M[I]=g,e(0,l)}return s.$$set=g=>{"project"in g&&e(0,l=g.project)},s.$$.update=()=>{s.$$.dirty&1&&e(4,n=l.sessions?l.sessions.reduce((g,{start:w,stop:M})=>g+Math.round(new Date(M).getTime()-new Date(w).getTime()),0):0),s.$$.dirty&19&&e(2,o=l.isTimeLimited?parseInt(l.timeLimitDuration||"0")-(n+Math.round(m)):n+Math.round(m))},[l,m,o,r,n,f,c,d,_,y,v,S]}class De extends gt{constructor(t){super(),$t(this,t,$e,ge,vt,{project:0})}}function Me(s){let t,e="Not found",n,o,l;return{c(){t=j("div"),t.textContent=e,n=P(),o=j("div"),l=x(s[0])},l(r){t=O(r,"DIV",{"data-svelte-h":!0}),yt(t)!=="svelte-kspf0j"&&(t.textContent=e),n=W(r),o=O(r,"DIV",{});var m=A(o);l=G(m,s[0]),m.forEach(k)},m(r,m){Z(r,t,m),Z(r,n,m),Z(r,o,m),b(o,l)},p(r,m){m&1&&st(l,r[0])},i:_t,o:_t,d(r){r&&(k(t),k(n),k(o))}}}function be(s){let t,e,n;function o(r){s[5](r)}let l={};return s[1].projects[s[2]]!==void 0&&(l.project=s[1].projects[s[2]]),t=new De({props:l}),Ut.push(()=>zt(t,"project",o)),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,m){ut(t,r,m),n=!0},p(r,m){const f={};!e&&m&6&&(e=!0,f.project=r[1].projects[r[2]],Ht(()=>e=!1)),t.$set(f)},i(r){n||(R(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){lt(t,r)}}}function ye(s){let t,e,n,o;const l=[be,Me],r=[];function m(f,c){return f[2]>-1?0:1}return t=m(s),e=r[t]=l[t](s),{c(){e.c(),n=bt()},l(f){e.l(f),n=bt()},m(f,c){r[t].m(f,c),Z(f,n,c),o=!0},p(f,[c]){let d=t;t=m(f),t===d?r[t].p(f,c):(Nt(),K(r[d],1,1,()=>{r[d]=null}),At(),e=r[t],e?e.p(f,c):(e=r[t]=l[t](f),e.c()),R(e,1),e.m(n.parentNode,n))},i(f){o||(R(e),o=!0)},o(f){K(e),o=!1},d(f){f&&k(n),r[t].d(f)}}}function Se(s,t,e){let n,o,l,r;kt(s,Gt,c=>e(4,r=c));const m=te.application;kt(s,m,c=>e(1,l=c));function f(c){s.$$.not_equal(l.projects[o],c)&&(l.projects[o]=c,m.set(l))}return s.$$.update=()=>{s.$$.dirty&16&&e(0,n=r.params.id),s.$$.dirty&3&&e(2,o=l.projects.findIndex(c=>c.id==n))},[n,l,o,m,r,f]}class Le extends gt{constructor(t){super(),$t(this,t,Se,ye,vt,{})}}export{Le as component};
