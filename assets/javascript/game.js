//creating counters for win/lose/how many guesses left
var wins = 0;
var losses = 0;
var guessLeft = 10

//grabbing the html to use for javascript
var youWin = document.getElementById("win");
var youLose = document.getElementById("lose");
var yourGuess = document.getElementById("guess");
var guessSofar = document.getElementById("left");
var myMusic = document.getElementById("music");
var myMusic2 = document.getElementById("music2");


//audio for when the user win/lose
var playMusic = function play() {
    myMusic.play();
}
var playMusic2 = function play() {
    myMusic2.play();
}


yourGuess.textContent = guessLeft;

//creating an array
var alpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//having the cpu choose a random letter from the array
var cpuGuess = alpha[Math.floor(Math.random() * alpha.length)];
    console.log(cpuGuess);

//creating a function to reset the game
var reset = function(){
    var cpuGuess = alpha[Math.floor(Math.random() * alpha.length)];

    console.log(cpuGuess);
    guessLeft = 10;

    guessSofar.textContent = "";

    document.onkeyup = function(event) {
        var userGuess = event.key;
        //console.log(userGuess);
    
        if(userGuess === cpuGuess){
            playMusic();
            alert("You Win!");
            wins++;
            reset();
        }else{
            guessLeft--;
            for(var i = 0; i < 1; i++){
                guessSofar.textContent += userGuess
            };
        if(guessLeft === 0){
            playMusic2();
            alert("You Lose");
            losses++;
            reset();
        }
    
    
        }
    
        youWin.textContent = wins;
        youLose.textContent = losses;
        yourGuess.textContent = guessLeft;
        
    };

};

//getting the user input
document.onkeyup = function(event) {
    var userGuess = event.key;
    //console.log(userGuess);
    //if statement to see if the user input is equal to cpu
    if(userGuess === cpuGuess){
        playMusic();
        alert("You Win!");
        wins++;
        reset();
    }
    //this else statement -1 the guesses left and inputs the user guess letter into guesses so far
    else{
        guessLeft--;
        for(var i = 0; i < 1; i++){
            guessSofar.textContent += userGuess
        };
    //the user loses if guesses left = 0 
    if(guessLeft === 0){
        playMusic2();
        alert("You Lose");
        losses++;
        reset();
    }


    }
    //combining html with the counter
    youWin.textContent = wins;
    youLose.textContent = losses;
    yourGuess.textContent = guessLeft;
    
};
