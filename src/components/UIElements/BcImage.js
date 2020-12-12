function BcImage(values){
    this.props = BcImage.props;
    this.values = values;
    this.render = () => BcImage.doRender(this.values);
}

BcImage.label = 'Image';
BcImage.icon = '<svg viewBox="0 0 24 24"><path d="M21 3H3C2 3 1 4 1 5v14c0 1.1.9 2 2 2h18c1 0 2-1 2-2V5c0-1-1-2-2-2zM5 17l3.5-4.5 2.5 3.01L14.5 11l4.5 6H5z"/></svg>';

BcImage.props = {
    source: {
        defaultValue: null,
        type: 'image'
    },
    caption: {
        defaultValue: 'Image caption goes here',
        type: 'text'
    },
    width: {
        defaultValue: "normal",
        type: 'choice',
        choices: ['normal', 'wide', 'full']
    }
}

BcImage.doRender = function(options){
    let caption = '';
    if(options.caption && options.caption.length)
        caption = `<small>${options.caption}</small>`;

    return `
        <div class="text-center">
            <img class="${options.width}" src="${options.source}" alt="${options.caption}" />
            ${caption}
        </div>
    `;
}

BcImage.preview = function(){
    const options = {
        source: "https://images.unsplash.com/photo-1542690563-ca10289ac117?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",
        caption: 'Forlorn railway, sunrays blither',
        width: "normal"
    };

    return `
        <div class="text-center">
            <img style="height: 120px; width: 100%; object-fit: cover;" class="${options.width}" src="${options.source}" alt="${options.caption}" />
            <small>${options.caption}</small>
        </div>
    `;
}

export default BcImage;