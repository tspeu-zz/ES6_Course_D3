import {BaseElement} from './base-element.js';

export class Titlebar extends BaseElement {

	constructor(title){
		super();
		this.title = title;

	}

	getElementString(){
		return ` 
		<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
		  <header class="mdl-layout__header">
		    <div class="mdl-layout__header-row">
		     
		      <span class="mdl-layout-title">${this.title}</span>
		      
		      <div class="mdl-layout-spacer"></div>
		      
		      <nav class="mdl-navigation mdl-layout--large-screen-only">
		        <a class="mdl-navigation__link" href="">Link</a>
		        <a class="mdl-navigation__link" href="">Link</a>
		        <a class="mdl-navigation__link" href="">Link</a>
		        <a class="mdl-navigation__link" href="">Link</a>
		      </nav>
		    </div>
		  </header>
		  <div class="mdl-layout__drawer">
		    <span class="mdl-layout-title">${this.title}</span>
		    <nav class="mdl-navigation">
		      <a class="mdl-navigation__link" href="">Link</a>
		      <a class="mdl-navigation__link" href="">Link</a>
		      <a class="mdl-navigation__link" href="">Link</a>
		      <a class="mdl-navigation__link" href="">Link</a>
		    </nav>
		  </div>
		  <main class="mdl-layout__content">
		    <div class="page-content">

		    </div>
		  </main>
		</di v>
		`;
	}

}