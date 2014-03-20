define([ "application", "layout/content/login/show/login_view",], function(
		Mystore, View,UserSession) {

	Mystore.module("LoginApp.Login", function(Login, Mystore, Backbone,Marionette, $, _) {
		Login.Controller = {
			showLogin : function() {
				var ModalRegion = Marionette.Region.extend({
				    constructor: function() {
				        Marionette.Region.prototype.constructor.apply(this, arguments);
				 
				        this.ensureEl();
				        this.$el.on('hidden', {region:this}, function(event) {
				            event.data.region.close();
				        });
				    },
				 
				    onShow: function() {
				        this.$el.modal('show');
				    },
				 
				    onClose: function() {
				        this.$el.modal('hide');
				    }
				});
				var view = new View.Form();
				view.render);
				view.on("form:submit", function(data) {
					$.ajax({
						url : REST_URL + 'user/authenticate',
						// url: REST_URL + 'user/authenticate',
						crossDomain : true,
						type : 'POST',
						data : data,
						success : function(data) {
							console.log([ "Login request details: ", data ]);

							if (data.error) { // If there is an error, show
									// the error messages
								$('.alert-error').text(data.error.text).show();
							} else { // If not, send them back to the home
										// page
								//window.location.replace('#');
								//UserSession.set({logged_in: true});
								
								
								view.trigger("dialog:close");
								//redirect to index page
								APP.logged=true;
								//alert(APP.logged);
								Mystore.navigate("");
								
							}
						},
						error: function (error) {
			                  alert('error; ' + eval(error));
			             },
						beforeSend : function(xhr) {
							xhr.setRequestHeader("accept", "text/html");
							//xhr.setRequestHeader("accept", "application/json");
							xhr.setRequestHeader("Content-Type","application/json");
						}
					});
					
				});
				//alert('rest')
				//Mystore.loginDialog.show(view);
				//view.render();
				//var $modalEL = $("#login-dialog");
				//$modalEL.html(view.el);
				//$modalEL.modal('show');
				//var modal = new ModalRegion({el:'#loginModal'});
				//modal.show(view);
				
			}
		}
	});

	return Mystore.LoginApp.Login.Controller;

	// return {
	// showLogin: function(){
	// var view = new View.loginItemView();
	// Mystore.dialogRegion.show(view);
	// }
	// };

});