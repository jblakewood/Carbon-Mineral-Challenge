/*
	Created to supplement the scripts in Landed by HTML5 UP


		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'

	
*/

(function($) {
	
	setHeadline();
	
	
	//hideall();
	$(".mineraltable").stupidtable();

	function setHeadline() {
		var headlinewidth = $( ".titleplate h1" ).text().length;
   		
	    if (headlinewidth > 14) {
	      $( ".titleplate h1" ).css("font-size","180%");
		  $( ".titleplate h1" ).css("margin-bottom","11px");	      
	    } 
	}


	function hideall() {
		$("body.landing").replaceWith("<body><h2>16 December, 2015</h2></body>");
	}

	//set video and other iframes


	function setlogo() {
		var $logo = $('h1#logo img');
		//console.log("smallify");
		$('h1#logo img').animate({
			width: "60px",
			height: "81px"

		}, 0);


	}

	function resetlogo() {
		var $logo = $('h1#logo img');
		//console.log("biggify");
		$('h1#logo img').animate({
			width: "120px",
			height: "162px"

		}, 0);



	}

	$(window).scroll(function() {
		if (($(window).scrollTop() > 200 || $(window).width() < 1000)) {
			setlogo();

		} else if (($(window).scrollTop() < 201 && $(window).width() > 980)) {
			resetlogo();
		}

	});



	// check h1 width
	$(window).resize(function() {
    	setHeadline();
	});


	

      
     $("#export").click(function(){
         $("#export_table").tableToCSV();
     });
       
/* fix first paragraph indent */
//$( "div p" ).second().css('text-indent', '0em');

$( "p" ).filter(function( index ) { return index === 1 }).css('text-indent', '0em')






})(jQuery);
