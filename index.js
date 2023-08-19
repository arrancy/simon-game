var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"]
function checkPattern(){
if(userClickedPattern[userClickedPattern.length - 1] === gamePattern[userClickedPattern.length - 1]) {
  if (userClickedPattern.length === gamePattern.length) {
  setTimeout(function (){
    nextSequence();
     userClickedPattern = [];
  }, 1000)
  } else {

  }
}
else {
  $("h1").text("game over, press any key to restart the game");
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  }, 300);
  playSound("wrong");

  $(document).on("keypress", restartGame );
}
}
function restartGame (){
   userClickedPattern = [];
   gamePattern = [];
   level = 0;
   $("h1").text("level " + level);
   nextSequence();
}

$(".btn").on("click", function(event){
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkPattern();

  })
var level = 0;
$(document).one("keypress", function(){

  $("h1").text("level " + level);
  nextSequence();
})
function playSound(name){
  var currentSound = new Audio("sounds/" + name + ".mp3");
  currentSound.play();
}
function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor).animate({opacity:0.3}, 150, function(){
    $("#" + randomChosenColor).animate({opacity:1.0}, 150);
})
  $("h1").text("level " + level);
  level++;
    playSound(randomChosenColor);
}
