//Declare your variables
var gameOver = false;
var wins = 0;
var losses = 0;
var totalScore = 0;
var goalNumber = 0;
var blue;
var gold;
var green;
var purple;


//Declare your functions
//Random Number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

//Game reset function
function gameReset() {
    var gameOver = false;
}


//Setup the first game

//Assign the goal number
goalNumber = randomNumber(19, 120);

//Display the goal number
$("#random-number").text(goalNumber);

//Assign random values to the crystals
blue = randomNumber(1, 12);
gold = randomNumber(1, 12);
green = randomNumber(1, 12);
purple = randomNumber(1, 12);

//Assign the HTML values
$("#blue").attr("value", blue);
$("#gold").attr("value", gold);
$("#green").attr("value", green);
$("#purple").attr("value", purple);

//Make it so when you click a crystal you start adding to your score
$("#blue").on("click", function() {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    console.log(totalScore);
    console.log(goalNumber);
});

$("#gold").on("click", function() {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    console.log(totalScore);
    console.log(goalNumber);
});

$("#green").on("click", function() {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    console.log(totalScore);
    console.log(goalNumber);
});
$("#purple").on("click", function() {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    console.log(totalScore);
    console.log(goalNumber);
});

// Create the logic to win or lose the game

if (totalScore === goalNumber) {
    wins += 1;
    $("#wins").text(wins);
    gameOver = true;
};

if (totalScore > goalNumber) {
    losses += 1;
    $("#losses").text(losses);
    gameOver = true;
};

if (gameOver === true) {
    gameReset();
};


