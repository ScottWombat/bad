define(["jquery"], function($) {
	var css_link = $("<link>", {
		id: 'loadingCss',
        rel: "stylesheet",
        type: "text/css",
        href: LOADING_CSS
    });
    css_link.appendTo('head');
    //add javascript
    //$('head').append($('<script>').attr('type', 'text/javascript').attr('src', jsFile))
    /*
    $.ajax({
    	id:
        url:LOADING_CSS,
        success:function(data){
             $("<style></style>").appendTo("head").html(data);
        }
    })
	*/
    var font_link = $("<link>", {
        rel: "stylesheet",
        type: "text/css",
        href: "//fonts.googleapis.com/css?family=PT+Mono:400"
    });
    font_link.appendTo('head');
});


