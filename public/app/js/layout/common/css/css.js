define(["jquery"], function($) {
	//var css_link = $("<link>", {
    //    rel: "stylesheet",
    //    type: "text/css",
    //    href: LOADING_CSS
   // });
   // css_link.appendTo('head');
    //add javascript
    //$('head').append($('<script>').attr('type', 'text/javascript').attr('src', jsFile))
	
	//$("link[href=./css/manage_deals.css]").attr("disabled");
    
    $.ajax({
        url:MAIN_CSS,
        success:function(data){
             $("<style></style>").appendTo("head").html(data);
        }
    })
});