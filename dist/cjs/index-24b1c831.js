
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
'use strict';

function BcImage(values) {
  this.props = BcImage.props;
  this.values = values;

  this.render = () => BcImage.doRender(this.values);
}

BcImage.label = 'Image';
BcImage.icon = '<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>';
BcImage.props = {
  source: {
    defaultValue: "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",
    type: 'image'
  },
  caption: {
    defaultValue: "Park in poznan poland by Erik Witsoe",
    type: 'text'
  },
  maxHeight: {
    defaultValue: '300px',
    optional: true,
    type: 'text'
  },
  crop: {
    defaultValue: "fill",
    optional: true,
    type: 'choice',
    choices: ['fit', 'fill']
  },
  edgeCorners: {
    defaultValue: "none",
    optional: true,
    type: 'choice',
    choices: ['none', 'small', 'medium', 'large']
  } // width: {
  //     defaultValue: "normal",
  //     type: 'choice',
  //     choices: ['normal', 'wide', 'full']
  // },

};

BcImage.doRender = function (options) {
  const corners = {
    'small': 'md',
    'medium': 'lg',
    'large': 'xl'
  };
  const crop = {
    'fit': 'contain',
    'fill': 'cover'
  };
  let caption = '';
  if (options.caption && options.caption.length) caption = `<small>${options.caption}</small>`;
  let imageClasses = `object-${crop[options.crop] || 'cover'} `;
  imageClasses += `rounded-${corners[options.edgeCorners]} `;
  if (options.maxHeight) imageClasses += "absolute left-0 top-0 w-full h-full ";
  return `
        <div class="text-center">
            <div class="relative" style="height: ${options.maxHeight}">
                <img class="${imageClasses}" src="${options.source}" alt="${options.caption}" />
            </div>
            ${caption}
        </div>
    `;
};

BcImage.preview = function () {
  const options = {
    source: "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",
    caption: 'Park in poznan poland by Erik Witsoe',
    edgeCorners: "medium",
    maxHeight: "200px"
  };
  return BcImage.doRender(options);
};

function BcAlert(values) {
  this.values = values;

  this.render = () => BcAlert.doRender(this.values);
}

BcAlert.label = 'Alert';
BcAlert.icon = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';
BcAlert.props = {
  type: {
    defaultValue: 'info',
    type: 'choice',
    choices: ['info', 'warning', 'error']
  },
  title: {
    defaultValue: null,
    optional: true,
    type: 'text'
  },
  text: {
    defaultValue: 'Due to many requests from loyalties, we\'re moving our services out of town.',
    type: 'long-text'
  }
};

BcAlert.doRender = function (options) {
  let caption = '';
  if (options.caption && options.caption.length) caption = `<small>${options.caption}</small>`;
  let icon = `<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
  if (options.type !== 'info') icon = `<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`;
  let title = '';
  if (options.title) title = `<strong>${options.title}</strong>`;
  const theme = {
    'info': 'blue',
    'error': 'red',
    'warning': 'yellow'
  }[options.type];
  return `
        <div class="inline-flex max-w-lg items-start border-l-4 py-2 px-4 bg-${theme}-100 border-${theme}-500 ${options.type}">
            ${icon}
            <div class="flex-1">
                ${title}
                ${options.text}
            </div>
        </div>
    `;
};

BcAlert.preview = function () {
  return BcAlert.doRender({
    type: 'info',
    title: 'Pssst',
    text: 'Due to many requests from loyalties, we\'re moving our services out of town.'
  });
};

function BcQuote(values) {
  this.props = BcQuote.props;
  this.values = values;

  this.render = () => BcQuote.doRender(this.values);
}

BcQuote.label = 'Quote';
BcQuote.icon = '<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>';
BcQuote.props = {
  text: {
    defaultValue: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends when they bout to get into some mischief. And so I ward ten points to Neville and gryfindor🪄",
    type: 'long-text'
  },
  author: {
    defaultValue: 'A. P. W. B. Dumbledore',
    optional: true,
    type: 'text'
  },
  year: {
    defaultValue: null,
    optional: true,
    type: 'number'
  }
};

BcQuote.doRender = function (options) {
  let owner = 'no-owner';
  const {
    author,
    year
  } = options;
  if (author && author.length) owner = year && year.length ? author + ' - ' + year : author;
  return `
        <blockquote class="border-l-4 px-4 border-blue-500">
            <span class="block text-3xl font-light">${options.text}</span>
            <span class="mt-1 block">${owner}</span>
        </blockquote>
    `;
};

BcQuote.preview = function () {
  return BcQuote.doRender({
    text: "It takes a great deal of bravery to stand up to our enemies, but...",
    author: "A. P. W. B. Dumbledore",
    year: 1996
  });
};

function processYoutubeUrl(options) {
  var reg = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const src = options.url || options.source;
  var match = src.match(reg);
  if (!match || !match[2]) return null;
  const videoId = match[2];
  return {
    // videoPoster: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
    videoPoster: `https://img.youtube.com/vi/${videoId}/0.jpg`,
    embedUrl: `https://www.youtube.com/embed/${videoId}?rel=0&controls=${options.controls ? 1 : 0}&showinfo=0&enablejsapi=1`
  };
}

function BcYoutube(values) {
  this.props = BcYoutube.props;
  this.values = values;

  this.render = () => BcYoutube.doRender(this.values);
}

BcYoutube.label = 'Youtube Video';
BcYoutube.icon = '<svg viewBox="0 0 334.623 334.623" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="m175.33 287.02c-7e-3 0 0 0 0 0-38.053 0-79.481-1.202-123.12-3.554-25.784-1.414-45.785-21.292-48.632-48.349-4.762-45.2-4.762-90.83 0-135.62 2.841-26.832 22.815-46.71 48.574-48.33 75.271-4.737 152.72-4.737 230.31 0 26.061 1.581 45.586 20.99 48.6 48.304 4.749 43.246 4.756 88.87 6e-3 135.63-2.744 27.038-22.25 46.472-48.535 48.356-33.079 2.364-69.147 3.566-107.2 3.566zm-8.901-226.56c-37.931 0-76.113 1.195-113.48 3.541-19.685 1.234-34.39 16.048-36.594 36.851-4.666 43.895-4.666 88.613 0 132.93 2.204 20.971 16.89 35.778 36.543 36.858 43.413 2.339 84.609 3.535 122.42 3.535 37.751 0 73.51-1.189 106.29-3.528 19.833-1.427 34.57-16.228 36.659-36.839 4.666-45.862 4.666-90.58 6e-3 -132.93-2.294-20.868-17.005-35.688-36.594-36.877-38.53-2.352-77.31-3.541-115.25-3.541zm-31.852 61.331v88.208l84.706-43.805-84.706-44.403z"/></svg>';
BcYoutube.props = {
  source: {
    defaultValue: "https://www.youtube.com/watch?v=AkSCGSxOUIk",
    type: 'youtube'
  },
  // caption: {
  //   defaultValue: 'Video caption goes here.',
  //   type: 'text'
  // },
  width: {
    defaultValue: "wide",
    type: 'choice',
    choices: ['normal', 'wide', 'full']
  },
  controls: {
    defaultValue: true,
    type: 'choice',
    choices: [true, false]
  } // ,
  // type: {
  //   defaultValue: "simple",
  //   type: 'choice',
  //   choices: ['simple', 'wrapped']
  // }

};

BcYoutube.doRender = function (options, showPreview) {
  const videoDetails = processYoutubeUrl(options);
  if (!videoDetails) return '';
  const {
    videoPoster,
    embedUrl
  } = videoDetails;
  let preview = ''; // options.type === 'wrapped' || 

  if (showPreview) preview = `
            <img class="object-cover absolute inset-0 w-full h-full" src="${videoPoster}" />
            <svg class="absolute inset-0 m-auto" style="height: 40px; width: 40px; position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto" fill="#f00" viewBox="0 0 24 24">
                <rect x="8" y="8" width="8" height="8" fill="#fff" />
                <path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
            </svg>
        `;
  let iframe = '';
  let style = "";

  if (!showPreview) {
    style = "padding-bottom: calc(900%/16)";
    iframe = `
            <iframe class="absolute inset-0 w-full h-full" width="100%" height="100%" 
                src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        `;
  } else style = "height: 150px;"; // {'playing': !options.type || options.type === 'simple' || playing}


  return `
        <div class="relative bg-black" style="${style}">
            ${iframe}
            ${preview}
        </div>
    `;
};

BcYoutube.preview = function () {
  return BcYoutube.doRender({
    source: "https://www.youtube.com/watch?v=AkSCGSxOUIk",
    width: 'wide'
  }, true);
};

function BcText(values) {
  this.values = values;

  this.render = () => BcText.doRender(this.values);
}

BcText.label = 'Text';
BcText.icon = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';
BcText.props = {
  text: {
    defaultValue: 'Enter your text here',
    type: 'long-text',
    optional: true
  }
};

BcText.doRender = function (options) {
  return options.text;
};

BcText.preview = function () {
  return BcText.doRender({
    text: "<p>Frost entered the room full of worry, Volkoff had been in a bad m<strong>ood all week and no one</strong> could figure out exactly what was wrong. \"FROST\" Volkoff belowed in his deep maniacal voice as he saw her enter the room. \"I have news for you\" he continued, I've found out ORION's hiding ground he said clearly pleased with himself.</p>"
  });
};

exports.BcAlert = BcAlert;
exports.BcImage = BcImage;
exports.BcQuote = BcQuote;
exports.BcText = BcText;
exports.BcYoutube = BcYoutube;
