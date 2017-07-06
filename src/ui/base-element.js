import $ from 'jquery';

export class BaseElement{

	constructor(){
		this.element = null; //jquery element

	}


	createElement(){
		let s = getElementString();
		this.element = $(s);
	}

	getElementString(){
		throw 'porfa override getElementString';

	}
}