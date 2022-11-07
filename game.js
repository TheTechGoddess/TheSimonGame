var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = true;

function nextSequence() {
    var randomNumber = Math.floor(Math.random()*(buttonColours.length));
    var randomChosenColour = buttonColours[randomNumber];
    console.log(randomChosenColour);
    gamePattern.push(randomChosenColour);
    //console.log(gamePattern);

    $("#"+randomChosenColour).on("click", function() {
        $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        makeSound(randomChosenColour);
    })

    //console.log(level++)
    $("h1").text("Level " + level++);

}

function makeSound(key) {
    switch (key) {
        case "blue":
             var blue =new Audio("sounds/blue.mp3");
            blue.play();
            break;

        case "green":
             var green =new Audio("sounds/green.mp3");
             green.play();
             break;  

        case "red":
            var red =new Audio("sounds/red.mp3");
            red.play();
            break;

        case "yellow":
            var yellow =new Audio("sounds/yellow.mp3");
            yellow.play();
            break; 

        case "wrong":
            var wrong =new Audio("sounds/wrong.mp3");
            wrong.play();
            break;
            
      default:
          console.log(buttonInnerHtml);
          break;
  }
}

 $(".btn").on("click", function() {
        var userChosenColour = $(this).attr("id");
        //console.log(userChosenColour);
        userClickedPattern.push(userChosenColour);
        //console.log(userClickedPattern)
        makeSound(userChosenColour);
        animatePress(userChosenColour);
})

function animatePress(currentColour) {
    $(".btn").on("click", function(){
        var press = $(this).addClass("pressed");

        setTimeout(function() {
            press.removeClass("pressed");
        }, 100);
    });
}

    
$(document).bind("keypress", (function(event) {
    
    if (started == true) {
        nextSequence();
    //console.log(event.key); 
    }
})
)
//function checkAnswer(currentLevel) {

//}