"use strict";function e(t){this.props=e.props,this.values=t,this.render=()=>e.doRender(this.values)}function t(e){this.values=e,this.render=()=>t.doRender(this.values)}function o(e){this.props=o.props,this.values=e,this.render=()=>o.doRender(this.values)}function n(e){this.props=n.props,this.values=e,this.render=()=>n.doRender(this.values)}function l(e){this.values=e,this.render=()=>l.doRender(this.values)}e.label="Image",e.icon='<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>',e.props={source:{defaultValue:"https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",type:"image"},caption:{defaultValue:"Park in poznan poland by Erik Witsoe",type:"text"},maxHeight:{defaultValue:"300px",optional:!0,type:"text"},crop:{defaultValue:"fill",optional:!0,type:"choice",choices:["fit","fill"]},edgeCorners:{defaultValue:"none",optional:!0,type:"choice",choices:["none","small","medium","large"]}},e.doRender=function(e){let t="";e.caption&&e.caption.length&&(t=`<small>${e.caption}</small>`);let o=`object-${{fit:"contain",fill:"cover"}[e.crop]||"cover"} `;return o+=`rounded-${{small:"md",medium:"lg",large:"xl"}[e.edgeCorners]} `,e.maxHeight&&(o+="absolute left-0 top-0 w-full h-full "),`\n        <div class="text-center">\n            <div class="relative" style="height: ${e.maxHeight}">\n                <img class="${o}" src="${e.source}" alt="${e.caption}" />\n            </div>\n            ${t}\n        </div>\n    `},e.preview=function(){return e.doRender({source:"https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",caption:"Park in poznan poland by Erik Witsoe",edgeCorners:"medium",maxHeight:"200px"})},t.label="Alert",t.icon='<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',t.props={type:{defaultValue:"info",type:"choice",choices:["info","warning","error"]},title:{defaultValue:null,optional:!0,type:"text"},text:{defaultValue:"Due to many requests from loyalties, we're moving our services out of town.",type:"long-text"}},t.doRender=function(e){let t="";e.caption&&e.caption.length&&e.caption;let o='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>';"info"!==e.type&&(o='<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>');let n="";e.title&&(n=`<strong>${e.title}</strong>`);const l={info:"blue",error:"red",warning:"yellow"}[e.type];return`\n        <div class="inline-flex max-w-lg items-start border-l-4 py-2 px-4 bg-${l}-100 border-${l}-500 ${e.type}">\n            ${o}\n            <div class="flex-1">\n                ${n}\n                ${e.text}\n            </div>\n        </div>\n    `},t.preview=function(){return t.doRender({type:"info",title:"Pssst",text:"Due to many requests from loyalties, we're moving our services out of town."})},o.label="Quote",o.icon='<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>',o.props={text:{defaultValue:"It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends when they bout to get into some mischief. And so I ward ten points to Neville and gryfindor🪄",type:"long-text"},author:{defaultValue:"A. P. W. B. Dumbledore",optional:!0,type:"text"},year:{defaultValue:null,optional:!0,type:"number"}},o.doRender=function(e){let t="no-owner";const{author:o,year:n}=e;return o&&o.length&&(t=n&&n.length?o+" - "+n:o),`\n        <blockquote class="border-l-4 px-4 border-blue-500">\n            <span class="block text-3xl font-light">${e.text}</span>\n            <span class="mt-1 block">${t}</span>\n        </blockquote>\n    `},o.preview=function(){return o.doRender({text:"It takes a great deal of bravery to stand up to our enemies, but...",author:"A. P. W. B. Dumbledore",year:1996})},n.label="Youtube Video",n.icon='<svg viewBox="0 0 334.623 334.623" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m175.33 287.02c-7e-3 0 0 0 0 0-38.053 0-79.481-1.202-123.12-3.554-25.784-1.414-45.785-21.292-48.632-48.349-4.762-45.2-4.762-90.83 0-135.62 2.841-26.832 22.815-46.71 48.574-48.33 75.271-4.737 152.72-4.737 230.31 0 26.061 1.581 45.586 20.99 48.6 48.304 4.749 43.246 4.756 88.87 6e-3 135.63-2.744 27.038-22.25 46.472-48.535 48.356-33.079 2.364-69.147 3.566-107.2 3.566zm-8.901-226.56c-37.931 0-76.113 1.195-113.48 3.541-19.685 1.234-34.39 16.048-36.594 36.851-4.666 43.895-4.666 88.613 0 132.93 2.204 20.971 16.89 35.778 36.543 36.858 43.413 2.339 84.609 3.535 122.42 3.535 37.751 0 73.51-1.189 106.29-3.528 19.833-1.427 34.57-16.228 36.659-36.839 4.666-45.862 4.666-90.58 6e-3 -132.93-2.294-20.868-17.005-35.688-36.594-36.877-38.53-2.352-77.31-3.541-115.25-3.541zm-31.852 61.331v88.208l84.706-43.805-84.706-44.403z"/></svg>',n.props={source:{defaultValue:"https://www.youtube.com/watch?v=AkSCGSxOUIk",type:"youtube"}},n.doRender=function(e,t){const o=function(e){var t=(e.url||e.source).match(/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);if(!t||!t[2])return null;const o=t[2];return{videoPoster:`https://img.youtube.com/vi/${o}/0.jpg`,embedUrl:`https://www.youtube.com/embed/${o}?rel=0&controls=${e.controls?1:0}&showinfo=0&enablejsapi=1`}}(e);if(!o)return"";const{videoPoster:n,embedUrl:l}=o;let r="";t&&(r=`\n            <img class="object-cover absolute inset-0 w-full h-full" src="${n}" />\n            <svg class="absolute inset-0 m-auto" style="height: 40px; width: 40px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto" fill="#f00" viewBox="0 0 24 24">\n                <rect x="8" y="8" width="8" height="8" fill="#fff" />\n                <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />\n            </svg>\n        `);let s="",a="";return t?a="height: 150px;":(a="padding-bottom: calc(900%/16)",s=`\n            <iframe class="absolute inset-0 w-full h-full" width="100%" height="100%" \n                src="${l}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n        `),`\n        <div class="relative bg-black" style="${a}">\n            ${s}\n            ${r}\n        </div>\n    `},n.preview=function(){return n.doRender({source:"https://www.youtube.com/watch?v=AkSCGSxOUIk",width:"wide"},!0)},l.label="Text",l.icon='<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',l.props={text:{defaultValue:"<p>And so Jack went up the beanstalk in a haste, seemingly <em>unaware</em> of the <strong>perils</strong> that awaited ahead.</p>",type:"long-text",optional:!0}},l.doRender=function(e){return e.text},l.preview=function(){return l.doRender({text:"<p>And so Jack went up the beanstalk in a haste, seemingly <em>unaware</em> of the <strong>perils</strong> that awaited ahead.</p>"})},exports.BcAlert=t,exports.BcImage=e,exports.BcQuote=o,exports.BcText=l,exports.BcYoutube=n;
