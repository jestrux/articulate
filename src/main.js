import "./main.css";
import { h, render } from 'preact';

import * as UIElements from './components/UIElements';
import App from "./components/App";

function Articulate(containerId, userOptions = {}){
	const defaultOptions = {
		uiElements: UIElements,
		elements: [],
		onComponentPicked: component => {
			this.editElement(component);
		},
		onElementAdded:  el => {},
		onElementUpdated:  el => {},
		onElementsChanged:  elements => {},
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

    render(<App articulateRef={this} />, document.querySelector(containerId));
}

export default Articulate;