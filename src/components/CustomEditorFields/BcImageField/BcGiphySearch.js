import { h } from 'preact';
import BcImageSearch from './BcImageSearch';

export default function BcGiphySearch({onChange = _ => {}}){
    const apiKey = "zKN2rO1fYYKdNDIjHHmGHhmqvLN66oue";

    async function fetchPhotos(url){
        const res = await fetch(url);
        let {data} = await res.json();

        const results = data.map( ({ color, description, images, user }) => {
            const preview = images.preview_gif.url;
            const full = images.downsized_medium.url;
            return { color, description, preview, full, user: !user ? "" : user.display_name };
        });

        return results;
    }

    function getLatestPhotos(){
        const url = `https://api.giphy.com/v1/gifs/trending?limit=30&api_key=${apiKey}`;
        return fetchPhotos(url);
    }

    function searchUnsplash(q){
        const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=30&api_key=${apiKey}`;
        return fetchPhotos(url);
    }
    
    return (
        <BcImageSearch 
            placeholder="Search Giphy"
            fetchLatestPhotos={getLatestPhotos}
            searchPhotos={searchUnsplash}
            onChange={onChange}
        />
    )
}