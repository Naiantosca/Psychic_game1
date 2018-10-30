
var alphabet= ["a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins= 0;
var losses= 0;
var guesses= 9;
var limit= 0;


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
var lettersGuessed = [];

document.onkeyup = function(event) {
    var letterGuess = event.key;

    lettersGuessed.push(letterGuess);
    
};





document.onkeypress = function(event) {
    var userInput = event.key;

    if(userInput === computerChoice){
        wins++;
    }else{
        guesses--;
    }

    if(guesses === 0){
        losses++ 
    }

    if(guesses === limit) {
        document.location.reload()
    }

    




    
    
    

    


    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("lose").innerHTML = "losses: " + losses;
    document.getElementById("guess").innerHTML = "Guesses left: " + guesses;
    document.getElementById("far").innerHTML = "Your guesses so far: " + lettersGuessed.join(", ");

}
