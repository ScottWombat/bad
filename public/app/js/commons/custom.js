define([ "jquery", 'bootstrap' ], function($) {

	
	$(function() {
		$('body').on('click', 'a', function(){
			alert('d');
		});
		$('#cart > #mycart > .heading ').on('click','a', function() {
			alert('d');
		});

		// Tell jQuery to watch for any 401 or 403 errors and handle them appropriately
		/*
		$.ajaxSetup({
		    statusCode: {
		        401: function(){
		            // Redirec the to the login page.
		            window.location.replace('#login');
		         
		        },
		        403: function() {
		            // 403 -- Access denied
		            window.location.replace('#denied');
		        }
		    }
		});
		*/
        /*
		$("#myCarousel").carousel();

		$(".prev-slide").click(function() {

			$("#myCarousel").carousel('prev');

		});

		$(document).ready(function() {

			$(".next-slide").click(function() {

				$("#myCarousel").carousel('next');

			});

		});
		*/
	});
});