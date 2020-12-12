!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Articulate=t()}(this,(function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function n(n){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?t(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],o=!0,r=!1,l=void 0;try{for(var i,u=e[Symbol.iterator]();!(o=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);o=!0);}catch(e){r=!0,l=e}finally{try{o||null==u.return||u.return()}finally{if(r)throw l}}return n}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u,c,a,s,_,f,p={},d=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function v(e,t){for(var n in t)e[n]=t[n];return e}function m(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,n){var o,r,l,i=arguments,u={};for(l in t)"key"==l?o=t[l]:"ref"==l?r=t[l]:u[l]=t[l];if(arguments.length>3)for(n=[n],l=3;l<arguments.length;l++)n.push(i[l]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===u[l]&&(u[l]=e.defaultProps[l]);return b(e,u,o,r,null)}function b(e,t,n,o,r){var l={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==r?++u.__v:r};return null!=u.vnode&&u.vnode(l),l}function g(e){return e.children}function w(e,t){this.props=e,this.context=t}function x(e,t){if(null==t)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?x(e):null}function k(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return k(e)}}function C(e){(!e.__d&&(e.__d=!0)&&c.push(e)&&!E.__r++||s!==u.debounceRendering)&&((s=u.debounceRendering)||a)(E)}function E(){for(var e;E.__r=c.length;)e=c.sort((function(e,t){return e.__v.__b-t.__v.__b})),c=[],e.some((function(e){var t,n,o,r,l,i,u;e.__d&&(i=(l=(t=e).__v).__e,(u=t.__P)&&(n=[],(o=v({},l)).__v=l.__v+1,r=H(u,l,o,t.__n,void 0!==u.ownerSVGElement,null!=l.__h?[i]:null,n,null==i?x(l):i,l.__h),V(n,l),r!=i&&k(l)))}))}function S(e,t,n,o,r,l,i,u,c,a){var s,_,f,h,v,y,w,k=o&&o.__k||d,C=k.length;for(c==p&&(c=null!=i?i[0]:C?x(o,0):null),n.__k=[],s=0;s<t.length;s++)if(null!=(h=n.__k[s]=null==(h=t[s])||"boolean"==typeof h?null:"string"==typeof h||"number"==typeof h?b(null,h,null,null,h):Array.isArray(h)?b(g,{children:h},null,null,null):null!=h.__e||null!=h.__c?b(h.type,h.props,h.key,null,h.__v):h)){if(h.__=n,h.__b=n.__b+1,null===(f=k[s])||f&&h.key==f.key&&h.type===f.type)k[s]=void 0;else for(_=0;_<C;_++){if((f=k[_])&&h.key==f.key&&h.type===f.type){k[_]=void 0;break}f=null}v=H(e,h,f=f||p,r,l,i,u,c,a),(_=h.ref)&&f.ref!=_&&(w||(w=[]),f.ref&&w.push(f.ref,null,h),w.push(_,h.__c||v,h)),null!=v?(null==y&&(y=v),c=P(e,h,f,k,i,v,c),a||"option"!=n.type?"function"==typeof n.type&&(n.__d=c):e.value=""):c&&f.__e==c&&c.parentNode!=e&&(c=x(f))}if(n.__e=y,null!=i&&"function"!=typeof n.type)for(s=i.length;s--;)null!=i[s]&&m(i[s]);for(s=C;s--;)null!=k[s]&&B(k[s],k[s]);if(w)for(s=0;s<w.length;s++)T(w[s],w[++s],w[++s])}function P(e,t,n,o,r,l,i){var u,c,a;if(void 0!==t.__d)u=t.__d,t.__d=void 0;else if(r==n||l!=i||null==l.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(l),u=null;else{for(c=i,a=0;(c=c.nextSibling)&&a<o.length;a+=2)if(c==l)break e;e.insertBefore(l,i),u=i}return void 0!==u?u:l.nextSibling}function j(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||h.test(t)?n:n+"px"}function O(e,t,n,o,r){var l,i,u;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||j(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||j(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(l=t!==(t=t.replace(/Capture$/,"")),(i=t.toLowerCase())in e&&(t=i),t=t.slice(2),e.l||(e.l={}),e.l[t+l]=n,u=l?M:A,n?o||e.addEventListener(t,u,l):e.removeEventListener(t,u,l)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function A(e){this.l[e.type+!1](u.event?u.event(e):e)}function M(e){this.l[e.type+!0](u.event?u.event(e):e)}function z(e,t,n){var o,r;for(o=0;o<e.__k.length;o++)(r=e.__k[o])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&z(r,t,n),t=P(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function H(e,t,n,o,r,l,i,c,a){var s,_,f,p,d,h,m,y,b,x,k,C=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(a=n.__h,c=t.__e=n.__e,t.__h=null,l=[c]),(s=u.__b)&&s(t);try{e:if("function"==typeof C){if(y=t.props,b=(s=C.contextType)&&o[s.__c],x=s?b?b.props.value:s.__:o,n.__c?m=(_=t.__c=n.__c).__=_.__E:("prototype"in C&&C.prototype.render?t.__c=_=new C(y,x):(t.__c=_=new w(y,x),_.constructor=C,_.render=N),b&&b.sub(_),_.props=y,_.state||(_.state={}),_.context=x,_.__n=o,f=_.__d=!0,_.__h=[]),null==_.__s&&(_.__s=_.state),null!=C.getDerivedStateFromProps&&(_.__s==_.state&&(_.__s=v({},_.__s)),v(_.__s,C.getDerivedStateFromProps(y,_.__s))),p=_.props,d=_.state,f)null==C.getDerivedStateFromProps&&null!=_.componentWillMount&&_.componentWillMount(),null!=_.componentDidMount&&_.__h.push(_.componentDidMount);else{if(null==C.getDerivedStateFromProps&&y!==p&&null!=_.componentWillReceiveProps&&_.componentWillReceiveProps(y,x),!_.__e&&null!=_.shouldComponentUpdate&&!1===_.shouldComponentUpdate(y,_.__s,x)||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,_.__h.length&&i.push(_),z(t,c,e);break e}null!=_.componentWillUpdate&&_.componentWillUpdate(y,_.__s,x),null!=_.componentDidUpdate&&_.__h.push((function(){_.componentDidUpdate(p,d,h)}))}_.context=x,_.props=y,_.state=_.__s,(s=u.__r)&&s(t),_.__d=!1,_.__v=t,_.__P=e,s=_.render(_.props,_.state,_.context),_.state=_.__s,null!=_.getChildContext&&(o=v(v({},o),_.getChildContext())),f||null==_.getSnapshotBeforeUpdate||(h=_.getSnapshotBeforeUpdate(p,d)),k=null!=s&&s.type==g&&null==s.key?s.props.children:s,S(e,Array.isArray(k)?k:[k],t,n,o,r,l,i,c,a),_.base=t.__e,t.__h=null,_.__h.length&&i.push(_),m&&(_.__E=_.__=null),_.__e=!1}else null==l&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=L(n.__e,t,n,o,r,l,i,a);(s=u.diffed)&&s(t)}catch(e){t.__v=null,(a||null!=l)&&(t.__e=c,t.__h=!!a,l[l.indexOf(c)]=null),u.__e(e,t,n)}return t.__e}function V(e,t){u.__c&&u.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){u.__e(e,t.__v)}}))}function L(e,t,n,o,r,l,i,u){var c,a,s,_,f,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=l)for(c=0;c<l.length;c++)if(null!=(a=l[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,l[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),l=null,u=!1}if(null===t.type)h===v||u&&e.data===v||(e.data=v);else{if(null!=l&&(l=d.slice.call(e.childNodes)),s=(h=n.props||p).dangerouslySetInnerHTML,_=v.dangerouslySetInnerHTML,!u){if(null!=l)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(_||s)&&(_&&(s&&_.__html==s.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,o,r){var l;for(l in n)"children"===l||"key"===l||l in t||O(e,l,null,n[l],o);for(l in t)r&&"function"!=typeof t[l]||"children"===l||"key"===l||"value"===l||"checked"===l||n[l]===t[l]||O(e,l,t[l],n[l],o)})(e,v,h,r,u),_?t.__k=[]:(c=t.props.children,S(e,Array.isArray(c)?c:[c],t,n,o,"foreignObject"!==t.type&&r,l,i,p,u)),u||("value"in v&&void 0!==(c=v.value)&&(c!==e.value||"progress"===t.type&&!c)&&O(e,"value",c,h.value,!1),"checked"in v&&void 0!==(c=v.checked)&&c!==e.checked&&O(e,"checked",c,h.checked,!1))}return e}function T(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){u.__e(e,n)}}function B(e,t,n){var o,r,l;if(u.unmount&&u.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,t)),n||"function"==typeof e.type||(n=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){u.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&B(o[l],t,n);null!=r&&m(r)}function N(e,t,n){return this.constructor(e,n)}function U(e,t,n){var o,r,l;u.__&&u.__(e,t),r=(o=n===_)?null:n&&n.__k||t.__k,e=y(g,null,[e]),l=[],H(t,(o?t:n||t).__k=e,r||p,p,void 0!==t.ownerSVGElement,n&&!o?[n]:r?null:t.childNodes.length?d.slice.call(t.childNodes):null,l,n||p,o),V(l,e)}function D(e){var t=this;this.props=D.props,this.values=e,this.render=function(){return D.doRender(t.values)}}function R(e){var t=this;this.values=Object.assign({},e),this.render=function(){return R.doRender(t.values)}}function I(e){var t=this;this.props=I.props,this.values=e,this.render=function(){return I.doRender(t.values)}}function q(e){var t=this;this.props=q.props,this.values=e,this.render=function(){return q.doRender(t.values)}}u={__e:function(e,t){for(var n,o,r,l=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=l,n.__E=n}catch(t){e=t}throw e},__v:0},w.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=v({},this.state),"function"==typeof e&&(e=e(v({},n),this.props)),e&&v(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),C(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),C(this))},w.prototype.render=g,c=[],a="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,E.__r=0,_=p,f=0,D.label="Image",D.icon='<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>',D.props={source:{defaultValue:null,type:"image"},caption:{defaultValue:"Image caption goes here",type:"text"},width:{defaultValue:"normal",type:"choice",choices:["normal","wide","full"]}},D.doRender=function(e){var t="";return e.caption&&e.caption.length&&(t="<small>".concat(e.caption,"</small>")),'\n        <div class="text-center">\n            <img class="'.concat(e.width,'" src="').concat(e.source,'" alt="').concat(e.caption,'" />\n            ').concat(t,"\n        </div>\n    ")},D.preview=function(){var e="https://images.unsplash.com/photo-1542690563-ca10289ac117?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",t="Forlorn railway, sunrays blither";return'\n        <div class="text-center">\n            <img style="height: 120px; width: 100%; object-fit: cover;" class="'.concat("normal",'" src="').concat(e,'" alt="').concat(t,'" />\n            <small>').concat(t,"</small>\n        </div>\n    ")},R.label="Alert",R.icon='<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',R.props={type:{defaultValue:"info",type:"choice",choices:["info","warning","error"]},title:{defaultValue:null,type:"text"},text:{defaultValue:"Alert text goes here",type:"text"}},R.doRender=function(e){e.caption&&e.caption.length&&"<small>".concat(e.caption,"</small>");var t='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';"info"!==e.type&&(t='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>');var n="";return e.title&&(n="<strong>".concat(e.title,"</strong>")),'\n        <div class="flex items-start border-l-4 py-2 px-4 bg-blue-100 border-blue-500 '.concat(e.type,'">\n            ').concat(t,'\n            <div class="flex-1">\n                ').concat(n,"\n                ").concat(e.text,"\n            </div>\n        </div>\n    ")},R.preview=function(){return R.doRender({type:"info",title:"Pssst",text:"Due to many requests from loyalties, we're moving our services out of town."})},I.label="Quote",I.icon='<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>',I.props={text:{defaultValue:"Quote content goes here",type:"long-text"},author:{defaultValue:"E.g. J. K. Rowling",type:"text"},year:{defaultValue:"E.g. 500 AD",type:"text"}},I.doRender=function(e){var t="no-owner",n=e.author,o=e.year;return n&&n.length&&(t=o&&o.length?n+" - "+o:n),'\n        <blockquote class="border-l-4 px-4 border-blue-500">\n            <span class="block text-xl">'.concat(e.text,'</span>\n            <span class="mt-1 block">').concat(t,"</span>\n        </blockquote>\n    ")},I.preview=function(){return I.doRender({text:"You know how the saying goes, a lucky soldier is a good soldier. But then again fate can be tricky🤷🏽‍♂️",author:"Napoleon",year:"300 B.C."})},q.label="Youtube Video",q.icon='<svg viewBox="0 0 334.623 334.623" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m175.33 287.02c-7e-3 0 0 0 0 0-38.053 0-79.481-1.202-123.12-3.554-25.784-1.414-45.785-21.292-48.632-48.349-4.762-45.2-4.762-90.83 0-135.62 2.841-26.832 22.815-46.71 48.574-48.33 75.271-4.737 152.72-4.737 230.31 0 26.061 1.581 45.586 20.99 48.6 48.304 4.749 43.246 4.756 88.87 6e-3 135.63-2.744 27.038-22.25 46.472-48.535 48.356-33.079 2.364-69.147 3.566-107.2 3.566zm-8.901-226.56c-37.931 0-76.113 1.195-113.48 3.541-19.685 1.234-34.39 16.048-36.594 36.851-4.666 43.895-4.666 88.613 0 132.93 2.204 20.971 16.89 35.778 36.543 36.858 43.413 2.339 84.609 3.535 122.42 3.535 37.751 0 73.51-1.189 106.29-3.528 19.833-1.427 34.57-16.228 36.659-36.839 4.666-45.862 4.666-90.58 6e-3 -132.93-2.294-20.868-17.005-35.688-36.594-36.877-38.53-2.352-77.31-3.541-115.25-3.541zm-31.852 61.331v88.208l84.706-43.805-84.706-44.403z"/></svg>',q.props={source:{defaultValue:null,type:"youtube"},width:{defaultValue:"wide",type:"choice",choices:["normal","wide","full"]},controls:{defaultValue:!0,type:"choice",choices:[!0,!1]}},q.doRender=function(e,t){var n=function(e){var t=(e.url||e.source).match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);if(!t||!t[2])return null;var n=t[2];return{videoPoster:"https://img.youtube.com/vi/".concat(n,"/0.jpg"),embedUrl:"https://www.youtube.com/embed/".concat(n,"?rel=0&controls=").concat(e.controls?1:0,"&showinfo=0&enablejsapi=1")}}(e);if(!n)return"";var o=n.videoPoster,r=n.embedUrl,l="";t&&(l='\n            <img class="object-cover absolute inset-0 w-full h-full" src="'.concat(o,'" />\n            <svg class="absolute inset-0 m-auto" style="height: 40px; width: 40px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto" fill="#f00" viewBox="0 0 24 24">\n                <rect x="8" y="8" width="8" height="8" fill="#fff" />\n                <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />\n            </svg>\n        '));var i="",u="";return t?u="height: 150px;":(u="padding-bottom: calc(900%/16)",i='\n            <iframe class="absolute inset-0 w-full h-full" width="100%" height="100%" \n                src="'.concat(r,'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        ')),'\n        <div class="relative " style="'.concat(u,'">\n            ').concat(i,"\n            ").concat(l,"\n        </div>\n    ")},q.preview=function(){return q.doRender({source:"https://www.youtube.com/watch?v=AkSCGSxOUIk",width:"wide"},!0)};var F,W,Q,J=Object.freeze({__proto__:null,BcImage:D,BcAlert:R,BcQuote:I,BcYoutube:q}),Y=0,G=[],$=u.__b,K=u.__r,Z=u.diffed,X=u.__c,ee=u.unmount;function te(e,t){u.__h&&u.__h(W,e,Y||t),Y=0;var n=W.__H||(W.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function ne(e){return Y=1,function(e,t,n){var o=te(F++,2);return o.t=e,o.__c||(o.__=[n?n(t):se(void 0,t),function(e){var t=o.t(o.__[0],e);o.__[0]!==t&&(o.__=[t,o.__[1]],o.__c.setState({}))}],o.__c=W),o.__}(se,e)}function oe(e,t){return Y=8,function(e,t){var n=te(F++,7);return ae(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}((function(){return e}),t)}function re(e){var t=W.context[e.__c],n=te(F++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(W)),t.props.value):e.__}function le(){G.forEach((function(e){if(e.__P)try{e.__H.__h.forEach(ue),e.__H.__h.forEach(ce),e.__H.__h=[]}catch(t){e.__H.__h=[],u.__e(t,e.__v)}})),G=[]}u.__b=function(e){W=null,$&&$(e)},u.__r=function(e){K&&K(e),F=0;var t=(W=e.__c).__H;t&&(t.__h.forEach(ue),t.__h.forEach(ce),t.__h=[])},u.diffed=function(e){Z&&Z(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==G.push(t)&&Q===u.requestAnimationFrame||((Q=u.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),ie&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);ie&&(t=requestAnimationFrame(n))})(le)),W=void 0},u.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ue),e.__h=e.__h.filter((function(e){return!e.__||ce(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],u.__e(n,e.__v)}})),X&&X(e,t)},u.unmount=function(e){ee&&ee(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(ue)}catch(e){u.__e(e,t.__v)}};var ie="function"==typeof requestAnimationFrame;function ue(e){var t=W;"function"==typeof e.__c&&e.__c(),W=t}function ce(e){var t=W;e.__c=e.__(),W=t}function ae(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function se(e,t){return"function"==typeof t?t(e):t}var _e=function(e,t){var n={__c:t="__cC"+f++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e,n,o){return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(C)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}();function fe(e){var t=e.opened,n=void 0!==t&&t,o=e.close,r=e.onComponentPicked,l=re(_e).uiElements;return l?y("div",{class:"fixed inset-0  z-50 ".concat(!n&&"pointer-events-none")},y("div",{className:"bg-black bg-opacity-25 fixed inset-0 transition ".concat(!n&&"opacity-0"),onClick:o}),y("div",{class:"flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-gray-100 shadow overflow-hidden transition ".concat(!n&&"transform -translate-x-full")},y("div",{class:"p-4 border-b border-gray-300 flex items-center justify-between"},y("h3",{class:"text-xl font-semibold"},"Pick a Component"),y("button",{class:"focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300",onClick:o},y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),y("div",{class:"p-4 flex-1 overflow-y-auto"},Object.values(l).map((function(e){return y("button",{class:"block w-full text-left mt-3 mb-7 border-none focus:outline-none bg-transparent",onClick:function(){return r(e)}},y("div",{className:"shadow p-2 rounded bg-white"},y("div",{dangerouslySetInnerHTML:{__html:e.preview()}})),y("span",{class:"mt-2 block text-center font-semibold"},e.label))}))))):null}function pe(e){var t=e.field,n=e.nolabel,o=e.onChange;function r(e){o(e.target.value)}return y("div",{class:""},!n&&!["image","youtube"].includes(t.type)&&y("label",{class:"capitalize block"},t.name),function(){switch(t.type){case"choice":return y("select",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",defaultValue:t.value,value:t.value,onInput:r},y("option",{disabled:!0,value:""},"Choose ",t.name),t.choices.map((function(e){return y("option",{value:e},e)})));case"long-text":return y("textarea",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",placeholder:t.defaultValue,rows:"5",value:t.value,onInput:r});default:return y("input",{required:!t.optional,class:"border-2 w-full px-2 py-1 rounded",type:"text",value:t.value,onInput:r})}}())}function de(e){var t=e.opened,r=void 0!==t&&t,l=e.close,i=e.selectedElement,c=e.onSave,a=o(ne(null),2),s=a[0],_=a[1],f=re(_e).uiElements;if(!f)return null;var p=oe((function(){if(!s||!s.component)return[];s.options||(s.options={});var e=f[s.component],t=[];for(var n in e.props){var o=e.props[n],r=o.type,l=o.defaultValue,i={type:r,defaultValue:l,choices:o.choices};-1!=r.indexOf("text")||s.options[n]||null===l?s.options[n]&&(i.value=s.options[n]):i.value=l,i.name=n,t.push(i)}return t}),[s]);return function(e,t){var n=te(F++,3);!u.__s&&ae(n.__H,t)&&(n.__=e,n.__H=t,W.__H.__h.push(n))}((function(){_(JSON.parse(JSON.stringify(n({},i))))}),[i]),y("div",{class:"flex fixed inset-0 z-50 ".concat(!r&&"pointer-events-none")},y("div",{className:"bg-black bg-opacity-25 fixed inset-0 transition ".concat(!r&&"opacity-0"),onClick:l}),y("div",{class:"ml-auto flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-white shadow overflow-hidden transition ".concat(!r&&"transform translate-x-full")},y("div",{class:"p-4 border-b flex items-center justify-between"},y("h3",{class:"text-xl font-semibold"},"Customize ",s?s.label||"Component":""),y("button",{class:"focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300",onClick:l},y("svg",{class:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},y("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})))),y("div",{class:"p-4 flex-1 overflow-y-auto"},y("form",{action:"#",onSubmit:function(e){e.preventDefault(),c(s)}},p().map((function(e){return y("div",{class:"mb-4"},y(pe,{field:e,onChange:function(t){return s.options[e.name]=t}}))})),y("button",{type:"submit",class:"px-5 py-2 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full w-full"},"Save Changes")))))}function he(e){var t=e.element;console.log("Preview element: ",t);var n=re(_e),o=n.uiElements,r=n.editElement,l=n.removeElement,i=t.options,u=t.component;var c="blogpost-section-wrapper";"bc-image"!==u&&"bc-youtube-video"!==u||!i||("wide"===i.width?c+=" wide-image":"full"===i.width&&(c+=" full-image"));var a=new o[u](i);return y("div",{class:c},y("div",{class:"relative"},y("div",{class:""},y("button",{class:"w-8 h-8 bg-gray-100 rounded-full",onClick:function(){return r(t)}},y("svg",{class:"w-6",fill:"#f18f16",viewBox:"0 0 24 24"},y("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),y("path",{d:"M0 0h24v24H0z",fill:"none"}))),y("button",{class:"w-8 h-8 bg-gray-100 rounded-full",onClick:function(){return l(t)}},y("svg",{class:"w-6",fill:"#e04b2a",viewBox:"0 0 24 24"},y("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),y("path",{d:"M0 0h24v24H0z",fill:"none"})))),y("div",{innerHTML:a.render()})))}function ve(e){return y("div",null,e.elements.map((function(e){return y(he,{element:e})})))}function me(e){var t=e.articulateRef,n=o(ne([]),2),l=(n[0],n[1]),i=o(ne(!1),2),u=i[0],c=i[1],a=o(ne(null),2),s=a[0],_=a[1],f=o(ne(!1),2),p=f[0],d=f[1];function h(){l(t.elements),t.onElementsChanged(t.elements)}return t.pickComponent=function(){d(!0)},t.editElement=function(e){_(e),setTimeout((function(){c(!0)}))},t.removeElement=function(e){t.elements&&t.elements.length&&e&&e.id&&(t.elements=t.elements.filter((function(t){return t.id!=e.id})),h())},y(_e.Provider,{value:t},y("div",{class:"max-w-5xl mx-auto"},y(fe,{opened:p,close:function(){return d(!1)},onComponentPicked:function(e){d(!1);for(var n=e.label,r=e.name,l=e.props,i={label:n,component:r,options:{}},u=0,c=Object.entries(l);u<c.length;u++){var a=o(c[u],2),s=a[0],_=a[1].defaultValue;i.options[s]=_}t.onComponentPicked(i)}}),y(de,{selectedElement:s,opened:u,close:function(){return c(!1)},onSave:function(e){c(!1),e.id?t.elements=t.elements.map((function(n){return n.id===e.id?(t.onElementUpdated(e),e):n})):(e.id=(1e32*Math.random()).toString(36),t.elements=[].concat(r(t.elements),[e]),t.onElementAdded(e)),h()}}),y(ve,{elements:t.elements})))}return function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={uiElements:J,elements:[],onComponentPicked:function(e){art.editElement(e)},onElementAdded:function(e){return console.log("Element added: ",e)},onElementUpdated:function(e){return console.log("Element updated: ",e)},onElementsChanged:function(e){return console.log("Elements changed: ",e)}},l=n(n({},r),t),i=0,u=Object.entries(l);i<u.length;i++){var c=o(u[i],2),a=c[0],s=c[1];this[a]=s}U(y(me,{articulateRef:this}),document.querySelector(e))}}));
