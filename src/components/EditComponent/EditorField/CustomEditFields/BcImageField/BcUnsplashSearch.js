import { h } from 'preact';
import BcImageSearch from './BcImageSearch';

export default function BcUnsplashSearch({onChange = _ => {}}){
    const clientId = "17ef130962858e4304efe9512cf023387ee5d36f0585e4346f0f70b2f9729964";

    async function fetchPhotos(url){
        const res = await fetch(url);
        let response = await res.json();
        const data = response.results ? response.results : response;

        const results = data.map( ({ color, description, urls, user }) => {
            const preview = urls.small;
            const full = urls.regular;
            return { color, description, preview, full, user };
        });

        return results;
    }

    function getLatestPhotos(){
        const url = `https://api.unsplash.com/photos?per_page=30&client_id=${clientId}`;
        return fetchPhotos(url);
    }

    function searchUnsplash(q){
        const url = `https://api.unsplash.com/search/photos?query=${q}&per_page=30&client_id=${clientId}`;
        return fetchPhotos(url);
    }
    
    return (
        <BcImageSearch 
            placeholder="Search Unsplash"
            fetchLatestPhotos={getLatestPhotos}
            searchPhotos={searchUnsplash}
            onChange={onChange}
        />
    )
}