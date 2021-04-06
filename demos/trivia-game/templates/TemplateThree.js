function TemplateThree (values){
    this.values = values;
    this.render = () => TemplateThree.doRender(this.values);
}

TemplateThree.label = 'Image Answers';

TemplateThree.props = {
    theme: {
        defaultValue: 'yellow',
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

    question: {
        defaultValue: "'Beyond the night' by revered french artist B. Voss is famous for which scene?",
        type: 'long text'
    },
    choiceA: {
        defaultValue: 'https://images.unsplash.com/photo-1593296618860-4cbcb8dafab2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        type: 'image'
    },
    choiceB: {
        defaultValue: "https://images.unsplash.com/photo-1580857433978-53c3acb51aa3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",
        type: 'image'
    },
    choiceC: {
        defaultValue: "https://images.unsplash.com/photo-1592916948459-69101ff4b06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",
        type: 'image'
    },
    choiceD: {
        defaultValue: "https://images.unsplash.com/photo-1548093190-e40f9b1b4082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ",
        type: 'image'
    },
    answer: {
        defaultValue: "B",
        type: 'radio',
        choices: ['A', 'B', 'C', 'D']
    },
}

TemplateThree.doRender = function(options){
    function getAnswerTemplate(randomName, answer, value){
        if(!answer || !answer.length) return '';

        const randomId = (Math.random() * 1e32).toString(36);

        return `
            <div class="flex w-full TemplateThreeAnswer relative overflow-hidden">
                <input type="radio" name="${randomName}" id="${randomId}" class="hidden" value="${value}" />
                <label for="${randomId}" class="bg-transparent border border-white font-extrabold text-white text-xs tracking-wider uppercase h-full w-full text-center">
                    <img class="absolute inset-0 h-full w-full object-cover" src="${answer}" />
                    <div class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25">
                        <div class="border-2 bg-${options.theme}-500 border-2 rounded-full w-8 h-8 flex items-center justify-center">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                    </div>
                </label>
            </div>
        `;
    }

    let answers = `<div style="min-height: 250px;" class="flex-1 flex-shrink-0 w-full grid grid-cols-2 gap-1">`;
    const randomName = (Math.random() * 1e32).toString(36);
    const { choiceA, choiceB, choiceC, choiceD } = options;

    if(choiceA || choiceB || choiceC || choiceD){
        answers += getAnswerTemplate(randomName, choiceA, 'A');
        answers += getAnswerTemplate(randomName, choiceB, 'B');
        answers += getAnswerTemplate(randomName, choiceC, 'C');
        answers += getAnswerTemplate(randomName, choiceD, 'D');
    }
    answers += `</div>`;

    return `
        <div class="rounded-lg overflow-hidden flex-shrink-0 text-md flex flex-col justify-between items-center space-y-5 border-2 bg-gradient-to-br from-${options.theme}-600 via-${options.theme}-500 to-${options.theme}-500 text-white">
            <p class="flex-1 flex flex-col items-center justify-center mt-3 px-3 font-black leading-normal text-center tracking-wide tracking-wider">
                ${options.question}
            </p>
            ${answers}
        </div>
    `;
}

TemplateThree.preview = function () {
    const preview = TemplateThree.doRender({
        theme: 'yellow',
        question: "'Beyond the night' by revered french artist B. Voss is famous for which scene?",
        choiceA: 'https://images.unsplash.com/photo-1593296618860-4cbcb8dafab2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        choiceB: 'https://images.unsplash.com/photo-1580857433978-53c3acb51aa3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        choiceC: 'https://images.unsplash.com/photo-1592916948459-69101ff4b06f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
        choiceD: 'https://images.unsplash.com/photo-1548093190-e40f9b1b4082?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE2MTY1fQ',
    });

    return `<div>${preview}</div>`
}

export default TemplateThree;