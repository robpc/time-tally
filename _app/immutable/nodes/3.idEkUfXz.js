import{s as gt,o as Zt,n as ht,i as qt,r as Jt,b as Ut,h as Nt,e as kt}from"../chunks/scheduler.BwZ7y9wQ.js";import{S as $t,i as Dt,g as j,m as J,s as z,r as it,h as O,j as P,n as R,f as k,c as W,u as ot,k as Y,a as B,z as b,v as at,o as lt,d as Q,t as K,w as ut,y as vt,A as dt,B as bt,x as Rt,p as At,b as Pt,C as zt,e as yt}from"../chunks/index.0Z0BhWBB.js";import{p as Gt}from"../chunks/stores.-x5MNuMX.js";import{B as It,I as Qt,e as Lt,u as Kt,o as Xt,n as te,m as ee}from"../chunks/InvertedButton.URhQLooj.js";const Wt=1e3,St=60*Wt,Yt=60*St,jt=s=>(""+s).padStart(2,"0");function X(s){if(!s)return"0:00:00";let t=s<0?"-":"",e=Math.abs(s);const n=Math.floor(e/Yt);e-=n*Yt;const o=Math.floor(e/St);e-=o*St;const u=Math.round(e/Wt);return`${t}${n}:${jt(o)}:${jt(u)}`}function ne(s){let t;return{c(){t=J("Start")},l(e){t=R(e,"Start")},m(e,n){B(e,t,n)},d(e){e&&k(t)}}}function se(s){let t;return{c(){t=J("Stop")},l(e){t=R(e,"Stop")},m(e,n){B(e,t,n)},d(e){e&&k(t)}}}function re(s){let t,e,n,o,u,r,m,f,c;return r=new It({props:{disabled:!!s[0],$$slots:{default:[ne]},$$scope:{ctx:s}}}),r.$on("click",s[3]),f=new It({props:{disabled:!!s[1],$$slots:{default:[se]},$$scope:{ctx:s}}}),f.$on("click",s[4]),{c(){t=j("div"),e=j("div"),n=J(s[2]),o=z(),u=j("div"),it(r.$$.fragment),m=z(),it(f.$$.fragment),this.h()},l(d){t=O(d,"DIV",{class:!0});var _=P(t);e=O(_,"DIV",{class:!0});var y=P(e);n=R(y,s[2]),y.forEach(k),o=W(_),u=O(_,"DIV",{class:!0});var v=P(u);ot(r.$$.fragment,v),m=W(v),ot(f.$$.fragment,v),v.forEach(k),_.forEach(k),this.h()},h(){Y(e,"class","text-center font-mono text-4xl"),Y(u,"class","flex flex-row justify-center gap-2 h-8"),Y(t,"class","flex flex-row justify-between gap-2 items-center rounded-2xl bg-zinc-200 p-4")},m(d,_){B(d,t,_),b(t,e),b(e,n),b(t,o),b(t,u),at(r,u,null),b(u,m),at(f,u,null),c=!0},p(d,[_]){(!c||_&4)&&lt(n,d[2]);const y={};_&1&&(y.disabled=!!d[0]),_&1024&&(y.$$scope={dirty:_,ctx:d}),r.$set(y);const v={};_&2&&(v.disabled=!!d[1]),_&1024&&(v.$$scope={dirty:_,ctx:d}),f.$set(v)},i(d){c||(Q(r.$$.fragment,d),Q(f.$$.fragment,d),c=!0)},o(d){K(r.$$.fragment,d),K(f.$$.fragment,d),c=!1},d(d){d&&k(t),ut(r),ut(f)}}}function ie(s,t,e){let n,{onUpdate:o}=t,{onStop:u}=t,r,m,f=X(n),c;function d(){c&&(clearInterval(c),c=void 0)}Zt(()=>d);function _(){d(),e(0,r=new Date),e(1,m=void 0),e(2,f=X(n)),o(n),c=setInterval(()=>{const v=r?Date.now()-r.getTime():0;e(2,f=X(v)),o(v)},1e3)}function y(){d(),e(1,m=new Date),e(2,f=X(n)),r&&(u(r,m),e(0,r=void 0),e(1,m=void 0),e(2,f=X(n)),o(n))}return s.$$set=v=>{"onUpdate"in v&&e(5,o=v.onUpdate),"onStop"in v&&e(6,u=v.onStop)},s.$$.update=()=>{s.$$.dirty&3&&(n=r&&m?m.getTime()-r.getTime():0)},[r,m,f,_,y,o,u]}class oe extends $t{constructor(t){super(),Dt(this,t,ie,re,gt,{onUpdate:5,onStop:6})}}var wt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tt(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Ft={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){var e=1e3,n=6e4,o=36e5,u="millisecond",r="second",m="minute",f="hour",c="day",d="week",_="month",y="quarter",v="year",S="date",g="Invalid Date",w=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,M=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,I={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function($){var h=["th","st","nd","rd"],l=$%100;return"["+$+(h[(l-20)%10]||h[l]||h[0])+"]"}},N=function($,h,l){var a=String($);return!a||a.length>=h?$:""+Array(h+1-a.length).join(l)+$},A={s:N,z:function($){var h=-$.utcOffset(),l=Math.abs(h),a=Math.floor(l/60),i=l%60;return(h<=0?"+":"-")+N(a,2,"0")+":"+N(i,2,"0")},m:function $(h,l){if(h.date()<l.date())return-$(l,h);var a=12*(l.year()-h.year())+(l.month()-h.month()),i=h.clone().add(a,_),p=l-i<0,D=h.clone().add(a+(p?-1:1),_);return+(-(a+(l-i)/(p?i-D:D-i))||0)},a:function($){return $<0?Math.ceil($)||0:Math.floor($)},p:function($){return{M:_,y:v,w:d,d:c,D:S,h:f,m,s:r,ms:u,Q:y}[$]||String($||"").toLowerCase().replace(/s$/,"")},u:function($){return $===void 0}},F="en",G={};G[F]=I;var ft="$isDayjsObject",q=function($){return $ instanceof tt||!(!$||!$[ft])},H=function $(h,l,a){var i;if(!h)return F;if(typeof h=="string"){var p=h.toLowerCase();G[p]&&(i=p),l&&(G[p]=l,i=p);var D=h.split("-");if(!i&&D.length>1)return $(D[0])}else{var L=h.name;G[L]=h,i=L}return!a&&i&&(F=i),i||!a&&F},V=function($,h){if(q($))return $.clone();var l=typeof h=="object"?h:{};return l.date=$,l.args=arguments,new tt(l)},T=A;T.l=H,T.i=q,T.w=function($,h){return V($,{locale:h.$L,utc:h.$u,x:h.$x,$offset:h.$offset})};var tt=function(){function $(l){this.$L=H(l.locale,null,!0),this.parse(l),this.$x=this.$x||l.x||{},this[ft]=!0}var h=$.prototype;return h.parse=function(l){this.$d=function(a){var i=a.date,p=a.utc;if(i===null)return new Date(NaN);if(T.u(i))return new Date;if(i instanceof Date)return new Date(i);if(typeof i=="string"&&!/Z$/i.test(i)){var D=i.match(w);if(D){var L=D[2]-1||0,E=(D[7]||"0").substring(0,3);return p?new Date(Date.UTC(D[1],L,D[3]||1,D[4]||0,D[5]||0,D[6]||0,E)):new Date(D[1],L,D[3]||1,D[4]||0,D[5]||0,D[6]||0,E)}}return new Date(i)}(l),this.init()},h.init=function(){var l=this.$d;this.$y=l.getFullYear(),this.$M=l.getMonth(),this.$D=l.getDate(),this.$W=l.getDay(),this.$H=l.getHours(),this.$m=l.getMinutes(),this.$s=l.getSeconds(),this.$ms=l.getMilliseconds()},h.$utils=function(){return T},h.isValid=function(){return this.$d.toString()!==g},h.isSame=function(l,a){var i=V(l);return this.startOf(a)<=i&&i<=this.endOf(a)},h.isAfter=function(l,a){return V(l)<this.startOf(a)},h.isBefore=function(l,a){return this.endOf(a)<V(l)},h.$g=function(l,a,i){return T.u(l)?this[a]:this.set(i,l)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(l,a){var i=this,p=!!T.u(a)||a,D=T.p(l),L=function(rt,Z){var et=T.w(i.$u?Date.UTC(i.$y,Z,rt):new Date(i.$y,Z,rt),i);return p?et:et.endOf(c)},E=function(rt,Z){return T.w(i.toDate()[rt].apply(i.toDate("s"),(p?[0,0,0,0]:[23,59,59,999]).slice(Z)),i)},C=this.$W,U=this.$M,x=this.$D,ct="set"+(this.$u?"UTC":"");switch(D){case v:return p?L(1,0):L(31,11);case _:return p?L(1,U):L(0,U+1);case d:var st=this.$locale().weekStart||0,pt=(C<st?C+7:C)-st;return L(p?x-pt:x+(6-pt),U);case c:case S:return E(ct+"Hours",0);case f:return E(ct+"Minutes",1);case m:return E(ct+"Seconds",2);case r:return E(ct+"Milliseconds",3);default:return this.clone()}},h.endOf=function(l){return this.startOf(l,!1)},h.$set=function(l,a){var i,p=T.p(l),D="set"+(this.$u?"UTC":""),L=(i={},i[c]=D+"Date",i[S]=D+"Date",i[_]=D+"Month",i[v]=D+"FullYear",i[f]=D+"Hours",i[m]=D+"Minutes",i[r]=D+"Seconds",i[u]=D+"Milliseconds",i)[p],E=p===c?this.$D+(a-this.$W):a;if(p===_||p===v){var C=this.clone().set(S,1);C.$d[L](E),C.init(),this.$d=C.set(S,Math.min(this.$D,C.daysInMonth())).$d}else L&&this.$d[L](E);return this.init(),this},h.set=function(l,a){return this.clone().$set(l,a)},h.get=function(l){return this[T.p(l)]()},h.add=function(l,a){var i,p=this;l=Number(l);var D=T.p(a),L=function(U){var x=V(p);return T.w(x.date(x.date()+Math.round(U*l)),p)};if(D===_)return this.set(_,this.$M+l);if(D===v)return this.set(v,this.$y+l);if(D===c)return L(1);if(D===d)return L(7);var E=(i={},i[m]=n,i[f]=o,i[r]=e,i)[D]||1,C=this.$d.getTime()+l*E;return T.w(C,this)},h.subtract=function(l,a){return this.add(-1*l,a)},h.format=function(l){var a=this,i=this.$locale();if(!this.isValid())return i.invalidDate||g;var p=l||"YYYY-MM-DDTHH:mm:ssZ",D=T.z(this),L=this.$H,E=this.$m,C=this.$M,U=i.weekdays,x=i.months,ct=i.meridiem,st=function(Z,et,_t,Mt){return Z&&(Z[et]||Z(a,p))||_t[et].slice(0,Mt)},pt=function(Z){return T.s(L%12||12,Z,"0")},rt=ct||function(Z,et,_t){var Mt=Z<12?"AM":"PM";return _t?Mt.toLowerCase():Mt};return p.replace(M,function(Z,et){return et||function(_t){switch(_t){case"YY":return String(a.$y).slice(-2);case"YYYY":return T.s(a.$y,4,"0");case"M":return C+1;case"MM":return T.s(C+1,2,"0");case"MMM":return st(i.monthsShort,C,x,3);case"MMMM":return st(x,C);case"D":return a.$D;case"DD":return T.s(a.$D,2,"0");case"d":return String(a.$W);case"dd":return st(i.weekdaysMin,a.$W,U,2);case"ddd":return st(i.weekdaysShort,a.$W,U,3);case"dddd":return U[a.$W];case"H":return String(L);case"HH":return T.s(L,2,"0");case"h":return pt(1);case"hh":return pt(2);case"a":return rt(L,E,!0);case"A":return rt(L,E,!1);case"m":return String(E);case"mm":return T.s(E,2,"0");case"s":return String(a.$s);case"ss":return T.s(a.$s,2,"0");case"SSS":return T.s(a.$ms,3,"0");case"Z":return D}return null}(Z)||D.replace(":","")})},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(l,a,i){var p,D=this,L=T.p(a),E=V(l),C=(E.utcOffset()-this.utcOffset())*n,U=this-E,x=function(){return T.m(D,E)};switch(L){case v:p=x()/12;break;case _:p=x();break;case y:p=x()/3;break;case d:p=(U-C)/6048e5;break;case c:p=(U-C)/864e5;break;case f:p=U/o;break;case m:p=U/n;break;case r:p=U/e;break;default:p=U}return i?p:T.a(p)},h.daysInMonth=function(){return this.endOf(_).$D},h.$locale=function(){return G[this.$L]},h.locale=function(l,a){if(!l)return this.$L;var i=this.clone(),p=H(l,a,!0);return p&&(i.$L=p),i},h.clone=function(){return T.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},$}(),mt=tt.prototype;return V.prototype=mt,[["$ms",u],["$s",r],["$m",m],["$H",f],["$W",c],["$M",_],["$y",v],["$D",S]].forEach(function($){mt[$[1]]=function(h){return this.$g(h,$[0],$[1])}}),V.extend=function($,h){return $.$i||($(h,tt,V),$.$i=!0),V},V.locale=H,V.isDayjs=q,V.unix=function($){return V(1e3*$)},V.en=G[F],V.Ls=G,V.p={},V})})(Ft);var ae=Ft.exports;const nt=Tt(ae);var xt={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){var e={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};return function(n,o,u){var r=o.prototype,m=r.format;u.en.formats=e,r.format=function(f){f===void 0&&(f="YYYY-MM-DDTHH:mm:ssZ");var c=this.$locale().formats,d=function(_,y){return _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(v,S,g){var w=g&&g.toUpperCase();return S||y[g]||e[g]||y[w].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(M,I,N){return I||N.slice(1)})})}(f,c===void 0?{}:c);return m.call(this,d)}}})})(xt);var le=xt.exports;const ue=Tt(le);var Bt={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(wt,function(){return function(e,n,o){n.prototype.isToday=function(){var u="YYYY-MM-DD",r=o();return this.format(u)===r.format(u)}}})})(Bt);var fe=Bt.exports;const ce=Tt(fe);function Ot(s){let t,e;return{c(){t=j("div"),e=J(s[3])},l(n){t=O(n,"DIV",{});var o=P(t);e=R(o,s[3]),o.forEach(k)},m(n,o){B(n,t,o),b(t,e)},p(n,o){o&8&&lt(e,n[3])},d(n){n&&k(t)}}}function Et(s){let t,e;return{c(){t=j("div"),e=J(s[2])},l(n){t=O(n,"DIV",{});var o=P(t);e=R(o,s[2]),o.forEach(k)},m(n,o){B(n,t,o),b(t,e)},p(n,o){o&4&&lt(e,n[2])},d(n){n&&k(t)}}}function de(s){let t,e,n,o=s[6](s[0])+"",u,r,m,f="-",c,d,_,y=s[6](s[1])+"",v,S=!s[5]&&Ot(s),g=!s[5]&&!s[4]&&Et(s);return{c(){t=j("div"),S&&S.c(),e=z(),n=j("div"),u=J(o),r=z(),m=j("div"),m.textContent=f,c=z(),g&&g.c(),d=z(),_=j("div"),v=J(y),this.h()},l(w){t=O(w,"DIV",{class:!0});var M=P(t);S&&S.l(M),e=W(M),n=O(M,"DIV",{});var I=P(n);u=R(I,o),I.forEach(k),r=W(M),m=O(M,"DIV",{"data-svelte-h":!0}),vt(m)!=="svelte-fd8uot"&&(m.textContent=f),c=W(M),g&&g.l(M),d=W(M),_=O(M,"DIV",{});var N=P(_);v=R(N,y),N.forEach(k),M.forEach(k),this.h()},h(){Y(t,"class","flex flex-row gap-1")},m(w,M){B(w,t,M),S&&S.m(t,null),b(t,e),b(t,n),b(n,u),b(t,r),b(t,m),b(t,c),g&&g.m(t,null),b(t,d),b(t,_),b(_,v)},p(w,[M]){w[5]?S&&(S.d(1),S=null):S?S.p(w,M):(S=Ot(w),S.c(),S.m(t,e)),M&1&&o!==(o=w[6](w[0])+"")&&lt(u,o),!w[5]&&!w[4]?g?g.p(w,M):(g=Et(w),g.c(),g.m(t,d)):g&&(g.d(1),g=null),M&2&&y!==(y=w[6](w[1])+"")&&lt(v,y)},i:ht,o:ht,d(w){w&&k(t),S&&S.d(),g&&g.d()}}}function he(s,t,e){let n,o,u,r,m,{start:f}=t,{stop:c}=t;nt.extend(ue),nt.extend(ce);const d=v=>nt(v).format("M/DD/YYYY"),_=v=>nt(v).format("M/DD"),y=v=>nt(v).format("h:mma");return s.$$set=v=>{"start"in v&&e(0,f=v.start),"stop"in v&&e(1,c=v.stop)},s.$$.update=()=>{s.$$.dirty&1&&e(5,n=nt(f).isToday()),s.$$.dirty&1&&e(7,o=nt(f).year()==nt().year()),s.$$.dirty&3&&e(4,u=d(f)==d(c)),s.$$.dirty&129&&e(3,r=o?_(f):d(f)),s.$$.dirty&130&&e(2,m=o?_(c):d(c))},[f,c,m,r,u,n,y,o]}class me extends $t{constructor(t){super(),Dt(this,t,he,de,gt,{start:0,stop:1})}}function pe(s){let t;return{c(){t=J("🞪")},l(e){t=R(e,"🞪")},m(e,n){B(e,t,n)},d(e){e&&k(t)}}}function _e(s){let t,e,n=X(Math.round(new Date(s[0].stop).getTime()-new Date(s[0].start).getTime()))+"",o,u,r,m,f,c,d,_,y,v,S,g,w;return f=new me({props:{start:s[0].start,stop:s[0].stop}}),v=new Qt({props:{$$slots:{default:[pe]},$$scope:{ctx:s}}}),v.$on("click",function(){qt(s[1])&&s[1].apply(this,arguments)}),{c(){t=j("div"),e=j("div"),o=J(n),u=z(),r=j("div"),m=j("div"),it(f.$$.fragment),c=z(),d=j("input"),y=z(),it(v.$$.fragment),this.h()},l(M){t=O(M,"DIV",{class:!0});var I=P(t);e=O(I,"DIV",{class:!0});var N=P(e);o=R(N,n),N.forEach(k),u=W(I),r=O(I,"DIV",{class:!0});var A=P(r);m=O(A,"DIV",{class:!0});var F=P(m);ot(f.$$.fragment,F),F.forEach(k),c=W(A),d=O(A,"INPUT",{id:!0,placeholder:!0,class:!0}),A.forEach(k),y=W(I),ot(v.$$.fragment,I),I.forEach(k),this.h()},h(){Y(e,"class","font-mono text-lg"),Y(m,"class","ml-2 w-full text-right text-xs text-zinc-500"),Y(d,"id",_="session_name_"+s[0].id),Y(d,"placeholder","Unnamed session"),Y(d,"class","svelte-oxet75"),Y(r,"class","gap-0.75 flex w-full flex-col"),Y(t,"class","flex w-full flex-row items-center gap-2")},m(M,I){B(M,t,I),b(t,e),b(e,o),b(t,u),b(t,r),b(r,m),at(f,m,null),b(r,c),b(r,d),dt(d,s[0].name),b(t,y),at(v,t,null),S=!0,g||(w=bt(d,"input",s[2]),g=!0)},p(M,[I]){s=M,(!S||I&1)&&n!==(n=X(Math.round(new Date(s[0].stop).getTime()-new Date(s[0].start).getTime()))+"")&&lt(o,n);const N={};I&1&&(N.start=s[0].start),I&1&&(N.stop=s[0].stop),f.$set(N),(!S||I&1&&_!==(_="session_name_"+s[0].id))&&Y(d,"id",_),I&1&&d.value!==s[0].name&&dt(d,s[0].name);const A={};I&8&&(A.$$scope={dirty:I,ctx:s}),v.$set(A)},i(M){S||(Q(f.$$.fragment,M),Q(v.$$.fragment,M),S=!0)},o(M){K(f.$$.fragment,M),K(v.$$.fragment,M),S=!1},d(M){M&&k(t),ut(f),ut(v),g=!1,w()}}}function ve(s,t,e){let{item:n}=t,{onDelete:o}=t;function u(){n.name=this.value,e(0,n)}return s.$$set=r=>{"item"in r&&e(0,n=r.item),"onDelete"in r&&e(1,o=r.onDelete)},[n,o,u]}class ge extends $t{constructor(t){super(),Dt(this,t,ve,_e,gt,{item:0,onDelete:1})}}function Ct(s,t,e){const n=s.slice();return n[12]=t[e],n[13]=t,n[14]=e,n}function Vt(s){let t,e="No sessions logged so far";return{c(){t=j("div"),t.textContent=e},l(n){t=O(n,"DIV",{"data-svelte-h":!0}),vt(t)!=="svelte-19p8o4v"&&(t.textContent=e)},m(n,o){B(n,t,o)},p:ht,d(n){n&&k(t)}}}function Ht(s,t){let e,n,o,u;function r(){return t[10](t[12])}function m(c){t[11](c,t[12],t[13],t[14])}let f={onDelete:r};return t[12]!==void 0&&(f.item=t[12]),n=new ge({props:f}),Ut.push(()=>zt(n,"item",m)),{key:s,first:null,c(){e=yt(),it(n.$$.fragment),this.h()},l(c){e=yt(),ot(n.$$.fragment,c),this.h()},h(){this.first=e},m(c,d){B(c,e,d),at(n,c,d),u=!0},p(c,d){t=c;const _={};d&1&&(_.onDelete=r),!o&&d&1&&(o=!0,_.item=t[12],Nt(()=>o=!1)),n.$set(_)},i(c){u||(Q(n.$$.fragment,c),u=!0)},o(c){K(n.$$.fragment,c),u=!1},d(c){c&&k(e),ut(n,c)}}}function $e(s){let t,e,n,o,u,r,m=X(s[2])+"",f,c,d,_,y,v,S,g,w,M,I,N,A,F,G="Past Sessions",ft,q,H=[],V=new Map,T,tt,mt;document.title=t=s[0].name+" - Time Tally",I=new oe({props:{onStop:s[8],onUpdate:s[9]}});let $=Lt(s[0].sessions);const h=a=>a[12].id;for(let a=0;a<$.length;a+=1){let i=Ct(s,$,a),p=h(i);V.set(p,H[a]=Ht(p,i))}let l=null;return $.length||(l=Vt()),{c(){e=z(),n=j("div"),o=j("input"),u=z(),r=j("div"),f=J(m),c=z(),d=j("div"),_=j("label"),y=j("input"),v=J(`
			Time Limit`),S=z(),g=j("input"),M=z(),it(I.$$.fragment),N=z(),A=j("div"),F=j("h2"),F.textContent=G,ft=z(),q=j("div");for(let a=0;a<H.length;a+=1)H[a].c();l&&l.c(),this.h()},l(a){Rt("svelte-1x2m9dk",document.head).forEach(k),e=W(a),n=O(a,"DIV",{class:!0});var p=P(n);o=O(p,"INPUT",{id:!0,placeholder:!0,class:!0}),u=W(p),r=O(p,"DIV",{class:!0});var D=P(r);f=R(D,m),D.forEach(k),c=W(p),d=O(p,"DIV",{class:!0});var L=P(d);_=O(L,"LABEL",{for:!0});var E=P(_);y=O(E,"INPUT",{id:!0,type:!0,class:!0}),v=R(E,`
			Time Limit`),E.forEach(k),S=W(L),g=O(L,"INPUT",{id:!0,class:!0}),L.forEach(k),M=W(p),ot(I.$$.fragment,p),N=W(p),A=O(p,"DIV",{class:!0});var C=P(A);F=O(C,"H2",{class:!0,"data-svelte-h":!0}),vt(F)!=="svelte-183ax76"&&(F.textContent=G),ft=W(C),q=O(C,"DIV",{class:!0});var U=P(q);for(let x=0;x<H.length;x+=1)H[x].l(U);l&&l.l(U),U.forEach(k),C.forEach(k),p.forEach(k),this.h()},h(){Y(o,"id","project_name"),Y(o,"placeholder","Project Name"),Y(o,"class","text-4xl svelte-1n5zvr5"),Y(r,"class","text-center font-mono text-6xl"),Y(y,"id","has_time_limit"),Y(y,"type","checkbox"),Y(y,"class","svelte-1n5zvr5"),Y(_,"for","has_time_limit"),Y(g,"id","time_limit"),g.disabled=w=!s[0].isTimeLimited,Y(g,"class","svelte-1n5zvr5"),Y(d,"class","flex flex-col items-center gap-2"),Y(F,"class","mb-2 text-2xl"),Y(q,"class","flex flex-col-reverse gap-4"),Y(A,"class","flex flex-col gap-4"),Y(n,"class","flex flex-col justify-center gap-8")},m(a,i){B(a,e,i),B(a,n,i),b(n,o),dt(o,s[0].name),b(n,u),b(n,r),b(r,f),b(n,c),b(n,d),b(d,_),b(_,y),y.checked=s[0].isTimeLimited,b(_,v),b(d,S),b(d,g),dt(g,s[0].timeLimitDuration),b(n,M),at(I,n,null),b(n,N),b(n,A),b(A,F),b(A,ft),b(A,q);for(let p=0;p<H.length;p+=1)H[p]&&H[p].m(q,null);l&&l.m(q,null),T=!0,tt||(mt=[bt(o,"input",s[5]),bt(y,"change",s[6]),bt(g,"input",s[7])],tt=!0)},p(a,[i]){(!T||i&1)&&t!==(t=a[0].name+" - Time Tally")&&(document.title=t),i&1&&o.value!==a[0].name&&dt(o,a[0].name),(!T||i&4)&&m!==(m=X(a[2])+"")&&lt(f,m),i&1&&(y.checked=a[0].isTimeLimited),(!T||i&1&&w!==(w=!a[0].isTimeLimited))&&(g.disabled=w),i&1&&g.value!==a[0].timeLimitDuration&&dt(g,a[0].timeLimitDuration);const p={};i&1&&(p.onStop=a[8]),i&2&&(p.onUpdate=a[9]),I.$set(p),i&9&&($=Lt(a[0].sessions),At(),H=Kt(H,i,h,1,a,$,V,q,Xt,Ht,null,Ct),Pt(),!$.length&&l?l.p(a,i):$.length?l&&(l.d(1),l=null):(l=Vt(),l.c(),l.m(q,null)))},i(a){if(!T){Q(I.$$.fragment,a);for(let i=0;i<$.length;i+=1)Q(H[i]);T=!0}},o(a){K(I.$$.fragment,a);for(let i=0;i<H.length;i+=1)K(H[i]);T=!1},d(a){a&&(k(e),k(n)),ut(I);for(let i=0;i<H.length;i+=1)H[i].d();l&&l.d(),tt=!1,Jt(mt)}}}function De(s,t,e){let n,o,{project:u}=t;function r(g){e(0,u.sessions=u.sessions.filter(w=>w.id!=g),u)}let m=0;function f(){u.name=this.value,e(0,u)}function c(){u.isTimeLimited=this.checked,e(0,u)}function d(){u.timeLimitDuration=this.value,e(0,u)}const _=(g,w)=>{e(0,u.sessions=[...u.sessions,{id:te(6),start:g.toISOString(),stop:w.toISOString()}],u)},y=g=>{e(1,m=g)},v=g=>r(g.id);function S(g,w,M,I){M[I]=g,e(0,u)}return s.$$set=g=>{"project"in g&&e(0,u=g.project)},s.$$.update=()=>{s.$$.dirty&1&&e(4,n=u.sessions?u.sessions.reduce((g,{start:w,stop:M})=>g+Math.round(new Date(M).getTime()-new Date(w).getTime()),0):0),s.$$.dirty&19&&e(2,o=u.isTimeLimited?parseInt(u.timeLimitDuration||"0")-(n+Math.round(m)):n+Math.round(m))},[u,m,o,r,n,f,c,d,_,y,v,S]}class Me extends $t{constructor(t){super(),Dt(this,t,De,$e,gt,{project:0})}}function be(s){let t,e="Project Not found",n,o,u='<a href="/" class="hover:underline text-blue-400">Return to project list</a>';return{c(){t=j("h1"),t.textContent=e,n=z(),o=j("div"),o.innerHTML=u,this.h()},l(r){t=O(r,"H1",{class:!0,"data-svelte-h":!0}),vt(t)!=="svelte-q7l52f"&&(t.textContent=e),n=W(r),o=O(r,"DIV",{"data-svelte-h":!0}),vt(o)!=="svelte-1w784tw"&&(o.innerHTML=u),this.h()},h(){Y(t,"class","text-2xl mb-4")},m(r,m){B(r,t,m),B(r,n,m),B(r,o,m)},p:ht,i:ht,o:ht,d(r){r&&(k(t),k(n),k(o))}}}function ye(s){let t,e,n;function o(r){s[5](r)}let u={};return s[0].projects[s[1]]!==void 0&&(u.project=s[0].projects[s[1]]),t=new Me({props:u}),Ut.push(()=>zt(t,"project",o)),{c(){it(t.$$.fragment)},l(r){ot(t.$$.fragment,r)},m(r,m){at(t,r,m),n=!0},p(r,m){const f={};!e&&m&3&&(e=!0,f.project=r[0].projects[r[1]],Nt(()=>e=!1)),t.$set(f)},i(r){n||(Q(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){ut(t,r)}}}function Se(s){let t,e,n,o;const u=[ye,be],r=[];function m(f,c){return f[1]>-1?0:f[0].loading?-1:1}return~(t=m(s))&&(e=r[t]=u[t](s)),{c(){e&&e.c(),n=yt()},l(f){e&&e.l(f),n=yt()},m(f,c){~t&&r[t].m(f,c),B(f,n,c),o=!0},p(f,[c]){let d=t;t=m(f),t===d?~t&&r[t].p(f,c):(e&&(At(),K(r[d],1,1,()=>{r[d]=null}),Pt()),~t?(e=r[t],e?e.p(f,c):(e=r[t]=u[t](f),e.c()),Q(e,1),e.m(n.parentNode,n)):e=null)},i(f){o||(Q(e),o=!0)},o(f){K(e),o=!1},d(f){f&&k(n),~t&&r[t].d(f)}}}function we(s,t,e){let n,o,u,r;kt(s,Gt,c=>e(4,r=c));const m=ee.application;kt(s,m,c=>e(0,u=c));function f(c){s.$$.not_equal(u.projects[o],c)&&(u.projects[o]=c,m.set(u))}return s.$$.update=()=>{s.$$.dirty&16&&e(3,n=r.params.id),s.$$.dirty&9&&e(1,o=u.projects.findIndex(c=>c.id==n))},[u,o,m,n,r,f]}class Ye extends $t{constructor(t){super(),Dt(this,t,we,Se,gt,{})}}export{Ye as component};
