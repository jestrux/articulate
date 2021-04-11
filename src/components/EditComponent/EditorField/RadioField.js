import { h } from 'preact';

export default function RadioField({field, onChange}){
    let { name, label, choices, defaultValue, value, type, ...fieldMeta } = field;
    if(value === undefined && defaultValue)
        value = defaultValue;

    function renderChoice(choice, selected, randomName){
        return (
            <label class={`cursor-pointer text-sm inline-flex items-center rounded px-3 py-1 border-2 mb-2 ${selected ? 'bg-gray-200 border-gray-400' : 'border-gray-300'}`}>
                <input class="-ml-1 mr-2" type="radio" name={randomName} checked={selected} value={choice} onChange={onChange} />
                {choice}
            </label>
        );
    }

    function renderColorChoice(color, selected){
        return `
            <span class="rounded-full bg-gray-500 inline-block p-0.5" style="width: 30px; height: 30px; background: ${color}">
                <span class="border-2 border-${selected ? 'white' : 'transparent'} rounded-full w-full h-full block"></spa>
            </span>
        `;
    }

    function renderChoices(){
        return (
            <div class="flex items-center text-md text-gray-700 space-x-3">
                { 
                    choices.map((choice, index) => {
                        const selected = choice == value;
                        const randomName = (Math.random() * 1e32).toString(36);

                        if(field.renderChoice){
                            return (
                                <label class="cursor-pointer">
                                    <input class="hidden" type="radio" name={randomName} checked={selected} value={choice} onChange={onChange} />

                                    {  h( "span", { innerHTML: field.renderChoice(choice, selected) }) }
                                </label>
                            )
                        }
                        else if(field.choiceType == "color"){
                            let color = choice;
                            if(field.colors)
                                color = field.colors[index];

                            return (
                                <label class="cursor-pointer">
                                    <input class="hidden" type="radio" name={randomName} checked={selected} value={choice} onChange={onChange} />

                                    {  h( "span", { innerHTML: renderColorChoice(color, selected) }) }
                                </label>
                            )
                        }

                         
                        return renderChoice(choice, selected, randomName);
                    })
                }
            </div>
        );
    }

    return (
        <div class="mt-1">
            { renderChoices() }
        </div>
    );
}