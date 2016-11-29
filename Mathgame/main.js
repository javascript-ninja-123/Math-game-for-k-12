$(document).ready(function(){
//display-none
for(var i=1; i<=10; i++){
$("#q"+i).css("display","none");
}

//prepage
$("#prepageButton").click(function(){
value = $("#prepageText").val();	
if(value != ""){
alert( " Welcome " + value + "!");
$("#q1").css("display","block");
$("#q0").slideUp(600);
}
});

//question1
$("#q1Button").click(function(){
value = $("#q1Text").val();
if(value == -4){
	alert("correct");
	$("#q2").css("display","block");
	$("#q1").slideUp(600);
}
else{
alert("do it again");
}
});

//question2
$("#q2Button").click(function(){
value=$("#q2Text").val();
if(value == 3){
	alert("correct");
		$("#q3").css("display","block");
	$("#q2").slideUp(600);
}
else{
alert("do it again");
}
});

//question3
$("#q3Button").click(function(){
value=$("#q3Text").val();
if(value == 48){
	alert("correct");
		$("#q4").css("display","block");
	$("#q3").slideUp(600);
}
else{
alert("do it again");
}
});
//question4
$("#q4Button").click(function(){
value=$("#q4Text").val();
if(value == 34){
	alert("correct");
		$("#q5").css("display","block");
	$("#q4").slideUp(600);
}
else{
alert("do it again");
}
});
});