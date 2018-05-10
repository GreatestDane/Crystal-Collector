//Declare your variables
var gameOver = false;
var wins = 0;
var losses = 0;
var totalScore = 0;
var goalNumber = 0;
var blue = 0;
var gold = 0;
var green = 0;
var purple = 0;


//Declare your functions
//Random Number for goal function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Random Number for Crystals function
function crystalShuffle() {
    blue = randomNumber(1, 12);
    gold = randomNumber(1, 12);
    green = randomNumber(1, 12);
    purple = randomNumber(1, 12);
}

//Game reset function
function gameReset() {
    gameOver = false;
    totalScore = 0;
    $("#total-score").text(totalScore);
    goalNumber = randomNumber(19, 120);
    $("#random-number").text(goalNumber);
    crystalShuffle();
    $("#blue").attr("value", blue);
    $("#gold").attr("value", gold);
    $("#green").attr("value", green);
    $("#purple").attr("value", purple);
}

// Create the logic to win or lose the game
function gameLogic() {

    if (totalScore === goalNumber) {
        wins += 1;
        $("#wins").text(wins);
        gameOver = true;
    }

    else if (totalScore > goalNumber) {
        losses += 1;
        $("#losses").text(losses);
        gameOver = true;
    };

    if (gameOver === true) {
        gameReset();
    };
};

//Setup the first game

//Assign the goal number
goalNumber = randomNumber(19, 120);

//Display the goal number
$("#random-number").text(goalNumber);

//Assign random values to the crystals
crystalShuffle();

//Assign the HTML values
$("#blue").attr("value", blue);
$("#gold").attr("value", gold);
$("#green").attr("value", green);
$("#purple").attr("value", purple);

//Make it so when you click a crystal you start adding to your score
$("#blue").on("click", function () {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    gameLogic();
});

$("#gold").on("click", function () {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    gameLogic();
});

$("#green").on("click", function () {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    gameLogic();
});

$("#purple").on("click", function () {
    totalScore += Number(($(this).attr('value')));
    $("#total-score").text(totalScore);
    gameLogic();
});



