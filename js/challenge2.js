

$(document).ready(function(){

	$("#useBilling").click(function(){
  
	  if($(this).is(':checked')){
		var newvalue = $("#billing").val()
		$("#home").val(newvalue);
		$("#home").prop("disabled", true);
	  }else {
		$("#home").val("");
		$("#home").prop("disabled", false);
	  }
  
	});
  });