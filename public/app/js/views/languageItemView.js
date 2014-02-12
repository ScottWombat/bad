define([
  'jquery',
  'underscore',
  'backbone',
  'collections/language',
  'text!templates/desktop/language.html'
], function($,_, Backbone, Language,HTMLTemplate){
	
	 var LanguageItemView = Backbone.View.extend({
		 tagName   : 'li',
         template   : null,
         events     : {
         },
        
         initialize : function(){
        	console.info('LanguageItemView');
           //This is useful to bind(or delegate) the this keyword inside all the function objects to the view
           //Read more here: http://documentcloud.github.com/underscore/#bindAll
        	
           _.bindAll(this,'render');

           this.template = _.template(HTMLTemplate);
           //this.template = _.template('<div>Hello <strong>world!</strong></div>');

         },
         
         render : function(){
           console.info('Itemview render');
           this.$el.html( this.template( this.model.toJSON() ) );
           //this.$el.html( this.template() );
           return this;
         }
        
	 });
	
	return LanguageItemView;


});