// import functions and grab DOM elements
import { checkNumber } from './func.js';
const btn = document.getElementById('sub-btn');
const btnR = document.getElementById('res-btn');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const outDiv = document.getElementById('results');
// initialize state
let win = 0;
let loss = 0;

// set event listeners to update state and DOM
btn.addEventListener('click', () =>{
    let num = Math.ceil(Math.random() * 20);
    const guess = document.getElementById('num-input').value;
    const guessN = Number(guess);
    if (checkNumber(guessN, num) === true){
        win++;
    } else {
        loss++;
    }
    if (guessN > num){
        tooHigh.style.display = 'block';
    }
    if (guessN < num){
        tooLow.style.display = 'block';
    }
    console.log(win, loss);
    console.log(num);
    outDiv.textContent = `You've gotten the correct anwser ${win} / ${loss}`;
});

btnR.addEventListener('click', () =>{
    win = 0;
    loss = 0;

});