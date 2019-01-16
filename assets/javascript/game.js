/*


Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!
Use key events to listen for the letters that your players will type.
Display the following on the page:
Press any key to get started!
Wins: (# of times user guessed the word correctly).



If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
As the user guesses the correct letters, reveal them: m a d o _  _ a.



Number of Guesses Remaining: (# of guesses remaining for the user).
Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
After the user wins/loses the game should automatically choose another word and make the user play it.




*/

var hiddenWords = ["metroid", "zelda", "castlevania", "galaga"];
var wins = 0;
var hiddenWord = hiddenWords[Math.floor((Math.random() * hiddenWords.length))];
var guessedLetters = [];
var currentWord = new Array(hiddenWord.length);
var displayWord = (currentWord).join("_ ");
var gamezone = document.getElementById("gamezone");



document.getElementById('start').onclick = function () {
    console.log('start');

    if (gamezone.style.display === "none") {
        gamezone.style.display = "block";
        startGame();
    } else {
        gamezone.style.display = "none";
    }

}

function startGame() {
    shouldDisplayWord ();
    document.onkeyup = function keyPress (event) {
        console.log(event);
        var userGuess = event.key;

    }};
//   document.onkeypress = function(event){
//       var event = event || window.event,
//       charCode = event.keycode || event.which,
//       guessedLetters = string.fromCharCode(charCode)
//   }  
