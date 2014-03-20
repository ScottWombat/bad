define(["application",'handlebars','utils/templateManager','commons/ui/modalView','backbone.syphon','bootstrap'], function(Mystore,Handlebars,TemplateManager,ModalView){
	Mystore.module("LoginApp.Common.Views", function(Views, Mystore, Backbone, Marionette, $, _){
	    Views.Form = Marionette.ItemView.extend({
	    	//template: Handlebars.compile(tpl), 
	    	template: TemplateManager.getLoginFormTemplate(),
	    	title : 'Login',
	    
	    	initialize:function(){
	    		
	    		ModalView.Modal.apply(this);
	    		
	    		
	    	},
	    	events: {
	    		"click button.js-submit": "submitClicked"
	    	},
	    	submitClicked: function(e){
	    		e.preventDefault();
	    		var data = Backbone.Syphon.serialize(this);
	    
	    		var jsondata = JSON.stringify(data);

	    		this.trigger("form:submit", jsondata);
	    		
	    		this.hideModal();
	    	}
	    });
	    
	   
	 });
	  return Mystore.LoginApp.Common.Views;
	/*
	 * return { loginItemView: Marionette.ItemView.extend({ template:
	 * TemplateManager.load(LOGIN_TEMPLATE), title: "Login", //className: 'modal
	 * hide' events: { "click button.js-submit": "submitClicked" },
	 * 
	 * submitClicked: function(e){ e.preventDefault(); var data =
	 * Backbone.Syphon.serialize(this); this.trigger("form:submit", data); }, }) };
	 */
});
