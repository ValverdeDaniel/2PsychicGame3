//whats left:
    // reset game function, the thought behind this was if I can atleast figure out how to reset the allGuessedLetters and Guesses Remaining using a function then I could apply ResetGame to atleast when the user won, next I would need to figure out how to reset the game when the users guesses reached 0 and add a loss only in that instance. I could not figure out the first therefore could not figure out the ladder.
    //I tried turning guesses into functions and everything into functions but that messed everytihng up so i went back in time to a place where stuff was not efficient but kind of worked!

    //begin working code
    //create an array that lists out all of the options in the alphabet [a-z]
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // create variables to hold hte number of wins, losses, guessesLeft, userGuesses
        var wins = 0;
        var losses = 0;
        var userGuesses = 0;
        var allGuessedLetters = [];
        var GuessesRemaining = 9;

    //create variables that hold references to the places in the HTML where we want to display things (document.getElementById)
        var directionsText = document.getElementById("directions-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var CurrentGuess = document.getElementById("yourCurrentGuess"); //displays your guess temp
        var ComputerGuess = document.getElementById("ComputerGuess"); //displaycomputers guess temp
        var letterGuessedText = document.getElementById("letterGuessed-text");
        var GuessesRemainingText = document.getElementById("GuessesRemaining-text");
        
    // reset game function, the thought behind this was if I can atleast figure out how to reset the allGuessedLetters and Guesses Remaining using a function then I could apply ResetGame to atleast when the user won, next I would need to figure out how to reset the game when the users guesses reached 0 and add a loss only in that instance. I could not figure out the first therefore could not figure out the ladder.
    function resetgame() {
        var userGuesses = 0;
        var allGuessedLetters = [];
        var GuessesRemaining = 9;        
    };
    //reset Game function does not work but i gave it a shot on the letter a
    //this function is run whenever the user presses a key. (document.onkeyup = function(event)
        document.onkeyup = function(event) {
    //determines which key was pressed /var userGuess=event.key/
            var userGuess = event.key;
    //randomly chooses a choice from the options array. this is the computers guess /computerChoices[Math.floor(math.random() * computerChoices.length)];
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //This logic determines the outcome of the game (win/loss/guessesLeft/GuessesSoFar)
            if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
                
                if((userGuess === "a") && (computerGuess === "a")) {
                    wins++;
                    resetgame();
                } else if ((userGuess ==="a") && (computerGuess != "a")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } else if ((userGuess === "b") && (computerGuess === "b")) {
                    wins++;

                } else if ((userGuess ==="b") && (computerGuess != "b")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } else if ((userGuess === "c") && (computerGuess === "c")) {
                    wins++;
                } else if ((userGuess ==="c") && (computerGuess != "c")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } else if ((userGuess === "d") && (computerGuess === "d")) {
                    wins++;
                } else if ((userGuess ==="d") && (computerGuess != "d")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } else if ((userGuess === "e") && (computerGuess === "e")) {
                    wins++;
                } else if ((userGuess ==="e") && (computerGuess != "e")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } else if ((userGuess === "f") && (computerGuess === "f")) {
                    wins++;
                } else if ((userGuess ==="f") && (computerGuess != "f")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "g") && (computerGuess === "g")) {
                    wins++;
                } else if ((userGuess ==="g") && (computerGuess != "g")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "h") && (computerGuess === "h")) {
                    wins++;
                } else if ((userGuess ==="h") && (computerGuess != "h")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "i") && (computerGuess === "i")) {
                    wins++;
                } else if ((userGuess ==="i") && (computerGuess != "i")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "j") && (computerGuess === "j")) {
                    wins++;
                } else if ((userGuess ==="j") && (computerGuess != "j")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "k") && (computerGuess === "k")) {
                    wins++;
                } else if ((userGuess ==="k") && (computerGuess != "k")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "l") && (computerGuess === "l")) {
                    wins++;
                } else if ((userGuess ==="l") && (computerGuess != "l")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "m") && (computerGuess === "m")) {
                    wins++;
                } else if ((userGuess ==="m") && (computerGuess != "m")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "n") && (computerGuess === "n")) {
                    wins++;
                } else if ((userGuess ==="n") && (computerGuess != "n")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "o") && (computerGuess === "o")) {
                    wins++;
                } else if ((userGuess ==="o") && (computerGuess != "o")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "p") && (computerGuess === "p")) {
                    wins++;
                } else if ((userGuess ==="p") && (computerGuess != "p")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "q") && (computerGuess === "q")) {
                    wins++;
                } else if ((userGuess ==="q") && (computerGuess != "q")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "r") && (computerGuess === "r")) {
                    wins++;
                } else if ((userGuess ==="r") && (computerGuess != "r")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "s") && (computerGuess === "s")) {
                    wins++;
                } else if ((userGuess ==="s") && (computerGuess != "s")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "t") && (computerGuess === "t")) {
                    wins++;
                } else if ((userGuess ==="t") && (computerGuess != "t")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "u") && (computerGuess === "u")) {
                    wins++;
                } else if ((userGuess ==="u") && (computerGuess != "u")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "v") && (computerGuess === "v")) {
                    wins++;
                } else if ((userGuess ==="v") && (computerGuess != "v")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "w") && (computerGuess === "w")) {
                    wins++;
                } else if ((userGuess ==="w") && (computerGuess != "w")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "x") && (computerGuess === "x")) {
                    wins++;
                } else if ((userGuess ==="x") && (computerGuess != "x")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "y") && (computerGuess === "y")) {
                    wins++;
                } else if ((userGuess ==="y") && (computerGuess != "y")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                }  else if ((userGuess === "z") && (computerGuess === "z")) {
                    wins++;
                } else if ((userGuess ==="z") && (computerGuess != "z")) {
                    losses++;
                    GuessesRemaining--;
                    allGuessedLetters.push(userGuess);
                } 
                

                    //continue for b and c

            
    //hide the directions /drectionsText.textContent = "";
                directionsText.textContent = "";
    //display the user and computer guesses, and wins/losses/guessesSo far
                CurrentGuess.textContent = "You chose: " + userGuess;
                ComputerGuess.textContent = "the computer chose: " + computerGuess;
                winsText.textContent = "wins: " + wins;
                lossesText.textContent = "losses: " + losses;
                letterGuessedText.textContent = "Letters guessed: " + allGuessedLetters;
                allGuessedLetters.innerHTML = allGuessedLetters.join(',');
                GuessesRemainingText.textContent = "Guesses Remaining: " + GuessesRemaining;

        }
    };

    