define(
		[ 'jquery', 'underscore', 'backbone', 'vm', 'collections/language','views/languageItemView' ],
		function($, _, Backbone, Vm, Language,LanguageItemView) {
			var LanguageListView = Backbone.View.extend({
						id : 'lang-id',
						tagName : 'ul',
						className : 'languages',

						events : {
							"mouseover .language" : "mouseovercard"
						},
						mouseovercard : function() {
							console.log('hello world');
							$('#currency, #language').mouseover(function() {
								$(this).find('> ul').slideDown('fast');
								$(this).bind('mouseleave', function() {
									$(this).find('> ul').slideUp('fast');
								});
							});
						},
						initialize : function() {
							
							 _.bindAll(this,'render','addItemHandler');

							 this.collection.bind("reset", _.bind(this.render, this));
						     this.collection.bind('add', this.addItemHandler);
						  
						      
						   
						},
						
						load : function() {
							  var self = this;
							  this.collection.fetch({ 
								    add: true,
						        	success: function(){
						        		console.log('Awesome everything was loaded without errors!');
										self.render();
						        	},
						        	error : this.errorHandler
							     
							});
						},
						addItemHandler : function(model) {
							console.info('addItemHandler');
							var myItemView = new LanguageItemView({
								model : model
							});
							myItemView.render();
							$(this.el).append(myItemView.el);

						},
						errorHandler : function(xhr, ajaxOptions, thrownError,
								request, error) {
							alert('xrs.status = ' + xhr.status + '\n'
									+ 'thrown error = ' + thrownError + '\n'
									+ 'xhr.statusText = ' + xhr.statusText
									+ '\n' + 'request = ' + request + '\n'
									+ 'error = ' + error);

						},
						render : function() {
							console.info('LangListview render');
							
							 $('#language').append($(this.el));
							
							return this;
						}
					});
			return LanguageListView;
		});