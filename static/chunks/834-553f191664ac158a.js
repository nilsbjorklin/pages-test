"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[834],{5263:function(e,r,t){t.d(r,{W:function(){return o}});function o(...e){for(var r,t,n=0,i="";n<e.length;)(r=e[n++])&&(t=function e(r){var t,o,n="";if("string"==typeof r||"number"==typeof r)n+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(o=e(r[t]))&&(n&&(n+=" "),n+=o);else for(t in r)r[t]&&(n&&(n+=" "),n+=t)}return n}(r))&&(i&&(i+=" "),i+=t);return i}},6222:function(e,r,t){t.d(r,{Xx:function(){return o}});function o(e){if(!e||"object"!=typeof e)return"";try{return JSON.stringify(e)}catch(e){return""}}},5971:function(e,r,t){t.d(r,{Gp:function(){return n},oe:function(){return i}});var o=t(2265);function n(e){return(0,o.forwardRef)(e)}var i=(e,r,t=!0)=>{if(!r)return[e,{}];let o=r.reduce((r,t)=>t in e?{...r,[t]:e[t]}:r,{});return t?[Object.keys(e).filter(e=>!r.includes(e)).reduce((r,t)=>({...r,[t]:e[t]}),{}),o]:[e,o]}},2068:function(e,r,t){t.d(r,{tv:function(){return et}});var o=["small","medium","large"],n={theme:{opacity:["disabled"],spacing:["divider"],borderWidth:o,borderRadius:o},classGroups:{shadow:[{shadow:o}],"font-size":[{text:["tiny",...o]}],"bg-image":["bg-stripe-gradient"]}},i=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,l=e=>!e||"object"!=typeof e||0===Object.keys(e).length,a=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function s(e){let r=[];return function e(r,t){r.forEach(function(r){Array.isArray(r)?e(r,t):t.push(r)})}(e,r),r}var c=(...e)=>s(e).filter(Boolean),d=(e,r)=>{let t={},o=Object.keys(e),n=Object.keys(r);for(let i of o)if(n.includes(i)){let o=e[i],n=r[i];"object"==typeof o&&"object"==typeof n?t[i]=d(o,n):Array.isArray(o)||Array.isArray(n)?t[i]=c(n,o):t[i]=n+" "+o}else t[i]=e[i];for(let e of n)o.includes(e)||(t[e]=r[e]);return t},u=e=>e&&"string"==typeof e?e.replace(/\s+/g," ").trim():e,f=/^\[(.+)\]$/;function p(e,r){var t=e;return r.split("-").forEach(function(e){t.nextPart.has(e)||t.nextPart.set(e,{nextPart:new Map,validators:[]}),t=t.nextPart.get(e)}),t}var b=/\s+/;function g(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){if("string"==typeof r)return r;for(var t,o="",n=0;n<r.length;n++)r[n]&&(t=e(r[n]))&&(o&&(o+=" "),o+=t);return o}(e))&&(o&&(o+=" "),o+=r);return o}function m(){for(var e,r,t,o=arguments.length,n=Array(o),i=0;i<o;i++)n[i]=arguments[i];var l=function(o){var i=n[0];return r=(e=function(e){var r,t,o,n,i,l,a,s,c,d,u;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,o=new Map;function n(n,i){t.set(n,i),++r>e&&(r=0,o=t,t=new Map)}return{get:function(e){var r=t.get(e);return void 0!==r?r:void 0!==(r=o.get(e))?(n(e,r),r):void 0},set:function(e,r){t.has(e)?t.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(t=1===(r=e.separator||":").length,o=r[0],n=r.length,function(e){for(var i,l=[],a=0,s=0,c=0;c<e.length;c++){var d=e[c];if(0===a){if(d===o&&(t||e.slice(c,c+n)===r)){l.push(e.slice(s,c)),s=c+n;continue}if("/"===d){i=c;continue}}"["===d?a++:"]"===d&&a--}var u=0===l.length?e:e.substring(s),f=u.startsWith("!"),p=f?u.substring(1):u;return{modifiers:l,hasImportantModifier:f,baseClassName:p,maybePostfixModifierPosition:i&&i>s?i-s:void 0}}),...(s=e.theme,c=e.prefix,d={nextPart:new Map,validators:[]},(u=Object.entries(e.classGroups),c?u.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?c+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[c+e[0],e[1]]})):e})]}):u).forEach(function(e){var r=e[0];(function e(r,t,o,n){r.forEach(function(r){if("string"==typeof r){(""===r?t:p(t,r)).classGroupId=o;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),t,o,n);return}t.validators.push({validator:r,classGroupId:o});return}Object.entries(r).forEach(function(r){var i=r[0];e(r[1],p(t,i),o,n)})})})(e[1],d,r,s)}),i=e.conflictingClassGroups,a=void 0===(l=e.conflictingClassGroupModifiers)?{}:l,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,t){if(0===r.length)return t.classGroupId;var o=r[0],n=t.nextPart.get(o),i=n?e(r.slice(1),n):void 0;if(i)return i;if(0!==t.validators.length){var l=r.join("-");return t.validators.find(function(e){return(0,e.validator)(l)})?.classGroupId}}(r,d)||function(e){if(f.test(e)){var r=f.exec(e)[1],t=r?.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}(e)},getConflictingClassGroupIds:function(e,r){var t=i[e]||[];return r&&a[e]?[].concat(t,a[e]):t}})}}(n.slice(1).reduce(function(e,r){return r(e)},i()))).cache.get,t=e.cache.set,l=a,a(o)};function a(o){var n,i,l,a,s,c=r(o);if(c)return c;var d=(i=(n=e).splitModifiers,l=n.getClassGroupId,a=n.getConflictingClassGroupIds,s=new Set,o.trim().split(b).map(function(e){var r=i(e),t=r.modifiers,o=r.hasImportantModifier,n=r.baseClassName,a=r.maybePostfixModifierPosition,s=l(a?n.substring(0,a):n),c=!!a;if(!s){if(!a||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,t.sort().concat([e])),t=[]):t.push(e)}),r.push.apply(r,t.sort()),r})(t).join(":");return{isTailwindClass:!0,modifierId:o?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,t=e.classGroupId,o=e.hasPostfixModifier,n=r+t;return!s.has(n)&&(s.add(n),a(t,o).forEach(function(e){return s.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return t(o,d),d}return function(){return l(g.apply(null,arguments))}}function y(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var v=/^\[(?:([a-z-]+):)?(.+)\]$/i,h=/^\d+\/\d+$/,w=new Set(["px","full","screen"]),x=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,k=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function z(e){return N(e)||w.has(e)||h.test(e)||C(e)}function C(e){return T(e,"length",R)}function A(e){return T(e,"size",W)}function M(e){return T(e,"position",W)}function G(e){return T(e,"url",_)}function O(e){return T(e,"number",N)}function N(e){return!Number.isNaN(Number(e))}function $(e){return e.endsWith("%")&&N(e.slice(0,-1))}function P(e){return J(e)||T(e,"number",J)}function S(e){return v.test(e)}function I(){return!0}function V(e){return x.test(e)}function E(e){return T(e,"",q)}function T(e,r,t){var o=v.exec(e);return!!o&&(o[1]?o[1]===r:t(o[2]))}function R(e){return k.test(e)}function W(){return!1}function _(e){return e.startsWith("url(")}function J(e){return Number.isInteger(Number(e))}function q(e){return j.test(e)}function B(){var e=y("colors"),r=y("spacing"),t=y("blur"),o=y("brightness"),n=y("borderColor"),i=y("borderRadius"),l=y("borderSpacing"),a=y("borderWidth"),s=y("contrast"),c=y("grayscale"),d=y("hueRotate"),u=y("invert"),f=y("gap"),p=y("gradientColorStops"),b=y("gradientColorStopPositions"),g=y("inset"),m=y("margin"),v=y("opacity"),h=y("padding"),w=y("saturate"),x=y("scale"),k=y("sepia"),j=y("skew"),T=y("space"),R=y("translate"),W=function(){return["auto","contain","none"]},_=function(){return["auto","hidden","clip","visible","scroll"]},J=function(){return["auto",S,r]},q=function(){return[S,r]},B=function(){return["",z]},K=function(){return["auto",N,S]},X=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},D=function(){return["solid","dashed","dotted","double","none"]},F=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},H=function(){return["start","end","center","between","around","evenly","stretch"]},L=function(){return["","0",S]},Q=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},U=function(){return[N,O]},Y=function(){return[N,S]};return{cacheSize:500,theme:{colors:[I],spacing:[z],blur:["none","",V,S],brightness:U(),borderColor:[e],borderRadius:["none","","full",V,S],borderSpacing:q(),borderWidth:B(),contrast:U(),grayscale:L(),hueRotate:Y(),invert:L(),gap:q(),gradientColorStops:[e],gradientColorStopPositions:[$,C],inset:J(),margin:J(),opacity:U(),padding:q(),saturate:U(),scale:U(),sepia:L(),skew:Y(),space:q(),translate:q()},classGroups:{aspect:[{aspect:["auto","square","video",S]}],container:["container"],columns:[{columns:[V]}],"break-after":[{"break-after":Q()}],"break-before":[{"break-before":Q()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(X(),[S])}],overflow:[{overflow:_()}],"overflow-x":[{"overflow-x":_()}],"overflow-y":[{"overflow-y":_()}],overscroll:[{overscroll:W()}],"overscroll-x":[{"overscroll-x":W()}],"overscroll-y":[{"overscroll-y":W()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[g]}],"inset-x":[{"inset-x":[g]}],"inset-y":[{"inset-y":[g]}],start:[{start:[g]}],end:[{end:[g]}],top:[{top:[g]}],right:[{right:[g]}],bottom:[{bottom:[g]}],left:[{left:[g]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",P]}],basis:[{basis:J()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",S]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",P]}],"grid-cols":[{"grid-cols":[I]}],"col-start-end":[{col:["auto",{span:["full",P]},S]}],"col-start":[{"col-start":K()}],"col-end":[{"col-end":K()}],"grid-rows":[{"grid-rows":[I]}],"row-start-end":[{row:["auto",{span:[P]},S]}],"row-start":[{"row-start":K()}],"row-end":[{"row-end":K()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",S]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",S]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(H())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(H(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(H(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[h]}],px:[{px:[h]}],py:[{py:[h]}],ps:[{ps:[h]}],pe:[{pe:[h]}],pt:[{pt:[h]}],pr:[{pr:[h]}],pb:[{pb:[h]}],pl:[{pl:[h]}],m:[{m:[m]}],mx:[{mx:[m]}],my:[{my:[m]}],ms:[{ms:[m]}],me:[{me:[m]}],mt:[{mt:[m]}],mr:[{mr:[m]}],mb:[{mb:[m]}],ml:[{ml:[m]}],"space-x":[{"space-x":[T]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[T]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",S,r]}],"min-w":[{"min-w":["min","max","fit",S,z]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[V]},V,S]}],h:[{h:[S,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",S,z]}],"max-h":[{"max-h":[S,r,"min","max","fit"]}],"font-size":[{text:["base",V,C]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",O]}],"font-family":[{font:[I]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",S]}],"line-clamp":[{"line-clamp":["none",N,O]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",S,z]}],"list-image":[{"list-image":["none",S]}],"list-style-type":[{list:["none","disc","decimal",S]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[v]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[v]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(D(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",z]}],"underline-offset":[{"underline-offset":["auto",S,z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",S]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",S]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[v]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(X(),[M])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",A]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},G]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[v]}],"border-style":[{border:[].concat(D(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[v]}],"divide-style":[{divide:D()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(D())}],"outline-offset":[{"outline-offset":[S,z]}],"outline-w":[{outline:[z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:B()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[v]}],"ring-offset-w":[{"ring-offset":[z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",V,E]}],"shadow-color":[{shadow:[I]}],opacity:[{opacity:[v]}],"mix-blend":[{"mix-blend":F()}],"bg-blend":[{"bg-blend":F()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",V,S]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[v]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[l]}],"border-spacing-x":[{"border-spacing-x":[l]}],"border-spacing-y":[{"border-spacing-y":[l]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",S]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",S]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",S]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[P,S]}],"translate-x":[{"translate-x":[R]}],"translate-y":[{"translate-y":[R]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",S]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",S]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":q()}],"scroll-mx":[{"scroll-mx":q()}],"scroll-my":[{"scroll-my":q()}],"scroll-ms":[{"scroll-ms":q()}],"scroll-me":[{"scroll-me":q()}],"scroll-mt":[{"scroll-mt":q()}],"scroll-mr":[{"scroll-mr":q()}],"scroll-mb":[{"scroll-mb":q()}],"scroll-ml":[{"scroll-ml":q()}],"scroll-p":[{"scroll-p":q()}],"scroll-px":[{"scroll-px":q()}],"scroll-py":[{"scroll-py":q()}],"scroll-ps":[{"scroll-ps":q()}],"scroll-pe":[{"scroll-pe":q()}],"scroll-pt":[{"scroll-pt":q()}],"scroll-pr":[{"scroll-pr":q()}],"scroll-pb":[{"scroll-pb":q()}],"scroll-pl":[{"scroll-pl":q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",S]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[z,O]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var K=m(B),X=Object.prototype.hasOwnProperty,D=new Set(["string","number","boolean"]),F={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},H=e=>e||void 0,L=(...e)=>H(s(e).filter(Boolean).join(" ")),Q=null,U={},Y=!1,Z=(...e)=>r=>r.twMerge?((!Q||Y)&&(Y=!1,Q=l(U)?K:function(e){for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return"function"==typeof e?m.apply(void 0,[B,e].concat(t)):m.apply(void 0,[function(){return function(e,r){for(var t in r)(function e(r,t,o){if(!X.call(r,t)||D.has(typeof o)||null===o){r[t]=o;return}if(Array.isArray(o)&&Array.isArray(r[t])){r[t]=r[t].concat(o);return}if("object"==typeof o&&"object"==typeof r[t]){if(null===r[t]){r[t]=o;return}for(var n in o)e(r[t],n,o[n])}})(e,t,r[t]);return e}(B(),e)}].concat(t))}(U)),H(Q(L(e)))):L(e),ee=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=L(e[t],r[t]):e[t]=r[t];return e},er=(e,r)=>{let{extend:t=null,slots:o={},variants:n={},compoundVariants:s=[],compoundSlots:f=[],defaultVariants:p={}}=e,b={...F,...r},g=null!=t&&t.base?L(t.base,null==e?void 0:e.base):null==e?void 0:e.base,m=null!=t&&t.variants&&!l(t.variants)?d(n,t.variants):n,y=null!=t&&t.defaultVariants&&!l(t.defaultVariants)?{...t.defaultVariants,...p}:p;l(b.twMergeConfig)||a(b.twMergeConfig,U)||(Y=!0,U=b.twMergeConfig);let v=l(null==t?void 0:t.slots),h=l(o)?{}:{base:L(null==e?void 0:e.base,v&&(null==t?void 0:t.base)),...o},w=v?h:ee({...null==t?void 0:t.slots},l(h)?{base:null==e?void 0:e.base}:h),x=e=>{if(l(m)&&l(o)&&v)return Z(g,null==e?void 0:e.class,null==e?void 0:e.className)(b);if(s&&!Array.isArray(s))throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof s}`);if(f&&!Array.isArray(f))throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof f}`);let r=(e,r,t=[],o)=>{let n=t;if("string"==typeof r)n=n.concat(u(r).split(" ").map(r=>`${e}:${r}`));else if(Array.isArray(r))n=n.concat(r.reduce((r,t)=>r.concat(`${e}:${t}`),[]));else if("object"==typeof r&&"string"==typeof o){for(let t in r)if(r.hasOwnProperty(t)&&t===o){let i=r[t];if(i&&"string"==typeof i){let r=u(i);n[o]?n[o]=n[o].concat(r.split(" ").map(r=>`${e}:${r}`)):n[o]=r.split(" ").map(r=>`${e}:${r}`)}else Array.isArray(i)&&i.length>0&&(n[o]=i.reduce((r,t)=>r.concat(`${e}:${t}`),[]))}}return n},n=(t,o=m,n=null,a=null)=>{var s;let c=o[t];if(!c||l(c))return null;let d=null!=(s=null==a?void 0:a[t])?s:null==e?void 0:e[t];if(null===d)return null;let u=i(d),f=Array.isArray(b.responsiveVariants)&&b.responsiveVariants.length>0||!0===b.responsiveVariants,p=null==y?void 0:y[t],g=[];if("object"==typeof u&&f)for(let[e,t]of Object.entries(u)){let o=c[t];if("initial"===e){p=t;continue}Array.isArray(b.responsiveVariants)&&!b.responsiveVariants.includes(e)||(g=r(e,o,g,n))}let v=c[u]||c[i(p)];return"object"==typeof g&&"string"==typeof n&&g[n]?ee(g,v):g.length>0?(g.push(v),g):v},a=(e,r)=>{if(!m||"object"!=typeof m)return null;let t=[];for(let o in m){let i=n(o,m,e,r),l="base"===e&&"string"==typeof i?i:i&&i[e];l&&(t[t.length]=l)}return t},d={};for(let r in e)void 0!==e[r]&&(d[r]=e[r]);let p=(r,t)=>{var o;let n="object"==typeof(null==e?void 0:e[r])?{[r]:null==(o=e[r])?void 0:o.initial}:{};return{...y,...d,...n,...t}},h=(e=[],r)=>{let t=[];for(let{class:o,className:n,...i}of e){let e=!0;for(let[t,o]of Object.entries(i)){let n=p(t,r);if(Array.isArray(o)){if(!o.includes(n[t])){e=!1;break}}else if(n[t]!==o){e=!1;break}}e&&(o&&t.push(o),n&&t.push(n))}return t},x=e=>{let r=h(s,e);return c(h(null==t?void 0:t.compoundVariants,e),r)},k=e=>{let r=x(e);if(!Array.isArray(r))return r;let t={};for(let e of r)if("string"==typeof e&&(t.base=Z(t.base,e)(b)),"object"==typeof e)for(let[r,o]of Object.entries(e))t[r]=Z(t[r],o)(b);return t},j=e=>{if(f.length<1)return null;let r={};for(let{slots:t=[],class:o,className:n,...i}of f){if(!l(i)){let r=!0;for(let t of Object.keys(i)){let o=p(t,e)[t];if(void 0===o||(Array.isArray(i[t])?!i[t].includes(o):i[t]!==o)){r=!1;break}}if(!r)continue}for(let e of t)r[e]=r[e]||[],r[e].push([o,n])}return r};if(!l(o)||!v){let e={};if("object"==typeof w&&!l(w))for(let r of Object.keys(w))e[r]=e=>{var t,o;return Z(w[r],a(r,e),(null!=(t=k(e))?t:[])[r],(null!=(o=j(e))?o:[])[r],null==e?void 0:e.class,null==e?void 0:e.className)(b)};return e}return Z(g,m?Object.keys(m).map(e=>n(e,m)):null,x(),null==e?void 0:e.class,null==e?void 0:e.className)(b)};return x.variantKeys=(()=>{if(!(!m||"object"!=typeof m))return Object.keys(m)})(),x.extend=t,x.base=g,x.slots=w,x.variants=m,x.defaultVariants=y,x.compoundSlots=f,x.compoundVariants=s,x},et=(e,r)=>{var t,o,i;return er(e,{...r,twMerge:null==(t=null==r?void 0:r.twMerge)||t,twMergeConfig:{...null==r?void 0:r.twMergeConfig,theme:{...null==(o=null==r?void 0:r.twMergeConfig)?void 0:o.theme,...n.theme},classGroups:{...null==(i=null==r?void 0:r.twMergeConfig)?void 0:i.classGroups,...n.classGroups}}})}}}]);