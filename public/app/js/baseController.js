define([
    'marionette','pages/home/layout'], function (Marionette,Layout) {
    'use strict';

    return Marionette.Controller.extend({
    	
    	initialize: function(options){
    	    // store a region that will be used to show the stuff rendered by this component
    	    this.mainRegion = options.mainRegion;
    	},
        home: function (region) {
            var that = this, d = new Marionette.$.Deferred();
            region.show(new Layout({}));
            return d.promise();
        }
    });
});