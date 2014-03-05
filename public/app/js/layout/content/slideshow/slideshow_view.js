define(["marionette" ], function(Marionette){
  return {
    Slides: Marionette.ItemView.extend({
      template: TemplateManager.load(SLIDESHOW_TEMPLATE)
    })
  };
});
