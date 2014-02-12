define([
  'jquery',
  'underscore',
  'backbone',
  'vm',
  'views/languageItemView'
], function($,_, Backbone, Vm, LanguageItemView){
  var LanguageListView = Backbone.View.extend({
	 id        : 'lang-id',
	 tagName   : 'ul',
	 className : 'languages',

   
    initialize: function () {
    	 _.bindAll(this);
    	 this.collection.bind('add', this.addItemHandler);
    },
    load : function(){

        //here we do the AJAX Request to get our json file, also provide a success and error callbacks
        this.collection.fetch({
          add: true,
          success: this.loadCompleteHandler,
          error: this.errorHandler
        });

      },  
      addItemHandler : function(model){
          //model is an instance of RealWorldItemModel
         
          var myItemView = new LanguageItemView({model:model});
          myItemView.render();
          $(this.el).append(myItemView.el);

        },

        loadCompleteHandler : function(){
          console.log('Awesome everything was loaded without errors!');
          this.render();
        },

        errorHandler : function(){
          throw "Error loading JSON file";
        },

    events:{
        "mouseover .language": "mouseovercard"
    },
    mouseovercard: function() {
        console.log('hello world');
        $('#currency, #language').mouseover(function() {
			$(this).find('> ul').slideDown('fast');
			$(this).bind('mouseleave', function() {
				$(this).find('> ul').slideUp('fast');
			});
		});
    },
    render: function () {
    	
    	//we assign our element into the available dom element
    	$('#langItems').append($(this.el));
        return this;
    }
  });

});