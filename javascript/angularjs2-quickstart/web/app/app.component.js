/**
 * @author kaiyang.tay
 */
(function(app) {
	/*
	 * Uses app.AppComponent to export the modulular component 
	 * */
	app.AppComponent = ng.core.Component({
		
		/* 
		 * Use this to set properties 
		 * */
		selector: 'my-app',
		template: '<h1>My Angular 2 App - NExtGen</h1>'
			
	}).Class({
		
		/* 
		 * Use this section to write the class itself
		 * */
		constructor: function() {}
	
	});
	
})(window.app || (window.app = {})); 
/*
 Use simple IIFE ("Immediately Invoked Function Expression")
 It receives our app 'namespace' object as argument. 
 We call our IIFE with window.app if it exists 
 - and if it doesn't 
 we initialize it as an empty object.
*/