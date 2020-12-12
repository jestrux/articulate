import { h } from 'preact';
import { useContext } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';

export default function PreviewElement({element}){
    console.log("Preview element: ", element);
    const { uiElements, editElement, removeElement } = useContext(ArticulateConfig);

    const { options, component } = element;

    function renderActionButtons(){
        return (
            <div class="">
                <button class="w-8 h-8 bg-gray-100 rounded-full"
                    onClick={() => editElement(element)}>
                    <svg class="w-6" fill="#f18f16" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </button>
                <button class="w-8 h-8 bg-gray-100 rounded-full"
                    onClick={() => removeElement(element)}>
                    <svg class="w-6" fill="#e04b2a" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </button>
            </div>
        );
    }

    let baseClass = 'blogpost-section-wrapper';
    if((component === 'bc-image' || component === 'bc-youtube-video') && options){
        if(options.width === 'wide')
            baseClass += ' wide-image';
        else if(options.width === 'full')
            baseClass += ' full-image';
    }

    const uiComponent = new uiElements[component](options);

    return (
        <div class={baseClass}>
            <div class="relative">
                { renderActionButtons() }

                {  h( "div", { innerHTML: uiComponent.render() }) }
            </div>
        </div>
    );
}