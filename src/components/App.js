import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import ArticulateConfig from "../ArticulateConfig";
import PickComponent from "./PickComponent";
import EditComponent from "./EditComponent";
import Preview from "./Preview";

export default function App({articulateRef}){
    const [elements, setElements] = useState([]);
    const [showEditor, setShowEditor] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);
    const [showComponentPicker, setShowComponentPicker] = useState(false);

    useEffect(() => {
        setElements(articulateRef.elements);
    }, []);

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

        if(selectedElement && element.id == selectedElement.id)
            setSelectedElement(null);

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
        let newElements;

        if(!element.id){
            element.id = (Math.random() * 1e32).toString(36);
            newElements = [
                ...articulateRef.elements,
                element
            ];

            articulateRef.onElementAdded(element);

            setTimeout(() => {
                document.querySelector(`#ArticulateElement${element.id}`).scrollIntoView()
            },20);
        }
        else{
            newElements = elements.map(el => {
                if(el.id === element.id){
                    articulateRef.onElementUpdated(element);
                    return element;
                }

                return el;
            });
        }

        articulateRef.elements = newElements;
        setElements(newElements);

        handleElementsChanged(newElements);
    }

    return (
        <ArticulateConfig.Provider value={articulateRef}>
            <PickComponent 
                opened={showComponentPicker} 
                onClose={() => setShowComponentPicker(false)} 
                onComponentPicked={handleComponentPicked}
            />
            <EditComponent 
                selectedElement={selectedElement}
                opened={showEditor} 
                onClose={() => {setSelectedElement(null); setShowEditor(false)}} 
                onChange={handleSaveElement}
                onSave={handleSaveElement}
            />
            <Preview 
                elements={elements} selectedElement={selectedElement} 
                onTextChange={handleSaveElement}
            />
        </ArticulateConfig.Provider>
    );
}