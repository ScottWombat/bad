define(["marionette" ], function(Marionette){
  return {
    Message: Marionette.ItemView.extend({
      template: TemplateManager.load(CHECKOUT)
    })
  };
});
