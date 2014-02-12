define(['marionette'], function (Marionette) {

    'use strict';

    return Marionette.AppRouter.extend({
        routes: {
            '': 'home'
           
         },
         home: function() {
        	
             this._showPage('home');
         },
         _showPage: function (pageName, options) {
             var that = this;

             //make sure we are authenicated, if not go to login
             //if (!Parse.User.current())
             //    pageName = 'login';

             require(['./pages/' + pageName + '/controller'], function (PageController) {
                 if (that.currentPageController) {
                     that.currentPageController.close();
                     that.currentPageController = null;
                 }

                 that.currentPageController = new PageController(options);

                 that.currentPageController.show(app.regionMain)
                     .fail(function () {
                         //display the not found page
                         that.navigate('/not-found', { trigger: true, replace: true });
                     });

             });
         }
    });

    return router;     
	
});
