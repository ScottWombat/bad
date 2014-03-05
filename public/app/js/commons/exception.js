define(function(){
	
	var exception = function(message){
		this.message = message;
		this.toString = function () {
			return "BaseViewException";
		};
		console.log("[|"+this+"|]: " + message);
	});
	return exception;
}