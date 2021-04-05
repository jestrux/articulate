import "./main.css";
import { h, render } from 'preact';
import { useState } from "preact/hooks";

import ArticulateConfig from "./ArticulateConfig";
import EditComponent from "./components/EditComponent";


function ComponentEditor({articulateRef}){
	const [showComponentEditor, setShowComponentEditor] = useState(false);
	const [selectedComponent, setSelectedComponent] = useState(null);

	articulateRef.editComponent = (component, callback = _ => {}) => {
		articulateRef.onComponentChanged = callback;

		setSelectedComponent(component);
		
		setTimeout(() => {
			setShowComponentEditor(true);
		});
	}

	function handleOnChange(value){
		articulateRef.onComponentChanged(value);
	}

	function handleOnClose(){
		setShowComponentEditor(false);
		articulateRef.onComponentChanged(undefined);
	}

	return (
		<ArticulateConfig.Provider value={articulateRef}>
			<EditComponent 
				selectedElement={selectedComponent} 
				opened={showComponentEditor} 
				onChange={handleOnChange}
				onClose={handleOnClose}
			/>
		</ArticulateConfig.Provider>
	);
}

function ArticulateComponentEditor(userOptions = {}){
	const defaultOptions = {
		autoSaveCustomField: true,
		onCustomFieldChanged: el => {},
	};

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

    render(<ComponentEditor articulateRef={this} />, wrapperEl);
}

export default ArticulateComponentEditor;