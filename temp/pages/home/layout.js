define(['marionette'],
function (Marionette) {
    "use strict";

    return Marionette.Layout.extend({
        template: layoutTemplate,
        regions: {
            slideShowRegion: '#slideshow'
        },
        initialize: function () {
          
        },
        onShow: function () {
            
            this.slideShowRegion.show(new HeaderView(viewOptions));
           // this.mainRegion.show(new TodoListCompositeView(viewOptions));
           //this.footerRegion.show(new FooterView(viewOptions));
            
           // this.todoList.query = new Parse.Query(Todo);
          // this.todoList.query.equalTo("user", Parse.User.current());

           // this.todoList.fetch();
        }
        
    });

});