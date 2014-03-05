define(["application", "layout/content/checkout/show/checkout_view"], function(Mystore, View){
  return {
    showCheckout: function(){
      var view = new View.Message();
      Mystore.maincontent.show(view);
    }
  };
});
