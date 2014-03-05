define(["marionette" ,'handlebars','text!templates/message.hbr'], function(Marionette,Handlebars,tpl){
  return {
    About: Marionette.ItemView.extend({
      template: Handlebars.compile(tpl)
    })
  };
});
