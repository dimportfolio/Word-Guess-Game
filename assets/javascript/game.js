//list of words - recomment back this list
// var wordList = ["charmander","bulbasaur","squirtle","pikachu","eevee","snorlax","dragonite"];
var wordList = ["eevee"];
//random word generator
var generator = wordList[Math.floor(Math.random() * wordList.length)];

var correctGuess = 0;
var incorrectGuess = 0;
console.log(generator);

var cloak = [];

newWord = Array(generator.length).fill('_ ');
console.log(currentWord.join());
document.getElementById("random").innerHTML = newWord;
// console.log(currentWord);
// for(i=0;i<generator.length;i++){
// var hiddenWord = generator.substr(i, 1);
// cloak.push(hiddenWord);

// };
// var newWord = cloak.join();
// console.log(newWord);
// console.log(cloak.fill("-"));
// document.getElementById("random").innerHTML = cloak.join();

//main function 
document.onkeyup = function (enter){
    var store = enter.key;
    console.log(store);
    // if (generator.find(store)) {
    //     cloak.push(generator.indexOf(store));
    //     document.getElementById("random").innerHTML = cloak;
    // }
    
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
    

    
}













//---------------------------------
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