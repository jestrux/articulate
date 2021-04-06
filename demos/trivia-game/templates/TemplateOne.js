function TemplateOne (values){
    this.values = values;
    this.render = () => TemplateOne.doRender(this.values);
}

TemplateOne.label = 'Regular';

TemplateOne.props = {
    theme: {
        defaultValue: 'purple',
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
    image: {
        defaultValue: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        type: 'image'
    },
    question: {
        defaultValue: 'Based in silicon in Silicon valley, what software giant makes the surface computer?',
        type: 'long text'
    },
    choices: {
        defaultValue: 'Windows, Apple, Red Mi, Microsoft',
        type: 'tags'
    },
    answer: {
        defaultValue: 'D',
        type: 'radio',
        choices: ['A', 'B', 'C', 'D']
    },
}

TemplateOne.doRender = function(options) {
    function getAnswerTemplate(fieldName, answer, value){
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
                    options.choices.split(",").slice(0, 4).map((choice, index) => (
                        getAnswerTemplate(randomName, choice.trim(), ['A', 'B', 'C', 'D'][index])
                    )).join('')
                }
            </div>`;
    }

    return `
        <div class="rounded-lg overflow-hidden flex-shrink-0 text-md p-3 flex flex-col justify-between items-center space-y-5 border-2 bg-gradient-to-br from-${options.theme}-600 via-${options.theme}-500 to-${options.theme}-500 text-white">
            <img class="rounded-lg h-40 w-full object-cover mb-3" src="${options.image}" />
            <p class="font-black leading-normal text-center tracking-wide tracking-wider">
                ${options.question}
            </p>
            ${answers}
        </div>
    `;
}

TemplateOne.preview = function () {
    const preview = TemplateOne.doRender({
        theme: 'purple',
        image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        question: 'Based in silicon in Silicon valley, what is the name of the company that makes this computer?',
        choices: 'Windows, Apple, Red Mi, Microsoft'
    });

    return `<div>${preview}</div>`
}

export default TemplateOne;