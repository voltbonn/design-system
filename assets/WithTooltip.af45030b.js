import{r as w,e as pt,b as z,_ as Mt,R as M,f as Bt,m as Dt,s as Pe,g as ae,h as se,w as Ht}from"./iframe.87e5e91d.js";var ft=w.exports.createContext(),dt=w.exports.createContext();function Lt(t){var e=t.children,o=w.exports.useState(null),r=o[0],n=o[1],i=w.exports.useRef(!1);w.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=w.exports.useCallback(function(a){i.current||n(a)},[]);return w.exports.createElement(ft.Provider,{value:r},w.exports.createElement(dt.Provider,{value:s},e))}var vt=function(e){return Array.isArray(e)?e[0]:e},ht=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},Me=function(e,o){if(typeof e=="function")return ht(e,o);e!=null&&(e.current=o)},Ke=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},Qe=typeof window!="undefined"&&window.document&&window.document.createElement?w.exports.useLayoutEffect:w.exports.useEffect,B="top",H="bottom",L="right",D="left",De="auto",ve=[B,H,L,D],re="start",He="end",Wt="clippingParents",gt="viewport",ie="popper",$t="reference",Ze=ve.reduce(function(t,e){return t.concat([e+"-"+re,e+"-"+He])},[]),mt=[].concat(ve,[De]).reduce(function(t,e){return t.concat([e,e+"-"+re,e+"-"+He])},[]),Nt="beforeRead",Ut="read",It="afterRead",Ft="beforeMain",Vt="main",Yt="afterMain",Xt="beforeWrite",zt="write",qt="afterWrite",Gt=[Nt,Ut,It,Ft,Vt,Yt,Xt,zt,qt];function V(t){return t?(t.nodeName||"").toLowerCase():null}function $(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ce(t){var e=$(t).Element;return t instanceof e||t instanceof Element}function W(t){var e=$(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function yt(t){if(typeof ShadowRoot=="undefined")return!1;var e=$(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Jt(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!W(i)||!V(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function Kt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,u){return l[u]="",l},{});!W(n)||!V(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var Qt={name:"applyStyles",enabled:!0,phase:"write",fn:Jt,effect:Kt,requires:["computeStyles"]};function F(t){return t.split("-")[0]}function oe(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function Le(t){var e=oe(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function bt(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&yt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function q(t){return $(t).getComputedStyle(t)}function Zt(t){return["table","td","th"].indexOf(V(t))>=0}function Q(t){return((ce(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ee(t){return V(t)==="html"?t:t.assignedSlot||t.parentNode||(yt(t)?t.host:null)||Q(t)}function _e(t){return!W(t)||q(t).position==="fixed"?null:t.offsetParent}function _t(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&W(t)){var r=q(t);if(r.position==="fixed")return null}for(var n=Ee(t);W(n)&&["html","body"].indexOf(V(n))<0;){var i=q(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function he(t){for(var e=$(t),o=_e(t);o&&Zt(o)&&q(o).position==="static";)o=_e(o);return o&&(V(o)==="html"||V(o)==="body"&&q(o).position==="static")?e:o||_t(t)||e}function We(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var K=Math.max,ue=Math.min,we=Math.round;function xe(t,e,o){return K(t,ue(e,o))}function wt(){return{top:0,right:0,bottom:0,left:0}}function Ot(t){return Object.assign({},wt(),t)}function xt(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var er=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,Ot(typeof e!="number"?e:xt(e,ve))};function tr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=F(o.placement),l=We(a),u=[D,L].indexOf(a)>=0,c=u?"height":"width";if(!(!i||!s)){var v=er(n.padding,o),g=Le(i),f=l==="y"?B:D,d=l==="y"?H:L,m=o.rects.reference[c]+o.rects.reference[l]-s[l]-o.rects.popper[c],h=s[l]-o.rects.reference[l],T=he(i),O=T?l==="y"?T.clientHeight||0:T.clientWidth||0:0,y=m/2-h/2,p=v[f],x=O-g[c]-v[d],b=O/2-g[c]/2+y,R=xe(p,b,x),C=l;o.modifiersData[r]=(e={},e[C]=R,e.centerOffset=R-b,e)}}function rr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!bt(e.elements.popper,n)||(e.elements.arrow=n))}var or={name:"arrow",enabled:!0,phase:"main",fn:tr,effect:rr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},nr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ir(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:we(we(e*n)/n)||0,y:we(we(o*n)/n)||0}}function et(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.offsets,s=t.position,a=t.gpuAcceleration,l=t.adaptive,u=t.roundOffsets,c=u===!0?ir(i):typeof u=="function"?u(i):i,v=c.x,g=v===void 0?0:v,f=c.y,d=f===void 0?0:f,m=i.hasOwnProperty("x"),h=i.hasOwnProperty("y"),T=D,O=B,y=window;if(l){var p=he(o),x="clientHeight",b="clientWidth";p===$(o)&&(p=Q(o),q(p).position!=="static"&&(x="scrollHeight",b="scrollWidth")),p=p,n===B&&(O=H,d-=p[x]-r.height,d*=a?1:-1),n===D&&(T=L,g-=p[b]-r.width,g*=a?1:-1)}var R=Object.assign({position:s},l&&nr);if(a){var C;return Object.assign({},R,(C={},C[O]=h?"0":"",C[T]=m?"0":"",C.transform=(y.devicePixelRatio||1)<2?"translate("+g+"px, "+d+"px)":"translate3d("+g+"px, "+d+"px, 0)",C))}return Object.assign({},R,(e={},e[O]=h?d+"px":"",e[T]=m?g+"px":"",e.transform="",e))}function ar(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,u={placement:F(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,et(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,et(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var sr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ar,data:{}},Oe={passive:!0};function lr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=$(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",o.update,Oe)}),a&&l.addEventListener("resize",o.update,Oe),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",o.update,Oe)}),a&&l.removeEventListener("resize",o.update,Oe)}}var cr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:lr,data:{}},ur={left:"right",right:"left",bottom:"top",top:"bottom"};function Te(t){return t.replace(/left|right|bottom|top/g,function(e){return ur[e]})}var pr={start:"end",end:"start"};function tt(t){return t.replace(/start|end/g,function(e){return pr[e]})}function $e(t){var e=$(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ne(t){return oe(Q(t)).left+$e(t).scrollLeft}function fr(t){var e=$(t),o=Q(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ne(t),y:a}}function dr(t){var e,o=Q(t),r=$e(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=K(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=K(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ne(t),l=-r.scrollTop;return q(n||o).direction==="rtl"&&(a+=K(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Ue(t){var e=q(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function Tt(t){return["html","body","#document"].indexOf(V(t))>=0?t.ownerDocument.body:W(t)&&Ue(t)?t:Tt(Ee(t))}function le(t,e){var o;e===void 0&&(e=[]);var r=Tt(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=$(r),s=n?[i].concat(i.visualViewport||[],Ue(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(le(Ee(s)))}function Be(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function vr(t){var e=oe(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function rt(t,e){return e===gt?Be(fr(t)):W(e)?vr(e):Be(dr(Q(t)))}function hr(t){var e=le(Ee(t)),o=["absolute","fixed"].indexOf(q(t).position)>=0,r=o&&W(t)?he(t):t;return ce(r)?e.filter(function(n){return ce(n)&&bt(n,r)&&V(n)!=="body"}):[]}function gr(t,e,o){var r=e==="clippingParents"?hr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var u=rt(t,l);return a.top=K(u.top,a.top),a.right=ue(u.right,a.right),a.bottom=ue(u.bottom,a.bottom),a.left=K(u.left,a.left),a},rt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function pe(t){return t.split("-")[1]}function Rt(t){var e=t.reference,o=t.element,r=t.placement,n=r?F(r):null,i=r?pe(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case B:l={x:s,y:e.y-o.height};break;case H:l={x:s,y:e.y+e.height};break;case L:l={x:e.x+e.width,y:a};break;case D:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var u=n?We(n):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case re:l[u]=l[u]-(e[c]/2-o[c]/2);break;case He:l[u]=l[u]+(e[c]/2-o[c]/2);break}}return l}function fe(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?Wt:i,a=o.rootBoundary,l=a===void 0?gt:a,u=o.elementContext,c=u===void 0?ie:u,v=o.altBoundary,g=v===void 0?!1:v,f=o.padding,d=f===void 0?0:f,m=Ot(typeof d!="number"?d:xt(d,ve)),h=c===ie?$t:ie,T=t.elements.reference,O=t.rects.popper,y=t.elements[g?h:c],p=gr(ce(y)?y:y.contextElement||Q(t.elements.popper),s,l),x=oe(T),b=Rt({reference:x,element:O,strategy:"absolute",placement:n}),R=Be(Object.assign({},O,b)),C=c===ie?R:x,E={top:p.top-C.top+m.top,bottom:C.bottom-p.bottom+m.bottom,left:p.left-C.left+m.left,right:C.right-p.right+m.right},S=t.modifiersData.offset;if(c===ie&&S){var k=S[n];Object.keys(E).forEach(function(A){var P=[L,H].indexOf(A)>=0?1:-1,N=[B,H].indexOf(A)>=0?"y":"x";E[A]+=k[N]*P})}return E}function mr(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,u=l===void 0?mt:l,c=pe(r),v=c?a?Ze:Ze.filter(function(d){return pe(d)===c}):ve,g=v.filter(function(d){return u.indexOf(d)>=0});g.length===0&&(g=v);var f=g.reduce(function(d,m){return d[m]=fe(t,{placement:m,boundary:n,rootBoundary:i,padding:s})[F(m)],d},{});return Object.keys(f).sort(function(d,m){return f[d]-f[m]})}function yr(t){if(F(t)===De)return[];var e=Te(t);return[tt(t),e,tt(e)]}function br(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,u=o.padding,c=o.boundary,v=o.rootBoundary,g=o.altBoundary,f=o.flipVariations,d=f===void 0?!0:f,m=o.allowedAutoPlacements,h=e.options.placement,T=F(h),O=T===h,y=l||(O||!d?[Te(h)]:yr(h)),p=[h].concat(y).reduce(function(Z,U){return Z.concat(F(U)===De?mr(e,{placement:U,boundary:c,rootBoundary:v,padding:u,flipVariations:d,allowedAutoPlacements:m}):U)},[]),x=e.rects.reference,b=e.rects.popper,R=new Map,C=!0,E=p[0],S=0;S<p.length;S++){var k=p[S],A=F(k),P=pe(k)===re,N=[B,H].indexOf(A)>=0,G=N?"width":"height",Y=fe(e,{placement:k,boundary:c,rootBoundary:v,altBoundary:g,padding:u}),X=N?P?L:D:P?H:B;x[G]>b[G]&&(X=Te(X));var ne=Te(X),_=[];if(i&&_.push(Y[A]<=0),a&&_.push(Y[X]<=0,Y[ne]<=0),_.every(function(Z){return Z})){E=k,C=!1;break}R.set(k,_)}if(C)for(var ge=d?3:1,Se=function(U){var ye=p.find(function(ke){var te=R.get(ke);if(te)return te.slice(0,U).every(function(Ae){return Ae})});if(ye)return E=ye,"break"},ee=ge;ee>0;ee--){var me=Se(ee);if(me==="break")break}e.placement!==E&&(e.modifiersData[r]._skip=!0,e.placement=E,e.reset=!0)}}var wr={name:"flip",enabled:!0,phase:"main",fn:br,requiresIfExists:["offset"],data:{_skip:!1}};function ot(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function nt(t){return[B,L,H,D].some(function(e){return t[e]>=0})}function Or(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=fe(e,{elementContext:"reference"}),a=fe(e,{altBoundary:!0}),l=ot(s,r),u=ot(a,n,i),c=nt(l),v=nt(u);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:v},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":v})}var xr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Or};function Tr(t,e,o){var r=F(t),n=[D,B].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[D,L].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Rr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=mt.reduce(function(c,v){return c[v]=Tr(v,e.rects,i),c},{}),a=s[e.placement],l=a.x,u=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=u),e.modifiersData[r]=s}var Cr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Rr};function Pr(t){var e=t.state,o=t.name;e.modifiersData[o]=Rt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Sr(t){return t==="x"?"y":"x"}function kr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,u=o.rootBoundary,c=o.altBoundary,v=o.padding,g=o.tether,f=g===void 0?!0:g,d=o.tetherOffset,m=d===void 0?0:d,h=fe(e,{boundary:l,rootBoundary:u,padding:v,altBoundary:c}),T=F(e.placement),O=pe(e.placement),y=!O,p=We(T),x=Sr(p),b=e.modifiersData.popperOffsets,R=e.rects.reference,C=e.rects.popper,E=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,S={x:0,y:0};if(!!b){if(i||a){var k=p==="y"?B:D,A=p==="y"?H:L,P=p==="y"?"height":"width",N=b[p],G=b[p]+h[k],Y=b[p]-h[A],X=f?-C[P]/2:0,ne=O===re?R[P]:C[P],_=O===re?-C[P]:-R[P],ge=e.elements.arrow,Se=f&&ge?Le(ge):{width:0,height:0},ee=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:wt(),me=ee[k],Z=ee[A],U=xe(0,R[P],Se[P]),ye=y?R[P]/2-X-U-me-E:ne-U-me-E,ke=y?-R[P]/2+X+U+Z+E:_+U+Z+E,te=e.elements.arrow&&he(e.elements.arrow),Ae=te?p==="y"?te.clientTop||0:te.clientLeft||0:0,Ve=e.modifiersData.offset?e.modifiersData.offset[e.placement][p]:0,Ye=b[p]+ye-Ve-Ae,Xe=b[p]+ke-Ve;if(i){var ze=xe(f?ue(G,Ye):G,N,f?K(Y,Xe):Y);b[p]=ze,S[p]=ze-N}if(a){var At=p==="x"?B:D,jt=p==="x"?H:L,be=b[x],qe=be+h[At],Ge=be-h[jt],Je=xe(f?ue(qe,Ye):qe,be,f?K(Ge,Xe):Ge);b[x]=Je,S[x]=Je-be}}e.modifiersData[r]=S}}var Ar={name:"preventOverflow",enabled:!0,phase:"main",fn:kr,requiresIfExists:["offset"]};function jr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Mr(t){return t===$(t)||!W(t)?$e(t):jr(t)}function Br(t,e,o){o===void 0&&(o=!1);var r=Q(e),n=oe(t),i=W(e),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!o)&&((V(e)!=="body"||Ue(r))&&(s=Mr(e)),W(e)?(a=oe(e),a.x+=e.clientLeft,a.y+=e.clientTop):r&&(a.x=Ne(r))),{x:n.left+s.scrollLeft-a.x,y:n.top+s.scrollTop-a.y,width:n.width,height:n.height}}function Dr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function Hr(t){var e=Dr(t);return Gt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function Lr(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Wr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var it={placement:"bottom",modifiers:[],strategy:"absolute"};function at(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function $r(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?it:n;return function(a,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},it,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},v=[],g=!1,f={state:c,setOptions:function(T){m(),c.options=Object.assign({},i,c.options,T),c.scrollParents={reference:ce(a)?le(a):a.contextElement?le(a.contextElement):[],popper:le(l)};var O=Hr(Wr([].concat(r,c.options.modifiers)));return c.orderedModifiers=O.filter(function(y){return y.enabled}),d(),f.update()},forceUpdate:function(){if(!g){var T=c.elements,O=T.reference,y=T.popper;if(!!at(O,y)){c.rects={reference:Br(O,he(y),c.options.strategy==="fixed"),popper:Le(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(S){return c.modifiersData[S.name]=Object.assign({},S.data)});for(var p=0;p<c.orderedModifiers.length;p++){if(c.reset===!0){c.reset=!1,p=-1;continue}var x=c.orderedModifiers[p],b=x.fn,R=x.options,C=R===void 0?{}:R,E=x.name;typeof b=="function"&&(c=b({state:c,options:C,name:E,instance:f})||c)}}}},update:Lr(function(){return new Promise(function(h){f.forceUpdate(),h(c)})}),destroy:function(){m(),g=!0}};if(!at(a,l))return f;f.setOptions(u).then(function(h){!g&&u.onFirstUpdate&&u.onFirstUpdate(h)});function d(){c.orderedModifiers.forEach(function(h){var T=h.name,O=h.options,y=O===void 0?{}:O,p=h.effect;if(typeof p=="function"){var x=p({state:c,name:T,instance:f,options:y}),b=function(){};v.push(x||b)}})}function m(){v.forEach(function(h){return h()}),v=[]}return f}}var Nr=[cr,Er,sr,Qt,Cr,wr,Ar,or,xr],Ur=$r({defaultModifiers:Nr}),Ir=typeof Element!="undefined",Fr=typeof Map=="function",Vr=typeof Set=="function",Yr=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Re(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Re(t[r],e[r]))return!1;return!0}var i;if(Fr&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Re(r.value[1],e.get(r.value[0])))return!1;return!0}if(Vr&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(Yr&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(Ir&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Re(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var Xr=function(e,o){try{return Re(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},zr=[],qr=function(e,o,r){r===void 0&&(r={});var n=w.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||zr},s=w.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],u=w.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(f){var d=f.state,m=Object.keys(d.elements);l({styles:Ke(m.map(function(h){return[h,d.styles[h]||{}]})),attributes:Ke(m.map(function(h){return[h,d.attributes[h]]}))})},requires:["computeStyles"]}},[]),c=w.exports.useMemo(function(){var g={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[u,{name:"applyStyles",enabled:!1}])};return Xr(n.current,g)?n.current||g:(n.current=g,g)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,u]),v=w.exports.useRef();return Qe(function(){v.current&&v.current.setOptions(c)},[c]),Qe(function(){if(!(e==null||o==null)){var g=r.createPopper||Ur,f=g(e,o,c);return v.current=f,function(){f.destroy(),v.current=null}}},[e,o,r.createPopper]),{state:v.current?v.current.state:null,styles:a.styles,attributes:a.attributes,update:v.current?v.current.update:null,forceUpdate:v.current?v.current.forceUpdate:null}},Gr=function(){},Jr=function(){return Promise.resolve(null)},Kr=[];function Qr(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?Kr:i,a=t.referenceElement,l=t.onFirstUpdate,u=t.innerRef,c=t.children,v=w.exports.useContext(ft),g=w.exports.useState(null),f=g[0],d=g[1],m=w.exports.useState(null),h=m[0],T=m[1];w.exports.useEffect(function(){Me(u,f)},[u,f]);var O=w.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:h!=null,options:{element:h}}])}},[o,n,l,s,h]),y=qr(a||v,f,O),p=y.state,x=y.styles,b=y.forceUpdate,R=y.update,C=w.exports.useMemo(function(){return{ref:d,style:x.popper,placement:p?p.placement:o,hasPopperEscaped:p&&p.modifiersData.hide?p.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:p&&p.modifiersData.hide?p.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:x.arrow,ref:T},forceUpdate:b||Gr,update:R||Jr}},[d,T,o,p,x,R,b]);return vt(c)(C)}function Zr(t){var e=t.children,o=t.innerRef,r=w.exports.useContext(dt),n=w.exports.useCallback(function(i){Me(o,i),ht(r,i)},[o,r]);return w.exports.useEffect(function(){return function(){return Me(o,null)}}),w.exports.useEffect(function(){},[r]),vt(e)({ref:n})}var Ct=M.createContext({}),I=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},_r=function(){},st=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},eo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Pt=function(t){pt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,u=r.props,c=u.hideTooltip,v=u.clearScheduled;v(),c(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,u=r.props,c=u.hideTooltip,v=u.clearScheduled;v(),c(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,eo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),z({},a,{style:z({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),z({},a,r.isTriggeredBy("hover")&&{onMouseEnter:I(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:I(r.props.hideTooltip,a.onMouseLeave)},{style:z({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return M.createElement(Ct.Provider,{value:this.contextValue},a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(w.exports.Component);Pt.contextType=Ct;var to={childList:!0,subtree:!0},Et=function(t){pt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,u=a.pageY;r.clearScheduled();var c={tooltipShown:!0};r.props.followCursor&&(c=z({},c,{pageX:l,pageY:u})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(c)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,u=a.pageY,c=r.getState()?"hideTooltip":"showTooltip";r[c]({pageX:l,pageY:u})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,u=a.pageY,c=r.props.followCursor?"showTooltip":"toggleTooltip";r[c]({pageX:l,pageY:u})},r.getTriggerProps=function(a){return a===void 0&&(a={}),z({},a,r.isTriggeredBy("click")&&{onClick:I(r.clickToggle,a.onClick),onTouchEnd:I(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:I(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&z({onMouseEnter:I(r.showTooltip,a.onMouseEnter),onMouseLeave:I(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:I(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:I(r.showTooltip,a.onFocus),onBlur:I(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,u=i.trigger,c=i.getTriggerRef,v=i.modifiers,g=i.closeOnReferenceHidden,f=i.usePortal,d=i.portalContainer,m=i.followCursor,h=i.getTooltipRef,T=i.mutationObserverOptions,O=Mt(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=M.createElement(Qr,z({innerRef:h,placement:l,modifiers:[{name:"followCursor",enabled:m,phase:"main",fn:function(x){n.popperOffset=x.state.rects.popper}}].concat(v)},O),function(p){var x=p.ref,b=p.style,R=p.placement,C=p.arrowProps,E=p.isReferenceHidden,S=p.update;if(m&&n.popperOffset){var k=n.state,A=k.pageX,P=k.pageY,N=n.popperOffset,G=N.width,Y=N.height,X=A+G>window.pageXOffset+document.body.offsetWidth?A-G:A,ne=P+Y>window.pageYOffset+document.body.offsetHeight?P-Y:P;b.transform="translate3d("+X+"px, "+ne+"px, 0"}return M.createElement(Pt,z({arrowProps:C,closeOnReferenceHidden:g,isReferenceHidden:E,placement:R,update:S,style:b,tooltip:a,trigger:u,mutationObserverOptions:T},{clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:x}))});return M.createElement(Lt,null,M.createElement(Zr,{innerRef:c},function(p){var x=p.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:x})}),this.getState()&&(f?Bt.exports.createPortal(y,d):y))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(w.exports.Component);Et.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:_r,placement:"right",portalContainer:st()?document.body:null,trigger:"hover",usePortal:st(),mutationObserverOptions:to,modifiers:[]};var ro=Et;function Ce(){return Ce=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Ce.apply(this,arguments)}function oo(t,e){if(t==null)return{};var o=no(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function no(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var j=Dt(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),J=8,io=Pe.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(j("top",r,J*-1,"auto"),"px"),top:"".concat(j("bottom",r,J*-1,"auto"),"px"),right:"".concat(j("left",r,J*-1,"auto"),"px"),left:"".concat(j("right",r,J*-1,"auto"),"px"),borderBottomWidth:"".concat(j("top",r,"0",J),"px"),borderTopWidth:"".concat(j("bottom",r,"0",J),"px"),borderRightWidth:"".concat(j("left",r,"0",J),"px"),borderLeftWidth:"".concat(j("right",r,"0",J),"px"),borderTopColor:j("top",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderBottomColor:j("bottom",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderLeftColor:j("left",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent"),borderRightColor:j("right",r,e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),"transparent")}}),ao=Pe.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?ae(e.background.app):se(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Ie=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,u=oo(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return M.createElement(ao,Ce({hasChrome:r,placement:o,ref:s},u,{color:l}),r&&M.createElement(io,Ce({placement:o,ref:a},i,{color:l})),n)};Ie.displayName="Tooltip";Ie.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var lt,ct;function so(t,e){return po(t)||uo(t,e)||co(t,e)||lo()}function lo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function co(t,e){if(!!t){if(typeof t=="string")return ut(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ut(t,e)}}function ut(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function uo(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function po(t){if(Array.isArray(t))return t}function de(){return de=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},de.apply(this,arguments)}function St(t,e){if(t==null)return{};var o=fo(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function fo(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function kt(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var je=Ht.document,vo=Pe.div(lt||(lt=kt([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),ho=Pe.g(ct||(ct=kt([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Fe=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,u=e.tooltipShown,c=e.onVisibilityChange,v=St(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),g=o?ho:vo;return M.createElement(ro,{placement:n,trigger:r,modifiers:i,tooltipShown:u,onVisibilityChange:c,tooltip:function(d){var m=d.getTooltipProps,h=d.getArrowProps,T=d.tooltipRef,O=d.arrowRef,y=d.placement;return M.createElement(Ie,de({hasChrome:s,placement:y,tooltipRef:T,arrowRef:O,arrowProps:h()},m()),typeof a=="function"?a({onHide:function(){return c(!1)}}):a)}},function(f){var d=f.getTriggerProps,m=f.triggerRef;return M.createElement(g,de({ref:m},d(),v),l)})};Fe.displayName="WithTooltipPure";Fe.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var go=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=St(e,["startOpen","onVisibilityChange"]),i=w.exports.useState(o||!1),s=so(i,2),a=s[0],l=s[1],u=w.exports.useCallback(function(c){r&&r(c)===!1||l(c)},[r]);return w.exports.useEffect(function(){var c=function(){return u(!1)};je.addEventListener("keydown",c,!1);var v=Array.from(je.getElementsByTagName("iframe")),g=[];return v.forEach(function(f){var d=function(){try{f.contentWindow.document&&(f.contentWindow.document.addEventListener("click",c),g.push(function(){try{f.contentWindow.document.removeEventListener("click",c)}catch{}}))}catch{}};d(),f.addEventListener("load",d),g.push(function(){f.removeEventListener("load",d)})}),function(){je.removeEventListener("keydown",c),g.forEach(function(f){f()})}}),M.createElement(Fe,de({},n,{tooltipShown:a,onVisibilityChange:u}))};go.displayName="WithToolTipState";export{go as WithToolTipState,go as WithTooltip,Fe as WithTooltipPure};
//# sourceMappingURL=WithTooltip.af45030b.js.map
