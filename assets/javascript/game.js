var crystal = {
    blue:
    {
      name: "Blue",
      value: 0
    },
    green:
    {
      name: "Green",
      value: 0
    },
    red:
    {
      name: "Red",
      value: 0
    },
    yellow:
    {
      name: "Yellow",
      value: 0
    }
  };

var currentScore = 0;
var targetScore = 0;
// Wins and Losses
var winCount = 0;
var lossCount = 0;

var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var startGame = function() {
      console.log('run')
    currentScore = 0 
    targetScore = getRandom(5, 200)
    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    console.log(currentScore)
    console.log(targetScore)
    $("#totalscore-text").text(currentScore);
    $("#targetscore-text").text(targetScore);

  }


  startGame();

  var checkWin = function() {
    // Check if currentScore is larger than targetScore
    if (currentScore > targetScore) {
      alert("Sorry. You lost!");
      console.log("You Lost");
      // Add to Loss Counter
      lossCount++;
      // Change Loss Count HTML
      $("#loseses-text").text(lossCount);
      // Restart the game
      startGame();
    }
    else if (currentScore === targetScore) {
      alert("Congratulations! You Won!");
      console.log("You Won!");
      // Add to the Win Counter
      winCount++;
      // Change Win Count HTML
      $("#wins-text").text(winCount);
      // Restart the game
      startGame();
    } else {
        console.log("keep playing")
    }
  };

  var addValues = function(clickedCrystal) {
    // Change currentScore
    currentScore += clickedCrystal.value;
    // Change the HTML to reflect changes in currentScore
    $("#totalscore-text").text(currentScore);
    // Call the checkWin Function
    checkWin();
    // Testing Console
    console.log("Your Score: " + currentScore);
  };


  $("#purple").click(function() {
    //   console.log("blue!!!!")
    addValues(crystal.blue);
  });
  $("#blue").click(function() {
    addValues(crystal.red);
  });
  $("#lilac").click(function() {
    addValues(crystal.green);
  });
  $("#pink").click(function() {
    addValues(crystal.yellow);
  });

  
