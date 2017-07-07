import $ from 'jquery';

export class BaseElement{

	constructor(){
		this.element = null; //jquery element
	}

	appendToElement(el){
		this.createElement();
		el.append(this.element);
		this.enableJS();
	}

	createElement(){
		let s = this.getElementString();
		this.element = $(s);
	}

	getElementString(){
		throw 'porfa override getElementString';
	}

	enableJS(){
		 componentHandler.upgradeElement(this.element[0]);
	}

}