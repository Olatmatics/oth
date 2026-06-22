(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const f of a.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var uu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fu(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vl={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(i){if(!i.document)throw new Error("jQuery requires a window with a document");return t(i)}})(typeof window<"u"?window:uu,function(e,t){var i=[],s=Object.getPrototypeOf,a=i.slice,f=i.flat?function(r){return i.flat.call(r)}:function(r){return i.concat.apply([],r)},c=i.push,h=i.indexOf,p={},g=p.toString,v=p.hasOwnProperty,S=v.toString,M=S.call(Object),b={},T=function(o){return typeof o=="function"&&typeof o.nodeType!="number"&&typeof o.item!="function"},x=function(o){return o!=null&&o===o.window},m=e.document,D={type:!0,src:!0,nonce:!0,noModule:!0};function P(r,o,u){u=u||m;var d,_,y=u.createElement("script");if(y.text=r,o)for(d in D)_=o[d]||o.getAttribute&&o.getAttribute(d),_&&y.setAttribute(d,_);u.head.appendChild(y).parentNode.removeChild(y)}function U(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?p[g.call(r)]||"object":typeof r}var G="3.7.1",H=/HTML$/i,l=function(r,o){return new l.fn.init(r,o)};l.fn=l.prototype={jquery:G,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(r){return r==null?a.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=l.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return l.each(this,r)},map:function(r){return this.pushStack(l.map(this,function(o,u){return r.call(o,u,o)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,u=+r+(r<0?o:0);return this.pushStack(u>=0&&u<o?[this[u]]:[])},end:function(){return this.prevObject||this.constructor()},push:c,sort:i.sort,splice:i.splice},l.extend=l.fn.extend=function(){var r,o,u,d,_,y,E=arguments[0]||{},F=1,I=arguments.length,z=!1;for(typeof E=="boolean"&&(z=E,E=arguments[F]||{},F++),typeof E!="object"&&!T(E)&&(E={}),F===I&&(E=this,F--);F<I;F++)if((r=arguments[F])!=null)for(o in r)d=r[o],!(o==="__proto__"||E===d)&&(z&&d&&(l.isPlainObject(d)||(_=Array.isArray(d)))?(u=E[o],_&&!Array.isArray(u)?y=[]:!_&&!l.isPlainObject(u)?y={}:y=u,_=!1,E[o]=l.extend(z,y,d)):d!==void 0&&(E[o]=d));return E},l.extend({expando:"jQuery"+(G+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,u;return!r||g.call(r)!=="[object Object]"?!1:(o=s(r),o?(u=v.call(o,"constructor")&&o.constructor,typeof u=="function"&&S.call(u)===M):!0)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,u){P(r,{nonce:o&&o.nonce},u)},each:function(r,o){var u,d=0;if(he(r))for(u=r.length;d<u&&o.call(r[d],d,r[d])!==!1;d++);else for(d in r)if(o.call(r[d],d,r[d])===!1)break;return r},text:function(r){var o,u="",d=0,_=r.nodeType;if(!_)for(;o=r[d++];)u+=l.text(o);return _===1||_===11?r.textContent:_===9?r.documentElement.textContent:_===3||_===4?r.nodeValue:u},makeArray:function(r,o){var u=o||[];return r!=null&&(he(Object(r))?l.merge(u,typeof r=="string"?[r]:r):c.call(u,r)),u},inArray:function(r,o,u){return o==null?-1:h.call(o,r,u)},isXMLDoc:function(r){var o=r&&r.namespaceURI,u=r&&(r.ownerDocument||r).documentElement;return!H.test(o||u&&u.nodeName||"HTML")},merge:function(r,o){for(var u=+o.length,d=0,_=r.length;d<u;d++)r[_++]=o[d];return r.length=_,r},grep:function(r,o,u){for(var d,_=[],y=0,E=r.length,F=!u;y<E;y++)d=!o(r[y],y),d!==F&&_.push(r[y]);return _},map:function(r,o,u){var d,_,y=0,E=[];if(he(r))for(d=r.length;y<d;y++)_=o(r[y],y,u),_!=null&&E.push(_);else for(y in r)_=o(r[y],y,u),_!=null&&E.push(_);return f(E)},guid:1,support:b}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=i[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){p["[object "+o+"]"]=o.toLowerCase()});function he(r){var o=!!r&&"length"in r&&r.length,u=U(r);return T(r)||x(r)?!1:u==="array"||o===0||typeof o=="number"&&o>0&&o-1 in r}function w(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var N=i.pop,se=i.sort,de=i.splice,ue="[\\x20\\t\\r\\n\\f]",k=new RegExp("^"+ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ue+"+$","g");l.contains=function(r,o){var u=o&&o.parentNode;return r===u||!!(u&&u.nodeType===1&&(r.contains?r.contains(u):r.compareDocumentPosition&&r.compareDocumentPosition(u)&16))};var ee=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function re(r,o){return o?r==="\0"?"�":r.slice(0,-1)+"\\"+r.charCodeAt(r.length-1).toString(16)+" ":"\\"+r}l.escapeSelector=function(r){return(r+"").replace(ee,re)};var oe=m,le=c;(function(){var r,o,u,d,_,y=le,E,F,I,z,Q,ie=l.expando,X=0,ye=0,Je=qr(),yt=qr(),dt=qr(),Qt=qr(),Vt=function(R,B){return R===B&&(_=!0),0},On="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Bn="(?:\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",_t="\\["+ue+"*("+Bn+")(?:"+ue+"*([*^$|!~]?=)"+ue+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Bn+"))|)"+ue+"*\\]",yi=":("+Bn+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+_t+")*)|.*)\\)|)",St=new RegExp(ue+"+","g"),Bt=new RegExp("^"+ue+"*,"+ue+"*"),Er=new RegExp("^"+ue+"*([>+~]|"+ue+")"+ue+"*"),qs=new RegExp(ue+"|>"),Hn=new RegExp(yi),br=new RegExp("^"+Bn+"$"),zn={ID:new RegExp("^#("+Bn+")"),CLASS:new RegExp("^\\.("+Bn+")"),TAG:new RegExp("^("+Bn+"|[*])"),ATTR:new RegExp("^"+_t),PSEUDO:new RegExp("^"+yi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ue+"*(even|odd|(([+-]|)(\\d*)n|)"+ue+"*(?:([+-]|)"+ue+"*(\\d+)|))"+ue+"*\\)|)","i"),bool:new RegExp("^(?:"+On+")$","i"),needsContext:new RegExp("^"+ue+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ue+"*((?:-\\d)?\\d*)"+ue+"*\\)|)(?=[^-]|$)","i")},ni=/^(?:input|select|textarea|button)$/i,ii=/^h\d$/i,vn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,js=/[+~]/,Xn=new RegExp("\\\\[\\da-fA-F]{1,6}"+ue+"?|\\\\([^\\r\\n\\f])","g"),qn=function(R,B){var W="0x"+R.slice(1)-65536;return B||(W<0?String.fromCharCode(W+65536):String.fromCharCode(W>>10|55296,W&1023|56320))},iu=function(){ri()},ru=Yr(function(R){return R.disabled===!0&&w(R,"fieldset")},{dir:"parentNode",next:"legend"});function su(){try{return E.activeElement}catch{}}try{y.apply(i=a.call(oe.childNodes),oe.childNodes),i[oe.childNodes.length].nodeType}catch{y={apply:function(B,W){le.apply(B,a.call(W))},call:function(B){le.apply(B,a.call(arguments,1))}}}function At(R,B,W,K){var ne,Ee,Re,Oe,Le,mt,Ze,et=B&&B.ownerDocument,gt=B?B.nodeType:9;if(W=W||[],typeof R!="string"||!R||gt!==1&&gt!==9&&gt!==11)return W;if(!K&&(ri(B),B=B||E,I)){if(gt!==11&&(Le=vn.exec(R)))if(ne=Le[1]){if(gt===9)if(Re=B.getElementById(ne)){if(Re.id===ne)return y.call(W,Re),W}else return W;else if(et&&(Re=et.getElementById(ne))&&At.contains(B,Re)&&Re.id===ne)return y.call(W,Re),W}else{if(Le[2])return y.apply(W,B.getElementsByTagName(R)),W;if((ne=Le[3])&&B.getElementsByClassName)return y.apply(W,B.getElementsByClassName(ne)),W}if(!Qt[R+" "]&&(!z||!z.test(R))){if(Ze=R,et=B,gt===1&&(qs.test(R)||Er.test(R))){for(et=js.test(R)&&Ys(B.parentNode)||B,(et!=B||!b.scope)&&((Oe=B.getAttribute("id"))?Oe=l.escapeSelector(Oe):B.setAttribute("id",Oe=ie)),mt=Tr(R),Ee=mt.length;Ee--;)mt[Ee]=(Oe?"#"+Oe:":scope")+" "+jr(mt[Ee]);Ze=mt.join(",")}try{return y.apply(W,et.querySelectorAll(Ze)),W}catch{Qt(R,!0)}finally{Oe===ie&&B.removeAttribute("id")}}}return co(R.replace(k,"$1"),B,W,K)}function qr(){var R=[];function B(W,K){return R.push(W+" ")>o.cacheLength&&delete B[R.shift()],B[W+" "]=K}return B}function wn(R){return R[ie]=!0,R}function Vi(R){var B=E.createElement("fieldset");try{return!!R(B)}catch{return!1}finally{B.parentNode&&B.parentNode.removeChild(B),B=null}}function au(R){return function(B){return w(B,"input")&&B.type===R}}function ou(R){return function(B){return(w(B,"input")||w(B,"button"))&&B.type===R}}function oo(R){return function(B){return"form"in B?B.parentNode&&B.disabled===!1?"label"in B?"label"in B.parentNode?B.parentNode.disabled===R:B.disabled===R:B.isDisabled===R||B.isDisabled!==!R&&ru(B)===R:B.disabled===R:"label"in B?B.disabled===R:!1}}function Si(R){return wn(function(B){return B=+B,wn(function(W,K){for(var ne,Ee=R([],W.length,B),Re=Ee.length;Re--;)W[ne=Ee[Re]]&&(W[ne]=!(K[ne]=W[ne]))})})}function Ys(R){return R&&typeof R.getElementsByTagName<"u"&&R}function ri(R){var B,W=R?R.ownerDocument||R:oe;return W==E||W.nodeType!==9||!W.documentElement||(E=W,F=E.documentElement,I=!l.isXMLDoc(E),Q=F.matches||F.webkitMatchesSelector||F.msMatchesSelector,F.msMatchesSelector&&oe!=E&&(B=E.defaultView)&&B.top!==B&&B.addEventListener("unload",iu),b.getById=Vi(function(K){return F.appendChild(K).id=l.expando,!E.getElementsByName||!E.getElementsByName(l.expando).length}),b.disconnectedMatch=Vi(function(K){return Q.call(K,"*")}),b.scope=Vi(function(){return E.querySelectorAll(":scope")}),b.cssHas=Vi(function(){try{return E.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),b.getById?(o.filter.ID=function(K){var ne=K.replace(Xn,qn);return function(Ee){return Ee.getAttribute("id")===ne}},o.find.ID=function(K,ne){if(typeof ne.getElementById<"u"&&I){var Ee=ne.getElementById(K);return Ee?[Ee]:[]}}):(o.filter.ID=function(K){var ne=K.replace(Xn,qn);return function(Ee){var Re=typeof Ee.getAttributeNode<"u"&&Ee.getAttributeNode("id");return Re&&Re.value===ne}},o.find.ID=function(K,ne){if(typeof ne.getElementById<"u"&&I){var Ee,Re,Oe,Le=ne.getElementById(K);if(Le){if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===K)return[Le];for(Oe=ne.getElementsByName(K),Re=0;Le=Oe[Re++];)if(Ee=Le.getAttributeNode("id"),Ee&&Ee.value===K)return[Le]}return[]}}),o.find.TAG=function(K,ne){return typeof ne.getElementsByTagName<"u"?ne.getElementsByTagName(K):ne.querySelectorAll(K)},o.find.CLASS=function(K,ne){if(typeof ne.getElementsByClassName<"u"&&I)return ne.getElementsByClassName(K)},z=[],Vi(function(K){var ne;F.appendChild(K).innerHTML="<a id='"+ie+"' href='' disabled='disabled'></a><select id='"+ie+"-\r\\' disabled='disabled'><option selected=''></option></select>",K.querySelectorAll("[selected]").length||z.push("\\["+ue+"*(?:value|"+On+")"),K.querySelectorAll("[id~="+ie+"-]").length||z.push("~="),K.querySelectorAll("a#"+ie+"+*").length||z.push(".#.+[+~]"),K.querySelectorAll(":checked").length||z.push(":checked"),ne=E.createElement("input"),ne.setAttribute("type","hidden"),K.appendChild(ne).setAttribute("name","D"),F.appendChild(K).disabled=!0,K.querySelectorAll(":disabled").length!==2&&z.push(":enabled",":disabled"),ne=E.createElement("input"),ne.setAttribute("name",""),K.appendChild(ne),K.querySelectorAll("[name='']").length||z.push("\\["+ue+"*name"+ue+"*="+ue+`*(?:''|"")`)}),b.cssHas||z.push(":has"),z=z.length&&new RegExp(z.join("|")),Vt=function(K,ne){if(K===ne)return _=!0,0;var Ee=!K.compareDocumentPosition-!ne.compareDocumentPosition;return Ee||(Ee=(K.ownerDocument||K)==(ne.ownerDocument||ne)?K.compareDocumentPosition(ne):1,Ee&1||!b.sortDetached&&ne.compareDocumentPosition(K)===Ee?K===E||K.ownerDocument==oe&&At.contains(oe,K)?-1:ne===E||ne.ownerDocument==oe&&At.contains(oe,ne)?1:d?h.call(d,K)-h.call(d,ne):0:Ee&4?-1:1)}),E}At.matches=function(R,B){return At(R,null,null,B)},At.matchesSelector=function(R,B){if(ri(R),I&&!Qt[B+" "]&&(!z||!z.test(B)))try{var W=Q.call(R,B);if(W||b.disconnectedMatch||R.document&&R.document.nodeType!==11)return W}catch{Qt(B,!0)}return At(B,E,null,[R]).length>0},At.contains=function(R,B){return(R.ownerDocument||R)!=E&&ri(R),l.contains(R,B)},At.attr=function(R,B){(R.ownerDocument||R)!=E&&ri(R);var W=o.attrHandle[B.toLowerCase()],K=W&&v.call(o.attrHandle,B.toLowerCase())?W(R,B,!I):void 0;return K!==void 0?K:R.getAttribute(B)},At.error=function(R){throw new Error("Syntax error, unrecognized expression: "+R)},l.uniqueSort=function(R){var B,W=[],K=0,ne=0;if(_=!b.sortStable,d=!b.sortStable&&a.call(R,0),se.call(R,Vt),_){for(;B=R[ne++];)B===R[ne]&&(K=W.push(ne));for(;K--;)de.call(R,W[K],1)}return d=null,R},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},o=l.expr={cacheLength:50,createPseudo:wn,match:zn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(R){return R[1]=R[1].replace(Xn,qn),R[3]=(R[3]||R[4]||R[5]||"").replace(Xn,qn),R[2]==="~="&&(R[3]=" "+R[3]+" "),R.slice(0,4)},CHILD:function(R){return R[1]=R[1].toLowerCase(),R[1].slice(0,3)==="nth"?(R[3]||At.error(R[0]),R[4]=+(R[4]?R[5]+(R[6]||1):2*(R[3]==="even"||R[3]==="odd")),R[5]=+(R[7]+R[8]||R[3]==="odd")):R[3]&&At.error(R[0]),R},PSEUDO:function(R){var B,W=!R[6]&&R[2];return zn.CHILD.test(R[0])?null:(R[3]?R[2]=R[4]||R[5]||"":W&&Hn.test(W)&&(B=Tr(W,!0))&&(B=W.indexOf(")",W.length-B)-W.length)&&(R[0]=R[0].slice(0,B),R[2]=W.slice(0,B)),R.slice(0,3))}},filter:{TAG:function(R){var B=R.replace(Xn,qn).toLowerCase();return R==="*"?function(){return!0}:function(W){return w(W,B)}},CLASS:function(R){var B=Je[R+" "];return B||(B=new RegExp("(^|"+ue+")"+R+"("+ue+"|$)"))&&Je(R,function(W){return B.test(typeof W.className=="string"&&W.className||typeof W.getAttribute<"u"&&W.getAttribute("class")||"")})},ATTR:function(R,B,W){return function(K){var ne=At.attr(K,R);return ne==null?B==="!=":B?(ne+="",B==="="?ne===W:B==="!="?ne!==W:B==="^="?W&&ne.indexOf(W)===0:B==="*="?W&&ne.indexOf(W)>-1:B==="$="?W&&ne.slice(-W.length)===W:B==="~="?(" "+ne.replace(St," ")+" ").indexOf(W)>-1:B==="|="?ne===W||ne.slice(0,W.length+1)===W+"-":!1):!0}},CHILD:function(R,B,W,K,ne){var Ee=R.slice(0,3)!=="nth",Re=R.slice(-4)!=="last",Oe=B==="of-type";return K===1&&ne===0?function(Le){return!!Le.parentNode}:function(Le,mt,Ze){var et,gt,qe,Pt,fn,rn=Ee!==Re?"nextSibling":"previousSibling",xn=Le.parentNode,kn=Oe&&Le.nodeName.toLowerCase(),Wi=!Ze&&!Oe,on=!1;if(xn){if(Ee){for(;rn;){for(qe=Le;qe=qe[rn];)if(Oe?w(qe,kn):qe.nodeType===1)return!1;fn=rn=R==="only"&&!fn&&"nextSibling"}return!0}if(fn=[Re?xn.firstChild:xn.lastChild],Re&&Wi){for(gt=xn[ie]||(xn[ie]={}),et=gt[R]||[],Pt=et[0]===X&&et[1],on=Pt&&et[2],qe=Pt&&xn.childNodes[Pt];qe=++Pt&&qe&&qe[rn]||(on=Pt=0)||fn.pop();)if(qe.nodeType===1&&++on&&qe===Le){gt[R]=[X,Pt,on];break}}else if(Wi&&(gt=Le[ie]||(Le[ie]={}),et=gt[R]||[],Pt=et[0]===X&&et[1],on=Pt),on===!1)for(;(qe=++Pt&&qe&&qe[rn]||(on=Pt=0)||fn.pop())&&!((Oe?w(qe,kn):qe.nodeType===1)&&++on&&(Wi&&(gt=qe[ie]||(qe[ie]={}),gt[R]=[X,on]),qe===Le)););return on-=ne,on===K||on%K===0&&on/K>=0}}},PSEUDO:function(R,B){var W,K=o.pseudos[R]||o.setFilters[R.toLowerCase()]||At.error("unsupported pseudo: "+R);return K[ie]?K(B):K.length>1?(W=[R,R,"",B],o.setFilters.hasOwnProperty(R.toLowerCase())?wn(function(ne,Ee){for(var Re,Oe=K(ne,B),Le=Oe.length;Le--;)Re=h.call(ne,Oe[Le]),ne[Re]=!(Ee[Re]=Oe[Le])}):function(ne){return K(ne,0,W)}):K}},pseudos:{not:wn(function(R){var B=[],W=[],K=Js(R.replace(k,"$1"));return K[ie]?wn(function(ne,Ee,Re,Oe){for(var Le,mt=K(ne,null,Oe,[]),Ze=ne.length;Ze--;)(Le=mt[Ze])&&(ne[Ze]=!(Ee[Ze]=Le))}):function(ne,Ee,Re){return B[0]=ne,K(B,null,Re,W),B[0]=null,!W.pop()}}),has:wn(function(R){return function(B){return At(R,B).length>0}}),contains:wn(function(R){return R=R.replace(Xn,qn),function(B){return(B.textContent||l.text(B)).indexOf(R)>-1}}),lang:wn(function(R){return br.test(R||"")||At.error("unsupported lang: "+R),R=R.replace(Xn,qn).toLowerCase(),function(B){var W;do if(W=I?B.lang:B.getAttribute("xml:lang")||B.getAttribute("lang"))return W=W.toLowerCase(),W===R||W.indexOf(R+"-")===0;while((B=B.parentNode)&&B.nodeType===1);return!1}}),target:function(R){var B=e.location&&e.location.hash;return B&&B.slice(1)===R.id},root:function(R){return R===F},focus:function(R){return R===su()&&E.hasFocus()&&!!(R.type||R.href||~R.tabIndex)},enabled:oo(!1),disabled:oo(!0),checked:function(R){return w(R,"input")&&!!R.checked||w(R,"option")&&!!R.selected},selected:function(R){return R.parentNode&&R.parentNode.selectedIndex,R.selected===!0},empty:function(R){for(R=R.firstChild;R;R=R.nextSibling)if(R.nodeType<6)return!1;return!0},parent:function(R){return!o.pseudos.empty(R)},header:function(R){return ii.test(R.nodeName)},input:function(R){return ni.test(R.nodeName)},button:function(R){return w(R,"input")&&R.type==="button"||w(R,"button")},text:function(R){var B;return w(R,"input")&&R.type==="text"&&((B=R.getAttribute("type"))==null||B.toLowerCase()==="text")},first:Si(function(){return[0]}),last:Si(function(R,B){return[B-1]}),eq:Si(function(R,B,W){return[W<0?W+B:W]}),even:Si(function(R,B){for(var W=0;W<B;W+=2)R.push(W);return R}),odd:Si(function(R,B){for(var W=1;W<B;W+=2)R.push(W);return R}),lt:Si(function(R,B,W){var K;for(W<0?K=W+B:W>B?K=B:K=W;--K>=0;)R.push(K);return R}),gt:Si(function(R,B,W){for(var K=W<0?W+B:W;++K<B;)R.push(K);return R})}},o.pseudos.nth=o.pseudos.eq;for(r in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[r]=au(r);for(r in{submit:!0,reset:!0})o.pseudos[r]=ou(r);function lo(){}lo.prototype=o.filters=o.pseudos,o.setFilters=new lo;function Tr(R,B){var W,K,ne,Ee,Re,Oe,Le,mt=yt[R+" "];if(mt)return B?0:mt.slice(0);for(Re=R,Oe=[],Le=o.preFilter;Re;){(!W||(K=Bt.exec(Re)))&&(K&&(Re=Re.slice(K[0].length)||Re),Oe.push(ne=[])),W=!1,(K=Er.exec(Re))&&(W=K.shift(),ne.push({value:W,type:K[0].replace(k," ")}),Re=Re.slice(W.length));for(Ee in o.filter)(K=zn[Ee].exec(Re))&&(!Le[Ee]||(K=Le[Ee](K)))&&(W=K.shift(),ne.push({value:W,type:Ee,matches:K}),Re=Re.slice(W.length));if(!W)break}return B?Re.length:Re?At.error(R):yt(R,Oe).slice(0)}function jr(R){for(var B=0,W=R.length,K="";B<W;B++)K+=R[B].value;return K}function Yr(R,B,W){var K=B.dir,ne=B.next,Ee=ne||K,Re=W&&Ee==="parentNode",Oe=ye++;return B.first?function(Le,mt,Ze){for(;Le=Le[K];)if(Le.nodeType===1||Re)return R(Le,mt,Ze);return!1}:function(Le,mt,Ze){var et,gt,qe=[X,Oe];if(Ze){for(;Le=Le[K];)if((Le.nodeType===1||Re)&&R(Le,mt,Ze))return!0}else for(;Le=Le[K];)if(Le.nodeType===1||Re)if(gt=Le[ie]||(Le[ie]={}),ne&&w(Le,ne))Le=Le[K]||Le;else{if((et=gt[Ee])&&et[0]===X&&et[1]===Oe)return qe[2]=et[2];if(gt[Ee]=qe,qe[2]=R(Le,mt,Ze))return!0}return!1}}function $s(R){return R.length>1?function(B,W,K){for(var ne=R.length;ne--;)if(!R[ne](B,W,K))return!1;return!0}:R[0]}function lu(R,B,W){for(var K=0,ne=B.length;K<ne;K++)At(R,B[K],W);return W}function $r(R,B,W,K,ne){for(var Ee,Re=[],Oe=0,Le=R.length,mt=B!=null;Oe<Le;Oe++)(Ee=R[Oe])&&(!W||W(Ee,K,ne))&&(Re.push(Ee),mt&&B.push(Oe));return Re}function Ks(R,B,W,K,ne,Ee){return K&&!K[ie]&&(K=Ks(K)),ne&&!ne[ie]&&(ne=Ks(ne,Ee)),wn(function(Re,Oe,Le,mt){var Ze,et,gt,qe,Pt=[],fn=[],rn=Oe.length,xn=Re||lu(B||"*",Le.nodeType?[Le]:Le,[]),kn=R&&(Re||!B)?$r(xn,Pt,R,Le,mt):xn;if(W?(qe=ne||(Re?R:rn||K)?[]:Oe,W(kn,qe,Le,mt)):qe=kn,K)for(Ze=$r(qe,fn),K(Ze,[],Le,mt),et=Ze.length;et--;)(gt=Ze[et])&&(qe[fn[et]]=!(kn[fn[et]]=gt));if(Re){if(ne||R){if(ne){for(Ze=[],et=qe.length;et--;)(gt=qe[et])&&Ze.push(kn[et]=gt);ne(null,qe=[],Ze,mt)}for(et=qe.length;et--;)(gt=qe[et])&&(Ze=ne?h.call(Re,gt):Pt[et])>-1&&(Re[Ze]=!(Oe[Ze]=gt))}}else qe=$r(qe===Oe?qe.splice(rn,qe.length):qe),ne?ne(null,Oe,qe,mt):y.apply(Oe,qe)})}function Zs(R){for(var B,W,K,ne=R.length,Ee=o.relative[R[0].type],Re=Ee||o.relative[" "],Oe=Ee?1:0,Le=Yr(function(et){return et===B},Re,!0),mt=Yr(function(et){return h.call(B,et)>-1},Re,!0),Ze=[function(et,gt,qe){var Pt=!Ee&&(qe||gt!=u)||((B=gt).nodeType?Le(et,gt,qe):mt(et,gt,qe));return B=null,Pt}];Oe<ne;Oe++)if(W=o.relative[R[Oe].type])Ze=[Yr($s(Ze),W)];else{if(W=o.filter[R[Oe].type].apply(null,R[Oe].matches),W[ie]){for(K=++Oe;K<ne&&!o.relative[R[K].type];K++);return Ks(Oe>1&&$s(Ze),Oe>1&&jr(R.slice(0,Oe-1).concat({value:R[Oe-2].type===" "?"*":""})).replace(k,"$1"),W,Oe<K&&Zs(R.slice(Oe,K)),K<ne&&Zs(R=R.slice(K)),K<ne&&jr(R))}Ze.push(W)}return $s(Ze)}function cu(R,B){var W=B.length>0,K=R.length>0,ne=function(Ee,Re,Oe,Le,mt){var Ze,et,gt,qe=0,Pt="0",fn=Ee&&[],rn=[],xn=u,kn=Ee||K&&o.find.TAG("*",mt),Wi=X+=xn==null?1:Math.random()||.1,on=kn.length;for(mt&&(u=Re==E||Re||mt);Pt!==on&&(Ze=kn[Pt])!=null;Pt++){if(K&&Ze){for(et=0,!Re&&Ze.ownerDocument!=E&&(ri(Ze),Oe=!I);gt=R[et++];)if(gt(Ze,Re||E,Oe)){y.call(Le,Ze);break}mt&&(X=Wi)}W&&((Ze=!gt&&Ze)&&qe--,Ee&&fn.push(Ze))}if(qe+=Pt,W&&Pt!==qe){for(et=0;gt=B[et++];)gt(fn,rn,Re,Oe);if(Ee){if(qe>0)for(;Pt--;)fn[Pt]||rn[Pt]||(rn[Pt]=N.call(Le));rn=$r(rn)}y.apply(Le,rn),mt&&!Ee&&rn.length>0&&qe+B.length>1&&l.uniqueSort(Le)}return mt&&(X=Wi,u=xn),fn};return W?wn(ne):ne}function Js(R,B){var W,K=[],ne=[],Ee=dt[R+" "];if(!Ee){for(B||(B=Tr(R)),W=B.length;W--;)Ee=Zs(B[W]),Ee[ie]?K.push(Ee):ne.push(Ee);Ee=dt(R,cu(ne,K)),Ee.selector=R}return Ee}function co(R,B,W,K){var ne,Ee,Re,Oe,Le,mt=typeof R=="function"&&R,Ze=!K&&Tr(R=mt.selector||R);if(W=W||[],Ze.length===1){if(Ee=Ze[0]=Ze[0].slice(0),Ee.length>2&&(Re=Ee[0]).type==="ID"&&B.nodeType===9&&I&&o.relative[Ee[1].type]){if(B=(o.find.ID(Re.matches[0].replace(Xn,qn),B)||[])[0],B)mt&&(B=B.parentNode);else return W;R=R.slice(Ee.shift().value.length)}for(ne=zn.needsContext.test(R)?0:Ee.length;ne--&&(Re=Ee[ne],!o.relative[Oe=Re.type]);)if((Le=o.find[Oe])&&(K=Le(Re.matches[0].replace(Xn,qn),js.test(Ee[0].type)&&Ys(B.parentNode)||B))){if(Ee.splice(ne,1),R=K.length&&jr(Ee),!R)return y.apply(W,K),W;break}}return(mt||Js(R,Ze))(K,B,!I,W,!B||js.test(R)&&Ys(B.parentNode)||B),W}b.sortStable=ie.split("").sort(Vt).join("")===ie,ri(),b.sortDetached=Vi(function(R){return R.compareDocumentPosition(E.createElement("fieldset"))&1}),l.find=At,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,At.compile=Js,At.select=co,At.setDocument=ri,At.tokenize=Tr,At.escape=l.escapeSelector,At.getText=l.text,At.isXML=l.isXMLDoc,At.selectors=l.expr,At.support=l.support,At.uniqueSort=l.uniqueSort})();var ce=function(r,o,u){for(var d=[],_=u!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(_&&l(r).is(u))break;d.push(r)}return d},pe=function(r,o){for(var u=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&u.push(r);return u},Me=l.expr.match.needsContext,be=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function te(r,o,u){return T(o)?l.grep(r,function(d,_){return!!o.call(d,_,d)!==u}):o.nodeType?l.grep(r,function(d){return d===o!==u}):typeof o!="string"?l.grep(r,function(d){return h.call(o,d)>-1!==u}):l.filter(o,r,u)}l.filter=function(r,o,u){var d=o[0];return u&&(r=":not("+r+")"),o.length===1&&d.nodeType===1?l.find.matchesSelector(d,r)?[d]:[]:l.find.matches(r,l.grep(o,function(_){return _.nodeType===1}))},l.fn.extend({find:function(r){var o,u,d=this.length,_=this;if(typeof r!="string")return this.pushStack(l(r).filter(function(){for(o=0;o<d;o++)if(l.contains(_[o],this))return!0}));for(u=this.pushStack([]),o=0;o<d;o++)l.find(r,_[o],u);return d>1?l.uniqueSort(u):u},filter:function(r){return this.pushStack(te(this,r||[],!1))},not:function(r){return this.pushStack(te(this,r||[],!0))},is:function(r){return!!te(this,typeof r=="string"&&Me.test(r)?l(r):r||[],!1).length}});var _e,Pe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ge=l.fn.init=function(r,o,u){var d,_;if(!r)return this;if(u=u||_e,typeof r=="string")if(r[0]==="<"&&r[r.length-1]===">"&&r.length>=3?d=[null,r,null]:d=Pe.exec(r),d&&(d[1]||!o))if(d[1]){if(o=o instanceof l?o[0]:o,l.merge(this,l.parseHTML(d[1],o&&o.nodeType?o.ownerDocument||o:m,!0)),be.test(d[1])&&l.isPlainObject(o))for(d in o)T(this[d])?this[d](o[d]):this.attr(d,o[d]);return this}else return _=m.getElementById(d[2]),_&&(this[0]=_,this.length=1),this;else return!o||o.jquery?(o||u).find(r):this.constructor(o).find(r);else{if(r.nodeType)return this[0]=r,this.length=1,this;if(T(r))return u.ready!==void 0?u.ready(r):r(l)}return l.makeArray(r,this)};Ge.prototype=l.fn,_e=l(m);var ke=/^(?:parents|prev(?:Until|All))/,it={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(r){var o=l(r,this),u=o.length;return this.filter(function(){for(var d=0;d<u;d++)if(l.contains(this,o[d]))return!0})},closest:function(r,o){var u,d=0,_=this.length,y=[],E=typeof r!="string"&&l(r);if(!Me.test(r)){for(;d<_;d++)for(u=this[d];u&&u!==o;u=u.parentNode)if(u.nodeType<11&&(E?E.index(u)>-1:u.nodeType===1&&l.find.matchesSelector(u,r))){y.push(u);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(r){return r?typeof r=="string"?h.call(l(r),this[0]):h.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}});function rt(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}l.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return ce(r,"parentNode")},parentsUntil:function(r,o,u){return ce(r,"parentNode",u)},next:function(r){return rt(r,"nextSibling")},prev:function(r){return rt(r,"previousSibling")},nextAll:function(r){return ce(r,"nextSibling")},prevAll:function(r){return ce(r,"previousSibling")},nextUntil:function(r,o,u){return ce(r,"nextSibling",u)},prevUntil:function(r,o,u){return ce(r,"previousSibling",u)},siblings:function(r){return pe((r.parentNode||{}).firstChild,r)},children:function(r){return pe(r.firstChild)},contents:function(r){return r.contentDocument!=null&&s(r.contentDocument)?r.contentDocument:(w(r,"template")&&(r=r.content||r),l.merge([],r.childNodes))}},function(r,o){l.fn[r]=function(u,d){var _=l.map(this,o,u);return r.slice(-5)!=="Until"&&(d=u),d&&typeof d=="string"&&(_=l.filter(d,_)),this.length>1&&(it[r]||l.uniqueSort(_),ke.test(r)&&_.reverse()),this.pushStack(_)}});var He=/[^\x20\t\r\n\f]+/g;function vt(r){var o={};return l.each(r.match(He)||[],function(u,d){o[d]=!0}),o}l.Callbacks=function(r){r=typeof r=="string"?vt(r):l.extend({},r);var o,u,d,_,y=[],E=[],F=-1,I=function(){for(_=_||r.once,d=o=!0;E.length;F=-1)for(u=E.shift();++F<y.length;)y[F].apply(u[0],u[1])===!1&&r.stopOnFalse&&(F=y.length,u=!1);r.memory||(u=!1),o=!1,_&&(u?y=[]:y="")},z={add:function(){return y&&(u&&!o&&(F=y.length-1,E.push(u)),function Q(ie){l.each(ie,function(X,ye){T(ye)?(!r.unique||!z.has(ye))&&y.push(ye):ye&&ye.length&&U(ye)!=="string"&&Q(ye)})}(arguments),u&&!o&&I()),this},remove:function(){return l.each(arguments,function(Q,ie){for(var X;(X=l.inArray(ie,y,X))>-1;)y.splice(X,1),X<=F&&F--}),this},has:function(Q){return Q?l.inArray(Q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return _=E=[],y=u="",this},disabled:function(){return!y},lock:function(){return _=E=[],!u&&!o&&(y=u=""),this},locked:function(){return!!_},fireWith:function(Q,ie){return _||(ie=ie||[],ie=[Q,ie.slice?ie.slice():ie],E.push(ie),o||I()),this},fire:function(){return z.fireWith(this,arguments),this},fired:function(){return!!d}};return z};function q(r){return r}function Ht(r){throw r}function Xe(r,o,u,d){var _;try{r&&T(_=r.promise)?_.call(r).done(o).fail(u):r&&T(_=r.then)?_.call(r,o,u):o.apply(void 0,[r].slice(d))}catch(y){u.apply(void 0,[y])}}l.extend({Deferred:function(r){var o=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],u="pending",d={state:function(){return u},always:function(){return _.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(E){l.each(o,function(F,I){var z=T(y[I[4]])&&y[I[4]];_[I[1]](function(){var Q=z&&z.apply(this,arguments);Q&&T(Q.promise)?Q.promise().progress(E.notify).done(E.resolve).fail(E.reject):E[I[0]+"With"](this,z?[Q]:arguments)})}),y=null}).promise()},then:function(y,E,F){var I=0;function z(Q,ie,X,ye){return function(){var Je=this,yt=arguments,dt=function(){var Vt,On;if(!(Q<I)){if(Vt=X.apply(Je,yt),Vt===ie.promise())throw new TypeError("Thenable self-resolution");On=Vt&&(typeof Vt=="object"||typeof Vt=="function")&&Vt.then,T(On)?ye?On.call(Vt,z(I,ie,q,ye),z(I,ie,Ht,ye)):(I++,On.call(Vt,z(I,ie,q,ye),z(I,ie,Ht,ye),z(I,ie,q,ie.notifyWith))):(X!==q&&(Je=void 0,yt=[Vt]),(ye||ie.resolveWith)(Je,yt))}},Qt=ye?dt:function(){try{dt()}catch(Vt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Vt,Qt.error),Q+1>=I&&(X!==Ht&&(Je=void 0,yt=[Vt]),ie.rejectWith(Je,yt))}};Q?Qt():(l.Deferred.getErrorHook?Qt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Qt.error=l.Deferred.getStackHook()),e.setTimeout(Qt))}}return l.Deferred(function(Q){o[0][3].add(z(0,Q,T(F)?F:q,Q.notifyWith)),o[1][3].add(z(0,Q,T(y)?y:q)),o[2][3].add(z(0,Q,T(E)?E:Ht))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},_={};return l.each(o,function(y,E){var F=E[2],I=E[5];d[E[1]]=F.add,I&&F.add(function(){u=I},o[3-y][2].disable,o[3-y][3].disable,o[0][2].lock,o[0][3].lock),F.add(E[3].fire),_[E[0]]=function(){return _[E[0]+"With"](this===_?void 0:this,arguments),this},_[E[0]+"With"]=F.fireWith}),d.promise(_),r&&r.call(_,_),_},when:function(r){var o=arguments.length,u=o,d=Array(u),_=a.call(arguments),y=l.Deferred(),E=function(F){return function(I){d[F]=this,_[F]=arguments.length>1?a.call(arguments):I,--o||y.resolveWith(d,_)}};if(o<=1&&(Xe(r,y.done(E(u)).resolve,y.reject,!o),y.state()==="pending"||T(_[u]&&_[u].then)))return y.then();for(;u--;)Xe(_[u],E(u),y.reject);return y.promise()}});var tt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(r,o){e.console&&e.console.warn&&r&&tt.test(r.name)&&e.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},l.readyException=function(r){e.setTimeout(function(){throw r})};var Fe=l.Deferred();l.fn.ready=function(r){return Fe.then(r).catch(function(o){l.readyException(o)}),this},l.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(r!==!0&&--l.readyWait>0)&&Fe.resolveWith(m,[l]))}}),l.ready.then=Fe.then;function wt(){m.removeEventListener("DOMContentLoaded",wt),e.removeEventListener("load",wt),l.ready()}m.readyState==="complete"||m.readyState!=="loading"&&!m.documentElement.doScroll?e.setTimeout(l.ready):(m.addEventListener("DOMContentLoaded",wt),e.addEventListener("load",wt));var je=function(r,o,u,d,_,y,E){var F=0,I=r.length,z=u==null;if(U(u)==="object"){_=!0;for(F in u)je(r,o,F,u[F],!0,y,E)}else if(d!==void 0&&(_=!0,T(d)||(E=!0),z&&(E?(o.call(r,d),o=null):(z=o,o=function(Q,ie,X){return z.call(l(Q),X)})),o))for(;F<I;F++)o(r[F],u,E?d:d.call(r[F],F,o(r[F],u)));return _?r:z?o.call(r):I?o(r[0],u):y},L=/^-ms-/,A=/-([a-z])/g;function Z(r,o){return o.toUpperCase()}function me(r){return r.replace(L,"ms-").replace(A,Z)}var ge=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function xe(){this.expando=l.expando+xe.uid++}xe.uid=1,xe.prototype={cache:function(r){var o=r[this.expando];return o||(o={},ge(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,u){var d,_=this.cache(r);if(typeof o=="string")_[me(o)]=u;else for(d in o)_[me(d)]=o[d];return _},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][me(o)]},access:function(r,o,u){return o===void 0||o&&typeof o=="string"&&u===void 0?this.get(r,o):(this.set(r,o,u),u!==void 0?u:o)},remove:function(r,o){var u,d=r[this.expando];if(d!==void 0){if(o!==void 0)for(Array.isArray(o)?o=o.map(me):(o=me(o),o=o in d?[o]:o.match(He)||[]),u=o.length;u--;)delete d[o[u]];(o===void 0||l.isEmptyObject(d))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!l.isEmptyObject(o)}};var ae=new xe,Se=new xe,Ie=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ye=/[A-Z]/g;function lt(r){return r==="true"?!0:r==="false"?!1:r==="null"?null:r===+r+""?+r:Ie.test(r)?JSON.parse(r):r}function ve(r,o,u){var d;if(u===void 0&&r.nodeType===1)if(d="data-"+o.replace(Ye,"-$&").toLowerCase(),u=r.getAttribute(d),typeof u=="string"){try{u=lt(u)}catch{}Se.set(r,o,u)}else u=void 0;return u}l.extend({hasData:function(r){return Se.hasData(r)||ae.hasData(r)},data:function(r,o,u){return Se.access(r,o,u)},removeData:function(r,o){Se.remove(r,o)},_data:function(r,o,u){return ae.access(r,o,u)},_removeData:function(r,o){ae.remove(r,o)}}),l.fn.extend({data:function(r,o){var u,d,_,y=this[0],E=y&&y.attributes;if(r===void 0){if(this.length&&(_=Se.get(y),y.nodeType===1&&!ae.get(y,"hasDataAttrs"))){for(u=E.length;u--;)E[u]&&(d=E[u].name,d.indexOf("data-")===0&&(d=me(d.slice(5)),ve(y,d,_[d])));ae.set(y,"hasDataAttrs",!0)}return _}return typeof r=="object"?this.each(function(){Se.set(this,r)}):je(this,function(F){var I;if(y&&F===void 0)return I=Se.get(y,r),I!==void 0||(I=ve(y,r),I!==void 0)?I:void 0;this.each(function(){Se.set(this,r,F)})},null,o,arguments.length>1,null,!0)},removeData:function(r){return this.each(function(){Se.remove(this,r)})}}),l.extend({queue:function(r,o,u){var d;if(r)return o=(o||"fx")+"queue",d=ae.get(r,o),u&&(!d||Array.isArray(u)?d=ae.access(r,o,l.makeArray(u)):d.push(u)),d||[]},dequeue:function(r,o){o=o||"fx";var u=l.queue(r,o),d=u.length,_=u.shift(),y=l._queueHooks(r,o),E=function(){l.dequeue(r,o)};_==="inprogress"&&(_=u.shift(),d--),_&&(o==="fx"&&u.unshift("inprogress"),delete y.stop,_.call(r,E,y)),!d&&y&&y.empty.fire()},_queueHooks:function(r,o){var u=o+"queueHooks";return ae.get(r,u)||ae.access(r,u,{empty:l.Callbacks("once memory").add(function(){ae.remove(r,[o+"queue",u])})})}}),l.fn.extend({queue:function(r,o){var u=2;return typeof r!="string"&&(o=r,r="fx",u--),arguments.length<u?l.queue(this[0],r):o===void 0?this:this.each(function(){var d=l.queue(this,r,o);l._queueHooks(this,r),r==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,r)})},dequeue:function(r){return this.each(function(){l.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var u,d=1,_=l.Deferred(),y=this,E=this.length,F=function(){--d||_.resolveWith(y,[y])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";E--;)u=ae.get(y[E],r+"queueHooks"),u&&u.empty&&(d++,u.empty.add(F));return F(),_.promise(o)}});var Mt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,st=new RegExp("^(?:([+-])=|)("+Mt+")([a-z%]*)$","i"),We=["Top","Right","Bottom","Left"],Be=m.documentElement,Ue=function(r){return l.contains(r.ownerDocument,r)},at={composed:!0};Be.getRootNode&&(Ue=function(r){return l.contains(r.ownerDocument,r)||r.getRootNode(at)===r.ownerDocument});var xt=function(r,o){return r=o||r,r.style.display==="none"||r.style.display===""&&Ue(r)&&l.css(r,"display")==="none"};function Dt(r,o,u,d){var _,y,E=20,F=d?function(){return d.cur()}:function(){return l.css(r,o,"")},I=F(),z=u&&u[3]||(l.cssNumber[o]?"":"px"),Q=r.nodeType&&(l.cssNumber[o]||z!=="px"&&+I)&&st.exec(l.css(r,o));if(Q&&Q[3]!==z){for(I=I/2,z=z||Q[3],Q=+I||1;E--;)l.style(r,o,Q+z),(1-y)*(1-(y=F()/I||.5))<=0&&(E=0),Q=Q/y;Q=Q*2,l.style(r,o,Q+z),u=u||[]}return u&&(Q=+Q||+I||0,_=u[1]?Q+(u[1]+1)*u[2]:+u[2],d&&(d.unit=z,d.start=Q,d.end=_)),_}var ct={};function Te(r){var o,u=r.ownerDocument,d=r.nodeName,_=ct[d];return _||(o=u.body.appendChild(u.createElement(d)),_=l.css(o,"display"),o.parentNode.removeChild(o),_==="none"&&(_="block"),ct[d]=_,_)}function O(r,o){for(var u,d,_=[],y=0,E=r.length;y<E;y++)d=r[y],d.style&&(u=d.style.display,o?(u==="none"&&(_[y]=ae.get(d,"display")||null,_[y]||(d.style.display="")),d.style.display===""&&xt(d)&&(_[y]=Te(d))):u!=="none"&&(_[y]="none",ae.set(d,"display",u)));for(y=0;y<E;y++)_[y]!=null&&(r[y].style.display=_[y]);return r}l.fn.extend({show:function(){return O(this,!0)},hide:function(){return O(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){xt(this)?l(this).show():l(this).hide()})}});var Ae=/^(?:checkbox|radio)$/i,Ce=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,$e=/^$|^module$|\/(?:java|ecma)script/i;(function(){var r=m.createDocumentFragment(),o=r.appendChild(m.createElement("div")),u=m.createElement("input");u.setAttribute("type","radio"),u.setAttribute("checked","checked"),u.setAttribute("name","t"),o.appendChild(u),b.checkClone=o.cloneNode(!0).cloneNode(!0).lastChild.checked,o.innerHTML="<textarea>x</textarea>",b.noCloneChecked=!!o.cloneNode(!0).lastChild.defaultValue,o.innerHTML="<option></option>",b.option=!!o.lastChild})();var Ne={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ne.tbody=Ne.tfoot=Ne.colgroup=Ne.caption=Ne.thead,Ne.th=Ne.td,b.option||(Ne.optgroup=Ne.option=[1,"<select multiple='multiple'>","</select>"]);function ut(r,o){var u;return typeof r.getElementsByTagName<"u"?u=r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?u=r.querySelectorAll(o||"*"):u=[],o===void 0||o&&w(r,o)?l.merge([r],u):u}function Et(r,o){for(var u=0,d=r.length;u<d;u++)ae.set(r[u],"globalEval",!o||ae.get(o[u],"globalEval"))}var zt=/<|&#?\w+;/;function jt(r,o,u,d,_){for(var y,E,F,I,z,Q,ie=o.createDocumentFragment(),X=[],ye=0,Je=r.length;ye<Je;ye++)if(y=r[ye],y||y===0)if(U(y)==="object")l.merge(X,y.nodeType?[y]:y);else if(!zt.test(y))X.push(o.createTextNode(y));else{for(E=E||ie.appendChild(o.createElement("div")),F=(Ce.exec(y)||["",""])[1].toLowerCase(),I=Ne[F]||Ne._default,E.innerHTML=I[1]+l.htmlPrefilter(y)+I[2],Q=I[0];Q--;)E=E.lastChild;l.merge(X,E.childNodes),E=ie.firstChild,E.textContent=""}for(ie.textContent="",ye=0;y=X[ye++];){if(d&&l.inArray(y,d)>-1){_&&_.push(y);continue}if(z=Ue(y),E=ut(ie.appendChild(y),"script"),z&&Et(E),u)for(Q=0;y=E[Q++];)$e.test(y.type||"")&&u.push(y)}return ie}var Tt=/^([^.]*)(?:\.(.+)|)/;function Ft(){return!0}function Kt(){return!1}function Oi(r,o,u,d,_,y){var E,F;if(typeof o=="object"){typeof u!="string"&&(d=d||u,u=void 0);for(F in o)Oi(r,F,u,d,o[F],y);return r}if(d==null&&_==null?(_=u,d=u=void 0):_==null&&(typeof u=="string"?(_=d,d=void 0):(_=d,d=u,u=void 0)),_===!1)_=Kt;else if(!_)return r;return y===1&&(E=_,_=function(I){return l().off(I),E.apply(this,arguments)},_.guid=E.guid||(E.guid=l.guid++)),r.each(function(){l.event.add(this,o,_,d,u)})}l.event={global:{},add:function(r,o,u,d,_){var y,E,F,I,z,Q,ie,X,ye,Je,yt,dt=ae.get(r);if(ge(r))for(u.handler&&(y=u,u=y.handler,_=y.selector),_&&l.find.matchesSelector(Be,_),u.guid||(u.guid=l.guid++),(I=dt.events)||(I=dt.events=Object.create(null)),(E=dt.handle)||(E=dt.handle=function(Qt){return typeof l<"u"&&l.event.triggered!==Qt.type?l.event.dispatch.apply(r,arguments):void 0}),o=(o||"").match(He)||[""],z=o.length;z--;)F=Tt.exec(o[z])||[],ye=yt=F[1],Je=(F[2]||"").split(".").sort(),ye&&(ie=l.event.special[ye]||{},ye=(_?ie.delegateType:ie.bindType)||ye,ie=l.event.special[ye]||{},Q=l.extend({type:ye,origType:yt,data:d,handler:u,guid:u.guid,selector:_,needsContext:_&&l.expr.match.needsContext.test(_),namespace:Je.join(".")},y),(X=I[ye])||(X=I[ye]=[],X.delegateCount=0,(!ie.setup||ie.setup.call(r,d,Je,E)===!1)&&r.addEventListener&&r.addEventListener(ye,E)),ie.add&&(ie.add.call(r,Q),Q.handler.guid||(Q.handler.guid=u.guid)),_?X.splice(X.delegateCount++,0,Q):X.push(Q),l.event.global[ye]=!0)},remove:function(r,o,u,d,_){var y,E,F,I,z,Q,ie,X,ye,Je,yt,dt=ae.hasData(r)&&ae.get(r);if(!(!dt||!(I=dt.events))){for(o=(o||"").match(He)||[""],z=o.length;z--;){if(F=Tt.exec(o[z])||[],ye=yt=F[1],Je=(F[2]||"").split(".").sort(),!ye){for(ye in I)l.event.remove(r,ye+o[z],u,d,!0);continue}for(ie=l.event.special[ye]||{},ye=(d?ie.delegateType:ie.bindType)||ye,X=I[ye]||[],F=F[2]&&new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"),E=y=X.length;y--;)Q=X[y],(_||yt===Q.origType)&&(!u||u.guid===Q.guid)&&(!F||F.test(Q.namespace))&&(!d||d===Q.selector||d==="**"&&Q.selector)&&(X.splice(y,1),Q.selector&&X.delegateCount--,ie.remove&&ie.remove.call(r,Q));E&&!X.length&&((!ie.teardown||ie.teardown.call(r,Je,dt.handle)===!1)&&l.removeEvent(r,ye,dt.handle),delete I[ye])}l.isEmptyObject(I)&&ae.remove(r,"handle events")}},dispatch:function(r){var o,u,d,_,y,E,F=new Array(arguments.length),I=l.event.fix(r),z=(ae.get(this,"events")||Object.create(null))[I.type]||[],Q=l.event.special[I.type]||{};for(F[0]=I,o=1;o<arguments.length;o++)F[o]=arguments[o];if(I.delegateTarget=this,!(Q.preDispatch&&Q.preDispatch.call(this,I)===!1)){for(E=l.event.handlers.call(this,I,z),o=0;(_=E[o++])&&!I.isPropagationStopped();)for(I.currentTarget=_.elem,u=0;(y=_.handlers[u++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||y.namespace===!1||I.rnamespace.test(y.namespace))&&(I.handleObj=y,I.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(_.elem,F),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return Q.postDispatch&&Q.postDispatch.call(this,I),I.result}},handlers:function(r,o){var u,d,_,y,E,F=[],I=o.delegateCount,z=r.target;if(I&&z.nodeType&&!(r.type==="click"&&r.button>=1)){for(;z!==this;z=z.parentNode||this)if(z.nodeType===1&&!(r.type==="click"&&z.disabled===!0)){for(y=[],E={},u=0;u<I;u++)d=o[u],_=d.selector+" ",E[_]===void 0&&(E[_]=d.needsContext?l(_,this).index(z)>-1:l.find(_,this,null,[z]).length),E[_]&&y.push(d);y.length&&F.push({elem:z,handlers:y})}}return z=this,I<o.length&&F.push({elem:z,handlers:o.slice(I)}),F},addProp:function(r,o){Object.defineProperty(l.Event.prototype,r,{enumerable:!0,configurable:!0,get:T(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(u){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:u})}})},fix:function(r){return r[l.expando]?r:new l.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Ae.test(o.type)&&o.click&&w(o,"input")&&Bi(o,"click",!0),!1},trigger:function(r){var o=this||r;return Ae.test(o.type)&&o.click&&w(o,"input")&&Bi(o,"click"),!0},_default:function(r){var o=r.target;return Ae.test(o.type)&&o.click&&w(o,"input")&&ae.get(o,"click")||w(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}};function Bi(r,o,u){if(!u){ae.get(r,o)===void 0&&l.event.add(r,o,Ft);return}ae.set(r,o,!1),l.event.add(r,o,{namespace:!1,handler:function(d){var _,y=ae.get(this,o);if(d.isTrigger&1&&this[o]){if(y)(l.event.special[o]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ae.set(this,o,y),this[o](),_=ae.get(this,o),ae.set(this,o,!1),y!==_)return d.stopImmediatePropagation(),d.preventDefault(),_}else y&&(ae.set(this,o,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Ft)}})}l.removeEvent=function(r,o,u){r.removeEventListener&&r.removeEventListener(o,u)},l.Event=function(r,o){if(!(this instanceof l.Event))return new l.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?Ft:Kt,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&l.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:Kt,isPropagationStopped:Kt,isImmediatePropagationStopped:Kt,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=Ft,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=Ft,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=Ft,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(r,o){function u(d){if(m.documentMode){var _=ae.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,_(d),y.target===y.currentTarget&&_(y)}else l.event.simulate(o,d.target,l.event.fix(d))}l.event.special[r]={setup:function(){var d;if(Bi(this,r,!0),m.documentMode)d=ae.get(this,o),d||this.addEventListener(o,u),ae.set(this,o,(d||0)+1);else return!1},trigger:function(){return Bi(this,r),!0},teardown:function(){var d;if(m.documentMode)d=ae.get(this,o)-1,d?ae.set(this,o,d):(this.removeEventListener(o,u),ae.remove(this,o));else return!1},_default:function(d){return ae.get(d.target,r)},delegateType:o},l.event.special[o]={setup:function(){var d=this.ownerDocument||this.document||this,_=m.documentMode?this:d,y=ae.get(_,o);y||(m.documentMode?this.addEventListener(o,u):d.addEventListener(r,u,!0)),ae.set(_,o,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,_=m.documentMode?this:d,y=ae.get(_,o)-1;y?ae.set(_,o,y):(m.documentMode?this.removeEventListener(o,u):d.removeEventListener(r,u,!0),ae.remove(_,o))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){l.event.special[r]={delegateType:o,bindType:o,handle:function(u){var d,_=this,y=u.relatedTarget,E=u.handleObj;return(!y||y!==_&&!l.contains(_,y))&&(u.type=E.origType,d=E.handler.apply(this,arguments),u.type=o),d}}}),l.fn.extend({on:function(r,o,u,d){return Oi(this,r,o,u,d)},one:function(r,o,u,d){return Oi(this,r,o,u,d,1)},off:function(r,o,u){var d,_;if(r&&r.preventDefault&&r.handleObj)return d=r.handleObj,l(r.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof r=="object"){for(_ in r)this.off(_,o,r[_]);return this}return(o===!1||typeof o=="function")&&(u=o,o=void 0),u===!1&&(u=Kt),this.each(function(){l.event.remove(this,r,u,o)})}});var Hi=/<script|<style|<link/i,Gr=/checked\s*(?:[^=]|=\s*.checked.)/i,zi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function vr(r,o){return w(r,"table")&&w(o.nodeType!==11?o:o.firstChild,"tr")&&l(r).children("tbody")[0]||r}function Vr(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function Fs(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Wr(r,o){var u,d,_,y,E,F,I;if(o.nodeType===1){if(ae.hasData(r)&&(y=ae.get(r),I=y.events,I)){ae.remove(o,"handle events");for(_ in I)for(u=0,d=I[_].length;u<d;u++)l.event.add(o,_,I[_][u])}Se.hasData(r)&&(E=Se.access(r),F=l.extend({},E),Se.set(o,F))}}function Os(r,o){var u=o.nodeName.toLowerCase();u==="input"&&Ae.test(r.type)?o.checked=r.checked:(u==="input"||u==="textarea")&&(o.defaultValue=r.defaultValue)}function C(r,o,u,d){o=f(o);var _,y,E,F,I,z,Q=0,ie=r.length,X=ie-1,ye=o[0],Je=T(ye);if(Je||ie>1&&typeof ye=="string"&&!b.checkClone&&Gr.test(ye))return r.each(function(yt){var dt=r.eq(yt);Je&&(o[0]=ye.call(this,yt,dt.html())),C(dt,o,u,d)});if(ie&&(_=jt(o,r[0].ownerDocument,!1,r,d),y=_.firstChild,_.childNodes.length===1&&(_=y),y||d)){for(E=l.map(ut(_,"script"),Vr),F=E.length;Q<ie;Q++)I=_,Q!==X&&(I=l.clone(I,!0,!0),F&&l.merge(E,ut(I,"script"))),u.call(r[Q],I,Q);if(F)for(z=E[E.length-1].ownerDocument,l.map(E,Fs),Q=0;Q<F;Q++)I=E[Q],$e.test(I.type||"")&&!ae.access(I,"globalEval")&&l.contains(z,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},z):P(I.textContent.replace(zi,""),I,z))}return r}function V(r,o,u){for(var d,_=o?l.filter(o,r):r,y=0;(d=_[y])!=null;y++)!u&&d.nodeType===1&&l.cleanData(ut(d)),d.parentNode&&(u&&Ue(d)&&Et(ut(d,"script")),d.parentNode.removeChild(d));return r}l.extend({htmlPrefilter:function(r){return r},clone:function(r,o,u){var d,_,y,E,F=r.cloneNode(!0),I=Ue(r);if(!b.noCloneChecked&&(r.nodeType===1||r.nodeType===11)&&!l.isXMLDoc(r))for(E=ut(F),y=ut(r),d=0,_=y.length;d<_;d++)Os(y[d],E[d]);if(o)if(u)for(y=y||ut(r),E=E||ut(F),d=0,_=y.length;d<_;d++)Wr(y[d],E[d]);else Wr(r,F);return E=ut(F,"script"),E.length>0&&Et(E,!I&&ut(r,"script")),F},cleanData:function(r){for(var o,u,d,_=l.event.special,y=0;(u=r[y])!==void 0;y++)if(ge(u)){if(o=u[ae.expando]){if(o.events)for(d in o.events)_[d]?l.event.remove(u,d):l.removeEvent(u,d,o.handle);u[ae.expando]=void 0}u[Se.expando]&&(u[Se.expando]=void 0)}}}),l.fn.extend({detach:function(r){return V(this,r,!0)},remove:function(r){return V(this,r)},text:function(r){return je(this,function(o){return o===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=o)})},null,r,arguments.length)},append:function(){return C(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=vr(this,r);o.appendChild(r)}})},prepend:function(){return C(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=vr(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return C(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return C(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(l.cleanData(ut(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r??!1,o=o??r,this.map(function(){return l.clone(this,r,o)})},html:function(r){return je(this,function(o){var u=this[0]||{},d=0,_=this.length;if(o===void 0&&u.nodeType===1)return u.innerHTML;if(typeof o=="string"&&!Hi.test(o)&&!Ne[(Ce.exec(o)||["",""])[1].toLowerCase()]){o=l.htmlPrefilter(o);try{for(;d<_;d++)u=this[d]||{},u.nodeType===1&&(l.cleanData(ut(u,!1)),u.innerHTML=o);u=0}catch{}}u&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return C(this,arguments,function(o){var u=this.parentNode;l.inArray(this,r)<0&&(l.cleanData(ut(this)),u&&u.replaceChild(o,this))},r)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){l.fn[r]=function(u){for(var d,_=[],y=l(u),E=y.length-1,F=0;F<=E;F++)d=F===E?this:this.clone(!0),l(y[F])[o](d),c.apply(_,d.get());return this.pushStack(_)}});var $=new RegExp("^("+Mt+")(?!px)[a-z%]+$","i"),J=/^--/,Y=function(r){var o=r.ownerDocument.defaultView;return(!o||!o.opener)&&(o=e),o.getComputedStyle(r)},De=function(r,o,u){var d,_,y={};for(_ in o)y[_]=r.style[_],r.style[_]=o[_];d=u.call(r);for(_ in o)r.style[_]=y[_];return d},ze=new RegExp(We.join("|"),"i");(function(){function r(){if(z){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",z.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Be.appendChild(I).appendChild(z);var Q=e.getComputedStyle(z);u=Q.top!=="1%",F=o(Q.marginLeft)===12,z.style.right="60%",y=o(Q.right)===36,d=o(Q.width)===36,z.style.position="absolute",_=o(z.offsetWidth/3)===12,Be.removeChild(I),z=null}}function o(Q){return Math.round(parseFloat(Q))}var u,d,_,y,E,F,I=m.createElement("div"),z=m.createElement("div");z.style&&(z.style.backgroundClip="content-box",z.cloneNode(!0).style.backgroundClip="",b.clearCloneStyle=z.style.backgroundClip==="content-box",l.extend(b,{boxSizingReliable:function(){return r(),d},pixelBoxStyles:function(){return r(),y},pixelPosition:function(){return r(),u},reliableMarginLeft:function(){return r(),F},scrollboxSize:function(){return r(),_},reliableTrDimensions:function(){var Q,ie,X,ye;return E==null&&(Q=m.createElement("table"),ie=m.createElement("tr"),X=m.createElement("div"),Q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",ie.style.cssText="box-sizing:content-box;border:1px solid",ie.style.height="1px",X.style.height="9px",X.style.display="block",Be.appendChild(Q).appendChild(ie).appendChild(X),ye=e.getComputedStyle(ie),E=parseInt(ye.height,10)+parseInt(ye.borderTopWidth,10)+parseInt(ye.borderBottomWidth,10)===ie.offsetHeight,Be.removeChild(Q)),E}}))})();function Ve(r,o,u){var d,_,y,E,F=J.test(o),I=r.style;return u=u||Y(r),u&&(E=u.getPropertyValue(o)||u[o],F&&E&&(E=E.replace(k,"$1")||void 0),E===""&&!Ue(r)&&(E=l.style(r,o)),!b.pixelBoxStyles()&&$.test(E)&&ze.test(o)&&(d=I.width,_=I.minWidth,y=I.maxWidth,I.minWidth=I.maxWidth=I.width=E,E=u.width,I.width=d,I.minWidth=_,I.maxWidth=y)),E!==void 0?E+"":E}function Ke(r,o){return{get:function(){if(r()){delete this.get;return}return(this.get=o).apply(this,arguments)}}}var ot=["Webkit","Moz","ms"],Qe=m.createElement("div").style,nt={};function Nt(r){for(var o=r[0].toUpperCase()+r.slice(1),u=ot.length;u--;)if(r=ot[u]+o,r in Qe)return r}function Zt(r){var o=l.cssProps[r]||nt[r];return o||(r in Qe?r:nt[r]=Nt(r)||r)}var kt=/^(none|table(?!-c[ea]).+)/,bn={position:"absolute",visibility:"hidden",display:"block"},Lt={letterSpacing:"0",fontWeight:"400"};function ft(r,o,u){var d=st.exec(o);return d?Math.max(0,d[2]-(u||0))+(d[3]||"px"):o}function _i(r,o,u,d,_,y){var E=o==="width"?1:0,F=0,I=0,z=0;if(u===(d?"border":"content"))return 0;for(;E<4;E+=2)u==="margin"&&(z+=l.css(r,u+We[E],!0,_)),d?(u==="content"&&(I-=l.css(r,"padding"+We[E],!0,_)),u!=="margin"&&(I-=l.css(r,"border"+We[E]+"Width",!0,_))):(I+=l.css(r,"padding"+We[E],!0,_),u!=="padding"?I+=l.css(r,"border"+We[E]+"Width",!0,_):F+=l.css(r,"border"+We[E]+"Width",!0,_));return!d&&y>=0&&(I+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-y-I-F-.5))||0),I+z}function Ut(r,o,u){var d=Y(r),_=!b.boxSizingReliable()||u,y=_&&l.css(r,"boxSizing",!1,d)==="border-box",E=y,F=Ve(r,o,d),I="offset"+o[0].toUpperCase()+o.slice(1);if($.test(F)){if(!u)return F;F="auto"}return(!b.boxSizingReliable()&&y||!b.reliableTrDimensions()&&w(r,"tr")||F==="auto"||!parseFloat(F)&&l.css(r,"display",!1,d)==="inline")&&r.getClientRects().length&&(y=l.css(r,"boxSizing",!1,d)==="border-box",E=I in r,E&&(F=r[I])),F=parseFloat(F)||0,F+_i(r,o,u||(y?"border":"content"),E,d,F)+"px"}l.extend({cssHooks:{opacity:{get:function(r,o){if(o){var u=Ve(r,"opacity");return u===""?"1":u}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(r,o,u,d){if(!(!r||r.nodeType===3||r.nodeType===8||!r.style)){var _,y,E,F=me(o),I=J.test(o),z=r.style;if(I||(o=Zt(F)),E=l.cssHooks[o]||l.cssHooks[F],u!==void 0){if(y=typeof u,y==="string"&&(_=st.exec(u))&&_[1]&&(u=Dt(r,o,_),y="number"),u==null||u!==u)return;y==="number"&&!I&&(u+=_&&_[3]||(l.cssNumber[F]?"":"px")),!b.clearCloneStyle&&u===""&&o.indexOf("background")===0&&(z[o]="inherit"),(!E||!("set"in E)||(u=E.set(r,u,d))!==void 0)&&(I?z.setProperty(o,u):z[o]=u)}else return E&&"get"in E&&(_=E.get(r,!1,d))!==void 0?_:z[o]}},css:function(r,o,u,d){var _,y,E,F=me(o),I=J.test(o);return I||(o=Zt(F)),E=l.cssHooks[o]||l.cssHooks[F],E&&"get"in E&&(_=E.get(r,!0,u)),_===void 0&&(_=Ve(r,o,d)),_==="normal"&&o in Lt&&(_=Lt[o]),u===""||u?(y=parseFloat(_),u===!0||isFinite(y)?y||0:_):_}}),l.each(["height","width"],function(r,o){l.cssHooks[o]={get:function(u,d,_){if(d)return kt.test(l.css(u,"display"))&&(!u.getClientRects().length||!u.getBoundingClientRect().width)?De(u,bn,function(){return Ut(u,o,_)}):Ut(u,o,_)},set:function(u,d,_){var y,E=Y(u),F=!b.scrollboxSize()&&E.position==="absolute",I=F||_,z=I&&l.css(u,"boxSizing",!1,E)==="border-box",Q=_?_i(u,o,_,z,E):0;return z&&F&&(Q-=Math.ceil(u["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(E[o])-_i(u,o,"border",!1,E)-.5)),Q&&(y=st.exec(d))&&(y[3]||"px")!=="px"&&(u.style[o]=d,d=l.css(u,o)),ft(u,d,Q)}}}),l.cssHooks.marginLeft=Ke(b.reliableMarginLeft,function(r,o){if(o)return(parseFloat(Ve(r,"marginLeft"))||r.getBoundingClientRect().left-De(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(r,o){l.cssHooks[r+o]={expand:function(u){for(var d=0,_={},y=typeof u=="string"?u.split(" "):[u];d<4;d++)_[r+We[d]+o]=y[d]||y[d-2]||y[0];return _}},r!=="margin"&&(l.cssHooks[r+o].set=ft)}),l.fn.extend({css:function(r,o){return je(this,function(u,d,_){var y,E,F={},I=0;if(Array.isArray(d)){for(y=Y(u),E=d.length;I<E;I++)F[d[I]]=l.css(u,d[I],!1,y);return F}return _!==void 0?l.style(u,d,_):l.css(u,d)},r,o,arguments.length>1)}});function Ot(r,o,u,d,_){return new Ot.prototype.init(r,o,u,d,_)}l.Tween=Ot,Ot.prototype={constructor:Ot,init:function(r,o,u,d,_,y){this.elem=r,this.prop=u,this.easing=_||l.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[u]?"":"px")},cur:function(){var r=Ot.propHooks[this.prop];return r&&r.get?r.get(this):Ot.propHooks._default.get(this)},run:function(r){var o,u=Ot.propHooks[this.prop];return this.options.duration?this.pos=o=l.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),u&&u.set?u.set(this):Ot.propHooks._default.set(this),this}},Ot.prototype.init.prototype=Ot.prototype,Ot.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=l.css(r.elem,r.prop,""),!o||o==="auto"?0:o)},set:function(r){l.fx.step[r.prop]?l.fx.step[r.prop](r):r.elem.nodeType===1&&(l.cssHooks[r.prop]||r.elem.style[Zt(r.prop)]!=null)?l.style(r.elem,r.prop,r.now+r.unit):r.elem[r.prop]=r.now}}},Ot.propHooks.scrollTop=Ot.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},l.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},l.fx=Ot.prototype.init,l.fx.step={};var Wn,Fn,xr=/^(?:toggle|show|hide)$/,Yt=/queueHooks$/;function Tn(){Fn&&(m.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Tn):e.setTimeout(Tn,l.fx.interval),l.fx.tick())}function ki(){return e.setTimeout(function(){Wn=void 0}),Wn=Date.now()}function Jt(r,o){var u,d=0,_={height:r};for(o=o?1:0;d<4;d+=2-o)u=We[d],_["margin"+u]=_["padding"+u]=r;return o&&(_.opacity=_.width=r),_}function Gi(r,o,u){for(var d,_=(An.tweeners[o]||[]).concat(An.tweeners["*"]),y=0,E=_.length;y<E;y++)if(d=_[y].call(u,o,r))return d}function Bs(r,o,u){var d,_,y,E,F,I,z,Q,ie="width"in o||"height"in o,X=this,ye={},Je=r.style,yt=r.nodeType&&xt(r),dt=ae.get(r,"fxshow");u.queue||(E=l._queueHooks(r,"fx"),E.unqueued==null&&(E.unqueued=0,F=E.empty.fire,E.empty.fire=function(){E.unqueued||F()}),E.unqueued++,X.always(function(){X.always(function(){E.unqueued--,l.queue(r,"fx").length||E.empty.fire()})}));for(d in o)if(_=o[d],xr.test(_)){if(delete o[d],y=y||_==="toggle",_===(yt?"hide":"show"))if(_==="show"&&dt&&dt[d]!==void 0)yt=!0;else continue;ye[d]=dt&&dt[d]||l.style(r,d)}if(I=!l.isEmptyObject(o),!(!I&&l.isEmptyObject(ye))){ie&&r.nodeType===1&&(u.overflow=[Je.overflow,Je.overflowX,Je.overflowY],z=dt&&dt.display,z==null&&(z=ae.get(r,"display")),Q=l.css(r,"display"),Q==="none"&&(z?Q=z:(O([r],!0),z=r.style.display||z,Q=l.css(r,"display"),O([r]))),(Q==="inline"||Q==="inline-block"&&z!=null)&&l.css(r,"float")==="none"&&(I||(X.done(function(){Je.display=z}),z==null&&(Q=Je.display,z=Q==="none"?"":Q)),Je.display="inline-block")),u.overflow&&(Je.overflow="hidden",X.always(function(){Je.overflow=u.overflow[0],Je.overflowX=u.overflow[1],Je.overflowY=u.overflow[2]})),I=!1;for(d in ye)I||(dt?"hidden"in dt&&(yt=dt.hidden):dt=ae.access(r,"fxshow",{display:z}),y&&(dt.hidden=!yt),yt&&O([r],!0),X.done(function(){yt||O([r]),ae.remove(r,"fxshow");for(d in ye)l.style(r,d,ye[d])})),I=Gi(yt?dt[d]:0,d,X),d in dt||(dt[d]=I.start,yt&&(I.end=I.start,I.start=0))}}function Xr(r,o){var u,d,_,y,E;for(u in r)if(d=me(u),_=o[d],y=r[u],Array.isArray(y)&&(_=y[1],y=r[u]=y[0]),u!==d&&(r[d]=y,delete r[u]),E=l.cssHooks[d],E&&"expand"in E){y=E.expand(y),delete r[d];for(u in y)u in r||(r[u]=y[u],o[u]=_)}else o[d]=_}function An(r,o,u){var d,_,y=0,E=An.prefilters.length,F=l.Deferred().always(function(){delete I.elem}),I=function(){if(_)return!1;for(var ie=Wn||ki(),X=Math.max(0,z.startTime+z.duration-ie),ye=X/z.duration||0,Je=1-ye,yt=0,dt=z.tweens.length;yt<dt;yt++)z.tweens[yt].run(Je);return F.notifyWith(r,[z,Je,X]),Je<1&&dt?X:(dt||F.notifyWith(r,[z,1,0]),F.resolveWith(r,[z]),!1)},z=F.promise({elem:r,props:l.extend({},o),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},u),originalProperties:o,originalOptions:u,startTime:Wn||ki(),duration:u.duration,tweens:[],createTween:function(ie,X){var ye=l.Tween(r,z.opts,ie,X,z.opts.specialEasing[ie]||z.opts.easing);return z.tweens.push(ye),ye},stop:function(ie){var X=0,ye=ie?z.tweens.length:0;if(_)return this;for(_=!0;X<ye;X++)z.tweens[X].run(1);return ie?(F.notifyWith(r,[z,1,0]),F.resolveWith(r,[z,ie])):F.rejectWith(r,[z,ie]),this}}),Q=z.props;for(Xr(Q,z.opts.specialEasing);y<E;y++)if(d=An.prefilters[y].call(z,r,Q,z.opts),d)return T(d.stop)&&(l._queueHooks(z.elem,z.opts.queue).stop=d.stop.bind(d)),d;return l.map(Q,Gi,z),T(z.opts.start)&&z.opts.start.call(r,z),z.progress(z.opts.progress).done(z.opts.done,z.opts.complete).fail(z.opts.fail).always(z.opts.always),l.fx.timer(l.extend(I,{elem:r,anim:z,queue:z.opts.queue})),z}l.Animation=l.extend(An,{tweeners:{"*":[function(r,o){var u=this.createTween(r,o);return Dt(u.elem,r,st.exec(o),u),u}]},tweener:function(r,o){T(r)?(o=r,r=["*"]):r=r.match(He);for(var u,d=0,_=r.length;d<_;d++)u=r[d],An.tweeners[u]=An.tweeners[u]||[],An.tweeners[u].unshift(o)},prefilters:[Bs],prefilter:function(r,o){o?An.prefilters.unshift(r):An.prefilters.push(r)}}),l.speed=function(r,o,u){var d=r&&typeof r=="object"?l.extend({},r):{complete:u||!u&&o||T(r)&&r,duration:r,easing:u&&o||o&&!T(o)&&o};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){T(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(r,o,u,d){return this.filter(xt).css("opacity",0).show().end().animate({opacity:o},r,u,d)},animate:function(r,o,u,d){var _=l.isEmptyObject(r),y=l.speed(o,u,d),E=function(){var F=An(this,l.extend({},r),y);(_||ae.get(this,"finish"))&&F.stop(!0)};return E.finish=E,_||y.queue===!1?this.each(E):this.queue(y.queue,E)},stop:function(r,o,u){var d=function(_){var y=_.stop;delete _.stop,y(u)};return typeof r!="string"&&(u=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var _=!0,y=r!=null&&r+"queueHooks",E=l.timers,F=ae.get(this);if(y)F[y]&&F[y].stop&&d(F[y]);else for(y in F)F[y]&&F[y].stop&&Yt.test(y)&&d(F[y]);for(y=E.length;y--;)E[y].elem===this&&(r==null||E[y].queue===r)&&(E[y].anim.stop(u),_=!1,E.splice(y,1));(_||!u)&&l.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,u=ae.get(this),d=u[r+"queue"],_=u[r+"queueHooks"],y=l.timers,E=d?d.length:0;for(u.finish=!0,l.queue(this,r,[]),_&&_.stop&&_.stop.call(this,!0),o=y.length;o--;)y[o].elem===this&&y[o].queue===r&&(y[o].anim.stop(!0),y.splice(o,1));for(o=0;o<E;o++)d[o]&&d[o].finish&&d[o].finish.call(this);delete u.finish})}}),l.each(["toggle","show","hide"],function(r,o){var u=l.fn[o];l.fn[o]=function(d,_,y){return d==null||typeof d=="boolean"?u.apply(this,arguments):this.animate(Jt(o,!0),d,_,y)}}),l.each({slideDown:Jt("show"),slideUp:Jt("hide"),slideToggle:Jt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){l.fn[r]=function(u,d,_){return this.animate(o,u,d,_)}}),l.timers=[],l.fx.tick=function(){var r,o=0,u=l.timers;for(Wn=Date.now();o<u.length;o++)r=u[o],!r()&&u[o]===r&&u.splice(o--,1);u.length||l.fx.stop(),Wn=void 0},l.fx.timer=function(r){l.timers.push(r),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Fn||(Fn=!0,Tn())},l.fx.stop=function(){Fn=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(r,o){return r=l.fx&&l.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(u,d){var _=e.setTimeout(u,r);d.stop=function(){e.clearTimeout(_)}})},function(){var r=m.createElement("input"),o=m.createElement("select"),u=o.appendChild(m.createElement("option"));r.type="checkbox",b.checkOn=r.value!=="",b.optSelected=u.selected,r=m.createElement("input"),r.value="t",r.type="radio",b.radioValue=r.value==="t"}();var Za,yr=l.expr.attrHandle;l.fn.extend({attr:function(r,o){return je(this,l.attr,r,o,arguments.length>1)},removeAttr:function(r){return this.each(function(){l.removeAttr(this,r)})}}),l.extend({attr:function(r,o,u){var d,_,y=r.nodeType;if(!(y===3||y===8||y===2)){if(typeof r.getAttribute>"u")return l.prop(r,o,u);if((y!==1||!l.isXMLDoc(r))&&(_=l.attrHooks[o.toLowerCase()]||(l.expr.match.bool.test(o)?Za:void 0)),u!==void 0){if(u===null){l.removeAttr(r,o);return}return _&&"set"in _&&(d=_.set(r,u,o))!==void 0?d:(r.setAttribute(o,u+""),u)}return _&&"get"in _&&(d=_.get(r,o))!==null?d:(d=l.find.attr(r,o),d??void 0)}},attrHooks:{type:{set:function(r,o){if(!b.radioValue&&o==="radio"&&w(r,"input")){var u=r.value;return r.setAttribute("type",o),u&&(r.value=u),o}}}},removeAttr:function(r,o){var u,d=0,_=o&&o.match(He);if(_&&r.nodeType===1)for(;u=_[d++];)r.removeAttribute(u)}}),Za={set:function(r,o,u){return o===!1?l.removeAttr(r,u):r.setAttribute(u,u),u}},l.each(l.expr.match.bool.source.match(/\w+/g),function(r,o){var u=yr[o]||l.find.attr;yr[o]=function(d,_,y){var E,F,I=_.toLowerCase();return y||(F=yr[I],yr[I]=E,E=u(d,_,y)!=null?I:null,yr[I]=F),E}});var Bc=/^(?:input|select|textarea|button)$/i,Hc=/^(?:a|area)$/i;l.fn.extend({prop:function(r,o){return je(this,l.prop,r,o,arguments.length>1)},removeProp:function(r){return this.each(function(){delete this[l.propFix[r]||r]})}}),l.extend({prop:function(r,o,u){var d,_,y=r.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(r))&&(o=l.propFix[o]||o,_=l.propHooks[o]),u!==void 0?_&&"set"in _&&(d=_.set(r,u,o))!==void 0?d:r[o]=u:_&&"get"in _&&(d=_.get(r,o))!==null?d:r[o]},propHooks:{tabIndex:{get:function(r){var o=l.find.attr(r,"tabindex");return o?parseInt(o,10):Bc.test(r.nodeName)||Hc.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),b.optSelected||(l.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function vi(r){var o=r.match(He)||[];return o.join(" ")}function xi(r){return r.getAttribute&&r.getAttribute("class")||""}function Hs(r){return Array.isArray(r)?r:typeof r=="string"?r.match(He)||[]:[]}l.fn.extend({addClass:function(r){var o,u,d,_,y,E;return T(r)?this.each(function(F){l(this).addClass(r.call(this,F,xi(this)))}):(o=Hs(r),o.length?this.each(function(){if(d=xi(this),u=this.nodeType===1&&" "+vi(d)+" ",u){for(y=0;y<o.length;y++)_=o[y],u.indexOf(" "+_+" ")<0&&(u+=_+" ");E=vi(u),d!==E&&this.setAttribute("class",E)}}):this)},removeClass:function(r){var o,u,d,_,y,E;return T(r)?this.each(function(F){l(this).removeClass(r.call(this,F,xi(this)))}):arguments.length?(o=Hs(r),o.length?this.each(function(){if(d=xi(this),u=this.nodeType===1&&" "+vi(d)+" ",u){for(y=0;y<o.length;y++)for(_=o[y];u.indexOf(" "+_+" ")>-1;)u=u.replace(" "+_+" "," ");E=vi(u),d!==E&&this.setAttribute("class",E)}}):this):this.attr("class","")},toggleClass:function(r,o){var u,d,_,y,E=typeof r,F=E==="string"||Array.isArray(r);return T(r)?this.each(function(I){l(this).toggleClass(r.call(this,I,xi(this),o),o)}):typeof o=="boolean"&&F?o?this.addClass(r):this.removeClass(r):(u=Hs(r),this.each(function(){if(F)for(y=l(this),_=0;_<u.length;_++)d=u[_],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(r===void 0||E==="boolean")&&(d=xi(this),d&&ae.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||r===!1?"":ae.get(this,"__className__")||""))}))},hasClass:function(r){var o,u,d=0;for(o=" "+r+" ";u=this[d++];)if(u.nodeType===1&&(" "+vi(xi(u))+" ").indexOf(o)>-1)return!0;return!1}});var zc=/\r/g;l.fn.extend({val:function(r){var o,u,d,_=this[0];return arguments.length?(d=T(r),this.each(function(y){var E;this.nodeType===1&&(d?E=r.call(this,y,l(this).val()):E=r,E==null?E="":typeof E=="number"?E+="":Array.isArray(E)&&(E=l.map(E,function(F){return F==null?"":F+""})),o=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!o||!("set"in o)||o.set(this,E,"value")===void 0)&&(this.value=E))})):_?(o=l.valHooks[_.type]||l.valHooks[_.nodeName.toLowerCase()],o&&"get"in o&&(u=o.get(_,"value"))!==void 0?u:(u=_.value,typeof u=="string"?u.replace(zc,""):u??"")):void 0}}),l.extend({valHooks:{option:{get:function(r){var o=l.find.attr(r,"value");return o??vi(l.text(r))}},select:{get:function(r){var o,u,d,_=r.options,y=r.selectedIndex,E=r.type==="select-one",F=E?null:[],I=E?y+1:_.length;for(y<0?d=I:d=E?y:0;d<I;d++)if(u=_[d],(u.selected||d===y)&&!u.disabled&&(!u.parentNode.disabled||!w(u.parentNode,"optgroup"))){if(o=l(u).val(),E)return o;F.push(o)}return F},set:function(r,o){for(var u,d,_=r.options,y=l.makeArray(o),E=_.length;E--;)d=_[E],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(u=!0);return u||(r.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=l.inArray(l(r).val(),o)>-1}},b.checkOn||(l.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})});var Sr=e.location,Ja={guid:Date.now()},zs=/\?/;l.parseXML=function(r){var o,u;if(!r||typeof r!="string")return null;try{o=new e.DOMParser().parseFromString(r,"text/xml")}catch{}return u=o&&o.getElementsByTagName("parsererror")[0],(!o||u)&&l.error("Invalid XML: "+(u?l.map(u.childNodes,function(d){return d.textContent}).join(`
`):r)),o};var Qa=/^(?:focusinfocus|focusoutblur)$/,eo=function(r){r.stopPropagation()};l.extend(l.event,{trigger:function(r,o,u,d){var _,y,E,F,I,z,Q,ie,X=[u||m],ye=v.call(r,"type")?r.type:r,Je=v.call(r,"namespace")?r.namespace.split("."):[];if(y=ie=E=u=u||m,!(u.nodeType===3||u.nodeType===8)&&!Qa.test(ye+l.event.triggered)&&(ye.indexOf(".")>-1&&(Je=ye.split("."),ye=Je.shift(),Je.sort()),I=ye.indexOf(":")<0&&"on"+ye,r=r[l.expando]?r:new l.Event(ye,typeof r=="object"&&r),r.isTrigger=d?2:3,r.namespace=Je.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Je.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=u),o=o==null?[r]:l.makeArray(o,[r]),Q=l.event.special[ye]||{},!(!d&&Q.trigger&&Q.trigger.apply(u,o)===!1))){if(!d&&!Q.noBubble&&!x(u)){for(F=Q.delegateType||ye,Qa.test(F+ye)||(y=y.parentNode);y;y=y.parentNode)X.push(y),E=y;E===(u.ownerDocument||m)&&X.push(E.defaultView||E.parentWindow||e)}for(_=0;(y=X[_++])&&!r.isPropagationStopped();)ie=y,r.type=_>1?F:Q.bindType||ye,z=(ae.get(y,"events")||Object.create(null))[r.type]&&ae.get(y,"handle"),z&&z.apply(y,o),z=I&&y[I],z&&z.apply&&ge(y)&&(r.result=z.apply(y,o),r.result===!1&&r.preventDefault());return r.type=ye,!d&&!r.isDefaultPrevented()&&(!Q._default||Q._default.apply(X.pop(),o)===!1)&&ge(u)&&I&&T(u[ye])&&!x(u)&&(E=u[I],E&&(u[I]=null),l.event.triggered=ye,r.isPropagationStopped()&&ie.addEventListener(ye,eo),u[ye](),r.isPropagationStopped()&&ie.removeEventListener(ye,eo),l.event.triggered=void 0,E&&(u[I]=E)),r.result}},simulate:function(r,o,u){var d=l.extend(new l.Event,u,{type:r,isSimulated:!0});l.event.trigger(d,null,o)}}),l.fn.extend({trigger:function(r,o){return this.each(function(){l.event.trigger(r,o,this)})},triggerHandler:function(r,o){var u=this[0];if(u)return l.event.trigger(r,o,u,!0)}});var kc=/\[\]$/,to=/\r?\n/g,Gc=/^(?:submit|button|image|reset|file)$/i,Vc=/^(?:input|select|textarea|keygen)/i;function ks(r,o,u,d){var _;if(Array.isArray(o))l.each(o,function(y,E){u||kc.test(r)?d(r,E):ks(r+"["+(typeof E=="object"&&E!=null?y:"")+"]",E,u,d)});else if(!u&&U(o)==="object")for(_ in o)ks(r+"["+_+"]",o[_],u,d);else d(r,o)}l.param=function(r,o){var u,d=[],_=function(y,E){var F=T(E)?E():E;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(F??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!l.isPlainObject(r))l.each(r,function(){_(this.name,this.value)});else for(u in r)ks(u,r[u],o,_);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=l.prop(this,"elements");return r?l.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!l(this).is(":disabled")&&Vc.test(this.nodeName)&&!Gc.test(r)&&(this.checked||!Ae.test(r))}).map(function(r,o){var u=l(this).val();return u==null?null:Array.isArray(u)?l.map(u,function(d){return{name:o.name,value:d.replace(to,`\r
`)}}):{name:o.name,value:u.replace(to,`\r
`)}}).get()}});var Wc=/%20/g,Xc=/#.*$/,qc=/([?&])_=[^&]*/,jc=/^(.*?):[ \t]*([^\r\n]*)$/mg,Yc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,$c=/^(?:GET|HEAD)$/,Kc=/^\/\//,no={},Gs={},io="*/".concat("*"),Vs=m.createElement("a");Vs.href=Sr.href;function ro(r){return function(o,u){typeof o!="string"&&(u=o,o="*");var d,_=0,y=o.toLowerCase().match(He)||[];if(T(u))for(;d=y[_++];)d[0]==="+"?(d=d.slice(1)||"*",(r[d]=r[d]||[]).unshift(u)):(r[d]=r[d]||[]).push(u)}}function so(r,o,u,d){var _={},y=r===Gs;function E(F){var I;return _[F]=!0,l.each(r[F]||[],function(z,Q){var ie=Q(o,u,d);if(typeof ie=="string"&&!y&&!_[ie])return o.dataTypes.unshift(ie),E(ie),!1;if(y)return!(I=ie)}),I}return E(o.dataTypes[0])||!_["*"]&&E("*")}function Ws(r,o){var u,d,_=l.ajaxSettings.flatOptions||{};for(u in o)o[u]!==void 0&&((_[u]?r:d||(d={}))[u]=o[u]);return d&&l.extend(!0,r,d),r}function Zc(r,o,u){for(var d,_,y,E,F=r.contents,I=r.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=r.mimeType||o.getResponseHeader("Content-Type"));if(d){for(_ in F)if(F[_]&&F[_].test(d)){I.unshift(_);break}}if(I[0]in u)y=I[0];else{for(_ in u){if(!I[0]||r.converters[_+" "+I[0]]){y=_;break}E||(E=_)}y=y||E}if(y)return y!==I[0]&&I.unshift(y),u[y]}function Jc(r,o,u,d){var _,y,E,F,I,z={},Q=r.dataTypes.slice();if(Q[1])for(E in r.converters)z[E.toLowerCase()]=r.converters[E];for(y=Q.shift();y;)if(r.responseFields[y]&&(u[r.responseFields[y]]=o),!I&&d&&r.dataFilter&&(o=r.dataFilter(o,r.dataType)),I=y,y=Q.shift(),y){if(y==="*")y=I;else if(I!=="*"&&I!==y){if(E=z[I+" "+y]||z["* "+y],!E){for(_ in z)if(F=_.split(" "),F[1]===y&&(E=z[I+" "+F[0]]||z["* "+F[0]],E)){E===!0?E=z[_]:z[_]!==!0&&(y=F[0],Q.unshift(F[1]));break}}if(E!==!0)if(E&&r.throws)o=E(o);else try{o=E(o)}catch(ie){return{state:"parsererror",error:E?ie:"No conversion from "+I+" to "+y}}}}return{state:"success",data:o}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Sr.href,type:"GET",isLocal:Yc.test(Sr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":io,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Ws(Ws(r,l.ajaxSettings),o):Ws(l.ajaxSettings,r)},ajaxPrefilter:ro(no),ajaxTransport:ro(Gs),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var u,d,_,y,E,F,I,z,Q,ie,X=l.ajaxSetup({},o),ye=X.context||X,Je=X.context&&(ye.nodeType||ye.jquery)?l(ye):l.event,yt=l.Deferred(),dt=l.Callbacks("once memory"),Qt=X.statusCode||{},Vt={},On={},Bn="canceled",_t={readyState:0,getResponseHeader:function(St){var Bt;if(I){if(!y)for(y={};Bt=jc.exec(_);)y[Bt[1].toLowerCase()+" "]=(y[Bt[1].toLowerCase()+" "]||[]).concat(Bt[2]);Bt=y[St.toLowerCase()+" "]}return Bt==null?null:Bt.join(", ")},getAllResponseHeaders:function(){return I?_:null},setRequestHeader:function(St,Bt){return I==null&&(St=On[St.toLowerCase()]=On[St.toLowerCase()]||St,Vt[St]=Bt),this},overrideMimeType:function(St){return I==null&&(X.mimeType=St),this},statusCode:function(St){var Bt;if(St)if(I)_t.always(St[_t.status]);else for(Bt in St)Qt[Bt]=[Qt[Bt],St[Bt]];return this},abort:function(St){var Bt=St||Bn;return u&&u.abort(Bt),yi(0,Bt),this}};if(yt.promise(_t),X.url=((r||X.url||Sr.href)+"").replace(Kc,Sr.protocol+"//"),X.type=o.method||o.type||X.method||X.type,X.dataTypes=(X.dataType||"*").toLowerCase().match(He)||[""],X.crossDomain==null){F=m.createElement("a");try{F.href=X.url,F.href=F.href,X.crossDomain=Vs.protocol+"//"+Vs.host!=F.protocol+"//"+F.host}catch{X.crossDomain=!0}}if(X.data&&X.processData&&typeof X.data!="string"&&(X.data=l.param(X.data,X.traditional)),so(no,X,o,_t),I)return _t;z=l.event&&X.global,z&&l.active++===0&&l.event.trigger("ajaxStart"),X.type=X.type.toUpperCase(),X.hasContent=!$c.test(X.type),d=X.url.replace(Xc,""),X.hasContent?X.data&&X.processData&&(X.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(X.data=X.data.replace(Wc,"+")):(ie=X.url.slice(d.length),X.data&&(X.processData||typeof X.data=="string")&&(d+=(zs.test(d)?"&":"?")+X.data,delete X.data),X.cache===!1&&(d=d.replace(qc,"$1"),ie=(zs.test(d)?"&":"?")+"_="+Ja.guid+++ie),X.url=d+ie),X.ifModified&&(l.lastModified[d]&&_t.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&_t.setRequestHeader("If-None-Match",l.etag[d])),(X.data&&X.hasContent&&X.contentType!==!1||o.contentType)&&_t.setRequestHeader("Content-Type",X.contentType),_t.setRequestHeader("Accept",X.dataTypes[0]&&X.accepts[X.dataTypes[0]]?X.accepts[X.dataTypes[0]]+(X.dataTypes[0]!=="*"?", "+io+"; q=0.01":""):X.accepts["*"]);for(Q in X.headers)_t.setRequestHeader(Q,X.headers[Q]);if(X.beforeSend&&(X.beforeSend.call(ye,_t,X)===!1||I))return _t.abort();if(Bn="abort",dt.add(X.complete),_t.done(X.success),_t.fail(X.error),u=so(Gs,X,o,_t),!u)yi(-1,"No Transport");else{if(_t.readyState=1,z&&Je.trigger("ajaxSend",[_t,X]),I)return _t;X.async&&X.timeout>0&&(E=e.setTimeout(function(){_t.abort("timeout")},X.timeout));try{I=!1,u.send(Vt,yi)}catch(St){if(I)throw St;yi(-1,St)}}function yi(St,Bt,Er,qs){var Hn,br,zn,ni,ii,vn=Bt;I||(I=!0,E&&e.clearTimeout(E),u=void 0,_=qs||"",_t.readyState=St>0?4:0,Hn=St>=200&&St<300||St===304,Er&&(ni=Zc(X,_t,Er)),!Hn&&l.inArray("script",X.dataTypes)>-1&&l.inArray("json",X.dataTypes)<0&&(X.converters["text script"]=function(){}),ni=Jc(X,ni,_t,Hn),Hn?(X.ifModified&&(ii=_t.getResponseHeader("Last-Modified"),ii&&(l.lastModified[d]=ii),ii=_t.getResponseHeader("etag"),ii&&(l.etag[d]=ii)),St===204||X.type==="HEAD"?vn="nocontent":St===304?vn="notmodified":(vn=ni.state,br=ni.data,zn=ni.error,Hn=!zn)):(zn=vn,(St||!vn)&&(vn="error",St<0&&(St=0))),_t.status=St,_t.statusText=(Bt||vn)+"",Hn?yt.resolveWith(ye,[br,vn,_t]):yt.rejectWith(ye,[_t,vn,zn]),_t.statusCode(Qt),Qt=void 0,z&&Je.trigger(Hn?"ajaxSuccess":"ajaxError",[_t,X,Hn?br:zn]),dt.fireWith(ye,[_t,vn]),z&&(Je.trigger("ajaxComplete",[_t,X]),--l.active||l.event.trigger("ajaxStop")))}return _t},getJSON:function(r,o,u){return l.get(r,o,u,"json")},getScript:function(r,o){return l.get(r,void 0,o,"script")}}),l.each(["get","post"],function(r,o){l[o]=function(u,d,_,y){return T(d)&&(y=y||_,_=d,d=void 0),l.ajax(l.extend({url:u,type:o,dataType:y,data:d,success:_},l.isPlainObject(u)&&u))}}),l.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),l._evalUrl=function(r,o,u){return l.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,o,u)}})},l.fn.extend({wrapAll:function(r){var o;return this[0]&&(T(r)&&(r=r.call(this[0])),o=l(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var u=this;u.firstElementChild;)u=u.firstElementChild;return u}).append(this)),this},wrapInner:function(r){return T(r)?this.each(function(o){l(this).wrapInner(r.call(this,o))}):this.each(function(){var o=l(this),u=o.contents();u.length?u.wrapAll(r):o.append(r)})},wrap:function(r){var o=T(r);return this.each(function(u){l(this).wrapAll(o?r.call(this,u):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(r){return!l.expr.pseudos.visible(r)},l.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Qc={0:200,1223:204},Mr=l.ajaxSettings.xhr();b.cors=!!Mr&&"withCredentials"in Mr,b.ajax=Mr=!!Mr,l.ajaxTransport(function(r){var o,u;if(b.cors||Mr&&!r.crossDomain)return{send:function(d,_){var y,E=r.xhr();if(E.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(y in r.xhrFields)E[y]=r.xhrFields[y];r.mimeType&&E.overrideMimeType&&E.overrideMimeType(r.mimeType),!r.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)E.setRequestHeader(y,d[y]);o=function(F){return function(){o&&(o=u=E.onload=E.onerror=E.onabort=E.ontimeout=E.onreadystatechange=null,F==="abort"?E.abort():F==="error"?typeof E.status!="number"?_(0,"error"):_(E.status,E.statusText):_(Qc[E.status]||E.status,E.statusText,(E.responseType||"text")!=="text"||typeof E.responseText!="string"?{binary:E.response}:{text:E.responseText},E.getAllResponseHeaders()))}},E.onload=o(),u=E.onerror=E.ontimeout=o("error"),E.onabort!==void 0?E.onabort=u:E.onreadystatechange=function(){E.readyState===4&&e.setTimeout(function(){o&&u()})},o=o("abort");try{E.send(r.hasContent&&r.data||null)}catch(F){if(o)throw F}},abort:function(){o&&o()}}}),l.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return l.globalEval(r),r}}}),l.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),l.ajaxTransport("script",function(r){if(r.crossDomain||r.scriptAttrs){var o,u;return{send:function(d,_){o=l("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",u=function(y){o.remove(),u=null,y&&_(y.type==="error"?404:200,y.type)}),m.head.appendChild(o[0])},abort:function(){u&&u()}}}});var ao=[],Xs=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=ao.pop()||l.expando+"_"+Ja.guid++;return this[r]=!0,r}}),l.ajaxPrefilter("json jsonp",function(r,o,u){var d,_,y,E=r.jsonp!==!1&&(Xs.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Xs.test(r.data)&&"data");if(E||r.dataTypes[0]==="jsonp")return d=r.jsonpCallback=T(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,E?r[E]=r[E].replace(Xs,"$1"+d):r.jsonp!==!1&&(r.url+=(zs.test(r.url)?"&":"?")+r.jsonp+"="+d),r.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},r.dataTypes[0]="json",_=e[d],e[d]=function(){y=arguments},u.always(function(){_===void 0?l(e).removeProp(d):e[d]=_,r[d]&&(r.jsonpCallback=o.jsonpCallback,ao.push(d)),y&&T(_)&&_(y[0]),y=_=void 0}),"script"}),b.createHTMLDocument=function(){var r=m.implementation.createHTMLDocument("").body;return r.innerHTML="<form></form><form></form>",r.childNodes.length===2}(),l.parseHTML=function(r,o,u){if(typeof r!="string")return[];typeof o=="boolean"&&(u=o,o=!1);var d,_,y;return o||(b.createHTMLDocument?(o=m.implementation.createHTMLDocument(""),d=o.createElement("base"),d.href=m.location.href,o.head.appendChild(d)):o=m),_=be.exec(r),y=!u&&[],_?[o.createElement(_[1])]:(_=jt([r],o,y),y&&y.length&&l(y).remove(),l.merge([],_.childNodes))},l.fn.load=function(r,o,u){var d,_,y,E=this,F=r.indexOf(" ");return F>-1&&(d=vi(r.slice(F)),r=r.slice(0,F)),T(o)?(u=o,o=void 0):o&&typeof o=="object"&&(_="POST"),E.length>0&&l.ajax({url:r,type:_||"GET",dataType:"html",data:o}).done(function(I){y=arguments,E.html(d?l("<div>").append(l.parseHTML(I)).find(d):I)}).always(u&&function(I,z){E.each(function(){u.apply(this,y||[I.responseText,z,I])})}),this},l.expr.pseudos.animated=function(r){return l.grep(l.timers,function(o){return r===o.elem}).length},l.offset={setOffset:function(r,o,u){var d,_,y,E,F,I,z,Q=l.css(r,"position"),ie=l(r),X={};Q==="static"&&(r.style.position="relative"),F=ie.offset(),y=l.css(r,"top"),I=l.css(r,"left"),z=(Q==="absolute"||Q==="fixed")&&(y+I).indexOf("auto")>-1,z?(d=ie.position(),E=d.top,_=d.left):(E=parseFloat(y)||0,_=parseFloat(I)||0),T(o)&&(o=o.call(r,u,l.extend({},F))),o.top!=null&&(X.top=o.top-F.top+E),o.left!=null&&(X.left=o.left-F.left+_),"using"in o?o.using.call(r,X):ie.css(X)}},l.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(_){l.offset.setOffset(this,r,_)});var o,u,d=this[0];if(d)return d.getClientRects().length?(o=d.getBoundingClientRect(),u=d.ownerDocument.defaultView,{top:o.top+u.pageYOffset,left:o.left+u.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var r,o,u,d=this[0],_={top:0,left:0};if(l.css(d,"position")==="fixed")o=d.getBoundingClientRect();else{for(o=this.offset(),u=d.ownerDocument,r=d.offsetParent||u.documentElement;r&&(r===u.body||r===u.documentElement)&&l.css(r,"position")==="static";)r=r.parentNode;r&&r!==d&&r.nodeType===1&&(_=l(r).offset(),_.top+=l.css(r,"borderTopWidth",!0),_.left+=l.css(r,"borderLeftWidth",!0))}return{top:o.top-_.top-l.css(d,"marginTop",!0),left:o.left-_.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&l.css(r,"position")==="static";)r=r.offsetParent;return r||Be})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var u=o==="pageYOffset";l.fn[r]=function(d){return je(this,function(_,y,E){var F;if(x(_)?F=_:_.nodeType===9&&(F=_.defaultView),E===void 0)return F?F[o]:_[y];F?F.scrollTo(u?F.pageXOffset:E,u?E:F.pageYOffset):_[y]=E},r,d,arguments.length)}}),l.each(["top","left"],function(r,o){l.cssHooks[o]=Ke(b.pixelPosition,function(u,d){if(d)return d=Ve(u,o),$.test(d)?l(u).position()[o]+"px":d})}),l.each({Height:"height",Width:"width"},function(r,o){l.each({padding:"inner"+r,content:o,"":"outer"+r},function(u,d){l.fn[d]=function(_,y){var E=arguments.length&&(u||typeof _!="boolean"),F=u||(_===!0||y===!0?"margin":"border");return je(this,function(I,z,Q){var ie;return x(I)?d.indexOf("outer")===0?I["inner"+r]:I.document.documentElement["client"+r]:I.nodeType===9?(ie=I.documentElement,Math.max(I.body["scroll"+r],ie["scroll"+r],I.body["offset"+r],ie["offset"+r],ie["client"+r])):Q===void 0?l.css(I,z,F):l.style(I,z,Q,F)},o,E?_:void 0,E)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){l.fn[o]=function(u){return this.on(o,u)}}),l.fn.extend({bind:function(r,o,u){return this.on(r,null,o,u)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,u,d){return this.on(o,r,u,d)},undelegate:function(r,o,u){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",u)},hover:function(r,o){return this.on("mouseenter",r).on("mouseleave",o||r)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){l.fn[o]=function(u,d){return arguments.length>0?this.on(o,null,u,d):this.trigger(o)}});var eu=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(r,o){var u,d,_;if(typeof o=="string"&&(u=r[o],o=r,r=u),!!T(r))return d=a.call(arguments,2),_=function(){return r.apply(o||this,d.concat(a.call(arguments)))},_.guid=r.guid=r.guid||l.guid++,_},l.holdReady=function(r){r?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=w,l.isFunction=T,l.isWindow=x,l.camelCase=me,l.type=U,l.now=Date.now,l.isNumeric=function(r){var o=l.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},l.trim=function(r){return r==null?"":(r+"").replace(eu,"$1")};var tu=e.jQuery,nu=e.$;return l.noConflict=function(r){return e.$===l&&(e.$=nu),r&&e.jQuery===l&&(e.jQuery=tu),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(Vl);var du=Vl.exports;const fe=fu(du);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="160",hu=0,uo=1,pu=2,Wl=1,mu=2,Jn=3,gi=0,pn=1,Qn=2,hi=0,cr=1,fo=2,ho=3,po=4,gu=5,Ri=100,_u=101,vu=102,mo=103,go=104,xu=200,yu=201,Su=202,Mu=203,Da=204,Ua=205,Eu=206,bu=207,Tu=208,Au=209,wu=210,Cu=211,Ru=212,Lu=213,Pu=214,Du=0,Uu=1,Iu=2,Ts=3,Nu=4,Fu=5,Ou=6,Bu=7,Xl=0,Hu=1,zu=2,pi=0,ku=1,Gu=2,Vu=3,Wu=4,Xu=5,qu=6,ql=300,fr=301,dr=302,Ia=303,Na=304,Ps=306,Fa=1e3,Dn=1001,Oa=1002,cn=1003,_o=1004,Qs=1005,Sn=1006,ju=1007,Dr=1008,mi=1009,Yu=1010,$u=1011,Wa=1012,jl=1013,ui=1014,fi=1015,Ur=1016,Yl=1017,$l=1018,Pi=1020,Ku=1021,Un=1023,Zu=1024,Ju=1025,Di=1026,hr=1027,Qu=1028,Kl=1029,ef=1030,Zl=1031,Jl=1033,ea=33776,ta=33777,na=33778,ia=33779,vo=35840,xo=35841,yo=35842,So=35843,Ql=36196,Mo=37492,Eo=37496,bo=37808,To=37809,Ao=37810,wo=37811,Co=37812,Ro=37813,Lo=37814,Po=37815,Do=37816,Uo=37817,Io=37818,No=37819,Fo=37820,Oo=37821,ra=36492,Bo=36494,Ho=36495,tf=36283,zo=36284,ko=36285,Go=36286,ec=3e3,Ui=3001,nf=3200,rf=3201,sf=0,af=1,En="",en="srgb",ti="srgb-linear",Xa="display-p3",Ds="display-p3-linear",As="linear",It="srgb",ws="rec709",Cs="p3",Xi=7680,Vo=519,of=512,lf=513,cf=514,tc=515,uf=516,ff=517,df=518,hf=519,Wo=35044,Xo="300 es",Ba=1035,ei=2e3,Rs=2001;class mr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,f=s.length;a<f;a++)s[a].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sa=Math.PI/180,Ha=180/Math.PI;function Nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function hn(n,e,t){return Math.max(e,Math.min(t,n))}function pf(n,e){return(n%e+e)%e}function aa(n,e,t){return(1-t)*n+t*e}function qo(n){return(n&n-1)===0&&n!==0}function za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ar(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,t=0){Rt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,f=this.y-e.y;return this.x=a*i-f*s+e.x,this.y=a*s+f*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pt{constructor(e,t,i,s,a,f,c,h,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,f,c,h,p)}set(e,t,i,s,a,f,c,h,p){const g=this.elements;return g[0]=e,g[1]=s,g[2]=c,g[3]=t,g[4]=a,g[5]=h,g[6]=i,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,f=i[0],c=i[3],h=i[6],p=i[1],g=i[4],v=i[7],S=i[2],M=i[5],b=i[8],T=s[0],x=s[3],m=s[6],D=s[1],P=s[4],U=s[7],G=s[2],H=s[5],l=s[8];return a[0]=f*T+c*D+h*G,a[3]=f*x+c*P+h*H,a[6]=f*m+c*U+h*l,a[1]=p*T+g*D+v*G,a[4]=p*x+g*P+v*H,a[7]=p*m+g*U+v*l,a[2]=S*T+M*D+b*G,a[5]=S*x+M*P+b*H,a[8]=S*m+M*U+b*l,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8];return t*f*g-t*c*p-i*a*g+i*c*h+s*a*p-s*f*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8],v=g*f-c*p,S=c*h-g*a,M=p*a-f*h,b=t*v+i*S+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(s*p-g*i)*T,e[2]=(c*i-s*f)*T,e[3]=S*T,e[4]=(g*t-s*h)*T,e[5]=(s*a-c*t)*T,e[6]=M*T,e[7]=(i*h-p*t)*T,e[8]=(f*t-i*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,f,c){const h=Math.cos(a),p=Math.sin(a);return this.set(i*h,i*p,-i*(h*f+p*c)+f+e,-s*p,s*h,-s*(-p*f+h*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(oa.makeScale(e,t)),this}rotate(e){return this.premultiply(oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oa=new pt;function nc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ls(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mf(){const n=Ls("canvas");return n.style.display="block",n}const jo={};function Pr(n){n in jo||(jo[n]=!0,console.warn(n))}const Yo=new pt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$o=new pt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Kr={[ti]:{transfer:As,primaries:ws,toReference:n=>n,fromReference:n=>n},[en]:{transfer:It,primaries:ws,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ds]:{transfer:As,primaries:Cs,toReference:n=>n.applyMatrix3($o),fromReference:n=>n.applyMatrix3(Yo)},[Xa]:{transfer:It,primaries:Cs,toReference:n=>n.convertSRGBToLinear().applyMatrix3($o),fromReference:n=>n.applyMatrix3(Yo).convertLinearToSRGB()}},gf=new Set([ti,Ds]),Ct={enabled:!0,_workingColorSpace:ti,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gf.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kr[e].toReference,s=Kr[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Kr[n].primaries},getTransfer:function(n){return n===En?As:Kr[n].transfer}};function ur(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function la(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qi;class ic{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qi===void 0&&(qi=Ls("canvas")),qi.width=e.width,qi.height=e.height;const i=qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ls("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let f=0;f<a.length;f++)a[f]=ur(a[f]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ur(t[i]/255)*255):t[i]=ur(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class rc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let f=0,c=s.length;f<c;f++)s[f].isDataTexture?a.push(ca(s[f].image)):a.push(ca(s[f]))}else a=ca(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ca(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ic.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let vf=0;class _n extends mr{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Dn,s=Dn,a=Sn,f=Dr,c=Un,h=mi,p=_n.DEFAULT_ANISOTROPY,g=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Nr(),this.name="",this.source=new rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=f,this.anisotropy=p,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===Ui?en:En),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case Dn:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case Dn:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===en?Ui:ec}set encoding(e){Pr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ui?en:En}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=ql;_n.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,i=0,s=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,f=e.elements;return this.x=f[0]*t+f[4]*i+f[8]*s+f[12]*a,this.y=f[1]*t+f[5]*i+f[9]*s+f[13]*a,this.z=f[2]*t+f[6]*i+f[10]*s+f[14]*a,this.w=f[3]*t+f[7]*i+f[11]*s+f[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,p=h[0],g=h[4],v=h[8],S=h[1],M=h[5],b=h[9],T=h[2],x=h[6],m=h[10];if(Math.abs(g-S)<.01&&Math.abs(v-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+T)<.1&&Math.abs(b+x)<.1&&Math.abs(p+M+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,U=(M+1)/2,G=(m+1)/2,H=(g+S)/4,l=(v+T)/4,he=(b+x)/4;return P>U&&P>G?P<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(P),s=H/i,a=l/i):U>G?U<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(U),i=H/s,a=he/s):G<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(G),i=l/a,s=he/a),this.set(i,s,a,t),this}let D=Math.sqrt((x-b)*(x-b)+(v-T)*(v-T)+(S-g)*(S-g));return Math.abs(D)<.001&&(D=1),this.x=(x-b)/D,this.y=(v-T)/D,this.z=(S-g)/D,this.w=Math.acos((p+M+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xf extends mr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Pr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ui?en:En),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ii extends xf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class sc extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yf extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,f,c){let h=i[s+0],p=i[s+1],g=i[s+2],v=i[s+3];const S=a[f+0],M=a[f+1],b=a[f+2],T=a[f+3];if(c===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(c===1){e[t+0]=S,e[t+1]=M,e[t+2]=b,e[t+3]=T;return}if(v!==T||h!==S||p!==M||g!==b){let x=1-c;const m=h*S+p*M+g*b+v*T,D=m>=0?1:-1,P=1-m*m;if(P>Number.EPSILON){const G=Math.sqrt(P),H=Math.atan2(G,m*D);x=Math.sin(x*H)/G,c=Math.sin(c*H)/G}const U=c*D;if(h=h*x+S*U,p=p*x+M*U,g=g*x+b*U,v=v*x+T*U,x===1-c){const G=1/Math.sqrt(h*h+p*p+g*g+v*v);h*=G,p*=G,g*=G,v*=G}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,s,a,f){const c=i[s],h=i[s+1],p=i[s+2],g=i[s+3],v=a[f],S=a[f+1],M=a[f+2],b=a[f+3];return e[t]=c*b+g*v+h*M-p*S,e[t+1]=h*b+g*S+p*v-c*M,e[t+2]=p*b+g*M+c*S-h*v,e[t+3]=g*b-c*v-h*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,f=e._order,c=Math.cos,h=Math.sin,p=c(i/2),g=c(s/2),v=c(a/2),S=h(i/2),M=h(s/2),b=h(a/2);switch(f){case"XYZ":this._x=S*g*v+p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v-S*M*b;break;case"YXZ":this._x=S*g*v+p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v+S*M*b;break;case"ZXY":this._x=S*g*v-p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v-S*M*b;break;case"ZYX":this._x=S*g*v-p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v+S*M*b;break;case"YZX":this._x=S*g*v+p*M*b,this._y=p*M*v+S*g*b,this._z=p*g*b-S*M*v,this._w=p*g*v-S*M*b;break;case"XZY":this._x=S*g*v-p*M*b,this._y=p*M*v-S*g*b,this._z=p*g*b+S*M*v,this._w=p*g*v+S*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],f=t[1],c=t[5],h=t[9],p=t[2],g=t[6],v=t[10],S=i+c+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-h)*M,this._y=(a-p)*M,this._z=(f-s)*M}else if(i>c&&i>v){const M=2*Math.sqrt(1+i-c-v);this._w=(g-h)/M,this._x=.25*M,this._y=(s+f)/M,this._z=(a+p)/M}else if(c>v){const M=2*Math.sqrt(1+c-i-v);this._w=(a-p)/M,this._x=(s+f)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+v-i-c);this._w=(f-s)/M,this._x=(a+p)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(hn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,f=e._w,c=t._x,h=t._y,p=t._z,g=t._w;return this._x=i*g+f*c+s*p-a*h,this._y=s*g+f*h+a*c-i*p,this._z=a*g+f*p+i*h-s*c,this._w=f*g-i*c-s*h-a*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,f=this._w;let c=f*e._w+i*e._x+s*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=f,this._x=i,this._y=s,this._z=a,this;const h=1-c*c;if(h<=Number.EPSILON){const M=1-t;return this._w=M*f+t*this._w,this._x=M*i+t*this._x,this._y=M*s+t*this._y,this._z=M*a+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,c),v=Math.sin((1-t)*g)/p,S=Math.sin(t*g)/p;return this._w=f*v+this._w*S,this._x=i*v+this._x*S,this._y=s*v+this._y*S,this._z=a*v+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(a),i*Math.cos(a),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,f=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*f,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*f,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*f,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,f=e.y,c=e.z,h=e.w,p=2*(f*s-c*i),g=2*(c*t-a*s),v=2*(a*i-f*t);return this.x=t+h*p+f*v-c*g,this.y=i+h*g+c*p-a*v,this.z=s+h*v+a*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,f=t.x,c=t.y,h=t.z;return this.x=s*h-a*c,this.y=a*f-i*h,this.z=i*c-s*f,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(hn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new j,Ko=new Fr;class Or{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let f=0,c=a.count;f<c;f++)e.isMesh===!0?e.getVertexPosition(f,Cn):Cn.fromBufferAttribute(a,f),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let a=0,f=s.length;a<f;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wr),Jr.subVectors(this.max,wr),ji.subVectors(e.a,wr),Yi.subVectors(e.b,wr),$i.subVectors(e.c,wr),si.subVectors(Yi,ji),ai.subVectors($i,Yi),Mi.subVectors(ji,$i);let t=[0,-si.z,si.y,0,-ai.z,ai.y,0,-Mi.z,Mi.y,si.z,0,-si.x,ai.z,0,-ai.x,Mi.z,0,-Mi.x,-si.y,si.x,0,-ai.y,ai.x,0,-Mi.y,Mi.x,0];return!fa(t,ji,Yi,$i,Jr)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,ji,Yi,$i,Jr))?!1:(Qr.crossVectors(si,ai),t=[Qr.x,Qr.y,Qr.z],fa(t,ji,Yi,$i,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new j,new j,new j,new j,new j,new j,new j,new j],Cn=new j,Zr=new Or,ji=new j,Yi=new j,$i=new j,si=new j,ai=new j,Mi=new j,wr=new j,Jr=new j,Qr=new j,Ei=new j;function fa(n,e,t,i,s){for(let a=0,f=n.length-3;a<=f;a+=3){Ei.fromArray(n,a);const c=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),h=e.dot(Ei),p=t.dot(Ei),g=i.dot(Ei);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>c)return!1}return!0}const Sf=new Or,Cr=new j,da=new j;class Br{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Sf.setFromPoints(e).getCenter(i);let s=0;for(let a=0,f=e.length;a<f;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cr.subVectors(e,this.center);const t=Cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cr.copy(e.center).add(da)),this.expandByPoint(Cr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yn=new j,ha=new j,es=new j,oi=new j,pa=new j,ts=new j,ma=new j;class qa{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ha.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),oi.copy(this.origin).sub(ha);const a=e.distanceTo(t)*.5,f=-this.direction.dot(es),c=oi.dot(this.direction),h=-oi.dot(es),p=oi.lengthSq(),g=Math.abs(1-f*f);let v,S,M,b;if(g>0)if(v=f*h-c,S=f*c-h,b=a*g,v>=0)if(S>=-b)if(S<=b){const T=1/g;v*=T,S*=T,M=v*(v+f*S+2*c)+S*(f*v+S+2*h)+p}else S=a,v=Math.max(0,-(f*S+c)),M=-v*v+S*(S+2*h)+p;else S=-a,v=Math.max(0,-(f*S+c)),M=-v*v+S*(S+2*h)+p;else S<=-b?(v=Math.max(0,-(-f*a+c)),S=v>0?-a:Math.min(Math.max(-a,-h),a),M=-v*v+S*(S+2*h)+p):S<=b?(v=0,S=Math.min(Math.max(-a,-h),a),M=S*(S+2*h)+p):(v=Math.max(0,-(f*a+c)),S=v>0?a:Math.min(Math.max(-a,-h),a),M=-v*v+S*(S+2*h)+p);else S=f>0?-a:a,v=Math.max(0,-(f*S+c)),M=-v*v+S*(S+2*h)+p;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(ha).addScaledVector(es,S),M}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,a=e.radius*e.radius;if(s>a)return null;const f=Math.sqrt(a-s),c=i-f,h=i+f;return h<0?null:c<0?this.at(h,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,f,c,h;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return p>=0?(i=(e.min.x-S.x)*p,s=(e.max.x-S.x)*p):(i=(e.max.x-S.x)*p,s=(e.min.x-S.x)*p),g>=0?(a=(e.min.y-S.y)*g,f=(e.max.y-S.y)*g):(a=(e.max.y-S.y)*g,f=(e.min.y-S.y)*g),i>f||a>s||((a>i||isNaN(i))&&(i=a),(f<s||isNaN(s))&&(s=f),v>=0?(c=(e.min.z-S.z)*v,h=(e.max.z-S.z)*v):(c=(e.max.z-S.z)*v,h=(e.min.z-S.z)*v),i>h||c>s)||((c>i||i!==i)&&(i=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,a){pa.subVectors(t,e),ts.subVectors(i,e),ma.crossVectors(pa,ts);let f=this.direction.dot(ma),c;if(f>0){if(s)return null;c=1}else if(f<0)c=-1,f=-f;else return null;oi.subVectors(this.origin,e);const h=c*this.direction.dot(ts.crossVectors(oi,ts));if(h<0)return null;const p=c*this.direction.dot(pa.cross(oi));if(p<0||h+p>f)return null;const g=-c*oi.dot(ma);return g<0?null:this.at(g/f,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(e,t,i,s,a,f,c,h,p,g,v,S,M,b,T,x){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,f,c,h,p,g,v,S,M,b,T,x)}set(e,t,i,s,a,f,c,h,p,g,v,S,M,b,T,x){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=a,m[5]=f,m[9]=c,m[13]=h,m[2]=p,m[6]=g,m[10]=v,m[14]=S,m[3]=M,m[7]=b,m[11]=T,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Ki.setFromMatrixColumn(e,0).length(),a=1/Ki.setFromMatrixColumn(e,1).length(),f=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*f,t[9]=i[9]*f,t[10]=i[10]*f,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,f=Math.cos(i),c=Math.sin(i),h=Math.cos(s),p=Math.sin(s),g=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const S=f*g,M=f*v,b=c*g,T=c*v;t[0]=h*g,t[4]=-h*v,t[8]=p,t[1]=M+b*p,t[5]=S-T*p,t[9]=-c*h,t[2]=T-S*p,t[6]=b+M*p,t[10]=f*h}else if(e.order==="YXZ"){const S=h*g,M=h*v,b=p*g,T=p*v;t[0]=S+T*c,t[4]=b*c-M,t[8]=f*p,t[1]=f*v,t[5]=f*g,t[9]=-c,t[2]=M*c-b,t[6]=T+S*c,t[10]=f*h}else if(e.order==="ZXY"){const S=h*g,M=h*v,b=p*g,T=p*v;t[0]=S-T*c,t[4]=-f*v,t[8]=b+M*c,t[1]=M+b*c,t[5]=f*g,t[9]=T-S*c,t[2]=-f*p,t[6]=c,t[10]=f*h}else if(e.order==="ZYX"){const S=f*g,M=f*v,b=c*g,T=c*v;t[0]=h*g,t[4]=b*p-M,t[8]=S*p+T,t[1]=h*v,t[5]=T*p+S,t[9]=M*p-b,t[2]=-p,t[6]=c*h,t[10]=f*h}else if(e.order==="YZX"){const S=f*h,M=f*p,b=c*h,T=c*p;t[0]=h*g,t[4]=T-S*v,t[8]=b*v+M,t[1]=v,t[5]=f*g,t[9]=-c*g,t[2]=-p*g,t[6]=M*v+b,t[10]=S-T*v}else if(e.order==="XZY"){const S=f*h,M=f*p,b=c*h,T=c*p;t[0]=h*g,t[4]=-v,t[8]=p*g,t[1]=S*v+T,t[5]=f*g,t[9]=M*v-b,t[2]=b*v-M,t[6]=c*g,t[10]=T*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mf,e,Ef)}lookAt(e,t,i){const s=this.elements;return mn.subVectors(e,t),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),li.crossVectors(i,mn),li.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),li.crossVectors(i,mn)),li.normalize(),ns.crossVectors(mn,li),s[0]=li.x,s[4]=ns.x,s[8]=mn.x,s[1]=li.y,s[5]=ns.y,s[9]=mn.y,s[2]=li.z,s[6]=ns.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,f=i[0],c=i[4],h=i[8],p=i[12],g=i[1],v=i[5],S=i[9],M=i[13],b=i[2],T=i[6],x=i[10],m=i[14],D=i[3],P=i[7],U=i[11],G=i[15],H=s[0],l=s[4],he=s[8],w=s[12],N=s[1],se=s[5],de=s[9],ue=s[13],k=s[2],ee=s[6],re=s[10],oe=s[14],le=s[3],ce=s[7],pe=s[11],Me=s[15];return a[0]=f*H+c*N+h*k+p*le,a[4]=f*l+c*se+h*ee+p*ce,a[8]=f*he+c*de+h*re+p*pe,a[12]=f*w+c*ue+h*oe+p*Me,a[1]=g*H+v*N+S*k+M*le,a[5]=g*l+v*se+S*ee+M*ce,a[9]=g*he+v*de+S*re+M*pe,a[13]=g*w+v*ue+S*oe+M*Me,a[2]=b*H+T*N+x*k+m*le,a[6]=b*l+T*se+x*ee+m*ce,a[10]=b*he+T*de+x*re+m*pe,a[14]=b*w+T*ue+x*oe+m*Me,a[3]=D*H+P*N+U*k+G*le,a[7]=D*l+P*se+U*ee+G*ce,a[11]=D*he+P*de+U*re+G*pe,a[15]=D*w+P*ue+U*oe+G*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],f=e[1],c=e[5],h=e[9],p=e[13],g=e[2],v=e[6],S=e[10],M=e[14],b=e[3],T=e[7],x=e[11],m=e[15];return b*(+a*h*v-s*p*v-a*c*S+i*p*S+s*c*M-i*h*M)+T*(+t*h*M-t*p*S+a*f*S-s*f*M+s*p*g-a*h*g)+x*(+t*p*v-t*c*M-a*f*v+i*f*M+a*c*g-i*p*g)+m*(-s*c*g-t*h*v+t*c*S+s*f*v-i*f*S+i*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],f=e[4],c=e[5],h=e[6],p=e[7],g=e[8],v=e[9],S=e[10],M=e[11],b=e[12],T=e[13],x=e[14],m=e[15],D=v*x*p-T*S*p+T*h*M-c*x*M-v*h*m+c*S*m,P=b*S*p-g*x*p-b*h*M+f*x*M+g*h*m-f*S*m,U=g*T*p-b*v*p+b*c*M-f*T*M-g*c*m+f*v*m,G=b*v*h-g*T*h-b*c*S+f*T*S+g*c*x-f*v*x,H=t*D+i*P+s*U+a*G;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const l=1/H;return e[0]=D*l,e[1]=(T*S*a-v*x*a-T*s*M+i*x*M+v*s*m-i*S*m)*l,e[2]=(c*x*a-T*h*a+T*s*p-i*x*p-c*s*m+i*h*m)*l,e[3]=(v*h*a-c*S*a-v*s*p+i*S*p+c*s*M-i*h*M)*l,e[4]=P*l,e[5]=(g*x*a-b*S*a+b*s*M-t*x*M-g*s*m+t*S*m)*l,e[6]=(b*h*a-f*x*a-b*s*p+t*x*p+f*s*m-t*h*m)*l,e[7]=(f*S*a-g*h*a+g*s*p-t*S*p-f*s*M+t*h*M)*l,e[8]=U*l,e[9]=(b*v*a-g*T*a-b*i*M+t*T*M+g*i*m-t*v*m)*l,e[10]=(f*T*a-b*c*a+b*i*p-t*T*p-f*i*m+t*c*m)*l,e[11]=(g*c*a-f*v*a-g*i*p+t*v*p+f*i*M-t*c*M)*l,e[12]=G*l,e[13]=(g*T*s-b*v*s+b*i*S-t*T*S-g*i*x+t*v*x)*l,e[14]=(b*c*s-f*T*s-b*i*h+t*T*h+f*i*x-t*c*x)*l,e[15]=(f*v*s-g*c*s+g*i*h-t*v*h-f*i*S+t*c*S)*l,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,f=e.x,c=e.y,h=e.z,p=a*f,g=a*c;return this.set(p*f+i,p*c-s*h,p*h+s*c,0,p*c+s*h,g*c+i,g*h-s*f,0,p*h-s*c,g*h+s*f,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,f){return this.set(1,i,a,0,e,1,f,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,f=t._y,c=t._z,h=t._w,p=a+a,g=f+f,v=c+c,S=a*p,M=a*g,b=a*v,T=f*g,x=f*v,m=c*v,D=h*p,P=h*g,U=h*v,G=i.x,H=i.y,l=i.z;return s[0]=(1-(T+m))*G,s[1]=(M+U)*G,s[2]=(b-P)*G,s[3]=0,s[4]=(M-U)*H,s[5]=(1-(S+m))*H,s[6]=(x+D)*H,s[7]=0,s[8]=(b+P)*l,s[9]=(x-D)*l,s[10]=(1-(S+T))*l,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Ki.set(s[0],s[1],s[2]).length();const f=Ki.set(s[4],s[5],s[6]).length(),c=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],Rn.copy(this);const p=1/a,g=1/f,v=1/c;return Rn.elements[0]*=p,Rn.elements[1]*=p,Rn.elements[2]*=p,Rn.elements[4]*=g,Rn.elements[5]*=g,Rn.elements[6]*=g,Rn.elements[8]*=v,Rn.elements[9]*=v,Rn.elements[10]*=v,t.setFromRotationMatrix(Rn),i.x=a,i.y=f,i.z=c,this}makePerspective(e,t,i,s,a,f,c=ei){const h=this.elements,p=2*a/(t-e),g=2*a/(i-s),v=(t+e)/(t-e),S=(i+s)/(i-s);let M,b;if(c===ei)M=-(f+a)/(f-a),b=-2*f*a/(f-a);else if(c===Rs)M=-f/(f-a),b=-f*a/(f-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=b,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,f,c=ei){const h=this.elements,p=1/(t-e),g=1/(i-s),v=1/(f-a),S=(t+e)*p,M=(i+s)*g;let b,T;if(c===ei)b=(f+a)*v,T=-2*v;else if(c===Rs)b=a*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=T,h[14]=-b,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new j,Rn=new Wt,Mf=new j(0,0,0),Ef=new j(1,1,1),li=new j,ns=new j,mn=new j,Zo=new Wt,Jo=new Fr;class Us{constructor(e=0,t=0,i=0,s=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],f=s[4],c=s[8],h=s[1],p=s[5],g=s[9],v=s[2],S=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(hn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(c,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(hn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-hn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(hn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(c,M));break;case"XZY":this._z=Math.asin(-hn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jo.setFromEuler(this),this.setFromQuaternion(Jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bf=0;const Qo=new j,Zi=new Fr,$n=new Wt,is=new j,Rr=new j,Tf=new j,Af=new Fr,el=new j(1,0,0),tl=new j(0,1,0),nl=new j(0,0,1),wf={type:"added"},Cf={type:"removed"};class un extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new j,t=new Us,i=new Fr,s=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function f(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Wt},normalMatrix:{value:new pt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(el,e)}rotateY(e){return this.rotateOnAxis(tl,e)}rotateZ(e){return this.rotateOnAxis(nl,e)}translateOnAxis(e,t){return Qo.copy(e).applyQuaternion(this.quaternion),this.position.add(Qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(el,e)}translateY(e){return this.translateOnAxis(tl,e)}translateZ(e){return this.translateOnAxis(nl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?is.copy(e):is.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Rr,is,this.up):$n.lookAt(is,Rr,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),Zi.setFromRotationMatrix($n),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$n.multiply(e.parent.matrixWorld)),e.applyMatrix4($n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const f=this.children[i].getObjectByProperty(e,t);if(f!==void 0)return f}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,f=s.length;a<f;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Rr,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let a=0,f=s.length;a<f;a++){const c=s[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const v=h[p];a(e.shapes,v)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,p=this.material.length;h<p;h++)c.push(a(e.materials,this.material[h]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(a(e.animations,h))}}if(t){const c=f(e.geometries),h=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),S=f(e.skeletons),M=f(e.animations),b=f(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),p.length>0&&(i.textures=p),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),S.length>0&&(i.skeletons=S),M.length>0&&(i.animations=M),b.length>0&&(i.nodes=b)}return i.object=s,i;function f(c){const h=[];for(const p in c){const g=c[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}un.DEFAULT_UP=new j(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new j,Kn=new j,ga=new j,Zn=new j,Ji=new j,Qi=new j,il=new j,_a=new j,va=new j,xa=new j;let rs=!1;class Pn{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ln.subVectors(e,t),s.cross(Ln);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Ln.subVectors(s,t),Kn.subVectors(i,t),ga.subVectors(e,t);const f=Ln.dot(Ln),c=Ln.dot(Kn),h=Ln.dot(ga),p=Kn.dot(Kn),g=Kn.dot(ga),v=f*p-c*c;if(v===0)return a.set(0,0,0),null;const S=1/v,M=(p*h-c*g)*S,b=(f*g-c*h)*S;return a.set(1-M-b,b,M)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getUV(e,t,i,s,a,f,c,h){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(e,t,i,s,a,f,c,h)}static getInterpolation(e,t,i,s,a,f,c,h){return this.getBarycoord(e,t,i,s,Zn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Zn.x),h.addScaledVector(f,Zn.y),h.addScaledVector(c,Zn.z),h)}static isFrontFacing(e,t,i,s){return Ln.subVectors(i,t),Kn.subVectors(e,t),Ln.cross(Kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Ln.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,a){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}getInterpolation(e,t,i,s,a){return Pn.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let f,c;Ji.subVectors(s,i),Qi.subVectors(a,i),_a.subVectors(e,i);const h=Ji.dot(_a),p=Qi.dot(_a);if(h<=0&&p<=0)return t.copy(i);va.subVectors(e,s);const g=Ji.dot(va),v=Qi.dot(va);if(g>=0&&v<=g)return t.copy(s);const S=h*v-g*p;if(S<=0&&h>=0&&g<=0)return f=h/(h-g),t.copy(i).addScaledVector(Ji,f);xa.subVectors(e,a);const M=Ji.dot(xa),b=Qi.dot(xa);if(b>=0&&M<=b)return t.copy(a);const T=M*p-h*b;if(T<=0&&p>=0&&b<=0)return c=p/(p-b),t.copy(i).addScaledVector(Qi,c);const x=g*b-M*v;if(x<=0&&v-g>=0&&M-b>=0)return il.subVectors(a,s),c=(v-g)/(v-g+(M-b)),t.copy(s).addScaledVector(il,c);const m=1/(x+T+S);return f=T*m,c=S*m,t.copy(i).addScaledVector(Ji,f).addScaledVector(Qi,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const oc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},ss={h:0,s:0,l:0};function ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=pf(e,1),t=hn(t,0,1),i=hn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,f=2*i-a;this.r=ya(f,a,e+1/3),this.g=ya(f,a,e),this.b=ya(f,a,e-1/3)}return Ct.toWorkingColorSpace(this,s),this}setStyle(e,t=en){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const f=s[1],c=s[2];switch(f){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],f=a.length;if(f===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(f===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){const i=oc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return Ct.fromWorkingColorSpace(an.copy(this),e),Math.round(hn(an.r*255,0,255))*65536+Math.round(hn(an.g*255,0,255))*256+Math.round(hn(an.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(an.copy(this),t);const i=an.r,s=an.g,a=an.b,f=Math.max(i,s,a),c=Math.min(i,s,a);let h,p;const g=(c+f)/2;if(c===f)h=0,p=0;else{const v=f-c;switch(p=g<=.5?v/(f+c):v/(2-f-c),f){case i:h=(s-a)/v+(s<a?6:0);break;case s:h=(a-i)/v+2;break;case a:h=(i-s)/v+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=en){Ct.fromWorkingColorSpace(an.copy(this),e);const t=an.r,i=an.g,s=an.b;return e!==en?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(ss);const i=aa(ci.h,ss.h,t),s=aa(ci.s,ss.s,t),a=aa(ci.l,ss.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const an=new bt;bt.NAMES=oc;let Rf=0;class gr extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=Nr(),this.name="",this.type="Material",this.blending=cr,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ua,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cr&&(i.blending=this.blending),this.side!==gi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==Ua&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const f=[];for(const c in a){const h=a[c];delete h.metadata,f.push(h)}return f}if(t){const a=s(e.textures),f=s(e.images);a.length>0&&(i.textures=a),f.length>0&&(i.images=f)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lc extends gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new j,as=new Rt;class In{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)as.fromBufferAttribute(this,t),as.applyMatrix3(e),this.setXY(t,as.x,as.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ar(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),i=dn(i,this.array),s=dn(s,this.array),a=dn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}}class cc extends In{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class uc extends In{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Vn extends In{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Lf=0;const yn=new Wt,Sa=new un,er=new j,gn=new Or,Lr=new Or,$t=new j;class Nn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nc(e)?uc:cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Vn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];gn.setFromBufferAttribute(a),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let a=0,f=t.length;a<f;a++){const c=t[a];Lr.setFromBufferAttribute(c),this.morphTargetsRelative?($t.addVectors(gn.min,Lr.min),gn.expandByPoint($t),$t.addVectors(gn.max,Lr.max),gn.expandByPoint($t)):(gn.expandByPoint(Lr.min),gn.expandByPoint(Lr.max))}gn.getCenter(i);let s=0;for(let a=0,f=e.count;a<f;a++)$t.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared($t));if(t)for(let a=0,f=t.length;a<f;a++){const c=t[a],h=this.morphTargetsRelative;for(let p=0,g=c.count;p<g;p++)$t.fromBufferAttribute(c,p),h&&(er.fromBufferAttribute(e,p),$t.add(er)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,a=t.normal.array,f=t.uv.array,c=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*c),4));const h=this.getAttribute("tangent").array,p=[],g=[];for(let N=0;N<c;N++)p[N]=new j,g[N]=new j;const v=new j,S=new j,M=new j,b=new Rt,T=new Rt,x=new Rt,m=new j,D=new j;function P(N,se,de){v.fromArray(s,N*3),S.fromArray(s,se*3),M.fromArray(s,de*3),b.fromArray(f,N*2),T.fromArray(f,se*2),x.fromArray(f,de*2),S.sub(v),M.sub(v),T.sub(b),x.sub(b);const ue=1/(T.x*x.y-x.x*T.y);isFinite(ue)&&(m.copy(S).multiplyScalar(x.y).addScaledVector(M,-T.y).multiplyScalar(ue),D.copy(M).multiplyScalar(T.x).addScaledVector(S,-x.x).multiplyScalar(ue),p[N].add(m),p[se].add(m),p[de].add(m),g[N].add(D),g[se].add(D),g[de].add(D))}let U=this.groups;U.length===0&&(U=[{start:0,count:i.length}]);for(let N=0,se=U.length;N<se;++N){const de=U[N],ue=de.start,k=de.count;for(let ee=ue,re=ue+k;ee<re;ee+=3)P(i[ee+0],i[ee+1],i[ee+2])}const G=new j,H=new j,l=new j,he=new j;function w(N){l.fromArray(a,N*3),he.copy(l);const se=p[N];G.copy(se),G.sub(l.multiplyScalar(l.dot(se))).normalize(),H.crossVectors(he,se);const ue=H.dot(g[N])<0?-1:1;h[N*4]=G.x,h[N*4+1]=G.y,h[N*4+2]=G.z,h[N*4+3]=ue}for(let N=0,se=U.length;N<se;++N){const de=U[N],ue=de.start,k=de.count;for(let ee=ue,re=ue+k;ee<re;ee+=3)w(i[ee+0]),w(i[ee+1]),w(i[ee+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let S=0,M=i.count;S<M;S++)i.setXYZ(S,0,0,0);const s=new j,a=new j,f=new j,c=new j,h=new j,p=new j,g=new j,v=new j;if(e)for(let S=0,M=e.count;S<M;S+=3){const b=e.getX(S+0),T=e.getX(S+1),x=e.getX(S+2);s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,T),f.fromBufferAttribute(t,x),g.subVectors(f,a),v.subVectors(s,a),g.cross(v),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,x),c.add(g),h.add(g),p.add(g),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(T,h.x,h.y,h.z),i.setXYZ(x,p.x,p.y,p.z)}else for(let S=0,M=t.count;S<M;S+=3)s.fromBufferAttribute(t,S+0),a.fromBufferAttribute(t,S+1),f.fromBufferAttribute(t,S+2),g.subVectors(f,a),v.subVectors(s,a),g.cross(v),i.setXYZ(S+0,g.x,g.y,g.z),i.setXYZ(S+1,g.x,g.y,g.z),i.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(c,h){const p=c.array,g=c.itemSize,v=c.normalized,S=new p.constructor(h.length*g);let M=0,b=0;for(let T=0,x=h.length;T<x;T++){c.isInterleavedBufferAttribute?M=h[T]*c.data.stride+c.offset:M=h[T]*g;for(let m=0;m<g;m++)S[b++]=p[M++]}return new In(S,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,i=this.index.array,s=this.attributes;for(const c in s){const h=s[c],p=e(h,i);t.setAttribute(c,p)}const a=this.morphAttributes;for(const c in a){const h=[],p=a[c];for(let g=0,v=p.length;g<v;g++){const S=p[g],M=e(S,i);h.push(M)}t.morphAttributes[c]=h}t.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let c=0,h=f.length;c<h;c++){const p=f[c];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const p=i[h];e.data.attributes[h]=p.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let v=0,S=p.length;v<S;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(s[h]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const p in s){const g=s[p];this.setAttribute(p,g.clone(t))}const a=e.morphAttributes;for(const p in a){const g=[],v=a[p];for(let S=0,M=v.length;S<M;S++)g.push(v[S].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rl=new Wt,bi=new qa,os=new Br,sl=new j,tr=new j,nr=new j,ir=new j,Ma=new j,ls=new j,cs=new Rt,us=new Rt,fs=new Rt,al=new j,ol=new j,ll=new j,ds=new j,hs=new j;class di extends un{constructor(e=new Nn,t=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,f=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(a&&c){ls.set(0,0,0);for(let h=0,p=a.length;h<p;h++){const g=c[h],v=a[h];g!==0&&(Ma.fromBufferAttribute(v,e),f?ls.addScaledVector(Ma,g):ls.addScaledVector(Ma.sub(t),g))}t.add(ls)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(a),bi.copy(e.ray).recast(e.near),!(os.containsPoint(bi.origin)===!1&&(bi.intersectSphere(os,sl)===null||bi.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(rl.copy(a).invert(),bi.copy(e.ray).applyMatrix4(rl),!(i.boundingBox!==null&&bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,i){let s;const a=this.geometry,f=this.material,c=a.index,h=a.attributes.position,p=a.attributes.uv,g=a.attributes.uv1,v=a.attributes.normal,S=a.groups,M=a.drawRange;if(c!==null)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const x=S[b],m=f[x.materialIndex],D=Math.max(x.start,M.start),P=Math.min(c.count,Math.min(x.start+x.count,M.start+M.count));for(let U=D,G=P;U<G;U+=3){const H=c.getX(U),l=c.getX(U+1),he=c.getX(U+2);s=ps(this,m,e,i,p,g,v,H,l,he),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,M.start),T=Math.min(c.count,M.start+M.count);for(let x=b,m=T;x<m;x+=3){const D=c.getX(x),P=c.getX(x+1),U=c.getX(x+2);s=ps(this,f,e,i,p,g,v,D,P,U),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(f))for(let b=0,T=S.length;b<T;b++){const x=S[b],m=f[x.materialIndex],D=Math.max(x.start,M.start),P=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let U=D,G=P;U<G;U+=3){const H=U,l=U+1,he=U+2;s=ps(this,m,e,i,p,g,v,H,l,he),s&&(s.faceIndex=Math.floor(U/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const b=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let x=b,m=T;x<m;x+=3){const D=x,P=x+1,U=x+2;s=ps(this,f,e,i,p,g,v,D,P,U),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function Pf(n,e,t,i,s,a,f,c){let h;if(e.side===pn?h=i.intersectTriangle(f,a,s,!0,c):h=i.intersectTriangle(s,a,f,e.side===gi,c),h===null)return null;hs.copy(c),hs.applyMatrix4(n.matrixWorld);const p=t.ray.origin.distanceTo(hs);return p<t.near||p>t.far?null:{distance:p,point:hs.clone(),object:n}}function ps(n,e,t,i,s,a,f,c,h,p){n.getVertexPosition(c,tr),n.getVertexPosition(h,nr),n.getVertexPosition(p,ir);const g=Pf(n,e,t,i,tr,nr,ir,ds);if(g){s&&(cs.fromBufferAttribute(s,c),us.fromBufferAttribute(s,h),fs.fromBufferAttribute(s,p),g.uv=Pn.getInterpolation(ds,tr,nr,ir,cs,us,fs,new Rt)),a&&(cs.fromBufferAttribute(a,c),us.fromBufferAttribute(a,h),fs.fromBufferAttribute(a,p),g.uv1=Pn.getInterpolation(ds,tr,nr,ir,cs,us,fs,new Rt),g.uv2=g.uv1),f&&(al.fromBufferAttribute(f,c),ol.fromBufferAttribute(f,h),ll.fromBufferAttribute(f,p),g.normal=Pn.getInterpolation(ds,tr,nr,ir,al,ol,ll,new j),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const v={a:c,b:h,c:p,normal:new j,materialIndex:0};Pn.getNormal(tr,nr,ir,v.normal),g.face=v}return g}class Hr extends Nn{constructor(e=1,t=1,i=1,s=1,a=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:f};const c=this;s=Math.floor(s),a=Math.floor(a),f=Math.floor(f);const h=[],p=[],g=[],v=[];let S=0,M=0;b("z","y","x",-1,-1,i,t,e,f,a,0),b("z","y","x",1,-1,i,t,-e,f,a,1),b("x","z","y",1,1,e,i,t,s,f,2),b("x","z","y",1,-1,e,i,-t,s,f,3),b("x","y","z",1,-1,e,t,i,s,a,4),b("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Vn(p,3)),this.setAttribute("normal",new Vn(g,3)),this.setAttribute("uv",new Vn(v,2));function b(T,x,m,D,P,U,G,H,l,he,w){const N=U/l,se=G/he,de=U/2,ue=G/2,k=H/2,ee=l+1,re=he+1;let oe=0,le=0;const ce=new j;for(let pe=0;pe<re;pe++){const Me=pe*se-ue;for(let be=0;be<ee;be++){const te=be*N-de;ce[T]=te*D,ce[x]=Me*P,ce[m]=k,p.push(ce.x,ce.y,ce.z),ce[T]=0,ce[x]=0,ce[m]=H>0?1:-1,g.push(ce.x,ce.y,ce.z),v.push(be/l),v.push(1-pe/he),oe+=1}}for(let pe=0;pe<he;pe++)for(let Me=0;Me<l;Me++){const be=S+Me+ee*pe,te=S+Me+ee*(pe+1),_e=S+(Me+1)+ee*(pe+1),Pe=S+(Me+1)+ee*pe;h.push(be,te,Pe),h.push(te,_e,Pe),le+=6}c.addGroup(M,le,w),M+=le,S+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function pr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=pr(n[t]);for(const s in i)e[s]=i[s]}return e}function Df(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function fc(n){return n.getRenderTarget()===null?n.outputColorSpace:Ct.workingColorSpace}const Uf={clone:pr,merge:ln};var If=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=If,this.fragmentShader=Nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=pr(e.uniforms),this.uniformsGroups=Df(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const f=this.uniforms[s].value;f&&f.isTexture?t.uniforms[s]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?t.uniforms[s]={type:"c",value:f.getHex()}:f&&f.isVector2?t.uniforms[s]={type:"v2",value:f.toArray()}:f&&f.isVector3?t.uniforms[s]={type:"v3",value:f.toArray()}:f&&f.isVector4?t.uniforms[s]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?t.uniforms[s]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?t.uniforms[s]={type:"m4",value:f.toArray()}:t.uniforms[s]={value:f}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class dc extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Mn extends dc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,a,f){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,p=f.fullHeight;a+=f.offsetX*s/h,t-=f.offsetY*i/p,s*=f.width/h,i*=f.height/p}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const rr=-90,sr=1;class Ff extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Mn(rr,sr,e,t);s.layers=this.layers,this.add(s);const a=new Mn(rr,sr,e,t);a.layers=this.layers,this.add(a);const f=new Mn(rr,sr,e,t);f.layers=this.layers,this.add(f);const c=new Mn(rr,sr,e,t);c.layers=this.layers,this.add(c);const h=new Mn(rr,sr,e,t);h.layers=this.layers,this.add(h);const p=new Mn(rr,sr,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,f,c,h]=t;for(const p of t)this.remove(p);if(e===ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,f,c,h,p,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,f),e.setRenderTarget(i,2,s),e.render(t,c),e.setRenderTarget(i,3,s),e.render(t,h),e.setRenderTarget(i,4,s),e.render(t,p),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(t,g),e.setRenderTarget(v,S,M),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class hc extends _n{constructor(e,t,i,s,a,f,c,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,i,s,a,f,c,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends Ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Pr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Ui?en:En),this.texture=new hc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Sn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hr(5,5,5),a=new Ni({name:"CubemapFromEquirect",uniforms:pr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:hi});a.uniforms.tEquirect.value=t;const f=new di(s,a),c=t.minFilter;return t.minFilter===Dr&&(t.minFilter=Sn),new Ff(1,10,this).update(e,f),t.minFilter=c,f.geometry.dispose(),f.material.dispose(),this}clear(e,t,i,s){const a=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(t,i,s);e.setRenderTarget(a)}}const Ea=new j,Bf=new j,Hf=new pt;class Ai{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Ea.subVectors(i,t).cross(Bf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ea),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Hf.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Br,ms=new j;class pc{constructor(e=new Ai,t=new Ai,i=new Ai,s=new Ai,a=new Ai,f=new Ai){this.planes=[e,t,i,s,a,f]}set(e,t,i,s,a,f){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(a),c[5].copy(f),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ei){const i=this.planes,s=e.elements,a=s[0],f=s[1],c=s[2],h=s[3],p=s[4],g=s[5],v=s[6],S=s[7],M=s[8],b=s[9],T=s[10],x=s[11],m=s[12],D=s[13],P=s[14],U=s[15];if(i[0].setComponents(h-a,S-p,x-M,U-m).normalize(),i[1].setComponents(h+a,S+p,x+M,U+m).normalize(),i[2].setComponents(h+f,S+g,x+b,U+D).normalize(),i[3].setComponents(h-f,S-g,x-b,U-D).normalize(),i[4].setComponents(h-c,S-v,x-T,U-P).normalize(),t===ei)i[5].setComponents(h+c,S+v,x+T,U+P).normalize();else if(t===Rs)i[5].setComponents(c,v,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ms.x=s.normal.x>0?e.max.x:e.min.x,ms.y=s.normal.y>0?e.max.y:e.min.y,ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let n=null,e=!1,t=null,i=null;function s(a,f){t(a,f),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function zf(n,e){const t=e.isWebGL2,i=new WeakMap;function s(p,g){const v=p.array,S=p.usage,M=v.byteLength,b=n.createBuffer();n.bindBuffer(g,b),n.bufferData(g,v,S),p.onUploadCallback();let T;if(v instanceof Float32Array)T=n.FLOAT;else if(v instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(t)T=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else T=n.UNSIGNED_SHORT;else if(v instanceof Int16Array)T=n.SHORT;else if(v instanceof Uint32Array)T=n.UNSIGNED_INT;else if(v instanceof Int32Array)T=n.INT;else if(v instanceof Int8Array)T=n.BYTE;else if(v instanceof Uint8Array)T=n.UNSIGNED_BYTE;else if(v instanceof Uint8ClampedArray)T=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+v);return{buffer:b,type:T,bytesPerElement:v.BYTES_PER_ELEMENT,version:p.version,size:M}}function a(p,g,v){const S=g.array,M=g._updateRange,b=g.updateRanges;if(n.bindBuffer(v,p),M.count===-1&&b.length===0&&n.bufferSubData(v,0,S),b.length!==0){for(let T=0,x=b.length;T<x;T++){const m=b[T];t?n.bufferSubData(v,m.start*S.BYTES_PER_ELEMENT,S,m.start,m.count):n.bufferSubData(v,m.start*S.BYTES_PER_ELEMENT,S.subarray(m.start,m.start+m.count))}g.clearUpdateRanges()}M.count!==-1&&(t?n.bufferSubData(v,M.offset*S.BYTES_PER_ELEMENT,S,M.offset,M.count):n.bufferSubData(v,M.offset*S.BYTES_PER_ELEMENT,S.subarray(M.offset,M.offset+M.count)),M.count=-1),g.onUploadCallback()}function f(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=i.get(p);g&&(n.deleteBuffer(g.buffer),i.delete(p))}function h(p,g){if(p.isGLBufferAttribute){const S=i.get(p);(!S||S.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const v=i.get(p);if(v===void 0)i.set(p,s(p,g));else if(v.version<p.version){if(v.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(v.buffer,p,g),v.version=p.version}}return{get:f,remove:c,update:h}}class ja extends Nn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,f=t/2,c=Math.floor(i),h=Math.floor(s),p=c+1,g=h+1,v=e/c,S=t/h,M=[],b=[],T=[],x=[];for(let m=0;m<g;m++){const D=m*S-f;for(let P=0;P<p;P++){const U=P*v-a;b.push(U,-D,0),T.push(0,0,1),x.push(P/c),x.push(1-m/h)}}for(let m=0;m<h;m++)for(let D=0;D<c;D++){const P=D+p*m,U=D+p*(m+1),G=D+1+p*(m+1),H=D+1+p*m;M.push(P,U,H),M.push(U,G,H)}this.setIndex(M),this.setAttribute("position",new Vn(b,3)),this.setAttribute("normal",new Vn(T,3)),this.setAttribute("uv",new Vn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var kf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jf=`#ifdef USE_AOMAP
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
#endif`,Yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ed=`#ifdef USE_IRIDESCENCE
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
#endif`,td=`#ifdef USE_BUMPMAP
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
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ud=`#define PI 3.141592653589793
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
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",vd=`
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
}`,xd=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cd=`#ifdef USE_GRADIENTMAP
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
}`,Rd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ud=`uniform bool receiveShadow;
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
#endif`,Id=`#ifdef USE_ENVMAP
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
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hd=`PhysicalMaterial material;
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
#endif`,zd=`struct PhysicalMaterial {
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
}`,kd=`
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zd=`#if defined( USE_POINTS_UV )
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
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,th=`#ifdef USE_MORPHNORMALS
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
#endif`,nh=`#ifdef USE_MORPHTARGETS
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
#endif`,ih=`#ifdef USE_MORPHTARGETS
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
#endif`,rh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ch=`#ifdef USE_NORMALMAP
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
#endif`,uh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ph=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_h=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Th=`float getShadowMask() {
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
}`,Ah=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wh=`#ifdef USE_SKINNING
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
#endif`,Ch=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rh=`#ifdef USE_SKINNING
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
#endif`,Lh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ph=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uh=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ih=`#ifdef USE_TRANSMISSION
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
#endif`,Nh=`#ifdef USE_TRANSMISSION
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
#endif`,Fh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Oh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kh=`uniform sampler2D t2D;
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
}`,Gh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`#include <common>
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
}`,jh=`#if DEPTH_PACKING == 3200
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
}`,Yh=`#define DISTANCE
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
}`,$h=`#define DISTANCE
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
}`,Kh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jh=`uniform float scale;
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
}`,Qh=`uniform vec3 diffuse;
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
}`,ep=`#include <common>
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
}`,tp=`uniform vec3 diffuse;
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
}`,np=`#define LAMBERT
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
}`,ip=`#define LAMBERT
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
}`,rp=`#define MATCAP
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
}`,sp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,op=`#define NORMAL
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
}`,lp=`#define PHONG
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
}`,cp=`#define PHONG
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
}`,up=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,dp=`#define TOON
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
}`,hp=`#define TOON
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
}`,pp=`uniform float size;
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#include <common>
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
}`,_p=`uniform vec3 color;
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
}`,vp=`uniform float rotation;
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
}`,xp=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:kf,alphahash_pars_fragment:Gf,alphamap_fragment:Vf,alphamap_pars_fragment:Wf,alphatest_fragment:Xf,alphatest_pars_fragment:qf,aomap_fragment:jf,aomap_pars_fragment:Yf,batching_pars_vertex:$f,batching_vertex:Kf,begin_vertex:Zf,beginnormal_vertex:Jf,bsdfs:Qf,iridescence_fragment:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:rd,clipping_planes_vertex:sd,color_fragment:ad,color_pars_fragment:od,color_pars_vertex:ld,color_vertex:cd,common:ud,cube_uv_reflection_fragment:fd,defaultnormal_vertex:dd,displacementmap_pars_vertex:hd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:vd,envmap_fragment:xd,envmap_common_pars_fragment:yd,envmap_pars_fragment:Sd,envmap_pars_vertex:Md,envmap_physical_pars_fragment:Id,envmap_vertex:Ed,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:wd,gradientmap_pars_fragment:Cd,lightmap_fragment:Rd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Dd,lights_pars_begin:Ud,lights_toon_fragment:Nd,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:Bd,lights_physical_fragment:Hd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Gd,lights_fragment_end:Vd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:jd,map_fragment:Yd,map_pars_fragment:$d,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:Qd,morphcolor_vertex:eh,morphnormal_vertex:th,morphtarget_pars_vertex:nh,morphtarget_vertex:ih,normal_fragment_begin:rh,normal_fragment_maps:sh,normal_pars_fragment:ah,normal_pars_vertex:oh,normal_vertex:lh,normalmap_pars_fragment:ch,clearcoat_normal_fragment_begin:uh,clearcoat_normal_fragment_maps:fh,clearcoat_pars_fragment:dh,iridescence_pars_fragment:hh,opaque_fragment:ph,packing:mh,premultiplied_alpha_fragment:gh,project_vertex:_h,dithering_fragment:vh,dithering_pars_fragment:xh,roughnessmap_fragment:yh,roughnessmap_pars_fragment:Sh,shadowmap_pars_fragment:Mh,shadowmap_pars_vertex:Eh,shadowmap_vertex:bh,shadowmask_pars_fragment:Th,skinbase_vertex:Ah,skinning_pars_vertex:wh,skinning_vertex:Ch,skinnormal_vertex:Rh,specularmap_fragment:Lh,specularmap_pars_fragment:Ph,tonemapping_fragment:Dh,tonemapping_pars_fragment:Uh,transmission_fragment:Ih,transmission_pars_fragment:Nh,uv_pars_fragment:Fh,uv_pars_vertex:Oh,uv_vertex:Bh,worldpos_vertex:Hh,background_vert:zh,background_frag:kh,backgroundCube_vert:Gh,backgroundCube_frag:Vh,cube_vert:Wh,cube_frag:Xh,depth_vert:qh,depth_frag:jh,distanceRGBA_vert:Yh,distanceRGBA_frag:$h,equirect_vert:Kh,equirect_frag:Zh,linedashed_vert:Jh,linedashed_frag:Qh,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:rp,meshmatcap_frag:sp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:fp,meshtoon_vert:dp,meshtoon_frag:hp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:vp,sprite_frag:xp},we={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Gn={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new bt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Gn.physical={uniforms:ln([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const gs={r:0,b:0,g:0};function yp(n,e,t,i,s,a,f){const c=new bt(0);let h=a===!0?0:1,p,g,v=null,S=0,M=null;function b(x,m){let D=!1,P=m.isScene===!0?m.background:null;P&&P.isTexture&&(P=(m.backgroundBlurriness>0?t:e).get(P)),P===null?T(c,h):P&&P.isColor&&(T(P,1),D=!0);const U=n.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,f):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,f),(n.autoClear||D)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),P&&(P.isCubeTexture||P.mapping===Ps)?(g===void 0&&(g=new di(new Hr(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:pr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(G,H,l){this.matrixWorld.copyPosition(l.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(g)),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,g.material.toneMapped=Ct.getTransfer(P.colorSpace)!==It,(v!==P||S!==P.version||M!==n.toneMapping)&&(g.material.needsUpdate=!0,v=P,S=P.version,M=n.toneMapping),g.layers.enableAll(),x.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new di(new ja(2,2),new Ni({name:"BackgroundMaterial",uniforms:pr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||M!==n.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,M=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null))}function T(x,m){x.getRGB(gs,fc(n)),i.buffers.color.setClear(gs.r,gs.g,gs.b,m,f)}return{getClearColor:function(){return c},setClearColor:function(x,m=1){c.set(x),h=m,T(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(x){h=x,T(c,h)},render:b}}function Sp(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),f=i.isWebGL2||a!==null,c={},h=x(null);let p=h,g=!1;function v(k,ee,re,oe,le){let ce=!1;if(f){const pe=T(oe,re,ee);p!==pe&&(p=pe,M(p.object)),ce=m(k,oe,re,le),ce&&D(k,oe,re,le)}else{const pe=ee.wireframe===!0;(p.geometry!==oe.id||p.program!==re.id||p.wireframe!==pe)&&(p.geometry=oe.id,p.program=re.id,p.wireframe=pe,ce=!0)}le!==null&&t.update(le,n.ELEMENT_ARRAY_BUFFER),(ce||g)&&(g=!1,he(k,ee,re,oe),le!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(le).buffer))}function S(){return i.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function M(k){return i.isWebGL2?n.bindVertexArray(k):a.bindVertexArrayOES(k)}function b(k){return i.isWebGL2?n.deleteVertexArray(k):a.deleteVertexArrayOES(k)}function T(k,ee,re){const oe=re.wireframe===!0;let le=c[k.id];le===void 0&&(le={},c[k.id]=le);let ce=le[ee.id];ce===void 0&&(ce={},le[ee.id]=ce);let pe=ce[oe];return pe===void 0&&(pe=x(S()),ce[oe]=pe),pe}function x(k){const ee=[],re=[],oe=[];for(let le=0;le<s;le++)ee[le]=0,re[le]=0,oe[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:oe,object:k,attributes:{},index:null}}function m(k,ee,re,oe){const le=p.attributes,ce=ee.attributes;let pe=0;const Me=re.getAttributes();for(const be in Me)if(Me[be].location>=0){const _e=le[be];let Pe=ce[be];if(Pe===void 0&&(be==="instanceMatrix"&&k.instanceMatrix&&(Pe=k.instanceMatrix),be==="instanceColor"&&k.instanceColor&&(Pe=k.instanceColor)),_e===void 0||_e.attribute!==Pe||Pe&&_e.data!==Pe.data)return!0;pe++}return p.attributesNum!==pe||p.index!==oe}function D(k,ee,re,oe){const le={},ce=ee.attributes;let pe=0;const Me=re.getAttributes();for(const be in Me)if(Me[be].location>=0){let _e=ce[be];_e===void 0&&(be==="instanceMatrix"&&k.instanceMatrix&&(_e=k.instanceMatrix),be==="instanceColor"&&k.instanceColor&&(_e=k.instanceColor));const Pe={};Pe.attribute=_e,_e&&_e.data&&(Pe.data=_e.data),le[be]=Pe,pe++}p.attributes=le,p.attributesNum=pe,p.index=oe}function P(){const k=p.newAttributes;for(let ee=0,re=k.length;ee<re;ee++)k[ee]=0}function U(k){G(k,0)}function G(k,ee){const re=p.newAttributes,oe=p.enabledAttributes,le=p.attributeDivisors;re[k]=1,oe[k]===0&&(n.enableVertexAttribArray(k),oe[k]=1),le[k]!==ee&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,ee),le[k]=ee)}function H(){const k=p.newAttributes,ee=p.enabledAttributes;for(let re=0,oe=ee.length;re<oe;re++)ee[re]!==k[re]&&(n.disableVertexAttribArray(re),ee[re]=0)}function l(k,ee,re,oe,le,ce,pe){pe===!0?n.vertexAttribIPointer(k,ee,re,le,ce):n.vertexAttribPointer(k,ee,re,oe,le,ce)}function he(k,ee,re,oe){if(i.isWebGL2===!1&&(k.isInstancedMesh||oe.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;P();const le=oe.attributes,ce=re.getAttributes(),pe=ee.defaultAttributeValues;for(const Me in ce){const be=ce[Me];if(be.location>=0){let te=le[Me];if(te===void 0&&(Me==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),Me==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const _e=te.normalized,Pe=te.itemSize,Ge=t.get(te);if(Ge===void 0)continue;const ke=Ge.buffer,it=Ge.type,rt=Ge.bytesPerElement,He=i.isWebGL2===!0&&(it===n.INT||it===n.UNSIGNED_INT||te.gpuType===jl);if(te.isInterleavedBufferAttribute){const vt=te.data,q=vt.stride,Ht=te.offset;if(vt.isInstancedInterleavedBuffer){for(let Xe=0;Xe<be.locationSize;Xe++)G(be.location+Xe,vt.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let Xe=0;Xe<be.locationSize;Xe++)U(be.location+Xe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Xe=0;Xe<be.locationSize;Xe++)l(be.location+Xe,Pe/be.locationSize,it,_e,q*rt,(Ht+Pe/be.locationSize*Xe)*rt,He)}else{if(te.isInstancedBufferAttribute){for(let vt=0;vt<be.locationSize;vt++)G(be.location+vt,te.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let vt=0;vt<be.locationSize;vt++)U(be.location+vt);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let vt=0;vt<be.locationSize;vt++)l(be.location+vt,Pe/be.locationSize,it,_e,Pe*rt,Pe/be.locationSize*vt*rt,He)}}else if(pe!==void 0){const _e=pe[Me];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(be.location,_e);break;case 3:n.vertexAttrib3fv(be.location,_e);break;case 4:n.vertexAttrib4fv(be.location,_e);break;default:n.vertexAttrib1fv(be.location,_e)}}}}H()}function w(){de();for(const k in c){const ee=c[k];for(const re in ee){const oe=ee[re];for(const le in oe)b(oe[le].object),delete oe[le];delete ee[re]}delete c[k]}}function N(k){if(c[k.id]===void 0)return;const ee=c[k.id];for(const re in ee){const oe=ee[re];for(const le in oe)b(oe[le].object),delete oe[le];delete ee[re]}delete c[k.id]}function se(k){for(const ee in c){const re=c[ee];if(re[k.id]===void 0)continue;const oe=re[k.id];for(const le in oe)b(oe[le].object),delete oe[le];delete re[k.id]}}function de(){ue(),g=!0,p!==h&&(p=h,M(p.object))}function ue(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:v,reset:de,resetDefaultState:ue,dispose:w,releaseStatesOfGeometry:N,releaseStatesOfProgram:se,initAttributes:P,enableAttribute:U,disableUnusedAttributes:H}}function Mp(n,e,t,i){const s=i.isWebGL2;let a;function f(g){a=g}function c(g,v){n.drawArrays(a,g,v),t.update(v,a,1)}function h(g,v,S){if(S===0)return;let M,b;if(s)M=n,b="drawArraysInstanced";else if(M=e.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",M===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}M[b](a,g,v,S),t.update(v,a,S)}function p(g,v,S){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<S;b++)this.render(g[b],v[b]);else{M.multiDrawArraysWEBGL(a,g,0,v,0,S);let b=0;for(let T=0;T<S;T++)b+=v[T];t.update(b,a,1)}}this.setMode=f,this.render=c,this.renderInstances=h,this.renderMultiDraw=p}function Ep(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const l=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(l.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(l){if(l==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";l="mediump"}return l==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const f=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=f||e.has("WEBGL_draw_buffers"),g=t.logarithmicDepthBuffer===!0,v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),b=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),T=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),D=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=S>0,U=f||e.has("OES_texture_float"),G=P&&U,H=f?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:f,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:g,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:b,maxAttributes:T,maxVertexUniforms:x,maxVaryings:m,maxFragmentUniforms:D,vertexTextures:P,floatFragmentTextures:U,floatVertexTextures:G,maxSamples:H}}function bp(n){const e=this;let t=null,i=0,s=!1,a=!1;const f=new Ai,c=new pt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||i!==0||s;return s=S,i=v.length,M},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,S){t=g(v,S,0)},this.setState=function(v,S,M){const b=v.clippingPlanes,T=v.clipIntersection,x=v.clipShadows,m=n.get(v);if(!s||b===null||b.length===0||a&&!x)a?g(null):p();else{const D=a?0:i,P=D*4;let U=m.clippingState||null;h.value=U,U=g(b,S,P,M);for(let G=0;G!==P;++G)U[G]=t[G];m.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(v,S,M,b){const T=v!==null?v.length:0;let x=null;if(T!==0){if(x=h.value,b!==!0||x===null){const m=M+T*4,D=S.matrixWorldInverse;c.getNormalMatrix(D),(x===null||x.length<m)&&(x=new Float32Array(m));for(let P=0,U=M;P!==T;++P,U+=4)f.copy(v[P]).applyMatrix4(D,c),f.normal.toArray(x,U),x[U+3]=f.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function Tp(n){let e=new WeakMap;function t(f,c){return c===Ia?f.mapping=fr:c===Na&&(f.mapping=dr),f}function i(f){if(f&&f.isTexture){const c=f.mapping;if(c===Ia||c===Na)if(e.has(f)){const h=e.get(f).texture;return t(h,f.mapping)}else{const h=f.image;if(h&&h.height>0){const p=new Of(h.height/2);return p.fromEquirectangularTexture(n,f),e.set(f,p),f.addEventListener("dispose",s),t(p.texture,f.mapping)}else return null}}return f}function s(f){const c=f.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Ap extends dc{constructor(e=-1,t=1,i=1,s=-1,a=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=f,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,f=i+e,c=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,f=a+p*this.view.width,c-=g*this.view.offsetY,h=c-g*this.view.height}this.projectionMatrix.makeOrthographic(a,f,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const or=4,cl=[.125,.215,.35,.446,.526,.582],Li=20,ba=new Ap,ul=new bt;let Ta=null,Aa=0,wa=0;const wi=(1+Math.sqrt(5))/2,ar=1/wi,fl=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,wi,ar),new j(0,wi,-ar),new j(ar,0,wi),new j(-ar,0,wi),new j(wi,ar,0),new j(-wi,ar,0)];class dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,s,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ta,Aa,wa),e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Ur,format:Un,colorSpace:ti,depthBuffer:!1},s=hl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hl(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wp(a)),this._blurMaterial=Cp(a,e,t)}return s}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,ba)}_sceneToCubeUV(e,t,i,s){const c=new Mn(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(ul),g.toneMapping=pi,g.autoClear=!1;const M=new lc({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),b=new di(new Hr,M);let T=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,T=!0):(M.color.copy(ul),T=!0);for(let m=0;m<6;m++){const D=m%3;D===0?(c.up.set(0,h[m],0),c.lookAt(p[m],0,0)):D===1?(c.up.set(0,0,h[m]),c.lookAt(0,p[m],0)):(c.up.set(0,h[m],0),c.lookAt(0,0,p[m]));const P=this._cubeSize;_s(s,D*P,m>2?P:0,P,P),g.setRenderTarget(s),T&&g.render(b,c),g.render(e,c)}b.geometry.dispose(),b.material.dispose(),g.toneMapping=S,g.autoClear=v,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===fr||e.mapping===dr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pl());const a=s?this._cubemapMaterial:this._equirectMaterial,f=new di(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const h=this._cubeSize;_s(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(f,ba)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),f=fl[(s-1)%fl.length];this._blur(e,s-1,s,a,f)}t.autoClear=i}_blur(e,t,i,s,a){const f=this._pingPongRenderTarget;this._halfBlur(e,f,t,i,s,"latitudinal",a),this._halfBlur(f,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,f,c){const h=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new di(this._lodPlanes[s],p),S=p.uniforms,M=this._sizeLods[i]-1,b=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*Li-1),T=a/b,x=isFinite(a)?1+Math.floor(g*T):Li;x>Li&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Li}`);const m=[];let D=0;for(let l=0;l<Li;++l){const he=l/T,w=Math.exp(-he*he/2);m.push(w),l===0?D+=w:l<x&&(D+=2*w)}for(let l=0;l<m.length;l++)m[l]=m[l]/D;S.envMap.value=e.texture,S.samples.value=x,S.weights.value=m,S.latitudinal.value=f==="latitudinal",c&&(S.poleAxis.value=c);const{_lodMax:P}=this;S.dTheta.value=b,S.mipInt.value=P-i;const U=this._sizeLods[s],G=3*U*(s>P-or?s-P+or:0),H=4*(this._cubeSize-U);_s(t,G,H,3*U,2*U),h.setRenderTarget(t),h.render(v,ba)}}function wp(n){const e=[],t=[],i=[];let s=n;const a=n-or+1+cl.length;for(let f=0;f<a;f++){const c=Math.pow(2,s);t.push(c);let h=1/c;f>n-or?h=cl[f-n+or-1]:f===0&&(h=0),i.push(h);const p=1/(c-2),g=-p,v=1+p,S=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,T=3,x=2,m=1,D=new Float32Array(T*b*M),P=new Float32Array(x*b*M),U=new Float32Array(m*b*M);for(let H=0;H<M;H++){const l=H%3*2/3-1,he=H>2?0:-1,w=[l,he,0,l+2/3,he,0,l+2/3,he+1,0,l,he,0,l+2/3,he+1,0,l,he+1,0];D.set(w,T*b*H),P.set(S,x*b*H);const N=[H,H,H,H,H,H];U.set(N,m*b*H)}const G=new Nn;G.setAttribute("position",new In(D,T)),G.setAttribute("uv",new In(P,x)),G.setAttribute("faceIndex",new In(U,m)),e.push(G),s>or&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function hl(n,e,t){const i=new Ii(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Cp(n,e,t){const i=new Float32Array(Li),s=new j(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function pl(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function ml(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function Rp(n){let e=new WeakMap,t=null;function i(c){if(c&&c.isTexture){const h=c.mapping,p=h===Ia||h===Na,g=h===fr||h===dr;if(p||g)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let v=e.get(c);return t===null&&(t=new dl(n)),v=p?t.fromEquirectangular(c,v):t.fromCubemap(c,v),e.set(c,v),v.texture}else{if(e.has(c))return e.get(c).texture;{const v=c.image;if(p&&v&&v.height>0||g&&v&&s(v)){t===null&&(t=new dl(n));const S=p?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,S),c.addEventListener("dispose",a),S.texture}else return null}}}return c}function s(c){let h=0;const p=6;for(let g=0;g<p;g++)c[g]!==void 0&&h++;return h===p}function a(c){const h=c.target;h.removeEventListener("dispose",a);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function f(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:f}}function Lp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Pp(n,e,t,i){const s={},a=new WeakMap;function f(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const b in S.attributes)e.remove(S.attributes[b]);for(const b in S.morphAttributes){const T=S.morphAttributes[b];for(let x=0,m=T.length;x<m;x++)e.remove(T[x])}S.removeEventListener("dispose",f),delete s[S.id];const M=a.get(S);M&&(e.remove(M),a.delete(S)),i.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function c(v,S){return s[S.id]===!0||(S.addEventListener("dispose",f),s[S.id]=!0,t.memory.geometries++),S}function h(v){const S=v.attributes;for(const b in S)e.update(S[b],n.ARRAY_BUFFER);const M=v.morphAttributes;for(const b in M){const T=M[b];for(let x=0,m=T.length;x<m;x++)e.update(T[x],n.ARRAY_BUFFER)}}function p(v){const S=[],M=v.index,b=v.attributes.position;let T=0;if(M!==null){const D=M.array;T=M.version;for(let P=0,U=D.length;P<U;P+=3){const G=D[P+0],H=D[P+1],l=D[P+2];S.push(G,H,H,l,l,G)}}else if(b!==void 0){const D=b.array;T=b.version;for(let P=0,U=D.length/3-1;P<U;P+=3){const G=P+0,H=P+1,l=P+2;S.push(G,H,H,l,l,G)}}else return;const x=new(nc(S)?uc:cc)(S,1);x.version=T;const m=a.get(v);m&&e.remove(m),a.set(v,x)}function g(v){const S=a.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&p(v)}else p(v);return a.get(v)}return{get:c,update:h,getWireframeAttribute:g}}function Dp(n,e,t,i){const s=i.isWebGL2;let a;function f(M){a=M}let c,h;function p(M){c=M.type,h=M.bytesPerElement}function g(M,b){n.drawElements(a,b,c,M*h),t.update(b,a,1)}function v(M,b,T){if(T===0)return;let x,m;if(s)x=n,m="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[m](a,b,c,M*h,T),t.update(b,a,T)}function S(M,b,T){if(T===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<T;m++)this.render(M[m]/h,b[m]);else{x.multiDrawElementsWEBGL(a,b,0,c,M,0,T);let m=0;for(let D=0;D<T;D++)m+=b[D];t.update(m,a,1)}}this.setMode=f,this.setIndex=p,this.render=g,this.renderInstances=v,this.renderMultiDraw=S}function Up(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,f,c){switch(t.calls++,f){case n.TRIANGLES:t.triangles+=c*(a/3);break;case n.LINES:t.lines+=c*(a/2);break;case n.LINE_STRIP:t.lines+=c*(a-1);break;case n.LINE_LOOP:t.lines+=c*a;break;case n.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Ip(n,e){return n[0]-e[0]}function Np(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Fp(n,e,t){const i={},s=new Float32Array(8),a=new WeakMap,f=new nn,c=[];for(let p=0;p<8;p++)c[p]=[p,0];function h(p,g,v){const S=p.morphTargetInfluences;if(e.isWebGL2===!0){const b=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,T=b!==void 0?b.length:0;let x=a.get(g);if(x===void 0||x.count!==T){let ee=function(){ue.dispose(),a.delete(g),g.removeEventListener("dispose",ee)};var M=ee;x!==void 0&&x.texture.dispose();const P=g.morphAttributes.position!==void 0,U=g.morphAttributes.normal!==void 0,G=g.morphAttributes.color!==void 0,H=g.morphAttributes.position||[],l=g.morphAttributes.normal||[],he=g.morphAttributes.color||[];let w=0;P===!0&&(w=1),U===!0&&(w=2),G===!0&&(w=3);let N=g.attributes.position.count*w,se=1;N>e.maxTextureSize&&(se=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const de=new Float32Array(N*se*4*T),ue=new sc(de,N,se,T);ue.type=fi,ue.needsUpdate=!0;const k=w*4;for(let re=0;re<T;re++){const oe=H[re],le=l[re],ce=he[re],pe=N*se*4*re;for(let Me=0;Me<oe.count;Me++){const be=Me*k;P===!0&&(f.fromBufferAttribute(oe,Me),de[pe+be+0]=f.x,de[pe+be+1]=f.y,de[pe+be+2]=f.z,de[pe+be+3]=0),U===!0&&(f.fromBufferAttribute(le,Me),de[pe+be+4]=f.x,de[pe+be+5]=f.y,de[pe+be+6]=f.z,de[pe+be+7]=0),G===!0&&(f.fromBufferAttribute(ce,Me),de[pe+be+8]=f.x,de[pe+be+9]=f.y,de[pe+be+10]=f.z,de[pe+be+11]=ce.itemSize===4?f.w:1)}}x={count:T,texture:ue,size:new Rt(N,se)},a.set(g,x),g.addEventListener("dispose",ee)}let m=0;for(let P=0;P<S.length;P++)m+=S[P];const D=g.morphTargetsRelative?1:1-m;v.getUniforms().setValue(n,"morphTargetBaseInfluence",D),v.getUniforms().setValue(n,"morphTargetInfluences",S),v.getUniforms().setValue(n,"morphTargetsTexture",x.texture,t),v.getUniforms().setValue(n,"morphTargetsTextureSize",x.size)}else{const b=S===void 0?0:S.length;let T=i[g.id];if(T===void 0||T.length!==b){T=[];for(let U=0;U<b;U++)T[U]=[U,0];i[g.id]=T}for(let U=0;U<b;U++){const G=T[U];G[0]=U,G[1]=S[U]}T.sort(Np);for(let U=0;U<8;U++)U<b&&T[U][1]?(c[U][0]=T[U][0],c[U][1]=T[U][1]):(c[U][0]=Number.MAX_SAFE_INTEGER,c[U][1]=0);c.sort(Ip);const x=g.morphAttributes.position,m=g.morphAttributes.normal;let D=0;for(let U=0;U<8;U++){const G=c[U],H=G[0],l=G[1];H!==Number.MAX_SAFE_INTEGER&&l?(x&&g.getAttribute("morphTarget"+U)!==x[H]&&g.setAttribute("morphTarget"+U,x[H]),m&&g.getAttribute("morphNormal"+U)!==m[H]&&g.setAttribute("morphNormal"+U,m[H]),s[U]=l,D+=l):(x&&g.hasAttribute("morphTarget"+U)===!0&&g.deleteAttribute("morphTarget"+U),m&&g.hasAttribute("morphNormal"+U)===!0&&g.deleteAttribute("morphNormal"+U),s[U]=0)}const P=g.morphTargetsRelative?1:1-D;v.getUniforms().setValue(n,"morphTargetBaseInfluence",P),v.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:h}}function Op(n,e,t,i){let s=new WeakMap;function a(h){const p=i.render.frame,g=h.geometry,v=e.get(h,g);if(s.get(v)!==p&&(e.update(v),s.set(v,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),s.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;s.get(S)!==p&&(S.update(),s.set(S,p))}return v}function f(){s=new WeakMap}function c(h){const p=h.target;p.removeEventListener("dispose",c),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:f}}class gc extends _n{constructor(e,t,i,s,a,f,c,h,p,g){if(g=g!==void 0?g:Di,g!==Di&&g!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&g===Di&&(i=ui),i===void 0&&g===hr&&(i=Pi),super(null,s,a,f,c,h,g,i,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:cn,this.minFilter=h!==void 0?h:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _c=new _n,vc=new gc(1,1);vc.compareFunction=tc;const xc=new sc,yc=new yf,Sc=new hc,gl=[],_l=[],vl=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function _r(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=gl[s];if(a===void 0&&(a=new Float32Array(s),gl[s]=a),e!==0){i.toArray(a,0);for(let f=1,c=0;f!==e;++f)c+=t,n[f].toArray(a,c)}return a}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Is(n,e){let t=_l[e];t===void 0&&(t=new Int32Array(e),_l[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Bp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Gp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;yl.set(i),n.uniformMatrix2fv(this.addr,!1,yl),qt(t,i)}}function Vp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;xl.set(i),n.uniformMatrix3fv(this.addr,!1,xl),qt(t,i)}}function Wp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;vl.set(i),n.uniformMatrix4fv(this.addr,!1,vl),qt(t,i)}}function Xp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function $p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function Qp(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const a=this.type===n.SAMPLER_2D_SHADOW?vc:_c;t.setTexture2D(e||a,s)}function em(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||yc,s)}function tm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Sc,s)}function nm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xc,s)}function im(n){switch(n){case 5126:return Bp;case 35664:return Hp;case 35665:return zp;case 35666:return kp;case 35674:return Gp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return jp;case 35669:case 35673:return Yp;case 5125:return $p;case 36294:return Kp;case 36295:return Zp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return nm}}function rm(n,e){n.uniform1fv(this.addr,e)}function sm(n,e){const t=_r(e,this.size,2);n.uniform2fv(this.addr,t)}function am(n,e){const t=_r(e,this.size,3);n.uniform3fv(this.addr,t)}function om(n,e){const t=_r(e,this.size,4);n.uniform4fv(this.addr,t)}function lm(n,e){const t=_r(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cm(n,e){const t=_r(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function um(n,e){const t=_r(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fm(n,e){n.uniform1iv(this.addr,e)}function dm(n,e){n.uniform2iv(this.addr,e)}function hm(n,e){n.uniform3iv(this.addr,e)}function pm(n,e){n.uniform4iv(this.addr,e)}function mm(n,e){n.uniform1uiv(this.addr,e)}function gm(n,e){n.uniform2uiv(this.addr,e)}function _m(n,e){n.uniform3uiv(this.addr,e)}function vm(n,e){n.uniform4uiv(this.addr,e)}function xm(n,e,t){const i=this.cache,s=e.length,a=Is(t,s);Xt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let f=0;f!==s;++f)t.setTexture2D(e[f]||_c,a[f])}function ym(n,e,t){const i=this.cache,s=e.length,a=Is(t,s);Xt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let f=0;f!==s;++f)t.setTexture3D(e[f]||yc,a[f])}function Sm(n,e,t){const i=this.cache,s=e.length,a=Is(t,s);Xt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let f=0;f!==s;++f)t.setTextureCube(e[f]||Sc,a[f])}function Mm(n,e,t){const i=this.cache,s=e.length,a=Is(t,s);Xt(i,a)||(n.uniform1iv(this.addr,a),qt(i,a));for(let f=0;f!==s;++f)t.setTexture2DArray(e[f]||xc,a[f])}function Em(n){switch(n){case 5126:return rm;case 35664:return sm;case 35665:return am;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return hm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Mm}}class bm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=im(t.type)}}class Tm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Em(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,f=s.length;a!==f;++a){const c=s[a];c.setValue(e,t[c.id],i)}}}const Ca=/(\w+)(\])?(\[|\.)?/g;function Sl(n,e){n.seq.push(e),n.map[e.id]=e}function wm(n,e,t){const i=n.name,s=i.length;for(Ca.lastIndex=0;;){const a=Ca.exec(i),f=Ca.lastIndex;let c=a[1];const h=a[2]==="]",p=a[3];if(h&&(c=c|0),p===void 0||p==="["&&f+2===s){Sl(t,p===void 0?new bm(c,n,e):new Tm(c,n,e));break}else{let v=t.map[c];v===void 0&&(v=new Am(c),Sl(t,v)),t=v}}}class Es{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),f=e.getUniformLocation(t,a.name);wm(a,f,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,f=t.length;a!==f;++a){const c=t[a],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const f=e[s];f.id in t&&i.push(f)}return i}}function Ml(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Cm=37297;let Rm=0;function Lm(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let f=s;f<a;f++){const c=f+1;i.push(`${c===e?">":" "} ${c}: ${t[f]}`)}return i.join(`
`)}function Pm(n){const e=Ct.getPrimaries(Ct.workingColorSpace),t=Ct.getPrimaries(n);let i;switch(e===t?i="":e===Cs&&t===ws?i="LinearDisplayP3ToLinearSRGB":e===ws&&t===Cs&&(i="LinearSRGBToLinearDisplayP3"),n){case ti:case Ds:return[i,"LinearTransferOETF"];case en:case Xa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function El(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const f=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Lm(n.getShaderSource(e),f)}else return s}function Dm(n,e){const t=Pm(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Um(n,e){let t;switch(e){case ku:t="Linear";break;case Gu:t="Reinhard";break;case Vu:t="OptimizedCineon";break;case Wu:t="ACESFilmic";break;case qu:t="AgX";break;case Xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Im(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(lr).join(`
`)}function Nm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(lr).join(`
`)}function Fm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Om(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),f=a.name;let c=1;a.type===n.FLOAT_MAT2&&(c=2),a.type===n.FLOAT_MAT3&&(c=3),a.type===n.FLOAT_MAT4&&(c=4),t[f]={type:a.type,location:n.getAttribLocation(e,f),locationSize:c}}return t}function lr(n){return n!==""}function bl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ka(n){return n.replace(Bm,zm)}const Hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zm(n,e){let t=ht[e];if(t===void 0){const i=Hm.get(e);if(i!==void 0)t=ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ka(t)}const km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(n){return n.replace(km,Gm)}function Gm(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function wl(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===mu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case fr:case dr:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case dr:e="ENVMAP_MODE_REFRACTION";break}return e}function qm(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case Hu:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function jm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ym(n,e,t,i){const s=n.getContext(),a=t.defines;let f=t.vertexShader,c=t.fragmentShader;const h=Vm(t),p=Wm(t),g=Xm(t),v=qm(t),S=jm(t),M=t.isWebGL2?"":Im(t),b=Nm(t),T=Fm(a),x=s.createProgram();let m,D,P=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(lr).join(`
`),m.length>0&&(m+=`
`),D=[M,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(lr).join(`
`),D.length>0&&(D+=`
`)):(m=[wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),D=[M,wl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pi?"#define TONE_MAPPING":"",t.toneMapping!==pi?ht.tonemapping_pars_fragment:"",t.toneMapping!==pi?Um("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Dm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),f=ka(f),f=bl(f,t),f=Tl(f,t),c=ka(c),c=bl(c,t),c=Tl(c,t),f=Al(f),c=Al(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,m=[b,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,D=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+D);const U=P+m+f,G=P+D+c,H=Ml(s,s.VERTEX_SHADER,U),l=Ml(s,s.FRAGMENT_SHADER,G);s.attachShader(x,H),s.attachShader(x,l),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function he(de){if(n.debug.checkShaderErrors){const ue=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(H).trim(),ee=s.getShaderInfoLog(l).trim();let re=!0,oe=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,H,l);else{const le=El(s,H,"vertex"),ce=El(s,l,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Program Info Log: `+ue+`
`+le+`
`+ce)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(k===""||ee==="")&&(oe=!1);oe&&(de.diagnostics={runnable:re,programLog:ue,vertexShader:{log:k,prefix:m},fragmentShader:{log:ee,prefix:D}})}s.deleteShader(H),s.deleteShader(l),w=new Es(s,x),N=Om(s,x)}let w;this.getUniforms=function(){return w===void 0&&he(this),w};let N;this.getAttributes=function(){return N===void 0&&he(this),N};let se=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return se===!1&&(se=s.getProgramParameter(x,Cm)),se},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=H,this.fragmentShader=l,this}let $m=0;class Km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),f=this._getShaderCacheForMaterial(e);return f.has(s)===!1&&(f.add(s),s.usedTimes++),f.has(a)===!1&&(f.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Zm(e),t.set(e,i)),i}}class Zm{constructor(e){this.id=$m++,this.code=e,this.usedTimes=0}}function Jm(n,e,t,i,s,a,f){const c=new ac,h=new Km,p=[],g=s.isWebGL2,v=s.logarithmicDepthBuffer,S=s.vertexTextures;let M=s.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return w===0?"uv":`uv${w}`}function x(w,N,se,de,ue){const k=de.fog,ee=ue.geometry,re=w.isMeshStandardMaterial?de.environment:null,oe=(w.isMeshStandardMaterial?t:e).get(w.envMap||re),le=oe&&oe.mapping===Ps?oe.image.height:null,ce=b[w.type];w.precision!==null&&(M=s.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const pe=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Me=pe!==void 0?pe.length:0;let be=0;ee.morphAttributes.position!==void 0&&(be=1),ee.morphAttributes.normal!==void 0&&(be=2),ee.morphAttributes.color!==void 0&&(be=3);let te,_e,Pe,Ge;if(ce){const jt=Gn[ce];te=jt.vertexShader,_e=jt.fragmentShader}else te=w.vertexShader,_e=w.fragmentShader,h.update(w),Pe=h.getVertexShaderID(w),Ge=h.getFragmentShaderID(w);const ke=n.getRenderTarget(),it=ue.isInstancedMesh===!0,rt=ue.isBatchedMesh===!0,He=!!w.map,vt=!!w.matcap,q=!!oe,Ht=!!w.aoMap,Xe=!!w.lightMap,tt=!!w.bumpMap,Fe=!!w.normalMap,wt=!!w.displacementMap,je=!!w.emissiveMap,L=!!w.metalnessMap,A=!!w.roughnessMap,Z=w.anisotropy>0,me=w.clearcoat>0,ge=w.iridescence>0,xe=w.sheen>0,ae=w.transmission>0,Se=Z&&!!w.anisotropyMap,Ie=me&&!!w.clearcoatMap,Ye=me&&!!w.clearcoatNormalMap,lt=me&&!!w.clearcoatRoughnessMap,ve=ge&&!!w.iridescenceMap,Mt=ge&&!!w.iridescenceThicknessMap,st=xe&&!!w.sheenColorMap,We=xe&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ue=!!w.specularColorMap,at=!!w.specularIntensityMap,xt=ae&&!!w.transmissionMap,Dt=ae&&!!w.thicknessMap,ct=!!w.gradientMap,Te=!!w.alphaMap,O=w.alphaTest>0,Ae=!!w.alphaHash,Ce=!!w.extensions,$e=!!ee.attributes.uv1,Ne=!!ee.attributes.uv2,ut=!!ee.attributes.uv3;let Et=pi;return w.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Et=n.toneMapping),{isWebGL2:g,shaderID:ce,shaderType:w.type,shaderName:w.name,vertexShader:te,fragmentShader:_e,defines:w.defines,customVertexShaderID:Pe,customFragmentShaderID:Ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:rt,instancing:it,instancingColor:it&&ue.instanceColor!==null,supportsVertexTextures:S,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:ti,map:He,matcap:vt,envMap:q,envMapMode:q&&oe.mapping,envMapCubeUVHeight:le,aoMap:Ht,lightMap:Xe,bumpMap:tt,normalMap:Fe,displacementMap:S&&wt,emissiveMap:je,normalMapObjectSpace:Fe&&w.normalMapType===af,normalMapTangentSpace:Fe&&w.normalMapType===sf,metalnessMap:L,roughnessMap:A,anisotropy:Z,anisotropyMap:Se,clearcoat:me,clearcoatMap:Ie,clearcoatNormalMap:Ye,clearcoatRoughnessMap:lt,iridescence:ge,iridescenceMap:ve,iridescenceThicknessMap:Mt,sheen:xe,sheenColorMap:st,sheenRoughnessMap:We,specularMap:Be,specularColorMap:Ue,specularIntensityMap:at,transmission:ae,transmissionMap:xt,thicknessMap:Dt,gradientMap:ct,opaque:w.transparent===!1&&w.blending===cr,alphaMap:Te,alphaTest:O,alphaHash:Ae,combine:w.combine,mapUv:He&&T(w.map.channel),aoMapUv:Ht&&T(w.aoMap.channel),lightMapUv:Xe&&T(w.lightMap.channel),bumpMapUv:tt&&T(w.bumpMap.channel),normalMapUv:Fe&&T(w.normalMap.channel),displacementMapUv:wt&&T(w.displacementMap.channel),emissiveMapUv:je&&T(w.emissiveMap.channel),metalnessMapUv:L&&T(w.metalnessMap.channel),roughnessMapUv:A&&T(w.roughnessMap.channel),anisotropyMapUv:Se&&T(w.anisotropyMap.channel),clearcoatMapUv:Ie&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:st&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:We&&T(w.sheenRoughnessMap.channel),specularMapUv:Be&&T(w.specularMap.channel),specularColorMapUv:Ue&&T(w.specularColorMap.channel),specularIntensityMapUv:at&&T(w.specularIntensityMap.channel),transmissionMapUv:xt&&T(w.transmissionMap.channel),thicknessMapUv:Dt&&T(w.thicknessMap.channel),alphaMapUv:Te&&T(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Fe||Z),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,vertexUv1s:$e,vertexUv2s:Ne,vertexUv3s:ut,pointsUvs:ue.isPoints===!0&&!!ee.attributes.uv&&(He||Te),fog:!!k,useFog:w.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:ue.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:be,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:w.dithering,shadowMapEnabled:n.shadowMap.enabled&&se.length>0,shadowMapType:n.shadowMap.type,toneMapping:Et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:He&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Qn,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:Ce&&w.extensions.derivatives===!0,extensionFragDepth:Ce&&w.extensions.fragDepth===!0,extensionDrawBuffers:Ce&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ce&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ce&&w.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function m(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const se in w.defines)N.push(se),N.push(w.defines[se]);return w.isRawShaderMaterial===!1&&(D(N,w),P(N,w),N.push(n.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function D(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function P(w,N){c.disableAll(),N.isWebGL2&&c.enable(0),N.supportsVertexTextures&&c.enable(1),N.instancing&&c.enable(2),N.instancingColor&&c.enable(3),N.matcap&&c.enable(4),N.envMap&&c.enable(5),N.normalMapObjectSpace&&c.enable(6),N.normalMapTangentSpace&&c.enable(7),N.clearcoat&&c.enable(8),N.iridescence&&c.enable(9),N.alphaTest&&c.enable(10),N.vertexColors&&c.enable(11),N.vertexAlphas&&c.enable(12),N.vertexUv1s&&c.enable(13),N.vertexUv2s&&c.enable(14),N.vertexUv3s&&c.enable(15),N.vertexTangents&&c.enable(16),N.anisotropy&&c.enable(17),N.alphaHash&&c.enable(18),N.batching&&c.enable(19),w.push(c.mask),c.disableAll(),N.fog&&c.enable(0),N.useFog&&c.enable(1),N.flatShading&&c.enable(2),N.logarithmicDepthBuffer&&c.enable(3),N.skinning&&c.enable(4),N.morphTargets&&c.enable(5),N.morphNormals&&c.enable(6),N.morphColors&&c.enable(7),N.premultipliedAlpha&&c.enable(8),N.shadowMapEnabled&&c.enable(9),N.useLegacyLights&&c.enable(10),N.doubleSided&&c.enable(11),N.flipSided&&c.enable(12),N.useDepthPacking&&c.enable(13),N.dithering&&c.enable(14),N.transmission&&c.enable(15),N.sheen&&c.enable(16),N.opaque&&c.enable(17),N.pointsUvs&&c.enable(18),N.decodeVideoTexture&&c.enable(19),w.push(c.mask)}function U(w){const N=b[w.type];let se;if(N){const de=Gn[N];se=Uf.clone(de.uniforms)}else se=w.uniforms;return se}function G(w,N){let se;for(let de=0,ue=p.length;de<ue;de++){const k=p[de];if(k.cacheKey===N){se=k,++se.usedTimes;break}}return se===void 0&&(se=new Ym(n,N,w,a),p.push(se)),se}function H(w){if(--w.usedTimes===0){const N=p.indexOf(w);p[N]=p[p.length-1],p.pop(),w.destroy()}}function l(w){h.remove(w)}function he(){h.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:U,acquireProgram:G,releaseProgram:H,releaseShaderCache:l,programs:p,dispose:he}}function Qm(){let n=new WeakMap;function e(a){let f=n.get(a);return f===void 0&&(f={},n.set(a,f)),f}function t(a){n.delete(a)}function i(a,f,c){n.get(a)[f]=c}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function eg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Cl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Rl(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function f(v,S,M,b,T,x){let m=n[e];return m===void 0?(m={id:v.id,object:v,geometry:S,material:M,groupOrder:b,renderOrder:v.renderOrder,z:T,group:x},n[e]=m):(m.id=v.id,m.object=v,m.geometry=S,m.material=M,m.groupOrder=b,m.renderOrder=v.renderOrder,m.z=T,m.group=x),e++,m}function c(v,S,M,b,T,x){const m=f(v,S,M,b,T,x);M.transmission>0?i.push(m):M.transparent===!0?s.push(m):t.push(m)}function h(v,S,M,b,T,x){const m=f(v,S,M,b,T,x);M.transmission>0?i.unshift(m):M.transparent===!0?s.unshift(m):t.unshift(m)}function p(v,S){t.length>1&&t.sort(v||eg),i.length>1&&i.sort(S||Cl),s.length>1&&s.sort(S||Cl)}function g(){for(let v=e,S=n.length;v<S;v++){const M=n[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:c,unshift:h,finish:g,sort:p}}function tg(){let n=new WeakMap;function e(i,s){const a=n.get(i);let f;return a===void 0?(f=new Rl,n.set(i,[f])):s>=a.length?(f=new Rl,a.push(f)):f=a[s],f}function t(){n=new WeakMap}return{get:e,dispose:t}}function ng(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new bt};break;case"SpotLight":t={position:new j,direction:new j,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new j,halfWidth:new j,halfHeight:new j};break}return n[e.id]=t,t}}}function ig(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rg=0;function sg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ag(n,e){const t=new ng,i=ig(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new j);const a=new j,f=new Wt,c=new Wt;function h(g,v){let S=0,M=0,b=0;for(let de=0;de<9;de++)s.probe[de].set(0,0,0);let T=0,x=0,m=0,D=0,P=0,U=0,G=0,H=0,l=0,he=0,w=0;g.sort(sg);const N=v===!0?Math.PI:1;for(let de=0,ue=g.length;de<ue;de++){const k=g[de],ee=k.color,re=k.intensity,oe=k.distance,le=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)S+=ee.r*re*N,M+=ee.g*re*N,b+=ee.b*re*N;else if(k.isLightProbe){for(let ce=0;ce<9;ce++)s.probe[ce].addScaledVector(k.sh.coefficients[ce],re);w++}else if(k.isDirectionalLight){const ce=t.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity*N),k.castShadow){const pe=k.shadow,Me=i.get(k);Me.shadowBias=pe.bias,Me.shadowNormalBias=pe.normalBias,Me.shadowRadius=pe.radius,Me.shadowMapSize=pe.mapSize,s.directionalShadow[T]=Me,s.directionalShadowMap[T]=le,s.directionalShadowMatrix[T]=k.shadow.matrix,U++}s.directional[T]=ce,T++}else if(k.isSpotLight){const ce=t.get(k);ce.position.setFromMatrixPosition(k.matrixWorld),ce.color.copy(ee).multiplyScalar(re*N),ce.distance=oe,ce.coneCos=Math.cos(k.angle),ce.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ce.decay=k.decay,s.spot[m]=ce;const pe=k.shadow;if(k.map&&(s.spotLightMap[l]=k.map,l++,pe.updateMatrices(k),k.castShadow&&he++),s.spotLightMatrix[m]=pe.matrix,k.castShadow){const Me=i.get(k);Me.shadowBias=pe.bias,Me.shadowNormalBias=pe.normalBias,Me.shadowRadius=pe.radius,Me.shadowMapSize=pe.mapSize,s.spotShadow[m]=Me,s.spotShadowMap[m]=le,H++}m++}else if(k.isRectAreaLight){const ce=t.get(k);ce.color.copy(ee).multiplyScalar(re),ce.halfWidth.set(k.width*.5,0,0),ce.halfHeight.set(0,k.height*.5,0),s.rectArea[D]=ce,D++}else if(k.isPointLight){const ce=t.get(k);if(ce.color.copy(k.color).multiplyScalar(k.intensity*N),ce.distance=k.distance,ce.decay=k.decay,k.castShadow){const pe=k.shadow,Me=i.get(k);Me.shadowBias=pe.bias,Me.shadowNormalBias=pe.normalBias,Me.shadowRadius=pe.radius,Me.shadowMapSize=pe.mapSize,Me.shadowCameraNear=pe.camera.near,Me.shadowCameraFar=pe.camera.far,s.pointShadow[x]=Me,s.pointShadowMap[x]=le,s.pointShadowMatrix[x]=k.shadow.matrix,G++}s.point[x]=ce,x++}else if(k.isHemisphereLight){const ce=t.get(k);ce.skyColor.copy(k.color).multiplyScalar(re*N),ce.groundColor.copy(k.groundColor).multiplyScalar(re*N),s.hemi[P]=ce,P++}}D>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=we.LTC_FLOAT_1,s.rectAreaLTC2=we.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=we.LTC_HALF_1,s.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=S,s.ambient[1]=M,s.ambient[2]=b;const se=s.hash;(se.directionalLength!==T||se.pointLength!==x||se.spotLength!==m||se.rectAreaLength!==D||se.hemiLength!==P||se.numDirectionalShadows!==U||se.numPointShadows!==G||se.numSpotShadows!==H||se.numSpotMaps!==l||se.numLightProbes!==w)&&(s.directional.length=T,s.spot.length=m,s.rectArea.length=D,s.point.length=x,s.hemi.length=P,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=G,s.pointShadowMap.length=G,s.spotShadow.length=H,s.spotShadowMap.length=H,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=G,s.spotLightMatrix.length=H+l-he,s.spotLightMap.length=l,s.numSpotLightShadowsWithMaps=he,s.numLightProbes=w,se.directionalLength=T,se.pointLength=x,se.spotLength=m,se.rectAreaLength=D,se.hemiLength=P,se.numDirectionalShadows=U,se.numPointShadows=G,se.numSpotShadows=H,se.numSpotMaps=l,se.numLightProbes=w,s.version=rg++)}function p(g,v){let S=0,M=0,b=0,T=0,x=0;const m=v.matrixWorldInverse;for(let D=0,P=g.length;D<P;D++){const U=g[D];if(U.isDirectionalLight){const G=s.directional[S];G.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(m),S++}else if(U.isSpotLight){const G=s.spot[b];G.position.setFromMatrixPosition(U.matrixWorld),G.position.applyMatrix4(m),G.direction.setFromMatrixPosition(U.matrixWorld),a.setFromMatrixPosition(U.target.matrixWorld),G.direction.sub(a),G.direction.transformDirection(m),b++}else if(U.isRectAreaLight){const G=s.rectArea[T];G.position.setFromMatrixPosition(U.matrixWorld),G.position.applyMatrix4(m),c.identity(),f.copy(U.matrixWorld),f.premultiply(m),c.extractRotation(f),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),G.halfWidth.applyMatrix4(c),G.halfHeight.applyMatrix4(c),T++}else if(U.isPointLight){const G=s.point[M];G.position.setFromMatrixPosition(U.matrixWorld),G.position.applyMatrix4(m),M++}else if(U.isHemisphereLight){const G=s.hemi[x];G.direction.setFromMatrixPosition(U.matrixWorld),G.direction.transformDirection(m),x++}}}return{setup:h,setupView:p,state:s}}function Ll(n,e){const t=new ag(n,e),i=[],s=[];function a(){i.length=0,s.length=0}function f(v){i.push(v)}function c(v){s.push(v)}function h(v){t.setup(i,v)}function p(v){t.setupView(i,v)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:h,setupLightsView:p,pushLight:f,pushShadow:c}}function og(n,e){let t=new WeakMap;function i(a,f=0){const c=t.get(a);let h;return c===void 0?(h=new Ll(n,e),t.set(a,[h])):f>=c.length?(h=new Ll(n,e),c.push(h)):h=c[f],h}function s(){t=new WeakMap}return{get:i,dispose:s}}class lg extends gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cg extends gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fg=`uniform sampler2D shadow_pass;
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
}`;function dg(n,e,t){let i=new pc;const s=new Rt,a=new Rt,f=new nn,c=new lg({depthPacking:rf}),h=new cg,p={},g=t.maxTextureSize,v={[gi]:pn,[pn]:gi,[Qn]:Qn},S=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:ug,fragmentShader:fg}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const b=new Nn;b.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new di(b,S),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let m=this.type;this.render=function(H,l,he){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const w=n.getRenderTarget(),N=n.getActiveCubeFace(),se=n.getActiveMipmapLevel(),de=n.state;de.setBlending(hi),de.buffers.color.setClear(1,1,1,1),de.buffers.depth.setTest(!0),de.setScissorTest(!1);const ue=m!==Jn&&this.type===Jn,k=m===Jn&&this.type!==Jn;for(let ee=0,re=H.length;ee<re;ee++){const oe=H[ee],le=oe.shadow;if(le===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);const ce=le.getFrameExtents();if(s.multiply(ce),a.copy(le.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/ce.x),s.x=a.x*ce.x,le.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/ce.y),s.y=a.y*ce.y,le.mapSize.y=a.y)),le.map===null||ue===!0||k===!0){const Me=this.type!==Jn?{minFilter:cn,magFilter:cn}:{};le.map!==null&&le.map.dispose(),le.map=new Ii(s.x,s.y,Me),le.map.texture.name=oe.name+".shadowMap",le.camera.updateProjectionMatrix()}n.setRenderTarget(le.map),n.clear();const pe=le.getViewportCount();for(let Me=0;Me<pe;Me++){const be=le.getViewport(Me);f.set(a.x*be.x,a.y*be.y,a.x*be.z,a.y*be.w),de.viewport(f),le.updateMatrices(oe,Me),i=le.getFrustum(),U(l,he,le.camera,oe,this.type)}le.isPointLightShadow!==!0&&this.type===Jn&&D(le,he),le.needsUpdate=!1}m=this.type,x.needsUpdate=!1,n.setRenderTarget(w,N,se)};function D(H,l){const he=e.update(T);S.defines.VSM_SAMPLES!==H.blurSamples&&(S.defines.VSM_SAMPLES=H.blurSamples,M.defines.VSM_SAMPLES=H.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ii(s.x,s.y)),S.uniforms.shadow_pass.value=H.map.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,n.setRenderTarget(H.mapPass),n.clear(),n.renderBufferDirect(l,null,he,S,T,null),M.uniforms.shadow_pass.value=H.mapPass.texture,M.uniforms.resolution.value=H.mapSize,M.uniforms.radius.value=H.radius,n.setRenderTarget(H.map),n.clear(),n.renderBufferDirect(l,null,he,M,T,null)}function P(H,l,he,w){let N=null;const se=he.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(se!==void 0)N=se;else if(N=he.isPointLight===!0?h:c,n.localClippingEnabled&&l.clipShadows===!0&&Array.isArray(l.clippingPlanes)&&l.clippingPlanes.length!==0||l.displacementMap&&l.displacementScale!==0||l.alphaMap&&l.alphaTest>0||l.map&&l.alphaTest>0){const de=N.uuid,ue=l.uuid;let k=p[de];k===void 0&&(k={},p[de]=k);let ee=k[ue];ee===void 0&&(ee=N.clone(),k[ue]=ee,l.addEventListener("dispose",G)),N=ee}if(N.visible=l.visible,N.wireframe=l.wireframe,w===Jn?N.side=l.shadowSide!==null?l.shadowSide:l.side:N.side=l.shadowSide!==null?l.shadowSide:v[l.side],N.alphaMap=l.alphaMap,N.alphaTest=l.alphaTest,N.map=l.map,N.clipShadows=l.clipShadows,N.clippingPlanes=l.clippingPlanes,N.clipIntersection=l.clipIntersection,N.displacementMap=l.displacementMap,N.displacementScale=l.displacementScale,N.displacementBias=l.displacementBias,N.wireframeLinewidth=l.wireframeLinewidth,N.linewidth=l.linewidth,he.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const de=n.properties.get(N);de.light=he}return N}function U(H,l,he,w,N){if(H.visible===!1)return;if(H.layers.test(l.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&N===Jn)&&(!H.frustumCulled||i.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,H.matrixWorld);const ue=e.update(H),k=H.material;if(Array.isArray(k)){const ee=ue.groups;for(let re=0,oe=ee.length;re<oe;re++){const le=ee[re],ce=k[le.materialIndex];if(ce&&ce.visible){const pe=P(H,ce,w,N);H.onBeforeShadow(n,H,l,he,ue,pe,le),n.renderBufferDirect(he,null,ue,pe,H,le),H.onAfterShadow(n,H,l,he,ue,pe,le)}}}else if(k.visible){const ee=P(H,k,w,N);H.onBeforeShadow(n,H,l,he,ue,ee,null),n.renderBufferDirect(he,null,ue,ee,H,null),H.onAfterShadow(n,H,l,he,ue,ee,null)}}const de=H.children;for(let ue=0,k=de.length;ue<k;ue++)U(de[ue],l,he,w,N)}function G(H){H.target.removeEventListener("dispose",G);for(const he in p){const w=p[he],N=H.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}function hg(n,e,t){const i=t.isWebGL2;function s(){let O=!1;const Ae=new nn;let Ce=null;const $e=new nn(0,0,0,0);return{setMask:function(Ne){Ce!==Ne&&!O&&(n.colorMask(Ne,Ne,Ne,Ne),Ce=Ne)},setLocked:function(Ne){O=Ne},setClear:function(Ne,ut,Et,zt,jt){jt===!0&&(Ne*=zt,ut*=zt,Et*=zt),Ae.set(Ne,ut,Et,zt),$e.equals(Ae)===!1&&(n.clearColor(Ne,ut,Et,zt),$e.copy(Ae))},reset:function(){O=!1,Ce=null,$e.set(-1,0,0,0)}}}function a(){let O=!1,Ae=null,Ce=null,$e=null;return{setTest:function(Ne){Ne?rt(n.DEPTH_TEST):He(n.DEPTH_TEST)},setMask:function(Ne){Ae!==Ne&&!O&&(n.depthMask(Ne),Ae=Ne)},setFunc:function(Ne){if(Ce!==Ne){switch(Ne){case Du:n.depthFunc(n.NEVER);break;case Uu:n.depthFunc(n.ALWAYS);break;case Iu:n.depthFunc(n.LESS);break;case Ts:n.depthFunc(n.LEQUAL);break;case Nu:n.depthFunc(n.EQUAL);break;case Fu:n.depthFunc(n.GEQUAL);break;case Ou:n.depthFunc(n.GREATER);break;case Bu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ce=Ne}},setLocked:function(Ne){O=Ne},setClear:function(Ne){$e!==Ne&&(n.clearDepth(Ne),$e=Ne)},reset:function(){O=!1,Ae=null,Ce=null,$e=null}}}function f(){let O=!1,Ae=null,Ce=null,$e=null,Ne=null,ut=null,Et=null,zt=null,jt=null;return{setTest:function(Tt){O||(Tt?rt(n.STENCIL_TEST):He(n.STENCIL_TEST))},setMask:function(Tt){Ae!==Tt&&!O&&(n.stencilMask(Tt),Ae=Tt)},setFunc:function(Tt,Ft,Kt){(Ce!==Tt||$e!==Ft||Ne!==Kt)&&(n.stencilFunc(Tt,Ft,Kt),Ce=Tt,$e=Ft,Ne=Kt)},setOp:function(Tt,Ft,Kt){(ut!==Tt||Et!==Ft||zt!==Kt)&&(n.stencilOp(Tt,Ft,Kt),ut=Tt,Et=Ft,zt=Kt)},setLocked:function(Tt){O=Tt},setClear:function(Tt){jt!==Tt&&(n.clearStencil(Tt),jt=Tt)},reset:function(){O=!1,Ae=null,Ce=null,$e=null,Ne=null,ut=null,Et=null,zt=null,jt=null}}}const c=new s,h=new a,p=new f,g=new WeakMap,v=new WeakMap;let S={},M={},b=new WeakMap,T=[],x=null,m=!1,D=null,P=null,U=null,G=null,H=null,l=null,he=null,w=new bt(0,0,0),N=0,se=!1,de=null,ue=null,k=null,ee=null,re=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ce=0;const pe=n.getParameter(n.VERSION);pe.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(pe)[1]),le=ce>=1):pe.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),le=ce>=2);let Me=null,be={};const te=n.getParameter(n.SCISSOR_BOX),_e=n.getParameter(n.VIEWPORT),Pe=new nn().fromArray(te),Ge=new nn().fromArray(_e);function ke(O,Ae,Ce,$e){const Ne=new Uint8Array(4),ut=n.createTexture();n.bindTexture(O,ut),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Et=0;Et<Ce;Et++)i&&(O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ae,0,n.RGBA,1,1,$e,0,n.RGBA,n.UNSIGNED_BYTE,Ne):n.texImage2D(Ae+Et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ne);return ut}const it={};it[n.TEXTURE_2D]=ke(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(it[n.TEXTURE_2D_ARRAY]=ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),h.setClear(1),p.setClear(0),rt(n.DEPTH_TEST),h.setFunc(Ts),je(!1),L(uo),rt(n.CULL_FACE),Fe(hi);function rt(O){S[O]!==!0&&(n.enable(O),S[O]=!0)}function He(O){S[O]!==!1&&(n.disable(O),S[O]=!1)}function vt(O,Ae){return M[O]!==Ae?(n.bindFramebuffer(O,Ae),M[O]=Ae,i&&(O===n.DRAW_FRAMEBUFFER&&(M[n.FRAMEBUFFER]=Ae),O===n.FRAMEBUFFER&&(M[n.DRAW_FRAMEBUFFER]=Ae)),!0):!1}function q(O,Ae){let Ce=T,$e=!1;if(O)if(Ce=b.get(Ae),Ce===void 0&&(Ce=[],b.set(Ae,Ce)),O.isWebGLMultipleRenderTargets){const Ne=O.texture;if(Ce.length!==Ne.length||Ce[0]!==n.COLOR_ATTACHMENT0){for(let ut=0,Et=Ne.length;ut<Et;ut++)Ce[ut]=n.COLOR_ATTACHMENT0+ut;Ce.length=Ne.length,$e=!0}}else Ce[0]!==n.COLOR_ATTACHMENT0&&(Ce[0]=n.COLOR_ATTACHMENT0,$e=!0);else Ce[0]!==n.BACK&&(Ce[0]=n.BACK,$e=!0);$e&&(t.isWebGL2?n.drawBuffers(Ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ce))}function Ht(O){return x!==O?(n.useProgram(O),x=O,!0):!1}const Xe={[Ri]:n.FUNC_ADD,[_u]:n.FUNC_SUBTRACT,[vu]:n.FUNC_REVERSE_SUBTRACT};if(i)Xe[mo]=n.MIN,Xe[go]=n.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(Xe[mo]=O.MIN_EXT,Xe[go]=O.MAX_EXT)}const tt={[xu]:n.ZERO,[yu]:n.ONE,[Su]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[wu]:n.SRC_ALPHA_SATURATE,[Tu]:n.DST_COLOR,[Eu]:n.DST_ALPHA,[Mu]:n.ONE_MINUS_SRC_COLOR,[Ua]:n.ONE_MINUS_SRC_ALPHA,[Au]:n.ONE_MINUS_DST_COLOR,[bu]:n.ONE_MINUS_DST_ALPHA,[Cu]:n.CONSTANT_COLOR,[Ru]:n.ONE_MINUS_CONSTANT_COLOR,[Lu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function Fe(O,Ae,Ce,$e,Ne,ut,Et,zt,jt,Tt){if(O===hi){m===!0&&(He(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),O!==gu){if(O!==D||Tt!==se){if((P!==Ri||H!==Ri)&&(n.blendEquation(n.FUNC_ADD),P=Ri,H=Ri),Tt)switch(O){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fo:n.blendFunc(n.ONE,n.ONE);break;case ho:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case po:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case fo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ho:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case po:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}U=null,G=null,l=null,he=null,w.set(0,0,0),N=0,D=O,se=Tt}return}Ne=Ne||Ae,ut=ut||Ce,Et=Et||$e,(Ae!==P||Ne!==H)&&(n.blendEquationSeparate(Xe[Ae],Xe[Ne]),P=Ae,H=Ne),(Ce!==U||$e!==G||ut!==l||Et!==he)&&(n.blendFuncSeparate(tt[Ce],tt[$e],tt[ut],tt[Et]),U=Ce,G=$e,l=ut,he=Et),(zt.equals(w)===!1||jt!==N)&&(n.blendColor(zt.r,zt.g,zt.b,jt),w.copy(zt),N=jt),D=O,se=!1}function wt(O,Ae){O.side===Qn?He(n.CULL_FACE):rt(n.CULL_FACE);let Ce=O.side===pn;Ae&&(Ce=!Ce),je(Ce),O.blending===cr&&O.transparent===!1?Fe(hi):Fe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),h.setFunc(O.depthFunc),h.setTest(O.depthTest),h.setMask(O.depthWrite),c.setMask(O.colorWrite);const $e=O.stencilWrite;p.setTest($e),$e&&(p.setMask(O.stencilWriteMask),p.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),p.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Z(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):He(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(O){de!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),de=O)}function L(O){O!==hu?(rt(n.CULL_FACE),O!==ue&&(O===uo?n.cullFace(n.BACK):O===pu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):He(n.CULL_FACE),ue=O}function A(O){O!==k&&(le&&n.lineWidth(O),k=O)}function Z(O,Ae,Ce){O?(rt(n.POLYGON_OFFSET_FILL),(ee!==Ae||re!==Ce)&&(n.polygonOffset(Ae,Ce),ee=Ae,re=Ce)):He(n.POLYGON_OFFSET_FILL)}function me(O){O?rt(n.SCISSOR_TEST):He(n.SCISSOR_TEST)}function ge(O){O===void 0&&(O=n.TEXTURE0+oe-1),Me!==O&&(n.activeTexture(O),Me=O)}function xe(O,Ae,Ce){Ce===void 0&&(Me===null?Ce=n.TEXTURE0+oe-1:Ce=Me);let $e=be[Ce];$e===void 0&&($e={type:void 0,texture:void 0},be[Ce]=$e),($e.type!==O||$e.texture!==Ae)&&(Me!==Ce&&(n.activeTexture(Ce),Me=Ce),n.bindTexture(O,Ae||it[O]),$e.type=O,$e.texture=Ae)}function ae(){const O=be[Me];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ye(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function We(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(O){Pe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),Pe.copy(O))}function xt(O){Ge.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ge.copy(O))}function Dt(O,Ae){let Ce=v.get(Ae);Ce===void 0&&(Ce=new WeakMap,v.set(Ae,Ce));let $e=Ce.get(O);$e===void 0&&($e=n.getUniformBlockIndex(Ae,O.name),Ce.set(O,$e))}function ct(O,Ae){const $e=v.get(Ae).get(O);g.get(Ae)!==$e&&(n.uniformBlockBinding(Ae,$e,O.__bindingPointIndex),g.set(Ae,$e))}function Te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),S={},Me=null,be={},M={},b=new WeakMap,T=[],x=null,m=!1,D=null,P=null,U=null,G=null,H=null,l=null,he=null,w=new bt(0,0,0),N=0,se=!1,de=null,ue=null,k=null,ee=null,re=null,Pe.set(0,0,n.canvas.width,n.canvas.height),Ge.set(0,0,n.canvas.width,n.canvas.height),c.reset(),h.reset(),p.reset()}return{buffers:{color:c,depth:h,stencil:p},enable:rt,disable:He,bindFramebuffer:vt,drawBuffers:q,useProgram:Ht,setBlending:Fe,setMaterial:wt,setFlipSided:je,setCullFace:L,setLineWidth:A,setPolygonOffset:Z,setScissorTest:me,activeTexture:ge,bindTexture:xe,unbindTexture:ae,compressedTexImage2D:Se,compressedTexImage3D:Ie,texImage2D:Be,texImage3D:Ue,updateUBOMapping:Dt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:We,texSubImage2D:Ye,texSubImage3D:lt,compressedTexSubImage2D:ve,compressedTexSubImage3D:Mt,scissor:at,viewport:xt,reset:Te}}function pg(n,e,t,i,s,a,f){const c=s.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,A){return M?new OffscreenCanvas(L,A):Ls("canvas")}function T(L,A,Z,me){let ge=1;if((L.width>me||L.height>me)&&(ge=me/Math.max(L.width,L.height)),ge<1||A===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const xe=A?za:Math.floor,ae=xe(ge*L.width),Se=xe(ge*L.height);v===void 0&&(v=b(ae,Se));const Ie=Z?b(ae,Se):v;return Ie.width=ae,Ie.height=Se,Ie.getContext("2d").drawImage(L,0,0,ae,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ae+"x"+Se+")."),Ie}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function x(L){return qo(L.width)&&qo(L.height)}function m(L){return c?!1:L.wrapS!==Dn||L.wrapT!==Dn||L.minFilter!==cn&&L.minFilter!==Sn}function D(L,A){return L.generateMipmaps&&A&&L.minFilter!==cn&&L.minFilter!==Sn}function P(L){n.generateMipmap(L)}function U(L,A,Z,me,ge=!1){if(c===!1)return A;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let xe=A;if(A===n.RED&&(Z===n.FLOAT&&(xe=n.R32F),Z===n.HALF_FLOAT&&(xe=n.R16F),Z===n.UNSIGNED_BYTE&&(xe=n.R8)),A===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(xe=n.R8UI),Z===n.UNSIGNED_SHORT&&(xe=n.R16UI),Z===n.UNSIGNED_INT&&(xe=n.R32UI),Z===n.BYTE&&(xe=n.R8I),Z===n.SHORT&&(xe=n.R16I),Z===n.INT&&(xe=n.R32I)),A===n.RG&&(Z===n.FLOAT&&(xe=n.RG32F),Z===n.HALF_FLOAT&&(xe=n.RG16F),Z===n.UNSIGNED_BYTE&&(xe=n.RG8)),A===n.RGBA){const ae=ge?As:Ct.getTransfer(me);Z===n.FLOAT&&(xe=n.RGBA32F),Z===n.HALF_FLOAT&&(xe=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(xe=ae===It?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(xe=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(xe=n.RGB5_A1)}return(xe===n.R16F||xe===n.R32F||xe===n.RG16F||xe===n.RG32F||xe===n.RGBA16F||xe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function G(L,A,Z){return D(L,Z)===!0||L.isFramebufferTexture&&L.minFilter!==cn&&L.minFilter!==Sn?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function H(L){return L===cn||L===_o||L===Qs?n.NEAREST:n.LINEAR}function l(L){const A=L.target;A.removeEventListener("dispose",l),w(A),A.isVideoTexture&&g.delete(A)}function he(L){const A=L.target;A.removeEventListener("dispose",he),se(A)}function w(L){const A=i.get(L);if(A.__webglInit===void 0)return;const Z=L.source,me=S.get(Z);if(me){const ge=me[A.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&N(L),Object.keys(me).length===0&&S.delete(Z)}i.remove(L)}function N(L){const A=i.get(L);n.deleteTexture(A.__webglTexture);const Z=L.source,me=S.get(Z);delete me[A.__cacheKey],f.memory.textures--}function se(L){const A=L.texture,Z=i.get(L),me=i.get(A);if(me.__webglTexture!==void 0&&(n.deleteTexture(me.__webglTexture),f.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(Z.__webglFramebuffer[ge]))for(let xe=0;xe<Z.__webglFramebuffer[ge].length;xe++)n.deleteFramebuffer(Z.__webglFramebuffer[ge][xe]);else n.deleteFramebuffer(Z.__webglFramebuffer[ge]);Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[ge])}else{if(Array.isArray(Z.__webglFramebuffer))for(let ge=0;ge<Z.__webglFramebuffer.length;ge++)n.deleteFramebuffer(Z.__webglFramebuffer[ge]);else n.deleteFramebuffer(Z.__webglFramebuffer);if(Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ge=0;ge<Z.__webglColorRenderbuffer.length;ge++)Z.__webglColorRenderbuffer[ge]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[ge]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let ge=0,xe=A.length;ge<xe;ge++){const ae=i.get(A[ge]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),f.memory.textures--),i.remove(A[ge])}i.remove(A),i.remove(L)}let de=0;function ue(){de=0}function k(){const L=de;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),de+=1,L}function ee(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function re(L,A){const Z=i.get(L);if(L.isVideoTexture&&wt(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(Z,L,A);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+A)}function oe(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Pe(Z,L,A);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+A)}function le(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Pe(Z,L,A);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+A)}function ce(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){Ge(Z,L,A);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+A)}const pe={[Fa]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Oa]:n.MIRRORED_REPEAT},Me={[cn]:n.NEAREST,[_o]:n.NEAREST_MIPMAP_NEAREST,[Qs]:n.NEAREST_MIPMAP_LINEAR,[Sn]:n.LINEAR,[ju]:n.LINEAR_MIPMAP_NEAREST,[Dr]:n.LINEAR_MIPMAP_LINEAR},be={[of]:n.NEVER,[hf]:n.ALWAYS,[lf]:n.LESS,[tc]:n.LEQUAL,[cf]:n.EQUAL,[df]:n.GEQUAL,[uf]:n.GREATER,[ff]:n.NOTEQUAL};function te(L,A,Z){if(Z?(n.texParameteri(L,n.TEXTURE_WRAP_S,pe[A.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,pe[A.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,pe[A.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,Me[A.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,Me[A.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(A.wrapS!==Dn||A.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,H(A.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,H(A.minFilter)),A.minFilter!==cn&&A.minFilter!==Sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,be[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===cn||A.minFilter!==Qs&&A.minFilter!==Dr||A.type===fi&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Ur&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||i.get(A).__currentAnisotropy)&&(n.texParameterf(L,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy)}}function _e(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",l));const me=A.source;let ge=S.get(me);ge===void 0&&(ge={},S.set(me,ge));const xe=ee(A);if(xe!==L.__cacheKey){ge[xe]===void 0&&(ge[xe]={texture:n.createTexture(),usedTimes:0},f.memory.textures++,Z=!0),ge[xe].usedTimes++;const ae=ge[L.__cacheKey];ae!==void 0&&(ge[L.__cacheKey].usedTimes--,ae.usedTimes===0&&N(A)),L.__cacheKey=xe,L.__webglTexture=ge[xe].texture}return Z}function Pe(L,A,Z){let me=n.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=n.TEXTURE_3D);const ge=_e(L,A),xe=A.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+Z);const ae=i.get(xe);if(xe.version!==ae.__version||ge===!0){t.activeTexture(n.TEXTURE0+Z);const Se=Ct.getPrimaries(Ct.workingColorSpace),Ie=A.colorSpace===En?null:Ct.getPrimaries(A.colorSpace),Ye=A.colorSpace===En||Se===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const lt=m(A)&&x(A.image)===!1;let ve=T(A.image,lt,!1,s.maxTextureSize);ve=je(A,ve);const Mt=x(ve)||c,st=a.convert(A.format,A.colorSpace);let We=a.convert(A.type),Be=U(A.internalFormat,st,We,A.colorSpace,A.isVideoTexture);te(me,A,Mt);let Ue;const at=A.mipmaps,xt=c&&A.isVideoTexture!==!0&&Be!==Ql,Dt=ae.__version===void 0||ge===!0,ct=G(A,ve,Mt);if(A.isDepthTexture)Be=n.DEPTH_COMPONENT,c?A.type===fi?Be=n.DEPTH_COMPONENT32F:A.type===ui?Be=n.DEPTH_COMPONENT24:A.type===Pi?Be=n.DEPTH24_STENCIL8:Be=n.DEPTH_COMPONENT16:A.type===fi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Di&&Be===n.DEPTH_COMPONENT&&A.type!==Wa&&A.type!==ui&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ui,We=a.convert(A.type)),A.format===hr&&Be===n.DEPTH_COMPONENT&&(Be=n.DEPTH_STENCIL,A.type!==Pi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Pi,We=a.convert(A.type))),Dt&&(xt?t.texStorage2D(n.TEXTURE_2D,1,Be,ve.width,ve.height):t.texImage2D(n.TEXTURE_2D,0,Be,ve.width,ve.height,0,st,We,null));else if(A.isDataTexture)if(at.length>0&&Mt){xt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],xt?t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,We,Ue.data):t.texImage2D(n.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,st,We,Ue.data);A.generateMipmaps=!1}else xt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ct,Be,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve.width,ve.height,st,We,ve.data)):t.texImage2D(n.TEXTURE_2D,0,Be,ve.width,ve.height,0,st,We,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){xt&&Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Be,at[0].width,at[0].height,ve.depth);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],A.format!==Un?st!==null?xt?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,ve.depth,st,Ue.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Te,Be,Ue.width,Ue.height,ve.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Te,0,0,0,Ue.width,Ue.height,ve.depth,st,We,Ue.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Te,Be,Ue.width,Ue.height,ve.depth,0,st,We,Ue.data)}else{xt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],A.format!==Un?st!==null?xt?t.compressedTexSubImage2D(n.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,Ue.data):t.compressedTexImage2D(n.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?t.texSubImage2D(n.TEXTURE_2D,Te,0,0,Ue.width,Ue.height,st,We,Ue.data):t.texImage2D(n.TEXTURE_2D,Te,Be,Ue.width,Ue.height,0,st,We,Ue.data)}else if(A.isDataArrayTexture)xt?(Dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ct,Be,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,st,We,ve.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,ve.width,ve.height,ve.depth,0,st,We,ve.data);else if(A.isData3DTexture)xt?(Dt&&t.texStorage3D(n.TEXTURE_3D,ct,Be,ve.width,ve.height,ve.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,st,We,ve.data)):t.texImage3D(n.TEXTURE_3D,0,Be,ve.width,ve.height,ve.depth,0,st,We,ve.data);else if(A.isFramebufferTexture){if(Dt)if(xt)t.texStorage2D(n.TEXTURE_2D,ct,Be,ve.width,ve.height);else{let Te=ve.width,O=ve.height;for(let Ae=0;Ae<ct;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Be,Te,O,0,st,We,null),Te>>=1,O>>=1}}else if(at.length>0&&Mt){xt&&Dt&&t.texStorage2D(n.TEXTURE_2D,ct,Be,at[0].width,at[0].height);for(let Te=0,O=at.length;Te<O;Te++)Ue=at[Te],xt?t.texSubImage2D(n.TEXTURE_2D,Te,0,0,st,We,Ue):t.texImage2D(n.TEXTURE_2D,Te,Be,st,We,Ue);A.generateMipmaps=!1}else xt?(Dt&&t.texStorage2D(n.TEXTURE_2D,ct,Be,ve.width,ve.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,st,We,ve)):t.texImage2D(n.TEXTURE_2D,0,Be,st,We,ve);D(A,Mt)&&P(me),ae.__version=xe.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Ge(L,A,Z){if(A.image.length!==6)return;const me=_e(L,A),ge=A.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Z);const xe=i.get(ge);if(ge.version!==xe.__version||me===!0){t.activeTexture(n.TEXTURE0+Z);const ae=Ct.getPrimaries(Ct.workingColorSpace),Se=A.colorSpace===En?null:Ct.getPrimaries(A.colorSpace),Ie=A.colorSpace===En||ae===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,A.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,A.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,lt=A.image[0]&&A.image[0].isDataTexture,ve=[];for(let Te=0;Te<6;Te++)!Ye&&!lt?ve[Te]=T(A.image[Te],!1,!0,s.maxCubemapSize):ve[Te]=lt?A.image[Te].image:A.image[Te],ve[Te]=je(A,ve[Te]);const Mt=ve[0],st=x(Mt)||c,We=a.convert(A.format,A.colorSpace),Be=a.convert(A.type),Ue=U(A.internalFormat,We,Be,A.colorSpace),at=c&&A.isVideoTexture!==!0,xt=xe.__version===void 0||me===!0;let Dt=G(A,Mt,st);te(n.TEXTURE_CUBE_MAP,A,st);let ct;if(Ye){at&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ue,Mt.width,Mt.height);for(let Te=0;Te<6;Te++){ct=ve[Te].mipmaps;for(let O=0;O<ct.length;O++){const Ae=ct[O];A.format!==Un?We!==null?at?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Ae.width,Ae.height,We,Ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ue,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,0,0,Ae.width,Ae.height,We,Be,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O,Ue,Ae.width,Ae.height,0,We,Be,Ae.data)}}}else{ct=A.mipmaps,at&&xt&&(ct.length>0&&Dt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,Ue,ve[0].width,ve[0].height));for(let Te=0;Te<6;Te++)if(lt){at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ve[Te].width,ve[Te].height,We,Be,ve[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ue,ve[Te].width,ve[Te].height,0,We,Be,ve[Te].data);for(let O=0;O<ct.length;O++){const Ce=ct[O].image[Te].image;at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,Ce.width,Ce.height,We,Be,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ue,Ce.width,Ce.height,0,We,Be,Ce.data)}}else{at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,We,Be,ve[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Ue,We,Be,ve[Te]);for(let O=0;O<ct.length;O++){const Ae=ct[O];at?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,0,0,We,Be,Ae.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,O+1,Ue,We,Be,Ae.image[Te])}}}D(A,st)&&P(n.TEXTURE_CUBE_MAP),xe.__version=ge.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function ke(L,A,Z,me,ge,xe){const ae=a.convert(Z.format,Z.colorSpace),Se=a.convert(Z.type),Ie=U(Z.internalFormat,ae,Se,Z.colorSpace);if(!i.get(A).__hasExternalTextures){const lt=Math.max(1,A.width>>xe),ve=Math.max(1,A.height>>xe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,xe,Ie,lt,ve,A.depth,0,ae,Se,null):t.texImage2D(ge,xe,Ie,lt,ve,0,ae,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Fe(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ge,i.get(Z).__webglTexture,0,tt(A)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ge,i.get(Z).__webglTexture,xe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(L,A,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,L),A.depthBuffer&&!A.stencilBuffer){let me=c===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||Fe(A)){const ge=A.depthTexture;ge&&ge.isDepthTexture&&(ge.type===fi?me=n.DEPTH_COMPONENT32F:ge.type===ui&&(me=n.DEPTH_COMPONENT24));const xe=tt(A);Fe(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,me,A.width,A.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,me,A.width,A.height)}else n.renderbufferStorage(n.RENDERBUFFER,me,A.width,A.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(A.depthBuffer&&A.stencilBuffer){const me=tt(A);Z&&Fe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,A.width,A.height):Fe(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,n.DEPTH24_STENCIL8,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ge=0;ge<me.length;ge++){const xe=me[ge],ae=a.convert(xe.format,xe.colorSpace),Se=a.convert(xe.type),Ie=U(xe.internalFormat,ae,Se,xe.colorSpace),Ye=tt(A);Z&&Fe(A)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,Ie,A.width,A.height):Fe(A)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye,Ie,A.width,A.height):n.renderbufferStorage(n.RENDERBUFFER,Ie,A.width,A.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const me=i.get(A.depthTexture).__webglTexture,ge=tt(A);if(A.depthTexture.format===Di)Fe(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,me,0);else if(A.depthTexture.format===hr)Fe(A)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0,ge):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function He(L){const A=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");rt(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=n.createRenderbuffer(),it(A.__webglDepthbuffer[me],L,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=n.createRenderbuffer(),it(A.__webglDepthbuffer,L,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function vt(L,A,Z){const me=i.get(L);A!==void 0&&ke(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&He(L)}function q(L){const A=L.texture,Z=i.get(L),me=i.get(A);L.addEventListener("dispose",he),L.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=A.version,f.memory.textures++);const ge=L.isWebGLCubeRenderTarget===!0,xe=L.isWebGLMultipleRenderTargets===!0,ae=x(L)||c;if(ge){Z.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(c&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[Se]=[];for(let Ie=0;Ie<A.mipmaps.length;Ie++)Z.__webglFramebuffer[Se][Ie]=n.createFramebuffer()}else Z.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Se=0;Se<A.mipmaps.length;Se++)Z.__webglFramebuffer[Se]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(xe)if(s.drawBuffers){const Se=L.texture;for(let Ie=0,Ye=Se.length;Ie<Ye;Ie++){const lt=i.get(Se[Ie]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),f.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&L.samples>0&&Fe(L)===!1){const Se=xe?A:[A];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ie=0;Ie<Se.length;Ie++){const Ye=Se[Ie];Z.__webglColorRenderbuffer[Ie]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie]);const lt=a.convert(Ye.format,Ye.colorSpace),ve=a.convert(Ye.type),Mt=U(Ye.internalFormat,lt,ve,Ye.colorSpace,L.isXRRenderTarget===!0),st=tt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,st,Mt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ie,n.RENDERBUFFER,Z.__webglColorRenderbuffer[Ie])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),it(Z.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ge){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),te(n.TEXTURE_CUBE_MAP,A,ae);for(let Se=0;Se<6;Se++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ke(Z.__webglFramebuffer[Se][Ie],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ie);else ke(Z.__webglFramebuffer[Se],L,A,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);D(A,ae)&&P(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){const Se=L.texture;for(let Ie=0,Ye=Se.length;Ie<Ye;Ie++){const lt=Se[Ie],ve=i.get(lt);t.bindTexture(n.TEXTURE_2D,ve.__webglTexture),te(n.TEXTURE_2D,lt,ae),ke(Z.__webglFramebuffer,L,lt,n.COLOR_ATTACHMENT0+Ie,n.TEXTURE_2D,0),D(lt,ae)&&P(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(c?Se=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Se,me.__webglTexture),te(Se,A,ae),c&&A.mipmaps&&A.mipmaps.length>0)for(let Ie=0;Ie<A.mipmaps.length;Ie++)ke(Z.__webglFramebuffer[Ie],L,A,n.COLOR_ATTACHMENT0,Se,Ie);else ke(Z.__webglFramebuffer,L,A,n.COLOR_ATTACHMENT0,Se,0);D(A,ae)&&P(Se),t.unbindTexture()}L.depthBuffer&&He(L)}function Ht(L){const A=x(L)||c,Z=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let me=0,ge=Z.length;me<ge;me++){const xe=Z[me];if(D(xe,A)){const ae=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Se=i.get(xe).__webglTexture;t.bindTexture(ae,Se),P(ae),t.unbindTexture()}}}function Xe(L){if(c&&L.samples>0&&Fe(L)===!1){const A=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],Z=L.width,me=L.height;let ge=n.COLOR_BUFFER_BIT;const xe=[],ae=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(L),Ie=L.isWebGLMultipleRenderTargets===!0;if(Ie)for(let Ye=0;Ye<A.length;Ye++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ye=0;Ye<A.length;Ye++){xe.push(n.COLOR_ATTACHMENT0+Ye),L.depthBuffer&&xe.push(ae);const lt=Se.__ignoreDepthValues!==void 0?Se.__ignoreDepthValues:!1;if(lt===!1&&(L.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ie&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ye]),lt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ae])),Ie){const ve=i.get(A[Ye]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,Z,me,0,0,Z,me,ge,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xe)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<A.length;Ye++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Ye]);const lt=i.get(A[Ye]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ye,n.TEXTURE_2D,lt,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}}function tt(L){return Math.min(s.maxSamples,L.samples)}function Fe(L){const A=i.get(L);return c&&L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function wt(L){const A=f.render.frame;g.get(L)!==A&&(g.set(L,A),L.update())}function je(L,A){const Z=L.colorSpace,me=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Ba||Z!==ti&&Z!==En&&(Ct.getTransfer(Z)===It?c===!1?e.has("EXT_sRGB")===!0&&me===Un?(L.format=Ba,L.minFilter=Sn,L.generateMipmaps=!1):A=ic.sRGBToLinear(A):(me!==Un||ge!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}this.allocateTextureUnit=k,this.resetTextureUnits=ue,this.setTexture2D=re,this.setTexture2DArray=oe,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=vt,this.setupRenderTarget=q,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Fe}function mg(n,e,t){const i=t.isWebGL2;function s(a,f=En){let c;const h=Ct.getTransfer(f);if(a===mi)return n.UNSIGNED_BYTE;if(a===Yl)return n.UNSIGNED_SHORT_4_4_4_4;if(a===$l)return n.UNSIGNED_SHORT_5_5_5_1;if(a===Yu)return n.BYTE;if(a===$u)return n.SHORT;if(a===Wa)return n.UNSIGNED_SHORT;if(a===jl)return n.INT;if(a===ui)return n.UNSIGNED_INT;if(a===fi)return n.FLOAT;if(a===Ur)return i?n.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===Ku)return n.ALPHA;if(a===Un)return n.RGBA;if(a===Zu)return n.LUMINANCE;if(a===Ju)return n.LUMINANCE_ALPHA;if(a===Di)return n.DEPTH_COMPONENT;if(a===hr)return n.DEPTH_STENCIL;if(a===Ba)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===Qu)return n.RED;if(a===Kl)return n.RED_INTEGER;if(a===ef)return n.RG;if(a===Zl)return n.RG_INTEGER;if(a===Jl)return n.RGBA_INTEGER;if(a===ea||a===ta||a===na||a===ia)if(h===It)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===ea)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ta)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===na)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ia)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===ea)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ta)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===na)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ia)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===vo||a===xo||a===yo||a===So)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===vo)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===xo)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===yo)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===So)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Ql)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===Mo||a===Eo)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Mo)return h===It?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Eo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===bo||a===To||a===Ao||a===wo||a===Co||a===Ro||a===Lo||a===Po||a===Do||a===Uo||a===Io||a===No||a===Fo||a===Oo)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===bo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===To)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ao)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===wo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Co)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ro)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Lo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Po)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Do)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Uo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Io)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===No)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Fo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Oo)return h===It?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===ra||a===Bo||a===Ho)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===ra)return h===It?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Bo)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ho)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===tf||a===zo||a===ko||a===Go)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===ra)return c.COMPRESSED_RED_RGTC1_EXT;if(a===zo)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===ko)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Go)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Pi?i?n.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:s}}class gg extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class vs extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class Ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,f=null;const c=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,i),m=this._getHandJoint(p,T);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],S=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&S>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=a!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vg extends mr{constructor(e,t){super();const i=this;let s=null,a=1,f=null,c="local-floor",h=1,p=null,g=null,v=null,S=null,M=null,b=null;const T=t.getContextAttributes();let x=null,m=null;const D=[],P=[],U=new Rt;let G=null;const H=new Mn;H.layers.enable(1),H.viewport=new nn;const l=new Mn;l.layers.enable(2),l.viewport=new nn;const he=[H,l],w=new gg;w.layers.enable(1),w.layers.enable(2);let N=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let _e=D[te];return _e===void 0&&(_e=new Ra,D[te]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(te){let _e=D[te];return _e===void 0&&(_e=new Ra,D[te]=_e),_e.getGripSpace()},this.getHand=function(te){let _e=D[te];return _e===void 0&&(_e=new Ra,D[te]=_e),_e.getHandSpace()};function de(te){const _e=P.indexOf(te.inputSource);if(_e===-1)return;const Pe=D[_e];Pe!==void 0&&(Pe.update(te.inputSource,te.frame,p||f),Pe.dispatchEvent({type:te.type,data:te.inputSource}))}function ue(){s.removeEventListener("select",de),s.removeEventListener("selectstart",de),s.removeEventListener("selectend",de),s.removeEventListener("squeeze",de),s.removeEventListener("squeezestart",de),s.removeEventListener("squeezeend",de),s.removeEventListener("end",ue),s.removeEventListener("inputsourceschange",k);for(let te=0;te<D.length;te++){const _e=P[te];_e!==null&&(P[te]=null,D[te].disconnect(_e))}N=null,se=null,e.setRenderTarget(x),M=null,S=null,v=null,s=null,m=null,be.stop(),i.isPresenting=!1,e.setPixelRatio(G),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(x=e.getRenderTarget(),s.addEventListener("select",de),s.addEventListener("selectstart",de),s.addEventListener("selectend",de),s.addEventListener("squeeze",de),s.addEventListener("squeezestart",de),s.addEventListener("squeezeend",de),s.addEventListener("end",ue),s.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await t.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(U),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const _e={antialias:s.renderState.layers===void 0?T.antialias:!0,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),m=new Ii(M.framebufferWidth,M.framebufferHeight,{format:Un,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil})}else{let _e=null,Pe=null,Ge=null;T.depth&&(Ge=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?hr:Di,Pe=T.stencil?Pi:ui);const ke={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:a};v=new XRWebGLBinding(s,t),S=v.createProjectionLayer(ke),s.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),m=new Ii(S.textureWidth,S.textureHeight,{format:Un,type:mi,depthTexture:new gc(S.textureWidth,S.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0});const it=e.properties.get(m);it.__ignoreDepthValues=S.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(h),p=null,f=await s.requestReferenceSpace(c),be.setContext(s),be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function k(te){for(let _e=0;_e<te.removed.length;_e++){const Pe=te.removed[_e],Ge=P.indexOf(Pe);Ge>=0&&(P[Ge]=null,D[Ge].disconnect(Pe))}for(let _e=0;_e<te.added.length;_e++){const Pe=te.added[_e];let Ge=P.indexOf(Pe);if(Ge===-1){for(let it=0;it<D.length;it++)if(it>=P.length){P.push(Pe),Ge=it;break}else if(P[it]===null){P[it]=Pe,Ge=it;break}if(Ge===-1)break}const ke=D[Ge];ke&&ke.connect(Pe)}}const ee=new j,re=new j;function oe(te,_e,Pe){ee.setFromMatrixPosition(_e.matrixWorld),re.setFromMatrixPosition(Pe.matrixWorld);const Ge=ee.distanceTo(re),ke=_e.projectionMatrix.elements,it=Pe.projectionMatrix.elements,rt=ke[14]/(ke[10]-1),He=ke[14]/(ke[10]+1),vt=(ke[9]+1)/ke[5],q=(ke[9]-1)/ke[5],Ht=(ke[8]-1)/ke[0],Xe=(it[8]+1)/it[0],tt=rt*Ht,Fe=rt*Xe,wt=Ge/(-Ht+Xe),je=wt*-Ht;_e.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(je),te.translateZ(wt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const L=rt+wt,A=He+wt,Z=tt-je,me=Fe+(Ge-je),ge=vt*He/A*L,xe=q*He/A*L;te.projectionMatrix.makePerspective(Z,me,ge,xe,L,A),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function le(te,_e){_e===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(_e.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;w.near=l.near=H.near=te.near,w.far=l.far=H.far=te.far,(N!==w.near||se!==w.far)&&(s.updateRenderState({depthNear:w.near,depthFar:w.far}),N=w.near,se=w.far);const _e=te.parent,Pe=w.cameras;le(w,_e);for(let Ge=0;Ge<Pe.length;Ge++)le(Pe[Ge],_e);Pe.length===2?oe(w,H,l):w.projectionMatrix.copy(H.projectionMatrix),ce(te,w,_e)};function ce(te,_e,Pe){Pe===null?te.matrix.copy(_e.matrixWorld):(te.matrix.copy(Pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(_e.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(_e.projectionMatrix),te.projectionMatrixInverse.copy(_e.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ha*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(te){h=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)};let pe=null;function Me(te,_e){if(g=_e.getViewerPose(p||f),b=_e,g!==null){const Pe=g.views;M!==null&&(e.setRenderTargetFramebuffer(m,M.framebuffer),e.setRenderTarget(m));let Ge=!1;Pe.length!==w.cameras.length&&(w.cameras.length=0,Ge=!0);for(let ke=0;ke<Pe.length;ke++){const it=Pe[ke];let rt=null;if(M!==null)rt=M.getViewport(it);else{const vt=v.getViewSubImage(S,it);rt=vt.viewport,ke===0&&(e.setRenderTargetTextures(m,vt.colorTexture,S.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(m))}let He=he[ke];He===void 0&&(He=new Mn,He.layers.enable(ke),He.viewport=new nn,he[ke]=He),He.matrix.fromArray(it.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(it.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(rt.x,rt.y,rt.width,rt.height),ke===0&&(w.matrix.copy(He.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ge===!0&&w.cameras.push(He)}}for(let Pe=0;Pe<D.length;Pe++){const Ge=P[Pe],ke=D[Pe];Ge!==null&&ke!==void 0&&ke.update(Ge,_e,p||f)}pe&&pe(te,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),b=null}const be=new mc;be.setAnimationLoop(Me),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}}function xg(n,e){function t(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,fc(n)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function s(x,m,D,P,U){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(x,m):m.isMeshToonMaterial?(a(x,m),v(x,m)):m.isMeshPhongMaterial?(a(x,m),g(x,m)):m.isMeshStandardMaterial?(a(x,m),S(x,m),m.isMeshPhysicalMaterial&&M(x,m,U)):m.isMeshMatcapMaterial?(a(x,m),b(x,m)):m.isMeshDepthMaterial?a(x,m):m.isMeshDistanceMaterial?(a(x,m),T(x,m)):m.isMeshNormalMaterial?a(x,m):m.isLineBasicMaterial?(f(x,m),m.isLineDashedMaterial&&c(x,m)):m.isPointsMaterial?h(x,m,D,P):m.isSpriteMaterial?p(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,t(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===pn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,t(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===pn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,t(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,t(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const D=e.get(m).envMap;if(D&&(x.envMap.value=D,x.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap){x.lightMap.value=m.lightMap;const P=n._useLegacyLights===!0?Math.PI:1;x.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,x.lightMapTransform)}m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,x.aoMapTransform))}function f(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform))}function c(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function h(x,m,D,P){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*D,x.scale.value=P*.5,m.map&&(x.map.value=m.map,t(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function p(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,t(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,t(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function v(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function S(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,x.roughnessMapTransform)),e.get(m).envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function M(x,m,D){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&x.clearcoatNormalScale.value.negate())),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,m){m.matcap&&(x.matcap.value=m.matcap)}function T(x,m){const D=e.get(m).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function yg(n,e,t,i){let s={},a={},f=[];const c=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(D,P){const U=P.program;i.uniformBlockBinding(D,U)}function p(D,P){let U=s[D.id];U===void 0&&(b(D),U=g(D),s[D.id]=U,D.addEventListener("dispose",x));const G=P.program;i.updateUBOMapping(D,G);const H=e.render.frame;a[D.id]!==H&&(S(D),a[D.id]=H)}function g(D){const P=v();D.__bindingPointIndex=P;const U=n.createBuffer(),G=D.__size,H=D.usage;return n.bindBuffer(n.UNIFORM_BUFFER,U),n.bufferData(n.UNIFORM_BUFFER,G,H),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,U),U}function v(){for(let D=0;D<c;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(D){const P=s[D.id],U=D.uniforms,G=D.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let H=0,l=U.length;H<l;H++){const he=Array.isArray(U[H])?U[H]:[U[H]];for(let w=0,N=he.length;w<N;w++){const se=he[w];if(M(se,H,w,G)===!0){const de=se.__offset,ue=Array.isArray(se.value)?se.value:[se.value];let k=0;for(let ee=0;ee<ue.length;ee++){const re=ue[ee],oe=T(re);typeof re=="number"||typeof re=="boolean"?(se.__data[0]=re,n.bufferSubData(n.UNIFORM_BUFFER,de+k,se.__data)):re.isMatrix3?(se.__data[0]=re.elements[0],se.__data[1]=re.elements[1],se.__data[2]=re.elements[2],se.__data[3]=0,se.__data[4]=re.elements[3],se.__data[5]=re.elements[4],se.__data[6]=re.elements[5],se.__data[7]=0,se.__data[8]=re.elements[6],se.__data[9]=re.elements[7],se.__data[10]=re.elements[8],se.__data[11]=0):(re.toArray(se.__data,k),k+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,de,se.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function M(D,P,U,G){const H=D.value,l=P+"_"+U;if(G[l]===void 0)return typeof H=="number"||typeof H=="boolean"?G[l]=H:G[l]=H.clone(),!0;{const he=G[l];if(typeof H=="number"||typeof H=="boolean"){if(he!==H)return G[l]=H,!0}else if(he.equals(H)===!1)return he.copy(H),!0}return!1}function b(D){const P=D.uniforms;let U=0;const G=16;for(let l=0,he=P.length;l<he;l++){const w=Array.isArray(P[l])?P[l]:[P[l]];for(let N=0,se=w.length;N<se;N++){const de=w[N],ue=Array.isArray(de.value)?de.value:[de.value];for(let k=0,ee=ue.length;k<ee;k++){const re=ue[k],oe=T(re),le=U%G;le!==0&&G-le<oe.boundary&&(U+=G-le),de.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),de.__offset=U,U+=oe.storage}}}const H=U%G;return H>0&&(U+=G-H),D.__size=U,D.__cache={},this}function T(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),P}function x(D){const P=D.target;P.removeEventListener("dispose",x);const U=f.indexOf(P.__bindingPointIndex);f.splice(U,1),n.deleteBuffer(s[P.id]),delete s[P.id],delete a[P.id]}function m(){for(const D in s)n.deleteBuffer(s[D]);f=[],s={},a={}}return{bind:h,update:p,dispose:m}}class Mc{constructor(e={}){const{canvas:t=mf(),context:i=null,depth:s=!0,stencil:a=!0,alpha:f=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=e;this.isWebGLRenderer=!0;let S;i!==null?S=i.getContextAttributes().alpha:S=f;const M=new Uint32Array(4),b=new Int32Array(4);let T=null,x=null;const m=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=en,this._useLegacyLights=!1,this.toneMapping=pi,this.toneMappingExposure=1;const P=this;let U=!1,G=0,H=0,l=null,he=-1,w=null;const N=new nn,se=new nn;let de=null;const ue=new bt(0);let k=0,ee=t.width,re=t.height,oe=1,le=null,ce=null;const pe=new nn(0,0,ee,re),Me=new nn(0,0,ee,re);let be=!1;const te=new pc;let _e=!1,Pe=!1,Ge=null;const ke=new Wt,it=new Rt,rt=new j,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return l===null?oe:1}let q=i;function Ht(C,V){for(let $=0;$<C.length;$++){const J=C[$],Y=t.getContext(J,V);if(Y!==null)return Y}return null}try{const C={alpha:!0,depth:s,stencil:a,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Va}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",O,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),q===null){const V=["webgl2","webgl","experimental-webgl"];if(P.isWebGL1Renderer===!0&&V.shift(),q=Ht(V,C),q===null)throw Ht(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,tt,Fe,wt,je,L,A,Z,me,ge,xe,ae,Se,Ie,Ye,lt,ve,Mt,st,We,Be,Ue,at,xt;function Dt(){Xe=new Lp(q),tt=new Ep(q,Xe,e),Xe.init(tt),Ue=new mg(q,Xe,tt),Fe=new hg(q,Xe,tt),wt=new Up(q),je=new Qm,L=new pg(q,Xe,Fe,je,tt,Ue,wt),A=new Tp(P),Z=new Rp(P),me=new zf(q,tt),at=new Sp(q,Xe,me,tt),ge=new Pp(q,me,wt,at),xe=new Op(q,ge,me,wt),st=new Fp(q,tt,L),lt=new bp(je),ae=new Jm(P,A,Z,Xe,tt,at,lt),Se=new xg(P,je),Ie=new tg,Ye=new og(Xe,tt),Mt=new yp(P,A,Z,Fe,xe,S,h),ve=new dg(P,xe,tt),xt=new yg(q,wt,tt,Fe),We=new Mp(q,Xe,wt,tt),Be=new Dp(q,Xe,wt,tt),wt.programs=ae.programs,P.capabilities=tt,P.extensions=Xe,P.properties=je,P.renderLists=Ie,P.shadowMap=ve,P.state=Fe,P.info=wt}Dt();const ct=new vg(P,q);this.xr=ct,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(C){C!==void 0&&(oe=C,this.setSize(ee,re,!1))},this.getSize=function(C){return C.set(ee,re)},this.setSize=function(C,V,$=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=C,re=V,t.width=Math.floor(C*oe),t.height=Math.floor(V*oe),$===!0&&(t.style.width=C+"px",t.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(ee*oe,re*oe).floor()},this.setDrawingBufferSize=function(C,V,$){ee=C,re=V,oe=$,t.width=Math.floor(C*$),t.height=Math.floor(V*$),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,V,$,J){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,V,$,J),Fe.viewport(N.copy(pe).multiplyScalar(oe).floor())},this.getScissor=function(C){return C.copy(Me)},this.setScissor=function(C,V,$,J){C.isVector4?Me.set(C.x,C.y,C.z,C.w):Me.set(C,V,$,J),Fe.scissor(se.copy(Me).multiplyScalar(oe).floor())},this.getScissorTest=function(){return be},this.setScissorTest=function(C){Fe.setScissorTest(be=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor.apply(Mt,arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha.apply(Mt,arguments)},this.clear=function(C=!0,V=!0,$=!0){let J=0;if(C){let Y=!1;if(l!==null){const De=l.texture.format;Y=De===Jl||De===Zl||De===Kl}if(Y){const De=l.texture.type,ze=De===mi||De===ui||De===Wa||De===Pi||De===Yl||De===$l,Ve=Mt.getClearColor(),Ke=Mt.getClearAlpha(),ot=Ve.r,Qe=Ve.g,nt=Ve.b;ze?(M[0]=ot,M[1]=Qe,M[2]=nt,M[3]=Ke,q.clearBufferuiv(q.COLOR,0,M)):(b[0]=ot,b[1]=Qe,b[2]=nt,b[3]=Ke,q.clearBufferiv(q.COLOR,0,b))}else J|=q.COLOR_BUFFER_BIT}V&&(J|=q.DEPTH_BUFFER_BIT),$&&(J|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",O,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ie.dispose(),Ye.dispose(),je.dispose(),A.dispose(),Z.dispose(),xe.dispose(),at.dispose(),xt.dispose(),ae.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",jt),ct.removeEventListener("sessionend",Tt),Ge&&(Ge.dispose(),Ge=null),Ft.stop()};function Te(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const C=wt.autoReset,V=ve.enabled,$=ve.autoUpdate,J=ve.needsUpdate,Y=ve.type;Dt(),wt.autoReset=C,ve.enabled=V,ve.autoUpdate=$,ve.needsUpdate=J,ve.type=Y}function Ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ce(C){const V=C.target;V.removeEventListener("dispose",Ce),$e(V)}function $e(C){Ne(C),je.remove(C)}function Ne(C){const V=je.get(C).programs;V!==void 0&&(V.forEach(function($){ae.releaseProgram($)}),C.isShaderMaterial&&ae.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,$,J,Y,De){V===null&&(V=He);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=Fs(C,V,$,J,Y);Fe.setMaterial(J,ze);let Ke=$.index,ot=1;if(J.wireframe===!0){if(Ke=ge.getWireframeAttribute($),Ke===void 0)return;ot=2}const Qe=$.drawRange,nt=$.attributes.position;let Nt=Qe.start*ot,Zt=(Qe.start+Qe.count)*ot;De!==null&&(Nt=Math.max(Nt,De.start*ot),Zt=Math.min(Zt,(De.start+De.count)*ot)),Ke!==null?(Nt=Math.max(Nt,0),Zt=Math.min(Zt,Ke.count)):nt!=null&&(Nt=Math.max(Nt,0),Zt=Math.min(Zt,nt.count));const kt=Zt-Nt;if(kt<0||kt===1/0)return;at.setup(Y,J,Ve,$,Ke);let bn,Lt=We;if(Ke!==null&&(bn=me.get(Ke),Lt=Be,Lt.setIndex(bn)),Y.isMesh)J.wireframe===!0?(Fe.setLineWidth(J.wireframeLinewidth*vt()),Lt.setMode(q.LINES)):Lt.setMode(q.TRIANGLES);else if(Y.isLine){let ft=J.linewidth;ft===void 0&&(ft=1),Fe.setLineWidth(ft*vt()),Y.isLineSegments?Lt.setMode(q.LINES):Y.isLineLoop?Lt.setMode(q.LINE_LOOP):Lt.setMode(q.LINE_STRIP)}else Y.isPoints?Lt.setMode(q.POINTS):Y.isSprite&&Lt.setMode(q.TRIANGLES);if(Y.isBatchedMesh)Lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)Lt.renderInstances(Nt,kt,Y.count);else if($.isInstancedBufferGeometry){const ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,_i=Math.min($.instanceCount,ft);Lt.renderInstances(Nt,kt,_i)}else Lt.render(Nt,kt)};function ut(C,V,$){C.transparent===!0&&C.side===Qn&&C.forceSinglePass===!1?(C.side=pn,C.needsUpdate=!0,zi(C,V,$),C.side=gi,C.needsUpdate=!0,zi(C,V,$),C.side=Qn):zi(C,V,$)}this.compile=function(C,V,$=null){$===null&&($=C),x=Ye.get($),x.init(),D.push(x),$.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),C!==$&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights(P._useLegacyLights);const J=new Set;return C.traverse(function(Y){const De=Y.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){const Ve=De[ze];ut(Ve,$,Y),J.add(Ve)}else ut(De,$,Y),J.add(De)}),D.pop(),x=null,J},this.compileAsync=function(C,V,$=null){const J=this.compile(C,V,$);return new Promise(Y=>{function De(){if(J.forEach(function(ze){je.get(ze).currentProgram.isReady()&&J.delete(ze)}),J.size===0){Y(C);return}setTimeout(De,10)}Xe.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Et=null;function zt(C){Et&&Et(C)}function jt(){Ft.stop()}function Tt(){Ft.start()}const Ft=new mc;Ft.setAnimationLoop(zt),typeof self<"u"&&Ft.setContext(self),this.setAnimationLoop=function(C){Et=C,ct.setAnimationLoop(C),C===null?Ft.stop():Ft.start()},ct.addEventListener("sessionstart",jt),ct.addEventListener("sessionend",Tt),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(V),V=ct.getCamera()),C.isScene===!0&&C.onBeforeRender(P,C,V,l),x=Ye.get(C,D.length),x.init(),D.push(x),ke.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),te.setFromProjectionMatrix(ke),Pe=this.localClippingEnabled,_e=lt.init(this.clippingPlanes,Pe),T=Ie.get(C,m.length),T.init(),m.push(T),Kt(C,V,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(le,ce),this.info.render.frame++,_e===!0&&lt.beginShadows();const $=x.state.shadowsArray;if(ve.render($,C,V),_e===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Mt.render(T,C),x.setupLights(P._useLegacyLights),V.isArrayCamera){const J=V.cameras;for(let Y=0,De=J.length;Y<De;Y++){const ze=J[Y];Oi(T,C,ze,ze.viewport)}}else Oi(T,C,V);l!==null&&(L.updateMultisampleRenderTarget(l),L.updateRenderTargetMipmap(l)),C.isScene===!0&&C.onAfterRender(P,C,V),at.resetDefaultState(),he=-1,w=null,D.pop(),D.length>0?x=D[D.length-1]:x=null,m.pop(),m.length>0?T=m[m.length-1]:T=null};function Kt(C,V,$,J){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)$=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)x.pushLight(C),C.castShadow&&x.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||te.intersectsSprite(C)){J&&rt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ke);const ze=xe.update(C),Ve=C.material;Ve.visible&&T.push(C,ze,Ve,$,rt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||te.intersectsObject(C))){const ze=xe.update(C),Ve=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),rt.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),rt.copy(ze.boundingSphere.center)),rt.applyMatrix4(C.matrixWorld).applyMatrix4(ke)),Array.isArray(Ve)){const Ke=ze.groups;for(let ot=0,Qe=Ke.length;ot<Qe;ot++){const nt=Ke[ot],Nt=Ve[nt.materialIndex];Nt&&Nt.visible&&T.push(C,ze,Nt,$,rt.z,nt)}}else Ve.visible&&T.push(C,ze,Ve,$,rt.z,null)}}const De=C.children;for(let ze=0,Ve=De.length;ze<Ve;ze++)Kt(De[ze],V,$,J)}function Oi(C,V,$,J){const Y=C.opaque,De=C.transmissive,ze=C.transparent;x.setupLightsView($),_e===!0&&lt.setGlobalState(P.clippingPlanes,$),De.length>0&&Bi(Y,De,V,$),J&&Fe.viewport(N.copy(J)),Y.length>0&&Hi(Y,V,$),De.length>0&&Hi(De,V,$),ze.length>0&&Hi(ze,V,$),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function Bi(C,V,$,J){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const De=tt.isWebGL2;Ge===null&&(Ge=new Ii(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")?Ur:mi,minFilter:Dr,samples:De?4:0})),P.getDrawingBufferSize(it),De?Ge.setSize(it.x,it.y):Ge.setSize(za(it.x),za(it.y));const ze=P.getRenderTarget();P.setRenderTarget(Ge),P.getClearColor(ue),k=P.getClearAlpha(),k<1&&P.setClearColor(16777215,.5),P.clear();const Ve=P.toneMapping;P.toneMapping=pi,Hi(C,$,J),L.updateMultisampleRenderTarget(Ge),L.updateRenderTargetMipmap(Ge);let Ke=!1;for(let ot=0,Qe=V.length;ot<Qe;ot++){const nt=V[ot],Nt=nt.object,Zt=nt.geometry,kt=nt.material,bn=nt.group;if(kt.side===Qn&&Nt.layers.test(J.layers)){const Lt=kt.side;kt.side=pn,kt.needsUpdate=!0,Gr(Nt,$,J,Zt,kt,bn),kt.side=Lt,kt.needsUpdate=!0,Ke=!0}}Ke===!0&&(L.updateMultisampleRenderTarget(Ge),L.updateRenderTargetMipmap(Ge)),P.setRenderTarget(ze),P.setClearColor(ue,k),P.toneMapping=Ve}function Hi(C,V,$){const J=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,De=C.length;Y<De;Y++){const ze=C[Y],Ve=ze.object,Ke=ze.geometry,ot=J===null?ze.material:J,Qe=ze.group;Ve.layers.test($.layers)&&Gr(Ve,V,$,Ke,ot,Qe)}}function Gr(C,V,$,J,Y,De){C.onBeforeRender(P,V,$,J,Y,De),C.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(P,V,$,J,C,De),Y.transparent===!0&&Y.side===Qn&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,P.renderBufferDirect($,V,J,Y,C,De),Y.side=gi,Y.needsUpdate=!0,P.renderBufferDirect($,V,J,Y,C,De),Y.side=Qn):P.renderBufferDirect($,V,J,Y,C,De),C.onAfterRender(P,V,$,J,Y,De)}function zi(C,V,$){V.isScene!==!0&&(V=He);const J=je.get(C),Y=x.state.lights,De=x.state.shadowsArray,ze=Y.state.version,Ve=ae.getParameters(C,Y.state,De,V,$),Ke=ae.getProgramCacheKey(Ve);let ot=J.programs;J.environment=C.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(C.isMeshStandardMaterial?Z:A).get(C.envMap||J.environment),ot===void 0&&(C.addEventListener("dispose",Ce),ot=new Map,J.programs=ot);let Qe=ot.get(Ke);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===ze)return Vr(C,Ve),Qe}else Ve.uniforms=ae.getUniforms(C),C.onBuild($,Ve,P),C.onBeforeCompile(Ve,P),Qe=ae.acquireProgram(Ve,Ke),ot.set(Ke,Qe),J.uniforms=Ve.uniforms;const nt=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(nt.clippingPlanes=lt.uniform),Vr(C,Ve),J.needsLights=Os(C),J.lightsStateVersion=ze,J.needsLights&&(nt.ambientLightColor.value=Y.state.ambient,nt.lightProbe.value=Y.state.probe,nt.directionalLights.value=Y.state.directional,nt.directionalLightShadows.value=Y.state.directionalShadow,nt.spotLights.value=Y.state.spot,nt.spotLightShadows.value=Y.state.spotShadow,nt.rectAreaLights.value=Y.state.rectArea,nt.ltc_1.value=Y.state.rectAreaLTC1,nt.ltc_2.value=Y.state.rectAreaLTC2,nt.pointLights.value=Y.state.point,nt.pointLightShadows.value=Y.state.pointShadow,nt.hemisphereLights.value=Y.state.hemi,nt.directionalShadowMap.value=Y.state.directionalShadowMap,nt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,nt.spotShadowMap.value=Y.state.spotShadowMap,nt.spotLightMatrix.value=Y.state.spotLightMatrix,nt.spotLightMap.value=Y.state.spotLightMap,nt.pointShadowMap.value=Y.state.pointShadowMap,nt.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function vr(C){if(C.uniformsList===null){const V=C.currentProgram.getUniforms();C.uniformsList=Es.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function Vr(C,V){const $=je.get(C);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Fs(C,V,$,J,Y){V.isScene!==!0&&(V=He),L.resetTextureUnits();const De=V.fog,ze=J.isMeshStandardMaterial?V.environment:null,Ve=l===null?P.outputColorSpace:l.isXRRenderTarget===!0?l.texture.colorSpace:ti,Ke=(J.isMeshStandardMaterial?Z:A).get(J.envMap||ze),ot=J.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Qe=!!$.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),nt=!!$.morphAttributes.position,Nt=!!$.morphAttributes.normal,Zt=!!$.morphAttributes.color;let kt=pi;J.toneMapped&&(l===null||l.isXRRenderTarget===!0)&&(kt=P.toneMapping);const bn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Lt=bn!==void 0?bn.length:0,ft=je.get(J),_i=x.state.lights;if(_e===!0&&(Pe===!0||C!==w)){const Jt=C===w&&J.id===he;lt.setState(J,C,Jt)}let Ut=!1;J.version===ft.__version?(ft.needsLights&&ft.lightsStateVersion!==_i.state.version||ft.outputColorSpace!==Ve||Y.isBatchedMesh&&ft.batching===!1||!Y.isBatchedMesh&&ft.batching===!0||Y.isInstancedMesh&&ft.instancing===!1||!Y.isInstancedMesh&&ft.instancing===!0||Y.isSkinnedMesh&&ft.skinning===!1||!Y.isSkinnedMesh&&ft.skinning===!0||Y.isInstancedMesh&&ft.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ft.instancingColor===!1&&Y.instanceColor!==null||ft.envMap!==Ke||J.fog===!0&&ft.fog!==De||ft.numClippingPlanes!==void 0&&(ft.numClippingPlanes!==lt.numPlanes||ft.numIntersection!==lt.numIntersection)||ft.vertexAlphas!==ot||ft.vertexTangents!==Qe||ft.morphTargets!==nt||ft.morphNormals!==Nt||ft.morphColors!==Zt||ft.toneMapping!==kt||tt.isWebGL2===!0&&ft.morphTargetsCount!==Lt)&&(Ut=!0):(Ut=!0,ft.__version=J.version);let Ot=ft.currentProgram;Ut===!0&&(Ot=zi(J,V,Y));let Wn=!1,Fn=!1,xr=!1;const Yt=Ot.getUniforms(),Tn=ft.uniforms;if(Fe.useProgram(Ot.program)&&(Wn=!0,Fn=!0,xr=!0),J.id!==he&&(he=J.id,Fn=!0),Wn||w!==C){Yt.setValue(q,"projectionMatrix",C.projectionMatrix),Yt.setValue(q,"viewMatrix",C.matrixWorldInverse);const Jt=Yt.map.cameraPosition;Jt!==void 0&&Jt.setValue(q,rt.setFromMatrixPosition(C.matrixWorld)),tt.logarithmicDepthBuffer&&Yt.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Yt.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,Fn=!0,xr=!0)}if(Y.isSkinnedMesh){Yt.setOptional(q,Y,"bindMatrix"),Yt.setOptional(q,Y,"bindMatrixInverse");const Jt=Y.skeleton;Jt&&(tt.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Yt.setValue(q,"boneTexture",Jt.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(Yt.setOptional(q,Y,"batchingTexture"),Yt.setValue(q,"batchingTexture",Y._matricesTexture,L));const ki=$.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0&&tt.isWebGL2===!0)&&st.update(Y,$,Ot),(Fn||ft.receiveShadow!==Y.receiveShadow)&&(ft.receiveShadow=Y.receiveShadow,Yt.setValue(q,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Tn.envMap.value=Ke,Tn.flipEnvMap.value=Ke.isCubeTexture&&Ke.isRenderTargetTexture===!1?-1:1),Fn&&(Yt.setValue(q,"toneMappingExposure",P.toneMappingExposure),ft.needsLights&&Wr(Tn,xr),De&&J.fog===!0&&Se.refreshFogUniforms(Tn,De),Se.refreshMaterialUniforms(Tn,J,oe,re,Ge),Es.upload(q,vr(ft),Tn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Es.upload(q,vr(ft),Tn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Yt.setValue(q,"center",Y.center),Yt.setValue(q,"modelViewMatrix",Y.modelViewMatrix),Yt.setValue(q,"normalMatrix",Y.normalMatrix),Yt.setValue(q,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Jt=J.uniformsGroups;for(let Gi=0,Bs=Jt.length;Gi<Bs;Gi++)if(tt.isWebGL2){const Xr=Jt[Gi];xt.update(Xr,Ot),xt.bind(Xr,Ot)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ot}function Wr(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Os(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return l},this.setRenderTargetTextures=function(C,V,$){je.get(C.texture).__webglTexture=V,je.get(C.depthTexture).__webglTexture=$;const J=je.get(C);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=$===void 0,J.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const $=je.get(C);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,$=0){l=C,G=V,H=$;let J=!0,Y=null,De=!1,ze=!1;if(C){const Ke=je.get(C);Ke.__useDefaultFramebuffer!==void 0?(Fe.bindFramebuffer(q.FRAMEBUFFER,null),J=!1):Ke.__webglFramebuffer===void 0?L.setupRenderTarget(C):Ke.__hasExternalTextures&&L.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);const ot=C.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(ze=!0);const Qe=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[V])?Y=Qe[V][$]:Y=Qe[V],De=!0):tt.isWebGL2&&C.samples>0&&L.useMultisampledRTT(C)===!1?Y=je.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[$]:Y=Qe,N.copy(C.viewport),se.copy(C.scissor),de=C.scissorTest}else N.copy(pe).multiplyScalar(oe).floor(),se.copy(Me).multiplyScalar(oe).floor(),de=be;if(Fe.bindFramebuffer(q.FRAMEBUFFER,Y)&&tt.drawBuffers&&J&&Fe.drawBuffers(C,Y),Fe.viewport(N),Fe.scissor(se),Fe.setScissorTest(de),De){const Ke=je.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ke.__webglTexture,$)}else if(ze){const Ke=je.get(C.texture),ot=V||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ke.__webglTexture,$||0,ot)}he=-1},this.readRenderTargetPixels=function(C,V,$,J,Y,De,ze){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Fe.bindFramebuffer(q.FRAMEBUFFER,Ve);try{const Ke=C.texture,ot=Ke.format,Qe=Ke.type;if(ot!==Un&&Ue.convert(ot)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const nt=Qe===Ur&&(Xe.has("EXT_color_buffer_half_float")||tt.isWebGL2&&Xe.has("EXT_color_buffer_float"));if(Qe!==mi&&Ue.convert(Qe)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===fi&&(tt.isWebGL2||Xe.has("OES_texture_float")||Xe.has("WEBGL_color_buffer_float")))&&!nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-J&&$>=0&&$<=C.height-Y&&q.readPixels(V,$,J,Y,Ue.convert(ot),Ue.convert(Qe),De)}finally{const Ke=l!==null?je.get(l).__webglFramebuffer:null;Fe.bindFramebuffer(q.FRAMEBUFFER,Ke)}}},this.copyFramebufferToTexture=function(C,V,$=0){const J=Math.pow(2,-$),Y=Math.floor(V.image.width*J),De=Math.floor(V.image.height*J);L.setTexture2D(V,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,C.x,C.y,Y,De),Fe.unbindTexture()},this.copyTextureToTexture=function(C,V,$,J=0){const Y=V.image.width,De=V.image.height,ze=Ue.convert($.format),Ve=Ue.convert($.type);L.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),V.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,J,C.x,C.y,Y,De,ze,Ve,V.image.data):V.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,J,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,ze,V.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,J,C.x,C.y,ze,Ve,V.image),J===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Fe.unbindTexture()},this.copyTextureToTexture3D=function(C,V,$,J,Y=0){if(P.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const De=C.max.x-C.min.x+1,ze=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,Ke=Ue.convert(J.format),ot=Ue.convert(J.type);let Qe;if(J.isData3DTexture)L.setTexture3D(J,0),Qe=q.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)L.setTexture2DArray(J,0),Qe=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,J.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,J.unpackAlignment);const nt=q.getParameter(q.UNPACK_ROW_LENGTH),Nt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Zt=q.getParameter(q.UNPACK_SKIP_PIXELS),kt=q.getParameter(q.UNPACK_SKIP_ROWS),bn=q.getParameter(q.UNPACK_SKIP_IMAGES),Lt=$.isCompressedTexture?$.mipmaps[Y]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Lt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Lt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,C.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,C.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,C.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Qe,Y,V.x,V.y,V.z,De,ze,Ve,Ke,ot,Lt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Qe,Y,V.x,V.y,V.z,De,ze,Ve,Ke,Lt.data)):q.texSubImage3D(Qe,Y,V.x,V.y,V.z,De,ze,Ve,Ke,ot,Lt),q.pixelStorei(q.UNPACK_ROW_LENGTH,nt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Nt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Zt),q.pixelStorei(q.UNPACK_SKIP_ROWS,kt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,bn),Y===0&&J.generateMipmaps&&q.generateMipmap(Qe),Fe.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){G=0,H=0,l=null,Fe.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xa?"display-p3":"srgb",t.unpackColorSpace=Ct.workingColorSpace===Ds?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===en?Ui:ec}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ui?en:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Sg extends Mc{}Sg.prototype.isWebGL1Renderer=!0;class Mg extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ec extends gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pl=new j,Dl=new j,Ul=new Wt,La=new qa,xs=new Br;class Eg extends un{constructor(e=new Nn,t=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Pl.fromBufferAttribute(t,s-1),Dl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Pl.distanceTo(Dl);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,f=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xs.copy(i.boundingSphere),xs.applyMatrix4(s),xs.radius+=a,e.ray.intersectsSphere(xs)===!1)return;Ul.copy(s).invert(),La.copy(e.ray).applyMatrix4(Ul);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=new j,g=new j,v=new j,S=new j,M=this.isLineSegments?2:1,b=i.index,x=i.attributes.position;if(b!==null){const m=Math.max(0,f.start),D=Math.min(b.count,f.start+f.count);for(let P=m,U=D-1;P<U;P+=M){const G=b.getX(P),H=b.getX(P+1);if(p.fromBufferAttribute(x,G),g.fromBufferAttribute(x,H),La.distanceSqToSegment(p,g,S,v)>h)continue;S.applyMatrix4(this.matrixWorld);const he=e.ray.origin.distanceTo(S);he<e.near||he>e.far||t.push({distance:he,point:v.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,f.start),D=Math.min(x.count,f.start+f.count);for(let P=m,U=D-1;P<U;P+=M){if(p.fromBufferAttribute(x,P),g.fromBufferAttribute(x,P+1),La.distanceSqToSegment(p,g,S,v)>h)continue;S.applyMatrix4(this.matrixWorld);const H=e.ray.origin.distanceTo(S);H<e.near||H>e.far||t.push({distance:H,point:v.clone().applyMatrix4(this.matrixWorld),index:P,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}const Il=new j,Nl=new j;class bg extends Eg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Il.fromBufferAttribute(t,s),Nl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Il.distanceTo(Nl);e.setAttribute("lineDistance",new Vn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class bc extends gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fl=new Wt,Ga=new qa,ys=new Br,Ss=new j;class Tg extends un{constructor(e=new Nn,t=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,f=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(s),ys.radius+=a,e.ray.intersectsSphere(ys)===!1)return;Fl.copy(s).invert(),Ga.copy(e.ray).applyMatrix4(Fl);const c=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,p=i.index,v=i.attributes.position;if(p!==null){const S=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=S,T=M;b<T;b++){const x=p.getX(b);Ss.fromBufferAttribute(v,x),Ol(Ss,x,h,s,e,t,this)}}else{const S=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let b=S,T=M;b<T;b++)Ss.fromBufferAttribute(v,b),Ol(Ss,b,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,f=s.length;a<f;a++){const c=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}}function Ol(n,e,t,i,s,a,f){const c=Ga.distanceSqToPoint(n);if(c<t){const h=new j;Ga.closestPointToPoint(n,h),h.applyMatrix4(i);const p=s.ray.origin.distanceTo(h);if(p<s.near||p>s.far)return;a.push({distance:p,distanceToRay:Math.sqrt(c),point:h,index:e,face:null,object:f})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);class zr{constructor(e=0,t="Network Error"){this.status=e,this.text=t}}const Ag=()=>{if(!(typeof localStorage>"u"))return{get:n=>Promise.resolve(localStorage.getItem(n)),set:(n,e)=>Promise.resolve(localStorage.setItem(n,e)),remove:n=>Promise.resolve(localStorage.removeItem(n))}},tn={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Ag()},$a=n=>n?typeof n=="string"?{publicKey:n}:n.toString()==="[object Object]"?n:{}:{},wg=(n,e="https://api.emailjs.com")=>{if(!n)return;const t=$a(n);tn.publicKey=t.publicKey,tn.blockHeadless=t.blockHeadless,tn.storageProvider=t.storageProvider,tn.blockList=t.blockList,tn.limitRate=t.limitRate,tn.origin=t.origin||e},Tc=async(n,e,t={})=>{const i=await fetch(tn.origin+n,{method:"POST",headers:t,body:e}),s=await i.text(),a=new zr(i.status,s);if(i.ok)return a;throw a},Ac=(n,e,t)=>{if(!n||typeof n!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!e||typeof e!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t||typeof t!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Cg=n=>{if(n&&n.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},wc=n=>n.webdriver||!n.languages||n.languages.length===0,Cc=()=>new zr(451,"Unavailable For Headless Browser"),Rg=(n,e)=>{if(!Array.isArray(n))throw"The BlockList list has to be an array";if(typeof e!="string")throw"The BlockList watchVariable has to be a string"},Lg=n=>{var e;return!((e=n.list)!=null&&e.length)||!n.watchVariable},Pg=(n,e)=>n instanceof FormData?n.get(e):n[e],Rc=(n,e)=>{if(Lg(n))return!1;Rg(n.list,n.watchVariable);const t=Pg(e,n.watchVariable);return typeof t!="string"?!1:n.list.includes(t)},Lc=()=>new zr(403,"Forbidden"),Dg=(n,e)=>{if(typeof n!="number"||n<0)throw"The LimitRate throttle has to be a positive number";if(e&&typeof e!="string")throw"The LimitRate ID has to be a non-empty string"},Ug=async(n,e,t)=>{const i=Number(await t.get(n)||0);return e-Date.now()+i},Pc=async(n,e,t)=>{if(!e.throttle||!t)return!1;Dg(e.throttle,e.id);const i=e.id||n;return await Ug(i,e.throttle,t)>0?!0:(await t.set(i,Date.now().toString()),!1)},Dc=()=>new zr(429,"Too Many Requests"),Ig=async(n,e,t,i)=>{const s=$a(i),a=s.publicKey||tn.publicKey,f=s.blockHeadless||tn.blockHeadless,c=s.storageProvider||tn.storageProvider,h={...tn.blockList,...s.blockList},p={...tn.limitRate,...s.limitRate};return f&&wc(navigator)?Promise.reject(Cc()):(Ac(a,n,e),Cg(t),t&&Rc(h,t)?Promise.reject(Lc()):await Pc(location.pathname,p,c)?Promise.reject(Dc()):Tc("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"}))},Ng=n=>{if(!n||n.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Fg=n=>typeof n=="string"?document.querySelector(n):n,Og=async(n,e,t,i)=>{const s=$a(i),a=s.publicKey||tn.publicKey,f=s.blockHeadless||tn.blockHeadless,c=tn.storageProvider||s.storageProvider,h={...tn.blockList,...s.blockList},p={...tn.limitRate,...s.limitRate};if(f&&wc(navigator))return Promise.reject(Cc());const g=Fg(t);Ac(a,n,e),Ng(g);const v=new FormData(g);return Rc(h,v)?Promise.reject(Lc()):await Pc(location.pathname,p,c)?Promise.reject(Dc()):(v.append("lib_version","4.4.1"),v.append("service_id",n),v.append("template_id",e),v.append("user_id",a),Tc("/api/v1.0/email/send-form",v))},Uc={init:wg,send:Ig,sendForm:Og,EmailJSResponseStatus:zr};Uc.init("YOUR_PUBLIC_KEY");function Bg(){const n=localStorage.getItem("oth-theme")||"light";document.documentElement.setAttribute("data-theme",n),Ic(n)}function Hg(){const e=document.documentElement.getAttribute("data-theme")==="dark"?"light":"dark";document.documentElement.setAttribute("data-theme",e),localStorage.setItem("oth-theme",e),Ic(e)}function Ic(n){const e=document.getElementById("theme-toggle-btn");e&&(e.innerHTML=n==="dark"?"☀️ <span>Light</span>":"🌙 <span>Dark</span>")}window.toggleTheme=Hg;fe(window).on("load",()=>{setTimeout(()=>{fe(".preloader").addClass("fade-out"),Nc()},3e3)});fe(document).ready(()=>{setTimeout(()=>{fe(".preloader").hasClass("fade-out")||(fe(".preloader").addClass("fade-out"),Nc())},4e3)});const Bl=["https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1527018601619-a508a2be00cd?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1600&auto=format&fit=crop","https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop"];function zg(){const n=fe("#hero-slider");Bl.forEach((t,i)=>{const s=fe("<div></div>").addClass("slide").css("background-image",`url('${t}')`);i===0&&s.addClass("active"),n.append(s)});let e=0;setInterval(()=>{const t=fe(".slide");t.eq(e).removeClass("active"),e=(e+1)%Bl.length,t.eq(e).addClass("active")},5e3)}function kg(){const n=document.getElementById("webgl-container");if(!n)return;const e=new Mg,t=new Mn(60,n.clientWidth/n.clientHeight,.1,100);t.position.z=30;const i=new Mc({alpha:!0,antialias:!0});i.setSize(n.clientWidth,n.clientHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const s=120,a=new Nn,f=new Float32Array(s*3),c=[],h={x:35,y:25,z:20};for(let D=0;D<s;D++)f[D*3]=(Math.random()-.5)*h.x*2,f[D*3+1]=(Math.random()-.5)*h.y*2,f[D*3+2]=(Math.random()-.5)*h.z*2,c.push({x:(Math.random()-.5)*.05,y:(Math.random()-.5)*.05,z:(Math.random()-.5)*.03});a.setAttribute("position",new In(f,3));const p=new bc({color:16098851,size:.45,transparent:!0,opacity:.85,sizeAttenuation:!0}),g=new Tg(a,p);e.add(g);const v=new Ec({color:1949322,transparent:!0,opacity:.15});let S,M=0,b=0,T=0,x=0;window.addEventListener("mousemove",D=>{M=(D.clientX-window.innerWidth/2)/100,b=(D.clientY-window.innerHeight/2)/100});const m=()=>{requestAnimationFrame(m);const D=g.geometry.attributes.position.array,P=[];for(let U=0;U<s;U++){D[U*3]+=c[U].x,D[U*3+1]+=c[U].y,D[U*3+2]+=c[U].z,Math.abs(D[U*3])>h.x&&(c[U].x*=-1),Math.abs(D[U*3+1])>h.y&&(c[U].y*=-1),Math.abs(D[U*3+2])>h.z&&(c[U].z*=-1);for(let G=U+1;G<s;G++){const H=D[U*3]-D[G*3],l=D[U*3+1]-D[G*3+1],he=D[U*3+2]-D[G*3+2];Math.sqrt(H*H+l*l+he*he)<8&&(P.push(D[U*3],D[U*3+1],D[U*3+2]),P.push(D[G*3],D[G*3+1],D[G*3+2]))}}if(g.geometry.attributes.position.needsUpdate=!0,S&&e.remove(S),P.length>0){const U=new Nn;U.setAttribute("position",new Vn(P,3)),S=new bg(U,v),e.add(S)}T+=(M-T)*.05,x+=(b-x)*.05,t.position.x=T,t.position.y=-x,t.lookAt(e.position),i.render(e,t)};m(),window.addEventListener("resize",()=>{t.aspect=n.clientWidth/n.clientHeight,t.updateProjectionMatrix(),i.setSize(n.clientWidth,n.clientHeight)})}function Nc(){const n=new IntersectionObserver((e,t)=>{e.forEach(i=>{i.isIntersecting&&(fe(i.target).addClass("animated"),t.unobserve(i.target))})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});fe(".scroll-animate").each(function(){n.observe(this)})}function Gg(){fe(window).on("scroll",()=>{fe(window).scrollTop()>60?fe("#main-nav").css("box-shadow","0 2px 20px rgba(0,0,0,0.06)"):fe("#main-nav").css("box-shadow","none")}),fe("#hamburger").on("click",()=>{const n=fe("#mobile-menu");n.css("display",n.css("display")==="flex"?"none":"flex")}),fe("#mobile-menu a").on("click",()=>{fe("#mobile-menu").css("display","none")}),window.scrollToTop=()=>window.scrollTo({top:0,behavior:"smooth"})}function Vg(){fe(".proj-filter").on("click",function(){fe(".proj-filter").removeClass("active"),fe(this).addClass("active");const n=fe(this).data("cat");fe(".proj-card").each(function(){fe(this)[n==="all"||fe(this).data("cat")===n?"fadeIn":"fadeOut"](250)})})}const Pa={services:"We offer 8 engineering divisions: ⚡ Power & Solar, 📷 CCTV & Security, ⚙️ Automation & PLC, 🔧 Control Panels, 🏗️ Elevators, ⛽ Fuel Station Automation, 🏢 Building Management (BMS), and 📐 Engineering Consultancy. Which area interests you?",solar:"Our solar team designs hybrid solar & inverter systems from 5 kW to 1 MW+. We serve Abuja, Lagos and all major cities. We handle site survey, installation, and maintenance contracts. Ready for a quote?",emergency:"For emergencies call 📞 08039790207 or 08074591971. Our engineers are on standby 24/7. You can also use the emergency dispatch button above to connect directly with a specialist.",contact:`Head Office: Federal Housing Lugbe, Abuja, Nigeria
📞 08039790207 | 08074591971
📧 olatmatics.tech@gmail.com
💬 WhatsApp: https://wa.link/uxd689`,quote:`We'd love to work with you! Scroll to the "Request a Quote" section above and fill in your project details. Our minimum engagement is ₦200,000. We respond within 24 hours.`,elevator:"Our elevator division handles installation, modernisation, preventive maintenance and emergency repairs for passenger and goods lifts across Nigeria. Call 08039790207 for an assessment.",cctv:"Our security team installs IP CCTV, access control, biometric systems and electric fencing. We support Hikvision, Dahua and ZKTeco brands. Call us for a free site survey!",fuel:"We install and maintain fuel dispensers, ATG underground tank monitoring, forecourt automation and fuel management systems. DPR certified. Call us on 08039790207.",automation:"We program and commission PLC & SCADA systems using Siemens TIA Portal and Allen-Bradley platforms. Industrial IoT, remote monitoring, and process control are our specialties.",bms:"Our Building Management Systems integrate HVAC, lighting automation, fire alarm, and energy monitoring for commercial buildings across Nigeria.",default:"👋 I'm here to help! Ask me about our solar, CCTV, automation, elevator, fuel station, or BMS services. You can also request a quote or get emergency support. How can I assist?"};function Hl(n){const e=n.toLowerCase();for(const t in Pa)if(t!=="default"&&e.includes(t))return Pa[t];return Pa.default}function Ms(n,e){const t=fe("#chat-body"),i=fe("<div></div>").addClass("chat-msg "+e).text(n);t.append(i),t.scrollTop(t[0].scrollHeight)}function zl(){const n=fe("#chat-body"),e=fe("<div></div>").addClass("chat-msg bot").attr("id","typing-indicator").text("...");n.append(e),n.scrollTop(n[0].scrollHeight)}function kl(){fe("#typing-indicator").remove()}function Wg(){window.toggleChat=()=>fe("#chat-window").toggleClass("open"),window.sendChat=()=>{const n=fe("#chat-input"),e=n.val().trim();e&&(Ms(e,"user"),n.val(""),fe("#chat-quick").hide(),zl(),setTimeout(()=>{kl(),Ms(Hl(e),"bot")},800))},window.chatReply=n=>{Ms(n,"user"),fe("#chat-quick").hide(),zl(),setTimeout(()=>{kl(),Ms(Hl(n),"bot")},800)}}const Xg=[{name:"Engr. Bilal",title:"Automation & Instrumentation Engineer",desc:"Highly skilled automation engineer with 9+ years of experience in industrial PLC programming, SCADA system design, and field instrumentation across oil & gas and manufacturing sectors in Nigeria.",tech:"Siemens S7 | Allen-Bradley | SCADA | HMI | Industrial IoT | Process Control",phone:"08039790207",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"},{name:"Engr. Adewale",title:"Senior Pump & Petroleum Systems Engineer",desc:"Seasoned petroleum infrastructure specialist with 11+ years managing fuel dispenser installations, ATG tank monitoring systems, and forecourt automation for major fuel stations across Abuja and Lagos. DPR certified.",tech:"ATG Systems | Fuel Dispensers | Forecourt Automation | Gilbarco | Wayne | DPR Compliance",phone:"08074591971",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"},{name:"Engr. Kehinde",title:"Solar & Renewable Energy Expert",desc:"Renewable energy engineer with 8+ years specialising in hybrid solar PV design, lithium battery storage, and inverter systems for residential, commercial and industrial clients. Certified PVsyst and off-grid system designer.",tech:"PVsyst | Hybrid Solar | MPPT Controllers | Inverters | Battery Storage | Load Balancing",phone:"08039790207",whatsapp:"https://wa.link/uxd689",email:"olatmatics.tech@gmail.com"}];function qg(){const n=["https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&auto=format","https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&auto=format","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&auto=format"];return Xg.map((e,t)=>`
    <div class="engineer-card">
      <img class="engineer-avatar" src="${n[t]}" alt="${e.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2264%22 height=%2264%22 viewBox=%220 0 64 64%22><circle cx=%2232%22 cy=%2232%22 r=%2232%22 fill=%22%23f5a623%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2224%22 fill=%22white%22>${e.name.charAt(5)}</text></svg>'" />
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
  `).join("")}function jg(){window.triggerEmergency=()=>{const n=fe("#emergency-modal");n.find(".engineer-cards").html(qg()),n.addClass("open"),bs({form_type:"Emergency Call-Out",name:"Website Visitor",email:"olatmatics.tech@gmail.com",description:"🚨 Emergency call-out triggered on website. Response required immediately."})},window.closeEmergencyModal=()=>{fe("#emergency-modal").removeClass("open")},fe("#emergency-modal").on("click",function(n){n.target===this&&closeEmergencyModal()})}const Yg={"client@olatmatics.com":{password:"client123",name:"Engr. Demo Client",company:"Demo Industries"},"admin@olatmatics.com":{password:"admin123",name:"Admin User",company:"OTH Internal"}};let Ci=null;function Fc(){return`
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
    </div>
  `}function Gl(n){const e=n.projects||[],t=e.filter(s=>s.status==="active").length,i=e.length>0?e.map(s=>{const a=s.progress!=null?s.progress+"%":"—",f={active:"In Progress",pending:"Scheduled",complete:"Complete",delayed:"Delayed"},c={active:"status-active",pending:"status-pending",complete:"status-complete",delayed:"status-delayed"};return`<tr><td>${s.name}</td><td>${s.division}</td><td>${a}</td><td><span class="status-pill ${c[s.status]||"status-pending"}">${f[s.status]||s.status}</span></td></tr>`}).join(""):'<tr><td colspan="4" style="text-align:center;color:var(--muted);padding:2rem;">No projects assigned yet.</td></tr>';return`
    <div class="portal-layout scroll-animate fade-in animated">
      <div class="portal-sidebar">
        <div class="portal-logo">
          <img class="portal-logo-mark" src="./src/logo.png" alt="OTH Logo">
          <div><div class="portal-logo-text">Client Portal</div><div style="font-size:10px;color:var(--muted);">${n.company||""}</div></div>
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
          <div class="portal-welcome">Welcome back, <strong>${n.name}</strong></div>
          <div class="portal-actions">
            <button class="p-btn" onclick="showToast('Service request form sent to olatmatics.tech@gmail.com!')">+ New Request</button>
            <button class="p-btn accent" onclick="triggerEmergency()">Emergency Call-Out</button>
          </div>
        </div>
        <div class="portal-cards">
          <div class="p-metric"><div class="p-metric-val">${t}</div><div class="p-metric-label">Active Projects</div></div>
          <div class="p-metric"><div class="p-metric-val">${e.length}</div><div class="p-metric-label">Total Projects</div></div>
          <div class="p-metric"><div class="p-metric-val">${e.filter(s=>s.status==="complete").length}</div><div class="p-metric-label">Completed</div></div>
          <div class="p-metric"><div class="p-metric-val">${e.filter(s=>s.status==="delayed").length}</div><div class="p-metric-label">Delayed</div></div>
        </div>
        <div class="portal-table-wrap">
          <div class="portal-table-head"><h4>My Projects</h4><span class="pt-label">Updated: Today</span></div>
          <table class="portal-tbl">
            <thead><tr><th>Project</th><th>Division</th><th>Progress</th><th>Status</th></tr></thead>
            <tbody>
              ${i}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div style="margin-top:1.5rem;padding:1.25rem;background:var(--dark3);border:1px solid var(--border);border-radius:12px;text-align:center;">
      <p style="font-size:13px;color:var(--muted);">Your project data is live. For real-time updates, contact your project manager. <a href="#contact" style="color:var(--accent);">Contact us</a>.</p>
    </div>
  `}function $g(){const n=fe("#portal-email").val().trim(),e=fe("#portal-pass").val(),t=Yg[n];if(t&&t.password===e){Ci={...t,email:n},fe("#portal-section-content").html(Gl(Ci)),showToast("✅ Welcome back, "+Ci.name+"!");return}const a=(JSON.parse(localStorage.getItem("oth-admin-data")||"{}").clients||[]).find(f=>f.email===n&&f.password===e);if(a){Ci={...a,email:n},fe("#portal-section-content").html(Gl(Ci)),showToast("✅ Welcome back, "+Ci.name+"!");return}showToast("❌ Invalid credentials. Contact us to get access.")}function Kg(){Ci=null,fe("#portal-section-content").html(Fc()),showToast("You have been signed out.")}window.portalLogin=$g;window.portalLogout=Kg;window.closePortalIfOpen=()=>{};function Zg(){const n=fe("#portal-section-content");n.length&&n.html(Fc())}const Jg={solar:{title:"How We Cut a Factory's Energy Bill by 65% with Hybrid Solar",category:"Case Study",date:"June 2025",readTime:"8 min read",content:`
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
    `}};function Qg(n){const e=Jg[n];if(!e)return;const t=fe("#article-modal");t.find(".modal-title").html(`<span style="font-size:11px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;">${e.category}</span><br>${e.title}`),t.find(".modal-sub").html(`${e.readTime} &nbsp;·&nbsp; ${e.date}`),t.find("#article-content").html(e.content),t.addClass("open")}window.openArticle=Qg;window.closeArticleModal=()=>fe("#article-modal").removeClass("open");function e_(){fe("#article-modal").on("click",function(n){n.target===this&&closeArticleModal()})}const t_="YOUR_SERVICE_ID",n_="YOUR_TEMPLATE_ID";async function bs(n){try{await Uc.send(t_,n_,n),console.log("✅ Email sent to olatmatics.tech@gmail.com")}catch(e){console.error("❌ Email send failed:",e)}}function i_(){window.handleSubmit=()=>{const n=fe("#f-name").val(),e=fe("#f-email").val(),t=fe("#f-service").val();if(!n||!e||!t){showToast("⚠️ Please fill in your name, email, and select a service.");return}bs({form_type:"Quote Request",name:n,email:e,phone:fe("#f-phone").val(),company:fe("#f-company").val(),service:t,location:fe("#f-location").val(),budget:fe("#f-budget").val(),description:fe("#f-desc").val()}),showToast("✅ Quote submitted! We'll contact you within 24 hours."),["f-name","f-email","f-phone","f-company","f-location","f-desc"].forEach(i=>fe(`#${i}`).val("")),fe("#f-service").val(""),fe("#f-budget").val("")},window.showToast=n=>{const e=fe("#toast");e.text(n).addClass("visible"),setTimeout(()=>e.removeClass("visible"),4500)},window.openApply=n=>{fe("#modal-title").text("Apply: "+n),fe("#modal-sub").text(n==="General Application"?"Send us your CV and we will reach out when a matching role opens.":`Submit your application for ${n} — we will be in touch within 5 business days.`),fe("#apply-modal").addClass("open")},window.closeModal=()=>fe("#apply-modal").removeClass("open"),fe("#apply-modal").on("click",function(n){n.target===this&&closeModal()}),window.submitApplication=()=>{var s;const n=fe("#a-name").val(),e=fe("#a-email").val();if(!n||!e){showToast("⚠️ Please enter your name and email.");return}const t=(s=fe("#a-cv")[0])==null?void 0:s.files[0],i=t?t.name:"No file attached";bs({form_type:"Job Application",name:n,email:e,phone:fe("#a-phone").val(),experience:fe("#a-exp").val(),cover:fe("#a-cover").val(),link:fe("#a-link").val(),cv_name:i}),closeModal(),showToast("✅ Application received! We'll review and contact you within 5 days."),["a-name","a-email","a-phone","a-cover","a-link"].forEach(a=>fe(`#${a}`).val("")),fe("#a-cv").val("")},window.openConsultation=()=>{fe("#consultation-modal").addClass("open")},window.closeConsultationModal=()=>fe("#consultation-modal").removeClass("open"),fe("#consultation-modal").on("click",function(n){n.target===this&&closeConsultationModal()}),window.submitConsultation=()=>{const n=fe("#c-name").val(),e=fe("#c-email").val();if(!n||!e){showToast("⚠️ Please enter your name and email.");return}bs({form_type:"Consultation Booking",name:n,email:e,phone:fe("#c-phone").val(),topic:fe("#c-topic").val()}),closeConsultationModal(),showToast("✅ Consultation booked! Our team will call you within 2 hours."),["c-name","c-email","c-phone","c-topic"].forEach(t=>fe(`#${t}`).val(""))}}function r_(){const n=fe("#map-container");n.length&&n.html(`
      <iframe
        width="100%"
        height="250"
        style="border:0;border-radius:12px;"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.176!2d7.4705!3d9.112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDYnNDMuMyJOIDfCsDI4JzEzLjgiRQ!5e0!3m2!1sen!2sng!4v1">
      </iframe>
    `)}let Ka=!1,Ir=null;function kr(){return JSON.parse(localStorage.getItem("oth-admin-data")||'{"clients":[]}')}function Ns(n){localStorage.setItem("oth-admin-data",JSON.stringify(n))}function s_(){fe("#admin-modal").addClass("open"),Ka?(fe("#admin-login-screen").hide(),fe("#admin-dashboard-screen").show(),Fi()):(fe("#admin-login-screen").show(),fe("#admin-dashboard-screen").hide())}function Oc(){fe("#admin-modal").removeClass("open")}function a_(){fe("#admin-pass").val()==="admin123@@"?(Ka=!0,fe("#admin-login-screen").hide(),fe("#admin-dashboard-screen").show(),Fi(),showToast("✅ Welcome, Admin!")):showToast("❌ Invalid admin password.")}function o_(){Ka=!1,Ir=null,fe("#admin-pass").val(""),fe("#admin-login-screen").show(),fe("#admin-dashboard-screen").hide(),Oc(),showToast("Signed out of admin panel.")}function Fi(){const e=kr().clients||[],t=Ir,i=t?e.find(c=>c.email===t):null;let s=e.length>0?e.map((c,h)=>`
    <tr class="${c.email===t?"admin-row-selected":""}" onclick="selectClient('${c.email}')">
      <td>${c.name}</td>
      <td>${c.email}</td>
      <td>${c.company||"—"}</td>
      <td>${(c.projects||[]).length}</td>
      <td>
        <button class="admin-btn-sm admin-btn-danger" onclick="event.stopPropagation();deleteClient('${c.email}')">Delete</button>
      </td>
    </tr>
  `).join(""):'<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1.5rem;">No clients registered yet. Add one below.</td></tr>',a="";if(i){const c=i.projects||[];let h=c.length>0?c.map((p,g)=>{const v={active:"In Progress",pending:"Scheduled",complete:"Complete",delayed:"Delayed"},S={active:"status-active",pending:"status-pending",complete:"status-complete",delayed:"status-delayed"},M=p.status==="complete"?"#475569":p.status==="delayed"?"#e24b4a":p.status==="pending"?"#f5a623":"#1dbe8a",b=p.progress||0;return`<tr>
        <td>${p.name}</td>
        <td>${p.division||"—"}</td>
        <td>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="flex:1;height:6px;background:var(--dark4);border-radius:3px;overflow:hidden;">
              <div style="height:100%;width:${b}%;background:${M};border-radius:3px;transition:width 0.3s;"></div>
            </div>
            <span style="font-size:11px;min-width:30px;">${b}%</span>
          </div>
        </td>
        <td><span class="status-pill ${S[p.status]||"status-pending"}">${v[p.status]||p.status}</span></td>
        <td><button class="admin-btn-sm admin-btn-danger" onclick="deleteProject('${i.email}',${g})">Delete</button></td>
      </tr>`}).join(""):'<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:1rem;">No projects for this client.</td></tr>';a=`
      <div class="admin-client-projects">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
          <h4 style="font-size:14px;">Projects for <strong>${i.name}</strong> (${i.email})</h4>
          <button class="admin-btn-sm" onclick="showToast('Use the form below to add a project.')">+ Add Project</button>
        </div>
        <div style="overflow-x:auto;">
          <table class="portal-tbl admin-projects-tbl">
            <thead><tr><th>Project</th><th>Division</th><th>Progress</th><th>Status</th><th>Actions</th></tr></thead>
            <tbody>${h}</tbody>
          </table>
        </div>
        <div class="admin-add-project" style="margin-top:1rem;padding:1rem;background:var(--dark4);border-radius:8px;">
          <div style="font-size:12px;font-weight:700;margin-bottom:0.5rem;">Add New Project</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr auto;gap:8px;align-items:end;">
            <div><label style="font-size:10px;color:var(--muted);display:block;">Project Name</label><input type="text" id="ap-name" placeholder="Project name" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
            <div><label style="font-size:10px;color:var(--muted);display:block;">Division</label>
              <select id="ap-div" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;">
                <option>Power Systems</option><option>Security</option><option>Automation</option><option>Control Panels</option><option>Elevators</option><option>Petroleum</option><option>BMS</option><option>Consultancy</option>
              </select>
            </div>
            <div><label style="font-size:10px;color:var(--muted);display:block;">Progress %</label><input type="number" id="ap-progress" value="0" min="0" max="100" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
            <div><label style="font-size:10px;color:var(--muted);display:block;">Status</label>
              <select id="ap-status" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;">
                <option value="active">In Progress</option><option value="pending">Scheduled</option><option value="complete">Complete</option><option value="delayed">Delayed</option>
              </select>
            </div>
            <button class="admin-btn-sm admin-btn-primary" onclick="addProject('${i.email}')" style="padding:6px 12px;">Add</button>
          </div>
        </div>
      </div>
    `}const f=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.5rem;">
      <h3 style="font-size:16px;font-weight:800;">Admin Dashboard</h3>
      <div style="display:flex;gap:8px;">
        <button class="admin-btn-sm admin-btn-primary" onclick="document.getElementById('add-client-form').style.display=document.getElementById('add-client-form').style.display==='none'?'block':'none'">+ Add Client</button>
        <button class="admin-btn-sm admin-btn-danger" onclick="adminLogout()">Logout</button>
      </div>
    </div>

    <div id="add-client-form" style="display:none;margin-bottom:1.5rem;padding:1rem;background:var(--dark4);border-radius:8px;">
      <div style="font-size:12px;font-weight:700;margin-bottom:0.5rem;">Register New Client</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:8px;align-items:end;">
        <div><label style="font-size:10px;color:var(--muted);display:block;">Full Name</label><input type="text" id="ac-name" placeholder="Client name" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
        <div><label style="font-size:10px;color:var(--muted);display:block;">Email</label><input type="email" id="ac-email" placeholder="client@email.com" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
        <div><label style="font-size:10px;color:var(--muted);display:block;">Password</label><input type="text" id="ac-pass" placeholder="Set password" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
        <div><label style="font-size:10px;color:var(--muted);display:block;">Company (optional)</label><input type="text" id="ac-company" placeholder="Company name" style="width:100%;padding:6px 8px;background:var(--dark3);border:1px solid var(--border);border-radius:5px;color:var(--text);font-size:12px;"></div>
      </div>
      <button class="admin-btn-sm admin-btn-primary" onclick="addClient()" style="margin-top:8px;">Register Client</button>
    </div>

    <div style="display:grid;grid-template-columns: 1fr 1fr;gap:1.5rem;">
      <div>
        <h4 style="font-size:13px;margin-bottom:0.75rem;">Registered Clients</h4>
        <div style="overflow-x:auto;max-height:300px;overflow-y:auto;">
          <table class="portal-tbl admin-clients-tbl">
            <thead><tr><th>Name</th><th>Email</th><th>Company</th><th>Projects</th><th>Actions</th></tr></thead>
            <tbody>${s}</tbody>
          </table>
        </div>
      </div>
      <div>
        ${a||'<div style="color:var(--muted);font-size:13px;padding:2rem 0;text-align:center;">Select a client from the left to manage their projects.</div>'}
      </div>
    </div>
  `;fe("#admin-dashboard-content").html(f)}function l_(n){Ir=n,Fi()}function c_(){const n=fe("#ac-name").val().trim(),e=fe("#ac-email").val().trim(),t=fe("#ac-pass").val().trim(),i=fe("#ac-company").val().trim();if(!n||!e||!t){showToast("⚠️ Please fill in name, email, and password.");return}const s=kr();if(s.clients.find(a=>a.email===e)){showToast("⚠️ A client with this email already exists.");return}s.clients.push({name:n,email:e,password:t,company:i,projects:[]}),Ns(s),fe("#ac-name, #ac-email, #ac-pass, #ac-company").val(""),Fi(),showToast("✅ Client registered successfully!")}function u_(n){if(!confirm("Delete this client and all their projects?"))return;const e=kr();e.clients=e.clients.filter(t=>t.email!==n),Ns(e),Ir===n&&(Ir=null),Fi(),showToast("🗑️ Client deleted.")}function f_(n){const e=fe("#ap-name").val().trim(),t=fe("#ap-div").val(),i=parseInt(fe("#ap-progress").val())||0,s=fe("#ap-status").val();if(!e){showToast("⚠️ Please enter a project name.");return}const a=kr(),f=a.clients.find(c=>c.email===n);if(!f){showToast("❌ Client not found.");return}f.projects||(f.projects=[]),f.projects.push({name:e,division:t,progress:i,status:s}),Ns(a),fe("#ap-name").val(""),fe("#ap-progress").val("0"),Fi(),showToast("✅ Project added!")}function d_(n,e){if(!confirm("Delete this project?"))return;const t=kr(),i=t.clients.find(s=>s.email===n);i&&i.projects&&(i.projects.splice(e,1),Ns(t),Fi(),showToast("🗑️ Project deleted."))}window.toggleAdmin=s_;window.closeAdminModal=Oc;window.adminLogin=a_;window.adminLogout=o_;window.addClient=c_;window.deleteClient=u_;window.selectClient=l_;window.addProject=f_;window.deleteProject=d_;fe(document).ready(()=>{Bg(),zg(),kg(),Gg(),Vg(),Wg(),i_(),jg(),Zg(),e_(),r_()});
