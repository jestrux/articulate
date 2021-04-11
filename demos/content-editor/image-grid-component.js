function ImageGrid(values){
    this.values = values;
    this.images = [
        "https://images.pexels.com/photos/5152960/pexels-photo-5152960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "https://images.unsplash.com/photo-1608600927239-e968bee5e0f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8YWxsfDIyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080",
        "https://images.unsplash.com/photo-1508395141412-e3e7f4851217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDYyOHx8bGl0JTIwdXB8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
        "https://images.unsplash.com/photo-1524742567765-32ad015be9fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDQxNXx8bGl0JTIwdXB8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080",
    ];
    this.render = () => ImageGrid.doRender(this.values, this.images);
}

ImageGrid.label = 'Image Grid';

ImageGrid.props = {
    order: {
        defaultValue: 'normal',
        type: 'radio',
        choices: ['normal', 'reverse'],
        renderChoice(choice, selected){
            const orderArray = choice === 'normal' ? [1,2,2,1] : [2,1,1,2];
            const gridItems = orderArray.map(span => `
                <span class="opacity-100 rounded-sm overflow-hidden col-span-${span} bg-gray-400 relative"></span>
            `);

            return `
                <span class="rounded px-2 pt-2 border-2 ${selected ? 'border-gray-400' : 'border-gray-300'} mb-2 inline-block" style="width: 100px">
                    <span class="grid grid-cols-3 gap-1 ${selected ? 'opacity-100' : 'opacity-40'}" style="height: 25px;">
                        ${gridItems.join('')}
                    </span>
                    <span class="capitalize font-medium text-xs text-center w-full inline-block ${selected ? 'opacity-100' : 'opacity-50'}">${choice}</span>
                </span>
            `;
        }
    },
    spacing: {
        defaultValue: 'normal',
        type: 'radio',
        choices: ['normal', 'wide'],
        renderChoice(choice, selected){
            const gridItems = [1,2,2,1].map(span => `
                <span class="opacity-100 rounded-sm overflow-hidden col-span-${span} bg-gray-400 relative"></span>
            `);
            const gap = choice == 'normal' ? 1 : '2';

            return `
                <span class="rounded px-2 pt-2 border-2 ${selected ? 'border-gray-400' : 'border-gray-300'} mb-2 inline-block" style="width: 100px">
                    <span class="grid grid-cols-3 gap-${gap} ${selected ? 'opacity-100' : 'opacity-40'}" style="height: 25px;">
                        ${gridItems.join('')}
                    </span>
                    <span class="capitalize font-medium text-xs text-center w-full inline-block ${selected ? 'opacity-100' : 'opacity-50'}">${choice}</span>
                </span>
            `;
        }
    },
    layout: {
        defaultValue: 'default',
        type: 'radio',
        choices: ['default', 'brickly', 'couture'],
        renderChoice(choice, selected){
            const opacityArray = {
                'default': [100,100,100,100],
                'brickly': [0,100,100,0],
                'couture': [0,100,100,100],
            }[choice];
            const gridItems = [1,2,2,1].map((span, index) => `
                <span class="opacity-${opacityArray[index]} rounded-sm overflow-hidden col-span-${span} bg-gray-400 relative"></span>
            `);

            return `
                <span class="rounded px-2 pt-2 border-2 ${selected ? 'border-gray-400' : 'border-gray-300'} mb-2 inline-block" style="width: 100px">
                    <span class="grid grid-cols-3 gap-1 ${selected ? 'opacity-100' : 'opacity-40'}" style="height: 25px;">
                        ${gridItems.join('')}
                    </span>
                    <span class="capitalize font-medium text-xs text-center w-full inline-block ${selected ? 'opacity-100' : 'opacity-50'}">${choice}</span>
                </span>
            `;
        }
    },
    roundedCorners: {
        defaultValue: true,
        type: 'boolean'
    }
}

ImageGrid.doRender = function(options, images) {
    const normalOrder = options.order === 'normal';
    const orderArray = normalOrder ? [1,2,2,1] : [2,1,1,2];
    const opacityArray = {
        'default': [100,100,100,100],
        'brickly': normalOrder ? [0,100,100,0] : [100,0, 0, 100],
        'couture': normalOrder ? [0,100,100,100] : [100,100, 0, 100],
    }[options.layout];
    
    const gap = options.spacing == 'normal' ? 3 : 10;

    const gridItems = orderArray.map((span, index) => `
        <div class="opacity-${opacityArray[index]} ${options.roundedCorners && 'rounded'} overflow-hidden col-span-${span} bg-gray-500 relative">
            <img class="absolute inset-0 w-full h-full object-cover object-center" src="${images[index]}" alt="" />
        </div>
    `);

    return `
        <div class="grid grid-cols-3 gap-${gap}" style="height: 500px;">
            ${gridItems.join('')}
        </div>
    `;
}

export default ImageGrid;