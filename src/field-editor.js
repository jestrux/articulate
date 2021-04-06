import "./main.css";
import { h, render } from 'preact';
import { useState } from "preact/hooks";

import ArticulateConfig from "./ArticulateConfig";
import EditField from "./components/EditField";


function FieldEditor({articulateRef}){
	const [showFieldEditor, setShowFieldEditor] = useState(false);
	const [selectedField, setSelectedField] = useState(null);

	articulateRef.editField = (field, callback = _ => {}) => {
		articulateRef.onFieldChanged = callback;

		const defaultFieldValue = {
			optional: true
		};
		
		setSelectedField({
			...defaultFieldValue, ...field
		});
		
		setTimeout(() => {
			setShowFieldEditor(true);
		});
	}

	function handleOnChange(value){
		articulateRef.onFieldChanged(value);
	}

	function handleOnClose(){
		setShowFieldEditor(false);
		articulateRef.onFieldChanged(undefined);
	}

	return (
		<ArticulateConfig.Provider value={articulateRef}>
			<EditField 
				selectedField={selectedField} 
				opened={showFieldEditor} 
				onChange={handleOnChange}
				onClose={handleOnClose}
			/>
		</ArticulateConfig.Provider>
	);
}

function ArticulateFieldEditor(userOptions = {}){
	const defaultOptions = {
		autoSaveCustomField: true
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

    render(<FieldEditor articulateRef={this} />, wrapperEl);
}

export default ArticulateFieldEditor;