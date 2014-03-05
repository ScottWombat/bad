define(["application", "layout/content/slideshow/slideshow_view"], function(Mystore, View){
  return {
    showSlide: function(){
      var view = new View.Slides();
      Mystore.maincontent.show(view);
    }
  };
});
