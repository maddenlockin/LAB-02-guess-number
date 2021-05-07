// import functions and grab DOM elements
<<<<<<< Updated upstream

// initialize state

// set event listeners to update state and DOM
=======
import { checkNumber } from './func.js';
const btn = document.getElementById('sub-btn');
const btnR = document.getElementById('res-btn');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const outDiv = document.getElementById('results');
const winDiv = document.getElementById('win-div');
const attemptsSpan = document.getElementById('attempt-span');
const attemptsDiv = document.getElementById('attempts-div');
// initialize state
let win = 0;
let loss = 0;
let num = Math.ceil(Math.random() * 20);
let attempts = 5;
let totAttempts = 0;

// set event listeners to update state and DOM
btn.addEventListener('click', () =>{
    const guess = document.getElementById('num-input').value;
    const guessN = Number(guess);
    attemptsSpan.textContent = `${attempts}`;
    if (attempts !== 0){
        attemptsDiv.style.display = 'none';
        if (checkNumber(guessN, num) === true){
            win++;
            totAttempts = totAttempts + 1;
        } else {
            loss++;
            attempts--;
            totAttempts = totAttempts + 1;
        }
        if (guessN > num){
            tooHigh.style.display = 'block';
            tooLow.style.display = 'none';
            winDiv.style.display = 'none';
        }
        if (guessN < num){
            tooLow.style.display = 'block';
            tooHigh.style.display = 'none';
            winDiv.style.display = 'none';
        }
        if (guessN === num){
            tooLow.style.display = 'none';
            tooHigh.style.display = 'none';
            winDiv.style.display = 'block';
            outDiv.textContent = `You've gotten number in ${totAttempts} tries!`;
        }
    }
    if (attempts === 0){
        attemptsDiv.textContent = 'You have no more guesses left click the reset button.';
    }

    console.log(win, loss);
    console.log(num);
    winDiv.style.display = 'none';
});

btnR.addEventListener('click', () =>{
    attemptsSpan.textContent = `${attempts}`;
    win = 0;
    loss = 0;
    attempts = 5;
    tooLow.style.display = 'none';
    tooHigh.style.display = 'none';
    winDiv.style.display = 'none';
    outDiv.style.display = 'none';
});
>>>>>>> Stashed changes
