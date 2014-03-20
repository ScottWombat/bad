define(["marionette" ,'handlebars','text!layout/content/maincontent/templates/layout.html'], function(Marionette,Handlebars,tpl){
  return {
    About: Marionette.ItemView.extend({
      template: Handlebars.compile(tpl)
    })
  };
});
