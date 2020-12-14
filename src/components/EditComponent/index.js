import { h } from 'preact';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';
import EditorField from './EditorField';

export default function EditComponent({opened = false, close, selectedElement, onSave}){
    const [el, setEl] = useState(null);
    const { uiElements } = useContext(ArticulateConfig);

    if(!uiElements) return null;

    const fields = useCallback(() => {
        if(!el || !el.component)
            return [];
        
        if(!el.options)
            el.options = {};

        const component = uiElements[el.component];
        const fields = [];

        for (const key in component.props) {
            const {type, defaultValue, ...otherFields} = component.props[key];
            const field = {type, defaultValue, ...otherFields};

            if(type.indexOf('text') == -1 && !el.options[key] && defaultValue !== null)
                field.value = defaultValue;
            else if(el.options[key])
                field.value = el.options[key];

            field.name = key;
            fields.push(field);
        }

        return fields;
    }, [el]);

    useEffect(() => {
        setEl(JSON.parse(JSON.stringify({...selectedElement})));
    }, [selectedElement])

    function handleSaveElement(e){
        e.preventDefault();
        onSave(el);
    }

    return (
        <div class={`flex fixed inset-0 z-50 ${!opened && 'pointer-events-none'}`}>
            <div className={`bg-black bg-opacity-25 fixed inset-0 transition ${!opened && 'opacity-0'}`}
                onClick={close}></div>
                
            <div class={`ml-auto flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-white shadow overflow-hidden transition ${!opened && 'transform translate-x-full'}`}>
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="text-xl font-semibold">
                        Customize { el ? el.label || 'Component' : '' }
                    </h3>

                    <button class="focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300"
                        onClick={close}
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="p-4 flex-1 overflow-y-auto">
                    <form action="#" onSubmit={handleSaveElement}>
                        { fields().map(field => (
                            <div class="mb-4">
                                <EditorField field={field} onChange={value => el.options[field.name] = value } />
                            </div>
                        )) }

                        <button type="submit" class="px-5 py-2 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full w-full">
                            Save Changes
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}