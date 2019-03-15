var wordList = ["charmander","bulbasaur","squirtle","pikachu","eevee","snorlax","dragonite"];
//random word generator


function randomizer() {
    var generator = wordList[Math.floor(Math.random() * wordList.length)];
    return generator;
}
var generator = randomizer();

function change() {
    var newWord = Array(generator.length).fill('_ ');
    return newWord;
}
var newWord = change();;

//variables and arrays
var wins = 0;
var losses = 0;
var guessRemaining = 9;
var incorrectGuess = [];
var cloak = [];
var indices = [];

//main function 

document.onkeyup = function (enter){
    var store = enter.key;
    var idx = generator.indexOf(store);

// logic to run through and find if  the guess is in the generated word

    if (generator.search(store) != -1){
        while (idx != -1) {
            indices.push(idx);
            idx = generator.indexOf(store, idx + 1);
        }
// loop that goes through and fills in the stored key that is correct, in the indexes that is stored from the while loop
        for (i=0;i<indices.length;i++){
            newWord.splice(indices[i],1, store);
            document.getElementById("random").innerHTML = newWord;
        }
// reset the array that stored the index values. needed so the array isnt constantly filled with old numbers
        indices.length=0;

    }
// logic in order to populate the wrong guesses onto the page
    else {
        incorrectGuess.push(store);
        document.getElementById("wrong").innerHTML = incorrectGuess;
        guessRemaining = guessRemaining - 1;
        document.getElementById("remain").innerHTML = "Number of guesses remaining: " + guessRemaining;

    }
    
    // logic that happens when you've guessed all the words
    if (newWord.join("") == generator){
        prompt("you win");
        wins++;
        incorrectGuess.length = 0;
        newWord.length = 0;
        guessRemaining = 9;
        generator = randomizer();
        newWord = change();
        randomizer();
        change();
        document.getElementById("random").innerHTML = change();
        document.getElementById("wrong").innerHTML = ""; 
        document.getElementById("remain").innerHTML = "Number of guesses remaining: " + guessRemaining;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
    }
    // logic that happens when you've used all your guesses
    if (guessRemaining == 0) {
        prompt("you lose");
        losses++;
        incorrectGuess.length = 0;
        newWord.length = 0;
        guessRemaining = 9;
        generator = randomizer();
        newWord = change();
        randomizer();
        change();
        document.getElementById("random").innerHTML = change(); 
        document.getElementById("wrong").innerHTML = ""; 
        document.getElementById("remain").innerHTML = "Number of guesses remaining: " + guessRemaining;
        document.getElementById("lose").innerHTML = "Losses: " + losses;
    }
    console.log(guessRemaining);
    }

//---------------------------------

/*
var n = generator.search(store);
            if (n != -1) {
                correctGuess++;
                document.getElementById("test1").innerHTML = correctGuess;
            }
            else {
                incorrectGuess++;
                document.getElementById("test2").innerHTML = incorrectGuess;
            }

*/
/*
var incorrectGuesses = [];
var idx = wordList.indexOf(store);
while(idx!=-1){
    incorrectGuesses.push(idx);
    idx=array.indexOf(store, idx+1);
    
}
console.log("Number of incorrect guesses" + incorrectGuesses.length);
*/
//----------------------------------

/* Tried to say , if generator includes generator, then replace generator with function
the function would create a hyphen that is the length of generator.... but it didnt work.
if (generator.includes(generator)){
    generator.replace(generator, function(){
        hyphen.repeat(generator.length);
    
        
    })
    console.log(generator);
}
*/


/*

var hyphen = "_";

// I wanted to create a hyphened variable that would be the length of the generated word. 
// So I thought, I wanted to loop through to create a hyphen for each character in the word
// What I found was the repeat function, so I created a hyphen, made it repeat by the length of the generated word.
// this code creates a hyphen variable the same length as generator
// I tried taking out the for loop to see if it would work on its own but it does not... not sure why
for(i=0;i<generator.length;i++){
var hiddenWord = hyphen.repeat(generator.length);
console.log(hiddenWord);
}
*/


/*


var hyphen = "- ";

// I wanted to create a hyphened variable that would be the length of the generated word. 
// So I thought, I wanted to loop through to create a hyphen for each character in the word
// What I found was the repeat function, so I created a hyphen, made it repeat by the length of the generated word.
// this code creates a hyphen variable the same length as generator
// I tried taking out the for loop to see if it would work on its own but it does not... not sure why
for(i=0;i<generator.length;i++){
var hiddenWord = hyphen.repeat(generator.length);
console.log(hiddenWord);
var checkindex = generator.indexOf("-");
console.log(checkindex);

document.getElementById("random").write = (String("'" + hiddenWord + "'"));
}

*/


/*


for(i=0;i<generator.length;i++){
        var hiddenWord = generator.replace(generator.charAt(i), "-");

        alert(hiddenWord);

};

prints out this
-evee
-evee
ee-ee
-evee
-evee

*/


/*

this stores all values into an array
var cloak = [];

    for(i=0;i<generator.length;i++){
     var hiddenWord = generator.substr(i, 1);
    cloak.push(hiddenWord);
        console.log(hiddenWord);
        console.log(cloak);

};
*/




/*


used this 

var cloak = [];

for(i=0;i<generator.length;i++){
var hiddenWord = generator.substr(i, 1);
cloak.push(hiddenWord);

};
var newWord = cloak.join();
console.log(newWord);
alert(newWord);
console.log(cloak.fill("-"));
document.getElementById("random").innerHTML = cloak.join();

*/


/* dont know what this code was 

// [0, 2, 4]
      /*
    if (generator.indexOf(store) != -1){
        console.log(generator.indexOf(store));
        newWord.splice(generator.indexOf(store), 1, store);
        // newWord.push(store);
        document.getElementById("random").innerHTML = newWord;
    }
    */
    // if (generator.find(store)) {
    //      cloak.push(generator.indexOf(store));
    //      document.getElementById("random").innerHTML = cloak;
    //  }
    
    /*
    var n = generator.search(store);
    if (n != -1) {
        correctGuess++;
        document.getElementById("test1").innerHTML = correctGuess;
    }
    else {
        incorrectGuess++;
        document.getElementById("test2").innerHTML = incorrectGuess;
    }
    */

    /* button


    start game button
function startGame(){
document.getElementById("random").innerHTML = newWord.join(" ");
console.log(generator);
}
startGame();

*/