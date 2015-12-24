/**
 * New typescript file
 */

import {Component} from 'angular2/core';

interface Hero {
    // added a interface that defines a type of Hero.
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    // use back tick for multiline scripts
    // for [(ngModel)], it provides two way binding, but why removal of {{}}?
    template: `
    	<h1>{{title}}</h1>
    	<h2>{{hero.name}} details!</h2>
    		<div><label>id: </label>{{hero.id}}</div>
    		<div>
    			<label>name: </label>
    			<div><input [(ngModel)]="hero.name" placeholder="name"></div>
    		</div>
	`
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };
}