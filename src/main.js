import "./main.css";
import { h, render } from 'preact';

import * as UIElements from './components/UIElements';
import App from "./App";

function Articulate(containerId, options = {}){
	const defaultOptions = {
		uiElements: UIElements,
		elements: [],
		onComponentPicked: component => {
			art.editElement(component);
		},
		onElementAdded:  el => console.log("Element added: ", el),
		onElementUpdated:  el => console.log("Element updated: ", el),
		onElementsChanged:  elements => console.log("Elements changed: ", elements),
	};

	const fullOptions = {
		...defaultOptions,
		...options
	};

	for (const [key, value] of Object.entries(fullOptions)) {
		this[key] = value;
	}

    render(<App articulateRef={this} />, document.querySelector(containerId));
}

export default Articulate;