define(["application", "utils/templateManager"], function(Mystore, TemplateManager){
  Mystore.module("Loading.View", function(View, ContactManager, Backbone, Marionette, $, _){
    View.Loading = Marionette.ItemView.extend({
      template: TemplateManager.getLoadingTemplate(),

      initialize: function(options){
        var options = options || {};
        this.title = options.title || "Loading Data";
        this.message = options.message || "Please wait, data is loading.";
      },

      serializeData: function(){
        return {
          title: this.title,
          message: this.message
        }
      }
    });
     
  });

  return Mystore.Loading.View;
});
