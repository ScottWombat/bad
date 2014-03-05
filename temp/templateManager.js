define(['jquery','handlebars'],function($,Handlebars){
	              
	var getTemplate = function(url){
		
		
		if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
			$.ajax({
				//url : 'js/templates/' + name + '.handlebars',
				url : url,
				success : function(data) {
					//alert(data);
					if (Handlebars.templates === undefined) {
						Handlebars.templates = {};
					}
					Handlebars.templates[name] = Handlebars.compile(data);
				},
				async : false
			});
		}
		return Handlebars.templates[name];
	}
	return {
		getTemplate : getTemplate
	}
  
});