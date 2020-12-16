import { h } from 'preact';
import { useCallback, useState } from 'preact/hooks';
import BcImageSearch from '../BcImageSearch';
import latestMemes from "./latestMemes";

export default function BCMemeGenerator({onChange = _ => {}}){
    const [ captions, setCaptions ] = useState([]);
    const [ memePreview, setMemePreview ] = useState("");
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
        setMemePreview(url);
        onChange(url);
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
        onChange(response.data.url);
    }
    
    return (
        <div>
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
                <div class="rounded bg-gray-100 border p-4" style="height: 404px">
                    <div class="h-full flex">
                        <div class="h-full flex-1">
                            <img class="w-full" src={memePreview} alt="" />

                            <div className="mt-4 flex justify-center">
                                <button type="button" class="bg-transparent inline-flex items-center border border-gray-300 text-gray-500 text-xs leading-none py-1 px-2 rounded-full focus:outline-none"
                                    onClick={() => setSelectedMeme(null)}
                                >
                                    <svg class="w-2 h-2 mr-1 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                                    change template
                                </button>
                            </div>
                        </div>

                        <div className="flex-shrink-0 ml-6" style="width: 55%">
                            {/* <h3 class="text-xl font-semibold">Customize Meme</h3> */}

                            <form action="#" onSubmit={generateMeme}>
                                { Array(selectedMeme.box_count).fill("").map((c, index) => (
                                    <div class="mb-5">
                                        <label class="capitalize block">
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

                        </div>
                    </div>
                </div>
            ) }
        </div>
    )
}