import { h } from 'preact';
import BcVideoeSearch from './BcVideoSearch';

export default function BcPexelsSearch({onChange = _ => {}}){
    const clientId = "563492ad6f9170000100000138f386b4ea5d44d78b3af53566e21d70";

    async function fetchPhotos(url){
        const res = await fetch(url, {
            headers: {
                "Authorization": clientId
            }
        });
        let response = await res.json();
        const results = response.videos.map( ({ url, video_files, video_pictures, user }) => {
            return { 
                poster: video_pictures[0].picture, 
                preview: video_files[0].link, 
                full: url, 
                user 
            };
        });

        return results;
    }

    function getLatestPhotos(){
        const url = "https://api.pexels.com/videos/popular?per_page=30";
        return fetchPhotos(url);
    }

    function searchUnsplash(q){
        const url = `https://api.pexels.com/videos/search?query=${q}&per_page=30`;
        return fetchPhotos(url);
    }
    
    return (
        <BcVideoeSearch 
            placeholder="Search Pexels"
            fetchLatestPhotos={getLatestPhotos}
            searchPhotos={searchUnsplash}
            onChange={onChange}
        />
    )
}