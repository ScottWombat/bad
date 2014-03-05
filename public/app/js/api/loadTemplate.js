Marionette | Handlebars | Ajax Loaded Template
|--------------------------------------------------------------------------
|
| Copyright (c) 2010 Daniel Yovchev
| -------------------------------------------------------
| Dual licensed under the MIT and GPL licenses.
| - http://www.opensource.org/licenses/mit-license.php
| - http://www.gnu.org/copyleft/gpl.html
|
| This plugin allow Marionette templates to be loaded dynamically
| and you can still use the native script tags if you want to.
|
| Example: if you want to use script tag [ template: '#template-id-name' ]
| if you want loaded dynamicaly [ template: 'path/template-name']
|
| Note: the default location of your template will be 'app/templates/' if you want
| to change it please change the ...prototype.loadTemplate function
| url: 'app/templates/'
|
| Note: This solution is only good for developing please cheeck this tread before you
| decide to use this plugin
|
| https://github.com/marionettejs/backbone.marionette/issues/470#issuecomment-13705359
|
*/

Backbone.Marionette.TemplateCache.prototype.loadTemplate = function(path){

// Allow the use of in-line script templates..
if( path.charAt( 0 ) == '#' ) { return $( path.replace('/', '-') ).html(); }
// If is dynamic file make ajax request to get it search in baseurl/app/templates
return $.ajax({ url: 'app/templates/' + path + '.html', async: false });

};


Backbone.Marionette.TemplateCache.prototype.compileTemplate = function(html) {

// if is ready html let compile it whit handlebars
if( typeof html == 'string' ) { return Handlebars.compile( html ); }
// if is jQuery request let wait until is done and then compile
return $.when(html).then(function( htmlLoad ){
// compile the loaded html and return
return Handlebars.compile( htmlLoad );
});

};

Backbone.Marionette.Renderer.render = function( template, data ){
var templateFunc = typeof template === 'function' ? template : Marionette.TemplateCache.get(template);
// if is jQuery request let wait until is done
return $.when(templateFunc).then(function(compiler){
return compiler(data);
});
};


/*
|--------------------------------------------------------------------------
| This Overwrite Marionete core functions to make it work
|--------------------------------------------------------------------------
|
| The ajax loaded templates take time to be fetched so
| we need to wait and when the template is loaded to use
| the html.
|
*/
Backbone.Marionette.ItemView.prototype.render = function(){
var self = this;
self.isClosed = false;
self.triggerMethod("before:render", self);
self.triggerMethod("item:before:render", self);
var data = self.serializeData();
data = self.mixinTemplateHelpers(data);
var template = self.getTemplate();
var html = Marionette.Renderer.render(template, data);
// Wait until fully loaded the template html.
$.when(html).then(function( html ){
self.$el.html(html);
self.bindUIElements();
self.triggerMethod("render", self);
self.triggerMethod("item:rendered", self);
});

return self;
};

Backbone.Marionette.CompositeView.prototype.render = function(){
var self = this;
self.isClosed = false;
self.resetItemViewContainer();
self.triggerBeforeRender();
var html = self.renderModel();
// Wait until fully loaded the template html.
    $.when(html).then(function( html ){
self.$el.html(html);
self.bindUIElements();
self.triggerMethod("composite:model:rendered");
self._renderChildren();
self.triggerMethod("composite:rendered");
self.triggerRendered();
});

return self;
};