define(['marionette','baseController'], function (Marionette,BaseController) {
	
	'use strict';
	
	return Marionette.BaseRouter.extend({
		controller: new BaseController(),
		// controller methods
		appRoutes: {
			"": "home",         // Home page
			"route66": "route66" // Another page
		}
	});
});