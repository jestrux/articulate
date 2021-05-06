function SlideWithImage (values){
    this.values = values;
    this.render = () => SlideWithImage.doRender(this.values);
}

SlideWithImage.label = 'Slide With Image';

SlideWithImage.props = {
    theme: {
        defaultValue: 'black',
        type: 'radio',
        choices: ['black', 'red'],
        choiceType: "color"
    },
    image: {
        defaultValue: 'https://images.unsplash.com/photo-1587554801471-37976a256db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwxfDF8YWxsfDE3fHx8fHx8Mnx8MTYyMDIwNzE5Mg&ixlib=rb-1.2.1&q=80&w=800',
        type: 'image'
    },
    mini: {
        defaultValue: false,
        type: 'boolean',
    },
}

SlideWithImage.doRender = function(options) {
    return `
        <div class="rounded-lg overflow-hidden flex-shrink-0 text-md p-3 flex flex-col justify-between items-center space-y-5 border-2 bg-gradient-to-br from-${options.theme}-600 via-${options.theme}-500 to-${options.theme}-500 text-white">
            <img class="rounded-lg h-40 w-full object-cover mb-3" src="${options.image}" />
            <p class="font-black leading-normal text-center tracking-wide tracking-wider">
                ${options.question}
            </p>
        </div>
    `;
}

SlideWithImage.preview = function () {
    const preview = SlideWithImage.doRender({
        theme: 'red',
        image: 'https://images.unsplash.com/photo-1587554801471-37976a256db0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE2NXwxfDF8YWxsfDE3fHx8fHx8Mnx8MTYyMDIwNzE5Mg&ixlib=rb-1.2.1&q=80&w=800',
        mini: false
    });

    return `<div>${preview}</div>`
}

export default SlideWithImage;