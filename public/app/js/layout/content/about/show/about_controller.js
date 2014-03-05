define(["application", "layout/content/about/show/about_view"], function(Mystore, View){
	Mystore.module("AboutApp.About", function(About, Mystore, Backbone,Marionette, $, _) {
		About.Controller = {
				showAbout : function() {
					 var view = new View.About();
				      Mystore.maincontent.show(view);
				},
				setActiveHeader: function(headerUrl){
					alert('here');
				}
		}
	
	});
	return Mystore.AboutApp.About.Controller;
});
