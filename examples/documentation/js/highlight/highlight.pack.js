/*
  Highlight.js 10.4.0 (4055826e)
  License: BSD-3-Clause
  Copyright (c) 2006-2020, Ivan Sagalaev
*/
var hljs=function(){"use strict";function e(t){
  return t instanceof Map?t.clear=t.delete=t.set=()=>{
  throw Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=()=>{
  throw Error("set is read-only")
  }),Object.freeze(t),Object.getOwnPropertyNames(t).forEach((n=>{var s=t[n]
  ;"object"!=typeof s||Object.isFrozen(s)||e(s)})),t}var t=e,n=e;t.default=n
  ;class s{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}
  ignoreMatch(){this.ignore=!0}}function r(e){
  return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")
  }function a(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t]
  ;return t.forEach((e=>{for(const t in e)n[t]=e[t]})),n}function i(e){
  return e.nodeName.toLowerCase()}var o=Object.freeze({__proto__:null,
  escapeHTML:r,inherit:a,nodeStream:e=>{const t=[];return function e(n,s){
  for(let r=n.firstChild;r;r=r.nextSibling)3===r.nodeType?s+=r.nodeValue.length:1===r.nodeType&&(t.push({
  event:"start",offset:s,node:r}),s=e(r,s),i(r).match(/br|hr|img|input/)||t.push({
  event:"stop",offset:s,node:r}));return s}(e,0),t},mergeStreams:(e,t,n)=>{
  let s=0,a="";const o=[];function l(){
  return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t
  }function c(e){
  a+="<"+i(e)+[].map.call(e.attributes,(e=>" "+e.nodeName+'="'+r(e.value)+'"')).join("")+">"
  }function u(e){a+="</"+i(e)+">"}function g(e){("start"===e.event?c:u)(e.node)}
  for(;e.length||t.length;){let t=l()
  ;if(a+=r(n.substring(s,t[0].offset)),s=t[0].offset,t===e){o.reverse().forEach(u)
  ;do{g(t.splice(0,1)[0]),t=l()}while(t===e&&t.length&&t[0].offset===s)
  ;o.reverse().forEach(c)
  }else"start"===t[0].event?o.push(t[0].node):o.pop(),g(t.splice(0,1)[0])}
  return a+r(n.substr(s))}});const l=e=>!!e.kind;class c{constructor(e,t){
  this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){
  this.buffer+=r(e)}openNode(e){if(!l(e))return;let t=e.kind
  ;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){
  l(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){
  this.buffer+=`<span class="${e}">`}}class u{constructor(){this.rootNode={
  children:[]},this.stack=[this.rootNode]}get top(){
  return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){
  this.top.children.push(e)}openNode(e){const t={kind:e,children:[]}
  ;this.add(t),this.stack.push(t)}closeNode(){
  if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){
  for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}
  walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){
  return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),
  t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){
  "string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{
  u._collapse(e)})))}}class g extends u{constructor(e){super(),this.options=e}
  addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}
  addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root
  ;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){
  return new c(this,this.options).value()}finalize(){return!0}}function d(e){
  return e?"string"==typeof e?e:e.source:null}
  const h="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",x={
  begin:"\\\\[\\s\\S]",relevance:0},E={className:"string",begin:"'",end:"'",
  illegal:"\\n",contains:[x]},v={className:"string",begin:'"',end:'"',
  illegal:"\\n",contains:[x]},_={
  begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  },w=(e,t,n={})=>{const s=a({className:"comment",begin:e,end:t,contains:[]},n)
  ;return s.contains.push(_),s.contains.push({className:"doctag",
  begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),s
  },N=w("//","$"),y=w("/\\*","\\*/"),R=w("#","$");var k=Object.freeze({
  __proto__:null,IDENT_RE:h,UNDERSCORE_IDENT_RE:f,NUMBER_RE:p,C_NUMBER_RE:m,
  BINARY_NUMBER_RE:b,
  RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
  SHEBANG:(e={})=>{const t=/^#![ ]*\//
  ;return e.binary&&(e.begin=((...e)=>e.map((e=>d(e))).join(""))(t,/.*\b/,e.binary,/\b.*/)),
  a({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{
  0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:x,APOS_STRING_MODE:E,
  QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:_,COMMENT:w,C_LINE_COMMENT_MODE:N,
  C_BLOCK_COMMENT_MODE:y,HASH_COMMENT_MODE:R,NUMBER_MODE:{className:"number",
  begin:p,relevance:0},C_NUMBER_MODE:{className:"number",begin:m,relevance:0},
  BINARY_NUMBER_MODE:{className:"number",begin:b,relevance:0},CSS_NUMBER_MODE:{
  className:"number",
  begin:p+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
  relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",
  begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[x,{begin:/\[/,end:/\]/,
  relevance:0,contains:[x]}]}]},TITLE_MODE:{className:"title",begin:h,relevance:0
  },UNDERSCORE_TITLE_MODE:{className:"title",begin:f,relevance:0},METHOD_GUARD:{
  begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:e=>Object.assign(e,{
  "on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{
  t.data._beginMatch!==e[1]&&t.ignoreMatch()}})})
  ;const M=["of","and","for","in","not","or","if","then","parent","list","value"]
  ;function O(e){function t(t,n){
  return RegExp(d(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class n{
  constructor(){
  this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}
  addRule(e,t){
  t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),
  this.matchAt+=(e=>RegExp(e.toString()+"|").exec("").length-1)(e)+1}compile(){
  0===this.regexes.length&&(this.exec=()=>null)
  ;const e=this.regexes.map((e=>e[1]));this.matcherRe=t(((e,t="|")=>{
  const n=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let s=0,r=""
  ;for(let a=0;a<e.length;a++){s+=1;const i=s;let o=d(e[a])
  ;for(a>0&&(r+=t),r+="(";o.length>0;){const e=n.exec(o);if(null==e){r+=o;break}
  r+=o.substring(0,e.index),
  o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+(Number(e[1])+i):(r+=e[0],
  "("===e[0]&&s++)}r+=")"}return r})(e),!0),this.lastIndex=0}exec(e){
  this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e)
  ;if(!t)return null
  ;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),s=this.matchIndexes[n]
  ;return t.splice(0,n),Object.assign(t,s)}}class s{constructor(){
  this.rules=[],this.multiRegexes=[],
  this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){
  if(this.multiRegexes[e])return this.multiRegexes[e];const t=new n
  ;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),
  t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){
  return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){
  this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){
  const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex
  ;let n=t.exec(e)
  ;if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{
  const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}
  return n&&(this.regexIndex+=n.position+1,
  this.regexIndex===this.count&&this.considerAll()),n}}function r(e,t){
  "."===e.input[e.index-1]&&t.ignoreMatch()}
  if(e.contains&&e.contains.includes("self"))throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.")
  ;return e.classNameAliases=a(e.classNameAliases||{}),function n(i,o){const l=i
  ;if(i.compiled)return l
  ;i.compiled=!0,i.__beforeBegin=null,i.keywords=i.keywords||i.beginKeywords
  ;let c=null
  ;if("object"==typeof i.keywords&&(c=i.keywords.$pattern,delete i.keywords.$pattern),
  i.keywords&&(i.keywords=((e,t)=>{const n={}
  ;return"string"==typeof e?s("keyword",e):Object.keys(e).forEach((t=>{s(t,e[t])
  })),n;function s(e,s){t&&(s=s.toLowerCase()),s.split(" ").forEach((t=>{
  const s=t.split("|");n[s[0]]=[e,A(s[0],s[1])]}))}
  })(i.keywords,e.case_insensitive)),
  i.lexemes&&c)throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ")
  ;return l.keywordPatternRe=t(i.lexemes||c||/\w+/,!0),
  o&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",
  i.__beforeBegin=r),
  i.begin||(i.begin=/\B|\b/),l.beginRe=t(i.begin),i.endSameAsBegin&&(i.end=i.begin),
  i.end||i.endsWithParent||(i.end=/\B|\b/),
  i.end&&(l.endRe=t(i.end)),l.terminator_end=d(i.end)||"",
  i.endsWithParent&&o.terminator_end&&(l.terminator_end+=(i.end?"|":"")+o.terminator_end)),
  i.illegal&&(l.illegalRe=t(i.illegal)),
  void 0===i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),
  i.contains=[].concat(...i.contains.map((e=>(e=>(e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map((t=>a(e,{
  variants:null},t)))),e.cached_variants?e.cached_variants:L(e)?a(e,{
  starts:e.starts?a(e.starts):null
  }):Object.isFrozen(e)?a(e):e))("self"===e?i:e)))),i.contains.forEach((e=>{n(e,l)
  })),i.starts&&n(i.starts,o),l.matcher=(e=>{const t=new s
  ;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"
  }))),e.terminator_end&&t.addRule(e.terminator_end,{type:"end"
  }),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t})(l),l}(e)}function L(e){
  return!!e&&(e.endsWithParent||L(e.starts))}function A(e,t){
  return t?Number(t):(e=>M.includes(e.toLowerCase()))(e)?0:1}function j(e){
  const t={props:["language","code","autodetect"],data:()=>({detectedLanguage:"",
  unknownLanguage:!1}),computed:{className(){
  return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){
  if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),
  this.unknownLanguage=!0,r(this.code);let t
  ;return this.autoDetect?(t=e.highlightAuto(this.code),
  this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),
  this.detectedLanguage=this.language),t.value},autoDetect(){
  return!(this.language&&(e=this.autodetect,!e&&""!==e));var e},
  ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{
  class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{
  Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}
  const I=r,S=a,{nodeStream:T,mergeStreams:B}=o,P=Symbol("nomatch");return(e=>{
  const n=[],r=Object.create(null),a=Object.create(null),i=[];let o=!0
  ;const l=/(^(<[^>]+>|\t|)+|\n)/gm,c="Could not find the language '{}', did you forget to load/include a language module?",u={
  disableAutodetect:!0,name:"Plain text",contains:[]};let d={
  noHighlightRe:/^(no-?highlight)$/i,
  languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",
  tabReplace:null,useBR:!1,languages:null,__emitter:g};function h(e){
  return d.noHighlightRe.test(e)}function f(e,t,n,s){const r={code:t,language:e}
  ;N("before:highlight",r);const a=r.result?r.result:p(r.language,r.code,n,s)
  ;return a.code=r.code,N("after:highlight",a),a}function p(e,t,n,a){const i=t
  ;function l(e,t){const n=_.case_insensitive?t[0].toLowerCase():t[0]
  ;return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}
  function u(){null!=y.subLanguage?(()=>{if(""===M)return;let e=null
  ;if("string"==typeof y.subLanguage){
  if(!r[y.subLanguage])return void k.addText(M)
  ;e=p(y.subLanguage,M,!0,R[y.subLanguage]),R[y.subLanguage]=e.top
  }else e=m(M,y.subLanguage.length?y.subLanguage:null)
  ;y.relevance>0&&(L+=e.relevance),k.addSublanguage(e.emitter,e.language)
  })():(()=>{if(!y.keywords)return void k.addText(M);let e=0
  ;y.keywordPatternRe.lastIndex=0;let t=y.keywordPatternRe.exec(M),n="";for(;t;){
  n+=M.substring(e,t.index);const s=l(y,t);if(s){const[e,r]=s
  ;k.addText(n),n="",L+=r;const a=_.classNameAliases[e]||e;k.addKeyword(t[0],a)
  }else n+=t[0];e=y.keywordPatternRe.lastIndex,t=y.keywordPatternRe.exec(M)}
  n+=M.substr(e),k.addText(n)})(),M=""}function g(e){
  return e.className&&k.openNode(_.classNameAliases[e.className]||e.className),
  y=Object.create(e,{parent:{value:y}}),y}function h(e,t,n){let r=((e,t)=>{
  const n=e&&e.exec(t);return n&&0===n.index})(e.endRe,n);if(r){if(e["on:end"]){
  const n=new s(e);e["on:end"](t,n),n.ignore&&(r=!1)}if(r){
  for(;e.endsParent&&e.parent;)e=e.parent;return e}}
  if(e.endsWithParent)return h(e.parent,t,n)}function f(e){
  return 0===y.matcher.regexIndex?(M+=e[0],1):(S=!0,0)}function b(e){
  const t=e[0],n=i.substr(e.index),s=h(y,e,n);if(!s)return P;const r=y
  ;r.skip?M+=t:(r.returnEnd||r.excludeEnd||(M+=t),u(),r.excludeEnd&&(M=t));do{
  y.className&&k.closeNode(),y.skip||y.subLanguage||(L+=y.relevance),y=y.parent
  }while(y!==s.parent)
  ;return s.starts&&(s.endSameAsBegin&&(s.starts.endRe=s.endRe),
  g(s.starts)),r.returnEnd?0:t.length}let x={};function E(t,r){const a=r&&r[0]
  ;if(M+=t,null==a)return u(),0
  ;if("begin"===x.type&&"end"===r.type&&x.index===r.index&&""===a){
  if(M+=i.slice(r.index,r.index+1),!o){const t=Error("0 width match regex")
  ;throw t.languageName=e,t.badRule=x.rule,t}return 1}
  if(x=r,"begin"===r.type)return function(e){
  const t=e[0],n=e.rule,r=new s(n),a=[n.__beforeBegin,n["on:begin"]]
  ;for(const n of a)if(n&&(n(e,r),r.ignore))return f(t)
  ;return n&&n.endSameAsBegin&&(n.endRe=RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),
  n.skip?M+=t:(n.excludeBegin&&(M+=t),
  u(),n.returnBegin||n.excludeBegin||(M=t)),g(n),n.returnBegin?0:t.length}(r)
  ;if("illegal"===r.type&&!n){
  const e=Error('Illegal lexeme "'+a+'" for mode "'+(y.className||"<unnamed>")+'"')
  ;throw e.mode=y,e}if("end"===r.type){const e=b(r);if(e!==P)return e}
  if("illegal"===r.type&&""===a)return 1
  ;if(j>1e5&&j>3*r.index)throw Error("potential infinite loop, way more iterations than matches")
  ;return M+=a,a.length}const _=v(e);if(!_)throw console.error(c.replace("{}",e)),
  Error('Unknown language: "'+e+'"');const w=O(_);let N="",y=a||w
  ;const R={},k=new d.__emitter(d);(()=>{const e=[]
  ;for(let t=y;t!==_;t=t.parent)t.className&&e.unshift(t.className)
  ;e.forEach((e=>k.openNode(e)))})();let M="",L=0,A=0,j=0,S=!1;try{
  for(y.matcher.considerAll();;){
  j++,S?S=!1:y.matcher.considerAll(),y.matcher.lastIndex=A
  ;const e=y.matcher.exec(i);if(!e)break;const t=E(i.substring(A,e.index),e)
  ;A=e.index+t}return E(i.substr(A)),k.closeAllNodes(),k.finalize(),N=k.toHTML(),{
  relevance:L,value:N,language:e,illegal:!1,emitter:k,top:y}}catch(t){
  if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{
  msg:t.message,context:i.slice(A-100,A+100),mode:t.mode},sofar:N,relevance:0,
  value:I(i),emitter:k};if(o)return{illegal:!1,relevance:0,value:I(i),emitter:k,
  language:e,top:y,errorRaised:t};throw t}}function m(e,t){
  t=t||d.languages||Object.keys(r);const n=(e=>{const t={relevance:0,
  emitter:new d.__emitter(d),value:I(e),illegal:!1,top:u}
  ;return t.emitter.addText(e),t})(e),s=t.filter(v).filter(w).map((t=>p(t,e,!1)))
  ;s.unshift(n);const a=s.sort(((e,t)=>{
  if(e.relevance!==t.relevance)return t.relevance-e.relevance
  ;if(e.language&&t.language){if(v(e.language).supersetOf===t.language)return 1
  ;if(v(t.language).supersetOf===e.language)return-1}return 0})),[i,o]=a,l=i
  ;return l.second_best=o,l}function b(e){
  return d.tabReplace||d.useBR?e.replace(l,(e=>"\n"===e?d.useBR?"<br>":e:d.tabReplace?e.replace(/\t/g,d.tabReplace):e)):e
  }function x(e){let t=null;const n=(e=>{let t=e.className+" "
  ;t+=e.parentNode?e.parentNode.className:"";const n=d.languageDetectRe.exec(t)
  ;if(n){const t=v(n[1])
  ;return t||(console.warn(c.replace("{}",n[1])),console.warn("Falling back to no-highlight mode for this block.",e)),
  t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||v(e)))})(e)
  ;if(h(n))return;N("before:highlightBlock",{block:e,language:n
  }),d.useBR?(t=document.createElement("div"),
  t.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n")):t=e
  ;const s=t.textContent,r=n?f(n,s,!0):m(s),i=T(t);if(i.length){
  const e=document.createElement("div");e.innerHTML=r.value,r.value=B(i,T(e),s)}
  r.value=b(r.value),N("after:highlightBlock",{block:e,result:r
  }),e.innerHTML=r.value,e.className=((e,t,n)=>{const s=t?a[t]:n,r=[e.trim()]
  ;return e.match(/\bhljs\b/)||r.push("hljs"),
  e.includes(s)||r.push(s),r.join(" ").trim()
  })(e.className,n,r.language),e.result={language:r.language,re:r.relevance,
  relavance:r.relevance},r.second_best&&(e.second_best={
  language:r.second_best.language,re:r.second_best.relevance,
  relavance:r.second_best.relevance})}const E=()=>{if(E.called)return;E.called=!0
  ;const e=document.querySelectorAll("pre code");n.forEach.call(e,x)}
  ;function v(e){return e=(e||"").toLowerCase(),r[e]||r[a[e]]}
  function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{a[e]=t
  }))}function w(e){const t=v(e);return t&&!t.disableAutodetect}function N(e,t){
  const n=e;i.forEach((e=>{e[n]&&e[n](t)}))}Object.assign(e,{highlight:f,
  highlightAuto:m,
  fixMarkup:e=>(console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"),
  console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"),
  b(e)),highlightBlock:x,configure:e=>{
  e.useBR&&(console.warn("'useBR' option is deprecated and will be removed entirely in v11.0"),
  console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2559")),
  d=S(d,e)},initHighlighting:E,initHighlightingOnLoad:()=>{
  window.addEventListener("DOMContentLoaded",E,!1)},registerLanguage:(t,n)=>{
  let s=null;try{s=n(e)}catch(e){
  if(console.error("Language definition for '{}' could not be registered.".replace("{}",t)),
  !o)throw e;console.error(e),s=u}
  s.name||(s.name=t),r[t]=s,s.rawDefinition=n.bind(null,e),
  s.aliases&&_(s.aliases,{languageName:t})},listLanguages:()=>Object.keys(r),
  getLanguage:v,registerAliases:_,requireLanguage:e=>{
  console.warn("requireLanguage is deprecated and will be removed entirely in the future."),
  console.warn("Please see https://github.com/highlightjs/highlight.js/pull/2844")
  ;const t=v(e);if(t)return t
  ;throw Error("The '{}' language is required, but not loaded.".replace("{}",e))},
  autoDetection:w,inherit:S,addPlugin:e=>{i.push(e)},vuePlugin:j(e).VuePlugin
  }),e.debugMode=()=>{o=!1},e.safeMode=()=>{o=!0},e.versionString="10.4.0"
  ;for(const e in k)"object"==typeof k[e]&&t(k[e]);return Object.assign(e,k),e
  })({})}()
  ;"object"==typeof exports&&"undefined"!=typeof module&&(module.exports=hljs);hljs.registerLanguage("xml",(()=>{"use strict";function e(e){
  return e?"string"==typeof e?e:e.source:null}function n(e){return a("(?=",e,")")}
  function a(...n){return n.map((n=>e(n))).join("")}function s(...n){
  return"("+n.map((n=>e(n))).join("|")+")"}return e=>{
  const t=a(/[A-Z_]/,a("(",/[A-Z0-9_.-]+:/,")?"),/[A-Z0-9_.-]*/),i={
  className:"symbol",begin:"&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"},c={begin:"\\s",
  contains:[{className:"meta-keyword",begin:"#?[a-z_][a-z1-9_-]+",illegal:"\\n"}]
  },r=e.inherit(c,{begin:"\\(",end:"\\)"}),l=e.inherit(e.APOS_STRING_MODE,{
  className:"meta-string"}),g=e.inherit(e.QUOTE_STRING_MODE,{
  className:"meta-string"}),m={endsWithParent:!0,illegal:/</,relevance:0,
  contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{
  begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{
  begin:/"/,end:/"/,contains:[i]},{begin:/'/,end:/'/,contains:[i]},{
  begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",
  aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],
  case_insensitive:!0,contains:[{className:"meta",begin:"<![a-z]",end:">",
  relevance:10,contains:[c,g,l,r,{begin:"\\[",end:"\\]",contains:[{
  className:"meta",begin:"<![a-z]",end:">",contains:[c,r,g,l]}]}]
  },e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<!\\[CDATA\\[",
  end:"\\]\\]>",relevance:10},i,{className:"meta",begin:/<\?xml/,end:/\?>/,
  relevance:10},{className:"tag",begin:"<style(?=\\s|>)",end:">",keywords:{
  name:"style"},contains:[m],starts:{end:"</style>",returnEnd:!0,
  subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>)",end:">",
  keywords:{name:"script"},contains:[m],starts:{end:/<\/script>/,returnEnd:!0,
  subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/
  },{className:"tag",begin:a(/</,n(a(t,s(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{
  className:"name",begin:t,relevance:0,starts:m}]},{className:"tag",
  begin:a(/<\//,n(a(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{
  begin:/>/,relevance:0}]}]}}})());hljs.registerLanguage("markdown",(()=>{"use strict";function n(...n){
  return n.map((n=>{return(e=n)?"string"==typeof e?e:e.source:null;var e
  })).join("")}return e=>{const a={begin:/<\/?[A-Za-z_]/,end:">",
  subLanguage:"xml",relevance:0},i={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0
  },{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
  relevance:2},{begin:n(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),
  relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{
  begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{
  className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,
  returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",
  excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",
  end:"\\]",excludeBegin:!0,excludeEnd:!0}]},s={className:"strong",contains:[],
  variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},c={
  className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{
  begin:/_(?!_)/,end:/_/,relevance:0}]};s.contains.push(c),c.contains.push(s)
  ;let t=[a,i]
  ;return s.contains=s.contains.concat(t),c.contains=c.contains.concat(t),
  t=t.concat(s,c),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{
  className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:t},{
  begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",
  contains:t}]}]},a,{className:"bullet",begin:"^[ \t]*([*+-]|(\\d+\\.))(?=\\s+)",
  end:"\\s+",excludeEnd:!0},s,c,{className:"quote",begin:"^>\\s+",contains:t,
  end:"$"},{className:"code",variants:[{begin:"(`{3,})(.|\\n)*?\\1`*[ ]*"},{
  begin:"(~{3,})(.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",
  end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{
  begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"
  },i,{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",
  begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",
  begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}})());hljs.registerLanguage("typescript",(()=>{"use strict"
  ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
  ;function t(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{
  return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return r=>{
  const c={$pattern:e,
  keyword:n.concat(["type","namespace","typedef","interface","public","private","protected","implements","declare","abstract","readonly"]).join(" "),
  literal:a.join(" "),
  built_in:s.concat(["any","void","number","boolean","string","object","never","enum"]).join(" ")
  },o={className:"meta",begin:"@[A-Za-z$_][0-9A-Za-z$_]*"},l=(e,n,a)=>{
  const s=e.contains.findIndex((e=>e.label===n))
  ;if(-1===s)throw Error("can not find mode to replace");e.contains.splice(s,1,a)
  },b=(r=>{const c=e,o={begin:/<[A-Za-z0-9\\._:-]+/,
  end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{
  const a=e[0].length+e.index,s=e.input[a];"<"!==s?">"===s&&(((e,{after:n})=>{
  const a="</"+e[0].slice(1);return-1!==e.input.indexOf(a,n)})(e,{after:a
  })||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:e,keyword:n.join(" "),
  literal:a.join(" "),built_in:s.join(" ")
  },b="\\.([0-9](_?[0-9])*)",d="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",g={
  className:"number",variants:[{
  begin:`(\\b(${d})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
  begin:`\\b(${d})\\b((${b})\\b|\\.)?|(${b})\\b`},{
  begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
  begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
  begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
  begin:"\\b0[0-7]+n?\\b"}],relevance:0},u={className:"subst",begin:"\\$\\{",
  end:"\\}",keywords:l,contains:[]},E={begin:"html`",end:"",starts:{end:"`",
  returnEnd:!1,contains:[r.BACKSLASH_ESCAPE,u],subLanguage:"xml"}},m={
  begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
  contains:[r.BACKSLASH_ESCAPE,u],subLanguage:"css"}},_={className:"string",
  begin:"`",end:"`",contains:[r.BACKSLASH_ESCAPE,u]},y={className:"comment",
  variants:[r.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
  begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0
  },{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{
  begin:/(?=[^\n])\s/,relevance:0}]}]
  }),r.C_BLOCK_COMMENT_MODE,r.C_LINE_COMMENT_MODE]
  },p=[r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,E,m,_,g,r.REGEXP_MODE]
  ;u.contains=p.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(p)
  });const N=[].concat(y,u.contains),f=N.concat([{begin:/\(/,end:/\)/,keywords:l,
  contains:["self"].concat(N)}]),A={className:"params",begin:/\(/,end:/\)/,
  excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f};return{name:"Javascript",
  aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:f},
  illegal:/#(?![$_A-z])/,contains:[r.SHEBANG({label:"shebang",binary:"node",
  relevance:5}),{label:"use_strict",className:"meta",relevance:10,
  begin:/^\s*['"]use (strict|asm)['"]/
  },r.APOS_STRING_MODE,r.QUOTE_STRING_MODE,E,m,_,y,g,{
  begin:i(/[{,\n]\s*/,t(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),
  relevance:0,contains:[{className:"attr",begin:c+t("\\s*:"),relevance:0}]},{
  begin:"("+r.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
  keywords:"return throw case",contains:[y,r.REGEXP_MODE,{className:"function",
  begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+r.UNDERSCORE_IDENT_RE+")\\s*=>",
  returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
  begin:r.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0
  },{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:f}]}]
  },{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{
  variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,
  end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,
  contains:["self"]}]}],relevance:0},{className:"function",
  beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,
  contains:["self",r.inherit(r.TITLE_MODE,{begin:c}),A],illegal:/%/},{
  beginKeywords:"while if switch catch for"},{className:"function",
  begin:r.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",
  returnBegin:!0,contains:[A,r.inherit(r.TITLE_MODE,{begin:c})]},{variants:[{
  begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",
  beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{
  beginKeywords:"extends"},r.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
  end:/[{;]/,excludeEnd:!0,contains:[r.inherit(r.TITLE_MODE,{begin:c}),"self",A]
  },{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",
  contains:[r.inherit(r.TITLE_MODE,{begin:c}),{begin:/\(\)/},A]},{begin:/\$[(.]/}]
  }})(r)
  ;return Object.assign(b.keywords,c),b.exports.PARAMS_CONTAINS.push(o),b.contains=b.contains.concat([o,{
  beginKeywords:"namespace",end:/\{/,excludeEnd:!0},{beginKeywords:"interface",
  end:/\{/,excludeEnd:!0,keywords:"interface extends"
  }]),l(b,"shebang",r.SHEBANG()),l(b,"use_strict",{className:"meta",relevance:10,
  begin:/^\s*['"]use strict['"]/
  }),b.contains.find((e=>"function"===e.className)).relevance=0,Object.assign(b,{
  name:"TypeScript",aliases:["ts"]}),b}})());hljs.registerLanguage("css",(()=>{"use strict";return e=>{
  var n="[a-zA-Z-][a-zA-Z0-9_-]*",a={
  begin:/([*]\s?)?(?:[A-Z_.\-\\]+|--[a-zA-Z0-9_-]+)\s*(\/\*\*\/)?:/,
  returnBegin:!0,end:";",endsWithParent:!0,contains:[{className:"attribute",
  begin:/\S/,end:":",excludeEnd:!0,starts:{endsWithParent:!0,excludeEnd:!0,
  contains:[{begin:/[\w-]+\(/,returnBegin:!0,contains:[{className:"built_in",
  begin:/[\w-]+/},{begin:/\(/,end:/\)/,
  contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]}]
  },e.CSS_NUMBER_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,e.C_BLOCK_COMMENT_MODE,{
  className:"number",begin:"#[0-9A-Fa-f]+"},{className:"meta",begin:"!important"}]
  }}]};return{name:"CSS",case_insensitive:!0,illegal:/[=|'\$]/,
  contains:[e.C_BLOCK_COMMENT_MODE,{className:"selector-id",
  begin:/#[A-Za-z0-9_-]+/},{className:"selector-class",begin:"\\."+n},{
  className:"selector-attr",begin:/\[/,end:/\]/,illegal:"$",
  contains:[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},{className:"selector-pseudo",
  begin:/:(:)?[a-zA-Z0-9_+()"'.-]+/},{begin:"@(page|font-face)",
  lexemes:"@[a-z-]+",keywords:"@page @font-face"},{begin:"@",end:"[{;]",
  illegal:/:/,returnBegin:!0,contains:[{className:"keyword",
  begin:/@-?\w[\w]*(-\w+)*/},{begin:/\s/,endsWithParent:!0,excludeEnd:!0,
  relevance:0,keywords:"and or not only",contains:[{begin:/[a-z-]+:/,
  className:"attribute"},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,e.CSS_NUMBER_MODE]
  }]},{className:"selector-tag",begin:n,relevance:0},{begin:/\{/,end:/\}/,
  illegal:/\S/,contains:[e.C_BLOCK_COMMENT_MODE,{begin:/;/},a]}]}}})());hljs.registerLanguage("json",(()=>{"use strict";return n=>{const e={
  literal:"true false null"
  },i=[n.C_LINE_COMMENT_MODE,n.C_BLOCK_COMMENT_MODE],a=[n.QUOTE_STRING_MODE,n.C_NUMBER_MODE],l={
  end:",",endsWithParent:!0,excludeEnd:!0,contains:a,keywords:e},t={begin:/\{/,
  end:/\}/,contains:[{className:"attr",begin:/"/,end:/"/,
  contains:[n.BACKSLASH_ESCAPE],illegal:"\\n"},n.inherit(l,{begin:/:/
  })].concat(i),illegal:"\\S"},s={begin:"\\[",end:"\\]",contains:[n.inherit(l)],
  illegal:"\\S"};return a.push(t,s),i.forEach((n=>{a.push(n)})),{name:"JSON",
  contains:a,keywords:e,illegal:"\\S"}}})());hljs.registerLanguage("plaintext",(()=>{"use strict";return t=>({
  name:"Plain text",aliases:["text","txt"],disableAutodetect:!0})})());hljs.registerLanguage("javascript",(()=>{"use strict"
  ;const e="[A-Za-z$_][0-9A-Za-z$_]*",n=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],a=["true","false","null","undefined","NaN","Infinity"],s=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"])
  ;function r(e){return i("(?=",e,")")}function i(...e){return e.map((e=>{
  return(n=e)?"string"==typeof n?n:n.source:null;var n})).join("")}return t=>{
  const c=e,o={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,
  isTrulyOpeningTag:(e,n)=>{const a=e[0].length+e.index,s=e.input[a]
  ;"<"!==s?">"===s&&(((e,{after:n})=>{const a="</"+e[0].slice(1)
  ;return-1!==e.input.indexOf(a,n)})(e,{after:a
  })||n.ignoreMatch()):n.ignoreMatch()}},l={$pattern:e,keyword:n.join(" "),
  literal:a.join(" "),built_in:s.join(" ")
  },b="\\.([0-9](_?[0-9])*)",g="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",d={
  className:"number",variants:[{
  begin:`(\\b(${g})((${b})|\\.)?|(${b}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{
  begin:`\\b(${g})\\b((${b})\\b|\\.)?|(${b})\\b`},{
  begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{
  begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{
  begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{
  begin:"\\b0[0-7]+n?\\b"}],relevance:0},E={className:"subst",begin:"\\$\\{",
  end:"\\}",keywords:l,contains:[]},u={begin:"html`",end:"",starts:{end:"`",
  returnEnd:!1,contains:[t.BACKSLASH_ESCAPE,E],subLanguage:"xml"}},_={
  begin:"css`",end:"",starts:{end:"`",returnEnd:!1,
  contains:[t.BACKSLASH_ESCAPE,E],subLanguage:"css"}},m={className:"string",
  begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,E]},N={className:"comment",
  variants:[t.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{className:"doctag",
  begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0
  },{className:"variable",begin:c+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{
  begin:/(?=[^\n])\s/,relevance:0}]}]
  }),t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]
  },y=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,_,m,d,t.REGEXP_MODE]
  ;E.contains=y.concat({begin:/\{/,end:/\}/,keywords:l,contains:["self"].concat(y)
  });const f=[].concat(N,E.contains),A=f.concat([{begin:/\(/,end:/\)/,keywords:l,
  contains:["self"].concat(f)}]),p={className:"params",begin:/\(/,end:/\)/,
  excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A};return{name:"Javascript",
  aliases:["js","jsx","mjs","cjs"],keywords:l,exports:{PARAMS_CONTAINS:A},
  illegal:/#(?![$_A-z])/,contains:[t.SHEBANG({label:"shebang",binary:"node",
  relevance:5}),{label:"use_strict",className:"meta",relevance:10,
  begin:/^\s*['"]use (strict|asm)['"]/
  },t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,u,_,m,N,d,{
  begin:i(/[{,\n]\s*/,r(i(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,c+"\\s*:"))),
  relevance:0,contains:[{className:"attr",begin:c+r("\\s*:"),relevance:0}]},{
  begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",
  keywords:"return throw case",contains:[N,t.REGEXP_MODE,{className:"function",
  begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)|"+t.UNDERSCORE_IDENT_RE+")\\s*=>",
  returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{
  begin:t.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0
  },{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:l,contains:A}]}]
  },{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{
  variants:[{begin:"<>",end:"</>"},{begin:o.begin,"on:begin":o.isTrulyOpeningTag,
  end:o.end}],subLanguage:"xml",contains:[{begin:o.begin,end:o.end,skip:!0,
  contains:["self"]}]}],relevance:0},{className:"function",
  beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:l,
  contains:["self",t.inherit(t.TITLE_MODE,{begin:c}),p],illegal:/%/},{
  beginKeywords:"while if switch catch for"},{className:"function",
  begin:t.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\))*[^()]*\\))*[^()]*\\)\\s*\\{",
  returnBegin:!0,contains:[p,t.inherit(t.TITLE_MODE,{begin:c})]},{variants:[{
  begin:"\\."+c},{begin:"\\$"+c}],relevance:0},{className:"class",
  beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{
  beginKeywords:"extends"},t.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,
  end:/[{;]/,excludeEnd:!0,contains:[t.inherit(t.TITLE_MODE,{begin:c}),"self",p]
  },{begin:"(get|set)\\s+(?="+c+"\\()",end:/\{/,keywords:"get set",
  contains:[t.inherit(t.TITLE_MODE,{begin:c}),{begin:/\(\)/},p]},{begin:/\$[(.]/}]
  }}})());hljs.registerLanguage("http",(()=>{"use strict";return e=>{
  var n="HTTP/[0-9\\.]+";return{name:"HTTP",aliases:["https"],illegal:"\\S",
  contains:[{begin:"^"+n,end:"$",contains:[{className:"number",
  begin:"\\b\\d{3}\\b"}]},{begin:"^[A-Z]+ (.*?) "+n+"$",returnBegin:!0,end:"$",
  contains:[{className:"string",begin:" ",end:" ",excludeBegin:!0,excludeEnd:!0},{
  begin:n},{className:"keyword",begin:"[A-Z]+"}]},{className:"attribute",
  begin:"^\\w",end:": ",excludeEnd:!0,illegal:"\\n|\\s|=",starts:{end:"$",
  relevance:0}},{begin:"\\n\\n",starts:{subLanguage:[],endsWithParent:!0}}]}}
  })());