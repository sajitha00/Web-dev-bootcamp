var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var detectKeypress=false;


$(document).keypress(function(){
   //console.log("function called");
if (detectKeypress==true)
{
$("#level-title").text("Level"+level);
nextSequence();
started=true;
}
});

//button click function

$(".btn").click(function()
{
   var userChosenColor = $(this).attr("id");
   userClickedPattern.push(userChosenColor);
   playSound(userChosenColor);
   animatePress(userChosenColor);
});

//nextSequence function

function nextSequence()
{
   level=level+1;
   $("#level-title").text("Level " + level);
   var randomNumber=Math.floor(Math.random()*4);
   var randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   
   $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(randomChosenColor);
   
}

//play sound function
function playSound(name)
{
   //$("#green").fadeOut(100).fadeIn(100).fadeIn(100);
   var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

    

function animatePress(currentColor)
{
   $("#"+currentColor).addClass("pressed");

   setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");

   },100)

};

   


//nextSequence();