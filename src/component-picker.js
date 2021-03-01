import "./main.css";
import { h, render } from 'preact';
import { useState } from "preact/hooks";

import ArticulateConfig from "./ArticulateConfig";
import PickComponent from "./components/PickComponent";


function ComponentPicker({articulateRef}){
	const [showPickComponent, setShowPickComponent] = useState(false);

	articulateRef.pickComponent = (callback = _ => {}) => {
		articulateRef.onComponentPicked = callback;
		
		setTimeout(() => {
			setShowPickComponent(true);
		});
	}

	function handleOnClose(){
		setShowPickComponent(false);
		articulateRef.onComponentPicked(undefined);
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

        articulateRef.onComponentPicked(element, editBeforeAdding);
    }

	return (
		<ArticulateConfig.Provider value={articulateRef}>
			<PickComponent 
				opened={showPickComponent} 
				onClose={handleOnClose}
				onComponentPicked={handleComponentPicked}
			/>
		</ArticulateConfig.Provider>
	);
}

function ArticulateComponentPicker(userOptions = {}){
	const defaultOptions = {
		uiElements: {}
	};

	if(!userOptions.uiElements){
		import("./components/UIElements")
			.then(uiElements => {
				this.uiElements = {...uiElements, ...this.uiElements};
			})
			.catch(error => {
				console.log("Failed to import UIElements", error);
			});
	}

	const { extend, ...options } = userOptions;

	const fullOptions = {
		...defaultOptions,
		...options
	};

	for (const [key, value] of Object.entries(fullOptions)) {
		if(!extend || !extend[key])
			this[key] = value;
		else{
			if(Array.isArray(value))
				this[key] = [...value, ...extend[key]];
			else if(typeof value === "object")
				this[key] = {...value, ...extend[key]};
			else
				this[key] = value;
		}
	}

	let wrapperEl = document.createElement("div");
	document.body.appendChild(wrapperEl);

    render(<ComponentPicker articulateRef={this} />, wrapperEl);
}

export default ArticulateComponentPicker;