// import functions and grab DOM elements
import { checkNumber } from './func.js';
const btn = document.getElementById('sub-btn');
const btnR = document.getElementById('res-btn');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const outDiv = document.getElementById('results');
const winDiv = document.getElementById('win-div');
const remainingDiv = document.getElementById('remaining-guesses');
const guess = document.getElementById('num-input');
// initialize state
let win = 0;
let loss = 0;
let remaining = 5;
let num = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
btn.addEventListener('click', () =>{
    const guessN = Number(guess.value);
    if (checkNumber(guessN, num) === true){
        win++;
        btn.style.display = 'none';
    } else {
        loss++;
        remaining--;
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
        outDiv.textContent = `You got the answer in ${win} / ${loss} tries!`;
    }
    if (remaining === 0){
        btn.style.display = 'none';
        outDiv.textContent = `You didn't guess correctly, try again!`;
        tooLow.style.display = 'none';
        tooHigh.style.display = 'none';
    }
    remainingDiv.textContent = `You have ${remaining} guesses remaining`;
});

btnR.addEventListener('click', () =>{
    win = 0;
    loss = 0;
    tooLow.style.display = 'none';
    tooHigh.style.display = 'none';
    winDiv.style.display = 'none';
    num = Math.ceil(Math.random() * 20);
    remaining = 5;
    btn.style.display = 'block';
    guess.value = '';
});