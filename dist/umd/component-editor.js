!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ArticulateComponentEditor=t()}(this,(function(){"use strict";var e,t,n,o,i,l,r={},s=[],a=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function u(e,t,n){var o,i,l,r=arguments,s={};for(l in t)"key"==l?o=t[l]:"ref"==l?i=t[l]:s[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(r[l]);if(null!=n&&(s.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===s[l]&&(s[l]=e.defaultProps[l]);return f(e,s,o,i,null)}function f(t,n,o,i,l){var r={type:t,props:n,key:o,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++e.__v:l};return null!=e.vnode&&e.vnode(r),r}function h(e){return e.children}function d(e,t){this.props=e,this.context=t}function g(e,t){if(null==t)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?g(e):null}function m(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return m(e)}}function _(i){(!i.__d&&(i.__d=!0)&&t.push(i)&&!v.__r++||o!==e.debounceRendering)&&((o=e.debounceRendering)||n)(v)}function v(){for(var e;v.__r=t.length;)e=t.sort((function(e,t){return e.__v.__b-t.__v.__b})),t=[],e.some((function(e){var t,n,o,i,l,r,s;e.__d&&(r=(l=(t=e).__v).__e,(s=t.__P)&&(n=[],(o=p({},l)).__v=l.__v+1,i=S(s,l,o,t.__n,void 0!==s.ownerSVGElement,null!=l.__h?[r]:null,n,null==r?g(l):r,l.__h),P(n,l),i!=r&&m(l)))}))}function y(e,t,n,o,i,l,a,p,u,d){var m,_,v,y,x,w,k,j=o&&o.__k||s,C=j.length;for(u==r&&(u=null!=a?a[0]:C?g(o,0):null),n.__k=[],m=0;m<t.length;m++)if(null!=(y=n.__k[m]=null==(y=t[m])||"boolean"==typeof y?null:"string"==typeof y||"number"==typeof y?f(null,y,null,null,y):Array.isArray(y)?f(h,{children:y},null,null,null):null!=y.__e||null!=y.__c?f(y.type,y.props,y.key,null,y.__v):y)){if(y.__=n,y.__b=n.__b+1,null===(v=j[m])||v&&y.key==v.key&&y.type===v.type)j[m]=void 0;else for(_=0;_<C;_++){if((v=j[_])&&y.key==v.key&&y.type===v.type){j[_]=void 0;break}v=null}x=S(e,y,v=v||r,i,l,a,p,u,d),(_=y.ref)&&v.ref!=_&&(k||(k=[]),v.ref&&k.push(v.ref,null,y),k.push(_,y.__c||x,y)),null!=x?(null==w&&(w=x),u=b(e,y,v,j,a,x,u),d||"option"!=n.type?"function"==typeof n.type&&(n.__d=u):e.value=""):u&&v.__e==u&&u.parentNode!=e&&(u=g(v))}if(n.__e=w,null!=a&&"function"!=typeof n.type)for(m=a.length;m--;)null!=a[m]&&c(a[m]);for(m=C;m--;)null!=j[m]&&L(j[m],j[m]);if(k)for(m=0;m<k.length;m++)M(k[m],k[++m],k[++m])}function b(e,t,n,o,i,l,r){var s,a,p;if(void 0!==t.__d)s=t.__d,t.__d=void 0;else if(i==n||l!=r||null==l.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(l),s=null;else{for(a=r,p=0;(a=a.nextSibling)&&p<o.length;p+=2)if(a==l)break e;e.insertBefore(l,r),s=r}return void 0!==s?s:l.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||a.test(t)?n:n+"px"}function w(e,t,n,o,i){var l,r,s;if(i&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||x(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||x(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),(r=t.toLowerCase())in e&&(t=r),t=t.slice(2),e.l||(e.l={}),e.l[t+l]=n,s=l?j:k,n?o||e.addEventListener(t,s,l):e.removeEventListener(t,s,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!i&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function k(t){this.l[t.type+!1](e.event?e.event(t):t)}function j(t){this.l[t.type+!0](e.event?e.event(t):t)}function C(e,t,n){var o,i;for(o=0;o<e.__k.length;o++)(i=e.__k[o])&&(i.__=e,i.__e&&("function"==typeof i.type&&i.__k.length>1&&C(i,t,n),t=b(n,i,i,e.__k,null,i.__e,t),"function"==typeof e.type&&(e.__d=t)))}function S(t,n,o,i,l,r,s,a,c){var u,f,g,m,_,v,b,x,w,k,j,S=n.type;if(void 0!==n.constructor)return null;null!=o.__h&&(c=o.__h,a=n.__e=o.__e,n.__h=null,r=[a]),(u=e.__b)&&u(n);try{e:if("function"==typeof S){if(x=n.props,w=(u=S.contextType)&&i[u.__c],k=u?w?w.props.value:u.__:i,o.__c?b=(f=n.__c=o.__c).__=f.__E:("prototype"in S&&S.prototype.render?n.__c=f=new S(x,k):(n.__c=f=new d(x,k),f.constructor=S,f.render=A),w&&w.sub(f),f.props=x,f.state||(f.state={}),f.context=k,f.__n=i,g=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,S.getDerivedStateFromProps(x,f.__s))),m=f.props,_=f.state,g)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&x!==m&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(x,k),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(x,f.__s,k)||n.__v===o.__v){f.props=x,f.state=f.__s,n.__v!==o.__v&&(f.__d=!1),f.__v=n,n.__e=o.__e,n.__k=o.__k,f.__h.length&&s.push(f),C(n,a,t);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(x,f.__s,k),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(m,_,v)}))}f.context=k,f.props=x,f.state=f.__s,(u=e.__r)&&u(n),f.__d=!1,f.__v=n,f.__P=t,u=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(i=p(p({},i),f.getChildContext())),g||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(m,_)),j=null!=u&&u.type==h&&null==u.key?u.props.children:u,y(t,Array.isArray(j)?j:[j],n,o,i,l,r,s,a,c),f.base=n.__e,n.__h=null,f.__h.length&&s.push(f),b&&(f.__E=f.__=null),f.__e=!1}else null==r&&n.__v===o.__v?(n.__k=o.__k,n.__e=o.__e):n.__e=T(o.__e,n,o,i,l,r,s,c);(u=e.diffed)&&u(n)}catch(t){n.__v=null,(c||null!=r)&&(n.__e=a,n.__h=!!c,r[r.indexOf(a)]=null),e.__e(t,n,o)}return n.__e}function P(t,n){e.__c&&e.__c(n,t),t.some((function(n){try{t=n.__h,n.__h=[],t.some((function(e){e.call(n)}))}catch(t){e.__e(t,n.__v)}}))}function T(e,t,n,o,i,l,a,p){var c,u,f,h,d,g=n.props,m=t.props;if(i="svg"===t.type||i,null!=l)for(c=0;c<l.length;c++)if(null!=(u=l[c])&&((null===t.type?3===u.nodeType:u.localName===t.type)||e==u)){e=u,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=i?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),l=null,p=!1}if(null===t.type)g===m||p&&e.data===m||(e.data=m);else{if(null!=l&&(l=s.slice.call(e.childNodes)),f=(g=n.props||r).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!p){if(null!=l)for(g={},d=0;d<e.attributes.length;d++)g[e.attributes[d].name]=e.attributes[d].value;(h||f)&&(h&&(f&&h.__html==f.__html||h.__html===e.innerHTML)||(e.innerHTML=h&&h.__html||""))}(function(e,t,n,o,i){var l;for(l in n)"children"===l||"key"===l||l in t||w(e,l,null,n[l],o);for(l in t)i&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||w(e,l,t[l],n[l],o)})(e,m,g,i,p),h?t.__k=[]:(c=t.props.children,y(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&i,l,a,r,p)),p||("value"in m&&void 0!==(c=m.value)&&(c!==e.value||"progress"===t.type&&!c)&&w(e,"value",c,g.value,!1),"checked"in m&&void 0!==(c=m.checked)&&c!==e.checked&&w(e,"checked",c,g.checked,!1))}return e}function M(t,n,o){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,o)}}function L(t,n,o){var i,l,r;if(e.unmount&&e.unmount(t),(i=t.ref)&&(i.current&&i.current!==t.__e||M(i,null,n)),o||"function"==typeof t.type||(o=null!=(l=t.__e)),t.__e=t.__d=void 0,null!=(i=t.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(t){e.__e(t,n)}i.base=i.__P=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&L(i[r],n,o);null!=l&&c(l)}function A(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,o,i,l=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),i=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),i=n.__d),i)return t.__h=l,n.__E=n}catch(t){e=t}throw e},__v:0},d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),_(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),_(this))},d.prototype.render=h,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,v.__r=0,i=r,l=0;var N,B,H,O=0,E=[],W=e.__b,I=e.__r,D=e.diffed,z=e.__c,$=e.unmount;function F(t,n){e.__h&&e.__h(B,t,O||n),O=0;var o=B.__H||(B.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function U(e){return O=1,function(e,t,n){var o=F(N++,2);return o.t=e,o.__c||(o.__=[n?n(t):X(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=B),o.__}(X,e)}function q(t,n){var o=F(N++,3);!e.__s&&J(o.__H,n)&&(o.__=t,o.__H=n,B.__H.__h.push(o))}function G(e,t){var n=F(N++,7);return J(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function R(){E.forEach((function(t){if(t.__P)try{t.__H.__h.forEach(K),t.__H.__h.forEach(V),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}})),E=[]}e.__b=function(e){B=null,W&&W(e)},e.__r=function(e){I&&I(e),N=0;var t=(B=e.__c).__H;t&&(t.__h.forEach(K),t.__h.forEach(V),t.__h=[])},e.diffed=function(t){D&&D(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==E.push(n)&&H===e.requestAnimationFrame||((H=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),Y&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);Y&&(t=requestAnimationFrame(n))})(R)),B=void 0},e.__c=function(t,n){n.some((function(t){try{t.__h.forEach(K),t.__h=t.__h.filter((function(e){return!e.__||V(e)}))}catch(o){n.some((function(e){e.__h&&(e.__h=[])})),n=[],e.__e(o,t.__v)}})),z&&z(t,n)},e.unmount=function(t){$&&$(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(K)}catch(t){e.__e(t,n.__v)}};var Y="function"==typeof requestAnimationFrame;function K(e){var t=B;"function"==typeof e.__c&&e.__c(),B=t}function V(e){var t=B;e.__c=e.__(),B=t}function J(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function X(e,t){return"function"==typeof t?t(e):t}const Q=function(e,t){var n={__c:t="__cC"+l++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,o){return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(_)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}();function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const ee=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;function te({field:e,matchPattern:t=/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/,matchError:n="Invalid URL",onChange:o=(e=>{})}){const{label:i,placeholder:l,value:r,optional:s}=e,[a,p]=U(null),[c,f]=U(null);function h(e){if("youtube"==t){const t=async function(e){return e.match(ee)}(e);return t&&t[2]&&t[2].length>=11}return t.test(e)}return q((()=>{r&&f(r)}),[r]),u("div",null,u("div",{class:"relative border-2 rounded overflow-hidden"},u("input",{class:"text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2 pointer-events-none",type:"text",required:!s,value:c,placeholder:l||`Click paste to paste ${(e.label||"link").toLowerCase()}`,onChange:e=>o(e.target.value)}),u("div",{className:"z-10 absolute inset-y-0 right-0 px-2 bg-white bg-opacity-90 flex items-center"},u("button",{type:"button",class:"focus:outline-none shadow-sm border text-xs uppercase tracking-wide rounded-sm font-medium py-1 px-2 "+(c&&c.length?"bg-gray-100 border-gray-300 text-gray-600":"border-gray-200 text-gray-400"),onClick:async function(){if(p(null),c&&c.length)f(""),o("");else try{const e=await async function(){try{return await navigator.clipboard.readText()}catch(e){return console.error("Failed to read clipboard contents: ",e),p("Failed to read clipboard contents"),!1}}();h(e)?(f(e),o(e)):p(n)}catch(e){p("Unknown error occured"),console.log("Failed to paste link: ",e)}}},c&&c.length?"Clear":"Paste"))),a&&u("span",{id:"fullNameError",class:"text-sm block mt-1 ml-1 text-red-500"},a))}function ne({placeholder:e="Search for photos",searchOnChange:t,fetchLatestPhotos:n=(e=>{}),searchPhotos:o=(e=>{}),onChange:i=(e=>{})}){const[l,r]=U(""),[s,a]=U(null),[p,c]=U(null),[f,h]=U(null);async function d(){a("fetching");const e=await o(l);h(e),a("")}function g(e){r(e),t&&(console.log("New value",e),d())}return q((()=>{f&&f.length||async function(){a("fetching");const e=await n();h(e),a("")}()}),[]),u("div",{class:"relative h-full flex flex-col bg-gray-100 overflow-hidden"},u("form",{class:"relative border-2 overflow-hidden flex items-center",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),d()},autocomplete:"off"},u("input",{class:"focus:outline-none text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2",type:"text",placeholder:e,name:"q",value:l,onInput:e=>g(e.target.value),autocomplete:"off"}),l&&l.length>0&&u("button",{type:"button",class:"absolute w-5 h-5 flex items-center justify-center my-auto inset-y-0 right-2 focus:outline-none border border-gray-300 rounded-full",onClick:()=>g("")},u("svg",{class:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),u("div",{className:"flex-1 pt-3 px-3 grid grid-cols-3 gap-4 overflow-y-auto"},f&&f.map((e=>u("button",{type:"button",class:"bg-gray-100 border rounded overflow-x-hidden relative",style:`background: ${e.color}; height: 230px`,onClick:()=>i(e.full)},u("img",{loading:"lazy",class:"absolute left-0 top-0 h-full w-full object-cover",src:e.preview,alt:""}))))))}function oe({onChange:e=(e=>{})}){const t="17ef130962858e4304efe9512cf023387ee5d36f0585e4346f0f70b2f9729964";async function n(e){const t=await fetch(e);let n=await t.json();return(n.results?n.results:n).map((({color:e,description:t,urls:n,user:o})=>({color:e,description:t,preview:n.small,full:n.regular,user:o})))}return u(ne,{placeholder:"Search Unsplash",fetchLatestPhotos:function(){return n(`https://api.unsplash.com/photos?per_page=30&client_id=${t}`)},searchPhotos:function(e){return n(`https://api.unsplash.com/search/photos?query=${e}&per_page=30&client_id=${t}`)},onChange:e})}function ie({onChange:e=(e=>{})}){const t="zKN2rO1fYYKdNDIjHHmGHhmqvLN66oue";async function n(e){const t=await fetch(e);let{data:n}=await t.json();return n.map((({color:e,description:t,images:n,user:o})=>({color:e,description:t,preview:n.preview_gif.url,full:n.downsized_medium.url,user:o?o.display_name:""})))}return u(ne,{placeholder:"Search Giphy",fetchLatestPhotos:function(){return n(`https://api.giphy.com/v1/gifs/trending?limit=30&api_key=${t}`)},searchPhotos:function(e){return n(`https://api.giphy.com/v1/gifs/search?q=${e}&limit=30&api_key=${t}`)},onChange:e})}var le={"Drake Hotline Bling":["181913649","https://i.imgflip.com/30b1gx.jpg",[],2],"Distracted Boyfriend":["112126428","https://i.imgflip.com/1ur9b0.jpg",[],3],"Two Buttons":["87743020","https://i.imgflip.com/1g8my4.jpg",[],2],"Change My Mind":["129242436","https://i.imgflip.com/24y43o.jpg",[],2],"Running Away Balloon":["131087935","https://i.imgflip.com/261o3j.jpg",[],5],"Left Exit 12 Off Ramp":["124822590","https://i.imgflip.com/22bdq6.jpg",[],3],"UNO Draw 25 Cards":["217743513","https://i.imgflip.com/3lmzyx.jpg",[],2],"Batman Slapping Robin":["438680","https://i.imgflip.com/9ehk.jpg",["My parents are dead"],2],"Mocking Spongebob":["102156234","https://i.imgflip.com/1otk96.jpg",[],2],"Expanding Brain":["93895088","https://i.imgflip.com/1jwhww.jpg",[],4],"Woman Yelling At Cat":["188390779","https://i.imgflip.com/345v97.jpg",[],2],"Buff Doge vs. Cheems":["247375501","https://i.imgflip.com/43a45p.png",[],4],"Gru's Plan":["131940431","https://i.imgflip.com/26jxvz.jpg",[],4],"Monkey Puppet":["148909805","https://i.imgflip.com/2gnnjh.jpg",[],2],"Always Has Been":["252600902","https://i.imgflip.com/46e43q.png",[],2],"Boardroom Meeting Suggestion":["1035805","https://i.imgflip.com/m78d.jpg",[],4],"Blank Nut Button":["119139145","https://i.imgflip.com/1yxkcp.jpg",[],2],"Panik Kalm Panik":["226297822","https://i.imgflip.com/3qqcim.png",[],3],"Bernie I Am Once Again Asking For Your Support":["222403160","https://i.imgflip.com/3oevdk.jpg",[],2],"Waiting Skeleton":["4087833","https://i.imgflip.com/2fm6x.jpg",[],2],"Disaster Girl":["97984","https://i.imgflip.com/23ls.jpg",[],2],"Epic Handshake":["135256802","https://i.imgflip.com/28j0te.jpg",[],3],"Sad Pablo Escobar":["80707627","https://i.imgflip.com/1c1uej.jpg",[],3],"Tuxedo Winnie The Pooh":["178591752","https://i.imgflip.com/2ybua0.png",[],2],"Inhaling Seagull":["114585149","https://i.imgflip.com/1w7ygt.jpg",[],4],"Laughing Leo":["259237855","https://i.imgflip.com/4acd7j.png",[],2],"Is This A Pigeon":["100777631","https://i.imgflip.com/1o00in.jpg",[],3],"They're The Same Picture":["180190441","https://i.imgflip.com/2za3u1.jpg",[],3],"X, X Everywhere":["91538330","https://i.imgflip.com/1ihzfe.jpg",["Toy story"," Buzz lightyear"," Woody"],2],"Hide the Pain Harold":["27813981","https://i.imgflip.com/gk5el.jpg",[],2],"Surprised Pikachu":["155067746","https://i.imgflip.com/2kbn1e.jpg",[],3],"Clown Applying Makeup":["195515965","https://i.imgflip.com/38el31.jpg",[],4],"The Scroll Of Truth":["123999232","https://i.imgflip.com/21tqf4.jpg",[],2],"Roll Safe Think About It":["89370399","https://i.imgflip.com/1h7in3.jpg",[],2],"American Chopper Argument":["134797956","https://i.imgflip.com/2896ro.jpg",[],5],"This Is Fine":["55311130","https://i.imgflip.com/wxica.jpg",[],2],"One Does Not Simply":["61579","https://i.imgflip.com/1bij.jpg",["One Does Not Simply Walk Into Mordor"," Boromir"," Sean Bean"," Ned Stark"," LOTR"," Lord of the rings"," One Ring"],2],"Who Killed Hannibal":["135678846","https://i.imgflip.com/28s2gu.jpg",[],3],"Trump Bill Signing":["91545132","https://i.imgflip.com/1ii4oc.jpg",[],2],"Ancient Aliens":["101470","https://i.imgflip.com/26am.jpg",["History Channel Guy"," Giorgio A Tsoukalos"],2],"The Rock Driving":["21735","https://i.imgflip.com/grr.jpg",[],2],"Y'all Got Any More Of That":["124055727","https://i.imgflip.com/21uy0f.jpg",[],2],"Unsettled Tom":["175540452","https://i.imgflip.com/2wifvo.jpg",[],2],"Oprah You Get A":["28251713","https://i.imgflip.com/gtj5t.jpg",[],2],"Spongebob Ight Imma Head Out":["196652226","https://i.imgflip.com/392xtu.jpg",[],2],"This Is Where I'd Put My Trophy If I Had One":["3218037","https://i.imgflip.com/1wz1x.jpg",[],2],"Finding Neverland":["6235864","https://i.imgflip.com/3pnmg.jpg",[],3],"Futurama Fry":["61520","https://i.imgflip.com/1bgw.jpg",["Not Sure If"],2],"Third World Success Kid":["101287","https://i.imgflip.com/265j.jpg",["dancing tribal child"," problems"," africa"," black kid"," overcoming hardships"],2],Doge:["8072285","https://i.imgflip.com/4t0m5.jpg",[],5],"Hard To Swallow Pills":["132769734","https://i.imgflip.com/271ps6.jpg",[],2],"Grandma Finds The Internet":["61556","https://i.imgflip.com/1bhw.jpg",[],2],"Evil Kermit":["84341851","https://i.imgflip.com/1e7ql7.jpg",[],2],"Third World Skeptical Kid":["101288","https://i.imgflip.com/265k.jpg",[],2],"Star Wars Yoda":["14371066","https://i.imgflip.com/8k0sa.jpg",[],2],"Don't You Squidward":["101511","https://i.imgflip.com/26br.jpg",[],2],"Leonardo Dicaprio Cheers":["5496396","https://i.imgflip.com/39t1o.jpg",[],2],"Evil Toddler":["235589","https://i.imgflip.com/51s5.jpg",["laughing child"," white kid"," prank"," mischief"," smutty"],2],"Marked Safe From":["161865971","https://i.imgflip.com/2odckz.jpg",[],2],"The Most Interesting Man In The World":["61532","https://i.imgflip.com/1bh8.jpg",[],2],"I Bet He's Thinking About Other Women":["110163934","https://i.imgflip.com/1tl71a.jpg",[],2],"Bike Fall":["79132341","https://i.imgflip.com/1b42wl.jpg",[],3],"Guy Holding Cardboard Sign":["216951317","https://i.imgflip.com/3l60ph.jpg",[],2],"Sleeping Shaq":["99683372","https://i.imgflip.com/1nck6k.jpg",[],2],"Scared Cat":["4173692","https://i.imgflip.com/2hgfw.jpg",[],2],"Jack Sparrow Being Chased":["460541","https://i.imgflip.com/9vct.jpg",[],2],"Brace Yourselves X is Coming":["61546","https://i.imgflip.com/1bhm.jpg",[],2],"That Would Be Great":["563423","https://i.imgflip.com/c2qn.jpg",[],2],Squidward:["285870","https://i.imgflip.com/64ku.jpg",[],2],"Bad Luck Brian":["61585","https://i.imgflip.com/1bip.jpg",["Bad Luck Kyle"],2],"See Nobody Cares":["6531067","https://i.imgflip.com/3vzej.jpg",[],2],"Look At Me":["29617627","https://i.imgflip.com/hmt3v.jpg",[],2],"Imagination Spongebob":["163573","https://i.imgflip.com/3i7p.jpg",[],2],"I'll Just Wait Here":["109765","https://i.imgflip.com/2cp1.jpg",[],2],"Presidential Alert":["157978092","https://i.imgflip.com/2m20oc.jpg",[],2],"Peter Parker Cry":["53764","https://i.imgflip.com/15hg.jpg",[],4],"First World Problems":["61539","https://i.imgflip.com/1bhf.jpg",["Crying"," FWP"," White Whine"],2],"Be Like Bill":["16464531","https://i.imgflip.com/xh3me.jpg",[],4],"But That's None Of My Business":["56225174","https://i.imgflip.com/9sw43.jpg",[],2],"Grumpy Cat":["405658","https://i.imgflip.com/8p0a.jpg",["Tardar Sauce"," Tabatha Bundesen"," Felis domesticus"],2],"Say it Again, Dexter":["71428573","https://i.imgflip.com/16iyn1.jpg",[],2],"Y U No":["61527","https://i.imgflip.com/1bh3.jpg",[],2],"X All The Y":["61533","https://i.imgflip.com/1bh9.jpg",[],2],"Who Would Win?":["101910402","https://i.imgflip.com/1ooaki.jpg",[],2],"Creepy Condescending Wonka":["61582","https://i.imgflip.com/1bim.jpg",[],2],"Success Kid":["61544","https://i.imgflip.com/1bhk.jpg",["I hate sandcastles"," eating sand"],2],"Marvel Civil War 1":["922147","https://i.imgflip.com/govs4.jpg",[],2],"Laughing Men In Suits":["28034788","https://i.imgflip.com/jrj7.jpg",[],2],"Black Girl Wat":["14230520","https://i.imgflip.com/8h0c8.jpg",[],2],"Surprised Koala":["27920","https://i.imgflip.com/ljk.jpg",["animal"," tree"],2],"Uncle Sam":["89655","https://i.imgflip.com/1x6f.jpg",[],2],"Too Damn High":["61580","https://i.imgflip.com/1bik.jpg",["The Rent is"," Jimmy McMillan political slogan"],2],"Shut Up And Take My Money Fry":["176908","https://i.imgflip.com/3si4.jpg",[],2],"Well Yes, But Actually No":["170715647","https://i.imgflip.com/2tn11b.jpg",[],2],"Maury Lie Detector":["444501","https://i.imgflip.com/9iz9.jpg",[],2],"Put It Somewhere Else Patrick":["61581","https://i.imgflip.com/1bil.jpg",[],2],"Yo Dawg Heard You":["101716","https://i.imgflip.com/26hg.jpg",[],2],"Keep Calm And Carry On Red":["1202623","https://i.imgflip.com/pry7.jpg",[],2],"I'm The Captain Now":["29562797","https://i.imgflip.com/hlmst.jpg",[],2],"Dr Evil Laser":["40945639","https://i.imgflip.com/odluv.jpg",[],2]};function re({onChange:e=(e=>{})}){const[t,n]=U([]),[o,i]=U(null),[l,r]=U(!1),[s,a]=U(),p=function(e,t){return O=8,G((function(){return e}),t)}((()=>{const e=Object.keys(le);return Object.values(le).map(((t,n)=>{const[o,i,l,r]=t;return{title:e[n],template:o,color:"",preview:i,full:i,tags:l,box_count:r}}))}),[le]);return u("div",{class:"h-full"},!s&&u(ne,{placeholder:"Search Memes",fetchLatestPhotos:function(){return p()},searchPhotos:function(e){return p().filter((({title:t,tags:n})=>{const o=t.toLowerCase().indexOf(e.toLowerCase());n.length&&n.join(" ").toLowerCase().indexOf(e.toLowerCase());return-1!=o})).map((t=>{const{title:n,tags:o}=t,i=n.toLowerCase().indexOf(e.toLowerCase()),l=o.length?o.join(" ").toLowerCase().indexOf(e.toLowerCase()):-1;return{...t,titleMatch:i,tagsMatch:l}})).sort(((e,t)=>t.tagsMatch-e.tagsMatch))},searchOnChange:!0,onChange:function(e){const t=p().find((({preview:t})=>t==e));a(t)}}),s&&u("div",{class:"rounded bg-gray-100 border p-4 h-full overflow-y-auto"},!o&&u("div",{class:"h-full flex items-start"},u("div",{class:"h-full flex-1"},u("img",{class:"w-full",src:s.preview,alt:""}),u("div",{class:"h-6"}," ")),u("div",{class:"flex-shrink-0 ml-6",style:"width: 55%"},u("div",{className:"mb-4"},u("button",{type:"button",class:"bg-transparent inline-flex items-center border-none border-gray-300 text-gray-500 text-xs leading-none py-1 px-0 rounded-full hover:underline focus:outline-none",onClick:()=>a(null)},u("svg",{class:"w-4 h-4 mr-1 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})),"Change Template")),u("form",{action:"#",onSubmit:async function(e){if(e.preventDefault(),e.stopPropagation(),!t.length)return console.log("Add at least one caption");const n={template_id:s.template,username:"jestrux",password:"St@nn3r5",...Object.assign(...t.map(((e,t)=>({[`boxes[${t}][text]`]:e}))))};var o=new URL("https://api.imgflip.com/caption_image");o.search=new URLSearchParams(n),r(!0);const l=await fetch(o.toString(),{method:"POST"}),a=await l.json();r(!1),i(a.data.url)}},Array(s.box_count).fill("").map(((e,o)=>u("div",{class:"mb-5"},u("label",{class:"text-sm capitalize block"},"Text ",o+1),u("input",{class:"border-2 rounded text-lg h-10 w-full px-3 py-2",onInput:e=>function(e,o){let i=[...t];i.splice(o,1,e),n(i)}(e.target.value,o)})))),u("button",{type:"submit",class:`focus:outline-none px-5 py-1 border-2 border-red-300 uppercase text-xs tracking-wide font-semibold bg-transparent-500 text-red-500 rounded-full ${l&&"opacity-50 pointer-events-none"}`},l?"Please Wait...":"Generate Meme")),u("div",{class:"h-6"}," "))),o&&u("div",{class:"h-full flex flex-col"},u("div",{className:"-mt-1 mb-2"},u("button",{type:"button",class:"bg-transparent inline-flex items-center border-none border-gray-300 text-gray-500 text-xs leading-none py-1 px-0 rounded-full hover:underline focus:outline-none",onClick:()=>i(null)},u("svg",{class:"w-4 h-4 mr-1 text-red-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})),"Edit Meme")),u("div",{class:"-mx-4 flex-1 flex items-center justify-center overflow-hidden bg-gray-200"},u("img",{class:"max-h-full max-w-full",src:o,alt:""})),u("div",{class:"mt-4 flex justify-end"},u("button",{type:"button",class:"focus:outline-none px-6 py-1 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full",onClick:()=>e(o)},"Save")))))}function se({video:e,playing:t}){const n=function(e){return O=5,G((function(){return{current:e}}),[])}(null);return q((()=>{const e=n.current;e&&(t?e.play():(e.pause(),e.currentTime=0))}),[t]),u("video",{ref:n,class:`absolute left-0 top-0 h-full w-full object-cover ${!t&&"opacity-0"}`,src:e.preview,poster:e.poster,loop:!0,preload:"none"})}function ae({placeholder:e="Search for photos",searchOnChange:t,fetchLatestPhotos:n=(e=>{}),searchPhotos:o=(e=>{}),onChange:i=(e=>{})}){const[l,r]=U(""),[s,a]=U(null),[p,c]=U(null),[f,h]=U(null),[d,g]=U(null);async function m(){a("fetching");const e=await o(l);g(e),a("")}function _(e){r(e),t&&(console.log("New value",e),m())}return q((()=>{d&&d.length||async function(){a("fetching");const e=await n();g(e),a("")}()}),[]),u("div",{class:"relative h-full flex flex-col bg-gray-100 overflow-hidden"},u("form",{class:"relative border-2 overflow-hidden flex items-center",onSubmit:function(e){e.preventDefault(),e.stopPropagation(),g([]),m()},autocomplete:"off"},u("input",{class:"focus:outline-none text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2",type:"text",placeholder:e,name:"q",value:l,onInput:e=>_(e.target.value),autocomplete:"off"}),l&&l.length>0&&u("button",{type:"button",class:"absolute w-5 h-5 flex items-center justify-center my-auto inset-y-0 right-2 focus:outline-none border border-gray-300 rounded-full",onClick:()=>_("")},u("svg",{class:"w-3 h-3 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),u("div",{className:"flex-1 pt-3 px-3 grid grid-cols-2 gap-4 overflow-y-auto"},d&&d.map((e=>u("button",{type:"button",class:"bg-gray-100 bg-cover border rounded overflow-x-hidden relative",style:`height: 210px; background-image: url(${e.poster})`,onClick:()=>i(e.preview),onMouseLeave:()=>c(null),onMouseEnter:()=>c(e.preview)},u(se,{video:e,playing:p===e.preview}),u("svg",{class:"w-12 h-12 absolute inset-0 z-10 m-auto pointer-events-none",fill:"rgba(255, 255, 255, 0.3)",stroke:"white","stroke-width":"1",viewBox:"0 0 24 24"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"}),u("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})))))))}function pe({onChange:e=(e=>{})}){async function t(e){const t=await fetch(e,{headers:{Authorization:"563492ad6f9170000100000138f386b4ea5d44d78b3af53566e21d70"}});return(await t.json()).videos.map((({url:e,video_files:t,video_pictures:n,user:o})=>({poster:n[0].picture,preview:t[0].link,full:e,user:o})))}return u(ae,{placeholder:"Search Pexels",fetchLatestPhotos:function(){return t("https://api.pexels.com/videos/popular?per_page=30")},searchPhotos:function(e){return t(`https://api.pexels.com/videos/search?query=${e}&per_page=30`)},onChange:e})}function ce(e){var t=e.match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return t&&t[2]?`https://www.youtube.com/embed/${t[2]}?rel=0&showinfo=0&enablejsapi=1`:null}var ue={link:te,image:function({field:e,onChange:t=(e=>{})}){const{label:n,value:o,optional:i}=e,[l,r]=U(null),[s,a]=U("unsplash");function p(e){t(e),r(e)}function c(e){return s!==e?"hover:text-gray-500":"bg-white shadow-sm border-gray-200 text-red-600 pointer-events-none"}return q((()=>{o&&r(o)}),[o]),u("div",{class:"-mt-3 -mb-6",style:"width: 650px"},u("div",{className:"z-10 relative bg-gray-100 bg-opacity-70 -mx-4 py-2 px-4 flex items-center"},u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("unsplash")}`,onClick:()=>{r(""),a("unsplash")}},"Unsplash"),u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-3 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("giphy")}`,onClick:()=>a("giphy")},"Giphy"),u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("meme")}`,onClick:()=>a("meme")},"Generate Meme"),u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("link")}`,onClick:()=>a("link")},"Paste Link")),u("div",{class:"bg-gray overflow-hidden -mx-4",style:"height: 380px"},"link"==s&&u("div",{class:"h-full flex flex-col"},u(te,{field:e,onChange:p}),u("div",{class:"flex-1 overflow-y-auto relative bg-gray-100 rounded mt-3 mb-1 flex justify-center"},l&&l.length&&u("img",{class:"absolute inset-0 m-auto h-full object-contain",src:l,alt:""}))),"unsplash"==s&&u(oe,{onChange:p}),"giphy"==s&&u(ie,{onChange:p}),"meme"==s&&u(re,{onChange:p})))},video:function({field:e,onChange:t=(e=>{})}){const{label:n,value:o,optional:i}=e,[l,r]=U(null),[s,a]=U("pexels");function p(e){t(e),r(e)}function c(e){return s!==e?"hover:text-gray-500":"bg-white shadow-sm border-gray-200 text-red-600 pointer-events-none"}return q((()=>{o&&r(o)}),[o]),u("div",{class:"-mt-3 -mb-6",style:"width: 650px"},u("div",{className:"z-10 relative bg-gray-100 bg-opacity-70 -mx-4 py-2 px-4 flex items-center"},u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("pexels")}`,onClick:()=>{r(""),a("pexels")}},"Pexel"),u("button",{type:"button",class:`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${c("link")}`,onClick:()=>a("link")},"Youtube")),u("div",{class:"bg-gray overflow-hidden -mx-4",style:"height: 380px"},"link"==s&&u("div",{class:"h-full flex flex-col"},u(te,{field:{...e,value:ce(e.value)?e.value:""},onChange:p,placeholder:"Click paste to paste youtube link","match-pattern":"youtube","match-error":"Invalid youtube link"}),u("div",{class:"flex-1 overflow-y-auto relative"},u("div",{class:"relative bg-gray-200 shadow rounded overflow-hidden mt-5 mx-12",style:"height: 290px"},l&&l.length&&u("iframe",{class:"absolute w-full h-full",src:ce(l),frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),"pexels"==s&&u(pe,{onChange:p})))}};function fe({field:e,onChange:t}){let{name:n,label:o,choices:i,defaultValue:l,value:r,type:s,...a}=e;return void 0===r&&l&&(r=l),u("div",{class:"mt-1"},u("div",{class:"flex items-center text-md text-gray-700 space-x-3"},i.map((n=>{const o=n==r,i=(1e32*Math.random()).toString(36);return e.renderChoice?u("label",{class:"cursor-pointer"},u("input",{class:"hidden",type:"radio",name:i,checked:o,value:n,onChange:t}),u("span",{innerHTML:e.renderChoice(n,o)})):function(e,n,o){return u("label",{class:"cursor-pointer text-sm inline-flex items-center rounded px-3 py-1 border-2 mb-2 "+(n?"bg-gray-200 border-gray-400":"border-gray-300")},u("input",{class:"-ml-1 mr-2",type:"radio",name:o,checked:n,value:e,onChange:t}),e)}(n,o,i)}))))}function he({field:e,nolabel:t,onChange:n}){const{name:o,label:i,choices:l,defaultValue:r,value:s,type:a,...p}=e;function c(e){let t=e.target.value;"boolean"==a&&(t=e.target.checked),n(t)}return u("div",{class:""},!t&&u("label",{class:"capitalize block"},i||o),function(){const t=ue[`${e.type}`];if(t)return u(t,{field:e,onChange:n});switch(e.type){case"choice":return u("div",{className:"relative"},u("select",Z({required:!e.optional,class:"border-2 rounded text-lg leading-none h-10 w-full px-3 py-2",style:"appearance: none",defaultValue:e.value,value:e.value,onInput:c},p),u("option",{disabled:!0,value:""},"Choose ",e.name),e.choices.map((e=>u("option",{value:e},e)))),u("svg",{class:"absolute inset-y-0 my-auto right-2 w-5 h-5 text-gray-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})));case"radio":return u(fe,{field:e,onChange:c});case"boolean":return u("label",{class:"cursor-pointer border-none mt-1 inline-flex items-center rounded text-lg leading-none h-6 w-10 "+(!0===s?"bg-blue-500":"bg-gray-300"),style:"padding: 3px"},u("input",{class:"hidden",type:"checkbox",checked:!0===s,onClick:c}),u("span",{className:`inline-block bg-white rounded-sm shadow w-1/2 h-full transition-transform ${!0===s&&"transform translate-x-full"}`}));case"long-text":return u("textarea",Z({required:!e.optional,class:"border-2 rounded text-lg min-h-10 w-full px-3 py-2",placeholder:e.defaultValue,rows:"5",value:e.value,onInput:c},p));default:{const t=["text","number","color","range"].includes(e.type)?e.type:"text";return u("input",Z({required:!e.optional,class:"border-2 rounded text-lg h-10 w-full px-3 py-2",type:t,value:e.value,onInput:c},p))}}}())}function de({opened:e=!1,selectedElement:t,onChange:n,onClose:o}){const[i,l]=U(null),{uiElements:r}=function(e){var t=B.context[e.__c],n=F(N++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(B)),t.props.value):e.__}(Q);if(!r)return null;return q((()=>{l(JSON.parse(JSON.stringify({...t})))}),[t]),u("div",{class:`flex fixed inset-0 z-50 ${!e&&"pointer-events-none"}`},u("div",{className:`bg-black bg-opacity-25 fixed inset-0 transition ${!e&&"opacity-0"}`,onClick:o}),u("div",{class:`ml-auto flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-white shadow overflow-hidden transition ${!e&&"transform translate-x-full"}`},u("div",{class:"p-4 border-b flex items-center justify-between"},u("h3",{class:"text-xl font-semibold"},"Customize ",i?i.label||"Component":""),u("button",{class:"focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300",onClick:o},u("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),u("div",{class:"p-4 flex-1 overflow-y-auto"},u("form",{action:"#",onSubmit:function(e){e.preventDefault(),n(i.options),o()}},function(){if(!i||!i.component)return[];i.options||(i.options={});const e=r[i.component],t=[];for(const n in e.props){const{type:o,defaultValue:l,...r}=e.props[n],s={type:o,defaultValue:l,...r};void 0!==i.options[n]?s.value=i.options[n]:void 0!==l&&(i.options[n]=l,s.value=l),s.name=n,t.push(s)}return t}().map((e=>u("div",{class:"mb-4"},u(he,{field:e,onChange:t=>function(e,t){const o={...i.options,[t]:e};l({...i,options:o}),n(o)}(t,e.name)}))))))))}function ge({articulateRef:e}){const[t,n]=U(!1),[o,i]=U(null);return e.editComponent=(t,o=(e=>{}))=>{e.onComponentChanged=o,i(t),setTimeout((()=>{n(!0)}))},u(Q.Provider,{value:e},u(de,{selectedElement:o,opened:t,onChange:function(t){e.onComponentChanged(t)},onClose:function(){n(!1),e.onComponentChanged(void 0)}}))}return function(t={}){const{extend:n,...o}=t,l={...o};for(const[e,t]of Object.entries(l))n&&n[e]?Array.isArray(t)?this[e]=[...t,...n[e]]:this[e]="object"==typeof t?{...t,...n[e]}:t:this[e]=t;let a=document.createElement("div");document.body.appendChild(a),function(t,n,o){var l,a,p;e.__&&e.__(t,n),a=(l=o===i)?null:o&&o.__k||n.__k,t=u(h,null,[t]),p=[],S(n,(l?n:o||n).__k=t,a||r,r,void 0!==n.ownerSVGElement,o&&!l?[o]:a?null:n.childNodes.length?s.slice.call(n.childNodes):null,p,o||r,l),P(p,t)}(u(ge,{articulateRef:this}),a)}}));
