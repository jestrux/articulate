import { h } from 'preact';
import { useState } from 'preact/hooks';

import ArticulateConfig from "../ArticulateConfig";
import PickComponent from "./PickComponent";
import EditComponent from "./EditComponent";
import Preview from "./Preview";

export default function App({articulateRef}){
    const [showEditor, setShowEditor] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const [showComponentPicker, setShowComponentPicker] = useState(false);

    articulateRef.pickComponent = () => {
        setShowComponentPicker(true);
    }

    articulateRef.editElement = (element) => {
        setSelectedElement(element);
        
        setTimeout(() => {
            setShowEditor(true);
        });
    }

    articulateRef.removeElement = function(element){
        if(!articulateRef.elements || !articulateRef.elements.length || !element || !element.id)
            return;

        articulateRef.elements = articulateRef.elements.filter(({id}) => id != element.id);

        handleElementsChanged();
    }

    function handleElementsChanged(){
        articulateRef.onElementsChanged(articulateRef.elements);
    }

    function handleComponentPicked(component){
        setShowComponentPicker(false);
        
        const { label, name, props } = component;
        const element = { label, component: name, options: {} };

        let editBeforeAdding = false;
        for (const [key, {defaultValue, optional}] of Object.entries(props)) {
            element.options[key] = defaultValue;
            if(!optional && !defaultValue)
                editBeforeAdding = true;
        }

        if(editBeforeAdding)
            articulateRef.onComponentPicked(element);
        else
            handleSaveElement(element);
    }

    function handleSaveElement(element){
        setShowEditor(false);
        
        if(!element.id){
            element.id = (Math.random() * 1e32).toString(36);
            articulateRef.elements = [
                ...articulateRef.elements,
                element
            ];

            articulateRef.onElementAdded(element);
        }
        else{
            articulateRef.elements = articulateRef.elements.map(el => {
                if(el.id === element.id){
                    articulateRef.onElementUpdated(element);
                    return element;
                }

                return el;
            });

        }

        handleElementsChanged();
    }

    return (
        <ArticulateConfig.Provider value={articulateRef}>
            <div class="max-w-5xl mx-auto">
                <PickComponent 
                    opened={showComponentPicker} close={() => setShowComponentPicker(false)} 
                    onComponentPicked={handleComponentPicked}
                />
                <EditComponent 
                    selectedElement={selectedElement}
                    opened={showEditor} close={() => setShowEditor(false)} 
                    onSave={handleSaveElement}
                />
                <Preview elements={articulateRef.elements} />
            </div>
        </ArticulateConfig.Provider>
    );
}