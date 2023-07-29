var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var randomChosenColor;
function nextSequence()
{
    var randomNumber=Math.floor(Math.random()*4);
    // if(randomNumber==0)
    // {
    //     randomChosenColor = buttonColors[0];
    //     gamePattern.push(randomChosenColor);
    // }
    // else if(randomNumber==1)
    // {
    //     randomChosenColor = buttonColors[1];
    //     gamePattern.push(randomChosenColor);
    // }
    // else if(randomNumber==2)
    // {
    //     randomChosenColor = buttonColors[2];
    //     gamePattern.push(randomChosenColor);
    // }
    // else{
    //     randomChosenColor=buttonColors[3]; 
    //     gamePattern.push(randomChosenColor); 
    //  }
   // console.log(randomChosenColor);
   randomChosenColor = buttonColors[randomNumber];
   gamePattern.push(randomChosenColor);
   //console.log(gamePattern);
   
}
nextSequence();