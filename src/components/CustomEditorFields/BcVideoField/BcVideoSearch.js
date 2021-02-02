import { h } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

function VideoItem({video, playing}){
    const videoRef = useRef(null);

    useEffect(() => {
        const videoEl = videoRef.current;
        if(!videoEl) return;

        if(playing)
            videoEl.play();
        else{
            videoEl.pause();
            videoEl.currentTime = 0;
        }
    }, [playing]);
    
    return (
        <video ref={videoRef} 
            class={`absolute left-0 top-0 h-full w-full object-cover ${!playing && 'opacity-0'}`}
            src={video.preview} poster={video.poster} loop preload="none"
        ></video>
    );
}

export default function BcVideoSearch({
    placeholder = "Search for photos",
    searchOnChange,
    fetchLatestPhotos = _ => {},
    searchPhotos = _ => {},
    onChange = _ => {}
}){
    const [searchQuery, setSearchQuery] = useState("");
    const [searchState, setSearchState] = useState(null);
    const [previewedVideo, setPreviewedVideo] = useState(null);
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
        setResults([]);
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

            <div className="flex-1 pt-3 px-3 grid grid-cols-2 gap-4 overflow-y-auto">
                { results && results.map(video => (
                    <button type="button" class="bg-gray-100 bg-cover border rounded overflow-x-hidden relative"
                        style={`height: 210px; background-image: url(${video.poster})`}
                        onClick={() => onChange(video.preview)}
                        onMouseLeave={() => setPreviewedVideo(null)}
                        onMouseEnter={() => setPreviewedVideo(video.preview)}
                    >
                        <VideoItem video={video} playing={previewedVideo === video.preview}  />

                        <svg class="w-12 h-12 absolute inset-0 z-10 m-auto pointer-events-none" fill="rgba(255, 255, 255, 0.3)" stroke="white" stroke-width="1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </button>
                ))  }
            </div>
        </div>
    )
}