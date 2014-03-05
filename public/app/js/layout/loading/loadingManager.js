require(['application',"layout/loading/loading_view",'layout/loading/loading_css'], function(Mystore,LoadingView){     
    		  var loadingView = new LoadingView.Loading();
    		  Mystore.wrapperbox.show(loadingView);
    		
 });