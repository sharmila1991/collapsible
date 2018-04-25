$(document).ready(()=>{
	
	$( "p" ).hide();
	$("a").hover(function(){
		$(this).css("color","#00b3b3");
	},
		function(){
			$(this).css("color","blue");
		}
	);
	
	$( "#first" ).click(function() {
		
		$( "#one" ).toggle();
		  $("#two").hide();
		  $("#three").hide();
	});
	
	$( "#second" ).click(function() {
		
		$( "#two" ).toggle();
		  $("#one").hide();
		  $("#three").hide();
	});
	
	$( "#third" ).click(function() {
		
		$( "#three" ).toggle();
		  $("#one").hide();
		  $("#two").hide();
	});
})