import { h } from 'preact';
import { useContext } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';
import BcQuillEditor from "./BcQuillEditor";

export default function PreviewElement({element, selected, onTextChange}){
    const { uiElements, itemClass, editElement, removeElement, editOnFocus } = useContext(ArticulateConfig);

    const { options, component } = element;

    if(component == "BcText")
        return <BcQuillEditor options={options} onChange={onTextChange} />;

    function renderActionButtons(editOnFocus){
        return (
            <div class="mt-1 flex items-center ActionButtons absolute bg-white z-10 left-0 bottom-0 p-3 opacity-0 pointer-events-none group-hover:reveal">
                {
                    !editOnFocus && 
                    <button class="mr-2 flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full"
                        onClick={() => editElement(element)}>
                        <svg class="w-4" fill="#f18f16" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    </button>
                }
                <button class="flex items-center justify-center w-7 h-7 bg-gray-100 rounded-full"
                    onClick={() => removeElement(element)}>
                    <svg class="w-4" fill="#e04b2a" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                </button>
            </div>
        );
    }

    const uiComponent = new uiElements[component](options);

    return (
        <div id={`ArticulateElement${element.id}`} class={`group relative overflow-hidden ${itemClass}`}>
            { h( "div", {innerHTML: uiComponent.render()}) }

            { editOnFocus && (
                <button type="button" class={`absolute p-0 inset-0 block w-full h-full z-10 focus:outline-none ${selected ? 'border-4' : 'border-none'} border-blue-500 rounded-lg`}
                    onClick={(e) => {e.stopPropagation(); editElement(element)}}
                ></button>
            ) }
            
            { renderActionButtons(editOnFocus) }
        </div>
    );
}