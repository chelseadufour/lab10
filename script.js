$(function(){

	$(".form-group").hide().filter("#seat").show();

	//hover to fade button
	var $seat = $("button.button");
	$seat.mouseenter(function(){
		$(this).fadeTo("fast", 0.5);
	});

	$seat.mouseleave (function(){
		$(this).fadeTo("fast", 1);
	});


	//click to toggle the blue class
	// $seat.click(function(){
	// 	$(this).toggleClass("blue");
	// 	//$(this).unbind("onmouseover").unbind("onmouseout");

	// });

var arraySeats =[];

$(".button").on('click',function() {
  var text = $(this).text();
  $("#input").val(text);

//Puts seats into an array and prints them in the input
	if (text !== "reserved"){
	arraySeats.push(text);
	console.log(arraySeats);
	arraySeats.forEach(function(each){
		$("#input").val(arraySeats);
	})

//******Adds input once previous input is filled******

$( "#name" ).keypress(function() {
  $("#email").show();
});

$( "#email" ).keypress(function() {
  $("#date").show();
});

$( "#email" ).keypress(function() {
  $("#submit").show();
});

//******Check that fields are filled in to submit******
$(".btn").click(function(){
	var $name = $("input#enterName");
	var $email = $("input#enterEmail");
	var $date = $("input#selectDate");
	var $allSeats = $("input#input");
	if(!$name.val())
		//&& !$email.val() && !$date.val() && !$allSeats.val()
	{
		$("ul.textbox").append('<li>' + "Fill out all fields" + '</li>');
	}
		else if(!$email.val()){
			$("ul.textbox").append('<li>' + "Fill out all fields" + '</li>');
		}
			else if(!$date.val()){
				$("ul.textbox").append('<li>' + "Fill out all fields" + '</li>');
			}
				else if(!$allSeats.val()){
					$("ul.textbox").append('<li>' + "Fill out all fields" + '</li>');
				}



	else{
		$name = $name.val();
		$email = $email.val();
		$date = $date.val();
		$allSeats = $allSeats.val();
		console.log($name);
		//$(".textbox").append("<li>" +$name + "</li>" + "<li>" + $email + "</li>" +"<li>" $date + "</li>" + $allSeats +"</li>");
		$("ul.textbox").append('<li>' + $name + '</li>');
		$("ul.textbox").append('<li>' + $email + '</li>');
		$("ul.textbox").append('<li>' + $date + '</li>');
		$("ul.textbox").append('<li>' + $allSeats + '</li>');

		// $(".textbox").val($email);
		// $(".textbox").val($date);
		// $(".textbox").val($allSeats);

	}
});

//Changes text in button from seat number to 'reserverd'//

$("button").on("click", function() {
  var el = $(this);
  if (el.text() === el.data("text-swap")) {
    el.text(el.data("text-original"));
  } else {
    el.data("text-original", el.text());
    el.text(el.data("text-swap"));
  }
 });





















});
