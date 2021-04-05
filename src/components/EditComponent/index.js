import { h } from 'preact';
import { useContext, useEffect, useState } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';
import EditField from '../EditField';
import EditorField from './EditorField';

export default function EditComponent({opened = false, selectedElement, onChange, onClose}){
    const [el, setEl] = useState(null);
    const { uiElements, onCustomFieldChanged = () => {} } = useContext(ArticulateConfig);
    const [showFieldEditor, setShowFieldEditor] = useState(false);
	const [selectedField, setSelectedField] = useState(null);

    if(!uiElements) return null;

    function fields(){
        if(!el || !el.component)
            return [];
        
        if(!el.options)
            el.options = {};

        const component = uiElements[el.component];
        const fields = [];

        for (const key in component.props) {
            const {type, defaultValue, ...otherFields} = component.props[key];
            const field = {type, defaultValue, ...otherFields};

            if (el.options[key] !== undefined) 
                field.value = el.options[key];
            else if (defaultValue !== undefined){
                el.options[key] = defaultValue;
                field.value = defaultValue;
            }

            field.name = key;
            fields.push(field);
        }

        return fields;
    }

    useEffect(() => {
        setEl(JSON.parse(JSON.stringify({...selectedElement})));
    }, [selectedElement]);

    function handleChange(value, field){
        const options = {
            ...el.options, [field]: value
        };

        setEl({...el, options});
        
        onChange({...el, options});
    }

    function handleSaveElement(e){
        e.preventDefault();
        onChange(el.options);
        onClose();
    }

    function handleChangeCustomField(field){
        setSelectedField({...field, autoSave: true});
        setTimeout(() => {
            setShowFieldEditor(true);
        }, 100);
    }

    function handleCustomFieldChanged(value){
        handleChange(value, selectedField.name);
		onCustomFieldChanged(selectedField, value);
	}

	function handleCloseCustomFieldEditor(){
		setShowFieldEditor(false);
		onCustomFieldChanged(selectedField, undefined);
	}

    return (
        <div class={`flex fixed inset-0 z-50 ${!opened && 'pointer-events-none'}`}>
            <div className={`bg-black bg-opacity-25 fixed inset-0 transition ${!opened && 'opacity-0'}`}
                onClick={onClose}></div>
                
            <div class={`ml-auto flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-white shadow overflow-hidden transition ${!opened && 'transform translate-x-full'}`}>
                <div class="p-4 border-b flex items-center justify-between">
                    <h3 class="text-xl font-semibold">
                        Customize { el ? el.label || 'Component' : '' }
                    </h3>

                    <button class="focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300"
                        onClick={onClose}
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="p-4 flex-1 overflow-y-auto">
                    {/* <form action="#" onSubmit={handleSaveElement}> */}
                        { fields().map(field => (
                            <div class="mb-4">
                                <EditorField 
                                    field={field} 
                                    inlineCustomEditor={false}
                                    onEditCustomField={handleChangeCustomField}
                                    onChange={(value) => handleChange(value, field.name)} 
                                />
                            </div>
                        )) }
                    {/* </form> */}

                    <EditField
                        selectedField={selectedField} 
                        opened={showFieldEditor} 
                        onChange={handleCustomFieldChanged}
                        onClose={handleCloseCustomFieldEditor}
                    />
                </div>
            </div>
        </div>
    );
}