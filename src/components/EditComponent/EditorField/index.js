import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import autosize from 'autosize';
import CustomEditFields from "./CustomEditFields";
import CustomInputField from "./CustomInputField";
import RadioField from './RadioField';
import LinkField from './BcLinkField';

export default function EditorField({
    inlineCustomEditor = true, 
    field, nolabel, onChange,
    onEditCustomField
}){
    const { name, label, choices, defaultValue, value, type, ...fieldMeta } = field;
    // const showLabel = !nolabel && !['image', 'youtube'].includes(field.type);
    const showLabel = !nolabel && !inlineCustomEditor;
    const expandableTextArea = useRef(null);
    useEffect(() => {
        if(expandableTextArea && expandableTextArea.current)
            autosize(expandableTextArea.current);
    }, [type]);

    function handleChange(e){
        let newValue = e;

        if(e && e.target){
            newValue = e.target.value;

            if(type == "boolean")
                newValue = e.target.checked;
        }
            
        onChange(newValue);
    }

    function fieldInput(){
        const CustomField = CustomEditFields[`${field.type}`];

        if(CustomField){
            if(inlineCustomEditor)
                return (
                    <CustomField 
                        field={field} onChange={onChange} 
                    />
                );
            else{
                return(
                    <CustomInputField 
                        field={field}
                        onChange={onEditCustomField} 
                    />
                )
            }
        }
            
        switch (field.type) {
            case 'choice':
                return(
                    <div className="relative">
                        <select required={!field.optional} 
                            class="border-2 rounded text-lg leading-none h-10 w-full px-3 py-2" 
                            style="appearance: none"
                            defaultValue={field.value} value={field.value} onInput={handleChange}
                            {...fieldMeta}
                        >
                            <option disabled value="">Choose {field.name}</option>

                            { field.choices.map(choice => (
                                <option value={choice}>
                                    { choice }
                                </option>
                            )) }
                        </select>

                        <svg class="absolute inset-y-0 my-auto right-2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                );

            case 'radio':
                return(
                    <RadioField field={field} onChange={handleChange} />
                );
            case 'link':
                return(
                    <LinkField field={field} onChange={handleChange} />
                );
            case 'boolean':
                return(
                    <label class={`cursor-pointer border-none mt-1 inline-flex items-center rounded text-lg leading-none h-6 w-10 ${value === true ? 'bg-blue-500' : 'bg-gray-300'}`} style="padding: 3px">
                        <input class="hidden" type="checkbox" checked={value === true} onClick={handleChange} />
                        <span className={`inline-block bg-white rounded-sm shadow w-1/2 h-full transition-transform ${value === true && 'transform translate-x-full'}`}></span>
                    </label>
                );
            case 'long-text':
            case 'long text':
                return(
                    <textarea ref={expandableTextArea} required={!field.optional} class="border-2 rounded text-lg w-full px-3 py-2 resize-none" 
                        rows="1"
                        placeholder={field.placeholder} 
                        value={field.value} 
                        onInput={handleChange}
                        {...fieldMeta}
                    ></textarea>
                );
            default: {
                const supportedInputTypes = [
                    'text', 'number', 'color', 'range'
                ];

                const fieldType = supportedInputTypes.includes(field.type) ? field.type : 'text';

                return (
                    <input required={!field.optional} class="border-2 rounded text-lg h-10 w-full px-3 py-2" type={fieldType} value={field.value} onInput={handleChange} 
                        {...fieldMeta}
                    />
                );
            }
        }
    }

    return (
        <div class="">
            { showLabel && <label class="capitalize block">{label || name}</label> }

            { fieldInput() }
        </div>
    );
}