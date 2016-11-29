//Q and A
var questions =[

{ question: "Solve (-x + 5) -2 = (-x + 2) 4",
  answer:3
},
{question: "Evaluate [6 - (5 - 3(3 - 5) + 5)] + 6",
  answer:-4

},
{
	question: "Solve 14 + 34",
  answer:48
},
{
	question: "Solve 70 - 36",
  answer:34
}
];
//background -image
var backgroundImage =[
"img/background2.png",
"img/background2.png",
"img/background3.gif",
"img/background4.gif",
"img/background5.jpg",
];
//background-image css
function backgroundLoad(){
for(var i=0; i<backgroundImage.length; i++){
document.getElementById("q0"+i).style.backgroundImage = "url("+backgroundImage[i]+")";
}
}
//Question
for(var i=0; i<questions.length; i++){
document.getElementById("h3"+i).textContent = questions[i].question;
}
//click function
$(document).ready(function(){
//display-none
for(var i=0; i<questions.length; i++){	
$("#q0"+i).css("display","none");
$("#h2"+i+"").text("Question"+(i+1));
}
//prepage
$("#opening").css("display","none");
$("#prepageButton").click(function(){
value = $("#prepageText").val();	
if(value != ""){
alert( " Welcome " + value + "!");
$("#opening").css("display","block");
$("#q0").slideUp(600);
}
});
//questions and answer
for(var i=0; i<questions.length;i++){
	$("#qButton"+i+"").click(function(){
		for(var j=0;j<questions.length;j++){
		 var val = $("#qText"+j+"").val();
		 if(val == questions[j].answer){
		 return alert("correct");	
		 }
		 else{
		 return alert("do it again");
		 }
		}	
	});
}


$("#watch").click(function(){
$("#monster1").animate({
	right:"250px"
});

$("#princess").delay(1000).animate({
	left:"250px"
});
$("#man").delay(2000).animate({
	left:"280px"
});
$("#monster1").delay(3000).animate({
	left:"450px"
});
$("#princess").delay(3200).animate({
	left:"650px"
});
$("#princess,#monster1").fadeOut(5000);
$("#monster2").delay(5400).fadeOut(4000);
$("#man").delay(5400).animate({
	left:"470px",
	width: "+=50px"
});



});

$("#save").click(function(){

	$("#q00").css("display","block");
$("#opening").slideUp(600);
});



//question1
$("#qButton0").click(function(){
value = $("#qText0").val();
if(value == 3){
	$("#q01").css("display","block");
	$("#q00").slideUp(600);
}
});
//hint00
$("#hint0").css("display","none");
$("#hButton0").click(function(){
$("#hint0").css("display","block");
setTimeout(function(){
$("#hint0").hide();

},7000);

});
//hint01
$("#hint1").css("display","none");
$("#hButton1").click(function(){
$("#hint1").css("display","block");
setTimeout(function(){
$("#hint1").hide();

},7000);

});


//question2
$("#qButton1").click(function(){
value=$("#qText1").val();
if(value == -4){
$("#q02").css("display","block");
$("#q01").slideUp(600);
}
});
//hint2
$("#hint2").css("display","none");
$("#hButton2").click(function(){
$("#hint2").css("display","block");
setTimeout(function(){
$("#hint2").hide();

},7000);

});
//question3
$("#qButton2").click(function(){
value=$("#qText2").val();
if(value == 48){
$("#q03").css("display","block");
$("#q02").slideUp(600);
}
});
$("#hint3").css("display","none");
$("#hButton3").click(function(){
$("#hint3").css("display","block");
setTimeout(function(){
$("#hint3").hide();

},7000);
});
//question4
	$("#q04").css("display","none");
$("#qButton3").click(function(){
value=$("#qText3").val();
if(value == 34){
		$("#q04").css("display","block");
	$("#q03").slideUp(600);
}
});
 });