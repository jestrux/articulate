import { h } from 'preact';
import { useEffect, useState, useContext } from 'preact/hooks';

import EditorField from './EditComponent/EditorField';
import ArticulateConfig from "../ArticulateConfig";

export default function EditField({opened = false, selectedField, onChange, onClose}){
    const context = useContext(ArticulateConfig);
    
    const [field, setField] = useState(null);
    const [autoSave, setAutosave] = useState(false);
    const autoSaveFields = ['image', 'video'];

    useEffect(() => {
        setField(JSON.parse(JSON.stringify({...selectedField})));
        if(!selectedField || selectedField.autoSave === undefined)
            setAutosave(selectedField && autoSaveFields.includes(selectedField.type));
        else
            setAutosave(selectedField.autoSave);
    }, [selectedField])

    function handleOnChange(value){
        setField({...field, value});

        if(context.autoSaveCustomField){
            onChange(value);

            if(autoSave) onClose();
        }
    }

    function handleSaveElement(e){
        e.preventDefault();
        onChange(field.value);
        onClose();
    }

    return (
        <div class={`flex fixed inset-0 z-50 ${!opened && 'pointer-events-none'}`}>
            <div className={`bg-black bg-opacity-25 fixed inset-0 transition ${!opened && 'opacity-0'}`}
                onClick={onClose}></div>
                
            <div class={`m-auto flex flex-col relative z-10 bg-white shadow-lg rounded overflow-hidden transition ${!opened && 'opacity-0 transform translate-y-full'}`}
                style="min-width: 500px"
            >
                <div class="py-3 px-4 border-b flex items-center justify-between">
                    <h3 class="text-lg font-semibold capitalize">
                        Edit { field ? field.label || field.type || 'Field' : '' }
                    </h3>

                    <button class="focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300"
                        onClick={onClose}
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="px-4 pt-3 pb-6 flex-1 overflow-y-auto" style="max-height: 100vh">
                    <form action="#" onSubmit={handleSaveElement}>
                        { field && <EditorField field={field} onChange={handleOnChange} /> }

                        { !context.autoSaveCustomField && (
                            <div className="mt-3 flex justify-end">
                                <button type="submit" class="px-5 py-1 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full">
                                    Save
                                </button>
                            </div>
                        ) }
                    </form>
                </div>
            </div>
        </div>
    );
}