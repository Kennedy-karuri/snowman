//define the list of words to choose from
const words = [
    'JAVASCRIPT',
    'HTML',
    'CSS',
    'NODE',
    'REACT',
    'ANGULAR',
    'JQUERY',
    'VUE'
];

//define the maximum number of incorrect guesses allowed
const maxWrongGuesses = 6;

let wordToGuess = '';
let guessedLetters = [];
let wrongGuesses = 0;
let imageCount = 1;

//select random word from the above list
function selectRandomWord(){
    return words[Math.floor(Math.random() * words . length)];
}

//initialize game

function initialization(){
    wordToGuess = selectRandomWord();
    guessedLetters = Array (wordToGuess . length) .fill('_');
    wrongGuesses = 0;

    // Update the word display

    updateWordDisplay();

    updateMeltingsnowmanGraghic();

    //remove any previousle generated buttons

    const lettersContainer = document . querySelector ('.letters');
    while (lettersContainer . firstChild){
        lettersContainer. removeChild(lettersContainer.firstChild);
    }


   // Generate the letter buttons

   for (let i = 0 ; i <26;  i ++){
    const letter = String .fromCharCode(65 + i);
    const button = document . createElement ('button');
    button . innerText = letter; 
    button .addEventListener('click', function (){
        handleGuess(letter);
    });
    lettersContainer .appendChild(button);
   }

   //clear any previous win/lose messages

   const messageContainer = document . querySelector('.message');
   messageContainer . innerText = '';

   function updateWordDisplay(){
    const wordContainer = document . querySelector('.word');
    wordContainer.innerText = guessedLetters.join(' ');
   }

  function handleGuess(letter){
    //if the letter has already been guessed,do nothing
    if(guessedLetters,includes(letter)){
        return;
    }

    //add the letter to the lisdt of guessed letters
    guessedLetters.forEach((guessedLetter,index) =>{
        if(wordToGuess[index] === letter){
            guessedLetters[index]=== letter;
        }
    });

    //if the letter is not in the hiddenword ,increment the wrong guesses count andupdate the melting snowman graphic
    if(!wordToGuess.includes (letter)){
        wrongGuesses++;
        updateMeltingsnowmanGraghic();
    }

    //update the word display

    updateWordDisplay();

    //check if the game has been won or lost
    checkWinOrLose();
  }


  function updateMeltingsnowmanGraghic(){
    const meltingSnowmancontainer = document.querySelector('.MeltingSnowman');
    meltingSnowmancontainer . innerHTML = `<img src="path/MeltingSmowman${imageCount}.png alt=MeltingSnowman ${imageCount}">`;
    imageCount++;
  }
function checkWinOrLose(){
    if(guessedLetter.join('') === wordToGuess){
        const messageContainer = document.querySelector ('.message');
        messageContainer . innerText = 'You Win HEHE!';
        const letterButtons = document . querySelectorAll('.letters button');
        letterButtons.forEach(button=> {
            button.disabled = true;
            button . removeEventListener('click', handleGuess);
        });
    }else if (wrongGuesses >= maxWrongGuesses){
        const messageContainer = document.querySelector(',message');
        messageContainer . innerText = `You loose....auch! The word was "${wordToGuess}".`;
        const meltingSnowmancontainer = document.querySelector('.MeltingSnowman');
        meltingSnowmancontainer.innerHTML = `<img src ="images/gameover.png" alt="gameover">`;
        const letterButtons = document.querySelectorAll('.letters button');
        letterButtons. forEach(button => {
            button.disabled = true;
            button . removeEventListener('click', handleGuess);
        });
    }
}



















}