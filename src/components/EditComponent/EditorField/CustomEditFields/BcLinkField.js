import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

const linkMatchPattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
const youtubeMatchPattern = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

export default function LinkField({
    field,
    matchPattern = linkMatchPattern, 
    matchError = "Invalid URL", 
    onChange = _ => {}
}){
    const { label, placeholder, value, optional } = field;
    const [error, setError] = useState(null);
    const [val, setVal] = useState(null);

    useEffect(() => {
        if(value) setVal(value)
    }, [value]);

    function _isValidURL(str){
        if(matchPattern == "youtube"){
            const match = _parseYoutubeUrl(str);
            return match && match[2] && match[2].length >= 11;
        }
        return matchPattern.test(str);
    }

    async function _parseYoutubeUrl(url){
        return url.match(youtubeMatchPattern);
    }

    async function getClipboardText(){
        try {
            const text = await navigator.clipboard.readText();
            return text;
        } catch (err) {
            console.error('Failed to read clipboard contents: ', err);
            setError('Failed to read clipboard contents');
            return false;
        }
    }

    async function handlePasteButtonClicked() {
        setError(null);
        if(val && val.length){
            setVal("");
            // onChange("")
        }
        else{
            try {
                const text = await getClipboardText();
                if(_isValidURL(text)){
                    setVal(text);
                    onChange(text);
                }
                else
                    setError(matchError);
            } catch (error) {
                setError("Unknown error occured");
                console.log("Failed to paste link: ", error);
            }
        }
    }

    function placeholderText(){
        if(placeholder)
            return placeholder;
        const label = field.label || "link";
        return `Click paste to paste ${label.toLowerCase()}`;
    }
    
    return (
        <div>
            <div class="relative border-2 rounded overflow-hidden">
                <input class="text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2 pointer-events-none"
                    type="text" 
                    required={!optional}
                    value={val} 
                    placeholder={placeholderText()} 
                    onChange={e => onChange(e.target.value)}
                />
    
                <div className="z-10 absolute inset-y-0 right-0 px-2 bg-white bg-opacity-90 flex items-center">
                    <button type="button" class={`focus:outline-none shadow-sm border text-xs uppercase tracking-wide rounded-sm font-medium py-1 px-2 ${ val && val.length ? 'bg-gray-100 border-gray-300 text-gray-600' : 'border-gray-200 text-gray-400'}`}
                        onClick={handlePasteButtonClicked}
                    >
                        { val && val.length ? 'Clear' : 'Paste'}
                    </button>
                </div>
            </div>

            { error && (
                <span id="fullNameError" class="text-sm block mt-1 ml-1 text-red-500">
                    { error }
                </span>
            ) }
        </div>
    )
}