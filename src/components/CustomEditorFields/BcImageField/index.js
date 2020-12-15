import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import BcLinkField from "../BcLinkField";
import BcUnsplashSearch from './BcUnsplashSearch';
import BcGiphySearch from './BcGiphySearch';

export default function BcImageField({
    field,
    onChange = _ => {}
}){
    const { label, value, optional } = field;
    const [val, setVal] = useState(null);
    const [activeTab, setActiveTab] = useState('link');

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
        <div class="mb-4" style="width: 650px">
            <div className="z-10 relative bg-gray-100 bg-opacity-70 -m-4 mb-3 py-2 px-4 flex items-center">
                <button type="button" class={`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('unsplash')}`}
                    onClick={() => {setVal(""); setActiveTab('unsplash')}}
                >
                    Unsplash
                </button>

                <button type="button" class={`focus:outline-none border border-transparent py-2 px-3 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('giphy')}`}
                    onClick={() => setActiveTab('giphy')}
                >
                    Giphy
                </button>

                <button type="button" class={`focus:outline-none border border-transparent py-2 px-4 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('link')}`}
                    onClick={() => setActiveTab('link')}
                >
                    Paste Link
                </button>

                {/* <button type="button" class={`focus:outline-none border border-transparent py-2 px-5 rounded-full bg-transparent font-medium text-xs leading-none tracking-wide uppercase text-gray-400 ${getActiveStyling('upload')}`}
                    onClick={() => setActiveTab('upload')}
                >
                    Upload
                </button> */}
            </div>

            { activeTab == 'link' && 
                <div>
                    <BcLinkField field={field} onChange={handleChange} />

                    <div class="relative bg-gray-100 rounded mt-3 mb-1 flex justify-center" style="height: 360px">
                        { val && val.length && (
                            <img class="absolute inset-0 h-full max-w-full object-contain" src={val} alt="" />
                        )}
                    </div>
                </div>
            }

            { activeTab == 'unsplash' && 
                <div>
                    <BcUnsplashSearch onChange={handleChange} />
                </div>
            }

            { activeTab == 'giphy' && 
                <div>
                    <BcGiphySearch onChange={handleChange} />
                </div>
            }
        </div>
    )
}