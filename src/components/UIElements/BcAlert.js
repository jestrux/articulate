function BcAlert(values){
    this.values = values;
    this.render = () => BcAlert.doRender(this.values);
}

BcAlert.label = 'Alert';
BcAlert.icon = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';

BcAlert.props = {
    type: {
        defaultValue: 'info',
        type: 'radio',
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
}

BcAlert.doRender = function(options) {
    let caption = '';
    if (options.caption && options.caption.length)
        caption = `<small>${options.caption}</small>`;

    let icon = `<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

    if (options.type !== 'info')
        icon = `<svg class="w-5 mt-1 mr-2 -ml-1" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>`;

    let title = '';
    if (options.title)
        title = `<strong>${options.title}</strong>`;

    const theme = {
        'info': 'blue',
        'error': 'red',
        'warning': 'yellow'
    }[options.type]

    return `
        <div class="inline-flex max-w-lg items-start border-l-4 py-2 px-4 bg-${theme}-100 border-${theme}-500 ${options.type}">
            ${icon}
            <div class="flex-1">
                ${title}
                ${options.text}
            </div>
        </div>
    `;
}

BcAlert.preview = function () {
    return BcAlert.doRender({
        type: 'info',
        title: 'Pssst',
        text: 'Due to many requests from loyalties, we\'re moving our services out of town.'
    });
}

export default BcAlert;