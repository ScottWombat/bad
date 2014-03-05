define([ "application", "layout/content/login/show/login_view",'layout/header/links/list/menubar_view' ], function(
		Mystore, View,UserSession,menuView) {

	Mystore.module("LoginApp.Login", function(Login, Mystore, Backbone,Marionette, $, _) {
		Login.Controller = {
			showLogin : function() {
				var view = new View.Form();
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
				Mystore.dialogRegion.show(view);
				
			},
			setActiveHeader: function(headerUrl){
				alert('setActiveheader');
		        //var links = ContactManager.request("header:entities");
		       // var headerToSelect = links.find(function(header){ return header.get("url") === headerUrl; });
		       // //headerToSelect.select();
		       // links.trigger("reset");
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