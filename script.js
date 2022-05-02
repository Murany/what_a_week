$(document).ready(function(){
	

let dayname = new Date().toLocaleDateString('en-us', { weekday:"long"});


switch (dayname) {
  case 'Friday':
    $("#comic").css("background-image", "url(drinking1.jpg)"); 
    break;
  case 'Saturday':
	$("#comic").css("background-image", "url(drinking2.jpg)");
	break;	
  case 'Sunday':
    $("#comic").css("background-image", "url(drinking3.jpg)"); 
    break;
  default:
	$("#day_name").text(dayname);
}

});