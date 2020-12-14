function BcImage(values){
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
    },
    // width: {
    //     defaultValue: "normal",
    //     type: 'choice',
    //     choices: ['normal', 'wide', 'full']
    // },
}

BcImage.doRender = function(options){
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
    if(options.caption && options.caption.length)
        caption = `<small>${options.caption}</small>`;

    let imageClasses = `object-${crop[options.crop] || 'cover'} `;
    imageClasses += `rounded-${corners[options.edgeCorners]} `;
    if(options.maxHeight)
        imageClasses += "absolute left-0 top-0 w-full h-full ";

    return `
        <div class="text-center">
            <div class="relative" style="height: ${options.maxHeight}">
                <img class="${imageClasses}" src="${options.source}" alt="${options.caption}" />
            </div>
            ${caption}
        </div>
    `;
}

BcImage.preview = function(){
    const options = {
        source: "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000",
        caption: 'Park in poznan poland by Erik Witsoe',
        edgeCorners: "medium",
        maxHeight: "200px"
    };

    return BcImage.doRender(options);
}

export default BcImage;