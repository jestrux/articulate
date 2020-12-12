import { h } from 'preact';
import PreviewElement from "./PreviewElement";

export default function Preview({elements}){
    return (
        <div>
            { elements.map(el => (
                    <PreviewElement element={el} />
                )
            )}
        </div>
    );
}