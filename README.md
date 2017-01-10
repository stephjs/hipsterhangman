## Spoiler, the answer is ironic...
In this hipster-themed vanilla javascript hangman game, players guess letters to make words like "gentrify" and "cronut." Play the game: [http://hipster-hangman.herokuapp.com](http://hipster-hangman.herokuapp.com)

![screenshot 1](https://cloud.githubusercontent.com/assets/18673328/21817653/b59e07da-d719-11e6-93be-b8834d1954c0.jpeg)

## Game Play

- The computer picks a random word from the array of hipster lingo and shows the player a blank for every letter of the word.
- The player types a letter to guess. 
- If it's a correct guess, the letter will replace a blank. The letter will also appear in the "Already Guessed" box for player reference.
- Incorrect guesses will count against the player. An extra body part is added to the hangman and with 6 incorrect guesses, the player loses. 
- Guess all the letters to reveal the hip word. The game records this as a win and generates a new word for another round.

## Built With
HTML, CSS, Vanilla JavaScript, Bootstrap

## The Node Version
Later, I built another version of Hipster Hangman as a command line game using node. The main difference from this game is that the node game incorporates JavaScript constructors. Node version: https://github.com/stephorpilla/nodehangman
