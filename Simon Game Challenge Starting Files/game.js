var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern =[];
var userClickedPattern = [];
var randomChosenColour ;
var level = 0;
var started = false;

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel]==gamePattern[currentLevel]) {
        console.log("Success.");
        if (userClickedPattern.length===gamePattern.length) {
            setTimeout(function(){
                nextSequence();
                },1000);
               
        }
    } else {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        level = 0;
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").addClass("gameover");
        setTimeout(function(){$("body").removeClass("gameover")},200);
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}


$(".btn").on("click",function (event){
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    console.log(userClickedPattern);
});

$("body").keypress(function(event){
    if(!started){
        $("#level-title").text("Level "+level);
        nextSequence();
        started=true;
}});

function nextSequence(){
    userClickedPattern = []; 
    level++;
    $("#level-title").text("Level "+level);
    var randomNumber = Math.floor(Math.random()*4);
   // console.log(randomNumber);
    var randomChosenColour = buttonColours[randomNumber];
   // console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
    playSound(randomChosenColour);
    animatePress(randomChosenColour);
    console.log(gamePattern);
   
    
    
    return randomChosenColour;
 //nextSequence();
}

function playSound(song){

    var audio = new Audio("sounds/"+song+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$("#"+currentColour).removeClass("pressed")},50);
}




// var buttonPressed = 
