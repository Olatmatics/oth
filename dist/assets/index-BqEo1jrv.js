(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Xc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qc(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Il={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(i){(function(e,t){i.exports=e.document?t(e,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return t(n)}})(typeof window<"u"?window:Xc,function(e,t){var n=[],s=Object.getPrototypeOf,o=n.slice,f=n.flat?function(r){return n.flat.call(r)}:function(r){return n.concat.apply([],r)},c=n.push,h=n.indexOf,m={},g=m.toString,y=m.hasOwnProperty,S=y.toString,M=S.call(Object),b={},T=function(a){return typeof a=="function"&&typeof a.nodeType!="number"&&typeof a.item!="function"},v=function(a){return a!=null&&a===a.window},p=e.document,D={type:!0,src:!0,nonce:!0,noModule:!0};function P(r,a,u){u=u||p;var d,_,x=u.createElement("script");if(x.text=r,a)for(d in D)_=a[d]||a.getAttribute&&a.getAttribute(d),_&&x.setAttribute(d,_);u.head.appendChild(x).parentNode.removeChild(x)}function U(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?m[g.call(r)]||"object":typeof r}var k="3.7.1",H=/HTML$/i,l=function(r,a){return new l.fn.init(r,a)};l.fn=l.prototype={jquery:k,constructor:l,length:0,toArray:function(){return o.call(this)},get:function(r){return r==null?o.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var a=l.merge(this.constructor(),r);return a.prevObject=this,a},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(a,u){return r.call(a,u,a)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,a){return(a+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,a){return a%2}))},eq:function(r){var a=this.length,u=+r+(r<0?a:0);return this.pushStack(u>=0&&u<a?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var r,a,u,d,_,x,E=arguments[0]||{},F=1,I=arguments.length,z=!1;for(typeof E=="boolean"&&(z=E,E=arguments[F]||{},F++),typeof E!="object"&&!T(E)&&(E={}),F===I&&(E=this,F--);F<I;F++)if((r=arguments[F])!=null)for(a in r)d=r[a],!(a==="__proto__"||E===d)&&(z&&d&&(l.isPlainObject(d)||(_=Array.isArray(d)))?(u=E[a],_&&!Array.isArray(u)?x=[]:!_&&!l.isPlainObject(u)?x={}:x=u,_=!1,E[a]=l.extend(z,x,d)):d!==void 0&&(E[a]=d));return E},l.extend({expando:"jQuery"+(k+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var a,u;return!r||g.call(r)!=="[object Object]"?!1:(a=s(r),a?(u=y.call(a,"constructor")&&a.constructor,typeof u=="function"&&S.call(u)===M):!0)},isEmptyObject:function(r){var a;for(a in r)return!1;return!0},globalEval:function(r,a,u){P(r,{nonce:a&&a.nonce},u)},each:function(r,a){var u,d=0;if(de(r))for(u=r.length;d<u&&a.call(r[d],d,r[d])!==!1;d++);else for(d in r)if(a.call(r[d],d,r[d])===!1)break;return r},text:function(r){var a,u="",d=0,_=r.nodeType;if(!_)for(;a=r[d++];)u+=l.text(a);return _===1||_===11?r.textContent:_===9?r.documentElement.textContent:_===3||_===4?r.nodeValue:u},makeArray:function(r,a){var u=a||[];return r!=null&&(de(Object(r))?l.merge(u,typeof r=="string"?[r]:r):c.call(u,r)),u},inArray:function(r,a,u){return a==null?-1:h.call(a,r,u)},isXMLDoc:function(r){var a=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!H.test(a||u&&u.nodeName||"HTML")},merge:function(r,a){for(var u=+a.length,d=0,_=r.length;d<u;d++)r[_++]=a[d];return r.length=_,r},grep:function(r,a,u){for(var d,_=[],x=0,E=r.length,F=!u;x<E;x++)d=!a(r[x],x),d!==F&&_.push(r[x]);return _},map:function(r,a,u){var d,_,x=0,E=[];if(de(r))for(d=r.length;x<d;x++)_=a(r[x],x,u),_!=null&&E.push(_);else for(x in r)_=a(r[x],x,u),_!=null&&E.push(_);return f(E)},guid:1,support:b}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,a){m["[object "+a+"]"]=a.toLowerCase()});function de(r){var a=!!r&&"length"in r&&r.length,u=U(r);return T(r)||v(r)?!1:u==="array"||a===0||typeof a=="number"&&a>0&&a-1 in r}function w(r,a){return r.nodeName&&r.nodeName.toLowerCase()===a.toLowerCase()}var N=n.pop,se=n.sort,fe=n.splice,ue="[\\x20\\t\\r\\n\\f]",G=new RegExp("^"+ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ue+"+$","g");l.contains=function(r,a){var u=a&&a.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var ee=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function re(r,a){return a?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(ee,re)};var oe=p,le=c;(function(){var r,a,u,d,_,x=le,E,F,I,z,Q,ie=l.expando,X=0,xe=0,Je=zr(),yt=zr(),dt=zr(),Qt=zr(),Vt=function(R,B){return R===B&&(_=!0),0},Fn="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",On="(?:\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",_t="\\["+ue+"*("+On+")(?:"+ue+"*([*^$|!~]?=)"+ue+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+On+"))|)"+ue+"*\\]",xi=":("+On+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+_t+")*)|.*)\\)|)",St=new RegExp(ue+"+","g"),Bt=new RegExp("^"+ue+"*,"+ue+"*"),yr=new RegExp("^"+ue+"*([>+~]|"+ue+")"+ue+"*"),zs=new RegExp(ue+"|>"),Bn=new RegExp(xi),Sr=new RegExp("^"+On+"$"),Hn={ID:new RegExp("^#("+On+")"),CLASS:new RegExp("^\\.("+On+")"),TAG:new RegExp("^("+On+"|[*])"),ATTR:new RegExp("^"+_t),PSEUDO:new RegExp("^"+xi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ue+"*(even|odd|(([+-]|)(\\d*)n|)"+ue+"*(?:([+-]|)"+ue+"*(\\d+)|))"+ue+"*\\)|)","i"),bool:new RegExp("^(?:"+Fn+")$","i"),needsContext:new RegExp("^"+ue+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ue+"*((?:-\\d)?\\d*)"+ue+"*\\)|)(?=[^-]|$)","i")},ti=/^(?:input|select|textarea|button)$/i,ni=/^h\d$/i,_n=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Gs=/[+~]/,Wn=new RegExp("\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\([^\\r\\n\\f])","g"),Xn=function(R,B){var W="0x"+R.slice(1)-65536;return B||(W<0?String.fromCharCode(W+65536):String.fromCharCode(W>>10|55296,W&1023|56320))},Bc=function(){ii()},Hc=kr(function(R){return R.disabled===!0&&w(R,"fieldset")},{dir:"parentNode",next:"legend"});function zc(){try{return E.activeElement}catch{}}try{x.apply(n=o.call(oe.childNodes),oe.childNodes),n[oe.childNodes.length].nodeType}catch{x={apply:function(B,W){le.apply(B,o.call(W))},call:function(B){le.apply(B,o.call(arguments,1))}}}function At(R,B,W,K){var ne,Me,Ce,Oe,Re,mt,Ze,et=B&&B.ownerDocument,gt=B?B.nodeType:9;if(W=W||[],typeof R!="string"||!R||gt!==1&&gt!==9&&gt!==11)return W;if(!K&&(ii(B),B=B||E,I)){if(gt!==11&&(Re=_n.exec(R)))if(ne=Re[1]){if(gt===9)if(Ce=B.getElementById(ne)){if(Ce.id===ne)return x.call(W,Ce),W}else return W;else if(et&&(Ce=et.getElementById(ne))&&At.contains(B,Ce)&&Ce.id===ne)return x.call(W,Ce),W}else{if(Re[2])return x.apply(W,B.getElementsByTagName(R)),W;if((ne=Re[3])&&B.getElementsByClassName)return x.apply(W,B.getElementsByClassName(ne)),W}if(!Qt[R+" "]&&(!z||!z.test(R))){if(Ze=R,et=B,gt===1&&(zs.test(R)||yr.test(R))){for(et=Gs.test(R)&&ks(B.parentNode)||B,(et!=B||!b.scope)&&((Oe=B.getAttribute("id"))?Oe=l.escapeSelector(Oe):B.setAttribute("id",Oe=ie)),mt=Mr(R),Me=mt.length;Me--;)mt[Me]=(Oe?"#"+Oe:":scope")+" "+Gr(mt[Me]);Ze=mt.join(",")}try{return x.apply(W,et.querySelectorAll(Ze)),W}catch{Qt(R,!0)}finally{Oe===ie&&B.removeAttribute("id")}}}return to(R.replace(G,"$1"),B,W,K)}function zr(){var R=[];function B(W,K){return R.push(W+" ")>a.cacheLength&&delete B[R.shift()],B[W+" "]=K}return B}function An(R){return R[ie]=!0,R}function zi(R){var B=E.createElement("fieldset");try{return!!R(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function Gc(R){return function(B){return w(B,"input")&&B.type===R}}function kc(R){return function(B){return(w(B,"input")||w(B,"button"))&&B.type===R}}function Qa(R){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===R:B.disabled===R:B.isDisabled===R||B.isDisabled!==!R&&Hc(B)===R:B.disabled===R:"label"in B?B.disabled===R:!1}}function yi(R){return An(function(B){return B=+B,An(function(W,K){for(var ne,Me=R([],W.length,B),Ce=Me.length;Ce--;)W[ne=Me[Ce]]&&(W[ne]=!(K[ne]=W[ne]))})})}function ks(R){return R&&typeof R.getElementsByTagName<"u"&&R}function ii(R){var B,W=R?R.ownerDocument||R:oe;return W==E||W.nodeType!==9||!W.documentElement||(E=W,F=E.documentElement,I=!l.isXMLDoc(E),Q=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&oe!=E&&(B=E.defaultView)&&B.top!==B&&B.addEventListener("unload",Bc),b.getById=zi(function(K){return F.appendChild(K).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),b.disconnectedMatch=zi(function(K){return Q.call(K,"*")}),b.scope=zi(function(){return E.querySelectorAll(":scope")}),b.cssHas=zi(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(a.filter.ID=function(K){var ne=K.replace(Wn,Xn);return function(Me){return Me.getAttribute("id")===ne}},a.find.ID=function(K,ne){if(typeof ne.getElementById<"u"&&I){var Me=ne.getElementById(K);return Me?[Me]:[]}}):(a.filter.ID=function(K){var ne=K.replace(Wn,Xn);return function(Me){var Ce=typeof Me.getAttributeNode<"u"&&Me.getAttributeNode("id");return Ce&&Ce.value===ne}},a.find.ID=function(K,ne){if(typeof ne.getElementById<"u"&&I){var Me,Ce,Oe,Re=ne.getElementById(K);if(Re){if(Me=Re.getAttributeNode("id"),Me&&Me.value===K)return[Re];for(Oe=ne.getElementsByName(K),Ce=0;Re=Oe[Ce++];)if(Me=Re.getAttributeNode("id"),Me&&Me.value===K)return[Re]}return[]}}),a.find.TAG=function(K,ne){return typeof ne.getElementsByTagName<"u"?ne.getElementsByTagName(K):ne.querySelectorAll(K)},a.find.CLASS=function(K,ne){if(typeof ne.getElementsByClassName<"u"&&I)return ne.getElementsByClassName(K)},z=[],zi(function(K){var ne;F.appendChild(K).innerHTML="<a id='"+ie+"' href='' disabled='disabled'></a><select id='"+ie+"-\r\\' disabled='disabled'><option selected=''></option></select>",K.querySelectorAll("[selected]").length||z.push("\\["+ue+"*(?:value|"+Fn+")"),K.querySelectorAll("[id~="+ie+"-]").length||z.push("~="),K.querySelectorAll("a#"+ie+"+*").length||z.push(".#.+[+~]"),K.querySelectorAll(":checked").length||z.push(":checked"),ne=E.createElement("input"),ne.setAttribute("type","hidden"),K.appendChild(ne).setAttribute("name","D"),F.appendChild(K).disabled=!0,K.querySelectorAll(":disabled").length!==2&&z.push(":enabled",":disabled"),ne=E.createElement("input"),ne.setAttribute("name",""),K.appendChild(ne),K.querySelectorAll("[name='']").length||z.push("\\["+ue+"*name"+ue+"*="+ue+`*(?:''|"")`)}),b.cssHas||z.push(":has"),z=z.length&&new RegExp(z.join("|")),Vt=function(K,ne){if(K===ne)return _=!0,0;var Me=!K.compareDocumentPosition-!ne.compareDocumentPosition;return Me||(Me=(K.ownerDocument||K)==(ne.ownerDocument||ne)?K.compareDocumentPosition(ne):1,Me&1||!b.sortDetached&&ne.compareDocumentPosition(K)===Me?K===E||K.ownerDocument==oe&&At.contains(oe,K)?-1:ne===E||ne.ownerDocument==oe&&At.contains(oe,ne)?1:d?h.call(d,K)-h.call(d,ne):0:Me&4?-1:1)}),E}At.matches=function(R,B){return At(R,null,null,B)},At.matchesSelector=function(R,B){if(ii(R),I&&!Qt[B+" "]&&(!z||!z.test(B)))try{var W=Q.call(R,B);if(W||b.disconnectedMatch||R.document&&R.document.nodeType!==11)return W}catch{Qt(B,!0)}return At(B,E,null,[R]).length>0},At.contains=function(R,B){return(R.ownerDocument||R)!=E&&ii(R),l.contains(R,B)},At.attr=function(R,B){(R.ownerDocument||R)!=E&&ii(R);var W=a.attrHandle[B.toLowerCase()],K=W&&y.call(a.attrHandle,B.toLowerCase())?W(R,B,!I):void 0;return K!==void 0?K:R.getAttribute(B)},At.error=function(R){throw new Error("Syntax error, unrecognized expression: "+R)},l.uniqueSort=function(R){var B,W=[],K=0,ne=0;if(_=!b.sortStable,d=!b.sortStable&&o.call(R,0),se.call(R,Vt),_){for(;B=R[ne++];)B===R[ne]&&(K=W.push(ne));for(;K--;)fe.call(R,W[K],1)}return d=null,R},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(o.apply(this)))},a=l.expr={cacheLength:50,createPseudo:An,match:Hn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(R){return R[1]=R[1].replace(Wn,Xn),R[3]=(R[3]||R[4]||R[5]||"").replace(Wn,Xn),R[2]==="~="&&(R[3]=" "+R[3]+" "),R.slice(0,4)},CHILD:function(R){return R[1]=R[1].toLowerCase(),R[1].slice(0,3)==="nth"?(R[3]||At.error(R[0]),R[4]=+(R[4]?R[5]+(R[6]||1):2*(R[3]==="even"||R[3]==="odd")),R[5]=+(R[7]+R[8]||R[3]==="odd")):R[3]&&At.error(R[0]),R},PSEUDO:function(R){var B,W=!R[6]&&R[2];return Hn.CHILD.test(R[0])?null:(R[3]?R[2]=R[4]||R[5]||"":W&&Bn.test(W)&&(B=Mr(W,!0))&&(B=W.indexOf(")",W.length-B)-W.length)&&(R[0]=R[0].slice(0,B),R[2]=W.slice(0,B)),R.slice(0,3))}},filter:{TAG:function(R){var B=R.replace(Wn,Xn).toLowerCase();return R==="*"?function(){return!0}:function(W){return w(W,B)}},CLASS:function(R){var B=Je[R+" "];return B||(B=new RegExp("(^|"+ue+")"+R+"("+ue+"|$)"))&&Je(R,function(W){return B.test(typeof W.className=="string"&&W.className||typeof W.getAttribute<"u"&&W.getAttribute("class")||"")})},ATTR:function(R,B,W){return function(K){var ne=At.attr(K,R);return ne==null?B==="!=":B?(ne+="",B==="="?ne===W:B==="!="?ne!==W:B==="^="?W&&ne.indexOf(W)===0:B==="*="?W&&ne.indexOf(W)>-1:B==="$="?W&&ne.slice(-W.length)===W:B==="~="?(" "+ne.replace(St," ")+" ").indexOf(W)>-1:B==="|="?ne===W||ne.slice(0,W.length+1)===W+"-":!1):!0}},CHILD:function(R,B,W,K,ne){var Me=R.slice(0,3)!=="nth",Ce=R.slice(-4)!=="last",Oe=B==="of-type";return K===1&&ne===0?function(Re){return!!Re.parentNode}:function(Re,mt,Ze){var et,gt,qe,Pt,un,nn=Me!==Ce?"nextSibling":"previousSibling",vn=Re.parentNode,zn=Oe&&Re.nodeName.toLowerCase(),Gi=!Ze&&!Oe,an=!1;if(vn){if(Me){for(;nn;){for(qe=Re;qe=qe[nn];)if(Oe?w(qe,zn):qe.nodeType===1)return!1;un=nn=R==="only"&&!un&&"nextSibling"}return!0}if(un=[Ce?vn.firstChild:vn.lastChild],Ce&&Gi){for(gt=vn[ie]||(vn[ie]={}),et=gt[R]||[],Pt=et[0]===X&&et[1],an=Pt&&et[2],qe=Pt&&vn.childNodes[Pt];qe=++Pt&&qe&&qe[nn]||(an=Pt=0)||un.pop();)if(qe.nodeType===1&&++an&&qe===Re){gt[R]=[X,Pt,an];break}}else if(Gi&&(gt=Re[ie]||(Re[ie]={}),et=gt[R]||[],Pt=et[0]===X&&et[1],an=Pt),an===!1)for(;(qe=++Pt&&qe&&qe[nn]||(an=Pt=0)||un.pop())&&!((Oe?w(qe,zn):qe.nodeType===1)&&++an&&(Gi&&(gt=qe[ie]||(qe[ie]={}),gt[R]=[X,an]),qe===Re)););return an-=ne,an===K||an%K===0&&an/K>=0}}},PSEUDO:function(R,B){var W,K=a.pseudos[R]||a.setFilters[R.toLowerCase()]||At.error("unsupported pseudo: "+R);return K[ie]?K(B):K.length>1?(W=[R,R,"",B],a.setFilters.hasOwnProperty(R.toLowerCase())?An(function(ne,Me){for(var Ce,Oe=K(ne,B),Re=Oe.length;Re--;)Ce=h.call(ne,Oe[Re]),ne[Ce]=!(Me[Ce]=Oe[Re])}):function(ne){return K(ne,0,W)}):K}},pseudos:{not:An(function(R){var B=[],W=[],K=qs(R.replace(G,"$1"));return K[ie]?An(function(ne,Me,Ce,Oe){for(var Re,mt=K(ne,null,Oe,[]),Ze=ne.length;Ze--;)(Re=mt[Ze])&&(ne[Ze]=!(Me[Ze]=Re))}):function(ne,Me,Ce){return B[0]=ne,K(B,null,Ce,W),B[0]=null,!W.pop()}}),has:An(function(R){return function(B){return At(R,B).length>0}}),contains:An(function(R){return R=R.replace(Wn,Xn),function(B){return(B.textContent||l.text(B)).indexOf(R)>-1}}),lang:An(function(R){return Sr.test(R||"")||At.error("unsupported lang: "+R),R=R.replace(Wn,Xn).toLowerCase(),function(B){var W;do if(W=I?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return W=W.toLowerCase(),W===R||W.indexOf(R+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(R){var B=e.location&&e.location.hash;return B&&B.slice(1)===R.id},root:function(R){return R===F},focus:function(R){return R===zc()&&E.hasFocus()&&!!(R.type||R.href||~R.tabIndex)},enabled:Qa(!1),disabled:Qa(!0),checked:function(R){return w(R,"input")&&!!R.checked||w(R,"option")&&!!R.selected},selected:function(R){return R.parentNode&&R.parentNode.selectedIndex,R.selected===!0},empty:function(R){for(R=R.firstChild;R;R=R.nextSibling)if(R.nodeType<6)return!1;return!0},parent:function(R){return!a.pseudos.empty(R)},header:function(R){return ni.test(R.nodeName)},input:function(R){return ti.test(R.nodeName)},button:function(R){return w(R,"input")&&R.type==="button"||w(R,"button")},text:function(R){var B;return w(R,"input")&&R.type==="text"&&((B=R.getAttribute("type"))==null||B.toLowerCase()==="text")},first:yi(function(){return[0]}),last:yi(function(R,B){return[B-1]}),eq:yi(function(R,B,W){return[W<0?W+B:W]}),even:yi(function(R,B){for(var W=0;W<B;W+=2)R.push(W);return R}),odd:yi(function(R,B){for(var W=1;W<B;W+=2)R.push(W);return R}),lt:yi(function(R,B,W){var K;for(W<0?K=W+B:W>B?K=B:K=W;--K>=0;)R.push(K);return R}),gt:yi(function(R,B,W){for(var K=W<0?W+B:W;++K<B;)R.push(K);return R})}},a.pseudos.nth=a.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})a.pseudos[r]=Gc(r);for(r in{submit:!0,reset:!0})a.pseudos[r]=kc(r);function eo(){}eo.prototype=a.filters=a.pseudos,a.setFilters=new eo;function Mr(R,B){var W,K,ne,Me,Ce,Oe,Re,mt=yt[R+" "];if(mt)return B?0:mt.slice(0);for(Ce=R,Oe=[],Re=a.preFilter;Ce;){(!W||(K=Bt.exec(Ce)))&&(K&&(Ce=Ce.slice(K[0].length)||Ce),Oe.push(ne=[])),W=!1,(K=yr.exec(Ce))&&(W=K.shift(),ne.push({value:W,type:K[0].replace(G," ")}),Ce=Ce.slice(W.length));for(Me in a.filter)(K=Hn[Me].exec(Ce))&&(!Re[Me]||(K=Re[Me](K)))&&(W=K.shift(),ne.push({value:W,type:Me,matches:K}),Ce=Ce.slice(W.length));if(!W)break}return B?Ce.length:Ce?At.error(R):yt(R,Oe).slice(0)}function Gr(R){for(var B=0,W=R.length,K="";B<W;B++)K+=R[B].value;return K}function kr(R,B,W){var K=B.dir,ne=B.next,Me=ne||K,Ce=W&&Me==="parentNode",Oe=xe++;return B.first?function(Re,mt,Ze){for(;Re=Re[K];)if(Re.nodeType===1||Ce)return R(Re,mt,Ze);return!1}:function(Re,mt,Ze){var et,gt,qe=[X,Oe];if(Ze){for(;Re=Re[K];)if((Re.nodeType===1||Ce)&&R(Re,mt,Ze))return!0}else for(;Re=Re[K];)if(Re.nodeType===1||Ce)if(gt=Re[ie]||(Re[ie]={}),ne&&w(Re,ne))Re=Re[K]||Re;else{if((et=gt[Me])&&et[0]===X&&et[1]===Oe)return qe[2]=et[2];if(gt[Me]=qe,qe[2]=R(Re,mt,Ze))return!0}return!1}}function Vs(R){return R.length>1?function(B,W,K){for(var ne=R.length;ne--;)if(!R[ne](B,W,K))return!1;return!0}:R[0]}function Vc(R,B,W){for(var K=0,ne=B.length;K<ne;K++)At(R,B[K],W);return W}function Vr(R,B,W,K,ne){for(var Me,Ce=[],Oe=0,Re=R.length,mt=B!=null;Oe<Re;Oe++)(Me=R[Oe])&&(!W||W(Me,K,ne))&&(Ce.push(Me),mt&&B.push(Oe));return Ce}function Ws(R,B,W,K,ne,Me){return K&&!K[ie]&&(K=Ws(K)),ne&&!ne[ie]&&(ne=Ws(ne,Me)),An(function(Ce,Oe,Re,mt){var Ze,et,gt,qe,Pt=[],un=[],nn=Oe.length,vn=Ce||Vc(B||"*",Re.nodeType?[Re]:Re,[]),zn=R&&(Ce||!B)?Vr(vn,Pt,R,Re,mt):vn;if(W?(qe=ne||(Ce?R:nn||K)?[]:Oe,W(zn,qe,Re,mt)):qe=zn,K)for(Ze=Vr(qe,un),K(Ze,[],Re,mt),et=Ze.length;et--;)(gt=Ze[et])&&(qe[un[et]]=!(zn[un[et]]=gt));if(Ce){if(ne||R){if(ne){for(Ze=[],et=qe.length;et--;)(gt=qe[et])&&Ze.push(zn[et]=gt);ne(null,qe=[],Ze,mt)}for(et=qe.length;et--;)(gt=qe[et])&&(Ze=ne?h.call(Ce,gt):Pt[et])>-1&&(Ce[Ze]=!(Oe[Ze]=gt))}}else qe=Vr(qe===Oe?qe.splice(nn,qe.length):qe),ne?ne(null,Oe,qe,mt):x.apply(Oe,qe)})}function Xs(R){for(var B,W,K,ne=R.length,Me=a.relative[R[0].type],Ce=Me||a.relative[" "],Oe=Me?1:0,Re=kr(function(et){return et===B},Ce,!0),mt=kr(function(et){return h.call(B,et)>-1},Ce,!0),Ze=[function(et,gt,qe){var Pt=!Me&&(qe||gt!=u)||((B=gt).nodeType?Re(et,gt,qe):mt(et,gt,qe));return B=null,Pt}];Oe<ne;Oe++)if(W=a.relative[R[Oe].type])Ze=[kr(Vs(Ze),W)];else{if(W=a.filter[R[Oe].type].apply(null,R[Oe].matches),W[ie]){for(K=++Oe;K<ne&&!a.relative[R[K].type];K++);return Ws(Oe>1&&Vs(Ze),Oe>1&&Gr(R.slice(0,Oe-1).concat({value:R[Oe-2].type===" "?"*":""})).replace(G,"$1"),W,Oe<K&&Xs(R.slice(Oe,K)),K<ne&&Xs(R=R.slice(K)),K<ne&&Gr(R))}Ze.push(W)}return Vs(Ze)}function Wc(R,B){var W=B.length>0,K=R.length>0,ne=function(Me,Ce,Oe,Re,mt){var Ze,et,gt,qe=0,Pt="0",un=Me&&[],nn=[],vn=u,zn=Me||K&&a.find.TAG("*",mt),Gi=X+=vn==null?1:Math.random()||.1,an=zn.length;for(mt&&(u=Ce==E||Ce||mt);Pt!==an&&(Ze=zn[Pt])!=null;Pt++){if(K&&Ze){for(et=0,!Ce&&Ze.ownerDocument!=E&&(ii(Ze),Oe=!I);gt=R[et++];)if(gt(Ze,Ce||E,Oe)){x.call(Re,Ze);break}mt&&(X=Gi)}W&&((Ze=!gt&&Ze)&&qe--,Me&&un.push(Ze))}if(qe+=Pt,W&&Pt!==qe){for(et=0;gt=B[et++];)gt(un,nn,Ce,Oe);if(Me){if(qe>0)for(;Pt--;)un[Pt]||nn[Pt]||(nn[Pt]=N.call(Re));nn=Vr(nn)}x.apply(Re,nn),mt&&!Me&&nn.length>0&&qe+B.length>1&&l.uniqueSort(Re)}return mt&&(X=Gi,u=vn),un};return W?An(ne):ne}function qs(R,B){var W,K=[],ne=[],Me=dt[R+" "];if(!Me){for(B||(B=Mr(R)),W=B.length;W--;)Me=Xs(B[W]),Me[ie]?K.push(Me):ne.push(Me);Me=dt(R,Wc(ne,K)),Me.selector=R}return Me}function to(R,B,W,K){var ne,Me,Ce,Oe,Re,mt=typeof R=="function"&&R,Ze=!K&&Mr(R=mt.selector||R);if(W=W||[],Ze.length===1){if(Me=Ze[0]=Ze[0].slice(0),Me.length>2&&(Ce=Me[0]).type==="ID"&&B.nodeType===9&&I&&a.relative[Me[1].type]){if(B=(a.find.ID(Ce.matches[0].replace(Wn,Xn),B)||[])[0],B)mt&&(B=B.parentNode);else return W;R=R.slice(Me.shift().value.length)}for(ne=Hn.needsContext.test(R)?0:Me.length;ne--&&(Ce=Me[ne],!a.relative[Oe=Ce.type]);)if((Re=a.find[Oe])&&(K=Re(Ce.matches[0].replace(Wn,Xn),Gs.test(Me[0].type)&&ks(B.parentNode)||B))){if(Me.splice(ne,1),R=K.length&&Gr(Me),!R)return x.apply(W,K),W;break}}return(mt||qs(R,Ze))(K,B,!I,W,!B||Gs.test(R)&&ks(B.parentNode)||B),W}b.sortStable=ie.split("").sort(Vt).join("")===ie,ii(),b.sortDetached=zi(function(R){return R.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=At,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,At.compile=qs,At.select=to,At.setDocument=ii,At.tokenize=Mr,At.escape=l.escapeSelector,At.getText=l.text,At.isXML=l.isXMLDoc,At.selectors=l.expr,At.support=l.support,At.uniqueSort=l.uniqueSort})();var ce=function(r,a,u){for(var d=[],_=u!==void 0;(r=r[a])&&r.nodeType!==9;)if(r.nodeType===1){if(_&&l(r).is(u))break;d.push(r)}return d},he=function(r,a){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==a&&u.push(r);return u},Se=l.expr.match.needsContext,Ee=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function te(r,a,u){return T(a)?l.grep(r,function(d,_){return!!a.call(d,_,d)!==u}):a.nodeType?l.grep(r,function(d){return d===a!==u}):typeof a!="string"?l.grep(r,function(d){return h.call(a,d)>-1!==u}):l.filter(a,r,u)}l.filter=function(r,a,u){var d=a[0];return u&&(r=":not("+r+")"),a.length===1&&d.nodeType===1?l.find.matchesSelector(d,r)?[d]:[]:l.find.matches(r,l.grep(a,function(_){return _.nodeType===1}))},l.fn.extend({find:function(r){var a,u,d=this.length,_=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(a=0;a<d;a++)if(l.contains(_[a],this))return!0}));for(u=this.pushStack([]),a=0;a<d;a++)l.find(r,_[a],u);return d>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(te(this,r||[],!1))},not:function(r){return this.pushStack(te(this,r||[],!0))},is:function(r){return!!te(this,typeof r=="string"&&Se.test(r)?l(r):r||[],!1).length}});var ge,Le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,ke=l.fn.init=function(r,a,u){var d,_;if(!r)return this;if(u=u||ge,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?d=[null,r,null]:d=Le.exec(r),d&&(d[1]||!a))if(d[1]){if(a=a instanceof l?a[0]:a,l.merge(this,l.parseHTML(d[1],a&&a.nodeType?a.ownerDocument||a:p,!0)),Ee.test(d[1])&&l.isPlainObject(a))for(d in a)T(this[d])?this[d](a[d]):this.attr(d,a[d]);return this}else return _=p.getElementById(d[2]),_&&(this[0]=_,this.length=1),this;else return!a||a.jquery?(a||u).find(r):this.constructor(a).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(T(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};ke.prototype=l.fn,ge=l(p);var Ge=/^(?:parents|prev(?:Until|All))/,it={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var a=l(r,this),u=a.length;return this.filter(function(){for(var d=0;d<u;d++)if(l.contains(this,a[d]))return!0})},closest:function(r,a){var u,d=0,_=this.length,x=[],E=typeof r!="string"&&l(r);if(!Se.test(r)){for(;d<_;d++)for(u=this[d];u&&u!==a;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){x.push(u);break}}return this.pushStack(x.length>1?l.uniqueSort(x):x)},index:function(r){return r?typeof r=="string"?h.call(l(r),this[0]):h.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,a){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,a))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function rt(r,a){for(;(r=r[a])&&r.nodeType!==1;);return r}l.each({parent:function(r){var a=r.parentNode;return a&&a.nodeType!==11?a:null},parents:function(r){return ce(r,"parentNode")},parentsUntil:function(r,a,u){return ce(r,"parentNode",u)},next:function(r){return rt(r,"nextSibling")},prev:function(r){return rt(r,"previousSibling")},nextAll:function(r){return ce(r,"nextSibling")},prevAll:function(r){return ce(r,"previousSibling")},nextUntil:function(r,a,u){return ce(r,"nextSibling",u)},prevUntil:function(r,a,u){return ce(r,"previousSibling",u)},siblings:function(r){return he((r.parentNode||{}).firstChild,r)},children:function(r){return he(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(w(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,a){l.fn[r]=function(u,d){var _=l.map(this,a,u);return r.slice(-5)!=="Until"&&(d=u),d&&typeof d=="string"&&(_=l.filter(d,_)),this.length>1&&(it[r]||l.uniqueSort(_),Ge.test(r)&&_.reverse()),this.pushStack(_)}});var He=/[^\x20\t\r\n\f]+/g;function vt(r){var a={};return l.each(r.match(He)||[],function(u,d){a[d]=!0}),a}l.Callbacks=function(r){r=typeof r=="string"?vt(r):l.extend({},r);var a,u,d,_,x=[],E=[],F=-1,I=function(){for(_=_||r.once,d=a=!0;E.length;F=-1)for(u=E.shift();++F<x.length;)x[F].apply(u[0],u[1])===!1&&r.stopOnFalse&&(F=x.length,u=!1);r.memory||(u=!1),a=!1,_&&(u?x=[]:x="")},z={add:function(){return x&&(u&&!a&&(F=x.length-1,E.push(u)),function Q(ie){l.each(ie,function(X,xe){T(xe)?(!r.unique||!z.has(xe))&&x.push(xe):xe&&xe.length&&U(xe)!=="string"&&Q(xe)})}(arguments),u&&!a&&I()),this},remove:function(){return l.each(arguments,function(Q,ie){for(var X;(X=l.inArray(ie,x,X))>-1;)x.splice(X,1),X<=F&&F--}),this},has:function(Q){return Q?l.inArray(Q,x)>-1:x.length>0},empty:function(){return x&&(x=[]),this},disable:function(){return _=E=[],x=u="",this},disabled:function(){return!x},lock:function(){return _=E=[],!u&&!a&&(x=u=""),this},locked:function(){return!!_},fireWith:function(Q,ie){return _||(ie=ie||[],ie=[Q,ie.slice?ie.slice():ie],E.push(ie),a||I()),this},fire:function(){return z.fireWith(this,arguments),this},fired:function(){return!!d}};return z};function q(r){return r}function Ht(r){throw r}function Xe(r,a,u,d){var _;try{r&&T(_=r.promise)?_.call(r).done(a).fail(u):r&&T(_=r.then)?_.call(r,a,u):a.apply(void 0,[r].slice(d))}catch(x){u.apply(void 0,[x])}}l.extend({Deferred:function(r){var a=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",d={state:function(){return u},always:function(){return _.done(arguments).fail(arguments),this},catch:function(x){return d.then(null,x)},pipe:function(){var x=arguments;return l.Deferred(function(E){l.each(a,function(F,I){var z=T(x[I[4]])&&x[I[4]];_[I[1]](function(){var Q=z&&z.apply(this,arguments);Q&&T(Q.promise)?Q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[I[0]+"With"](this,z?[Q]:arguments)})}),x=null}).promise()},then:function(x,E,F){var I=0;function z(Q,ie,X,xe){return function(){var Je=this,yt=arguments,dt=function(){var Vt,Fn;if(!(Q<I)){if(Vt=X.apply(Je,yt),Vt===ie.promise())throw new TypeError("Thenable self-resolution");Fn=Vt&&(typeof Vt=="object"||typeof Vt=="function")&&Vt.then,T(Fn)?xe?Fn.call(Vt,z(I,ie,q,xe),z(I,ie,Ht,xe)):(I++,Fn.call(Vt,z(I,ie,q,xe),z(I,ie,Ht,xe),z(I,ie,q,ie.notifyWith))):(X!==q&&(Je=void 0,yt=[Vt]),(xe||ie.resolveWith)(Je,yt))}},Qt=xe?dt:function(){try{dt()}catch(Vt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Vt,Qt.error),Q+1>=I&&(X!==Ht&&(Je=void 0,yt=[Vt]),ie.rejectWith(Je,yt))}};Q?Qt():(l.Deferred.getErrorHook?Qt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Qt.error=l.Deferred.getStackHook()),e.setTimeout(Qt))}}return l.Deferred(function(Q){a[0][3].add(z(0,Q,T(F)?F:q,Q.notifyWith)),a[1][3].add(z(0,Q,T(x)?x:q)),a[2][3].add(z(0,Q,T(E)?E:Ht))}).promise()},promise:function(x){return x!=null?l.extend(x,d):d}},_={};return l.each(a,function(x,E){var F=E[2],I=E[5];d[E[1]]=F.add,I&&F.add(function(){u=I},a[3-x][2].disable,a[3-x][3].disable,a[0][2].lock,a[0][3].lock),F.add(E[3].fire),_[E[0]]=function(){return _[E[0]+"With"](this===_?void 0:this,arguments),this},_[E[0]+"With"]=F.fireWith}),d.promise(_),r&&r.call(_,_),_},when:function(r){var a=arguments.length,u=a,d=Array(u),_=o.call(arguments),x=l.Deferred(),E=function(F){return function(I){d[F]=this,_[F]=arguments.length>1?o.call(arguments):I,--a||x.resolveWith(d,_)}};if(a<=1&&(Xe(r,x.done(E(u)).resolve,x.reject,!a),x.state()==="pending"||T(_[u]&&_[u].then)))return x.then();for(;u--;)Xe(_[u],E(u),x.reject);return x.promise()}});var tt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,a){e.console&&e.console.warn&&r&&tt.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,a)},l.readyException=function(r){e.setTimeout(function(){throw r})};var Fe=l.Deferred();l.fn.ready=function(r){return Fe.then(r).catch(function(a){l.readyException(a)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&Fe.resolveWith(p,[l]))}}),l.ready.then=Fe.then;function wt(){p.removeEventListener("DOMContentLoaded",wt),e.removeEventListener("load",wt),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?e.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",wt),e.addEventListener("load",wt));var je=function(r,a,u,d,_,x,E){var F=0,I=r.length,z=u==null;if(U(u)==="object"){_=!0;for(F in u)je(r,a,F,u[F],!0,x,E)}else if(d!==void 0&&(_=!0,T(d)||(E=!0),z&&(E?(a.call(r,d),a=null):(z=a,a=function(Q,ie,X){return z.call(l(Q),X)})),a))for(;F<I;F++)a(r[F],u,E?d:d.call(r[F],F,a(r[F],u)));return _?r:z?a.call(r):I?a(r[0],u):x},L=/^-ms-/,A=/-([a-z])/g;function Z(r,a){return a.toUpperCase()}function pe(r){return r.replace(L,"ms-").replace(A,Z)}var me=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function ve(){this.expando=l.expando+ve.uid++}ve.uid=1,ve.prototype={cache:function(r){var a=r[this.expando];return a||(a={},me(r)&&(r.nodeType?r[this.expando]=a:Object.defineProperty(r,this.expando,{value:a,configurable:!0}))),a},set:function(r,a,u){var d,_=this.cache(r);if(typeof a=="string")_[pe(a)]=u;else for(d in a)_[pe(d)]=a[d];return _},get:function(r,a){return a===void 0?this.cache(r):r[this.expando]&&r[this.expando][pe(a)]},access:function(r,a,u){return a===void 0||a&&typeof a=="string"&&u===void 0?this.get(r,a):(this.set(r,a,u),u!==void 0?u:a)},remove:function(r,a){var u,d=r[this.expando];if(d!==void 0){if(a!==void 0)for(Array.isArray(a)?a=a.map(pe):(a=pe(a),a=a in d?[a]:a.match(He)||[]),u=a.length;u--;)delete d[a[u]];(a===void 0||l.isEmptyObject(d))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var a=r[this.expando];return a!==void 0&&!l.isEmptyObject(a)}};var ae=new ve,ye=new ve,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ye=/[A-Z]/g;function lt(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Ie.test(r)?JSON.parse(r):r}function _e(r,a,u){var d;if(u===void 0&&r.nodeType===1)if(d="data-"+a.replace(Ye,"-$&").toLowerCase(),u=r.getAttribute(d),typeof u=="string"){try{u=lt(u)}catch{}ye.set(r,a,u)}else u=void 0;return u}l.extend({hasData:function(r){return ye.hasData(r)||ae.hasData(r)},data:function(r,a,u){return ye.access(r,a,u)},removeData:function(r,a){ye.remove(r,a)},_data:function(r,a,u){return ae.access(r,a,u)},_removeData:function(r,a){ae.remove(r,a)}}),l.fn.extend({data:function(r,a){var u,d,_,x=this[0],E=x&&x.attributes;if(r===void 0){if(this.length&&(_=ye.get(x),x.nodeType===1&&!ae.get(x,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(d=E[u].name,d.indexOf("data-")===0&&(d=pe(d.slice(5)),_e(x,d,_[d])));ae.set(x,"hasDataAttrs",!0)}return _}return typeof r=="object"?this.each(function(){ye.set(this,r)}):je(this,function(F){var I;if(x&&F===void 0)return I=ye.get(x,r),I!==void 0||(I=_e(x,r),I!==void 0)?I:void 0;this.each(function(){ye.set(this,r,F)})},null,a,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){ye.remove(this,r)})}}),l.extend({queue:function(r,a,u){var d;if(r)return a=(a||"fx")+"queue",d=ae.get(r,a),u&&(!d||Array.isArray(u)?d=ae.access(r,a,l.makeArray(u)):d.push(u)),d||[]},dequeue:function(r,a){a=a||"fx";var u=l.queue(r,a),d=u.length,_=u.shift(),x=l._queueHooks(r,a),E=function(){l.dequeue(r,a)};_==="inprogress"&&(_=u.shift(),d--),_&&(a==="fx"&&u.unshift("inprogress"),delete x.stop,_.call(r,E,x)),!d&&x&&x.empty.fire()},_queueHooks:function(r,a){var u=a+"queueHooks";return ae.get(r,u)||ae.access(r,u,{empty:l.Callbacks("once memory").add(function(){ae.remove(r,[a+"queue",u])})})}}),l.fn.extend({queue:function(r,a){var u=2;return typeof r!="string"&&(a=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):a===void 0?this:this.each(function(){var d=l.queue(this,r,a);l._queueHooks(this,r),r==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,a){var u,d=1,_=l.Deferred(),x=this,E=this.length,F=function(){--d||_.resolveWith(x,[x])};for(typeof r!="string"&&(a=r,r=void 0),r=r||"fx";E--;)u=ae.get(x[E],r+"queueHooks"),u&&u.empty&&(d++,u.empty.add(F));return F(),_.promise(a)}});var Mt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,st=new RegExp("^(?:([+-])=|)("+Mt+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Be=p.documentElement,Ue=function(r){return l.contains(r.ownerDocument,r)},at={composed:!0};Be.getRootNode&&(Ue=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(at)===r.ownerDocument});var xt=function(r,a){return r=a||r,r.style.display==="none"||r.style.display===""&&Ue(r)&&l.css(r,"display")==="none"};function Dt(r,a,u,d){var _,x,E=20,F=d?function(){return d.cur()}:function(){return l.css(r,a,"")},I=F(),z=u&&u[3]||(l.cssNumber[a]?"":"px"),Q=r.nodeType&&(l.cssNumber[a]||z!=="px"&&+I)&&st.exec(l.css(r,a));if(Q&&Q[3]!==z){for(I=I/2,z=z||Q[3],Q=+I||1;E--;)l.style(r,a,Q+z),(1-x)*(1-(x=F()/I||.5))<=0&&(E=0),Q=Q/x;Q=Q*2,l.style(r,a,Q+z),u=u||[]}return u&&(Q=+Q||+I||0,_=u[1]?Q+(u[1]+1)*u[2]:+u[2],d&&(d.unit=z,d.start=Q,d.end=_)),_}var ct={};function Te(r){var a,u=r.ownerDocument,d=r.nodeName,_=ct[d];return _||(a=u.body.appendChild(u.createElement(d)),_=l.css(a,"display"),a.parentNode.removeChild(a),_==="none"&&(_="block"),ct[d]=_,_)}function O(r,a){for(var u,d,_=[],x=0,E=r.length;x<E;x++)d=r[x],d.style&&(u=d.style.display,a?(u==="none"&&(_[x]=ae.get(d,"display")||null,_[x]||(d.style.display="")),d.style.display===""&&xt(d)&&(_[x]=Te(d))):u!=="none"&&(_[x]="none",ae.set(d,"display",u)));for(x=0;x<E;x++)_[x]!=null&&(r[x].style.display=_[x]);return r}l.fn.extend({show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){xt(this)?l(this).show():l(this).hide()})}});var be=/^(?:checkbox|radio)$/i,we=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,$e=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=p.createDocumentFragment(),a=r.appendChild(p.createElement("div")),u=p.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),a.appendChild(u),b.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,a.innerHTML="<option></option>",b.option=!!a.lastChild})();var Ne={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ne.tbody=Ne.tfoot=Ne.colgroup=Ne.caption=Ne.thead,Ne.th=Ne.td,b.option||(Ne.optgroup=Ne.option=[1,"<select multiple='multiple'>","</select>"]);function ut(r,a){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(a||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(a||"*"):u=[],a===void 0||a&&w(r,a)?l.merge([r],u):u}function Et(r,a){for(var u=0,d=r.length;u<d;u++)ae.set(r[u],"globalEval",!a||ae.get(a[u],"globalEval"))}var zt=/<|&#?\w+;/;function jt(r,a,u,d,_){for(var x,E,F,I,z,Q,ie=a.createDocumentFragment(),X=[],xe=0,Je=r.length;xe<Je;xe++)if(x=r[xe],x||x===0)if(U(x)==="object")l.merge(X,x.nodeType?[x]:x);else if(!zt.test(x))X.push(a.createTextNode(x));else{for(E=E||ie.appendChild(a.createElement("div")),F=(we.exec(x)||["",""])[1].toLowerCase(),I=Ne[F]||Ne._default,E.innerHTML=I[1]+l.htmlPrefilter(x)+I[2],Q=I[0];Q--;)E=E.lastChild;l.merge(X,E.childNodes),E=ie.firstChild,E.textContent=""}for(ie.textContent="",xe=0;x=X[xe++];){if(d&&l.inArray(x,d)>-1){_&&_.push(x);continue}if(z=Ue(x),E=ut(ie.appendChild(x),"script"),z&&Et(E),u)for(Q=0;x=E[Q++];)$e.test(x.type||"")&&u.push(x)}return ie}var bt=/^([^.]*)(?:\.(.+)|)/;function Ft(){return!0}function Kt(){return!1}function Ii(r,a,u,d,_,x){var E,F;if(typeof a=="object"){typeof u!="string"&&(d=d||u,u=void 0);for(F in a)Ii(r,F,u,d,a[F],x);return r}if(d==null&&_==null?(_=u,d=u=void 0):_==null&&(typeof u=="string"?(_=d,d=void 0):(_=d,d=u,u=void 0)),_===!1)_=Kt;else if(!_)return r;return x===1&&(E=_,_=function(I){return l().off(I),E.apply(this,arguments)},_.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,a,_,d,u)})}l.event={global:{},add:function(r,a,u,d,_){var x,E,F,I,z,Q,ie,X,xe,Je,yt,dt=ae.get(r);if(me(r))for(u.handler&&(x=u,u=x.handler,_=x.selector),_&&l.find.matchesSelector(Be,_),u.guid||(u.guid=l.guid++),(I=dt.events)||(I=dt.events=Object.create(null)),(E=dt.handle)||(E=dt.handle=function(Qt){return typeof l<"u"&&l.event.triggered!==Qt.type?l.event.dispatch.apply(r,arguments):void 0}),a=(a||"").match(He)||[""],z=a.length;z--;)F=bt.exec(a[z])||[],xe=yt=F[1],Je=(F[2]||"").split(".").sort(),xe&&(ie=l.event.special[xe]||{},xe=(_?ie.delegateType:ie.bindType)||xe,ie=l.event.special[xe]||{},Q=l.extend({type:xe,origType:yt,data:d,handler:u,guid:u.guid,selector:_,needsContext:_&&l.expr.match.needsContext.test(_),namespace:Je.join(".")},x),(X=I[xe])||(X=I[xe]=[],X.delegateCount=0,(!ie.setup||ie.setup.call(r,d,Je,E)===!1)&&r.addEventListener&&r.addEventListener(xe,E)),ie.add&&(ie.add.call(r,Q),Q.handler.guid||(Q.handler.guid=u.guid)),_?X.splice(X.delegateCount++,0,Q):X.push(Q),l.event.global[xe]=!0)},remove:function(r,a,u,d,_){var x,E,F,I,z,Q,ie,X,xe,Je,yt,dt=ae.hasData(r)&&ae.get(r);if(!(!dt||!(I=dt.events))){for(a=(a||"").match(He)||[""],z=a.length;z--;){if(F=bt.exec(a[z])||[],xe=yt=F[1],Je=(F[2]||"").split(".").sort(),!xe){for(xe in I)l.event.remove(r,xe+a[z],u,d,!0);continue}for(ie=l.event.special[xe]||{},xe=(d?ie.delegateType:ie.bindType)||xe,X=I[xe]||[],F=F[2]&&new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=x=X.length;x--;)Q=X[x],(_||yt===Q.origType)&&(!u||u.guid===Q.guid)&&(!F||F.test(Q.namespace))&&(!d||d===Q.selector||d==="**"&&Q.selector)&&(X.splice(x,1),Q.selector&&X.delegateCount--,ie.remove&&ie.remove.call(r,Q));E&&!X.length&&((!ie.teardown||ie.teardown.call(r,Je,dt.handle)===!1)&&l.removeEvent(r,xe,dt.handle),delete I[xe])}l.isEmptyObject(I)&&ae.remove(r,"handle events")}},dispatch:function(r){var a,u,d,_,x,E,F=new Array(arguments.length),I=l.event.fix(r),z=(ae.get(this,"events")||Object.create(null))[I.type]||[],Q=l.event.special[I.type]||{};for(F[0]=I,a=1;a<arguments.length;a++)F[a]=arguments[a];if(I.delegateTarget=this,!(Q.preDispatch&&Q.preDispatch.call(this,I)===!1)){for(E=l.event.handlers.call(this,I,z),a=0;(_=E[a++])&&!I.isPropagationStopped();)for(I.currentTarget=_.elem,u=0;(x=_.handlers[u++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||x.namespace===!1||I.rnamespace.test(x.namespace))&&(I.handleObj=x,I.data=x.data,d=((l.event.special[x.origType]||{}).handle||x.handler).apply(_.elem,F),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return Q.postDispatch&&Q.postDispatch.call(this,I),I.result}},handlers:function(r,a){var u,d,_,x,E,F=[],I=a.delegateCount,z=r.target;if(I&&z.nodeType&&!(r.type==="click"&&r.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(r.type==="click"&&z.disabled===!0)){for(x=[],E={},u=0;u<I;u++)d=a[u],_=d.selector+" ",E[_]===void 0&&(E[_]=d.needsContext?l(_,this).index(z)>-1:l.find(_,this,null,[z]).length),E[_]&&x.push(d);x.length&&F.push({elem:z,handlers:x})}}return z=this,I<a.length&&F.push({elem:z,handlers:a.slice(I)}),F},addProp:function(r,a){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:T(a)?function(){if(this.originalEvent)return a(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var a=this||r;return be.test(a.type)&&a.click&&w(a,"input")&&Ni(a,"click",!0),!1},trigger:function(r){var a=this||r;return be.test(a.type)&&a.click&&w(a,"input")&&Ni(a,"click"),!0},_default:function(r){var a=r.target;return be.test(a.type)&&a.click&&w(a,"input")&&ae.get(a,"click")||w(a,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Ni(r,a,u){if(!u){ae.get(r,a)===void 0&&l.event.add(r,a,Ft);return}ae.set(r,a,!1),l.event.add(r,a,{namespace:!1,handler:function(d){var _,x=ae.get(this,a);if(d.isTrigger&1&&this[a]){if(x)(l.event.special[a]||{}).delegateType&&d.stopPropagation();else if(x=o.call(arguments),ae.set(this,a,x),this[a](),_=ae.get(this,a),ae.set(this,a,!1),x!==_)return d.stopImmediatePropagation(),d.preventDefault(),_}else x&&(ae.set(this,a,l.event.trigger(x[0],x.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Ft)}})}l.removeEvent=function(r,a,u){r.removeEventListener&&r.removeEventListener(a,u)},l.Event=function(r,a){if(!(this instanceof l.Event))return new l.Event(r,a);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Ft:Kt,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,a&&l.extend(this,a),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Kt,isPropagationStopped:Kt,isImmediatePropagationStopped:Kt,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Ft,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Ft,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Ft,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,a){function u(d){if(p.documentMode){var _=ae.get(this,"handle"),x=l.event.fix(d);x.type=d.type==="focusin"?"focus":"blur",x.isSimulated=!0,_(d),x.target===x.currentTarget&&_(x)}else l.event.simulate(a,d.target,l.event.fix(d))}l.event.special[r]={setup:function(){var d;if(Ni(this,r,!0),p.documentMode)d=ae.get(this,a),d||this.addEventListener(a,u),ae.set(this,a,(d||0)+1);else return!1},trigger:function(){return Ni(this,r),!0},teardown:function(){var d;if(p.documentMode)d=ae.get(this,a)-1,d?ae.set(this,a,d):(this.removeEventListener(a,u),ae.remove(this,a));else return!1},_default:function(d){return ae.get(d.target,r)},delegateType:a},l.event.special[a]={setup:function(){var d=this.ownerDocument||this.document||this,_=p.documentMode?this:d,x=ae.get(_,a);x||(p.documentMode?this.addEventListener(a,u):d.addEventListener(r,u,!0)),ae.set(_,a,(x||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,_=p.documentMode?this:d,x=ae.get(_,a)-1;x?ae.set(_,a,x):(p.documentMode?this.removeEventListener(a,u):d.removeEventListener(r,u,!0),ae.remove(_,a))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,a){l.event.special[r]={delegateType:a,bindType:a,handle:function(u){var d,_=this,x=u.relatedTarget,E=u.handleObj;return(!x||x!==_&&!l.contains(_,x))&&(u.type=E.origType,d=E.handler.apply(this,arguments),u.type=a),d}}}),l.fn.extend({on:function(r,a,u,d){return Ii(this,r,a,u,d)},one:function(r,a,u,d){return Ii(this,r,a,u,d,1)},off:function(r,a,u){var d,_;if(r&&r.preventDefault&&r.handleObj)return d=r.handleObj,l(r.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof r=="object"){for(_ in r)this.off(_,a,r[_]);return this}return(a===!1||typeof a=="function")&&(u=a,a=void 0),u===!1&&(u=Kt),this.each(function(){l.event.remove(this,r,u,a)})}});var Fi=/<script|<style|<link/i,Fr=/checked\s*(?:[^=]|=\s*.checked.)/i,Oi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function mr(r,a){return w(r,"table")&&w(a.nodeType!==11?a:a.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Or(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Ls(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Br(r,a){var u,d,_,x,E,F,I;if(a.nodeType===1){if(ae.hasData(r)&&(x=ae.get(r),I=x.events,I)){ae.remove(a,"handle events");for(_ in I)for(u=0,d=I[_].length;u<d;u++)l.event.add(a,_,I[_][u])}ye.hasData(r)&&(E=ye.access(r),F=l.extend({},E),ye.set(a,F))}}function Ps(r,a){var u=a.nodeName.toLowerCase();u==="input"&&be.test(r.type)?a.checked=r.checked:(u==="input"||u==="textarea")&&(a.defaultValue=r.defaultValue)}function C(r,a,u,d){a=f(a);var _,x,E,F,I,z,Q=0,ie=r.length,X=ie-1,xe=a[0],Je=T(xe);if(Je||ie>1&&typeof xe=="string"&&!b.checkClone&&Fr.test(xe))return r.each(function(yt){var dt=r.eq(yt);Je&&(a[0]=xe.call(this,yt,dt.html())),C(dt,a,u,d)});if(ie&&(_=jt(a,r[0].ownerDocument,!1,r,d),x=_.firstChild,_.childNodes.length===1&&(_=x),x||d)){for(E=l.map(ut(_,"script"),Or),F=E.length;Q<ie;Q++)I=_,Q!==X&&(I=l.clone(I,!0,!0),F&&l.merge(E,ut(I,"script"))),u.call(r[Q],I,Q);if(F)for(z=E[E.length-1].ownerDocument,l.map(E,Ls),Q=0;Q<F;Q++)I=E[Q],$e.test(I.type||"")&&!ae.access(I,"globalEval")&&l.contains(z,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},z):P(I.textContent.replace(Oi,""),I,z))}return r}function V(r,a,u){for(var d,_=a?l.filter(a,r):r,x=0;(d=_[x])!=null;x++)!u&&d.nodeType===1&&l.cleanData(ut(d)),d.parentNode&&(u&&Ue(d)&&Et(ut(d,"script")),d.parentNode.removeChild(d));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,a,u){var d,_,x,E,F=r.cloneNode(!0),I=Ue(r);if(!b.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=ut(F),x=ut(r),d=0,_=x.length;d<_;d++)Ps(x[d],E[d]);if(a)if(u)for(x=x||ut(r),E=E||ut(F),d=0,_=x.length;d<_;d++)Br(x[d],E[d]);else Br(r,F);return E=ut(F,"script"),E.length>0&&Et(E,!I&&ut(r,"script")),F},cleanData:function(r){for(var a,u,d,_=l.event.special,x=0;(u=r[x])!==void 0;x++)if(me(u)){if(a=u[ae.expando]){if(a.events)for(d in a.events)_[d]?l.event.remove(u,d):l.removeEvent(u,d,a.handle);u[ae.expando]=void 0}u[ye.expando]&&(u[ye.expando]=void 0)}}}),l.fn.extend({detach:function(r){return V(this,r,!0)},remove:function(r){return V(this,r)},text:function(r){return je(this,function(a){return a===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=a)})},null,r,arguments.length)},append:function(){return C(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=mr(this,r);a.appendChild(r)}})},prepend:function(){return C(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var a=mr(this,r);a.insertBefore(r,a.firstChild)}})},before:function(){return C(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return C(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,a=0;(r=this[a])!=null;a++)r.nodeType===1&&(l.cleanData(ut(r,!1)),r.textContent="");return this},clone:function(r,a){return r=r??!1,a=a??r,this.map(function(){return l.clone(this,r,a)})},html:function(r){return je(this,function(a){var u=this[0]||{},d=0,_=this.length;if(a===void 0&&u.nodeType===1)return u.innerHTML;if(typeof a=="string"&&!Fi.test(a)&&!Ne[(we.exec(a)||["",""])[1].toLowerCase()]){a=l.htmlPrefilter(a);try{for(;d<_;d++)u=this[d]||{},u.nodeType===1&&(l.cleanData(ut(u,!1)),u.innerHTML=a);u=0}catch{}}u&&this.empty().append(a)},null,r,arguments.length)},replaceWith:function(){var r=[];return C(this,arguments,function(a){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(ut(this)),u&&u.replaceChild(a,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,a){l.fn[r]=function(u){for(var d,_=[],x=l(u),E=x.length-1,F=0;F<=E;F++)d=F===E?this:this.clone(!0),l(x[F])[a](d),c.apply(_,d.get());return this.pushStack(_)}});var $=new RegExp("^("+Mt+")(?!px)[a-z%]+$","i"),J=/^--/,Y=function(r){var a=r.ownerDocument.defaultView;return(!a||!a.opener)&&(a=e),a.getComputedStyle(r)},Pe=function(r,a,u){var d,_,x={};for(_ in a)x[_]=r.style[_],r.style[_]=a[_];d=u.call(r);for(_ in a)r.style[_]=x[_];return d},ze=new RegExp(We.join("|"),"i");(function(){function r(){if(z){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",z.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Be.appendChild(I).appendChild(z);var Q=e.getComputedStyle(z);u=Q.top!=="1%",F=a(Q.marginLeft)===12,z.style.right="60%",x=a(Q.right)===36,d=a(Q.width)===36,z.style.position="absolute",_=a(z.offsetWidth/3)===12,Be.removeChild(I),z=null}}function a(Q){return Math.round(parseFloat(Q))}var u,d,_,x,E,F,I=p.createElement("div"),z=p.createElement("div");z.style&&(z.style.backgroundClip="content-box",z.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=z.style.backgroundClip==="content-box",l.extend(b,{boxSizingReliable:function(){return r(),d},pixelBoxStyles:function(){return r(),x},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),F},scrollboxSize:function(){return r(),_},reliableTrDimensions:function(){var Q,ie,X,xe;return E==null&&(Q=p.createElement("table"),ie=p.createElement("tr"),X=p.createElement("div"),Q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ie.style.cssText="box-sizing:content-box;border:1px solid",ie.style.height="1px",X.style.height="9px",X.style.display="block",Be.appendChild(Q).appendChild(ie).appendChild(X),xe=e.getComputedStyle(ie),E=parseInt(xe.height,10)+parseInt(xe.borderTopWidth,10)+parseInt(xe.borderBottomWidth,10)===ie.offsetHeight,Be.removeChild(Q)),E}}))})();function Ve(r,a,u){var d,_,x,E,F=J.test(a),I=r.style;return u=u||Y(r),u&&(E=u.getPropertyValue(a)||u[a],F&&E&&(E=E.replace(G,"$1")||void 0),E===""&&!Ue(r)&&(E=l.style(r,a)),!b.pixelBoxStyles()&&$.test(E)&&ze.test(a)&&(d=I.width,_=I.minWidth,x=I.maxWidth,I.minWidth=I.maxWidth=I.width=E,E=u.width,I.width=d,I.minWidth=_,I.maxWidth=x)),E!==void 0?E+"":E}function Ke(r,a){return{get:function(){if(r()){delete this.get;return}return(this.get=a).apply(this,arguments)}}}var ot=["Webkit","Moz","ms"],Qe=p.createElement("div").style,nt={};function Nt(r){for(var a=r[0].toUpperCase()+r.slice(1),u=ot.length;u--;)if(r=ot[u]+a,r in Qe)return r}function Zt(r){var a=l.cssProps[r]||nt[r];return a||(r in Qe?r:nt[r]=Nt(r)||r)}var Gt=/^(none|table(?!-c[ea]).+)/,En={position:"absolute",visibility:"hidden",display:"block"},Lt={letterSpacing:"0",fontWeight:"400"};function ft(r,a,u){var d=st.exec(a);return d?Math.max(0,d[2]-(u||0))+(d[3]||"px"):a}function gi(r,a,u,d,_,x){var E=a==="width"?1:0,F=0,I=0,z=0;if(u===(d?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(z+=l.css(r,u+We[E],!0,_)),d?(u==="content"&&(I-=l.css(r,"padding"+We[E],!0,_)),u!=="margin"&&(I-=l.css(r,"border"+We[E]+"Width",!0,_))):(I+=l.css(r,"padding"+We[E],!0,_),u!=="padding"?I+=l.css(r,"border"+We[E]+"Width",!0,_):F+=l.css(r,"border"+We[E]+"Width",!0,_));return!d&&x>=0&&(I+=Math.max(0,Math.ceil(r["offset"+a[0].toUpperCase()+a.slice(1)]-x-I-F-.5))||0),I+z}function Ut(r,a,u){var d=Y(r),_=!b.boxSizingReliable()||u,x=_&&l.css(r,"boxSizing",!1,d)==="border-box",E=x,F=Ve(r,a,d),I="offset"+a[0].toUpperCase()+a.slice(1);if($.test(F)){if(!u)return F;F="auto"}return(!b.boxSizingReliable()&&x||!b.reliableTrDimensions()&&w(r,"tr")||F==="auto"||!parseFloat(F)&&l.css(r,"display",!1,d)==="inline")&&r.getClientRects().length&&(x=l.css(r,"boxSizing",!1,d)==="border-box",E=I in r,E&&(F=r[I])),F=parseFloat(F)||0,F+gi(r,a,u||(x?"border":"content"),E,d,F)+"px"}l.extend({cssHooks:{opacity:{get:function(r,a){if(a){var u=Ve(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,a,u,d){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var _,x,E,F=pe(a),I=J.test(a),z=r.style;if(I||(a=Zt(F)),E=l.cssHooks[a]||l.cssHooks[F],u!==void 0){if(x=typeof u,x==="string"&&(_=st.exec(u))&&_[1]&&(u=Dt(r,a,_),x="number"),u==null||u!==u)return;x==="number"&&!I&&(u+=_&&_[3]||(l.cssNumber[F]?"":"px")),!b.clearCloneStyle&&u===""&&a.indexOf("background")===0&&(z[a]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,d))!==void 0)&&(I?z.setProperty(a,u):z[a]=u)}else return E&&"get"in E&&(_=E.get(r,!1,d))!==void 0?_:z[a]}},css:function(r,a,u,d){var _,x,E,F=pe(a),I=J.test(a);return I||(a=Zt(F)),E=l.cssHooks[a]||l.cssHooks[F],E&&"get"in E&&(_=E.get(r,!0,u)),_===void 0&&(_=Ve(r,a,d)),_==="normal"&&a in Lt&&(_=Lt[a]),u===""||u?(x=parseFloat(_),u===!0||isFinite(x)?x||0:_):_}}),l.each(["height","width"],function(r,a){l.cssHooks[a]={get:function(u,d,_){if(d)return Gt.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?Pe(u,En,function(){return Ut(u,a,_)}):Ut(u,a,_)},set:function(u,d,_){var x,E=Y(u),F=!b.scrollboxSize()&&E.position==="absolute",I=F||_,z=I&&l.css(u,"boxSizing",!1,E)==="border-box",Q=_?gi(u,a,_,z,E):0;return z&&F&&(Q-=Math.ceil(u["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(E[a])-gi(u,a,"border",!1,E)-.5)),Q&&(x=st.exec(d))&&(x[3]||"px")!=="px"&&(u.style[a]=d,d=l.css(u,a)),ft(u,d,Q)}}}),l.cssHooks.marginLeft=Ke(b.reliableMarginLeft,function(r,a){if(a)return(parseFloat(Ve(r,"marginLeft"))||r.getBoundingClientRect().left-Pe(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,a){l.cssHooks[r+a]={expand:function(u){for(var d=0,_={},x=typeof u=="string"?u.split(" "):[u];d<4;d++)_[r+We[d]+a]=x[d]||x[d-2]||x[0];return _}},r!=="margin"&&(l.cssHooks[r+a].set=ft)}),l.fn.extend({css:function(r,a){return je(this,function(u,d,_){var x,E,F={},I=0;if(Array.isArray(d)){for(x=Y(u),E=d.length;I<E;I++)F[d[I]]=l.css(u,d[I],!1,x);return F}return _!==void 0?l.style(u,d,_):l.css(u,d)},r,a,arguments.length>1)}});function Ot(r,a,u,d,_){return new Ot.prototype.init(r,a,u,d,_)}l.Tween=Ot,Ot.prototype={constructor:Ot,init:function(r,a,u,d,_,x){this.elem=r,this.prop=u,this.easing=_||l.easing._default,this.options=a,this.start=this.now=this.cur(),this.end=d,this.unit=x||(l.cssNumber[u]?"":"px")},cur:function(){var r=Ot.propHooks[this.prop];return r&&r.get?r.get(this):Ot.propHooks._default.get(this)},run:function(r){var a,u=Ot.propHooks[this.prop];return this.options.duration?this.pos=a=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=a=r,this.now=(this.end-this.start)*a+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Ot.propHooks._default.set(this),this}},Ot.prototype.init.prototype=Ot.prototype,Ot.propHooks={_default:{get:function(r){var a;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(a=l.css(r.elem,r.prop,""),!a||a==="auto"?0:a)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Zt(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Ot.propHooks.scrollTop=Ot.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=Ot.prototype.init,l.fx.step={};var Vn,Nn,gr=/^(?:toggle|show|hide)$/,Yt=/queueHooks$/;function Tn(){Nn&&(p.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Tn):e.setTimeout(Tn,l.fx.interval),l.fx.tick())}function Bi(){return e.setTimeout(function(){Vn=void 0}),Vn=Date.now()}function Jt(r,a){var u,d=0,_={height:r};for(a=a?1:0;d<4;d+=2-a)u=We[d],_["margin"+u]=_["padding"+u]=r;return a&&(_.opacity=_.width=r),_}function Hi(r,a,u){for(var d,_=(bn.tweeners[a]||[]).concat(bn.tweeners["*"]),x=0,E=_.length;x<E;x++)if(d=_[x].call(u,a,r))return d}function Ds(r,a,u){var d,_,x,E,F,I,z,Q,ie="width"in a||"height"in a,X=this,xe={},Je=r.style,yt=r.nodeType&&xt(r),dt=ae.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,F=E.empty.fire,E.empty.fire=function(){E.unqueued||F()}),E.unqueued++,X.always(function(){X.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(d in a)if(_=a[d],gr.test(_)){if(delete a[d],x=x||_==="toggle",_===(yt?"hide":"show"))if(_==="show"&&dt&&dt[d]!==void 0)yt=!0;else continue;xe[d]=dt&&dt[d]||l.style(r,d)}if(I=!l.isEmptyObject(a),!(!I&&l.isEmptyObject(xe))){ie&&r.nodeType===1&&(u.overflow=[Je.overflow,Je.overflowX,Je.overflowY],z=dt&&dt.display,z==null&&(z=ae.get(r,"display")),Q=l.css(r,"display"),Q==="none"&&(z?Q=z:(O([r],!0),z=r.style.display||z,Q=l.css(r,"display"),O([r]))),(Q==="inline"||Q==="inline-block"&&z!=null)&&l.css(r,"float")==="none"&&(I||(X.done(function(){Je.display=z}),z==null&&(Q=Je.display,z=Q==="none"?"":Q)),Je.display="inline-block")),u.overflow&&(Je.overflow="hidden",X.always(function(){Je.overflow=u.overflow[0],Je.overflowX=u.overflow[1],Je.overflowY=u.overflow[2]})),I=!1;for(d in xe)I||(dt?"hidden"in dt&&(yt=dt.hidden):dt=ae.access(r,"fxshow",{display:z}),x&&(dt.hidden=!yt),yt&&O([r],!0),X.done(function(){yt||O([r]),ae.remove(r,"fxshow");for(d in xe)l.style(r,d,xe[d])})),I=Hi(yt?dt[d]:0,d,X),d in dt||(dt[d]=I.start,yt&&(I.end=I.start,I.start=0))}}function Hr(r,a){var u,d,_,x,E;for(u in r)if(d=pe(u),_=a[d],x=r[u],Array.isArray(x)&&(_=x[1],x=r[u]=x[0]),u!==d&&(r[d]=x,delete r[u]),E=l.cssHooks[d],E&&"expand"in E){x=E.expand(x),delete r[d];for(u in x)u in r||(r[u]=x[u],a[u]=_)}else a[d]=_}function bn(r,a,u){var d,_,x=0,E=bn.prefilters.length,F=l.Deferred().always(function(){delete I.elem}),I=function(){if(_)return!1;for(var ie=Vn||Bi(),X=Math.max(0,z.startTime+z.duration-ie),xe=X/z.duration||0,Je=1-xe,yt=0,dt=z.tweens.length;yt<dt;yt++)z.tweens[yt].run(Je);return F.notifyWith(r,[z,Je,X]),Je<1&&dt?X:(dt||F.notifyWith(r,[z,1,0]),F.resolveWith(r,[z]),!1)},z=F.promise({elem:r,props:l.extend({},a),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:a,originalOptions:u,startTime:Vn||Bi(),duration:u.duration,tweens:[],createTween:function(ie,X){var xe=l.Tween(r,z.opts,ie,X,z.opts.specialEasing[ie]||z.opts.easing);return z.tweens.push(xe),xe},stop:function(ie){var X=0,xe=ie?z.tweens.length:0;if(_)return this;for(_=!0;X<xe;X++)z.tweens[X].run(1);return ie?(F.notifyWith(r,[z,1,0]),F.resolveWith(r,[z,ie])):F.rejectWith(r,[z,ie]),this}}),Q=z.props;for(Hr(Q,z.opts.specialEasing);x<E;x++)if(d=bn.prefilters[x].call(z,r,Q,z.opts),d)return T(d.stop)&&(l._queueHooks(z.elem,z.opts.queue).stop=d.stop.bind(d)),d;return l.map(Q,Hi,z),T(z.opts.start)&&z.opts.start.call(r,z),z.progress(z.opts.progress).done(z.opts.done,z.opts.complete).fail(z.opts.fail).always(z.opts.always),l.fx.timer(l.extend(I,{elem:r,anim:z,queue:z.opts.queue})),z}l.Animation=l.extend(bn,{tweeners:{"*":[function(r,a){var u=this.createTween(r,a);return Dt(u.elem,r,st.exec(a),u),u}]},tweener:function(r,a){T(r)?(a=r,r=["*"]):r=r.match(He);for(var u,d=0,_=r.length;d<_;d++)u=r[d],bn.tweeners[u]=bn.tweeners[u]||[],bn.tweeners[u].unshift(a)},prefilters:[Ds],prefilter:function(r,a){a?bn.prefilters.unshift(r):bn.prefilters.push(r)}}),l.speed=function(r,a,u){var d=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&a||T(r)&&r,duration:r,easing:u&&a||a&&!T(a)&&a};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){T(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(r,a,u,d){return this.filter(xt).css("opacity",0).show().end().animate({opacity:a},r,u,d)},animate:function(r,a,u,d){var _=l.isEmptyObject(r),x=l.speed(a,u,d),E=function(){var F=bn(this,l.extend({},r),x);(_||ae.get(this,"finish"))&&F.stop(!0)};return E.finish=E,_||x.queue===!1?this.each(E):this.queue(x.queue,E)},stop:function(r,a,u){var d=function(_){var x=_.stop;delete _.stop,x(u)};return typeof r!="string"&&(u=a,a=r,r=void 0),a&&this.queue(r||"fx",[]),this.each(function(){var _=!0,x=r!=null&&r+"queueHooks",E=l.timers,F=ae.get(this);if(x)F[x]&&F[x].stop&&d(F[x]);else for(x in F)F[x]&&F[x].stop&&Yt.test(x)&&d(F[x]);for(x=E.length;x--;)E[x].elem===this&&(r==null||E[x].queue===r)&&(E[x].anim.stop(u),_=!1,E.splice(x,1));(_||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var a,u=ae.get(this),d=u[r+"queue"],_=u[r+"queueHooks"],x=l.timers,E=d?d.length:0;for(u.finish=!0,l.queue(this,r,[]),_&&_.stop&&_.stop.call(this,!0),a=x.length;a--;)x[a].elem===this&&x[a].queue===r&&(x[a].anim.stop(!0),x.splice(a,1));for(a=0;a<E;a++)d[a]&&d[a].finish&&d[a].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,a){var u=l.fn[a];l.fn[a]=function(d,_,x){return d==null||typeof d=="boolean"?u.apply(this,arguments):this.animate(Jt(a,!0),d,_,x)}}),l.each({slideDown:Jt("show"),slideUp:Jt("hide"),slideToggle:Jt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,a){l.fn[r]=function(u,d,_){return this.animate(a,u,d,_)}}),l.timers=[],l.fx.tick=function(){var r,a=0,u=l.timers;for(Vn=Date.now();a<u.length;a++)r=u[a],!r()&&u[a]===r&&u.splice(a--,1);u.length||l.fx.stop(),Vn=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Nn||(Nn=!0,Tn())},l.fx.stop=function(){Nn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,a){return r=l.fx&&l.fx.speeds[r]||r,a=a||"fx",this.queue(a,function(u,d){var _=e.setTimeout(u,r);d.stop=function(){e.clearTimeout(_)}})},function(){var r=p.createElement("input"),a=p.createElement("select"),u=a.appendChild(p.createElement("option"));r.type="checkbox",b.checkOn=r.value!=="",b.optSelected=u.selected,r=p.createElement("input"),r.value="t",r.type="radio",b.radioValue=r.value==="t"}();var Va,_r=l.expr.attrHandle;l.fn.extend({attr:function(r,a){return je(this,l.attr,r,a,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,a,u){var d,_,x=r.nodeType;if(!(x===3||x===8||x===2)){if(typeof r.getAttribute>"u")return l.prop(r,a,u);if((x!==1||!l.isXMLDoc(r))&&(_=l.attrHooks[a.toLowerCase()]||(l.expr.match.bool.test(a)?Va:void 0)),u!==void 0){if(u===null){l.removeAttr(r,a);return}return _&&"set"in _&&(d=_.set(r,u,a))!==void 0?d:(r.setAttribute(a,u+""),u)}return _&&"get"in _&&(d=_.get(r,a))!==null?d:(d=l.find.attr(r,a),d??void 0)}},attrHooks:{type:{set:function(r,a){if(!b.radioValue&&a==="radio"&&w(r,"input")){var u=r.value;return r.setAttribute("type",a),u&&(r.value=u),a}}}},removeAttr:function(r,a){var u,d=0,_=a&&a.match(He);if(_&&r.nodeType===1)for(;u=_[d++];)r.removeAttribute(u)}}),Va={set:function(r,a,u){return a===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,a){var u=_r[a]||l.find.attr;_r[a]=function(d,_,x){var E,F,I=_.toLowerCase();return x||(F=_r[I],_r[I]=E,E=u(d,_,x)!=null?I:null,_r[I]=F),E}});var xc=/^(?:input|select|textarea|button)$/i,yc=/^(?:a|area)$/i;l.fn.extend({prop:function(r,a){return je(this,l.prop,r,a,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,a,u){var d,_,x=r.nodeType;if(!(x===3||x===8||x===2))return(x!==1||!l.isXMLDoc(r))&&(a=l.propFix[a]||a,_=l.propHooks[a]),u!==void 0?_&&"set"in _&&(d=_.set(r,u,a))!==void 0?d:r[a]=u:_&&"get"in _&&(d=_.get(r,a))!==null?d:r[a]},propHooks:{tabIndex:{get:function(r){var a=l.find.attr(r,"tabindex");return a?parseInt(a,10):xc.test(r.nodeName)||yc.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(l.propHooks.selected={get:function(r){var a=r.parentNode;return a&&a.parentNode&&a.parentNode.selectedIndex,null},set:function(r){var a=r.parentNode;a&&(a.selectedIndex,a.parentNode&&a.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function _i(r){var a=r.match(He)||[];return a.join(" ")}function vi(r){return r.getAttribute&&r.getAttribute("class")||""}function Us(r){return Array.isArray(r)?r:typeof r=="string"?r.match(He)||[]:[]}l.fn.extend({addClass:function(r){var a,u,d,_,x,E;return T(r)?this.each(function(F){l(this).addClass(r.call(this,F,vi(this)))}):(a=Us(r),a.length?this.each(function(){if(d=vi(this),u=this.nodeType===1&&" "+_i(d)+" ",u){for(x=0;x<a.length;x++)_=a[x],u.indexOf(" "+_+" ")<0&&(u+=_+" ");E=_i(u),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var a,u,d,_,x,E;return T(r)?this.each(function(F){l(this).removeClass(r.call(this,F,vi(this)))}):arguments.length?(a=Us(r),a.length?this.each(function(){if(d=vi(this),u=this.nodeType===1&&" "+_i(d)+" ",u){for(x=0;x<a.length;x++)for(_=a[x];u.indexOf(" "+_+" ")>-1;)u=u.replace(" "+_+" "," ");E=_i(u),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,a){var u,d,_,x,E=typeof r,F=E==="string"||Array.isArray(r);return T(r)?this.each(function(I){l(this).toggleClass(r.call(this,I,vi(this),a),a)}):typeof a=="boolean"&&F?a?this.addClass(r):this.removeClass(r):(u=Us(r),this.each(function(){if(F)for(x=l(this),_=0;_<u.length;_++)d=u[_],x.hasClass(d)?x.removeClass(d):x.addClass(d);else(r===void 0||E==="boolean")&&(d=vi(this),d&&ae.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||r===!1?"":ae.get(this,"__className__")||""))}))},hasClass:function(r){var a,u,d=0;for(a=" "+r+" ";u=this[d++];)if(u.nodeType===1&&(" "+_i(vi(u))+" ").indexOf(a)>-1)return!0;return!1}});var Sc=/\r/g;l.fn.extend({val:function(r){var a,u,d,_=this[0];return arguments.length?(d=T(r),this.each(function(x){var E;this.nodeType===1&&(d?E=r.call(this,x,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(F){return F==null?"":F+""})),a=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!a||!("set"in a)||a.set(this,E,"value")===void 0)&&(this.value=E))})):_?(a=l.valHooks[_.type]||l.valHooks[_.nodeName.toLowerCase()],a&&"get"in a&&(u=a.get(_,"value"))!==void 0?u:(u=_.value,typeof u=="string"?u.replace(Sc,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var a=l.find.attr(r,"value");return a??_i(l.text(r))}},select:{get:function(r){var a,u,d,_=r.options,x=r.selectedIndex,E=r.type==="select-one",F=E?null:[],I=E?x+1:_.length;for(x<0?d=I:d=E?x:0;d<I;d++)if(u=_[d],(u.selected||d===x)&&!u.disabled&&(!u.parentNode.disabled||!w(u.parentNode,"optgroup"))){if(a=l(u).val(),E)return a;F.push(a)}return F},set:function(r,a){for(var u,d,_=r.options,x=l.makeArray(a),E=_.length;E--;)d=_[E],(d.selected=l.inArray(l.valHooks.option.get(d),x)>-1)&&(u=!0);return u||(r.selectedIndex=-1),x}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,a){if(Array.isArray(a))return r.checked=l.inArray(l(r).val(),a)>-1}},b.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var vr=e.location,Wa={guid:Date.now()},Is=/\?/;l.parseXML=function(r){var a,u;if(!r||typeof r!="string")return null;try{a=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return u=a&&a.getElementsByTagName("parsererror")[0],(!a||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(d){return d.textContent}).join(`
`):r)),a};var Xa=/^(?:focusinfocus|focusoutblur)$/,qa=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,a,u,d){var _,x,E,F,I,z,Q,ie,X=[u||p],xe=y.call(r,"type")?r.type:r,Je=y.call(r,"namespace")?r.namespace.split("."):[];if(x=ie=E=u=u||p,!(u.nodeType===3||u.nodeType===8)&&!Xa.test(xe+l.event.triggered)&&(xe.indexOf(".")>-1&&(Je=xe.split("."),xe=Je.shift(),Je.sort()),I=xe.indexOf(":")<0&&"on"+xe,r=r[l.expando]?r:new l.Event(xe,typeof r=="object"&&r),r.isTrigger=d?2:3,r.namespace=Je.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),a=a==null?[r]:l.makeArray(a,[r]),Q=l.event.special[xe]||{},!(!d&&Q.trigger&&Q.trigger.apply(u,a)===!1))){if(!d&&!Q.noBubble&&!v(u)){for(F=Q.delegateType||xe,Xa.test(F+xe)||(x=x.parentNode);x;x=x.parentNode)X.push(x),E=x;E===(u.ownerDocument||p)&&X.push(E.defaultView||E.parentWindow||e)}for(_=0;(x=X[_++])&&!r.isPropagationStopped();)ie=x,r.type=_>1?F:Q.bindType||xe,z=(ae.get(x,"events")||Object.create(null))[r.type]&&ae.get(x,"handle"),z&&z.apply(x,a),z=I&&x[I],z&&z.apply&&me(x)&&(r.result=z.apply(x,a),r.result===!1&&r.preventDefault());return r.type=xe,!d&&!r.isDefaultPrevented()&&(!Q._default||Q._default.apply(X.pop(),a)===!1)&&me(u)&&I&&T(u[xe])&&!v(u)&&(E=u[I],E&&(u[I]=null),l.event.triggered=xe,r.isPropagationStopped()&&ie.addEventListener(xe,qa),u[xe](),r.isPropagationStopped()&&ie.removeEventListener(xe,qa),l.event.triggered=void 0,E&&(u[I]=E)),r.result}},simulate:function(r,a,u){var d=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(d,null,a)}}),l.fn.extend({trigger:function(r,a){return this.each(function(){l.event.trigger(r,a,this)})},triggerHandler:function(r,a){var u=this[0];if(u)return l.event.trigger(r,a,u,!0)}});var Mc=/\[\]$/,ja=/\r?\n/g,Ec=/^(?:submit|button|image|reset|file)$/i,Tc=/^(?:input|select|textarea|keygen)/i;function Ns(r,a,u,d){var _;if(Array.isArray(a))l.each(a,function(x,E){u||Mc.test(r)?d(r,E):Ns(r+"["+(typeof E=="object"&&E!=null?x:"")+"]",E,u,d)});else if(!u&&U(a)==="object")for(_ in a)Ns(r+"["+_+"]",a[_],u,d);else d(r,a)}l.param=function(r,a){var u,d=[],_=function(x,E){var F=T(E)?E():E;d[d.length]=encodeURIComponent(x)+"="+encodeURIComponent(F??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){_(this.name,this.value)});else for(u in r)Ns(u,r[u],a,_);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&Tc.test(this.nodeName)&&!Ec.test(r)&&(this.checked||!be.test(r))}).map(function(r,a){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(d){return{name:a.name,value:d.replace(ja,`\r
`)}}):{name:a.name,value:u.replace(ja,`\r
`)}}).get()}});var bc=/%20/g,Ac=/#.*$/,wc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Rc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lc=/^(?:GET|HEAD)$/,Pc=/^\/\//,Ya={},Fs={},$a="*/".concat("*"),Os=p.createElement("a");Os.href=vr.href;function Ka(r){return function(a,u){typeof a!="string"&&(u=a,a="*");var d,_=0,x=a.toLowerCase().match(He)||[];if(T(u))for(;d=x[_++];)d[0]==="+"?(d=d.slice(1)||"*",(r[d]=r[d]||[]).unshift(u)):(r[d]=r[d]||[]).push(u)}}function Za(r,a,u,d){var _={},x=r===Fs;function E(F){var I;return _[F]=!0,l.each(r[F]||[],function(z,Q){var ie=Q(a,u,d);if(typeof ie=="string"&&!x&&!_[ie])return a.dataTypes.unshift(ie),E(ie),!1;if(x)return!(I=ie)}),I}return E(a.dataTypes[0])||!_["*"]&&E("*")}function Bs(r,a){var u,d,_=l.ajaxSettings.flatOptions||{};for(u in a)a[u]!==void 0&&((_[u]?r:d||(d={}))[u]=a[u]);return d&&l.extend(!0,r,d),r}function Dc(r,a,u){for(var d,_,x,E,F=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=r.mimeType||a.getResponseHeader("Content-Type"));if(d){for(_ in F)if(F[_]&&F[_].test(d)){I.unshift(_);break}}if(I[0]in u)x=I[0];else{for(_ in u){if(!I[0]||r.converters[_+" "+I[0]]){x=_;break}E||(E=_)}x=x||E}if(x)return x!==I[0]&&I.unshift(x),u[x]}function Uc(r,a,u,d){var _,x,E,F,I,z={},Q=r.dataTypes.slice();if(Q[1])for(E in r.converters)z[E.toLowerCase()]=r.converters[E];for(x=Q.shift();x;)if(r.responseFields[x]&&(u[r.responseFields[x]]=a),!I&&d&&r.dataFilter&&(a=r.dataFilter(a,r.dataType)),I=x,x=Q.shift(),x){if(x==="*")x=I;else if(I!=="*"&&I!==x){if(E=z[I+" "+x]||z["* "+x],!E){for(_ in z)if(F=_.split(" "),F[1]===x&&(E=z[I+" "+F[0]]||z["* "+F[0]],E)){E===!0?E=z[_]:z[_]!==!0&&(x=F[0],Q.unshift(F[1]));break}}if(E!==!0)if(E&&r.throws)a=E(a);else try{a=E(a)}catch(ie){return{state:"parsererror",error:E?ie:"No conversion from "+I+" to "+x}}}}return{state:"success",data:a}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:vr.href,type:"GET",isLocal:Rc.test(vr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$a,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,a){return a?Bs(Bs(r,l.ajaxSettings),a):Bs(l.ajaxSettings,r)},ajaxPrefilter:Ka(Ya),ajaxTransport:Ka(Fs),ajax:function(r,a){typeof r=="object"&&(a=r,r=void 0),a=a||{};var u,d,_,x,E,F,I,z,Q,ie,X=l.ajaxSetup({},a),xe=X.context||X,Je=X.context&&(xe.nodeType||xe.jquery)?l(xe):l.event,yt=l.Deferred(),dt=l.Callbacks("once memory"),Qt=X.statusCode||{},Vt={},Fn={},On="canceled",_t={readyState:0,getResponseHeader:function(St){var Bt;if(I){if(!x)for(x={};Bt=Cc.exec(_);)x[Bt[1].toLowerCase()+" "]=(x[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=x[St.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return I?_:null},setRequestHeader:function(St,Bt){return I==null&&(St=Fn[St.toLowerCase()]=Fn[St.toLowerCase()]||St,Vt[St]=Bt),this},overrideMimeType:function(St){return I==null&&(X.mimeType=St),this},statusCode:function(St){var Bt;if(St)if(I)_t.always(St[_t.status]);else for(Bt in St)Qt[Bt]=[Qt[Bt],St[Bt]];return this},abort:function(St){var Bt=St||On;return u&&u.abort(Bt),xi(0,Bt),this}};if(yt.promise(_t),X.url=((r||X.url||vr.href)+"").replace(Pc,vr.protocol+"//"),X.type=a.method||a.type||X.method||X.type,X.dataTypes=(X.dataType||"*").toLowerCase().match(He)||[""],X.crossDomain==null){F=p.createElement("a");try{F.href=X.url,F.href=F.href,X.crossDomain=Os.protocol+"//"+Os.host!=F.protocol+"//"+F.host}catch{X.crossDomain=!0}}if(X.data&&X.processData&&typeof X.data!="string"&&(X.data=l.param(X.data,X.traditional)),Za(Ya,X,a,_t),I)return _t;z=l.event&&X.global,z&&l.active++===0&&l.event.trigger("ajaxStart"),X.type=X.type.toUpperCase(),X.hasContent=!Lc.test(X.type),d=X.url.replace(Ac,""),X.hasContent?X.data&&X.processData&&(X.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(X.data=X.data.replace(bc,"+")):(ie=X.url.slice(d.length),X.data&&(X.processData||typeof X.data=="string")&&(d+=(Is.test(d)?"&":"?")+X.data,delete X.data),X.cache===!1&&(d=d.replace(wc,"$1"),ie=(Is.test(d)?"&":"?")+"_="+Wa.guid+++ie),X.url=d+ie),X.ifModified&&(l.lastModified[d]&&_t.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&_t.setRequestHeader("If-None-Match",l.etag[d])),(X.data&&X.hasContent&&X.contentType!==!1||a.contentType)&&_t.setRequestHeader("Content-Type",X.contentType),_t.setRequestHeader("Accept",X.dataTypes[0]&&X.accepts[X.dataTypes[0]]?X.accepts[X.dataTypes[0]]+(X.dataTypes[0]!=="*"?", "+$a+"; q=0.01":""):X.accepts["*"]);for(Q in X.headers)_t.setRequestHeader(Q,X.headers[Q]);if(X.beforeSend&&(X.beforeSend.call(xe,_t,X)===!1||I))return _t.abort();if(On="abort",dt.add(X.complete),_t.done(X.success),_t.fail(X.error),u=Za(Fs,X,a,_t),!u)xi(-1,"No Transport");else{if(_t.readyState=1,z&&Je.trigger("ajaxSend",[_t,X]),I)return _t;X.async&&X.timeout>0&&(E=e.setTimeout(function(){_t.abort("timeout")},X.timeout));try{I=!1,u.send(Vt,xi)}catch(St){if(I)throw St;xi(-1,St)}}function xi(St,Bt,yr,zs){var Bn,Sr,Hn,ti,ni,_n=Bt;I||(I=!0,E&&e.clearTimeout(E),u=void 0,_=zs||"",_t.readyState=St>0?4:0,Bn=St>=200&&St<300||St===304,yr&&(ti=Dc(X,_t,yr)),!Bn&&l.inArray("script",X.dataTypes)>-1&&l.inArray("json",X.dataTypes)<0&&(X.converters["text script"]=function(){}),ti=Uc(X,ti,_t,Bn),Bn?(X.ifModified&&(ni=_t.getResponseHeader("Last-Modified"),ni&&(l.lastModified[d]=ni),ni=_t.getResponseHeader("etag"),ni&&(l.etag[d]=ni)),St===204||X.type==="HEAD"?_n="nocontent":St===304?_n="notmodified":(_n=ti.state,Sr=ti.data,Hn=ti.error,Bn=!Hn)):(Hn=_n,(St||!_n)&&(_n="error",St<0&&(St=0))),_t.status=St,_t.statusText=(Bt||_n)+"",Bn?yt.resolveWith(xe,[Sr,_n,_t]):yt.rejectWith(xe,[_t,_n,Hn]),_t.statusCode(Qt),Qt=void 0,z&&Je.trigger(Bn?"ajaxSuccess":"ajaxError",[_t,X,Bn?Sr:Hn]),dt.fireWith(xe,[_t,_n]),z&&(Je.trigger("ajaxComplete",[_t,X]),--l.active||l.event.trigger("ajaxStop")))}return _t},getJSON:function(r,a,u){return l.get(r,a,u,"json")},getScript:function(r,a){return l.get(r,void 0,a,"script")}}),l.each(["get","post"],function(r,a){l[a]=function(u,d,_,x){return T(d)&&(x=x||_,_=d,d=void 0),l.ajax(l.extend({url:u,type:a,dataType:x,data:d,success:_},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var a;for(a in r.headers)a.toLowerCase()==="content-type"&&(r.contentType=r.headers[a]||"")}),l._evalUrl=function(r,a,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,a,u)}})},l.fn.extend({wrapAll:function(r){var a;return this[0]&&(T(r)&&(r=r.call(this[0])),a=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&a.insertBefore(this[0]),a.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return T(r)?this.each(function(a){l(this).wrapInner(r.call(this,a))}):this.each(function(){var a=l(this),u=a.contents();u.length?u.wrapAll(r):a.append(r)})},wrap:function(r){var a=T(r);return this.each(function(u){l(this).wrapAll(a?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Ic={0:200,1223:204},xr=l.ajaxSettings.xhr();b.cors=!!xr&&"withCredentials"in xr,b.ajax=xr=!!xr,l.ajaxTransport(function(r){var a,u;if(b.cors||xr&&!r.crossDomain)return{send:function(d,_){var x,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(x in r.xhrFields)E[x]=r.xhrFields[x];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(x in d)E.setRequestHeader(x,d[x]);a=function(F){return function(){a&&(a=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,F==="abort"?E.abort():F==="error"?typeof E.status!="number"?_(0,"error"):_(E.status,E.statusText):_(Ic[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=a(),u=E.onerror=E.ontimeout=a("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){a&&u()})},a=a("abort");try{E.send(r.hasContent&&r.data||null)}catch(F){if(a)throw F}},abort:function(){a&&a()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var a,u;return{send:function(d,_){a=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(x){a.remove(),u=null,x&&_(x.type==="error"?404:200,x.type)}),p.head.appendChild(a[0])},abort:function(){u&&u()}}}});var Ja=[],Hs=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=Ja.pop()||l.expando+"_"+Wa.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,a,u){var d,_,x,E=r.jsonp!==!1&&(Hs.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Hs.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return d=r.jsonpCallback=T(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(Hs,"$1"+d):r.jsonp!==!1&&(r.url+=(Is.test(r.url)?"&":"?")+r.jsonp+"="+d),r.converters["script json"]=function(){return x||l.error(d+" was not called"),x[0]},r.dataTypes[0]="json",_=e[d],e[d]=function(){x=arguments},u.always(function(){_===void 0?l(e).removeProp(d):e[d]=_,r[d]&&(r.jsonpCallback=a.jsonpCallback,Ja.push(d)),x&&T(_)&&_(x[0]),x=_=void 0}),"script"}),b.createHTMLDocument=function(){var r=p.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,a,u){if(typeof r!="string")return[];typeof a=="boolean"&&(u=a,a=!1);var d,_,x;return a||(b.createHTMLDocument?(a=p.implementation.createHTMLDocument(""),d=a.createElement("base"),d.href=p.location.href,a.head.appendChild(d)):a=p),_=Ee.exec(r),x=!u&&[],_?[a.createElement(_[1])]:(_=jt([r],a,x),x&&x.length&&l(x).remove(),l.merge([],_.childNodes))},l.fn.load=function(r,a,u){var d,_,x,E=this,F=r.indexOf(" ");return F>-1&&(d=_i(r.slice(F)),r=r.slice(0,F)),T(a)?(u=a,a=void 0):a&&typeof a=="object"&&(_="POST"),E.length>0&&l.ajax({url:r,type:_||"GET",dataType:"html",data:a}).done(function(I){x=arguments,E.html(d?l("<div>").append(l.parseHTML(I)).find(d):I)}).always(u&&function(I,z){E.each(function(){u.apply(this,x||[I.responseText,z,I])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(a){return r===a.elem}).length},l.offset={setOffset:function(r,a,u){var d,_,x,E,F,I,z,Q=l.css(r,"position"),ie=l(r),X={};Q==="static"&&(r.style.position="relative"),F=ie.offset(),x=l.css(r,"top"),I=l.css(r,"left"),z=(Q==="absolute"||Q==="fixed")&&(x+I).indexOf("auto")>-1,z?(d=ie.position(),E=d.top,_=d.left):(E=parseFloat(x)||0,_=parseFloat(I)||0),T(a)&&(a=a.call(r,u,l.extend({},F))),a.top!=null&&(X.top=a.top-F.top+E),a.left!=null&&(X.left=a.left-F.left+_),"using"in a?a.using.call(r,X):ie.css(X)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(_){l.offset.setOffset(this,r,_)});var a,u,d=this[0];if(d)return d.getClientRects().length?(a=d.getBoundingClientRect(),u=d.ownerDocument.defaultView,{top:a.top+u.pageYOffset,left:a.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,a,u,d=this[0],_={top:0,left:0};if(l.css(d,"position")==="fixed")a=d.getBoundingClientRect();else{for(a=this.offset(),u=d.ownerDocument,r=d.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==d&&r.nodeType===1&&(_=l(r).offset(),_.top+=l.css(r,"borderTopWidth",!0),_.left+=l.css(r,"borderLeftWidth",!0))}return{top:a.top-_.top-l.css(d,"marginTop",!0),left:a.left-_.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||Be})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,a){var u=a==="pageYOffset";l.fn[r]=function(d){return je(this,function(_,x,E){var F;if(v(_)?F=_:_.nodeType===9&&(F=_.defaultView),E===void 0)return F?F[a]:_[x];F?F.scrollTo(u?F.pageXOffset:E,u?E:F.pageYOffset):_[x]=E},r,d,arguments.length)}}),l.each(["top","left"],function(r,a){l.cssHooks[a]=Ke(b.pixelPosition,function(u,d){if(d)return d=Ve(u,a),$.test(d)?l(u).position()[a]+"px":d})}),l.each({Height:"height",Width:"width"},function(r,a){l.each({padding:"inner"+r,content:a,"":"outer"+r},function(u,d){l.fn[d]=function(_,x){var E=arguments.length&&(u||typeof _!="boolean"),F=u||(_===!0||x===!0?"margin":"border");return je(this,function(I,z,Q){var ie;return v(I)?d.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(ie=I.documentElement,Math.max(I.body["scroll"+r],ie["scroll"+r],I.body["offset"+r],ie["offset"+r],ie["client"+r])):Q===void 0?l.css(I,z,F):l.style(I,z,Q,F)},a,E?_:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,a){l.fn[a]=function(u){return this.on(a,u)}}),l.fn.extend({bind:function(r,a,u){return this.on(r,null,a,u)},unbind:function(r,a){return this.off(r,null,a)},delegate:function(r,a,u,d){return this.on(a,r,u,d)},undelegate:function(r,a,u){return arguments.length===1?this.off(r,"**"):this.off(a,r||"**",u)},hover:function(r,a){return this.on("mouseenter",r).on("mouseleave",a||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,a){l.fn[a]=function(u,d){return arguments.length>0?this.on(a,null,u,d):this.trigger(a)}});var Nc=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,a){var u,d,_;if(typeof a=="string"&&(u=r[a],a=r,r=u),!!T(r))return d=o.call(arguments,2),_=function(){return r.apply(a||this,d.concat(o.call(arguments)))},_.guid=r.guid=r.guid||l.guid++,_},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=w,l.isFunction=T,l.isWindow=v,l.camelCase=pe,l.type=U,l.now=Date.now,l.isNumeric=function(r){var a=l.type(r);return(a==="number"||a==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(Nc,"$1")};var Fc=e.jQuery,Oc=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=Oc),r&&e.jQuery===l&&(e.jQuery=Fc),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Il);var jc=Il.exports;const De=qc(jc);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oa="160",Yc=0,no=1,$c=2,Nl=1,Kc=2,Zn=3,mi=0,hn=1,Jn=2,di=0,ar=1,io=2,ro=3,so=4,Zc=5,wi=100,Jc=101,Qc=102,ao=103,oo=104,eu=200,tu=201,nu=202,iu=203,Aa=204,wa=205,ru=206,su=207,au=208,ou=209,lu=210,cu=211,uu=212,fu=213,du=214,hu=0,pu=1,mu=2,ys=3,gu=4,_u=5,vu=6,xu=7,Fl=0,yu=1,Su=2,hi=0,Mu=1,Eu=2,Tu=3,bu=4,Au=5,wu=6,Ol=300,lr=301,cr=302,Ca=303,Ra=304,As=306,La=1e3,Pn=1001,Pa=1002,ln=1003,lo=1004,js=1005,yn=1006,Cu=1007,Rr=1008,pi=1009,Ru=1010,Lu=1011,Ba=1012,Bl=1013,ci=1014,ui=1015,Lr=1016,Hl=1017,zl=1018,Ri=1020,Pu=1021,Dn=1023,Du=1024,Uu=1025,Li=1026,ur=1027,Iu=1028,Gl=1029,Nu=1030,kl=1031,Vl=1033,Ys=33776,$s=33777,Ks=33778,Zs=33779,co=35840,uo=35841,fo=35842,ho=35843,Wl=36196,po=37492,mo=37496,go=37808,_o=37809,vo=37810,xo=37811,yo=37812,So=37813,Mo=37814,Eo=37815,To=37816,bo=37817,Ao=37818,wo=37819,Co=37820,Ro=37821,Js=36492,Lo=36494,Po=36495,Fu=36283,Do=36284,Uo=36285,Io=36286,Xl=3e3,Pi=3001,Ou=3200,Bu=3201,Hu=0,zu=1,Mn="",en="srgb",ei="srgb-linear",Ha="display-p3",ws="display-p3-linear",Ss="linear",It="srgb",Ms="rec709",Es="p3",ki=7680,No=519,Gu=512,ku=513,Vu=514,ql=515,Wu=516,Xu=517,qu=518,ju=519,Fo=35044,Oo="300 es",Da=1035,Qn=2e3,Ts=2001;class dr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,f=s.length;o<f;o++)s[o].call(this,e);e.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qs=Math.PI/180,Ua=180/Math.PI;function Pr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function dn(i,e,t){return Math.max(e,Math.min(t,i))}function Yu(i,e){return(i%e+e)%e}function ea(i,e,t){return(1-t)*i+t*e}function Bo(i){return(i&i-1)===0&&i!==0}function Ia(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Er(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,f=this.y-e.y;return this.x=o*n-f*s+e.x,this.y=o*s+f*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,n,s,o,f,c,h,m){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,f,c,h,m)}set(e,t,n,s,o,f,c,h,m){const g=this.elements;return g[0]=e,g[1]=s,g[2]=c,g[3]=t,g[4]=o,g[5]=h,g[6]=n,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,f=n[0],c=n[3],h=n[6],m=n[1],g=n[4],y=n[7],S=n[2],M=n[5],b=n[8],T=s[0],v=s[3],p=s[6],D=s[1],P=s[4],U=s[7],k=s[2],H=s[5],l=s[8];return o[0]=f*T+c*D+h*k,o[3]=f*v+c*P+h*H,o[6]=f*p+c*U+h*l,o[1]=m*T+g*D+y*k,o[4]=m*v+g*P+y*H,o[7]=m*p+g*U+y*l,o[2]=S*T+M*D+b*k,o[5]=S*v+M*P+b*H,o[8]=S*p+M*U+b*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8];return t*f*g-t*c*m-n*o*g+n*c*h+s*o*m-s*f*h}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=g*f-c*m,S=c*h-g*o,M=m*o-f*h,b=t*y+n*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=y*T,e[1]=(s*m-g*n)*T,e[2]=(c*n-s*f)*T,e[3]=S*T,e[4]=(g*t-s*h)*T,e[5]=(s*o-c*t)*T,e[6]=M*T,e[7]=(n*h-m*t)*T,e[8]=(f*t-n*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,f,c){const h=Math.cos(o),m=Math.sin(o);return this.set(n*h,n*m,-n*(h*f+m*c)+f+e,-s*m,s*h,-s*(-m*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new pt;function jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $u(){const i=bs("canvas");return i.style.display="block",i}const Ho={};function Cr(i){i in Ho||(Ho[i]=!0,console.warn(i))}const zo=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Go=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wr={[ei]:{transfer:Ss,primaries:Ms,toReference:i=>i,fromReference:i=>i},[en]:{transfer:It,primaries:Ms,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ws]:{transfer:Ss,primaries:Es,toReference:i=>i.applyMatrix3(Go),fromReference:i=>i.applyMatrix3(zo)},[Ha]:{transfer:It,primaries:Es,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Go),fromReference:i=>i.applyMatrix3(zo).convertLinearToSRGB()}},Ku=new Set([ei,ws]),Ct={enabled:!0,_workingColorSpace:ei,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Ku.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Wr[e].toReference,s=Wr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Wr[i].primaries},getTransfer:function(i){return i===Mn?Ss:Wr[i].transfer}};function or(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function na(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class Yl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Vi===void 0&&(Vi=bs("canvas")),Vi.width=e.width,Vi.height=e.height;const n=Vi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Vi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=bs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let f=0;f<o.length;f++)o[f]=or(o[f]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(or(t[n]/255)*255):t[n]=or(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zu=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Pr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let f=0,c=s.length;f<c;f++)s[f].isDataTexture?o.push(ia(s[f].image)):o.push(ia(s[f]))}else o=ia(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function ia(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ju=0;class gn extends dr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=Pn,s=Pn,o=yn,f=Rr,c=Dn,h=pi,m=gn.DEFAULT_ANISOTROPY,g=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=Pr(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=f,this.anisotropy=m,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Pi?en:Mn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Pa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Pa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Pi:Xl}set encoding(e){Cr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pi?en:Mn}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Ol;gn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,t=0,n=0,s=1){tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,f=e.elements;return this.x=f[0]*t+f[4]*n+f[8]*s+f[12]*o,this.y=f[1]*t+f[5]*n+f[9]*s+f[13]*o,this.z=f[2]*t+f[6]*n+f[10]*s+f[14]*o,this.w=f[3]*t+f[7]*n+f[11]*s+f[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const h=e.elements,m=h[0],g=h[4],y=h[8],S=h[1],M=h[5],b=h[9],T=h[2],v=h[6],p=h[10];if(Math.abs(g-S)<.01&&Math.abs(y-T)<.01&&Math.abs(b-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+T)<.1&&Math.abs(b+v)<.1&&Math.abs(m+M+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,U=(M+1)/2,k=(p+1)/2,H=(g+S)/4,l=(y+T)/4,de=(b+v)/4;return P>U&&P>k?P<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(P),s=H/n,o=l/n):U>k?U<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(U),n=H/s,o=de/s):k<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(k),n=l/o,s=de/o),this.set(n,s,o,t),this}let D=Math.sqrt((v-b)*(v-b)+(y-T)*(y-T)+(S-g)*(S-g));return Math.abs(D)<.001&&(D=1),this.x=(v-b)/D,this.y=(y-T)/D,this.z=(S-g)/D,this.w=Math.acos((m+M+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qu extends dr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Cr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pi?en:Mn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Kl extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ef extends gn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,f,c){let h=n[s+0],m=n[s+1],g=n[s+2],y=n[s+3];const S=o[f+0],M=o[f+1],b=o[f+2],T=o[f+3];if(c===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(c===1){e[t+0]=S,e[t+1]=M,e[t+2]=b,e[t+3]=T;return}if(y!==T||h!==S||m!==M||g!==b){let v=1-c;const p=h*S+m*M+g*b+y*T,D=p>=0?1:-1,P=1-p*p;if(P>Number.EPSILON){const k=Math.sqrt(P),H=Math.atan2(k,p*D);v=Math.sin(v*H)/k,c=Math.sin(c*H)/k}const U=c*D;if(h=h*v+S*U,m=m*v+M*U,g=g*v+b*U,y=y*v+T*U,v===1-c){const k=1/Math.sqrt(h*h+m*m+g*g+y*y);h*=k,m*=k,g*=k,y*=k}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,n,s,o,f){const c=n[s],h=n[s+1],m=n[s+2],g=n[s+3],y=o[f],S=o[f+1],M=o[f+2],b=o[f+3];return e[t]=c*b+g*y+h*M-m*S,e[t+1]=h*b+g*S+m*y-c*M,e[t+2]=m*b+g*M+c*S-h*y,e[t+3]=g*b-c*y-h*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,f=e._order,c=Math.cos,h=Math.sin,m=c(n/2),g=c(s/2),y=c(o/2),S=h(n/2),M=h(s/2),b=h(o/2);switch(f){case"XYZ":this._x=S*g*y+m*M*b,this._y=m*M*y-S*g*b,this._z=m*g*b+S*M*y,this._w=m*g*y-S*M*b;break;case"YXZ":this._x=S*g*y+m*M*b,this._y=m*M*y-S*g*b,this._z=m*g*b-S*M*y,this._w=m*g*y+S*M*b;break;case"ZXY":this._x=S*g*y-m*M*b,this._y=m*M*y+S*g*b,this._z=m*g*b+S*M*y,this._w=m*g*y-S*M*b;break;case"ZYX":this._x=S*g*y-m*M*b,this._y=m*M*y+S*g*b,this._z=m*g*b-S*M*y,this._w=m*g*y+S*M*b;break;case"YZX":this._x=S*g*y+m*M*b,this._y=m*M*y+S*g*b,this._z=m*g*b-S*M*y,this._w=m*g*y-S*M*b;break;case"XZY":this._x=S*g*y-m*M*b,this._y=m*M*y-S*g*b,this._z=m*g*b+S*M*y,this._w=m*g*y+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],f=t[1],c=t[5],h=t[9],m=t[2],g=t[6],y=t[10],S=n+c+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-h)*M,this._y=(o-m)*M,this._z=(f-s)*M}else if(n>c&&n>y){const M=2*Math.sqrt(1+n-c-y);this._w=(g-h)/M,this._x=.25*M,this._y=(s+f)/M,this._z=(o+m)/M}else if(c>y){const M=2*Math.sqrt(1+c-n-y);this._w=(o-m)/M,this._x=(s+f)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+y-n-c);this._w=(f-s)/M,this._x=(o+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,f=e._w,c=t._x,h=t._y,m=t._z,g=t._w;return this._x=n*g+f*c+s*m-o*h,this._y=s*g+f*h+o*c-n*m,this._z=o*g+f*m+n*h-s*c,this._w=f*g-n*c-s*h-o*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,f=this._w;let c=f*e._w+n*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=n,this._y=s,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*f+t*this._w,this._x=M*n+t*this._x,this._y=M*s+t*this._y,this._z=M*o+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,c),y=Math.sin((1-t)*g)/m,S=Math.sin(t*g)/m;return this._w=f*y+this._w*S,this._x=n*y+this._x*S,this._y=s*y+this._y*S,this._z=o*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(o),n*Math.cos(o),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,f=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*f,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*f,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*f,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,f=e.y,c=e.z,h=e.w,m=2*(f*s-c*n),g=2*(c*t-o*s),y=2*(o*n-f*t);return this.x=t+h*m+f*y-c*g,this.y=n+h*g+c*m-o*y,this.z=s+h*y+o*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,f=t.x,c=t.y,h=t.z;return this.x=s*h-o*c,this.y=o*f-n*h,this.z=n*c-s*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ra.copy(this).projectOnVector(e),this.sub(ra)}reflect(e){return this.sub(ra.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new j,ko=new Dr;class Ur{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=o.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,wn):wn.fromBufferAttribute(o,f),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xr.copy(n.boundingBox)),Xr.applyMatrix4(e.matrixWorld),this.union(Xr)}const s=e.children;for(let o=0,f=s.length;o<f;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),qr.subVectors(this.max,Tr),Wi.subVectors(e.a,Tr),Xi.subVectors(e.b,Tr),qi.subVectors(e.c,Tr),ri.subVectors(Xi,Wi),si.subVectors(qi,Xi),Si.subVectors(Wi,qi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Si.z,Si.y,ri.z,0,-ri.x,si.z,0,-si.x,Si.z,0,-Si.x,-ri.y,ri.x,0,-si.y,si.x,0,-Si.y,Si.x,0];return!sa(t,Wi,Xi,qi,qr)||(t=[1,0,0,0,1,0,0,0,1],!sa(t,Wi,Xi,qi,qr))?!1:(jr.crossVectors(ri,si),t=[jr.x,jr.y,jr.z],sa(t,Wi,Xi,qi,qr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qn=[new j,new j,new j,new j,new j,new j,new j,new j],wn=new j,Xr=new Ur,Wi=new j,Xi=new j,qi=new j,ri=new j,si=new j,Si=new j,Tr=new j,qr=new j,jr=new j,Mi=new j;function sa(i,e,t,n,s){for(let o=0,f=i.length-3;o<=f;o+=3){Mi.fromArray(i,o);const c=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),h=e.dot(Mi),m=t.dot(Mi),g=n.dot(Mi);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>c)return!1}return!0}const tf=new Ur,br=new j,aa=new j;class Ir{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tf.setFromPoints(e).getCenter(n);let s=0;for(let o=0,f=e.length;o<f;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(aa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(aa)),this.expandByPoint(br.copy(e.center).sub(aa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new j,oa=new j,Yr=new j,ai=new j,la=new j,$r=new j,ca=new j;class za{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oa.copy(e).add(t).multiplyScalar(.5),Yr.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(oa);const o=e.distanceTo(t)*.5,f=-this.direction.dot(Yr),c=ai.dot(this.direction),h=-ai.dot(Yr),m=ai.lengthSq(),g=Math.abs(1-f*f);let y,S,M,b;if(g>0)if(y=f*h-c,S=f*c-h,b=o*g,y>=0)if(S>=-b)if(S<=b){const T=1/g;y*=T,S*=T,M=y*(y+f*S+2*c)+S*(f*y+S+2*h)+m}else S=o,y=Math.max(0,-(f*S+c)),M=-y*y+S*(S+2*h)+m;else S=-o,y=Math.max(0,-(f*S+c)),M=-y*y+S*(S+2*h)+m;else S<=-b?(y=Math.max(0,-(-f*o+c)),S=y>0?-o:Math.min(Math.max(-o,-h),o),M=-y*y+S*(S+2*h)+m):S<=b?(y=0,S=Math.min(Math.max(-o,-h),o),M=S*(S+2*h)+m):(y=Math.max(0,-(f*o+c)),S=y>0?o:Math.min(Math.max(-o,-h),o),M=-y*y+S*(S+2*h)+m);else S=f>0?-o:o,y=Math.max(0,-(f*S+c)),M=-y*y+S*(S+2*h)+m;return n&&n.copy(this.origin).addScaledVector(this.direction,y),s&&s.copy(oa).addScaledVector(Yr,S),M}intersectSphere(e,t){jn.subVectors(e.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,o=e.radius*e.radius;if(s>o)return null;const f=Math.sqrt(o-s),c=n-f,h=n+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,f,c,h;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return m>=0?(n=(e.min.x-S.x)*m,s=(e.max.x-S.x)*m):(n=(e.max.x-S.x)*m,s=(e.min.x-S.x)*m),g>=0?(o=(e.min.y-S.y)*g,f=(e.max.y-S.y)*g):(o=(e.max.y-S.y)*g,f=(e.min.y-S.y)*g),n>f||o>s||((o>n||isNaN(n))&&(n=o),(f<s||isNaN(s))&&(s=f),y>=0?(c=(e.min.z-S.z)*y,h=(e.max.z-S.z)*y):(c=(e.max.z-S.z)*y,h=(e.min.z-S.z)*y),n>h||c>s)||((c>n||n!==n)&&(n=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,o){la.subVectors(t,e),$r.subVectors(n,e),ca.crossVectors(la,$r);let f=this.direction.dot(ca),c;if(f>0){if(s)return null;c=1}else if(f<0)c=-1,f=-f;else return null;ai.subVectors(this.origin,e);const h=c*this.direction.dot($r.crossVectors(ai,$r));if(h<0)return null;const m=c*this.direction.dot(la.cross(ai));if(m<0||h+m>f)return null;const g=-c*ai.dot(ca);return g<0?null:this.at(g/f,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,n,s,o,f,c,h,m,g,y,S,M,b,T,v){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,f,c,h,m,g,y,S,M,b,T,v)}set(e,t,n,s,o,f,c,h,m,g,y,S,M,b,T,v){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=o,p[5]=f,p[9]=c,p[13]=h,p[2]=m,p[6]=g,p[10]=y,p[14]=S,p[3]=M,p[7]=b,p[11]=T,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ji.setFromMatrixColumn(e,0).length(),o=1/ji.setFromMatrixColumn(e,1).length(),f=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*f,t[9]=n[9]*f,t[10]=n[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,f=Math.cos(n),c=Math.sin(n),h=Math.cos(s),m=Math.sin(s),g=Math.cos(o),y=Math.sin(o);if(e.order==="XYZ"){const S=f*g,M=f*y,b=c*g,T=c*y;t[0]=h*g,t[4]=-h*y,t[8]=m,t[1]=M+b*m,t[5]=S-T*m,t[9]=-c*h,t[2]=T-S*m,t[6]=b+M*m,t[10]=f*h}else if(e.order==="YXZ"){const S=h*g,M=h*y,b=m*g,T=m*y;t[0]=S+T*c,t[4]=b*c-M,t[8]=f*m,t[1]=f*y,t[5]=f*g,t[9]=-c,t[2]=M*c-b,t[6]=T+S*c,t[10]=f*h}else if(e.order==="ZXY"){const S=h*g,M=h*y,b=m*g,T=m*y;t[0]=S-T*c,t[4]=-f*y,t[8]=b+M*c,t[1]=M+b*c,t[5]=f*g,t[9]=T-S*c,t[2]=-f*m,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const S=f*g,M=f*y,b=c*g,T=c*y;t[0]=h*g,t[4]=b*m-M,t[8]=S*m+T,t[1]=h*y,t[5]=T*m+S,t[9]=M*m-b,t[2]=-m,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const S=f*h,M=f*m,b=c*h,T=c*m;t[0]=h*g,t[4]=T-S*y,t[8]=b*y+M,t[1]=y,t[5]=f*g,t[9]=-c*g,t[2]=-m*g,t[6]=M*y+b,t[10]=S-T*y}else if(e.order==="XZY"){const S=f*h,M=f*m,b=c*h,T=c*m;t[0]=h*g,t[4]=-y,t[8]=m*g,t[1]=S*y+T,t[5]=f*g,t[9]=M*y-b,t[2]=b*y-M,t[6]=c*g,t[10]=T*y+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nf,e,rf)}lookAt(e,t,n){const s=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),oi.crossVectors(n,pn),oi.lengthSq()===0&&(Math.abs(n.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),oi.crossVectors(n,pn)),oi.normalize(),Kr.crossVectors(pn,oi),s[0]=oi.x,s[4]=Kr.x,s[8]=pn.x,s[1]=oi.y,s[5]=Kr.y,s[9]=pn.y,s[2]=oi.z,s[6]=Kr.z,s[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,f=n[0],c=n[4],h=n[8],m=n[12],g=n[1],y=n[5],S=n[9],M=n[13],b=n[2],T=n[6],v=n[10],p=n[14],D=n[3],P=n[7],U=n[11],k=n[15],H=s[0],l=s[4],de=s[8],w=s[12],N=s[1],se=s[5],fe=s[9],ue=s[13],G=s[2],ee=s[6],re=s[10],oe=s[14],le=s[3],ce=s[7],he=s[11],Se=s[15];return o[0]=f*H+c*N+h*G+m*le,o[4]=f*l+c*se+h*ee+m*ce,o[8]=f*de+c*fe+h*re+m*he,o[12]=f*w+c*ue+h*oe+m*Se,o[1]=g*H+y*N+S*G+M*le,o[5]=g*l+y*se+S*ee+M*ce,o[9]=g*de+y*fe+S*re+M*he,o[13]=g*w+y*ue+S*oe+M*Se,o[2]=b*H+T*N+v*G+p*le,o[6]=b*l+T*se+v*ee+p*ce,o[10]=b*de+T*fe+v*re+p*he,o[14]=b*w+T*ue+v*oe+p*Se,o[3]=D*H+P*N+U*G+k*le,o[7]=D*l+P*se+U*ee+k*ce,o[11]=D*de+P*fe+U*re+k*he,o[15]=D*w+P*ue+U*oe+k*Se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],f=e[1],c=e[5],h=e[9],m=e[13],g=e[2],y=e[6],S=e[10],M=e[14],b=e[3],T=e[7],v=e[11],p=e[15];return b*(+o*h*y-s*m*y-o*c*S+n*m*S+s*c*M-n*h*M)+T*(+t*h*M-t*m*S+o*f*S-s*f*M+s*m*g-o*h*g)+v*(+t*m*y-t*c*M-o*f*y+n*f*M+o*c*g-n*m*g)+p*(-s*c*g-t*h*y+t*c*S+s*f*y-n*f*S+n*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],f=e[4],c=e[5],h=e[6],m=e[7],g=e[8],y=e[9],S=e[10],M=e[11],b=e[12],T=e[13],v=e[14],p=e[15],D=y*v*m-T*S*m+T*h*M-c*v*M-y*h*p+c*S*p,P=b*S*m-g*v*m-b*h*M+f*v*M+g*h*p-f*S*p,U=g*T*m-b*y*m+b*c*M-f*T*M-g*c*p+f*y*p,k=b*y*h-g*T*h-b*c*S+f*T*S+g*c*v-f*y*v,H=t*D+n*P+s*U+o*k;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/H;return e[0]=D*l,e[1]=(T*S*o-y*v*o-T*s*M+n*v*M+y*s*p-n*S*p)*l,e[2]=(c*v*o-T*h*o+T*s*m-n*v*m-c*s*p+n*h*p)*l,e[3]=(y*h*o-c*S*o-y*s*m+n*S*m+c*s*M-n*h*M)*l,e[4]=P*l,e[5]=(g*v*o-b*S*o+b*s*M-t*v*M-g*s*p+t*S*p)*l,e[6]=(b*h*o-f*v*o-b*s*m+t*v*m+f*s*p-t*h*p)*l,e[7]=(f*S*o-g*h*o+g*s*m-t*S*m-f*s*M+t*h*M)*l,e[8]=U*l,e[9]=(b*y*o-g*T*o-b*n*M+t*T*M+g*n*p-t*y*p)*l,e[10]=(f*T*o-b*c*o+b*n*m-t*T*m-f*n*p+t*c*p)*l,e[11]=(g*c*o-f*y*o-g*n*m+t*y*m+f*n*M-t*c*M)*l,e[12]=k*l,e[13]=(g*T*s-b*y*s+b*n*S-t*T*S-g*n*v+t*y*v)*l,e[14]=(b*c*s-f*T*s-b*n*h+t*T*h+f*n*v-t*c*v)*l,e[15]=(f*y*s-g*c*s+g*n*h-t*y*h-f*n*S+t*c*S)*l,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,f=e.x,c=e.y,h=e.z,m=o*f,g=o*c;return this.set(m*f+n,m*c-s*h,m*h+s*c,0,m*c+s*h,g*c+n,g*h-s*f,0,m*h-s*c,g*h+s*f,o*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,f){return this.set(1,n,o,0,e,1,f,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,f=t._y,c=t._z,h=t._w,m=o+o,g=f+f,y=c+c,S=o*m,M=o*g,b=o*y,T=f*g,v=f*y,p=c*y,D=h*m,P=h*g,U=h*y,k=n.x,H=n.y,l=n.z;return s[0]=(1-(T+p))*k,s[1]=(M+U)*k,s[2]=(b-P)*k,s[3]=0,s[4]=(M-U)*H,s[5]=(1-(S+p))*H,s[6]=(v+D)*H,s[7]=0,s[8]=(b+P)*l,s[9]=(v-D)*l,s[10]=(1-(S+T))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=ji.set(s[0],s[1],s[2]).length();const f=ji.set(s[4],s[5],s[6]).length(),c=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],Cn.copy(this);const m=1/o,g=1/f,y=1/c;return Cn.elements[0]*=m,Cn.elements[1]*=m,Cn.elements[2]*=m,Cn.elements[4]*=g,Cn.elements[5]*=g,Cn.elements[6]*=g,Cn.elements[8]*=y,Cn.elements[9]*=y,Cn.elements[10]*=y,t.setFromRotationMatrix(Cn),n.x=o,n.y=f,n.z=c,this}makePerspective(e,t,n,s,o,f,c=Qn){const h=this.elements,m=2*o/(t-e),g=2*o/(n-s),y=(t+e)/(t-e),S=(n+s)/(n-s);let M,b;if(c===Qn)M=-(f+o)/(f-o),b=-2*f*o/(f-o);else if(c===Ts)M=-f/(f-o),b=-f*o/(f-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=m,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,s,o,f,c=Qn){const h=this.elements,m=1/(t-e),g=1/(n-s),y=1/(f-o),S=(t+e)*m,M=(n+s)*g;let b,T;if(c===Qn)b=(f+o)*y,T=-2*y;else if(c===Ts)b=o*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new j,Cn=new Wt,nf=new j(0,0,0),rf=new j(1,1,1),oi=new j,Kr=new j,pn=new j,Vo=new Wt,Wo=new Dr;class Cs{constructor(e=0,t=0,n=0,s=Cs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],f=s[4],c=s[8],h=s[1],m=s[5],g=s[9],y=s[2],S=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,o)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-y,o),this._z=0);break;case"ZXY":this._x=Math.asin(dn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-dn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,o)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wo.setFromEuler(this),this.setFromQuaternion(Wo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cs.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const Xo=new j,Yi=new Dr,Yn=new Wt,Zr=new j,Ar=new j,af=new j,of=new Dr,qo=new j(1,0,0),jo=new j(0,1,0),Yo=new j(0,0,1),lf={type:"added"},cf={type:"removed"};class cn extends dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new j,t=new Cs,n=new Dr,s=new j(1,1,1);function o(){n.setFromEuler(t,!1)}function f(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new pt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(qo,e)}rotateY(e){return this.rotateOnAxis(jo,e)}rotateZ(e){return this.rotateOnAxis(Yo,e)}translateOnAxis(e,t){return Xo.copy(e).applyQuaternion(this.quaternion),this.position.add(Xo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qo,e)}translateY(e){return this.translateOnAxis(jo,e)}translateZ(e){return this.translateOnAxis(Yo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zr.copy(e):Zr.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ar,Zr,this.up):Yn.lookAt(Zr,Ar,this.up),this.quaternion.setFromRotationMatrix(Yn),s&&(Yn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Yn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const f=this.children[n].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,f=s.length;o<f;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,af),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const o=t[n];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let o=0,f=s.length;o<f;o++){const c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const y=h[m];o(e.shapes,y)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,m=this.material.length;h<m;h++)c.push(o(e.materials,this.material[h]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(o(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),m=f(e.textures),g=f(e.images),y=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);c.length>0&&(n.geometries=c),h.length>0&&(n.materials=h),m.length>0&&(n.textures=m),g.length>0&&(n.images=g),y.length>0&&(n.shapes=y),S.length>0&&(n.skeletons=S),M.length>0&&(n.animations=M),b.length>0&&(n.nodes=b)}return n.object=s,n;function f(c){const h=[];for(const m in c){const g=c[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}cn.DEFAULT_UP=new j(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rn=new j,$n=new j,ua=new j,Kn=new j,$i=new j,Ki=new j,$o=new j,fa=new j,da=new j,ha=new j;let Jr=!1;class Ln{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Rn.subVectors(e,t),s.cross(Rn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Rn.subVectors(s,t),$n.subVectors(n,t),ua.subVectors(e,t);const f=Rn.dot(Rn),c=Rn.dot($n),h=Rn.dot(ua),m=$n.dot($n),g=$n.dot(ua),y=f*m-c*c;if(y===0)return o.set(0,0,0),null;const S=1/y,M=(m*h-c*g)*S,b=(f*g-c*h)*S;return o.set(1-M-b,b,M)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(e,t,n,s,o,f,c,h){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),this.getInterpolation(e,t,n,s,o,f,c,h)}static getInterpolation(e,t,n,s,o,f,c,h){return this.getBarycoord(e,t,n,s,Kn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Kn.x),h.addScaledVector(f,Kn.y),h.addScaledVector(c,Kn.z),h)}static isFrontFacing(e,t,n,s){return Rn.subVectors(n,t),$n.subVectors(e,t),Rn.cross($n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Rn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ln.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,s,o){return Jr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Jr=!0),Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}getInterpolation(e,t,n,s,o){return Ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let f,c;$i.subVectors(s,n),Ki.subVectors(o,n),fa.subVectors(e,n);const h=$i.dot(fa),m=Ki.dot(fa);if(h<=0&&m<=0)return t.copy(n);da.subVectors(e,s);const g=$i.dot(da),y=Ki.dot(da);if(g>=0&&y<=g)return t.copy(s);const S=h*y-g*m;if(S<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(n).addScaledVector($i,f);ha.subVectors(e,o);const M=$i.dot(ha),b=Ki.dot(ha);if(b>=0&&M<=b)return t.copy(o);const T=M*m-h*b;if(T<=0&&m>=0&&b<=0)return c=m/(m-b),t.copy(n).addScaledVector(Ki,c);const v=g*b-M*y;if(v<=0&&y-g>=0&&M-b>=0)return $o.subVectors(o,s),c=(y-g)/(y-g+(M-b)),t.copy(s).addScaledVector($o,c);const p=1/(v+T+S);return f=T*p,c=S*p,t.copy(n).addScaledVector($i,f).addScaledVector(Ki,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},li={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function pa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ct.workingColorSpace){if(e=Yu(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,f=2*n-o;this.r=pa(f,o,e+1/3),this.g=pa(f,o,e),this.b=pa(f,o,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const f=s[1],c=s[2];switch(f){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],f=o.length;if(f===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const n=Jl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ct.fromWorkingColorSpace(sn.copy(this),e),Math.round(dn(sn.r*255,0,255))*65536+Math.round(dn(sn.g*255,0,255))*256+Math.round(dn(sn.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(sn.copy(this),t);const n=sn.r,s=sn.g,o=sn.b,f=Math.max(n,s,o),c=Math.min(n,s,o);let h,m;const g=(c+f)/2;if(c===f)h=0,m=0;else{const y=f-c;switch(m=g<=.5?y/(f+c):y/(2-f-c),f){case n:h=(s-o)/y+(s<o?6:0);break;case s:h=(o-n)/y+2;break;case o:h=(n-s)/y+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=en){Ct.fromWorkingColorSpace(sn.copy(this),e);const t=sn.r,n=sn.g,s=sn.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(li),this.setHSL(li.h+e,li.s+t,li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(li),e.getHSL(Qr);const n=ea(li.h,Qr.h,t),s=ea(li.s,Qr.s,t),o=ea(li.l,Qr.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new Tt;Tt.NAMES=Jl;let uf=0;class hr extends dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Pr(),this.name="",this.type="Material",this.blending=ar,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Aa,this.blendDst=wa,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=No,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Aa&&(n.blendSrc=this.blendSrc),this.blendDst!==wa&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==No&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const f=[];for(const c in o){const h=o[c];delete h.metadata,f.push(h)}return f}if(t){const o=s(e.textures),f=s(e.images);o.length>0&&(n.textures=o),f.length>0&&(n.images=f)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ql extends hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const kt=new j,es=new Rt;class Un{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Er(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Er(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Er(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Er(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Er(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),s=fn(s,this.array),o=fn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class ec extends Un{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends Un{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kn extends Un{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ff=0;const xn=new Wt,ma=new cn,Zi=new j,mn=new Ur,wr=new Ur,$t=new j;class In extends dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Pr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jl(e)?tc:ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new pt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const o=e[n];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new kn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];mn.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let o=0,f=t.length;o<f;o++){const c=t[o];wr.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(mn.min,wr.min),mn.expandByPoint($t),$t.addVectors(mn.max,wr.max),mn.expandByPoint($t)):(mn.expandByPoint(wr.min),mn.expandByPoint(wr.max))}mn.getCenter(n);let s=0;for(let o=0,f=e.count;o<f;o++)$t.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared($t));if(t)for(let o=0,f=t.length;o<f;o++){const c=t[o],h=this.morphTargetsRelative;for(let m=0,g=c.count;m<g;m++)$t.fromBufferAttribute(c,m),h&&(Zi.fromBufferAttribute(e,m),$t.add(Zi)),s=Math.max(s,n.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,o=t.normal.array,f=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,m=[],g=[];for(let N=0;N<c;N++)m[N]=new j,g[N]=new j;const y=new j,S=new j,M=new j,b=new Rt,T=new Rt,v=new Rt,p=new j,D=new j;function P(N,se,fe){y.fromArray(s,N*3),S.fromArray(s,se*3),M.fromArray(s,fe*3),b.fromArray(f,N*2),T.fromArray(f,se*2),v.fromArray(f,fe*2),S.sub(y),M.sub(y),T.sub(b),v.sub(b);const ue=1/(T.x*v.y-v.x*T.y);isFinite(ue)&&(p.copy(S).multiplyScalar(v.y).addScaledVector(M,-T.y).multiplyScalar(ue),D.copy(M).multiplyScalar(T.x).addScaledVector(S,-v.x).multiplyScalar(ue),m[N].add(p),m[se].add(p),m[fe].add(p),g[N].add(D),g[se].add(D),g[fe].add(D))}let U=this.groups;U.length===0&&(U=[{start:0,count:n.length}]);for(let N=0,se=U.length;N<se;++N){const fe=U[N],ue=fe.start,G=fe.count;for(let ee=ue,re=ue+G;ee<re;ee+=3)P(n[ee+0],n[ee+1],n[ee+2])}const k=new j,H=new j,l=new j,de=new j;function w(N){l.fromArray(o,N*3),de.copy(l);const se=m[N];k.copy(se),k.sub(l.multiplyScalar(l.dot(se))).normalize(),H.crossVectors(de,se);const ue=H.dot(g[N])<0?-1:1;h[N*4]=k.x,h[N*4+1]=k.y,h[N*4+2]=k.z,h[N*4+3]=ue}for(let N=0,se=U.length;N<se;++N){const fe=U[N],ue=fe.start,G=fe.count;for(let ee=ue,re=ue+G;ee<re;ee+=3)w(n[ee+0]),w(n[ee+1]),w(n[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let S=0,M=n.count;S<M;S++)n.setXYZ(S,0,0,0);const s=new j,o=new j,f=new j,c=new j,h=new j,m=new j,g=new j,y=new j;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),v=e.getX(S+2);s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,T),f.fromBufferAttribute(t,v),g.subVectors(f,o),y.subVectors(s,o),g.cross(y),c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,T),m.fromBufferAttribute(n,v),c.add(g),h.add(g),m.add(g),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(T,h.x,h.y,h.z),n.setXYZ(v,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)s.fromBufferAttribute(t,S+0),o.fromBufferAttribute(t,S+1),f.fromBufferAttribute(t,S+2),g.subVectors(f,o),y.subVectors(s,o),g.cross(y),n.setXYZ(S+0,g.x,g.y,g.z),n.setXYZ(S+1,g.x,g.y,g.z),n.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,h){const m=c.array,g=c.itemSize,y=c.normalized,S=new m.constructor(h.length*g);let M=0,b=0;for(let T=0,v=h.length;T<v;T++){c.isInterleavedBufferAttribute?M=h[T]*c.data.stride+c.offset:M=h[T]*g;for(let p=0;p<g;p++)S[b++]=m[M++]}return new Un(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new In,n=this.index.array,s=this.attributes;for(const c in s){const h=s[c],m=e(h,n);t.setAttribute(c,m)}const o=this.morphAttributes;for(const c in o){const h=[],m=o[c];for(let g=0,y=m.length;g<y;g++){const S=m[g],M=e(S,n);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const m=f[c];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const m=n[h];e.data.attributes[h]=m.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let y=0,S=m.length;y<S;y++){const M=m[y];g.push(M.toJSON(e.data))}g.length>0&&(s[h]=g,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const m in s){const g=s[m];this.setAttribute(m,g.clone(t))}const o=e.morphAttributes;for(const m in o){const g=[],y=o[m];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ko=new Wt,Ei=new za,ts=new Ir,Zo=new j,Ji=new j,Qi=new j,er=new j,ga=new j,ns=new j,is=new Rt,rs=new Rt,ss=new Rt,Jo=new j,Qo=new j,el=new j,as=new j,os=new j;class fi extends cn{constructor(e=new In,t=new Ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,f=s.length;o<f;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,f=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){ns.set(0,0,0);for(let h=0,m=o.length;h<m;h++){const g=c[h],y=o[h];g!==0&&(ga.fromBufferAttribute(y,e),f?ns.addScaledVector(ga,g):ns.addScaledVector(ga.sub(t),g))}t.add(ns)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(o),Ei.copy(e.ray).recast(e.near),!(ts.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(ts,Zo)===null||Ei.origin.distanceToSquared(Zo)>(e.far-e.near)**2))&&(Ko.copy(o).invert(),Ei.copy(e.ray).applyMatrix4(Ko),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let s;const o=this.geometry,f=this.material,c=o.index,h=o.attributes.position,m=o.attributes.uv,g=o.attributes.uv1,y=o.attributes.normal,S=o.groups,M=o.drawRange;if(c!==null)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const v=S[b],p=f[v.materialIndex],D=Math.max(v.start,M.start),P=Math.min(c.count,Math.min(v.start+v.count,M.start+M.count));for(let U=D,k=P;U<k;U+=3){const H=c.getX(U),l=c.getX(U+1),de=c.getX(U+2);s=ls(this,p,e,n,m,g,y,H,l,de),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const b=Math.max(0,M.start),T=Math.min(c.count,M.start+M.count);for(let v=b,p=T;v<p;v+=3){const D=c.getX(v),P=c.getX(v+1),U=c.getX(v+2);s=ls(this,f,e,n,m,g,y,D,P,U),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const v=S[b],p=f[v.materialIndex],D=Math.max(v.start,M.start),P=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let U=D,k=P;U<k;U+=3){const H=U,l=U+1,de=U+2;s=ls(this,p,e,n,m,g,y,H,l,de),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=v.materialIndex,t.push(s))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let v=b,p=T;v<p;v+=3){const D=v,P=v+1,U=v+2;s=ls(this,f,e,n,m,g,y,D,P,U),s&&(s.faceIndex=Math.floor(v/3),t.push(s))}}}}function df(i,e,t,n,s,o,f,c){let h;if(e.side===hn?h=n.intersectTriangle(f,o,s,!0,c):h=n.intersectTriangle(s,o,f,e.side===mi,c),h===null)return null;os.copy(c),os.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(os);return m<t.near||m>t.far?null:{distance:m,point:os.clone(),object:i}}function ls(i,e,t,n,s,o,f,c,h,m){i.getVertexPosition(c,Ji),i.getVertexPosition(h,Qi),i.getVertexPosition(m,er);const g=df(i,e,t,n,Ji,Qi,er,as);if(g){s&&(is.fromBufferAttribute(s,c),rs.fromBufferAttribute(s,h),ss.fromBufferAttribute(s,m),g.uv=Ln.getInterpolation(as,Ji,Qi,er,is,rs,ss,new Rt)),o&&(is.fromBufferAttribute(o,c),rs.fromBufferAttribute(o,h),ss.fromBufferAttribute(o,m),g.uv1=Ln.getInterpolation(as,Ji,Qi,er,is,rs,ss,new Rt),g.uv2=g.uv1),f&&(Jo.fromBufferAttribute(f,c),Qo.fromBufferAttribute(f,h),el.fromBufferAttribute(f,m),g.normal=Ln.getInterpolation(as,Ji,Qi,er,Jo,Qo,el,new j),g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1));const y={a:c,b:h,c:m,normal:new j,materialIndex:0};Ln.getNormal(Ji,Qi,er,y.normal),g.face=y}return g}class Nr extends In{constructor(e=1,t=1,n=1,s=1,o=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:f};const c=this;s=Math.floor(s),o=Math.floor(o),f=Math.floor(f);const h=[],m=[],g=[],y=[];let S=0,M=0;b("z","y","x",-1,-1,n,t,e,f,o,0),b("z","y","x",1,-1,n,t,-e,f,o,1),b("x","z","y",1,1,e,n,t,s,f,2),b("x","z","y",1,-1,e,n,-t,s,f,3),b("x","y","z",1,-1,e,t,n,s,o,4),b("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(h),this.setAttribute("position",new kn(m,3)),this.setAttribute("normal",new kn(g,3)),this.setAttribute("uv",new kn(y,2));function b(T,v,p,D,P,U,k,H,l,de,w){const N=U/l,se=k/de,fe=U/2,ue=k/2,G=H/2,ee=l+1,re=de+1;let oe=0,le=0;const ce=new j;for(let he=0;he<re;he++){const Se=he*se-ue;for(let Ee=0;Ee<ee;Ee++){const te=Ee*N-fe;ce[T]=te*D,ce[v]=Se*P,ce[p]=G,m.push(ce.x,ce.y,ce.z),ce[T]=0,ce[v]=0,ce[p]=H>0?1:-1,g.push(ce.x,ce.y,ce.z),y.push(Ee/l),y.push(1-he/de),oe+=1}}for(let he=0;he<de;he++)for(let Se=0;Se<l;Se++){const Ee=S+Se+ee*he,te=S+Se+ee*(he+1),ge=S+(Se+1)+ee*(he+1),Le=S+(Se+1)+ee*he;h.push(Ee,te,Le),h.push(te,ge,Le),le+=6}c.addGroup(M,le,w),M+=le,S+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=fr(i[t]);for(const s in n)e[s]=n[s]}return e}function hf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nc(i){return i.getRenderTarget()===null?i.outputColorSpace:Ct.workingColorSpace}const pf={clone:fr,merge:on};var mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=hf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?t.uniforms[s]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[s]={type:"m4",value:f.toArray()}:t.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ic extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,s,o,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,m=f.fullHeight;o+=f.offsetX*s/h,t-=f.offsetY*n/m,s*=f.width/h,n*=f.height/m}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class _f extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Sn(tr,nr,e,t);s.layers=this.layers,this.add(s);const o=new Sn(tr,nr,e,t);o.layers=this.layers,this.add(o);const f=new Sn(tr,nr,e,t);f.layers=this.layers,this.add(f);const c=new Sn(tr,nr,e,t);c.layers=this.layers,this.add(c);const h=new Sn(tr,nr,e,t);h.layers=this.layers,this.add(h);const m=new Sn(tr,nr,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,f,c,h]=t;for(const m of t)this.remove(m);if(e===Qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,f,c,h,m,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,f),e.setRenderTarget(n,2,s),e.render(t,c),e.setRenderTarget(n,3,s),e.render(t,h),e.setRenderTarget(n,4,s),e.render(t,m),n.texture.generateMipmaps=T,e.setRenderTarget(n,5,s),e.render(t,g),e.setRenderTarget(y,S,M),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class rc extends gn{constructor(e,t,n,s,o,f,c,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:lr,super(e,t,n,s,o,f,c,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vf extends Di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Cr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Pi?en:Mn),this.texture=new rc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nr(5,5,5),o=new Ui({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:di});o.uniforms.tEquirect.value=t;const f=new fi(s,o),c=t.minFilter;return t.minFilter===Rr&&(t.minFilter=yn),new _f(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,n,s);e.setRenderTarget(o)}}const _a=new j,xf=new j,yf=new pt;class bi{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=_a.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_a),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||yf.getNormalMatrix(e),s=this.coplanarPoint(_a).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Ir,cs=new j;class sc{constructor(e=new bi,t=new bi,n=new bi,s=new bi,o=new bi,f=new bi){this.planes=[e,t,n,s,o,f]}set(e,t,n,s,o,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(s),c[4].copy(o),c[5].copy(f),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qn){const n=this.planes,s=e.elements,o=s[0],f=s[1],c=s[2],h=s[3],m=s[4],g=s[5],y=s[6],S=s[7],M=s[8],b=s[9],T=s[10],v=s[11],p=s[12],D=s[13],P=s[14],U=s[15];if(n[0].setComponents(h-o,S-m,v-M,U-p).normalize(),n[1].setComponents(h+o,S+m,v+M,U+p).normalize(),n[2].setComponents(h+f,S+g,v+b,U+D).normalize(),n[3].setComponents(h-f,S-g,v-b,U-D).normalize(),n[4].setComponents(h-c,S-y,v-T,U-P).normalize(),t===Qn)n[5].setComponents(h+c,S+y,v+T,U+P).normalize();else if(t===Ts)n[5].setComponents(c,y,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(cs.x=s.normal.x>0?e.max.x:e.min.x,cs.y=s.normal.y>0?e.max.y:e.min.y,cs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let i=null,e=!1,t=null,n=null;function s(o,f){t(o,f),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Sf(i,e){const t=e.isWebGL2,n=new WeakMap;function s(m,g){const y=m.array,S=m.usage,M=y.byteLength,b=i.createBuffer();i.bindBuffer(g,b),i.bufferData(g,y,S),m.onUploadCallback();let T;if(y instanceof Float32Array)T=i.FLOAT;else if(y instanceof Uint16Array)if(m.isFloat16BufferAttribute)if(t)T=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=i.UNSIGNED_SHORT;else if(y instanceof Int16Array)T=i.SHORT;else if(y instanceof Uint32Array)T=i.UNSIGNED_INT;else if(y instanceof Int32Array)T=i.INT;else if(y instanceof Int8Array)T=i.BYTE;else if(y instanceof Uint8Array)T=i.UNSIGNED_BYTE;else if(y instanceof Uint8ClampedArray)T=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+y);return{buffer:b,type:T,bytesPerElement:y.BYTES_PER_ELEMENT,version:m.version,size:M}}function o(m,g,y){const S=g.array,M=g._updateRange,b=g.updateRanges;if(i.bindBuffer(y,m),M.count===-1&&b.length===0&&i.bufferSubData(y,0,S),b.length!==0){for(let T=0,v=b.length;T<v;T++){const p=b[T];t?i.bufferSubData(y,p.start*S.BYTES_PER_ELEMENT,S,p.start,p.count):i.bufferSubData(y,p.start*S.BYTES_PER_ELEMENT,S.subarray(p.start,p.start+p.count))}g.clearUpdateRanges()}M.count!==-1&&(t?i.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):i.bufferSubData(y,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function f(m){return m.isInterleavedBufferAttribute&&(m=m.data),n.get(m)}function c(m){m.isInterleavedBufferAttribute&&(m=m.data);const g=n.get(m);g&&(i.deleteBuffer(g.buffer),n.delete(m))}function h(m,g){if(m.isGLBufferAttribute){const S=n.get(m);(!S||S.version<m.version)&&n.set(m,{buffer:m.buffer,type:m.type,bytesPerElement:m.elementSize,version:m.version});return}m.isInterleavedBufferAttribute&&(m=m.data);const y=n.get(m);if(y===void 0)n.set(m,s(m,g));else if(y.version<m.version){if(y.size!==m.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(y.buffer,m,g),y.version=m.version}}return{get:f,remove:c,update:h}}class Ga extends In{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,f=t/2,c=Math.floor(n),h=Math.floor(s),m=c+1,g=h+1,y=e/c,S=t/h,M=[],b=[],T=[],v=[];for(let p=0;p<g;p++){const D=p*S-f;for(let P=0;P<m;P++){const U=P*y-o;b.push(U,-D,0),T.push(0,0,1),v.push(P/c),v.push(1-p/h)}}for(let p=0;p<h;p++)for(let D=0;D<c;D++){const P=D+m*p,U=D+m*(p+1),k=D+1+m*(p+1),H=D+1+m*p;M.push(P,U,H),M.push(U,k,H)}this.setIndex(M),this.setAttribute("position",new kn(b,3)),this.setAttribute("normal",new kn(T,3)),this.setAttribute("uv",new kn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ef=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Af=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Rf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Pf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Df=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ed=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,td=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ad=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ld=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ud=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_d=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Md=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Cd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ld=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Dd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Id=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Od=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$d=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,th=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,rh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ph=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Th=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ah=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ch=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Rh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Lh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ph=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ih=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$h=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zh=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ep=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Mf,alphahash_pars_fragment:Ef,alphamap_fragment:Tf,alphamap_pars_fragment:bf,alphatest_fragment:Af,alphatest_pars_fragment:wf,aomap_fragment:Cf,aomap_pars_fragment:Rf,batching_pars_vertex:Lf,batching_vertex:Pf,begin_vertex:Df,beginnormal_vertex:Uf,bsdfs:If,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Of,clipping_planes_pars_fragment:Bf,clipping_planes_pars_vertex:Hf,clipping_planes_vertex:zf,color_fragment:Gf,color_pars_fragment:kf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:qf,defaultnormal_vertex:jf,displacementmap_pars_vertex:Yf,displacementmap_vertex:$f,emissivemap_fragment:Kf,emissivemap_pars_fragment:Zf,colorspace_fragment:Jf,colorspace_pars_fragment:Qf,envmap_fragment:ed,envmap_common_pars_fragment:td,envmap_pars_fragment:nd,envmap_pars_vertex:id,envmap_physical_pars_fragment:md,envmap_vertex:rd,fog_vertex:sd,fog_pars_vertex:ad,fog_fragment:od,fog_pars_fragment:ld,gradientmap_pars_fragment:cd,lightmap_fragment:ud,lightmap_pars_fragment:fd,lights_lambert_fragment:dd,lights_lambert_pars_fragment:hd,lights_pars_begin:pd,lights_toon_fragment:gd,lights_toon_pars_fragment:_d,lights_phong_fragment:vd,lights_phong_pars_fragment:xd,lights_physical_fragment:yd,lights_physical_pars_fragment:Sd,lights_fragment_begin:Md,lights_fragment_maps:Ed,lights_fragment_end:Td,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Ad,logdepthbuf_pars_vertex:wd,logdepthbuf_vertex:Cd,map_fragment:Rd,map_pars_fragment:Ld,map_particle_fragment:Pd,map_particle_pars_fragment:Dd,metalnessmap_fragment:Ud,metalnessmap_pars_fragment:Id,morphcolor_vertex:Nd,morphnormal_vertex:Fd,morphtarget_pars_vertex:Od,morphtarget_vertex:Bd,normal_fragment_begin:Hd,normal_fragment_maps:zd,normal_pars_fragment:Gd,normal_pars_vertex:kd,normal_vertex:Vd,normalmap_pars_fragment:Wd,clearcoat_normal_fragment_begin:Xd,clearcoat_normal_fragment_maps:qd,clearcoat_pars_fragment:jd,iridescence_pars_fragment:Yd,opaque_fragment:$d,packing:Kd,premultiplied_alpha_fragment:Zd,project_vertex:Jd,dithering_fragment:Qd,dithering_pars_fragment:eh,roughnessmap_fragment:th,roughnessmap_pars_fragment:nh,shadowmap_pars_fragment:ih,shadowmap_pars_vertex:rh,shadowmap_vertex:sh,shadowmask_pars_fragment:ah,skinbase_vertex:oh,skinning_pars_vertex:lh,skinning_vertex:ch,skinnormal_vertex:uh,specularmap_fragment:fh,specularmap_pars_fragment:dh,tonemapping_fragment:hh,tonemapping_pars_fragment:ph,transmission_fragment:mh,transmission_pars_fragment:gh,uv_pars_fragment:_h,uv_pars_vertex:vh,uv_vertex:xh,worldpos_vertex:yh,background_vert:Sh,background_frag:Mh,backgroundCube_vert:Eh,backgroundCube_frag:Th,cube_vert:bh,cube_frag:Ah,depth_vert:wh,depth_frag:Ch,distanceRGBA_vert:Rh,distanceRGBA_frag:Lh,equirect_vert:Ph,equirect_frag:Dh,linedashed_vert:Uh,linedashed_frag:Ih,meshbasic_vert:Nh,meshbasic_frag:Fh,meshlambert_vert:Oh,meshlambert_frag:Bh,meshmatcap_vert:Hh,meshmatcap_frag:zh,meshnormal_vert:Gh,meshnormal_frag:kh,meshphong_vert:Vh,meshphong_frag:Wh,meshphysical_vert:Xh,meshphysical_frag:qh,meshtoon_vert:jh,meshtoon_frag:Yh,points_vert:$h,points_frag:Kh,shadow_vert:Zh,shadow_frag:Jh,sprite_vert:Qh,sprite_frag:ep},Ae={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Gn={basic:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:on([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:on([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:on([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Tt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:on([Ae.points,Ae.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:on([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:on([Ae.common,Ae.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:on([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:on([Ae.sprite,Ae.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:on([Ae.common,Ae.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:on([Ae.lights,Ae.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gn.physical={uniforms:on([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const us={r:0,b:0,g:0};function tp(i,e,t,n,s,o,f){const c=new Tt(0);let h=o===!0?0:1,m,g,y=null,S=0,M=null;function b(v,p){let D=!1,P=p.isScene===!0?p.background:null;P&&P.isTexture&&(P=(p.backgroundBlurriness>0?t:e).get(P)),P===null?T(c,h):P&&P.isColor&&(T(P,1),D=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,f),(i.autoClear||D)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),P&&(P.isCubeTexture||P.mapping===As)?(g===void 0&&(g=new fi(new Nr(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:fr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,H,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(P.colorSpace)!==It,(y!==P||S!==P.version||M!==i.toneMapping)&&(g.material.needsUpdate=!0,y=P,S=P.version,M=i.toneMapping),g.layers.enableAll(),v.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new fi(new Ga(2,2),new Ui({name:"BackgroundMaterial",uniforms:fr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(y!==P||S!==P.version||M!==i.toneMapping)&&(m.material.needsUpdate=!0,y=P,S=P.version,M=i.toneMapping),m.layers.enableAll(),v.unshift(m,m.geometry,m.material,0,0,null))}function T(v,p){v.getRGB(us,nc(i)),n.buffers.color.setClear(us.r,us.g,us.b,p,f)}return{getClearColor:function(){return c},setClearColor:function(v,p=1){c.set(v),h=p,T(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,T(c,h)},render:b}}function np(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:e.get("OES_vertex_array_object"),f=n.isWebGL2||o!==null,c={},h=v(null);let m=h,g=!1;function y(G,ee,re,oe,le){let ce=!1;if(f){const he=T(oe,re,ee);m!==he&&(m=he,M(m.object)),ce=p(G,oe,re,le),ce&&D(G,oe,re,le)}else{const he=ee.wireframe===!0;(m.geometry!==oe.id||m.program!==re.id||m.wireframe!==he)&&(m.geometry=oe.id,m.program=re.id,m.wireframe=he,ce=!0)}le!==null&&t.update(le,i.ELEMENT_ARRAY_BUFFER),(ce||g)&&(g=!1,de(G,ee,re,oe),le!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function S(){return n.isWebGL2?i.createVertexArray():o.createVertexArrayOES()}function M(G){return n.isWebGL2?i.bindVertexArray(G):o.bindVertexArrayOES(G)}function b(G){return n.isWebGL2?i.deleteVertexArray(G):o.deleteVertexArrayOES(G)}function T(G,ee,re){const oe=re.wireframe===!0;let le=c[G.id];le===void 0&&(le={},c[G.id]=le);let ce=le[ee.id];ce===void 0&&(ce={},le[ee.id]=ce);let he=ce[oe];return he===void 0&&(he=v(S()),ce[oe]=he),he}function v(G){const ee=[],re=[],oe=[];for(let le=0;le<s;le++)ee[le]=0,re[le]=0,oe[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:oe,object:G,attributes:{},index:null}}function p(G,ee,re,oe){const le=m.attributes,ce=ee.attributes;let he=0;const Se=re.getAttributes();for(const Ee in Se)if(Se[Ee].location>=0){const ge=le[Ee];let Le=ce[Ee];if(Le===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(Le=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(Le=G.instanceColor)),ge===void 0||ge.attribute!==Le||Le&&ge.data!==Le.data)return!0;he++}return m.attributesNum!==he||m.index!==oe}function D(G,ee,re,oe){const le={},ce=ee.attributes;let he=0;const Se=re.getAttributes();for(const Ee in Se)if(Se[Ee].location>=0){let ge=ce[Ee];ge===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(ge=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(ge=G.instanceColor));const Le={};Le.attribute=ge,ge&&ge.data&&(Le.data=ge.data),le[Ee]=Le,he++}m.attributes=le,m.attributesNum=he,m.index=oe}function P(){const G=m.newAttributes;for(let ee=0,re=G.length;ee<re;ee++)G[ee]=0}function U(G){k(G,0)}function k(G,ee){const re=m.newAttributes,oe=m.enabledAttributes,le=m.attributeDivisors;re[G]=1,oe[G]===0&&(i.enableVertexAttribArray(G),oe[G]=1),le[G]!==ee&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,ee),le[G]=ee)}function H(){const G=m.newAttributes,ee=m.enabledAttributes;for(let re=0,oe=ee.length;re<oe;re++)ee[re]!==G[re]&&(i.disableVertexAttribArray(re),ee[re]=0)}function l(G,ee,re,oe,le,ce,he){he===!0?i.vertexAttribIPointer(G,ee,re,le,ce):i.vertexAttribPointer(G,ee,re,oe,le,ce)}function de(G,ee,re,oe){if(n.isWebGL2===!1&&(G.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const le=oe.attributes,ce=re.getAttributes(),he=ee.defaultAttributeValues;for(const Se in ce){const Ee=ce[Se];if(Ee.location>=0){let te=le[Se];if(te===void 0&&(Se==="instanceMatrix"&&G.instanceMatrix&&(te=G.instanceMatrix),Se==="instanceColor"&&G.instanceColor&&(te=G.instanceColor)),te!==void 0){const ge=te.normalized,Le=te.itemSize,ke=t.get(te);if(ke===void 0)continue;const Ge=ke.buffer,it=ke.type,rt=ke.bytesPerElement,He=n.isWebGL2===!0&&(it===i.INT||it===i.UNSIGNED_INT||te.gpuType===Bl);if(te.isInterleavedBufferAttribute){const vt=te.data,q=vt.stride,Ht=te.offset;if(vt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Ee.locationSize;Xe++)k(Ee.location+Xe,vt.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Xe=0;Xe<Ee.locationSize;Xe++)U(Ee.location+Xe);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Xe=0;Xe<Ee.locationSize;Xe++)l(Ee.location+Xe,Le/Ee.locationSize,it,ge,q*rt,(Ht+Le/Ee.locationSize*Xe)*rt,He)}else{if(te.isInstancedBufferAttribute){for(let vt=0;vt<Ee.locationSize;vt++)k(Ee.location+vt,te.meshPerAttribute);G.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let vt=0;vt<Ee.locationSize;vt++)U(Ee.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let vt=0;vt<Ee.locationSize;vt++)l(Ee.location+vt,Le/Ee.locationSize,it,ge,Le*rt,Le/Ee.locationSize*vt*rt,He)}}else if(he!==void 0){const ge=he[Se];if(ge!==void 0)switch(ge.length){case 2:i.vertexAttrib2fv(Ee.location,ge);break;case 3:i.vertexAttrib3fv(Ee.location,ge);break;case 4:i.vertexAttrib4fv(Ee.location,ge);break;default:i.vertexAttrib1fv(Ee.location,ge)}}}}H()}function w(){fe();for(const G in c){const ee=c[G];for(const re in ee){const oe=ee[re];for(const le in oe)b(oe[le].object),delete oe[le];delete ee[re]}delete c[G]}}function N(G){if(c[G.id]===void 0)return;const ee=c[G.id];for(const re in ee){const oe=ee[re];for(const le in oe)b(oe[le].object),delete oe[le];delete ee[re]}delete c[G.id]}function se(G){for(const ee in c){const re=c[ee];if(re[G.id]===void 0)continue;const oe=re[G.id];for(const le in oe)b(oe[le].object),delete oe[le];delete re[G.id]}}function fe(){ue(),g=!0,m!==h&&(m=h,M(m.object))}function ue(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:y,reset:fe,resetDefaultState:ue,dispose:w,releaseStatesOfGeometry:N,releaseStatesOfProgram:se,initAttributes:P,enableAttribute:U,disableUnusedAttributes:H}}function ip(i,e,t,n){const s=n.isWebGL2;let o;function f(g){o=g}function c(g,y){i.drawArrays(o,g,y),t.update(y,o,1)}function h(g,y,S){if(S===0)return;let M,b;if(s)M=i,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](o,g,y,S),t.update(y,o,S)}function m(g,y,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<S;b++)this.render(g[b],y[b]);else{M.multiDrawArraysWEBGL(o,g,0,y,0,S);let b=0;for(let T=0;T<S;T++)b+=y[T];t.update(b,o,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=m}function rp(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(l){if(l==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=o(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const m=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),T=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),D=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,U=f||e.has("OES_texture_float"),k=P&&U,H=f?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:m,getMaxAnisotropy:s,getMaxPrecision:o,precision:c,logarithmicDepthBuffer:g,maxTextures:y,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:v,maxVaryings:p,maxFragmentUniforms:D,vertexTextures:P,floatFragmentTextures:U,floatVertexTextures:k,maxSamples:H}}function sp(i){const e=this;let t=null,n=0,s=!1,o=!1;const f=new bi,c=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||n!==0||s;return s=S,n=y.length,M},this.beginShadows=function(){o=!0,g(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(y,S){t=g(y,S,0)},this.setState=function(y,S,M){const b=y.clippingPlanes,T=y.clipIntersection,v=y.clipShadows,p=i.get(y);if(!s||b===null||b.length===0||o&&!v)o?g(null):m();else{const D=o?0:n,P=D*4;let U=p.clippingState||null;h.value=U,U=g(b,S,P,M);for(let k=0;k!==P;++k)U[k]=t[k];p.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function g(y,S,M,b){const T=y!==null?y.length:0;let v=null;if(T!==0){if(v=h.value,b!==!0||v===null){const p=M+T*4,D=S.matrixWorldInverse;c.getNormalMatrix(D),(v===null||v.length<p)&&(v=new Float32Array(p));for(let P=0,U=M;P!==T;++P,U+=4)f.copy(y[P]).applyMatrix4(D,c),f.normal.toArray(v,U),v[U+3]=f.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,v}}function ap(i){let e=new WeakMap;function t(f,c){return c===Ca?f.mapping=lr:c===Ra&&(f.mapping=cr),f}function n(f){if(f&&f.isTexture){const c=f.mapping;if(c===Ca||c===Ra)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const m=new vf(h.height/2);return m.fromEquirectangularTexture(i,f),e.set(f,m),f.addEventListener("dispose",s),t(m.texture,f.mapping)}else return null}}return f}function s(f){const c=f.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class op extends ic{constructor(e=-1,t=1,n=1,s=-1,o=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,f=n+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=m*this.view.offsetX,f=o+m*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(o,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,tl=[.125,.215,.35,.446,.526,.582],Ci=20,va=new op,nl=new Tt;let xa=null,ya=0,Sa=0;const Ai=(1+Math.sqrt(5))/2,ir=1/Ai,il=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,Ai,ir),new j(0,Ai,-ir),new j(ir,0,Ai),new j(-ir,0,Ai),new j(Ai,ir,0),new j(-Ai,ir,0)];class rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,ya,Sa),e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===lr||e.mapping===cr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Sa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Lr,format:Dn,colorSpace:ei,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lp(o)),this._blurMaterial=cp(o,e,t)}return s}_compileMaterial(e){const t=new fi(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,n,s){const c=new Sn(90,1,t,n),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(nl),g.toneMapping=hi,g.autoClear=!1;const M=new Ql({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),b=new fi(new Nr,M);let T=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,T=!0):(M.color.copy(nl),T=!0);for(let p=0;p<6;p++){const D=p%3;D===0?(c.up.set(0,h[p],0),c.lookAt(m[p],0,0)):D===1?(c.up.set(0,0,h[p]),c.lookAt(0,m[p],0)):(c.up.set(0,h[p],0),c.lookAt(0,0,m[p]));const P=this._cubeSize;fs(s,D*P,p>2?P:0,P,P),g.setRenderTarget(s),T&&g.render(b,c),g.render(e,c)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===lr||e.mapping===cr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=al());const o=s?this._cubemapMaterial:this._equirectMaterial,f=new fi(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;fs(t,0,0,3*h,2*h),n.setRenderTarget(t),n.render(f,va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),f=il[(s-1)%il.length];this._blur(e,s-1,s,o,f)}t.autoClear=n}_blur(e,t,n,s,o){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,n,s,"latitudinal",o),this._halfBlur(f,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,f,c){const h=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new fi(this._lodPlanes[s],m),S=m.uniforms,M=this._sizeLods[n]-1,b=isFinite(o)?Math.PI/(2*M):2*Math.PI/(2*Ci-1),T=o/b,v=isFinite(o)?1+Math.floor(g*T):Ci;v>Ci&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ci}`);const p=[];let D=0;for(let l=0;l<Ci;++l){const de=l/T,w=Math.exp(-de*de/2);p.push(w),l===0?D+=w:l<v&&(D+=2*w)}for(let l=0;l<p.length;l++)p[l]=p[l]/D;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=p,S.latitudinal.value=f==="latitudinal",c&&(S.poleAxis.value=c);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-n;const U=this._sizeLods[s],k=3*U*(s>P-rr?s-P+rr:0),H=4*(this._cubeSize-U);fs(t,k,H,3*U,2*U),h.setRenderTarget(t),h.render(y,va)}}function lp(i){const e=[],t=[],n=[];let s=i;const o=i-rr+1+tl.length;for(let f=0;f<o;f++){const c=Math.pow(2,s);t.push(c);let h=1/c;f>i-rr?h=tl[f-i+rr-1]:f===0&&(h=0),n.push(h);const m=1/(c-2),g=-m,y=1+m,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,b=6,T=3,v=2,p=1,D=new Float32Array(T*b*M),P=new Float32Array(v*b*M),U=new Float32Array(p*b*M);for(let H=0;H<M;H++){const l=H%3*2/3-1,de=H>2?0:-1,w=[l,de,0,l+2/3,de,0,l+2/3,de+1,0,l,de,0,l+2/3,de+1,0,l,de+1,0];D.set(w,T*b*H),P.set(S,v*b*H);const N=[H,H,H,H,H,H];U.set(N,p*b*H)}const k=new In;k.setAttribute("position",new Un(D,T)),k.setAttribute("uv",new Un(P,v)),k.setAttribute("faceIndex",new Un(U,p)),e.push(k),s>rr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(i,e,t){const n=new Di(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cp(i,e,t){const n=new Float32Array(Ci),s=new j(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function al(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ol(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ka(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function up(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const h=c.mapping,m=h===Ca||h===Ra,g=h===lr||h===cr;if(m||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let y=e.get(c);return t===null&&(t=new rl(i)),y=m?t.fromEquirectangular(c,y):t.fromCubemap(c,y),e.set(c,y),y.texture}else{if(e.has(c))return e.get(c).texture;{const y=c.image;if(m&&y&&y.height>0||g&&y&&s(y)){t===null&&(t=new rl(i));const S=m?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,S),c.addEventListener("dispose",o),S.texture}else return null}}}return c}function s(c){let h=0;const m=6;for(let g=0;g<m;g++)c[g]!==void 0&&h++;return h===m}function o(c){const h=c.target;h.removeEventListener("dispose",o);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:f}}function fp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function dp(i,e,t,n){const s={},o=new WeakMap;function f(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const T=S.morphAttributes[b];for(let v=0,p=T.length;v<p;v++)e.remove(T[v])}S.removeEventListener("dispose",f),delete s[S.id];const M=o.get(S);M&&(e.remove(M),o.delete(S)),n.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function c(y,S){return s[S.id]===!0||(S.addEventListener("dispose",f),s[S.id]=!0,t.memory.geometries++),S}function h(y){const S=y.attributes;for(const b in S)e.update(S[b],i.ARRAY_BUFFER);const M=y.morphAttributes;for(const b in M){const T=M[b];for(let v=0,p=T.length;v<p;v++)e.update(T[v],i.ARRAY_BUFFER)}}function m(y){const S=[],M=y.index,b=y.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let P=0,U=D.length;P<U;P+=3){const k=D[P+0],H=D[P+1],l=D[P+2];S.push(k,H,H,l,l,k)}}else if(b!==void 0){const D=b.array;T=b.version;for(let P=0,U=D.length/3-1;P<U;P+=3){const k=P+0,H=P+1,l=P+2;S.push(k,H,H,l,l,k)}}else return;const v=new(jl(S)?tc:ec)(S,1);v.version=T;const p=o.get(y);p&&e.remove(p),o.set(y,v)}function g(y){const S=o.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&m(y)}else m(y);return o.get(y)}return{get:c,update:h,getWireframeAttribute:g}}function hp(i,e,t,n){const s=n.isWebGL2;let o;function f(M){o=M}let c,h;function m(M){c=M.type,h=M.bytesPerElement}function g(M,b){i.drawElements(o,b,c,M*h),t.update(b,o,1)}function y(M,b,T){if(T===0)return;let v,p;if(s)v=i,p="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](o,b,c,M*h,T),t.update(b,o,T)}function S(M,b,T){if(T===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<T;p++)this.render(M[p]/h,b[p]);else{v.multiDrawElementsWEBGL(o,b,0,c,M,0,T);let p=0;for(let D=0;D<T;D++)p+=b[D];t.update(p,o,1)}}this.setMode=f,this.setIndex=m,this.render=g,this.renderInstances=y,this.renderMultiDraw=S}function pp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,f,c){switch(t.calls++,f){case i.TRIANGLES:t.triangles+=c*(o/3);break;case i.LINES:t.lines+=c*(o/2);break;case i.LINE_STRIP:t.lines+=c*(o-1);break;case i.LINE_LOOP:t.lines+=c*o;break;case i.POINTS:t.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function mp(i,e){return i[0]-e[0]}function gp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function _p(i,e,t){const n={},s=new Float32Array(8),o=new WeakMap,f=new tn,c=[];for(let m=0;m<8;m++)c[m]=[m,0];function h(m,g,y){const S=m.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=b!==void 0?b.length:0;let v=o.get(g);if(v===void 0||v.count!==T){let ee=function(){ue.dispose(),o.delete(g),g.removeEventListener("dispose",ee)};var M=ee;v!==void 0&&v.texture.dispose();const P=g.morphAttributes.position!==void 0,U=g.morphAttributes.normal!==void 0,k=g.morphAttributes.color!==void 0,H=g.morphAttributes.position||[],l=g.morphAttributes.normal||[],de=g.morphAttributes.color||[];let w=0;P===!0&&(w=1),U===!0&&(w=2),k===!0&&(w=3);let N=g.attributes.position.count*w,se=1;N>e.maxTextureSize&&(se=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const fe=new Float32Array(N*se*4*T),ue=new Kl(fe,N,se,T);ue.type=ui,ue.needsUpdate=!0;const G=w*4;for(let re=0;re<T;re++){const oe=H[re],le=l[re],ce=de[re],he=N*se*4*re;for(let Se=0;Se<oe.count;Se++){const Ee=Se*G;P===!0&&(f.fromBufferAttribute(oe,Se),fe[he+Ee+0]=f.x,fe[he+Ee+1]=f.y,fe[he+Ee+2]=f.z,fe[he+Ee+3]=0),U===!0&&(f.fromBufferAttribute(le,Se),fe[he+Ee+4]=f.x,fe[he+Ee+5]=f.y,fe[he+Ee+6]=f.z,fe[he+Ee+7]=0),k===!0&&(f.fromBufferAttribute(ce,Se),fe[he+Ee+8]=f.x,fe[he+Ee+9]=f.y,fe[he+Ee+10]=f.z,fe[he+Ee+11]=ce.itemSize===4?f.w:1)}}v={count:T,texture:ue,size:new Rt(N,se)},o.set(g,v),g.addEventListener("dispose",ee)}let p=0;for(let P=0;P<S.length;P++)p+=S[P];const D=g.morphTargetsRelative?1:1-p;y.getUniforms().setValue(i,"morphTargetBaseInfluence",D),y.getUniforms().setValue(i,"morphTargetInfluences",S),y.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),y.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}else{const b=S===void 0?0:S.length;let T=n[g.id];if(T===void 0||T.length!==b){T=[];for(let U=0;U<b;U++)T[U]=[U,0];n[g.id]=T}for(let U=0;U<b;U++){const k=T[U];k[0]=U,k[1]=S[U]}T.sort(gp);for(let U=0;U<8;U++)U<b&&T[U][1]?(c[U][0]=T[U][0],c[U][1]=T[U][1]):(c[U][0]=Number.MAX_SAFE_INTEGER,c[U][1]=0);c.sort(mp);const v=g.morphAttributes.position,p=g.morphAttributes.normal;let D=0;for(let U=0;U<8;U++){const k=c[U],H=k[0],l=k[1];H!==Number.MAX_SAFE_INTEGER&&l?(v&&g.getAttribute("morphTarget"+U)!==v[H]&&g.setAttribute("morphTarget"+U,v[H]),p&&g.getAttribute("morphNormal"+U)!==p[H]&&g.setAttribute("morphNormal"+U,p[H]),s[U]=l,D+=l):(v&&g.hasAttribute("morphTarget"+U)===!0&&g.deleteAttribute("morphTarget"+U),p&&g.hasAttribute("morphNormal"+U)===!0&&g.deleteAttribute("morphNormal"+U),s[U]=0)}const P=g.morphTargetsRelative?1:1-D;y.getUniforms().setValue(i,"morphTargetBaseInfluence",P),y.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:h}}function vp(i,e,t,n){let s=new WeakMap;function o(h){const m=n.render.frame,g=h.geometry,y=e.get(h,g);if(s.get(y)!==m&&(e.update(y),s.set(y,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==m&&(t.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;s.get(S)!==m&&(S.update(),s.set(S,m))}return y}function f(){s=new WeakMap}function c(h){const m=h.target;m.removeEventListener("dispose",c),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:o,dispose:f}}class oc extends gn{constructor(e,t,n,s,o,f,c,h,m,g){if(g=g!==void 0?g:Li,g!==Li&&g!==ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&g===Li&&(n=ci),n===void 0&&g===ur&&(n=Ri),super(null,s,o,f,c,h,g,n,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:ln,this.minFilter=h!==void 0?h:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const lc=new gn,cc=new oc(1,1);cc.compareFunction=ql;const uc=new Kl,fc=new ef,dc=new rc,ll=[],cl=[],ul=new Float32Array(16),fl=new Float32Array(9),dl=new Float32Array(4);function pr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=ll[s];if(o===void 0&&(o=new Float32Array(s),ll[s]=o),e!==0){n.toArray(o,0);for(let f=1,c=0;f!==e;++f)c+=t,i[f].toArray(o,c)}return o}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function qt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rs(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),qt(t,e)}}function Sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),qt(t,e)}}function Mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),qt(t,e)}}function Ep(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),qt(t,n)}}function Tp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;fl.set(n),i.uniformMatrix3fv(this.addr,!1,fl),qt(t,n)}}function bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),qt(t,n)}}function Ap(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),qt(t,e)}}function Cp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),qt(t,e)}}function Rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),qt(t,e)}}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),qt(t,e)}}function Dp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),qt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),qt(t,e)}}function Ip(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const o=this.type===i.SAMPLER_2D_SHADOW?cc:lc;t.setTexture2D(e||o,s)}function Np(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fc,s)}function Fp(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||dc,s)}function Op(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||uc,s)}function Bp(i){switch(i){case 5126:return xp;case 35664:return yp;case 35665:return Sp;case 35666:return Mp;case 35674:return Ep;case 35675:return Tp;case 35676:return bp;case 5124:case 35670:return Ap;case 35667:case 35671:return wp;case 35668:case 35672:return Cp;case 35669:case 35673:return Rp;case 5125:return Lp;case 36294:return Pp;case 36295:return Dp;case 36296:return Up;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Np;case 35680:case 36300:case 36308:case 36293:return Fp;case 36289:case 36303:case 36311:case 36292:return Op}}function Hp(i,e){i.uniform1fv(this.addr,e)}function zp(i,e){const t=pr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gp(i,e){const t=pr(e,this.size,3);i.uniform3fv(this.addr,t)}function kp(i,e){const t=pr(e,this.size,4);i.uniform4fv(this.addr,t)}function Vp(i,e){const t=pr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wp(i,e){const t=pr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xp(i,e){const t=pr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qp(i,e){i.uniform1iv(this.addr,e)}function jp(i,e){i.uniform2iv(this.addr,e)}function Yp(i,e){i.uniform3iv(this.addr,e)}function $p(i,e){i.uniform4iv(this.addr,e)}function Kp(i,e){i.uniform1uiv(this.addr,e)}function Zp(i,e){i.uniform2uiv(this.addr,e)}function Jp(i,e){i.uniform3uiv(this.addr,e)}function Qp(i,e){i.uniform4uiv(this.addr,e)}function em(i,e,t){const n=this.cache,s=e.length,o=Rs(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture2D(e[f]||lc,o[f])}function tm(i,e,t){const n=this.cache,s=e.length,o=Rs(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture3D(e[f]||fc,o[f])}function nm(i,e,t){const n=this.cache,s=e.length,o=Rs(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTextureCube(e[f]||dc,o[f])}function im(i,e,t){const n=this.cache,s=e.length,o=Rs(t,s);Xt(n,o)||(i.uniform1iv(this.addr,o),qt(n,o));for(let f=0;f!==s;++f)t.setTexture2DArray(e[f]||uc,o[f])}function rm(i){switch(i){case 5126:return Hp;case 35664:return zp;case 35665:return Gp;case 35666:return kp;case 35674:return Vp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return qp;case 35667:case 35671:return jp;case 35668:case 35672:return Yp;case 35669:case 35673:return $p;case 5125:return Kp;case 36294:return Zp;case 36295:return Jp;case 36296:return Qp;case 35678:case 36198:case 36298:case 36306:case 35682:return em;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}class sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Bp(t.type)}}class am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rm(t.type)}}class om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,f=s.length;o!==f;++o){const c=s[o];c.setValue(e,t[c.id],n)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function hl(i,e){i.seq.push(e),i.map[e.id]=e}function lm(i,e,t){const n=i.name,s=n.length;for(Ma.lastIndex=0;;){const o=Ma.exec(n),f=Ma.lastIndex;let c=o[1];const h=o[2]==="]",m=o[3];if(h&&(c=c|0),m===void 0||m==="["&&f+2===s){hl(t,m===void 0?new sm(c,i,e):new am(c,i,e));break}else{let y=t.map[c];y===void 0&&(y=new om(c),hl(t,y)),t=y}}}class _s{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),f=e.getUniformLocation(t,o.name);lm(o,f,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,f=t.length;o!==f;++o){const c=t[o],h=n[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const f=e[s];f.id in t&&n.push(f)}return n}}function pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const cm=37297;let um=0;function fm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let f=s;f<o;f++){const c=f+1;n.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return n.join(`
`)}function dm(i){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(i);let n;switch(e===t?n="":e===Es&&t===Ms?n="LinearDisplayP3ToLinearSRGB":e===Ms&&t===Es&&(n="LinearSRGBToLinearDisplayP3"),i){case ei:case ws:return[n,"LinearTransferOETF"];case en:case Ha:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const f=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+fm(i.getShaderSource(e),f)}else return s}function hm(i,e){const t=dm(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pm(i,e){let t;switch(e){case Mu:t="Linear";break;case Eu:t="Reinhard";break;case Tu:t="OptimizedCineon";break;case bu:t="ACESFilmic";break;case wu:t="AgX";break;case Au:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(sr).join(`
`)}function gm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(sr).join(`
`)}function _m(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function vm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),f=o.name;let c=1;o.type===i.FLOAT_MAT2&&(c=2),o.type===i.FLOAT_MAT3&&(c=3),o.type===i.FLOAT_MAT4&&(c=4),t[f]={type:o.type,location:i.getAttribLocation(e,f),locationSize:c}}return t}function sr(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(xm,Sm)}const ym=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Sm(i,e){let t=ht[e];if(t===void 0){const n=ym.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Na(t)}const Mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(Mm,Em)}function Em(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function xl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Zn&&(e="SHADOWMAP_TYPE_VSM"),e}function bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case lr:case cr:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Am(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cr:e="ENVMAP_MODE_REFRACTION";break}return e}function wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case yu:e="ENVMAP_BLENDING_MIX";break;case Su:e="ENVMAP_BLENDING_ADD";break}return e}function Cm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Rm(i,e,t,n){const s=i.getContext(),o=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=Tm(t),m=bm(t),g=Am(t),y=wm(t),S=Cm(t),M=t.isWebGL2?"":mm(t),b=gm(t),T=_m(o),v=s.createProgram();let p,D,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(sr).join(`
`),p.length>0&&(p+=`
`),D=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(sr).join(`
`),D.length>0&&(D+=`
`)):(p=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sr).join(`
`),D=[M,xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?ht.tonemapping_pars_fragment:"",t.toneMapping!==hi?pm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,hm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sr).join(`
`)),f=Na(f),f=gl(f,t),f=_l(f,t),c=Na(c),c=gl(c,t),c=_l(c,t),f=vl(f),c=vl(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,p=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Oo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Oo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const U=P+p+f,k=P+D+c,H=pl(s,s.VERTEX_SHADER,U),l=pl(s,s.FRAGMENT_SHADER,k);s.attachShader(v,H),s.attachShader(v,l),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function de(fe){if(i.debug.checkShaderErrors){const ue=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(H).trim(),ee=s.getShaderInfoLog(l).trim();let re=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(re=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,H,l);else{const le=ml(s,H,"vertex"),ce=ml(s,l,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+le+`
`+ce)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(G===""||ee==="")&&(oe=!1);oe&&(fe.diagnostics={runnable:re,programLog:ue,vertexShader:{log:G,prefix:p},fragmentShader:{log:ee,prefix:D}})}s.deleteShader(H),s.deleteShader(l),w=new _s(s,v),N=vm(s,v)}let w;this.getUniforms=function(){return w===void 0&&de(this),w};let N;this.getAttributes=function(){return N===void 0&&de(this),N};let se=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return se===!1&&(se=s.getProgramParameter(v,cm)),se},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=um++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=H,this.fragmentShader=l,this}let Lm=0;class Pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),f=this._getShaderCacheForMaterial(e);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(o)===!1&&(f.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Dm(e),t.set(e,n)),n}}class Dm{constructor(e){this.id=Lm++,this.code=e,this.usedTimes=0}}function Um(i,e,t,n,s,o,f){const c=new Zl,h=new Pm,m=[],g=s.isWebGL2,y=s.logarithmicDepthBuffer,S=s.vertexTextures;let M=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return w===0?"uv":`uv${w}`}function v(w,N,se,fe,ue){const G=fe.fog,ee=ue.geometry,re=w.isMeshStandardMaterial?fe.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||re),le=oe&&oe.mapping===As?oe.image.height:null,ce=b[w.type];w.precision!==null&&(M=s.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const he=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Se=he!==void 0?he.length:0;let Ee=0;ee.morphAttributes.position!==void 0&&(Ee=1),ee.morphAttributes.normal!==void 0&&(Ee=2),ee.morphAttributes.color!==void 0&&(Ee=3);let te,ge,Le,ke;if(ce){const jt=Gn[ce];te=jt.vertexShader,ge=jt.fragmentShader}else te=w.vertexShader,ge=w.fragmentShader,h.update(w),Le=h.getVertexShaderID(w),ke=h.getFragmentShaderID(w);const Ge=i.getRenderTarget(),it=ue.isInstancedMesh===!0,rt=ue.isBatchedMesh===!0,He=!!w.map,vt=!!w.matcap,q=!!oe,Ht=!!w.aoMap,Xe=!!w.lightMap,tt=!!w.bumpMap,Fe=!!w.normalMap,wt=!!w.displacementMap,je=!!w.emissiveMap,L=!!w.metalnessMap,A=!!w.roughnessMap,Z=w.anisotropy>0,pe=w.clearcoat>0,me=w.iridescence>0,ve=w.sheen>0,ae=w.transmission>0,ye=Z&&!!w.anisotropyMap,Ie=pe&&!!w.clearcoatMap,Ye=pe&&!!w.clearcoatNormalMap,lt=pe&&!!w.clearcoatRoughnessMap,_e=me&&!!w.iridescenceMap,Mt=me&&!!w.iridescenceThicknessMap,st=ve&&!!w.sheenColorMap,We=ve&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ue=!!w.specularColorMap,at=!!w.specularIntensityMap,xt=ae&&!!w.transmissionMap,Dt=ae&&!!w.thicknessMap,ct=!!w.gradientMap,Te=!!w.alphaMap,O=w.alphaTest>0,be=!!w.alphaHash,we=!!w.extensions,$e=!!ee.attributes.uv1,Ne=!!ee.attributes.uv2,ut=!!ee.attributes.uv3;let Et=hi;return w.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Et=i.toneMapping),{isWebGL2:g,shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:ge,defines:w.defines,customVertexShaderID:Le,customFragmentShaderID:ke,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:rt,instancing:it,instancingColor:it&&ue.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:ei,map:He,matcap:vt,envMap:q,envMapMode:q&&oe.mapping,envMapCubeUVHeight:le,aoMap:Ht,lightMap:Xe,bumpMap:tt,normalMap:Fe,displacementMap:S&&wt,emissiveMap:je,normalMapObjectSpace:Fe&&w.normalMapType===zu,normalMapTangentSpace:Fe&&w.normalMapType===Hu,metalnessMap:L,roughnessMap:A,anisotropy:Z,anisotropyMap:ye,clearcoat:pe,clearcoatMap:Ie,clearcoatNormalMap:Ye,clearcoatRoughnessMap:lt,iridescence:me,iridescenceMap:_e,iridescenceThicknessMap:Mt,sheen:ve,sheenColorMap:st,sheenRoughnessMap:We,specularMap:Be,specularColorMap:Ue,specularIntensityMap:at,transmission:ae,transmissionMap:xt,thicknessMap:Dt,gradientMap:ct,opaque:w.transparent===!1&&w.blending===ar,alphaMap:Te,alphaTest:O,alphaHash:be,combine:w.combine,mapUv:He&&T(w.map.channel),aoMapUv:Ht&&T(w.aoMap.channel),lightMapUv:Xe&&T(w.lightMap.channel),bumpMapUv:tt&&T(w.bumpMap.channel),normalMapUv:Fe&&T(w.normalMap.channel),displacementMapUv:wt&&T(w.displacementMap.channel),emissiveMapUv:je&&T(w.emissiveMap.channel),metalnessMapUv:L&&T(w.metalnessMap.channel),roughnessMapUv:A&&T(w.roughnessMap.channel),anisotropyMapUv:ye&&T(w.anisotropyMap.channel),clearcoatMapUv:Ie&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:st&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(w.sheenRoughnessMap.channel),specularMapUv:Be&&T(w.specularMap.channel),specularColorMapUv:Ue&&T(w.specularColorMap.channel),specularIntensityMapUv:at&&T(w.specularIntensityMap.channel),transmissionMapUv:xt&&T(w.transmissionMap.channel),thicknessMapUv:Dt&&T(w.thicknessMap.channel),alphaMapUv:Te&&T(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Fe||Z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ne,vertexUv3s:ut,pointsUvs:ue.isPoints===!0&&!!ee.attributes.uv&&(He||Te),fog:!!G,useFog:w.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,skinning:ue.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ee,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&se.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,useLegacyLights:i._useLegacyLights,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Jn,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:we&&w.extensions.derivatives===!0,extensionFragDepth:we&&w.extensions.fragDepth===!0,extensionDrawBuffers:we&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:we&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:we&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const se in w.defines)N.push(se),N.push(w.defines[se]);return w.isRawShaderMaterial===!1&&(D(N,w),P(N,w),N.push(i.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function D(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),N.alphaHash&&c.enable(18),N.batching&&c.enable(19),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function U(w){const N=b[w.type];let se;if(N){const fe=Gn[N];se=pf.clone(fe.uniforms)}else se=w.uniforms;return se}function k(w,N){let se;for(let fe=0,ue=m.length;fe<ue;fe++){const G=m[fe];if(G.cacheKey===N){se=G,++se.usedTimes;break}}return se===void 0&&(se=new Rm(i,N,w,o),m.push(se)),se}function H(w){if(--w.usedTimes===0){const N=m.indexOf(w);m[N]=m[m.length-1],m.pop(),w.destroy()}}function l(w){h.remove(w)}function de(){h.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:U,acquireProgram:k,releaseProgram:H,releaseShaderCache:l,programs:m,dispose:de}}function Im(){let i=new WeakMap;function e(o){let f=i.get(o);return f===void 0&&(f={},i.set(o,f)),f}function t(o){i.delete(o)}function n(o,f,c){i.get(o)[f]=c}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Nm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function f(y,S,M,b,T,v){let p=i[e];return p===void 0?(p={id:y.id,object:y,geometry:S,material:M,groupOrder:b,renderOrder:y.renderOrder,z:T,group:v},i[e]=p):(p.id=y.id,p.object=y,p.geometry=S,p.material=M,p.groupOrder=b,p.renderOrder=y.renderOrder,p.z=T,p.group=v),e++,p}function c(y,S,M,b,T,v){const p=f(y,S,M,b,T,v);M.transmission>0?n.push(p):M.transparent===!0?s.push(p):t.push(p)}function h(y,S,M,b,T,v){const p=f(y,S,M,b,T,v);M.transmission>0?n.unshift(p):M.transparent===!0?s.unshift(p):t.unshift(p)}function m(y,S){t.length>1&&t.sort(y||Nm),n.length>1&&n.sort(S||yl),s.length>1&&s.sort(S||yl)}function g(){for(let y=e,S=i.length;y<S;y++){const M=i[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:c,unshift:h,finish:g,sort:m}}function Fm(){let i=new WeakMap;function e(n,s){const o=i.get(n);let f;return o===void 0?(f=new Sl,i.set(n,[f])):s>=o.length?(f=new Sl,o.push(f)):f=o[s],f}function t(){i=new WeakMap}return{get:e,dispose:t}}function Om(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Tt};break;case"SpotLight":t={position:new j,direction:new j,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function Bm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Hm=0;function zm(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gm(i,e){const t=new Om,n=Bm(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new j);const o=new j,f=new Wt,c=new Wt;function h(g,y){let S=0,M=0,b=0;for(let fe=0;fe<9;fe++)s.probe[fe].set(0,0,0);let T=0,v=0,p=0,D=0,P=0,U=0,k=0,H=0,l=0,de=0,w=0;g.sort(zm);const N=y===!0?Math.PI:1;for(let fe=0,ue=g.length;fe<ue;fe++){const G=g[fe],ee=G.color,re=G.intensity,oe=G.distance,le=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=ee.r*re*N,M+=ee.g*re*N,b+=ee.b*re*N;else if(G.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(G.sh.coefficients[ce],re);w++}else if(G.isDirectionalLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*N),G.castShadow){const he=G.shadow,Se=n.get(G);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,s.directionalShadow[T]=Se,s.directionalShadowMap[T]=le,s.directionalShadowMatrix[T]=G.shadow.matrix,U++}s.directional[T]=ce,T++}else if(G.isSpotLight){const ce=t.get(G);ce.position.setFromMatrixPosition(G.matrixWorld),ce.color.copy(ee).multiplyScalar(re*N),ce.distance=oe,ce.coneCos=Math.cos(G.angle),ce.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ce.decay=G.decay,s.spot[p]=ce;const he=G.shadow;if(G.map&&(s.spotLightMap[l]=G.map,l++,he.updateMatrices(G),G.castShadow&&de++),s.spotLightMatrix[p]=he.matrix,G.castShadow){const Se=n.get(G);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,s.spotShadow[p]=Se,s.spotShadowMap[p]=le,H++}p++}else if(G.isRectAreaLight){const ce=t.get(G);ce.color.copy(ee).multiplyScalar(re),ce.halfWidth.set(G.width*.5,0,0),ce.halfHeight.set(0,G.height*.5,0),s.rectArea[D]=ce,D++}else if(G.isPointLight){const ce=t.get(G);if(ce.color.copy(G.color).multiplyScalar(G.intensity*N),ce.distance=G.distance,ce.decay=G.decay,G.castShadow){const he=G.shadow,Se=n.get(G);Se.shadowBias=he.bias,Se.shadowNormalBias=he.normalBias,Se.shadowRadius=he.radius,Se.shadowMapSize=he.mapSize,Se.shadowCameraNear=he.camera.near,Se.shadowCameraFar=he.camera.far,s.pointShadow[v]=Se,s.pointShadowMap[v]=le,s.pointShadowMatrix[v]=G.shadow.matrix,k++}s.point[v]=ce,v++}else if(G.isHemisphereLight){const ce=t.get(G);ce.skyColor.copy(G.color).multiplyScalar(re*N),ce.groundColor.copy(G.groundColor).multiplyScalar(re*N),s.hemi[P]=ce,P++}}D>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ae.LTC_FLOAT_1,s.rectAreaLTC2=Ae.LTC_FLOAT_2):(s.rectAreaLTC1=Ae.LTC_HALF_1,s.rectAreaLTC2=Ae.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ae.LTC_FLOAT_1,s.rectAreaLTC2=Ae.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Ae.LTC_HALF_1,s.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=S,s.ambient[1]=M,s.ambient[2]=b;const se=s.hash;(se.directionalLength!==T||se.pointLength!==v||se.spotLength!==p||se.rectAreaLength!==D||se.hemiLength!==P||se.numDirectionalShadows!==U||se.numPointShadows!==k||se.numSpotShadows!==H||se.numSpotMaps!==l||se.numLightProbes!==w)&&(s.directional.length=T,s.spot.length=p,s.rectArea.length=D,s.point.length=v,s.hemi.length=P,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=k,s.pointShadowMap.length=k,s.spotShadow.length=H,s.spotShadowMap.length=H,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=k,s.spotLightMatrix.length=H+l-de,s.spotLightMap.length=l,s.numSpotLightShadowsWithMaps=de,s.numLightProbes=w,se.directionalLength=T,se.pointLength=v,se.spotLength=p,se.rectAreaLength=D,se.hemiLength=P,se.numDirectionalShadows=U,se.numPointShadows=k,se.numSpotShadows=H,se.numSpotMaps=l,se.numLightProbes=w,s.version=Hm++)}function m(g,y){let S=0,M=0,b=0,T=0,v=0;const p=y.matrixWorldInverse;for(let D=0,P=g.length;D<P;D++){const U=g[D];if(U.isDirectionalLight){const k=s.directional[S];k.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(p),S++}else if(U.isSpotLight){const k=s.spot[b];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(p),k.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),k.direction.sub(o),k.direction.transformDirection(p),b++}else if(U.isRectAreaLight){const k=s.rectArea[T];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(p),c.identity(),f.copy(U.matrixWorld),f.premultiply(p),c.extractRotation(f),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),k.halfWidth.applyMatrix4(c),k.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const k=s.point[M];k.position.setFromMatrixPosition(U.matrixWorld),k.position.applyMatrix4(p),M++}else if(U.isHemisphereLight){const k=s.hemi[v];k.direction.setFromMatrixPosition(U.matrixWorld),k.direction.transformDirection(p),v++}}}return{setup:h,setupView:m,state:s}}function Ml(i,e){const t=new Gm(i,e),n=[],s=[];function o(){n.length=0,s.length=0}function f(y){n.push(y)}function c(y){s.push(y)}function h(y){t.setup(n,y)}function m(y){t.setupView(n,y)}return{init:o,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:h,setupLightsView:m,pushLight:f,pushShadow:c}}function km(i,e){let t=new WeakMap;function n(o,f=0){const c=t.get(o);let h;return c===void 0?(h=new Ml(i,e),t.set(o,[h])):f>=c.length?(h=new Ml(i,e),c.push(h)):h=c[f],h}function s(){t=new WeakMap}return{get:n,dispose:s}}class Vm extends hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ou,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wm extends hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(i,e,t){let n=new sc;const s=new Rt,o=new Rt,f=new tn,c=new Vm({depthPacking:Bu}),h=new Wm,m={},g=t.maxTextureSize,y={[mi]:hn,[hn]:mi,[Jn]:Jn},S=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new In;b.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new fi(b,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nl;let p=this.type;this.render=function(H,l,de){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||H.length===0)return;const w=i.getRenderTarget(),N=i.getActiveCubeFace(),se=i.getActiveMipmapLevel(),fe=i.state;fe.setBlending(di),fe.buffers.color.setClear(1,1,1,1),fe.buffers.depth.setTest(!0),fe.setScissorTest(!1);const ue=p!==Zn&&this.type===Zn,G=p===Zn&&this.type!==Zn;for(let ee=0,re=H.length;ee<re;ee++){const oe=H[ee],le=oe.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);const ce=le.getFrameExtents();if(s.multiply(ce),o.copy(le.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(o.x=Math.floor(g/ce.x),s.x=o.x*ce.x,le.mapSize.x=o.x),s.y>g&&(o.y=Math.floor(g/ce.y),s.y=o.y*ce.y,le.mapSize.y=o.y)),le.map===null||ue===!0||G===!0){const Se=this.type!==Zn?{minFilter:ln,magFilter:ln}:{};le.map!==null&&le.map.dispose(),le.map=new Di(s.x,s.y,Se),le.map.texture.name=oe.name+".shadowMap",le.camera.updateProjectionMatrix()}i.setRenderTarget(le.map),i.clear();const he=le.getViewportCount();for(let Se=0;Se<he;Se++){const Ee=le.getViewport(Se);f.set(o.x*Ee.x,o.y*Ee.y,o.x*Ee.z,o.y*Ee.w),fe.viewport(f),le.updateMatrices(oe,Se),n=le.getFrustum(),U(l,de,le.camera,oe,this.type)}le.isPointLightShadow!==!0&&this.type===Zn&&D(le,de),le.needsUpdate=!1}p=this.type,v.needsUpdate=!1,i.setRenderTarget(w,N,se)};function D(H,l){const de=e.update(T);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Di(s.x,s.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,i.setRenderTarget(H.mapPass),i.clear(),i.renderBufferDirect(l,null,de,S,T,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,i.setRenderTarget(H.map),i.clear(),i.renderBufferDirect(l,null,de,M,T,null)}function P(H,l,de,w){let N=null;const se=de.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(se!==void 0)N=se;else if(N=de.isPointLight===!0?h:c,i.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const fe=N.uuid,ue=l.uuid;let G=m[fe];G===void 0&&(G={},m[fe]=G);let ee=G[ue];ee===void 0&&(ee=N.clone(),G[ue]=ee,l.addEventListener("dispose",k)),N=ee}if(N.visible=l.visible,N.wireframe=l.wireframe,w===Zn?N.side=l.shadowSide!==null?l.shadowSide:l.side:N.side=l.shadowSide!==null?l.shadowSide:y[l.side],N.alphaMap=l.alphaMap,N.alphaTest=l.alphaTest,N.map=l.map,N.clipShadows=l.clipShadows,N.clippingPlanes=l.clippingPlanes,N.clipIntersection=l.clipIntersection,N.displacementMap=l.displacementMap,N.displacementScale=l.displacementScale,N.displacementBias=l.displacementBias,N.wireframeLinewidth=l.wireframeLinewidth,N.linewidth=l.linewidth,de.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const fe=i.properties.get(N);fe.light=de}return N}function U(H,l,de,w,N){if(H.visible===!1)return;if(H.layers.test(l.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===Zn)&&(!H.frustumCulled||n.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,H.matrixWorld);const ue=e.update(H),G=H.material;if(Array.isArray(G)){const ee=ue.groups;for(let re=0,oe=ee.length;re<oe;re++){const le=ee[re],ce=G[le.materialIndex];if(ce&&ce.visible){const he=P(H,ce,w,N);H.onBeforeShadow(i,H,l,de,ue,he,le),i.renderBufferDirect(de,null,ue,he,H,le),H.onAfterShadow(i,H,l,de,ue,he,le)}}}else if(G.visible){const ee=P(H,G,w,N);H.onBeforeShadow(i,H,l,de,ue,ee,null),i.renderBufferDirect(de,null,ue,ee,H,null),H.onAfterShadow(i,H,l,de,ue,ee,null)}}const fe=H.children;for(let ue=0,G=fe.length;ue<G;ue++)U(fe[ue],l,de,w,N)}function k(H){H.target.removeEventListener("dispose",k);for(const de in m){const w=m[de],N=H.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function Ym(i,e,t){const n=t.isWebGL2;function s(){let O=!1;const be=new tn;let we=null;const $e=new tn(0,0,0,0);return{setMask:function(Ne){we!==Ne&&!O&&(i.colorMask(Ne,Ne,Ne,Ne),we=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,ut,Et,zt,jt){jt===!0&&(Ne*=zt,ut*=zt,Et*=zt),be.set(Ne,ut,Et,zt),$e.equals(be)===!1&&(i.clearColor(Ne,ut,Et,zt),$e.copy(be))},reset:function(){O=!1,we=null,$e.set(-1,0,0,0)}}}function o(){let O=!1,be=null,we=null,$e=null;return{setTest:function(Ne){Ne?rt(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(Ne){be!==Ne&&!O&&(i.depthMask(Ne),be=Ne)},setFunc:function(Ne){if(we!==Ne){switch(Ne){case hu:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case gu:i.depthFunc(i.EQUAL);break;case _u:i.depthFunc(i.GEQUAL);break;case vu:i.depthFunc(i.GREATER);break;case xu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){$e!==Ne&&(i.clearDepth(Ne),$e=Ne)},reset:function(){O=!1,be=null,we=null,$e=null}}}function f(){let O=!1,be=null,we=null,$e=null,Ne=null,ut=null,Et=null,zt=null,jt=null;return{setTest:function(bt){O||(bt?rt(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(bt){be!==bt&&!O&&(i.stencilMask(bt),be=bt)},setFunc:function(bt,Ft,Kt){(we!==bt||$e!==Ft||Ne!==Kt)&&(i.stencilFunc(bt,Ft,Kt),we=bt,$e=Ft,Ne=Kt)},setOp:function(bt,Ft,Kt){(ut!==bt||Et!==Ft||zt!==Kt)&&(i.stencilOp(bt,Ft,Kt),ut=bt,Et=Ft,zt=Kt)},setLocked:function(bt){O=bt},setClear:function(bt){jt!==bt&&(i.clearStencil(bt),jt=bt)},reset:function(){O=!1,be=null,we=null,$e=null,Ne=null,ut=null,Et=null,zt=null,jt=null}}}const c=new s,h=new o,m=new f,g=new WeakMap,y=new WeakMap;let S={},M={},b=new WeakMap,T=[],v=null,p=!1,D=null,P=null,U=null,k=null,H=null,l=null,de=null,w=new Tt(0,0,0),N=0,se=!1,fe=null,ue=null,G=null,ee=null,re=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ce=0;const he=i.getParameter(i.VERSION);he.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(he)[1]),le=ce>=1):he.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(he)[1]),le=ce>=2);let Se=null,Ee={};const te=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),Le=new tn().fromArray(te),ke=new tn().fromArray(ge);function Ge(O,be,we,$e){const Ne=new Uint8Array(4),ut=i.createTexture();i.bindTexture(O,ut),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<we;Et++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(be,0,i.RGBA,1,1,$e,0,i.RGBA,i.UNSIGNED_BYTE,Ne):i.texImage2D(be+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ne);return ut}const it={};it[i.TEXTURE_2D]=Ge(i.TEXTURE_2D,i.TEXTURE_2D,1),it[i.TEXTURE_CUBE_MAP]=Ge(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(it[i.TEXTURE_2D_ARRAY]=Ge(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),it[i.TEXTURE_3D]=Ge(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),m.setClear(0),rt(i.DEPTH_TEST),h.setFunc(ys),je(!1),L(no),rt(i.CULL_FACE),Fe(di);function rt(O){S[O]!==!0&&(i.enable(O),S[O]=!0)}function He(O){S[O]!==!1&&(i.disable(O),S[O]=!1)}function vt(O,be){return M[O]!==be?(i.bindFramebuffer(O,be),M[O]=be,n&&(O===i.DRAW_FRAMEBUFFER&&(M[i.FRAMEBUFFER]=be),O===i.FRAMEBUFFER&&(M[i.DRAW_FRAMEBUFFER]=be)),!0):!1}function q(O,be){let we=T,$e=!1;if(O)if(we=b.get(be),we===void 0&&(we=[],b.set(be,we)),O.isWebGLMultipleRenderTargets){const Ne=O.texture;if(we.length!==Ne.length||we[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Et=Ne.length;ut<Et;ut++)we[ut]=i.COLOR_ATTACHMENT0+ut;we.length=Ne.length,$e=!0}}else we[0]!==i.COLOR_ATTACHMENT0&&(we[0]=i.COLOR_ATTACHMENT0,$e=!0);else we[0]!==i.BACK&&(we[0]=i.BACK,$e=!0);$e&&(t.isWebGL2?i.drawBuffers(we):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(we))}function Ht(O){return v!==O?(i.useProgram(O),v=O,!0):!1}const Xe={[wi]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Qc]:i.FUNC_REVERSE_SUBTRACT};if(n)Xe[ao]=i.MIN,Xe[oo]=i.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Xe[ao]=O.MIN_EXT,Xe[oo]=O.MAX_EXT)}const tt={[eu]:i.ZERO,[tu]:i.ONE,[nu]:i.SRC_COLOR,[Aa]:i.SRC_ALPHA,[lu]:i.SRC_ALPHA_SATURATE,[au]:i.DST_COLOR,[ru]:i.DST_ALPHA,[iu]:i.ONE_MINUS_SRC_COLOR,[wa]:i.ONE_MINUS_SRC_ALPHA,[ou]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[cu]:i.CONSTANT_COLOR,[uu]:i.ONE_MINUS_CONSTANT_COLOR,[fu]:i.CONSTANT_ALPHA,[du]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(O,be,we,$e,Ne,ut,Et,zt,jt,bt){if(O===di){p===!0&&(He(i.BLEND),p=!1);return}if(p===!1&&(rt(i.BLEND),p=!0),O!==Zc){if(O!==D||bt!==se){if((P!==wi||H!==wi)&&(i.blendEquation(i.FUNC_ADD),P=wi,H=wi),bt)switch(O){case ar:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.ONE,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ar:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case io:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case so:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}U=null,k=null,l=null,de=null,w.set(0,0,0),N=0,D=O,se=bt}return}Ne=Ne||be,ut=ut||we,Et=Et||$e,(be!==P||Ne!==H)&&(i.blendEquationSeparate(Xe[be],Xe[Ne]),P=be,H=Ne),(we!==U||$e!==k||ut!==l||Et!==de)&&(i.blendFuncSeparate(tt[we],tt[$e],tt[ut],tt[Et]),U=we,k=$e,l=ut,de=Et),(zt.equals(w)===!1||jt!==N)&&(i.blendColor(zt.r,zt.g,zt.b,jt),w.copy(zt),N=jt),D=O,se=!1}function wt(O,be){O.side===Jn?He(i.CULL_FACE):rt(i.CULL_FACE);let we=O.side===hn;be&&(we=!we),je(we),O.blending===ar&&O.transparent===!1?Fe(di):Fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),c.setMask(O.colorWrite);const $e=O.stencilWrite;m.setTest($e),$e&&(m.setMask(O.stencilWriteMask),m.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),m.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){fe!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),fe=O)}function L(O){O!==Yc?(rt(i.CULL_FACE),O!==ue&&(O===no?i.cullFace(i.BACK):O===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),ue=O}function A(O){O!==G&&(le&&i.lineWidth(O),G=O)}function Z(O,be,we){O?(rt(i.POLYGON_OFFSET_FILL),(ee!==be||re!==we)&&(i.polygonOffset(be,we),ee=be,re=we)):He(i.POLYGON_OFFSET_FILL)}function pe(O){O?rt(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function me(O){O===void 0&&(O=i.TEXTURE0+oe-1),Se!==O&&(i.activeTexture(O),Se=O)}function ve(O,be,we){we===void 0&&(Se===null?we=i.TEXTURE0+oe-1:we=Se);let $e=Ee[we];$e===void 0&&($e={type:void 0,texture:void 0},Ee[we]=$e),($e.type!==O||$e.texture!==be)&&(Se!==we&&(i.activeTexture(we),Se=we),i.bindTexture(O,be||it[O]),$e.type=O,$e.texture=be)}function ae(){const O=Ee[Se];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ye(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(O){Le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Le.copy(O))}function xt(O){ke.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ke.copy(O))}function Dt(O,be){let we=y.get(be);we===void 0&&(we=new WeakMap,y.set(be,we));let $e=we.get(O);$e===void 0&&($e=i.getUniformBlockIndex(be,O.name),we.set(O,$e))}function ct(O,be){const $e=y.get(be).get(O);g.get(be)!==$e&&(i.uniformBlockBinding(be,$e,O.__bindingPointIndex),g.set(be,$e))}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),S={},Se=null,Ee={},M={},b=new WeakMap,T=[],v=null,p=!1,D=null,P=null,U=null,k=null,H=null,l=null,de=null,w=new Tt(0,0,0),N=0,se=!1,fe=null,ue=null,G=null,ee=null,re=null,Le.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),c.reset(),h.reset(),m.reset()}return{buffers:{color:c,depth:h,stencil:m},enable:rt,disable:He,bindFramebuffer:vt,drawBuffers:q,useProgram:Ht,setBlending:Fe,setMaterial:wt,setFlipSided:je,setCullFace:L,setLineWidth:A,setPolygonOffset:Z,setScissorTest:pe,activeTexture:me,bindTexture:ve,unbindTexture:ae,compressedTexImage2D:ye,compressedTexImage3D:Ie,texImage2D:Be,texImage3D:Ue,updateUBOMapping:Dt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:We,texSubImage2D:Ye,texSubImage3D:lt,compressedTexSubImage2D:_e,compressedTexSubImage3D:Mt,scissor:at,viewport:xt,reset:Te}}function $m(i,e,t,n,s,o,f){const c=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,A){return M?new OffscreenCanvas(L,A):bs("canvas")}function T(L,A,Z,pe){let me=1;if((L.width>pe||L.height>pe)&&(me=pe/Math.max(L.width,L.height)),me<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const ve=A?Ia:Math.floor,ae=ve(me*L.width),ye=ve(me*L.height);y===void 0&&(y=b(ae,ye));const Ie=Z?b(ae,ye):y;return Ie.width=ae,Ie.height=ye,Ie.getContext("2d").drawImage(L,0,0,ae,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ae+"x"+ye+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function v(L){return Bo(L.width)&&Bo(L.height)}function p(L){return c?!1:L.wrapS!==Pn||L.wrapT!==Pn||L.minFilter!==ln&&L.minFilter!==yn}function D(L,A){return L.generateMipmaps&&A&&L.minFilter!==ln&&L.minFilter!==yn}function P(L){i.generateMipmap(L)}function U(L,A,Z,pe,me=!1){if(c===!1)return A;if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ve=A;if(A===i.RED&&(Z===i.FLOAT&&(ve=i.R32F),Z===i.HALF_FLOAT&&(ve=i.R16F),Z===i.UNSIGNED_BYTE&&(ve=i.R8)),A===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ve=i.R8UI),Z===i.UNSIGNED_SHORT&&(ve=i.R16UI),Z===i.UNSIGNED_INT&&(ve=i.R32UI),Z===i.BYTE&&(ve=i.R8I),Z===i.SHORT&&(ve=i.R16I),Z===i.INT&&(ve=i.R32I)),A===i.RG&&(Z===i.FLOAT&&(ve=i.RG32F),Z===i.HALF_FLOAT&&(ve=i.RG16F),Z===i.UNSIGNED_BYTE&&(ve=i.RG8)),A===i.RGBA){const ae=me?Ss:Ct.getTransfer(pe);Z===i.FLOAT&&(ve=i.RGBA32F),Z===i.HALF_FLOAT&&(ve=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ve=ae===It?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function k(L,A,Z){return D(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==ln&&L.minFilter!==yn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function H(L){return L===ln||L===lo||L===js?i.NEAREST:i.LINEAR}function l(L){const A=L.target;A.removeEventListener("dispose",l),w(A),A.isVideoTexture&&g.delete(A)}function de(L){const A=L.target;A.removeEventListener("dispose",de),se(A)}function w(L){const A=n.get(L);if(A.__webglInit===void 0)return;const Z=L.source,pe=S.get(Z);if(pe){const me=pe[A.__cacheKey];me.usedTimes--,me.usedTimes===0&&N(L),Object.keys(pe).length===0&&S.delete(Z)}n.remove(L)}function N(L){const A=n.get(L);i.deleteTexture(A.__webglTexture);const Z=L.source,pe=S.get(Z);delete pe[A.__cacheKey],f.memory.textures--}function se(L){const A=L.texture,Z=n.get(L),pe=n.get(A);if(pe.__webglTexture!==void 0&&(i.deleteTexture(pe.__webglTexture),f.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(Z.__webglFramebuffer[me]))for(let ve=0;ve<Z.__webglFramebuffer[me].length;ve++)i.deleteFramebuffer(Z.__webglFramebuffer[me][ve]);else i.deleteFramebuffer(Z.__webglFramebuffer[me]);Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer[me])}else{if(Array.isArray(Z.__webglFramebuffer))for(let me=0;me<Z.__webglFramebuffer.length;me++)i.deleteFramebuffer(Z.__webglFramebuffer[me]);else i.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&i.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let me=0;me<Z.__webglColorRenderbuffer.length;me++)Z.__webglColorRenderbuffer[me]&&i.deleteRenderbuffer(Z.__webglColorRenderbuffer[me]);Z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let me=0,ve=A.length;me<ve;me++){const ae=n.get(A[me]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),f.memory.textures--),n.remove(A[me])}n.remove(A),n.remove(L)}let fe=0;function ue(){fe=0}function G(){const L=fe;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),fe+=1,L}function ee(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function re(L,A){const Z=n.get(L);if(L.isVideoTexture&&wt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const pe=L.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Le(Z,L,A);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+A)}function oe(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Le(Z,L,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+A)}function le(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){Le(Z,L,A);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+A)}function ce(L,A){const Z=n.get(L);if(L.version>0&&Z.__version!==L.version){ke(Z,L,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+A)}const he={[La]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Pa]:i.MIRRORED_REPEAT},Se={[ln]:i.NEAREST,[lo]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Cu]:i.LINEAR_MIPMAP_NEAREST,[Rr]:i.LINEAR_MIPMAP_LINEAR},Ee={[Gu]:i.NEVER,[ju]:i.ALWAYS,[ku]:i.LESS,[ql]:i.LEQUAL,[Vu]:i.EQUAL,[qu]:i.GEQUAL,[Wu]:i.GREATER,[Xu]:i.NOTEQUAL};function te(L,A,Z){if(Z?(i.texParameteri(L,i.TEXTURE_WRAP_S,he[A.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,he[A.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,he[A.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,Se[A.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,Se[A.minFilter])):(i.texParameteri(L,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(L,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Pn||A.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(L,i.TEXTURE_MAG_FILTER,H(A.magFilter)),i.texParameteri(L,i.TEXTURE_MIN_FILTER,H(A.minFilter)),A.minFilter!==ln&&A.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const pe=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===ln||A.minFilter!==js&&A.minFilter!==Rr||A.type===ui&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Lr&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(L,pe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function ge(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",l));const pe=A.source;let me=S.get(pe);me===void 0&&(me={},S.set(pe,me));const ve=ee(A);if(ve!==L.__cacheKey){me[ve]===void 0&&(me[ve]={texture:i.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),me[ve].usedTimes++;const ae=me[L.__cacheKey];ae!==void 0&&(me[L.__cacheKey].usedTimes--,ae.usedTimes===0&&N(A)),L.__cacheKey=ve,L.__webglTexture=me[ve].texture}return Z}function Le(L,A,Z){let pe=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pe=i.TEXTURE_3D);const me=ge(L,A),ve=A.source;t.bindTexture(pe,L.__webglTexture,i.TEXTURE0+Z);const ae=n.get(ve);if(ve.version!==ae.__version||me===!0){t.activeTexture(i.TEXTURE0+Z);const ye=Ct.getPrimaries(Ct.workingColorSpace),Ie=A.colorSpace===Mn?null:Ct.getPrimaries(A.colorSpace),Ye=A.colorSpace===Mn||ye===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const lt=p(A)&&v(A.image)===!1;let _e=T(A.image,lt,!1,s.maxTextureSize);_e=je(A,_e);const Mt=v(_e)||c,st=o.convert(A.format,A.colorSpace);let We=o.convert(A.type),Be=U(A.internalFormat,st,We,A.colorSpace,A.isVideoTexture);te(pe,A,Mt);let Ue;const at=A.mipmaps,xt=c&&A.isVideoTexture!==!0&&Be!==Wl,Dt=ae.__version===void 0||me===!0,ct=k(A,_e,Mt);if(A.isDepthTexture)Be=i.DEPTH_COMPONENT,c?A.type===ui?Be=i.DEPTH_COMPONENT32F:A.type===ci?Be=i.DEPTH_COMPONENT24:A.type===Ri?Be=i.DEPTH24_STENCIL8:Be=i.DEPTH_COMPONENT16:A.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Li&&Be===i.DEPTH_COMPONENT&&A.type!==Ba&&A.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ci,We=o.convert(A.type)),A.format===ur&&Be===i.DEPTH_COMPONENT&&(Be=i.DEPTH_STENCIL,A.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Ri,We=o.convert(A.type))),Dt&&(xt?t.texStorage2D(i.TEXTURE_2D,1,Be,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Be,_e.width,_e.height,0,st,We,null));else if(A.isDataTexture)if(at.length>0&&Mt){xt&&Dt&&t.texStorage2D(i.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],xt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,We,Ue.data):t.texImage2D(i.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,st,We,Ue.data);A.generateMipmaps=!1}else xt?(Dt&&t.texStorage2D(i.TEXTURE_2D,ct,Be,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e.width,_e.height,st,We,_e.data)):t.texImage2D(i.TEXTURE_2D,0,Be,_e.width,_e.height,0,st,We,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Be,at[0].width,at[0].height,_e.depth);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],A.format!==Dn?st!==null?xt?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,_e.depth,st,Ue.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Te,Be,Ue.width,Ue.height,_e.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(i.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,_e.depth,st,We,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Te,Be,Ue.width,Ue.height,_e.depth,0,st,We,Ue.data)}else{xt&&Dt&&t.texStorage2D(i.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],A.format!==Dn?st!==null?xt?t.compressedTexSubImage2D(i.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,We,Ue.data):t.texImage2D(i.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,st,We,Ue.data)}else if(A.isDataArrayTexture)xt?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Be,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,st,We,_e.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,_e.width,_e.height,_e.depth,0,st,We,_e.data);else if(A.isData3DTexture)xt?(Dt&&t.texStorage3D(i.TEXTURE_3D,ct,Be,_e.width,_e.height,_e.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,st,We,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Be,_e.width,_e.height,_e.depth,0,st,We,_e.data);else if(A.isFramebufferTexture){if(Dt)if(xt)t.texStorage2D(i.TEXTURE_2D,ct,Be,_e.width,_e.height);else{let Te=_e.width,O=_e.height;for(let be=0;be<ct;be++)t.texImage2D(i.TEXTURE_2D,be,Be,Te,O,0,st,We,null),Te>>=1,O>>=1}}else if(at.length>0&&Mt){xt&&Dt&&t.texStorage2D(i.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],xt?t.texSubImage2D(i.TEXTURE_2D,Te,0,0,st,We,Ue):t.texImage2D(i.TEXTURE_2D,Te,Be,st,We,Ue);A.generateMipmaps=!1}else xt?(Dt&&t.texStorage2D(i.TEXTURE_2D,ct,Be,_e.width,_e.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,st,We,_e)):t.texImage2D(i.TEXTURE_2D,0,Be,st,We,_e);D(A,Mt)&&P(pe),ae.__version=ve.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ke(L,A,Z){if(A.image.length!==6)return;const pe=ge(L,A),me=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+Z);const ve=n.get(me);if(me.version!==ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+Z);const ae=Ct.getPrimaries(Ct.workingColorSpace),ye=A.colorSpace===Mn?null:Ct.getPrimaries(A.colorSpace),Ie=A.colorSpace===Mn||ae===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,lt=A.image[0]&&A.image[0].isDataTexture,_e=[];for(let Te=0;Te<6;Te++)!Ye&&!lt?_e[Te]=T(A.image[Te],!1,!0,s.maxCubemapSize):_e[Te]=lt?A.image[Te].image:A.image[Te],_e[Te]=je(A,_e[Te]);const Mt=_e[0],st=v(Mt)||c,We=o.convert(A.format,A.colorSpace),Be=o.convert(A.type),Ue=U(A.internalFormat,We,Be,A.colorSpace),at=c&&A.isVideoTexture!==!0,xt=ve.__version===void 0||pe===!0;let Dt=k(A,Mt,st);te(i.TEXTURE_CUBE_MAP,A,st);let ct;if(Ye){at&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ue,Mt.width,Mt.height);for(let Te=0;Te<6;Te++){ct=_e[Te].mipmaps;for(let O=0;O<ct.length;O++){const be=ct[O];A.format!==Dn?We!==null?at?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,be.width,be.height,We,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ue,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,be.width,be.height,We,Be,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ue,be.width,be.height,0,We,Be,be.data)}}}else{ct=A.mipmaps,at&&xt&&(ct.length>0&&Dt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,Ue,_e[0].width,_e[0].height));for(let Te=0;Te<6;Te++)if(lt){at?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,_e[Te].width,_e[Te].height,We,Be,_e[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ue,_e[Te].width,_e[Te].height,0,We,Be,_e[Te].data);for(let O=0;O<ct.length;O++){const we=ct[O].image[Te].image;at?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,we.width,we.height,We,Be,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ue,we.width,we.height,0,We,Be,we.data)}}else{at?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,We,Be,_e[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ue,We,Be,_e[Te]);for(let O=0;O<ct.length;O++){const be=ct[O];at?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,We,Be,be.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ue,We,Be,be.image[Te])}}}D(A,st)&&P(i.TEXTURE_CUBE_MAP),ve.__version=me.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ge(L,A,Z,pe,me,ve){const ae=o.convert(Z.format,Z.colorSpace),ye=o.convert(Z.type),Ie=U(Z.internalFormat,ae,ye,Z.colorSpace);if(!n.get(A).__hasExternalTextures){const lt=Math.max(1,A.width>>ve),_e=Math.max(1,A.height>>ve);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,ve,Ie,lt,_e,A.depth,0,ae,ye,null):t.texImage2D(me,ve,Ie,lt,_e,0,ae,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),Fe(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,me,n.get(Z).__webglTexture,0,tt(A)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,me,n.get(Z).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(L,A,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let pe=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Z||Fe(A)){const me=A.depthTexture;me&&me.isDepthTexture&&(me.type===ui?pe=i.DEPTH_COMPONENT32F:me.type===ci&&(pe=i.DEPTH_COMPONENT24));const ve=tt(A);Fe(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,pe,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,pe,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,pe,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const pe=tt(A);Z&&Fe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,A.width,A.height):Fe(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,L)}else{const pe=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let me=0;me<pe.length;me++){const ve=pe[me],ae=o.convert(ve.format,ve.colorSpace),ye=o.convert(ve.type),Ie=U(ve.internalFormat,ae,ye,ve.colorSpace),Ye=tt(A);Z&&Fe(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,Ie,A.width,A.height):Fe(A)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,Ie,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Ie,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const pe=n.get(A.depthTexture).__webglTexture,me=tt(A);if(A.depthTexture.format===Li)Fe(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(A.depthTexture.format===ur)Fe(A)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function He(L){const A=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");rt(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[pe]),A.__webglDepthbuffer[pe]=i.createRenderbuffer(),it(A.__webglDepthbuffer[pe],L,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),it(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(L,A,Z){const pe=n.get(L);A!==void 0&&Ge(pe.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&He(L)}function q(L){const A=L.texture,Z=n.get(L),pe=n.get(A);L.addEventListener("dispose",de),L.isWebGLMultipleRenderTargets!==!0&&(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=A.version,f.memory.textures++);const me=L.isWebGLCubeRenderTarget===!0,ve=L.isWebGLMultipleRenderTargets===!0,ae=v(L)||c;if(me){Z.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(c&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[ye]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)Z.__webglFramebuffer[ye][Ie]=i.createFramebuffer()}else Z.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ye=0;ye<A.mipmaps.length;ye++)Z.__webglFramebuffer[ye]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(ve)if(s.drawBuffers){const ye=L.texture;for(let Ie=0,Ye=ye.length;Ie<Ye;Ie++){const lt=n.get(ye[Ie]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Fe(L)===!1){const ye=ve?A:[A];Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ie=0;Ie<ye.length;Ie++){const Ye=ye[Ie];Z.__webglColorRenderbuffer[Ie]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie]);const lt=o.convert(Ye.format,Ye.colorSpace),_e=o.convert(Ye.type),Mt=U(Ye.internalFormat,lt,_e,Ye.colorSpace,L.isXRRenderTarget===!0),st=tt(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Mt,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),it(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(me){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),te(i.TEXTURE_CUBE_MAP,A,ae);for(let ye=0;ye<6;ye++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ge(Z.__webglFramebuffer[ye][Ie],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie);else Ge(Z.__webglFramebuffer[ye],L,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);D(A,ae)&&P(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){const ye=L.texture;for(let Ie=0,Ye=ye.length;Ie<Ye;Ie++){const lt=ye[Ie],_e=n.get(lt);t.bindTexture(i.TEXTURE_2D,_e.__webglTexture),te(i.TEXTURE_2D,lt,ae),Ge(Z.__webglFramebuffer,L,lt,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,0),D(lt,ae)&&P(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?ye=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,pe.__webglTexture),te(ye,A,ae),c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)Ge(Z.__webglFramebuffer[Ie],L,A,i.COLOR_ATTACHMENT0,ye,Ie);else Ge(Z.__webglFramebuffer,L,A,i.COLOR_ATTACHMENT0,ye,0);D(A,ae)&&P(ye),t.unbindTexture()}L.depthBuffer&&He(L)}function Ht(L){const A=v(L)||c,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let pe=0,me=Z.length;pe<me;pe++){const ve=Z[pe];if(D(ve,A)){const ae=L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ye=n.get(ve).__webglTexture;t.bindTexture(ae,ye),P(ae),t.unbindTexture()}}}function Xe(L){if(c&&L.samples>0&&Fe(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,pe=L.height;let me=i.COLOR_BUFFER_BIT;const ve=[],ae=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=n.get(L),Ie=L.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){ve.push(i.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&ve.push(ae);const lt=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(lt===!1&&(L.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),Ie&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ye]),lt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ae])),Ie){const _e=n.get(A[Ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,me,i.NEAREST),m&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.RENDERBUFFER,ye.__webglColorRenderbuffer[Ye]);const lt=n.get(A[Ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ye.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ye,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(s.maxSamples,L.samples)}function Fe(L){const A=n.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function je(L,A){const Z=L.colorSpace,pe=L.format,me=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Da||Z!==ei&&Z!==Mn&&(Ct.getTransfer(Z)===It?c===!1?e.has("EXT_sRGB")===!0&&pe===Dn?(L.format=Da,L.minFilter=yn,L.generateMipmaps=!1):A=Yl.sRGBToLinear(A):(pe!==Dn||me!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=G,this.resetTextureUnits=ue,this.setTexture2D=re,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=vt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=Fe}function Km(i,e,t){const n=t.isWebGL2;function s(o,f=Mn){let c;const h=Ct.getTransfer(f);if(o===pi)return i.UNSIGNED_BYTE;if(o===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(o===zl)return i.UNSIGNED_SHORT_5_5_5_1;if(o===Ru)return i.BYTE;if(o===Lu)return i.SHORT;if(o===Ba)return i.UNSIGNED_SHORT;if(o===Bl)return i.INT;if(o===ci)return i.UNSIGNED_INT;if(o===ui)return i.FLOAT;if(o===Lr)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(o===Pu)return i.ALPHA;if(o===Dn)return i.RGBA;if(o===Du)return i.LUMINANCE;if(o===Uu)return i.LUMINANCE_ALPHA;if(o===Li)return i.DEPTH_COMPONENT;if(o===ur)return i.DEPTH_STENCIL;if(o===Da)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(o===Iu)return i.RED;if(o===Gl)return i.RED_INTEGER;if(o===Nu)return i.RG;if(o===kl)return i.RG_INTEGER;if(o===Vl)return i.RGBA_INTEGER;if(o===Ys||o===$s||o===Ks||o===Zs)if(h===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(o===Ys)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===$s)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ks)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zs)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(o===Ys)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===$s)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ks)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zs)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===co||o===uo||o===fo||o===ho)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(o===co)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===uo)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===fo)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===ho)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Wl)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===po||o===mo)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(o===po)return h===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(o===mo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===go||o===_o||o===vo||o===xo||o===yo||o===So||o===Mo||o===Eo||o===To||o===bo||o===Ao||o===wo||o===Co||o===Ro)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(o===go)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===_o)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===vo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===xo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===yo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===So)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Mo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Eo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===To)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===bo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===Ao)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===wo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Co)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Ro)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Js||o===Lo||o===Po)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(o===Js)return h===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Lo)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Po)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===Fu||o===Do||o===Uo||o===Io)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(o===Js)return c.COMPRESSED_RED_RGTC1_EXT;if(o===Do)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Uo)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Io)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Ri?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[o]!==void 0?i[o]:null}return{convert:s}}class Zm extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ds extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jm={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,f=null;const c=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const v=t.getJointPose(T,n),p=this._getHandJoint(m,T);v!==null&&(p.matrix.fromArray(v.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=v.radius),p.visible=v!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,b=.005;m.inputState.pinching&&S>M+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(Jm)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ds;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Qm extends dr{constructor(e,t){super();const n=this;let s=null,o=1,f=null,c="local-floor",h=1,m=null,g=null,y=null,S=null,M=null,b=null;const T=t.getContextAttributes();let v=null,p=null;const D=[],P=[],U=new Rt;let k=null;const H=new Sn;H.layers.enable(1),H.viewport=new tn;const l=new Sn;l.layers.enable(2),l.viewport=new tn;const de=[H,l],w=new Zm;w.layers.enable(1),w.layers.enable(2);let N=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=D[te];return ge===void 0&&(ge=new Ea,D[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=D[te];return ge===void 0&&(ge=new Ea,D[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=D[te];return ge===void 0&&(ge=new Ea,D[te]=ge),ge.getHandSpace()};function fe(te){const ge=P.indexOf(te.inputSource);if(ge===-1)return;const Le=D[ge];Le!==void 0&&(Le.update(te.inputSource,te.frame,m||f),Le.dispatchEvent({type:te.type,data:te.inputSource}))}function ue(){s.removeEventListener("select",fe),s.removeEventListener("selectstart",fe),s.removeEventListener("selectend",fe),s.removeEventListener("squeeze",fe),s.removeEventListener("squeezestart",fe),s.removeEventListener("squeezeend",fe),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",G);for(let te=0;te<D.length;te++){const ge=P[te];ge!==null&&(P[te]=null,D[te].disconnect(ge))}N=null,se=null,e.setRenderTarget(v),M=null,S=null,y=null,s=null,p=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",fe),s.addEventListener("selectstart",fe),s.addEventListener("selectend",fe),s.addEventListener("squeeze",fe),s.addEventListener("squeezestart",fe),s.addEventListener("squeezeend",fe),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",G),T.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ge={antialias:s.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};M=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),p=new Di(M.framebufferWidth,M.framebufferHeight,{format:Dn,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let ge=null,Le=null,ke=null;T.depth&&(ke=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=T.stencil?ur:Li,Le=T.stencil?Ri:ci);const Ge={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:o};y=new XRWebGLBinding(s,t),S=y.createProjectionLayer(Ge),s.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),p=new Di(S.textureWidth,S.textureHeight,{format:Dn,type:pi,depthTexture:new oc(S.textureWidth,S.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const it=e.properties.get(p);it.__ignoreDepthValues=S.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(h),m=null,f=await s.requestReferenceSpace(c),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function G(te){for(let ge=0;ge<te.removed.length;ge++){const Le=te.removed[ge],ke=P.indexOf(Le);ke>=0&&(P[ke]=null,D[ke].disconnect(Le))}for(let ge=0;ge<te.added.length;ge++){const Le=te.added[ge];let ke=P.indexOf(Le);if(ke===-1){for(let it=0;it<D.length;it++)if(it>=P.length){P.push(Le),ke=it;break}else if(P[it]===null){P[it]=Le,ke=it;break}if(ke===-1)break}const Ge=D[ke];Ge&&Ge.connect(Le)}}const ee=new j,re=new j;function oe(te,ge,Le){ee.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(Le.matrixWorld);const ke=ee.distanceTo(re),Ge=ge.projectionMatrix.elements,it=Le.projectionMatrix.elements,rt=Ge[14]/(Ge[10]-1),He=Ge[14]/(Ge[10]+1),vt=(Ge[9]+1)/Ge[5],q=(Ge[9]-1)/Ge[5],Ht=(Ge[8]-1)/Ge[0],Xe=(it[8]+1)/it[0],tt=rt*Ht,Fe=rt*Xe,wt=ke/(-Ht+Xe),je=wt*-Ht;ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(je),te.translateZ(wt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const L=rt+wt,A=He+wt,Z=tt-je,pe=Fe+(ke-je),me=vt*He/A*L,ve=q*He/A*L;te.projectionMatrix.makePerspective(Z,pe,me,ve,L,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function le(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;w.near=l.near=H.near=te.near,w.far=l.far=H.far=te.far,(N!==w.near||se!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,se=w.far);const ge=te.parent,Le=w.cameras;le(w,ge);for(let ke=0;ke<Le.length;ke++)le(Le[ke],ge);Le.length===2?oe(w,H,l):w.projectionMatrix.copy(H.projectionMatrix),ce(te,w,ge)};function ce(te,ge,Le){Le===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(Le.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ua*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(te){h=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)};let he=null;function Se(te,ge){if(g=ge.getViewerPose(m||f),b=ge,g!==null){const Le=g.views;M!==null&&(e.setRenderTargetFramebuffer(p,M.framebuffer),e.setRenderTarget(p));let ke=!1;Le.length!==w.cameras.length&&(w.cameras.length=0,ke=!0);for(let Ge=0;Ge<Le.length;Ge++){const it=Le[Ge];let rt=null;if(M!==null)rt=M.getViewport(it);else{const vt=y.getViewSubImage(S,it);rt=vt.viewport,Ge===0&&(e.setRenderTargetTextures(p,vt.colorTexture,S.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(p))}let He=de[Ge];He===void 0&&(He=new Sn,He.layers.enable(Ge),He.viewport=new tn,de[Ge]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(rt.x,rt.y,rt.width,rt.height),Ge===0&&(w.matrix.copy(He.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ke===!0&&w.cameras.push(He)}}for(let Le=0;Le<D.length;Le++){const ke=P[Le],Ge=D[Le];ke!==null&&Ge!==void 0&&Ge.update(ke,ge,m||f)}he&&he(te,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),b=null}const Ee=new ac;Ee.setAnimationLoop(Se),this.setAnimationLoop=function(te){he=te},this.dispose=function(){}}}function eg(i,e){function t(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,nc(i)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function s(v,p,D,P,U){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(v,p):p.isMeshToonMaterial?(o(v,p),y(v,p)):p.isMeshPhongMaterial?(o(v,p),g(v,p)):p.isMeshStandardMaterial?(o(v,p),S(v,p),p.isMeshPhysicalMaterial&&M(v,p,U)):p.isMeshMatcapMaterial?(o(v,p),b(v,p)):p.isMeshDepthMaterial?o(v,p):p.isMeshDistanceMaterial?(o(v,p),T(v,p)):p.isMeshNormalMaterial?o(v,p):p.isLineBasicMaterial?(f(v,p),p.isLineDashedMaterial&&c(v,p)):p.isPointsMaterial?h(v,p,D,P):p.isSpriteMaterial?m(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,t(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===hn&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,t(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===hn&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,t(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,t(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);const D=e.get(p).envMap;if(D&&(v.envMap.value=D,v.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap){v.lightMap.value=p.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;v.lightMapIntensity.value=p.lightMapIntensity*P,t(p.lightMap,v.lightMapTransform)}p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,v.aoMapTransform))}function f(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform))}function c(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function h(v,p,D,P){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*D,v.scale.value=P*.5,p.map&&(v.map.value=p.map,t(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function m(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,t(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,t(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function g(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function y(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function S(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,v.roughnessMapTransform)),e.get(p).envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function M(v,p,D){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&v.clearcoatNormalScale.value.negate())),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,v.specularIntensityMapTransform))}function b(v,p){p.matcap&&(v.matcap.value=p.matcap)}function T(v,p){const D=e.get(p).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tg(i,e,t,n){let s={},o={},f=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,P){const U=P.program;n.uniformBlockBinding(D,U)}function m(D,P){let U=s[D.id];U===void 0&&(b(D),U=g(D),s[D.id]=U,D.addEventListener("dispose",v));const k=P.program;n.updateUBOMapping(D,k);const H=e.render.frame;o[D.id]!==H&&(S(D),o[D.id]=H)}function g(D){const P=y();D.__bindingPointIndex=P;const U=i.createBuffer(),k=D.__size,H=D.usage;return i.bindBuffer(i.UNIFORM_BUFFER,U),i.bufferData(i.UNIFORM_BUFFER,k,H),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,P,U),U}function y(){for(let D=0;D<c;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const P=s[D.id],U=D.uniforms,k=D.__cache;i.bindBuffer(i.UNIFORM_BUFFER,P);for(let H=0,l=U.length;H<l;H++){const de=Array.isArray(U[H])?U[H]:[U[H]];for(let w=0,N=de.length;w<N;w++){const se=de[w];if(M(se,H,w,k)===!0){const fe=se.__offset,ue=Array.isArray(se.value)?se.value:[se.value];let G=0;for(let ee=0;ee<ue.length;ee++){const re=ue[ee],oe=T(re);typeof re=="number"||typeof re=="boolean"?(se.__data[0]=re,i.bufferSubData(i.UNIFORM_BUFFER,fe+G,se.__data)):re.isMatrix3?(se.__data[0]=re.elements[0],se.__data[1]=re.elements[1],se.__data[2]=re.elements[2],se.__data[3]=0,se.__data[4]=re.elements[3],se.__data[5]=re.elements[4],se.__data[6]=re.elements[5],se.__data[7]=0,se.__data[8]=re.elements[6],se.__data[9]=re.elements[7],se.__data[10]=re.elements[8],se.__data[11]=0):(re.toArray(se.__data,G),G+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,fe,se.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(D,P,U,k){const H=D.value,l=P+"_"+U;if(k[l]===void 0)return typeof H=="number"||typeof H=="boolean"?k[l]=H:k[l]=H.clone(),!0;{const de=k[l];if(typeof H=="number"||typeof H=="boolean"){if(de!==H)return k[l]=H,!0}else if(de.equals(H)===!1)return de.copy(H),!0}return!1}function b(D){const P=D.uniforms;let U=0;const k=16;for(let l=0,de=P.length;l<de;l++){const w=Array.isArray(P[l])?P[l]:[P[l]];for(let N=0,se=w.length;N<se;N++){const fe=w[N],ue=Array.isArray(fe.value)?fe.value:[fe.value];for(let G=0,ee=ue.length;G<ee;G++){const re=ue[G],oe=T(re),le=U%k;le!==0&&k-le<oe.boundary&&(U+=k-le),fe.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=U,U+=oe.storage}}}const H=U%k;return H>0&&(U+=k-H),D.__size=U,D.__cache={},this}function T(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function v(D){const P=D.target;P.removeEventListener("dispose",v);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),i.deleteBuffer(s[P.id]),delete s[P.id],delete o[P.id]}function p(){for(const D in s)i.deleteBuffer(s[D]);f=[],s={},o={}}return{bind:h,update:m,dispose:p}}class hc{constructor(e={}){const{canvas:t=$u(),context:n=null,depth:s=!0,stencil:o=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1}=e;this.isWebGLRenderer=!0;let S;n!==null?S=n.getContextAttributes().alpha:S=f;const M=new Uint32Array(4),b=new Int32Array(4);let T=null,v=null;const p=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=hi,this.toneMappingExposure=1;const P=this;let U=!1,k=0,H=0,l=null,de=-1,w=null;const N=new tn,se=new tn;let fe=null;const ue=new Tt(0);let G=0,ee=t.width,re=t.height,oe=1,le=null,ce=null;const he=new tn(0,0,ee,re),Se=new tn(0,0,ee,re);let Ee=!1;const te=new sc;let ge=!1,Le=!1,ke=null;const Ge=new Wt,it=new Rt,rt=new j,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return l===null?oe:1}let q=n;function Ht(C,V){for(let $=0;$<C.length;$++){const J=C[$],Y=t.getContext(J,V);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oa}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",be,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&V.shift(),q=Ht(V,C),q===null)throw Ht(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,tt,Fe,wt,je,L,A,Z,pe,me,ve,ae,ye,Ie,Ye,lt,_e,Mt,st,We,Be,Ue,at,xt;function Dt(){Xe=new fp(q),tt=new rp(q,Xe,e),Xe.init(tt),Ue=new Km(q,Xe,tt),Fe=new Ym(q,Xe,tt),wt=new pp(q),je=new Im,L=new $m(q,Xe,Fe,je,tt,Ue,wt),A=new ap(P),Z=new up(P),pe=new Sf(q,tt),at=new np(q,Xe,pe,tt),me=new dp(q,pe,wt,at),ve=new vp(q,me,pe,wt),st=new _p(q,tt,L),lt=new sp(je),ae=new Um(P,A,Z,Xe,tt,at,lt),ye=new eg(P,je),Ie=new Fm,Ye=new km(Xe,tt),Mt=new tp(P,A,Z,Fe,ve,S,h),_e=new jm(P,ve,tt),xt=new tg(q,wt,tt,Fe),We=new ip(q,Xe,wt,tt),Be=new hp(q,Xe,wt,tt),wt.programs=ae.programs,P.capabilities=tt,P.extensions=Xe,P.properties=je,P.renderLists=Ie,P.shadowMap=_e,P.state=Fe,P.info=wt}Dt();const ct=new Qm(P,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(ee,re,!1))},this.getSize=function(C){return C.set(ee,re)},this.setSize=function(C,V,$=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,re=V,t.width=Math.floor(C*oe),t.height=Math.floor(V*oe),$===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(ee*oe,re*oe).floor()},this.setDrawingBufferSize=function(C,V,$){ee=C,re=V,oe=$,t.width=Math.floor(C*$),t.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,V,$,J){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,V,$,J),Fe.viewport(N.copy(he).multiplyScalar(oe).floor())},this.getScissor=function(C){return C.copy(Se)},this.setScissor=function(C,V,$,J){C.isVector4?Se.set(C.x,C.y,C.z,C.w):Se.set(C,V,$,J),Fe.scissor(se.copy(Se).multiplyScalar(oe).floor())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(C){Fe.setScissorTest(Ee=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(C=!0,V=!0,$=!0){let J=0;if(C){let Y=!1;if(l!==null){const Pe=l.texture.format;Y=Pe===Vl||Pe===kl||Pe===Gl}if(Y){const Pe=l.texture.type,ze=Pe===pi||Pe===ci||Pe===Ba||Pe===Ri||Pe===Hl||Pe===zl,Ve=Mt.getClearColor(),Ke=Mt.getClearAlpha(),ot=Ve.r,Qe=Ve.g,nt=Ve.b;ze?(M[0]=ot,M[1]=Qe,M[2]=nt,M[3]=Ke,q.clearBufferuiv(q.COLOR,0,M)):(b[0]=ot,b[1]=Qe,b[2]=nt,b[3]=Ke,q.clearBufferiv(q.COLOR,0,b))}else J|=q.COLOR_BUFFER_BIT}V&&(J|=q.DEPTH_BUFFER_BIT),$&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Ie.dispose(),Ye.dispose(),je.dispose(),A.dispose(),Z.dispose(),ve.dispose(),at.dispose(),xt.dispose(),ae.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",jt),ct.removeEventListener("sessionend",bt),ke&&(ke.dispose(),ke=null),Ft.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const C=wt.autoReset,V=_e.enabled,$=_e.autoUpdate,J=_e.needsUpdate,Y=_e.type;Dt(),wt.autoReset=C,_e.enabled=V,_e.autoUpdate=$,_e.needsUpdate=J,_e.type=Y}function be(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function we(C){const V=C.target;V.removeEventListener("dispose",we),$e(V)}function $e(C){Ne(C),je.remove(C)}function Ne(C){const V=je.get(C).programs;V!==void 0&&(V.forEach(function($){ae.releaseProgram($)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,J,Y,Pe){V===null&&(V=He);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=Ls(C,V,$,J,Y);Fe.setMaterial(J,ze);let Ke=$.index,ot=1;if(J.wireframe===!0){if(Ke=me.getWireframeAttribute($),Ke===void 0)return;ot=2}const Qe=$.drawRange,nt=$.attributes.position;let Nt=Qe.start*ot,Zt=(Qe.start+Qe.count)*ot;Pe!==null&&(Nt=Math.max(Nt,Pe.start*ot),Zt=Math.min(Zt,(Pe.start+Pe.count)*ot)),Ke!==null?(Nt=Math.max(Nt,0),Zt=Math.min(Zt,Ke.count)):nt!=null&&(Nt=Math.max(Nt,0),Zt=Math.min(Zt,nt.count));const Gt=Zt-Nt;if(Gt<0||Gt===1/0)return;at.setup(Y,J,Ve,$,Ke);let En,Lt=We;if(Ke!==null&&(En=pe.get(Ke),Lt=Be,Lt.setIndex(En)),Y.isMesh)J.wireframe===!0?(Fe.setLineWidth(J.wireframeLinewidth*vt()),Lt.setMode(q.LINES)):Lt.setMode(q.TRIANGLES);else if(Y.isLine){let ft=J.linewidth;ft===void 0&&(ft=1),Fe.setLineWidth(ft*vt()),Y.isLineSegments?Lt.setMode(q.LINES):Y.isLineLoop?Lt.setMode(q.LINE_LOOP):Lt.setMode(q.LINE_STRIP)}else Y.isPoints?Lt.setMode(q.POINTS):Y.isSprite&&Lt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Lt.renderInstances(Nt,Gt,Y.count);else if($.isInstancedBufferGeometry){const ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,gi=Math.min($.instanceCount,ft);Lt.renderInstances(Nt,Gt,gi)}else Lt.render(Nt,Gt)};function ut(C,V,$){C.transparent===!0&&C.side===Jn&&C.forceSinglePass===!1?(C.side=hn,C.needsUpdate=!0,Oi(C,V,$),C.side=mi,C.needsUpdate=!0,Oi(C,V,$),C.side=Jn):Oi(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),v=Ye.get($),v.init(),D.push(v),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),C!==$&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(P._useLegacyLights);const J=new Set;return C.traverse(function(Y){const Pe=Y.material;if(Pe)if(Array.isArray(Pe))for(let ze=0;ze<Pe.length;ze++){const Ve=Pe[ze];ut(Ve,$,Y),J.add(Ve)}else ut(Pe,$,Y),J.add(Pe)}),D.pop(),v=null,J},this.compileAsync=function(C,V,$=null){const J=this.compile(C,V,$);return new Promise(Y=>{function Pe(){if(J.forEach(function(ze){je.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){Y(C);return}setTimeout(Pe,10)}Xe.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Et=null;function zt(C){Et&&Et(C)}function jt(){Ft.stop()}function bt(){Ft.start()}const Ft=new ac;Ft.setAnimationLoop(zt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){Et=C,ct.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},ct.addEventListener("sessionstart",jt),ct.addEventListener("sessionend",bt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,l),v=Ye.get(C,D.length),v.init(),D.push(v),Ge.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(Ge),Le=this.localClippingEnabled,ge=lt.init(this.clippingPlanes,Le),T=Ie.get(C,p.length),T.init(),p.push(T),Kt(C,V,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(le,ce),this.info.render.frame++,ge===!0&&lt.beginShadows();const $=v.state.shadowsArray;if(_e.render($,C,V),ge===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(T,C),v.setupLights(P._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let Y=0,Pe=J.length;Y<Pe;Y++){const ze=J[Y];Ii(T,C,ze,ze.viewport)}}else Ii(T,C,V);l!==null&&(L.updateMultisampleRenderTarget(l),L.updateRenderTargetMipmap(l)),C.isScene===!0&&C.onAfterRender(P,C,V),at.resetDefaultState(),de=-1,w=null,D.pop(),D.length>0?v=D[D.length-1]:v=null,p.pop(),p.length>0?T=p[p.length-1]:T=null};function Kt(C,V,$,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){J&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ge);const ze=ve.update(C),Ve=C.material;Ve.visible&&T.push(C,ze,Ve,$,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const ze=ve.update(C),Ve=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),rt.copy(ze.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(Ge)),Array.isArray(Ve)){const Ke=ze.groups;for(let ot=0,Qe=Ke.length;ot<Qe;ot++){const nt=Ke[ot],Nt=Ve[nt.materialIndex];Nt&&Nt.visible&&T.push(C,ze,Nt,$,rt.z,nt)}}else Ve.visible&&T.push(C,ze,Ve,$,rt.z,null)}}const Pe=C.children;for(let ze=0,Ve=Pe.length;ze<Ve;ze++)Kt(Pe[ze],V,$,J)}function Ii(C,V,$,J){const Y=C.opaque,Pe=C.transmissive,ze=C.transparent;v.setupLightsView($),ge===!0&&lt.setGlobalState(P.clippingPlanes,$),Pe.length>0&&Ni(Y,Pe,V,$),J&&Fe.viewport(N.copy(J)),Y.length>0&&Fi(Y,V,$),Pe.length>0&&Fi(Pe,V,$),ze.length>0&&Fi(ze,V,$),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Ni(C,V,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const Pe=tt.isWebGL2;ke===null&&(ke=new Di(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Lr:pi,minFilter:Rr,samples:Pe?4:0})),P.getDrawingBufferSize(it),Pe?ke.setSize(it.x,it.y):ke.setSize(Ia(it.x),Ia(it.y));const ze=P.getRenderTarget();P.setRenderTarget(ke),P.getClearColor(ue),G=P.getClearAlpha(),G<1&&P.setClearColor(16777215,.5),P.clear();const Ve=P.toneMapping;P.toneMapping=hi,Fi(C,$,J),L.updateMultisampleRenderTarget(ke),L.updateRenderTargetMipmap(ke);let Ke=!1;for(let ot=0,Qe=V.length;ot<Qe;ot++){const nt=V[ot],Nt=nt.object,Zt=nt.geometry,Gt=nt.material,En=nt.group;if(Gt.side===Jn&&Nt.layers.test(J.layers)){const Lt=Gt.side;Gt.side=hn,Gt.needsUpdate=!0,Fr(Nt,$,J,Zt,Gt,En),Gt.side=Lt,Gt.needsUpdate=!0,Ke=!0}}Ke===!0&&(L.updateMultisampleRenderTarget(ke),L.updateRenderTargetMipmap(ke)),P.setRenderTarget(ze),P.setClearColor(ue,G),P.toneMapping=Ve}function Fi(C,V,$){const J=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Pe=C.length;Y<Pe;Y++){const ze=C[Y],Ve=ze.object,Ke=ze.geometry,ot=J===null?ze.material:J,Qe=ze.group;Ve.layers.test($.layers)&&Fr(Ve,V,$,Ke,ot,Qe)}}function Fr(C,V,$,J,Y,Pe){C.onBeforeRender(P,V,$,J,Y,Pe),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(P,V,$,J,C,Pe),Y.transparent===!0&&Y.side===Jn&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,P.renderBufferDirect($,V,J,Y,C,Pe),Y.side=mi,Y.needsUpdate=!0,P.renderBufferDirect($,V,J,Y,C,Pe),Y.side=Jn):P.renderBufferDirect($,V,J,Y,C,Pe),C.onAfterRender(P,V,$,J,Y,Pe)}function Oi(C,V,$){V.isScene!==!0&&(V=He);const J=je.get(C),Y=v.state.lights,Pe=v.state.shadowsArray,ze=Y.state.version,Ve=ae.getParameters(C,Y.state,Pe,V,$),Ke=ae.getProgramCacheKey(Ve);let ot=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?Z:A).get(C.envMap||J.environment),ot===void 0&&(C.addEventListener("dispose",we),ot=new Map,J.programs=ot);let Qe=ot.get(Ke);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===ze)return Or(C,Ve),Qe}else Ve.uniforms=ae.getUniforms(C),C.onBuild($,Ve,P),C.onBeforeCompile(Ve,P),Qe=ae.acquireProgram(Ve,Ke),ot.set(Ke,Qe),J.uniforms=Ve.uniforms;const nt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=lt.uniform),Or(C,Ve),J.needsLights=Ps(C),J.lightsStateVersion=ze,J.needsLights&&(nt.ambientLightColor.value=Y.state.ambient,nt.lightProbe.value=Y.state.probe,nt.directionalLights.value=Y.state.directional,nt.directionalLightShadows.value=Y.state.directionalShadow,nt.spotLights.value=Y.state.spot,nt.spotLightShadows.value=Y.state.spotShadow,nt.rectAreaLights.value=Y.state.rectArea,nt.ltc_1.value=Y.state.rectAreaLTC1,nt.ltc_2.value=Y.state.rectAreaLTC2,nt.pointLights.value=Y.state.point,nt.pointLightShadows.value=Y.state.pointShadow,nt.hemisphereLights.value=Y.state.hemi,nt.directionalShadowMap.value=Y.state.directionalShadowMap,nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,nt.spotShadowMap.value=Y.state.spotShadowMap,nt.spotLightMatrix.value=Y.state.spotLightMatrix,nt.spotLightMap.value=Y.state.spotLightMap,nt.pointShadowMap.value=Y.state.pointShadowMap,nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function mr(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=_s.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Or(C,V){const $=je.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ls(C,V,$,J,Y){V.isScene!==!0&&(V=He),L.resetTextureUnits();const Pe=V.fog,ze=J.isMeshStandardMaterial?V.environment:null,Ve=l===null?P.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:ei,Ke=(J.isMeshStandardMaterial?Z:A).get(J.envMap||ze),ot=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qe=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!$.morphAttributes.position,Nt=!!$.morphAttributes.normal,Zt=!!$.morphAttributes.color;let Gt=hi;J.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(Gt=P.toneMapping);const En=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=En!==void 0?En.length:0,ft=je.get(J),gi=v.state.lights;if(ge===!0&&(Le===!0||C!==w)){const Jt=C===w&&J.id===de;lt.setState(J,C,Jt)}let Ut=!1;J.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==gi.state.version||ft.outputColorSpace!==Ve||Y.isBatchedMesh&&ft.batching===!1||!Y.isBatchedMesh&&ft.batching===!0||Y.isInstancedMesh&&ft.instancing===!1||!Y.isInstancedMesh&&ft.instancing===!0||Y.isSkinnedMesh&&ft.skinning===!1||!Y.isSkinnedMesh&&ft.skinning===!0||Y.isInstancedMesh&&ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ft.instancingColor===!1&&Y.instanceColor!==null||ft.envMap!==Ke||J.fog===!0&&ft.fog!==Pe||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==lt.numPlanes||ft.numIntersection!==lt.numIntersection)||ft.vertexAlphas!==ot||ft.vertexTangents!==Qe||ft.morphTargets!==nt||ft.morphNormals!==Nt||ft.morphColors!==Zt||ft.toneMapping!==Gt||tt.isWebGL2===!0&&ft.morphTargetsCount!==Lt)&&(Ut=!0):(Ut=!0,ft.__version=J.version);let Ot=ft.currentProgram;Ut===!0&&(Ot=Oi(J,V,Y));let Vn=!1,Nn=!1,gr=!1;const Yt=Ot.getUniforms(),Tn=ft.uniforms;if(Fe.useProgram(Ot.program)&&(Vn=!0,Nn=!0,gr=!0),J.id!==de&&(de=J.id,Nn=!0),Vn||w!==C){Yt.setValue(q,"projectionMatrix",C.projectionMatrix),Yt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Jt=Yt.map.cameraPosition;Jt!==void 0&&Jt.setValue(q,rt.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Yt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Yt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Nn=!0,gr=!0)}if(Y.isSkinnedMesh){Yt.setOptional(q,Y,"bindMatrix"),Yt.setOptional(q,Y,"bindMatrixInverse");const Jt=Y.skeleton;Jt&&(tt.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Yt.setValue(q,"boneTexture",Jt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Yt.setOptional(q,Y,"batchingTexture"),Yt.setValue(q,"batchingTexture",Y._matricesTexture,L));const Bi=$.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0&&tt.isWebGL2===!0)&&st.update(Y,$,Ot),(Nn||ft.receiveShadow!==Y.receiveShadow)&&(ft.receiveShadow=Y.receiveShadow,Yt.setValue(q,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Tn.envMap.value=Ke,Tn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Nn&&(Yt.setValue(q,"toneMappingExposure",P.toneMappingExposure),ft.needsLights&&Br(Tn,gr),Pe&&J.fog===!0&&ye.refreshFogUniforms(Tn,Pe),ye.refreshMaterialUniforms(Tn,J,oe,re,ke),_s.upload(q,mr(ft),Tn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(_s.upload(q,mr(ft),Tn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Yt.setValue(q,"center",Y.center),Yt.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(q,"normalMatrix",Y.normalMatrix),Yt.setValue(q,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Jt=J.uniformsGroups;for(let Hi=0,Ds=Jt.length;Hi<Ds;Hi++)if(tt.isWebGL2){const Hr=Jt[Hi];xt.update(Hr,Ot),xt.bind(Hr,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}function Br(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Ps(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(C,V,$){je.get(C.texture).__webglTexture=V,je.get(C.depthTexture).__webglTexture=$;const J=je.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const $=je.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){l=C,k=V,H=$;let J=!0,Y=null,Pe=!1,ze=!1;if(C){const Ke=je.get(C);Ke.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(q.FRAMEBUFFER,null),J=!1):Ke.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ke.__hasExternalTextures&&L.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(ze=!0);const Qe=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?Y=Qe[V][$]:Y=Qe[V],Pe=!0):tt.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?Y=je.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[$]:Y=Qe,N.copy(C.viewport),se.copy(C.scissor),fe=C.scissorTest}else N.copy(he).multiplyScalar(oe).floor(),se.copy(Se).multiplyScalar(oe).floor(),fe=Ee;if(Fe.bindFramebuffer(q.FRAMEBUFFER,Y)&&tt.drawBuffers&&J&&Fe.drawBuffers(C,Y),Fe.viewport(N),Fe.scissor(se),Fe.setScissorTest(fe),Pe){const Ke=je.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ke.__webglTexture,$)}else if(ze){const Ke=je.get(C.texture),ot=V||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ke.__webglTexture,$||0,ot)}de=-1},this.readRenderTargetPixels=function(C,V,$,J,Y,Pe,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Fe.bindFramebuffer(q.FRAMEBUFFER,Ve);try{const Ke=C.texture,ot=Ke.format,Qe=Ke.type;if(ot!==Dn&&Ue.convert(ot)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Qe===Lr&&(Xe.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(Qe!==pi&&Ue.convert(Qe)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===ui&&(tt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&$>=0&&$<=C.height-Y&&q.readPixels(V,$,J,Y,Ue.convert(ot),Ue.convert(Qe),Pe)}finally{const Ke=l!==null?je.get(l).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(C,V,$=0){const J=Math.pow(2,-$),Y=Math.floor(V.image.width*J),Pe=Math.floor(V.image.height*J);L.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,C.x,C.y,Y,Pe),Fe.unbindTexture()},this.copyTextureToTexture=function(C,V,$,J=0){const Y=V.image.width,Pe=V.image.height,ze=Ue.convert($.format),Ve=Ue.convert($.type);L.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,C.x,C.y,Y,Pe,ze,Ve,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,ze,V.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,J,C.x,C.y,ze,Ve,V.image),J===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$,J,Y=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=C.max.x-C.min.x+1,ze=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,Ke=Ue.convert(J.format),ot=Ue.convert(J.type);let Qe;if(J.isData3DTexture)L.setTexture3D(J,0),Qe=q.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)L.setTexture2DArray(J,0),Qe=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);const nt=q.getParameter(q.UNPACK_ROW_LENGTH),Nt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Zt=q.getParameter(q.UNPACK_SKIP_PIXELS),Gt=q.getParameter(q.UNPACK_SKIP_ROWS),En=q.getParameter(q.UNPACK_SKIP_IMAGES),Lt=$.isCompressedTexture?$.mipmaps[Y]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Lt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Qe,Y,V.x,V.y,V.z,Pe,ze,Ve,Ke,ot,Lt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Qe,Y,V.x,V.y,V.z,Pe,ze,Ve,Ke,Lt.data)):q.texSubImage3D(Qe,Y,V.x,V.y,V.z,Pe,ze,Ve,Ke,ot,Lt),q.pixelStorei(q.UNPACK_ROW_LENGTH,nt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Nt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),q.pixelStorei(q.UNPACK_SKIP_ROWS,Gt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,En),Y===0&&J.generateMipmaps&&q.generateMipmap(Qe),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){k=0,H=0,l=null,Fe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ha?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Pi:Xl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pi?en:ei}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ng extends hc{}ng.prototype.isWebGL1Renderer=!0;class ig extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class pc extends hr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const El=new j,Tl=new j,bl=new Wt,Ta=new za,hs=new Ir;class rg extends cn{constructor(e=new In,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)El.fromBufferAttribute(t,s-1),Tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=El.distanceTo(Tl);e.setAttribute("lineDistance",new kn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(s),hs.radius+=o,e.ray.intersectsSphere(hs)===!1)return;bl.copy(s).invert(),Ta.copy(e.ray).applyMatrix4(bl);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=new j,g=new j,y=new j,S=new j,M=this.isLineSegments?2:1,b=n.index,v=n.attributes.position;if(b!==null){const p=Math.max(0,f.start),D=Math.min(b.count,f.start+f.count);for(let P=p,U=D-1;P<U;P+=M){const k=b.getX(P),H=b.getX(P+1);if(m.fromBufferAttribute(v,k),g.fromBufferAttribute(v,H),Ta.distanceSqToSegment(m,g,S,y)>h)continue;S.applyMatrix4(this.matrixWorld);const de=e.ray.origin.distanceTo(S);de<e.near||de>e.far||t.push({distance:de,point:y.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,f.start),D=Math.min(v.count,f.start+f.count);for(let P=p,U=D-1;P<U;P+=M){if(m.fromBufferAttribute(v,P),g.fromBufferAttribute(v,P+1),Ta.distanceSqToSegment(m,g,S,y)>h)continue;S.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(S);H<e.near||H>e.far||t.push({distance:H,point:y.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,f=s.length;o<f;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}const Al=new j,wl=new j;class sg extends rg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Al.fromBufferAttribute(t,s),wl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Al.distanceTo(wl);e.setAttribute("lineDistance",new kn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mc extends hr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cl=new Wt,Fa=new za,ps=new Ir,ms=new j;class ag extends cn{constructor(e=new In,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,f=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ps.copy(n.boundingSphere),ps.applyMatrix4(s),ps.radius+=o,e.ray.intersectsSphere(ps)===!1)return;Cl.copy(s).invert(),Fa.copy(e.ray).applyMatrix4(Cl);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,m=n.index,y=n.attributes.position;if(m!==null){const S=Math.max(0,f.start),M=Math.min(m.count,f.start+f.count);for(let b=S,T=M;b<T;b++){const v=m.getX(b);ms.fromBufferAttribute(y,v),Rl(ms,v,h,s,e,t,this)}}else{const S=Math.max(0,f.start),M=Math.min(y.count,f.start+f.count);for(let b=S,T=M;b<T;b++)ms.fromBufferAttribute(y,b),Rl(ms,b,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,f=s.length;o<f;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Rl(i,e,t,n,s,o,f){const c=Fa.distanceSqToPoint(i);if(c<t){const h=new j;Fa.closestPointToPoint(i,h),h.applyMatrix4(n);const m=s.ray.origin.distanceTo(h);if(m<s.near||m>s.far)return;o.push({distance:m,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oa);function og(){const i=localStorage.getItem("oth-theme")||"light";document.documentElement.setAttribute("data-theme",i),gc(i)}function lg(){const e=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("oth-theme",e),gc(e)}function gc(i){const e=document.getElementById("theme-toggle-btn");e&&(e.innerHTML=i==="dark"?"☀️ <span>Light</span>":"🌙 <span>Dark</span>")}window.toggleTheme=lg;De(window).on("load",()=>{setTimeout(()=>{De(".preloader").addClass("fade-out"),_c()},3e3)});De(document).ready(()=>{setTimeout(()=>{De(".preloader").hasClass("fade-out")||(De(".preloader").addClass("fade-out"),_c())},4e3)});const Ll=["https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"];function cg(){const i=De("#hero-slider");Ll.forEach((t,n)=>{const s=De("<div></div>").addClass("slide").css("background-image",`url('${t}')`);n===0&&s.addClass("active"),i.append(s)});let e=0;setInterval(()=>{const t=De(".slide");t.eq(e).removeClass("active"),e=(e+1)%Ll.length,t.eq(e).addClass("active")},5e3)}function ug(){const i=document.getElementById("webgl-container");if(!i)return;const e=new ig,t=new Sn(60,i.clientWidth/i.clientHeight,.1,100);t.position.z=30;const n=new hc({alpha:!0,antialias:!0});n.setSize(i.clientWidth,i.clientHeight),n.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.appendChild(n.domElement);const s=120,o=new In,f=new Float32Array(s*3),c=[],h={x:35,y:25,z:20};for(let D=0;D<s;D++)f[D*3]=(Math.random()-.5)*h.x*2,f[D*3+1]=(Math.random()-.5)*h.y*2,f[D*3+2]=(Math.random()-.5)*h.z*2,c.push({x:(Math.random()-.5)*.05,y:(Math.random()-.5)*.05,z:(Math.random()-.5)*.03});o.setAttribute("position",new Un(f,3));const m=new mc({color:16098851,size:.45,transparent:!0,opacity:.85,sizeAttenuation:!0}),g=new ag(o,m);e.add(g);const y=new pc({color:1949322,transparent:!0,opacity:.15});let S,M=0,b=0,T=0,v=0;window.addEventListener("mousemove",D=>{M=(D.clientX-window.innerWidth/2)/100,b=(D.clientY-window.innerHeight/2)/100});const p=()=>{requestAnimationFrame(p);const D=g.geometry.attributes.position.array,P=[];for(let U=0;U<s;U++){D[U*3]+=c[U].x,D[U*3+1]+=c[U].y,D[U*3+2]+=c[U].z,Math.abs(D[U*3])>h.x&&(c[U].x*=-1),Math.abs(D[U*3+1])>h.y&&(c[U].y*=-1),Math.abs(D[U*3+2])>h.z&&(c[U].z*=-1);for(let k=U+1;k<s;k++){const H=D[U*3]-D[k*3],l=D[U*3+1]-D[k*3+1],de=D[U*3+2]-D[k*3+2];Math.sqrt(H*H+l*l+de*de)<8&&(P.push(D[U*3],D[U*3+1],D[U*3+2]),P.push(D[k*3],D[k*3+1],D[k*3+2]))}}if(g.geometry.attributes.position.needsUpdate=!0,S&&e.remove(S),P.length>0){const U=new In;U.setAttribute("position",new kn(P,3)),S=new sg(U,y),e.add(S)}T+=(M-T)*.05,v+=(b-v)*.05,t.position.x=T,t.position.y=-v,t.lookAt(e.position),n.render(e,t)};p(),window.addEventListener("resize",()=>{t.aspect=i.clientWidth/i.clientHeight,t.updateProjectionMatrix(),n.setSize(i.clientWidth,i.clientHeight)})}function _c(){const i=new IntersectionObserver((e,t)=>{e.forEach(n=>{n.isIntersecting&&(De(n.target).addClass("animated"),t.unobserve(n.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});De(".scroll-animate").each(function(){i.observe(this)})}function fg(){De(window).on("scroll",()=>{De(window).scrollTop()>60?De("#main-nav").css("box-shadow","0 2px 20px rgba(0,0,0,0.06)"):De("#main-nav").css("box-shadow","none")}),De("#hamburger").on("click",()=>{const i=De("#mobile-menu");i.css("display",i.css("display")==="flex"?"none":"flex")}),De("#mobile-menu a").on("click",()=>{De("#mobile-menu").css("display","none")}),window.scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"})}function dg(){De(".proj-filter").on("click",function(){De(".proj-filter").removeClass("active"),De(this).addClass("active");const i=De(this).data("cat");De(".proj-card").each(function(){De(this)[i==="all"||De(this).data("cat")===i?"fadeIn":"fadeOut"](250)})})}const ba={services:"We offer 8 engineering divisions: ⚡ Power & Solar, 📷 CCTV & Security, ⚙️ Automation & PLC, 🔧 Control Panels, 🏗️ Elevators, ⛽ Fuel Station Automation, 🏢 Building Management (BMS), and 📐 Engineering Consultancy. Which area interests you?",solar:"Our solar team designs hybrid solar & inverter systems from 5 kW to 1 MW+. We serve Abuja, Lagos and all major cities. We handle site survey, installation, and maintenance contracts. Ready for a quote?",emergency:"For emergencies call 📞 08039790207 or 08074591971. Our engineers are on standby 24/7. You can also use the emergency dispatch button above to connect directly with a specialist.",contact:`Head Office: Federal Housing Lugbe, Abuja, Nigeria
📞 08039790207 | 08074591971
📧 olatmatics.tech@gmail.com
💬 WhatsApp: https://wa.link/uxd689`,quote:`We'd love to work with you! Scroll to the "Request a Quote" section above and fill in your project details. Our minimum engagement is ₦200,000. We respond within 24 hours.`,elevator:"Our elevator division handles installation, modernisation, preventive maintenance and emergency repairs for passenger and goods lifts across Nigeria. Call 08039790207 for an assessment.",cctv:"Our security team installs IP CCTV, access control, biometric systems and electric fencing. We support Hikvision, Dahua and ZKTeco brands. Call us for a free site survey!",fuel:"We install and maintain fuel dispensers, ATG underground tank monitoring, forecourt automation and fuel management systems. DPR certified. Call us on 08039790207.",automation:"We program and commission PLC & SCADA systems using Siemens TIA Portal and Allen-Bradley platforms. Industrial IoT, remote monitoring, and process control are our specialties.",bms:"Our Building Management Systems integrate HVAC, lighting automation, fire alarm, and energy monitoring for commercial buildings across Nigeria.",default:"👋 I'm here to help! Ask me about our solar, CCTV, automation, elevator, fuel station, or BMS services. You can also request a quote or get emergency support. How can I assist?"};function Pl(i){const e=i.toLowerCase();for(const t in ba)if(t!=="default"&&e.includes(t))return ba[t];return ba.default}function gs(i,e){const t=De("#chat-body"),n=De("<div></div>").addClass("chat-msg "+e).text(i);t.append(n),t.scrollTop(t[0].scrollHeight)}function Dl(){const i=De("#chat-body"),e=De("<div></div>").addClass("chat-msg bot").attr("id","typing-indicator").text("...");i.append(e),i.scrollTop(i[0].scrollHeight)}function Ul(){De("#typing-indicator").remove()}function hg(){window.toggleChat=()=>De("#chat-window").toggleClass("open"),window.sendChat=()=>{const i=De("#chat-input"),e=i.val().trim();e&&(gs(e,"user"),i.val(""),De("#chat-quick").hide(),Dl(),setTimeout(()=>{Ul(),gs(Pl(e),"bot")},800))},window.chatReply=i=>{gs(i,"user"),De("#chat-quick").hide(),Dl(),setTimeout(()=>{Ul(),gs(Pl(i),"bot")},800)}}const pg=[{name:"Engr. Bilal",title:"Automation & Instrumentation Engineer",desc:"Highly skilled automation engineer with 9+ years of experience in industrial PLC programming, SCADA system design, and field instrumentation across oil & gas and manufacturing sectors in Nigeria.",tech:"Siemens S7 | Allen-Bradley | SCADA | HMI | Industrial IoT | Process Control",phone:"08039790207",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"},{name:"Engr. Adewale",title:"Senior Pump & Petroleum Systems Engineer",desc:"Seasoned petroleum infrastructure specialist with 11+ years managing fuel dispenser installations, ATG tank monitoring systems, and forecourt automation for major fuel stations across Abuja and Lagos. DPR certified.",tech:"ATG Systems | Fuel Dispensers | Forecourt Automation | Gilbarco | Wayne | DPR Compliance",phone:"08074591971",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"},{name:"Engr. Kehinde",title:"Solar & Renewable Energy Expert",desc:"Renewable energy engineer with 8+ years specialising in hybrid solar PV design, lithium battery storage, and inverter systems for residential, commercial and industrial clients. Certified PVsyst and off-grid system designer.",tech:"PVsyst | Hybrid Solar | MPPT Controllers | Inverters | Battery Storage | Load Balancing",phone:"08039790207",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"}];function mg(){const i=["https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&auto=format","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format"];return pg.map((e,t)=>`
    <div class="engineer-card">
      <img class="engineer-avatar" src="${i[t]}" alt="${e.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22><circle cx=%2232%22 cy=%2232%22 r=%2232%22 fill=%22%23f5a623%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22white%22>${e.name.charAt(5)}</text></svg>'" />
      <div class="engineer-info">
        <div class="engineer-name">${e.name}</div>
        <div class="engineer-title">${e.title}</div>
        <div class="engineer-desc">${e.desc}</div>
        <div class="engineer-tech">${e.tech}</div>
        <div class="engineer-contacts">
          <a class="engineer-contact-btn phone" href="tel:${e.phone}">📞 ${e.phone}</a>
          <a class="engineer-contact-btn whatsapp" href="${e.whatsapp}" target="_blank">💬 WhatsApp</a>
          <a class="engineer-contact-btn email" href="mailto:${e.email}">✉️ Email</a>
        </div>
      </div>
    </div>
  `).join("")}function gg(){window.triggerEmergency=()=>{const i=De("#emergency-modal");i.find(".engineer-cards").html(mg()),i.addClass("open"),xs("🚨 Emergency call-out triggered on website. Response required immediately.")},window.closeEmergencyModal=()=>{De("#emergency-modal").removeClass("open")},De("#emergency-modal").on("click",function(i){i.target===this&&closeEmergencyModal()})}const _g={"client@olatmatics.com":{password:"client123",name:"Engr. Demo Client",company:"Demo Industries"},"admin@olatmatics.com":{password:"admin123",name:"Admin User",company:"OTH Internal"}};let vs=null;function vc(){return`
    <div class="portal-login-box scroll-animate fade-in animated">
      <div class="portal-login-logo">
        <img src="./src/logo.png" alt="OTH Logo" style="height:40px;width:auto;">
        <div class="portal-login-logo-text">Client Portal</div>
      </div>
      <h3>Sign in to your dashboard</h3>
      <p>Enter your credentials provided after your project kickoff. Contact us to get access.</p>
      <div class="fg" style="text-align:left;">
        <label for="portal-email">Email Address</label>
        <input type="email" id="portal-email" placeholder="you@company.com">
      </div>
      <div class="fg" style="text-align:left;">
        <label for="portal-pass">Password</label>
        <input type="password" id="portal-pass" placeholder="••••••••">
      </div>
      <button class="submit-btn" onclick="portalLogin()" style="margin-top:0.5rem;">Sign In →</button>
      <p style="margin-top:1rem;font-size:12px;color:var(--muted);">Don't have an account? <a href="#contact" style="color:var(--accent);" onclick="closePortalIfOpen()">Contact us</a> to request access.</p>
      <p style="margin-top:0.5rem;font-size:11px;color:var(--muted);">Demo: client@olatmatics.com / client123</p>
    </div>
  `}function vg(i){return`
    <div class="portal-layout scroll-animate fade-in animated">
      <div class="portal-sidebar">
        <div class="portal-logo">
          <img class="portal-logo-mark" src="./src/logo.png" alt="OTH Logo">
          <div><div class="portal-logo-text">Client Portal</div><div style="font-size:10px;color:var(--muted);">${i.company}</div></div>
        </div>
        <div class="p-nav-item active"><span class="p-nav-icon">📊</span> Dashboard</div>
        <div class="p-nav-item"><span class="p-nav-icon">📁</span> My Projects</div>
        <div class="p-nav-item"><span class="p-nav-icon">🔧</span> Service Requests</div>
        <div class="p-nav-item"><span class="p-nav-icon">🧾</span> Invoices</div>
        <div class="p-nav-item"><span class="p-nav-icon">📄</span> Documents</div>
        <div class="p-nav-item"><span class="p-nav-icon">💬</span> Messages</div>
        <div class="p-nav-item" onclick="portalLogout()" style="color:var(--red);margin-top:auto;"><span class="p-nav-icon">🚪</span> Logout</div>
      </div>
      <div class="portal-main">
        <div class="portal-topbar">
          <div class="portal-welcome">Welcome back, <strong>${i.name}</strong></div>
          <div class="portal-actions">
            <button class="p-btn" onclick="showToast('Service request form sent to olatmatics.tech@gmail.com!')">+ New Request</button>
            <button class="p-btn accent" onclick="triggerEmergency()">Emergency Call-Out</button>
          </div>
        </div>
        <div class="portal-cards">
          <div class="p-metric"><div class="p-metric-val">3</div><div class="p-metric-label">Active Projects</div></div>
          <div class="p-metric"><div class="p-metric-val">7</div><div class="p-metric-label">Open Tickets</div></div>
          <div class="p-metric"><div class="p-metric-val">2</div><div class="p-metric-label">Pending Actions</div></div>
          <div class="p-metric"><div class="p-metric-val">₦12M</div><div class="p-metric-label">Outstanding</div></div>
        </div>
        <div class="portal-table-wrap">
          <div class="portal-table-head"><h4>Active Projects</h4><span class="pt-label">Updated: Today</span></div>
          <table class="portal-tbl">
            <thead><tr><th>Project</th><th>Division</th><th>Progress</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Solar Installation — Facility B</td><td>Power Systems</td><td>72%</td><td><span class="status-pill status-active">In Progress</span></td></tr>
              <tr><td>CCTV Upgrade — Gate 1–4</td><td>Security</td><td>45%</td><td><span class="status-pill status-active">In Progress</span></td></tr>
              <tr><td>MCC Panel Replacement</td><td>Control Panels</td><td>100%</td><td><span class="status-pill status-complete">Complete</span></td></tr>
              <tr><td>Generator PM Contract Q2</td><td>Power Systems</td><td>—</td><td><span class="status-pill status-pending">Scheduled</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="margin-top:1.5rem;padding:1.25rem;background:var(--dark3);border:1px solid var(--border);border-radius:12px;text-align:center;">
      <p style="font-size:13px;color:var(--muted);">Your project data is live. For real-time updates, contact your project manager. <a href="#contact" style="color:var(--accent);">Contact us</a>.</p>
    </div>
  `}function xg(){const i=De("#portal-email").val().trim(),e=De("#portal-pass").val(),t=_g[i];if(!t||t.password!==e){showToast("❌ Invalid credentials. Try: client@olatmatics.com / client123");return}vs={...t,email:i},De("#portal-section-content").html(vg(vs)),showToast("✅ Welcome back, "+vs.name+"!")}function yg(){vs=null,De("#portal-section-content").html(vc()),showToast("You have been signed out.")}window.portalLogin=xg;window.portalLogout=yg;window.closePortalIfOpen=()=>{};function Sg(){const i=De("#portal-section-content");i.length&&i.html(vc())}const Mg={solar:{title:"How We Cut a Factory's Energy Bill by 65% with Hybrid Solar",category:"Case Study",date:"June 2025",readTime:"8 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Project Overview</h3>
      <p>In early 2024, a Lagos manufacturing facility approached OTH Ltd with an average monthly electricity bill of ₦4.2 million from diesel generators — running 18–20 hours daily due to grid instability.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">The Challenge</h4>
      <p>The factory required uninterrupted 3-phase power for CNC machinery, injection moulding equipment, and quality-control lighting. Any power interruption caused product defects and machine errors costing hundreds of thousands of naira per incident.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Our Solution</h4>
      <p><strong>System Size:</strong> 100 kW Hybrid Solar Array with 480 kWh Lithium Battery Bank</p>
      <ul style="margin-left:1.5rem;margin-top:0.5rem;color:var(--muted);">
        <li>200 × 500W monocrystalline solar panels installed on factory roof</li>
        <li>8 × 15 kW Deye hybrid inverters with seamless grid/generator switching</li>
        <li>48V lithium iron phosphate battery bank — 10-year design life</li>
        <li>Real-time energy monitoring dashboard (accessible from phone/PC)</li>
        <li>Generator integration as tertiary backup only</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Results After 6 Months</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>65% reduction in diesel consumption</li>
        <li>Monthly energy savings: ₦2.8M</li>
        <li>Carbon emissions reduced by 38 tonnes/year</li>
        <li>Full ROI projected in 18–22 months</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">Contact us today to get a similar system designed for your facility. Call: <strong>08039790207</strong></p>
    `},plcvscada:{title:"PLC vs SCADA: Choosing the Right Automation Architecture",category:"Technical Article",date:"May 2025",readTime:"12 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Understanding the Difference</h3>
      <p>Many clients ask us: <em>"Should we use a PLC or a SCADA system?"</em> The answer is nuanced — and often, the answer is <strong>both</strong>.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What is a PLC?</h4>
      <p>A <strong>Programmable Logic Controller (PLC)</strong> is a rugged industrial computer designed to control specific processes or machinery. It runs pre-written ladder logic or function block programs in real time (millisecond response times). PLCs are ideal for: motor controls, conveyor systems, pump sequencing, and safety interlocks.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What is SCADA?</h4>
      <p><strong>Supervisory Control and Data Acquisition (SCADA)</strong> is a higher-level system that aggregates data from multiple PLCs, RTUs, and sensors, presenting operators with a graphical interface to monitor and control large-scale operations. SCADA is ideal for: pipeline monitoring, water treatment, power grid management, and multi-site operations.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Our Recommendation Framework</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>Single machine/process:</strong> PLC only (Siemens S7-1200 or Allen-Bradley Micro850)</li>
        <li><strong>Multi-machine factory:</strong> PLC network with HMI touchscreen</li>
        <li><strong>Multi-site or pipeline:</strong> PLC at each site + centralised SCADA</li>
        <li><strong>Remote monitoring required:</strong> Industrial IoT gateway + SCADA cloud dashboard</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">For a free automation audit of your facility, call: <strong>08039790207</strong> or email: olatmatics.tech@gmail.com</p>
    `},cctv:{title:"SON's New Standards for CCTV Installation in Nigeria",category:"Industry Update",date:"April 2025",readTime:"5 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">What Changed in 2024/2025?</h3>
      <p>The Standards Organisation of Nigeria (SON) released updated guidelines for electronic security systems in 2024 that affect how CCTV systems must be designed, installed and documented in commercial and public facilities.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Key Requirements</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>All IP cameras must use AES-128 or higher encryption for data in transit</li>
        <li>Minimum 30-day recording retention for commercial premises (90 days for banks/government)</li>
        <li>Night-vision cameras mandatory for perimeter security on industrial estates</li>
        <li>All systems must include UPS backup power of minimum 4-hour duration</li>
        <li>Documentation (as-built drawings, IP address schedules) must be submitted to facility management</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What This Means For You</h4>
      <p>If your existing CCTV installation pre-dates 2023, it may not meet current standards. OTH Ltd offers free compliance audits for existing systems and can upgrade or retrofit your infrastructure to meet SON requirements.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Schedule your free security audit: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `},atg:{title:"Fuel Station ATG Systems Explained: Why Every Station Needs One",category:"Guide",date:"March 2025",readTime:"7 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">What is an ATG System?</h3>
      <p>An <strong>Automatic Tank Gauge (ATG)</strong> is an electronic device that continuously monitors the level, temperature, and volume of fuel in underground storage tanks at petrol stations.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Why Your Station Needs One</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>Theft prevention:</strong> Real-time inventory means fuel losses are immediately flagged</li>
        <li><strong>Environmental compliance:</strong> Leak detection prevents costly soil contamination fines</li>
        <li><strong>DPR requirement:</strong> The Department of Petroleum Resources now mandates ATG on new installations</li>
        <li><strong>Reconciliation accuracy:</strong> Matches pump sales data against tank levels automatically</li>
        <li><strong>Remote monitoring:</strong> Managers can check fuel levels from their phones at any time</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">What We Install</h4>
      <p>OTH Ltd is certified to install Veeder-Root TLS-350 and Franklin Fueling Systems ATG units. We also integrate them with your Point-of-Sale (POS) and fuel management software for full operational visibility.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Get your ATG quote today: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `},elevator:{title:"When Should You Modernise Your Elevator Instead of Replace It?",category:"Technical Article",date:"February 2025",readTime:"6 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">The Decision Framework</h3>
      <p>Elevator modernisation involves upgrading components (control systems, door operators, motor drives) while retaining the existing shaft, car, and structural steel. Full replacement means removing everything and starting fresh.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Modernise When:</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>The lift is 15–25 years old but structurally sound</li>
        <li>Breakdowns are frequent but the shaft is in good condition</li>
        <li>You want to upgrade to Variable Frequency Drive (VFD) control for energy savings</li>
        <li>Door operators are faulty — causing most service calls</li>
        <li>Budget is limited and downtime must be minimised</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">Replace When:</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>The lift is 30+ years old with original hydraulic system</li>
        <li>Shaft structure has been compromised (water damage, corrosion)</li>
        <li>Building is undergoing full renovation and elevator capacity needs to increase</li>
        <li>Parts for the existing model are no longer manufactured</li>
      </ul>
      <br>
      <p>OTH Ltd provides free lift inspections and written modernisation vs replacement reports for building managers.</p>
      <br>
      <p style="font-size:12px;color:var(--muted);">Book your free inspection: <strong>08039790207</strong></p>
    `},bms:{title:"Smart BMS Reduces Energy Waste by 40% in Port Harcourt Office Tower",category:"Case Study",date:"January 2025",readTime:"10 min read",content:`
      <h3 style="margin-bottom:1rem;font-size:1.2rem;">Project Background</h3>
      <p>A 10-floor corporate headquarters in Port Harcourt was spending ₦3.1M monthly on electricity despite only having 60% occupancy. Air conditioning was running on weekends, lighting stayed on in empty floors, and there was no visibility into energy usage by floor.</p>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">OTH Ltd's BMS Solution</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li><strong>HVAC Integration:</strong> Schneider EcoStruxure controllers linked to 28 AHUs with occupancy sensors</li>
        <li><strong>Lighting Automation:</strong> DALI lighting control with daylight harvesting sensors on all floors</li>
        <li><strong>Energy Metering:</strong> Sub-meters on every floor feeding into a central cloud dashboard</li>
        <li><strong>Access-Based Control:</strong> HVAC and lighting activate only when access cards are used on each floor</li>
        <li><strong>Fire Alarm Integration:</strong> Addressable Notifier system with BMS tie-in for smoke/evacuation control</li>
      </ul>
      <br>
      <h4 style="color:var(--accent);margin-bottom:0.5rem;">12-Month Results</h4>
      <ul style="margin-left:1.5rem;color:var(--muted);">
        <li>40% reduction in monthly electricity consumption</li>
        <li>Monthly savings: ₦1.24M</li>
        <li>Payback period: 14 months</li>
        <li>Occupant comfort scores improved by 28%</li>
        <li>Zero false fire alarm evacuations (vs 9 in the prior year)</li>
      </ul>
      <br>
      <p style="font-size:12px;color:var(--muted);">Get a BMS assessment for your building: <strong>08074591971</strong> | olatmatics.tech@gmail.com</p>
    `}};function Eg(i){const e=Mg[i];if(!e)return;const t=De("#article-modal");t.find(".modal-title").html(`<span style="font-size:11px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;">${e.category}</span><br>${e.title}`),t.find(".modal-sub").html(`${e.readTime} &nbsp;·&nbsp; ${e.date}`),t.find("#article-content").html(e.content),t.addClass("open")}window.openArticle=Eg;window.closeArticleModal=()=>De("#article-modal").removeClass("open");function Tg(){De("#article-modal").on("click",function(i){i.target===this&&closeArticleModal()})}function xs(i){console.log(`📧 Notification → olatmatics.tech@gmail.com | Subject: ${i}`)}function bg(){window.handleSubmit=()=>{const i=De("#f-name").val(),e=De("#f-email").val(),t=De("#f-service").val();if(!i||!e||!t){showToast("⚠️ Please fill in your name, email, and select a service.");return}xs(`New Quote Request from ${i} (${e}) — Service: ${t}`),showToast("✅ Quote submitted! We'll contact you within 24 hours."),["f-name","f-email","f-phone","f-company","f-location","f-desc"].forEach(n=>De(`#${n}`).val("")),De("#f-service").val(""),De("#f-budget").val("")},window.showToast=i=>{const e=De("#toast");e.text(i).addClass("visible"),setTimeout(()=>e.removeClass("visible"),4500)},window.openApply=i=>{De("#modal-title").text("Apply: "+i),De("#modal-sub").text(i==="General Application"?"Send us your CV and we will reach out when a matching role opens.":`Submit your application for ${i} — we will be in touch within 5 business days.`),De("#apply-modal").addClass("open")},window.closeModal=()=>De("#apply-modal").removeClass("open"),De("#apply-modal").on("click",function(i){i.target===this&&closeModal()}),window.submitApplication=()=>{var s;const i=De("#a-name").val(),e=De("#a-email").val();if(!i||!e){showToast("⚠️ Please enter your name and email.");return}const t=(s=De("#a-cv")[0])==null?void 0:s.files[0],n=t?t.name:"No file attached";xs(`New Job Application from ${i} (${e}) — CV: ${n}`),closeModal(),showToast("✅ Application received! We'll review and contact you within 5 days."),["a-name","a-email","a-phone","a-cover","a-link"].forEach(o=>De(`#${o}`).val("")),De("#a-cv").val("")},window.openConsultation=()=>{De("#consultation-modal").addClass("open")},window.closeConsultationModal=()=>De("#consultation-modal").removeClass("open"),De("#consultation-modal").on("click",function(i){i.target===this&&closeConsultationModal()}),window.submitConsultation=()=>{const i=De("#c-name").val(),e=De("#c-email").val();if(!i||!e){showToast("⚠️ Please enter your name and email.");return}xs(`Free Consultation Request from ${i} (${e})`),closeConsultationModal(),showToast("✅ Consultation booked! Our team will call you within 2 hours."),["c-name","c-email","c-phone","c-topic"].forEach(t=>De(`#${t}`).val(""))}}function Ag(){const i=De("#map-container");i.length&&i.html(`
      <iframe
        width="100%"
        height="250"
        style="border:0;border-radius:12px;"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?q=Federal+Housing+Lugbe+Abuja+Nigeria&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU3Muo">
      </iframe>
    `)}De(document).ready(()=>{og(),cg(),ug(),fg(),dg(),hg(),bg(),gg(),Sg(),Tg(),Ag()});
