import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

export default function BcImageSearch({
    placeholder = "Search for photos",
    searchOnChange,
    fetchLatestPhotos = _ => {},
    searchPhotos = _ => {},
    onChange = _ => {}
}){
    const [searchQuery, setSearchQuery] = useState("");
    const [searchState, setSearchState] = useState(null);
    const [error, setError] = useState(null);
    const [results, setResults] = useState(null);

    useEffect(() => {
        if(!results || !results.length)
            getLatestPhotos()
    }, []);

    async function getLatestPhotos(){
        setSearchState("fetching");
        const response = await fetchLatestPhotos();
        setResults(response);
        setSearchState("");
    }

    function handleSearchPhotos(e){
        e.preventDefault();
        e.stopPropagation();
        doSearch();
    }

    async function doSearch(){
        setSearchState("fetching");
        const response = await searchPhotos(searchQuery);
        setResults(response);
        setSearchState("");
    }

    function handleSearchQueryChanged(value){
        setSearchQuery(value);
        if(searchOnChange){
            console.log("New value", value);
            doSearch();
        }
    }
    
    return (
        <div class="relative h-full flex flex-col bg-gray-100 overflow-hidden">
            {/* <div className="absolute bg-gray-100 -inset-4 bottom-0">

            </div> */}
            <form class="relative border-2 overflow-hidden flex items-center"
                onSubmit={handleSearchPhotos}
                autocomplete="off"
            >
                <input class="focus:outline-none text-gray-600 text-lg h-10 focus:ouline-none border-none w-full px-3 py-2"
                    type="text"
                    placeholder={placeholder}
                    name="q"
                    value={searchQuery}
                    onInput={e => handleSearchQueryChanged(e.target.value)}
                    autocomplete="off"
                />
    
                { searchQuery && searchQuery.length > 0 &&
                    <button type="button" class="absolute w-5 h-5 flex items-center justify-center my-auto inset-y-0 right-2 focus:outline-none border border-gray-300 rounded-full"
                        onClick={() => handleSearchQueryChanged("")}
                    >
                        <svg class="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                }
            </form>

            <div className="flex-1 pt-3 px-3 grid grid-cols-3 gap-4 overflow-y-auto">
                { results && results.map(image => (
                    <button type="button" class="bg-gray-100 border rounded overflow-x-hidden relative"
                        style={`background: ${image.color}; height: 230px`}
                        onClick={() => onChange(image.full)}
                    >
                        <img loading="lazy" class="absolute left-0 top-0 h-full w-full object-cover" src={image.preview} alt="" />
                    </button>
                ))  }
            </div>
        </div>
    )
}