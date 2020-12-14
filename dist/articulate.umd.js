!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Articulate=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw l}}return n}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var a,s,_,f,p,d,h={},v=[],m=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function y(e,t){for(var n in t)e[n]=t[n];return e}function b(e){var t=e.parentNode;t&&t.removeChild(e)}function g(e,t,n){var o,r,l,i=arguments,u={};for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:u[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(i[l]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return w(e,u,o,r,null)}function w(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++a.__v:r};return null!=a.vnode&&a.vnode(l),l}function x(e){return e.children}function k(e,t){this.props=e,this.context=t}function C(e,t){if(null==t)return e.__?C(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?C(e):null}function S(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return S(e)}}function j(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!O.__r++||f!==a.debounceRendering)&&((f=a.debounceRendering)||_)(O)}function O(){for(var e;O.__r=s.length;)e=s.sort((function(e,t){return e.__v.__b-t.__v.__b})),s=[],e.some((function(e){var t,n,o,r,l,i,u;e.__d&&(i=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=y({},l)).__v=l.__v+1,r=D(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[i]:null,n,null==i?C(l):i,l.__h),L(n,l),r!=i&&S(l)))}))}function P(e,t,n,o,r,l,i,u,c,a){var s,_,f,p,d,m,y,g=o&&o.__k||v,k=g.length;for(c==h&&(c=null!=i?i[0]:k?C(o,0):null),n.__k=[],s=0;s<t.length;s++)if(null!=(p=n.__k[s]=null==(p=t[s])||"boolean"==typeof p?null:"string"==typeof p||"number"==typeof p?w(null,p,null,null,p):Array.isArray(p)?w(x,{children:p},null,null,null):null!=p.__e||null!=p.__c?w(p.type,p.props,p.key,null,p.__v):p)){if(p.__=n,p.__b=n.__b+1,null===(f=g[s])||f&&p.key==f.key&&p.type===f.type)g[s]=void 0;else for(_=0;_<k;_++){if((f=g[_])&&p.key==f.key&&p.type===f.type){g[_]=void 0;break}f=null}d=D(e,p,f=f||h,r,l,i,u,c,a),(_=p.ref)&&f.ref!=_&&(y||(y=[]),f.ref&&y.push(f.ref,null,p),y.push(_,p.__c||d,p)),null!=d?(null==m&&(m=d),c=E(e,p,f,g,i,d,c),a||"option"!=n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&f.__e==c&&c.parentNode!=e&&(c=C(f))}if(n.__e=m,null!=i&&"function"!=typeof n.type)for(s=i.length;s--;)null!=i[s]&&b(i[s]);for(s=k;s--;)null!=g[s]&&U(g[s],g[s]);if(y)for(s=0;s<y.length;s++)T(y[s],y[++s],y[++s])}function E(e,t,n,o,r,l,i){var u,c,a;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==n||l!=i||null==l.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(l),u=null;else{for(c=i,a=0;(c=c.nextSibling)&&a<o.length;a+=2)if(c==l)break e;e.insertBefore(l,i),u=i}return void 0!==u?u:l.nextSibling}function H(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||m.test(t)?n:n+"px"}function A(e,t,n,o,r){var l,i,u;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||H(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||H(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),(i=t.toLowerCase())in e&&(t=i),t=t.slice(2),e.l||(e.l={}),e.l[t+l]=n,u=l?z:M,n?o||e.addEventListener(t,u,l):e.removeEventListener(t,u,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function M(e){this.l[e.type+!1](a.event?a.event(e):e)}function z(e){this.l[e.type+!0](a.event?a.event(e):e)}function V(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&V(r,t,n),t=E(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function D(e,t,n,o,r,l,i,u,c){var s,_,f,p,d,h,v,m,b,g,w,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(c=n.__h,u=t.__e=n.__e,t.__h=null,l=[u]),(s=a.__b)&&s(t);try{e:if("function"==typeof C){if(m=t.props,b=(s=C.contextType)&&o[s.__c],g=s?b?b.props.value:s.__:o,n.__c?v=(_=t.__c=n.__c).__=_.__E:("prototype"in C&&C.prototype.render?t.__c=_=new C(m,g):(t.__c=_=new k(m,g),_.constructor=C,_.render=I),b&&b.sub(_),_.props=m,_.state||(_.state={}),_.context=g,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=C.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=y({},_.__s)),y(_.__s,C.getDerivedStateFromProps(m,_.__s))),p=_.props,d=_.state,f)null==C.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==C.getDerivedStateFromProps&&m!==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(m,g),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(m,_.__s,g)||t.__v===n.__v){_.props=m,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,_.__h.length&&i.push(_),V(t,u,e);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(m,_.__s,g),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(p,d,h)}))}_.context=g,_.props=m,_.state=_.__s,(s=a.__r)&&s(t),_.__d=!1,_.__v=t,_.__P=e,s=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=y(y({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(h=_.getSnapshotBeforeUpdate(p,d)),w=null!=s&&s.type==x&&null==s.key?s.props.children:s,P(e,Array.isArray(w)?w:[w],t,n,o,r,l,i,u,c),_.base=t.__e,t.__h=null,_.__h.length&&i.push(_),v&&(_.__E=_.__=null),_.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=B(n.__e,t,n,o,r,l,i,c);(s=a.diffed)&&s(t)}catch(e){t.__v=null,(c||null!=l)&&(t.__e=u,t.__h=!!c,l[l.indexOf(u)]=null),a.__e(e,t,n)}return t.__e}function L(e,t){a.__c&&a.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){a.__e(e,t.__v)}}))}function B(e,t,n,o,r,l,i,u){var c,a,s,_,f,p=n.props,d=t.props;if(r="svg"===t.type||r,null!=l)for(c=0;c<l.length;c++)if(null!=(a=l[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(d);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,d.is&&{is:d.is}),l=null,u=!1}if(null===t.type)p===d||u&&e.data===d||(e.data=d);else{if(null!=l&&(l=v.slice.call(e.childNodes)),s=(p=n.props||h).dangerouslySetInnerHTML,_=d.dangerouslySetInnerHTML,!u){if(null!=l)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(_||s)&&(_&&(s&&_.__html==s.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||A(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||A(e,l,t[l],n[l],o)})(e,d,p,r,u),_?t.__k=[]:(c=t.props.children,P(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&r,l,i,h,u)),u||("value"in d&&void 0!==(c=d.value)&&(c!==e.value||"progress"===t.type&&!c)&&A(e,"value",c,p.value,!1),"checked"in d&&void 0!==(c=d.checked)&&c!==e.checked&&A(e,"checked",c,p.checked,!1))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){a.__e(e,n)}}function U(e,t,n){var o,r,l;if(a.unmount&&a.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){a.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&U(o[l],t,n);null!=r&&b(r)}function I(e,t,n){return this.constructor(e,n)}function N(e,t,n){var o,r,l;a.__&&a.__(e,t),r=(o=n===p)?null:n&&n.__k||t.__k,e=g(x,null,[e]),l=[],D(t,(o?t:n||t).__k=e,r||h,h,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?v.slice.call(t.childNodes):null,l,n||h,o),L(l,e)}function R(e){var t=this;this.props=R.props,this.values=e,this.render=function(){return R.doRender(t.values)}}function W(e){var t=this;this.values=e,this.render=function(){return W.doRender(t.values)}}function q(e){var t=this;this.props=q.props,this.values=e,this.render=function(){return q.doRender(t.values)}}function F(e){var t=this;this.props=F.props,this.values=e,this.render=function(){return F.doRender(t.values)}}a={__e:function(e,t){for(var n,o,r,l=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=l,n.__E=n}catch(t){e=t}throw e},__v:0},k.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof e&&(e=e(y({},n),this.props)),e&&y(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),j(this))},k.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this))},k.prototype.render=x,s=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0,p=h,d=0,R.label="Image",R.icon='<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>',R.props={source:{defaultValue:"https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",type:"image"},caption:{defaultValue:"Park in poznan poland by Erik Witsoe",type:"text"},maxHeight:{defaultValue:"300px",optional:!0,type:"text"},crop:{defaultValue:"fill",optional:!0,type:"choice",choices:["fit","fill"]},edgeCorners:{defaultValue:"none",optional:!0,type:"choice",choices:["none","small","medium","large"]}},R.doRender=function(e){var t="";e.caption&&e.caption.length&&(t="<small>".concat(e.caption,"</small>"));var n="object-".concat({fit:"contain",fill:"cover"}[e.crop]||"cover"," ");return n+="rounded-".concat({small:"md",medium:"lg",large:"xl"}[e.edgeCorners]," "),e.maxHeight&&(n+="absolute left-0 top-0 w-full h-full "),'\n        <div class="text-center">\n            <div class="relative" style="height: '.concat(e.maxHeight,'">\n                <img class="').concat(n,'" src="').concat(e.source,'" alt="').concat(e.caption,'" />\n            </div>\n            ').concat(t,"\n        </div>\n    ")},R.preview=function(){return R.doRender({source:"https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",caption:"Park in poznan poland by Erik Witsoe",edgeCorners:"medium",maxHeight:"200px"})},W.label="Alert",W.icon='<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',W.props={type:{defaultValue:"info",type:"choice",choices:["info","warning","error"]},title:{defaultValue:null,optional:!0,type:"text"},text:{defaultValue:"Due to many requests from loyalties, we're moving our services out of town.",type:"text"}},W.doRender=function(e){e.caption&&e.caption.length&&"<small>".concat(e.caption,"</small>");var t='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';"info"!==e.type&&(t='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>');var n="";return e.title&&(n="<strong>".concat(e.title,"</strong>")),'\n        <div class="inline-flex max-w-lg items-start border-l-4 py-2 px-4 bg-blue-100 border-blue-500 '.concat(e.type,'">\n            ').concat(t,'\n            <div class="flex-1">\n                ').concat(n,"\n                ").concat(e.text,"\n            </div>\n        </div>\n    ")},W.preview=function(){return W.doRender({type:"info",title:"Pssst",text:"Due to many requests from loyalties, we're moving our services out of town."})},q.label="Quote",q.icon='<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>',q.props={text:{defaultValue:"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends when they bout to get into some mischief. And so I ward ten points to Neville and gryfindor🪄",type:"long-text"},author:{defaultValue:"A. P. W. B. Dumbledore",optional:!0,type:"text"},year:{defaultValue:null,optional:!0,type:"number"}},q.doRender=function(e){var t="no-owner",n=e.author,o=e.year;return n&&n.length&&(t=o&&o.length?n+" - "+o:n),'\n        <blockquote class="border-l-4 px-4 border-blue-500">\n            <span class="block text-3xl font-light">'.concat(e.text,'</span>\n            <span class="mt-1 block">').concat(t,"</span>\n        </blockquote>\n    ")},q.preview=function(){return q.doRender({text:"It takes a great deal of bravery to stand up to our enemies, but...",author:"A. P. W. B. Dumbledore",year:1996})},F.label="Youtube Video",F.icon='<svg viewBox="0 0 334.623 334.623" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m175.33 287.02c-7e-3 0 0 0 0 0-38.053 0-79.481-1.202-123.12-3.554-25.784-1.414-45.785-21.292-48.632-48.349-4.762-45.2-4.762-90.83 0-135.62 2.841-26.832 22.815-46.71 48.574-48.33 75.271-4.737 152.72-4.737 230.31 0 26.061 1.581 45.586 20.99 48.6 48.304 4.749 43.246 4.756 88.87 6e-3 135.63-2.744 27.038-22.25 46.472-48.535 48.356-33.079 2.364-69.147 3.566-107.2 3.566zm-8.901-226.56c-37.931 0-76.113 1.195-113.48 3.541-19.685 1.234-34.39 16.048-36.594 36.851-4.666 43.895-4.666 88.613 0 132.93 2.204 20.971 16.89 35.778 36.543 36.858 43.413 2.339 84.609 3.535 122.42 3.535 37.751 0 73.51-1.189 106.29-3.528 19.833-1.427 34.57-16.228 36.659-36.839 4.666-45.862 4.666-90.58 6e-3 -132.93-2.294-20.868-17.005-35.688-36.594-36.877-38.53-2.352-77.31-3.541-115.25-3.541zm-31.852 61.331v88.208l84.706-43.805-84.706-44.403z"/></svg>',F.props={source:{defaultValue:"https://www.youtube.com/watch?v=AkSCGSxOUIk",type:"youtube"},width:{defaultValue:"wide",type:"choice",choices:["normal","wide","full"]},controls:{defaultValue:!0,type:"choice",choices:[!0,!1]}},F.doRender=function(e,t){var n=function(e){var t=(e.url||e.source).match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);if(!t||!t[2])return null;var n=t[2];return{videoPoster:"https://img.youtube.com/vi/".concat(n,"/0.jpg"),embedUrl:"https://www.youtube.com/embed/".concat(n,"?rel=0&controls=").concat(e.controls?1:0,"&showinfo=0&enablejsapi=1")}}(e);if(!n)return"";var o=n.videoPoster,r=n.embedUrl,l="";t&&(l='\n            <img class="object-cover absolute inset-0 w-full h-full" src="'.concat(o,'" />\n            <svg class="absolute inset-0 m-auto" style="height: 40px; width: 40px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto" fill="#f00" viewBox="0 0 24 24">\n                <rect x="8" y="8" width="8" height="8" fill="#fff" />\n                <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />\n            </svg>\n        '));var i="",u="";return t?u="height: 150px;":(u="padding-bottom: calc(900%/16)",i='\n            <iframe class="absolute inset-0 w-full h-full" width="100%" height="100%" \n                src="'.concat(r,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        ')),'\n        <div class="relative bg-black" style="'.concat(u,'">\n            ').concat(i,"\n            ").concat(l,"\n        </div>\n    ")},F.preview=function(){return F.doRender({source:"https://www.youtube.com/watch?v=AkSCGSxOUIk",width:"wide"},!0)};var G,Y,$,J=Object.freeze({__proto__:null,BcImage:R,BcAlert:W,BcQuote:q,BcYoutube:F}),Q=0,X=[],Z=a.__b,K=a.__r,ee=a.diffed,te=a.__c,ne=a.unmount;function oe(e,t){a.__h&&a.__h(Y,e,Q||t),Q=0;var n=Y.__H||(Y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function re(e){return Q=1,function(e,t,n){var o=oe(G++,2);return o.t=e,o.__c||(o.__=[n?n(t):fe(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=Y),o.__}(fe,e)}function le(e,t){return Q=8,function(e,t){var n=oe(G++,7);return _e(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}((function(){return e}),t)}function ie(e){var t=Y.context[e.__c],n=oe(G++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(Y)),t.props.value):e.__}function ue(){X.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(ae),e.__H.__h.forEach(se),e.__H.__h=[]}catch(t){e.__H.__h=[],a.__e(t,e.__v)}})),X=[]}a.__b=function(e){Y=null,Z&&Z(e)},a.__r=function(e){K&&K(e),G=0;var t=(Y=e.__c).__H;t&&(t.__h.forEach(ae),t.__h.forEach(se),t.__h=[])},a.diffed=function(e){ee&&ee(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==X.push(t)&&$===a.requestAnimationFrame||(($=a.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),ce&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);ce&&(t=requestAnimationFrame(n))})(ue)),Y=void 0},a.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ae),e.__h=e.__h.filter((function(e){return!e.__||se(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],a.__e(n,e.__v)}})),te&&te(e,t)},a.unmount=function(e){ne&&ne(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ae)}catch(e){a.__e(e,t.__v)}};var ce="function"==typeof requestAnimationFrame;function ae(e){var t=Y;"function"==typeof e.__c&&e.__c(),Y=t}function se(e){var t=Y;e.__c=e.__(),Y=t}function _e(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function fe(e,t){return"function"==typeof t?t(e):t}var pe=function(e,t){var n={__c:t="__cC"+d++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,o){return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(j)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}();function de(e){var t=e.opened,n=void 0!==t&&t,o=e.close,r=e.onComponentPicked,l=ie(pe).uiElements;return l?g("div",{class:"fixed inset-0  z-50 ".concat(!n&&"pointer-events-none")},g("div",{className:"bg-black bg-opacity-25 fixed inset-0 transition ".concat(!n&&"opacity-0"),onClick:o}),g("div",{class:"flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-gray-100 shadow overflow-hidden transition ".concat(!n&&"transform -translate-x-full")},g("div",{class:"p-4 border-b border-gray-300 flex items-center justify-between"},g("h3",{class:"text-xl font-semibold"},"Pick a Component"),g("button",{class:"focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300",onClick:o},g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),g("div",{class:"p-4 flex-1 overflow-y-auto"},Object.values(l).map((function(e){return g("button",{class:"block w-full text-left mt-3 mb-7 border-none focus:outline-none bg-transparent",onClick:function(){return r(e)}},g("div",{className:"shadow p-2 rounded bg-white"},g("div",{dangerouslySetInnerHTML:{__html:e.preview()}})),g("span",{class:"mt-2 block text-center text-xl font-semibold"},e.label))}))))):null}function he(e){var t=e.field,n=e.nolabel,o=e.onChange;function r(e){o(e.target.value)}return g("div",{class:""},!n&&g("label",{class:"capitalize block"},t.name),function(){switch(t.type){case"choice":return g("select",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",defaultValue:t.value,value:t.value,onInput:r},g("option",{disabled:!0,value:""},"Choose ",t.name),t.choices.map((function(e){return g("option",{value:e},e)})));case"long-text":return g("textarea",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",placeholder:t.defaultValue,rows:"5",value:t.value,onInput:r});default:var e=["text","number","color","range"].includes(t.type)?t.type:"text";return g("input",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",type:e,value:t.value,onInput:r})}}())}function ve(e){var t=e.opened,n=void 0!==t&&t,i=e.close,u=e.selectedElement,c=e.onSave,s=l(re(null),2),_=s[0],f=s[1],p=ie(pe).uiElements;if(!p)return null;var d=le((function(){if(!_||!_.component)return[];_.options||(_.options={});var e=p[_.component],t=[];for(var n in e.props){var l=e.props[n],i=l.type,u=l.defaultValue,c=o({type:i,defaultValue:u},r(l,["type","defaultValue"]));-1!=i.indexOf("text")||_.options[n]||null===u?_.options[n]&&(c.value=_.options[n]):c.value=u,c.name=n,t.push(c)}return t}),[_]);return function(e,t){var n=oe(G++,3);!a.__s&&_e(n.__H,t)&&(n.__=e,n.__H=t,Y.__H.__h.push(n))}((function(){f(JSON.parse(JSON.stringify(o({},u))))}),[u]),g("div",{class:"flex fixed inset-0 z-50 ".concat(!n&&"pointer-events-none")},g("div",{className:"bg-black bg-opacity-25 fixed inset-0 transition ".concat(!n&&"opacity-0"),onClick:i}),g("div",{class:"ml-auto flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-white shadow overflow-hidden transition ".concat(!n&&"transform translate-x-full")},g("div",{class:"p-4 border-b flex items-center justify-between"},g("h3",{class:"text-xl font-semibold"},"Customize ",_?_.label||"Component":""),g("button",{class:"focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300",onClick:i},g("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},g("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),g("div",{class:"p-4 flex-1 overflow-y-auto"},g("form",{action:"#",onSubmit:function(e){e.preventDefault(),c(_)}},d().map((function(e){return g("div",{class:"mb-4"},g(he,{field:e,onChange:function(t){return _.options[e.name]=t}}))})),g("button",{type:"submit",class:"px-5 py-2 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full w-full"},"Save Changes")))))}function me(e){var t=e.element,n=ie(pe),o=n.uiElements,r=n.editElement,l=n.removeElement,i=t.options;return g("div",null,g("div",{class:"relative"},g("div",{innerHTML:new o[t.component](i).render()}),g("div",{class:"mt-1 flex items-center"},g("button",{class:"mr-2 flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full",onClick:function(){return r(t)}},g("svg",{class:"w-4",fill:"#f18f16",viewBox:"0 0 24 24"},g("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),g("path",{d:"M0 0h24v24H0z",fill:"none"}))),g("button",{class:"flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full",onClick:function(){return l(t)}},g("svg",{class:"w-4",fill:"#e04b2a",viewBox:"0 0 24 24"},g("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),g("path",{d:"M0 0h24v24H0z",fill:"none"}))))))}function ye(e){return g("div",null,e.elements.map((function(e){return g(me,{element:e})})))}function be(e){var t=e.articulateRef,n=l(re(!1),2),o=n[0],r=n[1],u=l(re(null),2),c=u[0],a=u[1],s=l(re(!1),2),_=s[0],f=s[1];function p(){t.onElementsChanged(t.elements)}function d(e){r(!1),e.id?t.elements=t.elements.map((function(n){return n.id===e.id?(t.onElementUpdated(e),e):n})):(e.id=(1e32*Math.random()).toString(36),t.elements=[].concat(i(t.elements),[e]),t.onElementAdded(e)),p()}return t.pickComponent=function(){f(!0)},t.editElement=function(e){a(e),setTimeout((function(){r(!0)}))},t.removeElement=function(e){t.elements&&t.elements.length&&e&&e.id&&(t.elements=t.elements.filter((function(t){return t.id!=e.id})),p())},g(pe.Provider,{value:t},g("div",{class:"max-w-5xl mx-auto"},g(de,{opened:_,close:function(){return f(!1)},onComponentPicked:function(e){f(!1);for(var n=e.label,o=e.name,r=e.props,i={label:n,component:o,options:{}},u=!1,c=0,a=Object.entries(r);c<a.length;c++){var s=l(a[c],2),_=s[0],p=s[1],h=p.defaultValue,v=p.optional;i.options[_]=h,v||h||(u=!0)}u?t.onComponentPicked(i):d(i)}}),g(ve,{selectedElement:c,opened:o,close:function(){return r(!1)},onSave:d}),g(ye,{elements:t.elements})))}return function(t){for(var n=this,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c={uiElements:J,elements:[],onComponentPicked:function(e){n.editElement(e)},onElementAdded:function(e){},onElementUpdated:function(e){},onElementsChanged:function(e){}},a=u.extend,s=r(u,["extend"]),_=o(o({},c),s),f=0,p=Object.entries(_);f<p.length;f++){var d=l(p[f],2),h=d[0],v=d[1];a&&a[h]?Array.isArray(v)?this[h]=[].concat(i(v),i(a[h])):"object"===e(v)?this[h]=o(o({},v),a[h]):this[h]=v:this[h]=v}N(g(be,{articulateRef:this}),document.querySelector(t))}}));
