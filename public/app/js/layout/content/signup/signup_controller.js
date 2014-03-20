define([ "application", "layout/content/login/show/login_view",'commons/ui/modalView'], function(
		Mystore, View,ModalView) {

	Mystore.module("LoginApp.Login", function(Login, Mystore, Backbone,Marionette, $, _) {
		Login.Controller = {
			showLogin : function(model) {
				//alert(model);
				var view = new View.Form();
				view.render();
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
							} else { 
								//login success
								//console.info(data.loggedIn );
								model.set({
									loggedIn : data.loggedIn,
									loginMsg : data.loginMsg
								});
								/*
								if(data.loggedIn){
									model.set({
									    loggedIn: true
									});
									
								}else{
									
									Mystore.trigger("login:failed");
								}
								
								
							
								Mystore.navigate("");
								*/
								
							}
						},
						error: function (error) {
			                  alert('error; ' + eval(error));
			             },
						beforeSend : function(xhr) {
							//xhr.setRequestHeader("accept", "text/html");
							xhr.setRequestHeader("accept", "application/json");
							xhr.setRequestHeader("Content-Type","application/json");
						}
					});
					///data);
				});
				
			}
		}
	});

	return Mystore.LoginApp.Login.Controller;

	

});