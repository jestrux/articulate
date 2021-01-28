import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import BcLinkField from "../BcLinkField";
import BcPexelsSearch from './BcPexelsSearch';

function processYoutubeUrl(url){
    var reg = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    var match = url.match(reg);

    if(!match || !match[2])
        return null;

    return `https://www.youtube.com/embed/${match[2]}?rel=0&showinfo=0&enablejsapi=1`;
}

export default function BcVideoField({
    field,
    onChange = _ => {}
}){
    const { label, value, optional } = field;
    const [val, setVal] = useState(null);
    const [activeTab, setActiveTab] = useState('pexels');

    useEffect(() => {
        if(value) setVal(value)
    }, [value]);

    function handleChange(newValue){
        onChange(newValue);
        setVal(newValue);
    }

    function getActiveStyling(tab){
        return activeTab !== tab ? 'hover:text-gray-500' : 'bg-white shadow-sm border-gray-200 text-red-600 pointer-events-none';
    }
    
    return (
        <div class="-mt-3 -mb-6" style="width: 650px">
            <div className="z-10 relative bg-gray-100 bg-opacity-70 -mx-4 py-2 px-4 flex items-center">
                <button type="button" class={`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('pexels')}`}
                    onClick={() => {setVal(""); setActiveTab('pexels')}}
                >
                    Pexel
                </button>

                <button type="button" class={`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('link')}`}
                    onClick={() => setActiveTab('link')}
                >
                    Youtube
                </button>
            </div>

            <div class="bg-gray overflow-hidden -mx-4" style="height: 380px">
                { activeTab == 'link' && 
                    <div class="h-full flex flex-col">
                        <BcLinkField 
                            field={{
                                ...field,
                                value: processYoutubeUrl(field.value) ? field.value : ''
                            }}
                            onChange={handleChange}
                            placeholder="Click paste to paste youtube link"
                            match-pattern="youtube"
                            match-error="Invalid youtube link"
                        />

                        <div class="flex-1 overflow-y-auto relative">
                            <div class="relative bg-gray-200 shadow rounded overflow-hidden mt-5 mx-12" style="height: 290px">
                                { val && val.length && (
                                    <iframe class="absolute w-full h-full"
                                        src={processYoutubeUrl(val)} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                )}
                            </div>
                        </div>
                    </div>
                }

                { activeTab == 'pexels' && 
                    <BcPexelsSearch onChange={handleChange} />
                }
            </div>
        </div>
    )
}