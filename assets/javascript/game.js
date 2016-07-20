document.getElementById('jumboplay');
document.getElementById('mainBody');
document.getElementById('wins').innerText = 0;

//Hipster theme, yo.
var wordsList = ["ironic", "filter", "chella", "brooklyn", "barrista", "liberal", "basic", 
"thundercats", "ugh", "gentrify", "juicing", "kitsch", "kogi", "biodiesel", "chartreuse", 
"skateboard", "artisan", "pitchfork", "organic", "ipa", "ethical", "chambray", "overexposed", "hashtag", "umami", "kale",
"sriracha", "affogato", "brunch", "aesthetic", "banjo", "distillery", "chill", "vegan", "typewriter",
"quinoa", "tumblr", "hammock", "dreamcatcher", "beard", "cronut", "emoji", "moustache", "unicycle"];


//possible animal theme option, yay
//eventually i want to make a dropdown menu so that I can change
//the theme of the words and also css things
var animalList = ['alligator', 'bear', 'camel', 'deer', 
'elephant', 'frog', 'goose', 'horse', 'iguana', 'jellyfish', 
'kangaroo', 'lion', 'monkey', 'newt', 'owl', 'panda', 'quail', 
'rhino', 'snake', 'turtle', 'unicorn', 'vulture', 'whale', 
'xray', 'yak', 'zebra'];


//new game means that everything refreshes so you get a new word
function newGame() { 
    document.getElementById('hangmanimage').src = "assets/images/hangman.png";
    
    
    //at the beginning of the game you have 6 chances to miss a letter
    document.getElementById('guessesLeft').innerText = 6;
    var alreadyGuessed = [];
    document.getElementById('alreadyGuessed').innerText = '';
    
    //Use mathrandom to pick a random word aka wordsList[i] 
    var mysteryWord = wordsList[Math.floor(Math.random() * wordsList.length)];
    document.getElementById('mysteryWord').innerText = '';
    
    //this is how we get the blanks where the letters are. each indexed letter gets a blank
    for (var i = 0; i < mysteryWord.length; i++)
        document.getElementById('mysteryWord').innerText += '_';
    
    //keyboard typed letters register in the game
    window.onkeydown = function(pick) {
        var letterGuessed = String.fromCharCode(pick.keyCode).toLowerCase();
        
        //need to make sure the key pushed is actually a letter and not something weird
        if (letterGuessed >= 'a' && letterGuessed <= 'z') { 
            
            
            //IF THE LETTER IS not IN THE WORD
            //like the -1 array function. this means the letter isn't in the word
            if (mysteryWord.indexOf(letterGuessed) == -1) {
                
                //makes sure that you don't guess the same wrong letter twice
                //-1 array function means the letter isn't in the list of "letters you guessed"
                if (alreadyGuessed.indexOf(letterGuessed) == -1) {
                    
                    //push the letter you guess to the letterGuessed list on screen
                    alreadyGuessed.push(letterGuessed);
                    document.getElementById('alreadyGuessed').innerText += ' ' + letterGuessed;
                    
                    //counter so that "Guesses Until You Lose" goes down by 1
                    document.getElementById('guessesLeft').innerText--;
                    
                    //Changing photo as you lose lives
                    if (document.getElementById('guessesLeft').innerText == '5') {
                        document.getElementById('hangmanimage').src = "assets/images/1.png";
                    }
                    else if (document.getElementById('guessesLeft').innerText == '4') {
                        document.getElementById('hangmanimage').src = "assets/images/2.png";
                    }
                    else if (document.getElementById('guessesLeft').innerText == '3') {
                        document.getElementById('hangmanimage').src = "assets/images/3.png";
                    }
                    else if (document.getElementById('guessesLeft').innerText == '2') {
                        document.getElementById('hangmanimage').src = "assets/images/4.png";
                    }
                    else if (document.getElementById('guessesLeft').innerText == '1') {
                        document.getElementById('hangmanimage').src = "assets/images/5.png";
                    }
                    
                    else  {
                        document.getElementById('hangmanimage').src = "assets/images/6.png";
                        alert('ur 2 basic 2 play. The word was ' + mysteryWord +'.');
                        setTimeout(newGame(), 300000000000000000);
                    }
                }
            }
            
            //IF THE LETTER is IN THE WORD
            else {
                //if the letter hasn't been guessed it's not in the letterGuessed array yet so it's -1
                if (alreadyGuessed.indexOf(letterGuessed) == -1) {
                    
                    //push it, push it to the limit, limit, cuz we in it to win it in it to win it oh yeah
                    alreadyGuessed.push(letterGuessed);
                    
                    //still put guesses that were correct into the letterGuessed box on the page
                    document.getElementById('alreadyGuessed').innerText += ' ' + letterGuessed;
                    
                    //ugh please work
                    //when the letter guessed matches a letter in the word add the letter guessed into the new word of _ and letters
                    var newWord = '';
                    for (var i = 0; i < mysteryWord.length; i++)
                        if (mysteryWord[i] == letterGuessed)
                            newWord += letterGuessed;
                        else
                            newWord += document.getElementById('mysteryWord').innerText[i];
                    //this adds all the letters into the blanks
                    document.getElementById('mysteryWord').innerText = newWord; 
                    
                    //once the word doesnt have any blanks it means you won the game!
                    if (document.getElementById('mysteryWord').innerText.indexOf('_') == -1) { // If all letters are opened - user wins
                        alert ('Wow you are v relevant. The word was ' + mysteryWord + '.');
                        
                        //win counter increases with each hangman win game
                        document.getElementById('wins').innerText++;
                        newGame();
                    }
                }
            }
        }
    }
}
newGame();
document.getElementById('hangmanimage').src = "assets/images/hangman.png";