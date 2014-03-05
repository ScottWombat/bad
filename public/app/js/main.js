require([ 'application', 'layout/header/languages/app_header',
		'layout/header/currencies/app_header',
		'layout/header/links/app_header', 'layout/content/about/about_app',
		'layout/content/checkout/checkout_app',
		'layout/content/slideshow/slideshow_app',
		'layout/content/login/login_app',
		'layout/content/about/about_app',
		'commons/handleBarsHelper'], function(Mystore) {

	'use strict';

	// enables loading templates using ajax.
	/*
	 * Marionette.TemplateCache.prototype.loadTemplate = function(templateId,
	 * callback) { var template = templateId;
	 *  // Make sure we have a template before trying to compile it if
	 * (!template || template.length === 0) { var msg = "Could not find
	 * template: '" + templateId + "'"; var err = new Error(msg); err.name =
	 * "NoTemplateError"; throw err; } return template; };
	 */
	// enables handlebars as our template library
	/*
	 * Marionette.TemplateCache.prototype.compileTemplate =
	 * function(rawTemplate) { return Handlebars.compile(rawTemplate); };
	 */
	// handlebars helper dateFormat (momentjs)
	/*
	 * Handlebars.registerHelper('dateFormat', function(context, block) { if
	 * (window.moment) { var f = block.hash.format || "MMM DD, YYYY hh:mm:ss A";
	 * return moment(context).format(f); // had to remove Date(context) } else {
	 * return context; // moment plugin not available. return data as is. } ;
	 * });
	 */
	/*
	 * App.Auth.on('change', _.once(function(){ App.start(); }));
	 */

	Mystore.start();

});