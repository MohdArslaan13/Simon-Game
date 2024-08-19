var buttonColors = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0; 
var started = false;


$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer (currentLevel){

    
     if( gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        
       

           if(userClickedPattern.length === gamePattern.length){

            setTimeout(function(){
                nextSequence();
            },1000);

           }
        }
    else{
        

        playSound("wrong");

        $("body").addClass("game-over");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200)
        var score = gamePattern.length - 1;
        $("h1").text("Game Over, Click on Start to Play ");
        $("h3").text("Your Score: "+score);


         
        startOver();
          
    }



  function startOver () {
    level = 0;
    gamePattern = [];
    started = false;



  }  


 
 }

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}


$("#start-button").click(function(){
    

    if(!started) 
nextSequence();

    started= true;

});







function nextSequence(){

    userClickedPattern=[];
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);
    
    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);


    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

        playSound(randomChosenColor);
}



function animatePress(currentColor){

    $("#"+currentColor).addClass("pressed");

    setTimeout(function(){
        $("#"+currentColor).removeClass('pressed');
    });

}


