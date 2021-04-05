import { h } from 'preact';

export default function CustomInputField({
    field,
    onChange = _ => {}
}){
    const { label, value } = field;

    return (
        <div>
            <div class="relative border-2 rounded overflow-hidden">
                <input class="text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2 pointer-events-none"
                    type="text" 
                    value={value}
                />
    
                <div className="z-10 absolute inset-y-0.5 right-0.5 bg-white bg-opacity-90 flex items-center">
                    <button type="button" class={`focus:outline-none shadow-sm border text-xs uppercase tracking-wide rounded-sm font-medium h-full flex items-center py-1 px-2 ${ value && value.length ? 'bg-gray-100 border-gray-300 text-gray-600' : 'border-gray-200 text-gray-400'}`}
                        onClick={() => onChange(field)}
                    >
                        { value && value.length ? 'Change' : 'Pick'}
                    </button>
                </div>
            </div>
        </div>
    )
}