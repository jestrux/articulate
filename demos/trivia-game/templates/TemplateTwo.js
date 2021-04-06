function TemplateTwo(values) {
    this.values = values;
    this.render = () => TemplateTwo.doRender(this.values);
}

TemplateTwo.label = 'One plus One';

TemplateTwo.props = {
    theme: {
        defaultValue: 'blue',
        type: 'radio',
        choices: ['purple', 'green', 'yellow', 'red', 'blue', 'pink', 'gray'],
        renderChoice(choice, selected){
            return `
                <span class="bg-gradient-to-br from-${choice}-600 via-${choice}-500 to-${choice}-500 rounded-full inline-block p-0.5" style="width: 30px; height: 30px">
                    <span class="border-2 border-${selected ? 'white' : 'transparent'} rounded-full w-full h-full block"></spa>
                </span>
            `;
        }
    },
    image1: {
        defaultValue: 'https://images.unsplash.com/photo-1547974996-050bf23b6196?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        type: 'image'
    },
    image2: {
        defaultValue: 'https://images.unsplash.com/photo-1566313891923-24df87b1b29f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        type: 'image'
    },
    choices: {
        defaultValue: "Bushwart, 75% Wool, Jamaica, Sheila",
        type: 'text'
    },
    answer: {
        defaultValue: "C",
        type: 'radio',
        choices: ['A', 'B', 'C', 'D']
    }
}

TemplateTwo.doRender = function (options) {
    function getAnswerTemplate(randomName, answer, value){
        if(!answer || !answer.length) return '';

        const randomId = (Math.random() * 1e32).toString(36);

        return `
            <div class="flex w-full TemplateOneAnswer">
                <input type="radio" name="${randomName}" id="${randomId}" class="hidden" value="${value}" />
                <label for="${randomId}" class="bg-transparent border border-white font-extrabold px-3 py-1 rounded-full text-white text-xs tracking-wider uppercase w-full text-center">
                    ${answer}
                </label>
            </div>
        `;
    }

    let answers = '';
    const randomName = (Math.random() * 1e32).toString(36);
    if(options.choices && options.choices.length){
        answers = `
            <div class="w-full grid grid-cols-2 gap-3">
                ${
                    options.choices.split(",").slice(0, 4).map((choice, index) => {
                        return getAnswerTemplate(randomName, choice.trim(), ['A', 'B', 'C', 'D'][index]);
                    }).join('')
                }
            </div>`;
    }

    return `
            <div class="rounded-lg overflow-hidden flex-shrink-0 text-md p-3 flex flex-col sjustify-between items-center space-y-5 border-2 bg-gradient-to-br from-${options.theme}-600 via-${options.theme}-500 to-${options.theme}-500 text-white">
                <div class="flex w-full h-40 mb-1 relative rounded-lg overflow-hidden bg-white bg-opacity-50"
                    style="min-height: 200px"
                >
                    <img style="clip-path: polygon(0 0, 50% 0, 45% 100%, 0 100%);" class="absolute inset-0 h-full w-full object-cover" src="${options.image1}" />
                    <img style="clip-path: polygon(50% 0, 100% 0, 100% 100%, 45% 100%);" class="absolute inset-0 h-full w-full object-cover" src="${options.image2}" />
                    <div class="absolute inset-0 m-auto border-2 border-white bg-${options.theme}-500 rounded-full w-10 h-10 flex items-center justify-center" style="right: 10px">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </div>
                </div>
                ${answers}
            </div>
        `;
}

TemplateTwo.preview = function () {
    const preview = TemplateTwo.doRender({
        theme: 'blue',
        image1: 'https://images.unsplash.com/photo-1547974996-050bf23b6196?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        image2: 'https://images.unsplash.com/photo-1566313891923-24df87b1b29f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        choices: "Bushwart, 75% Wool, Jamaica, Sheila",
    });

    return `<div>${preview}</div>`
}

export default TemplateTwo;