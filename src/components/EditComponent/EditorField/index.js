import { h } from 'preact';

export default function EditorField({field, nolabel, onChange}){
    const showLabel = !nolabel && !['image', 'youtube'].includes(field.type);

    function handleChange(e){
        onChange(e.target.value);
    }

    function fieldInput(){
        switch (field.type) {
            case 'choice':
                return(
                    <select required={!field.optional} class="border-2 w-full px-2 py-1 rounded" defaultValue={field.value} value={field.value} onInput={handleChange}>
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
                    <textarea required={!field.optional} class="border-2 w-full px-2 py-1 rounded" placeholder={field.defaultValue} rows="5" value={field.value} onInput={handleChange}></textarea>
                );
            default:
                return (
                    <input required={!field.optional} class="border-2 w-full px-2 py-1 rounded" type="text" value={field.value} onInput={handleChange} />
                );
        }
    }

    return (
        <div class="">
            { showLabel && <label class="capitalize block">{field.name}</label> }

            { fieldInput() }
        </div>
    );
}