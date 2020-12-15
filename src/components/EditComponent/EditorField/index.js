import { h } from 'preact';

export default function EditorField({field, nolabel, onChange}){
    const { name, label, choices, defaultValue, value, type, ...fieldMeta } = field;
    // const showLabel = !nolabel && !['image', 'youtube'].includes(field.type);
    const showLabel = !nolabel;

    function handleChange(e){
        onChange(e.target.value);
    }

    function fieldInput(){
        switch (field.type) {
            case 'choice':
                return(
                    <select required={!field.optional} class="border-2 w-full px-2 py-1 rounded" defaultValue={field.value} value={field.value} onInput={handleChange}
                        {...fieldMeta}
                    >
                        <option disabled value="">Choose {field.name}</option>

                        { field.choices.map(choice => (
                            <option value={choice}>
                                { choice }
                            </option>
                        )) }
                    </select>
                );
            case 'long-text':
                return(
                    <textarea required={!field.optional} class="border-2 w-full px-2 py-1 rounded" placeholder={field.defaultValue} rows="5" value={field.value} onInput={handleChange}
                        {...fieldMeta}
                    ></textarea>
                );
            default: {
                const supportedInputTypes = [
                    'text', 'number', 'color', 'range'
                ];

                const fieldType = supportedInputTypes.includes(field.type) ? field.type : 'text';

                return (
                    <input required={!field.optional} class="border-2 w-full px-2 py-1 rounded" type={fieldType} value={field.value} onInput={handleChange} 
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