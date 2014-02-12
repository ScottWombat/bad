define(['pages/baseLayout'],
function (BaseLayout) {
    "use strict";

    return BaseLayout.extend({
    	templateName: "home",
    	id: "home_layout",
        regions: {
            slideShowRegion: '#slideshow'
        },
        initialize: function () {
          
        },
        afterRender: function () {
        	
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


