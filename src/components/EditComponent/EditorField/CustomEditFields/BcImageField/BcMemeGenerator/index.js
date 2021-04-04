import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import BcImageSearch from '../BcImageSearch';
import latestMemes from "./latestMemes";

export default function BCMemeGenerator({onChange = _ => {}}){
    const [ captions, setCaptions ] = useState([]);
    const [ memePreview, setMemePreview ] = useState(null);
    const [ generating, setGenerating ] = useState(false);
    const [ selectedMeme, setSelectedMeme ] = useState(
        // {"title":"Drake Hotline Bling", "template": "181913649", "color":"","preview":"https://i.imgflip.com/30b1gx.jpg","full":"https://i.imgflip.com/30b1gx.jpg","tags":[],"box_count":2}
    );

    const getMemes = useCallback(() => {
        const titles = Object.keys(latestMemes);
        const memes = Object.values(latestMemes).map((meme, index) => {
            const [template, url, tags, box_count] = meme;
            return { 
                title: titles[index],
                template,
                color: "",
                preview: url, 
                full: url,
                tags,
                box_count
            }
        });

        return memes;
    },[latestMemes]);

    function getLatestPhotos(){
        return getMemes();
    }

    function searchUnsplash(q){
        const memes = getMemes();
        return memes.filter(({title, tags}) => {
            const titleMatch = title.toLowerCase().indexOf(q.toLowerCase());
            const tagsMatch = !tags.length ? -1 : tags.join(' ').toLowerCase().indexOf(q.toLowerCase());

            // return titleMatch != -1 || tagsMatch != -1;
            return titleMatch != -1;
        })
        .map(meme => {
            const {title, tags} = meme;
            const titleMatch = title.toLowerCase().indexOf(q.toLowerCase());
            const tagsMatch = !tags.length ? -1 : tags.join(' ').toLowerCase().indexOf(q.toLowerCase());

            return {
                ...meme,
                titleMatch,
                tagsMatch
            }
        })
        .sort((a, b) => {
            return b.tagsMatch - a.tagsMatch;
        });
    }

    function handleMemeSelected(url){
        const meme = getMemes().find(({preview}) => preview == url);
        setSelectedMeme(meme);
    }

    function handleCaptionChanged(value, index){
        let newValue = [...captions];
        newValue.splice(index, 1, value);

        setCaptions(newValue);
    }

    async function generateMeme(e){
        e.preventDefault();
        e.stopPropagation();

        if(!captions.length)
            return console.log("Add at least one caption");

        const searchParams = {
            template_id: selectedMeme.template,
            username: "jestrux",
            password: "St@nn3r5",
            ...Object.assign(
              ...captions.map((caption, i) => ({ [`boxes[${i}][text]`]: caption }))
            )
        };

        var url = new URL('https://api.imgflip.com/caption_image');
        url.search = new URLSearchParams(searchParams);
        
        setGenerating(true);
        const res = await fetch(url.toString(), {method: "POST"});
        const response = await res.json();
        setGenerating(false);
        setMemePreview(response.data.url);
    }
    
    return (
        <div class="h-full">
            { !selectedMeme && (
                <BcImageSearch 
                    placeholder="Search Memes"
                    fetchLatestPhotos={getLatestPhotos}
                    searchPhotos={searchUnsplash}
                    searchOnChange={true}
                    onChange={handleMemeSelected}
                />
            ) }

            { selectedMeme && (
                <div class="rounded bg-gray-100 border p-4 h-full overflow-y-auto">
                    {!memePreview && (
                        <div class="h-full flex items-start">
                            <div class="h-full flex-1">
                                <img class="w-full" src={selectedMeme.preview} alt="" />

                                <div class="h-6">&nbsp;</div>
                            </div>

                            <div class="flex-shrink-0 ml-6" style="width: 55%">
                                <div className="mb-4">
                                    <button type="button" class="bg-transparent inline-flex items-center border-none border-gray-300 text-gray-500 text-xs leading-none py-1 px-0 rounded-full hover:underline focus:outline-none"
                                        onClick={() => setSelectedMeme(null)}
                                    >
                                        <svg class="w-4 h-4 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                        Change Template
                                    </button>
                                </div>

                                <form action="#" onSubmit={generateMeme}>
                                    { Array(selectedMeme.box_count).fill("").map((c, index) => (
                                        <div class="mb-5">
                                            <label class="text-sm capitalize block">
                                                Text {index + 1}
                                            </label>

                                            <input class="border-2 rounded text-lg h-10 w-full px-3 py-2" 
                                                onInput={(e) => handleCaptionChanged(e.target.value, index)}
                                            />
                                        </div> 
                                    ))}
                                    
                                    <button type="submit" class={`focus:outline-none px-5 py-1 border-2 border-red-300 uppercase text-xs tracking-wide font-semibold bg-transparent-500 text-red-500 rounded-full ${generating && 'opacity-50 pointer-events-none'}`}>
                                        { generating ? 'Please Wait...' : 'Generate Meme' }
                                    </button>
                                </form>

                                <div class="h-6">&nbsp;</div>
                            </div>
                        </div>
                    )}

                    { memePreview &&
                        (
                            <div class="h-full flex flex-col">
                                <div className="-mt-1 mb-2">
                                    <button type="button" class="bg-transparent inline-flex items-center border-none border-gray-300 text-gray-500 text-xs leading-none py-1 px-0 rounded-full hover:underline focus:outline-none"
                                        onClick={() => setMemePreview(null)}
                                    >
                                        <svg class="w-4 h-4 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                        Edit Meme
                                    </button>
                                </div>
                                
                                <div class="-mx-4 flex-1 flex items-center justify-center overflow-hidden bg-gray-200">
                                    <img class="max-h-full max-w-full" src={memePreview} alt="" />
                                </div>

                                <div class="mt-4 flex justify-end">
                                    <button type="button" class="focus:outline-none px-6 py-1 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full"
                                        onClick={() => onChange(memePreview)}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            ) }
        </div>
    )
}