// import functions and grab DOM elements
import { resetDom, checkNumber } from './func.js';
const btn = document.getElementById('sub-btn');
const btnR = document.getElementById('res-btn');
// const outDiv = document.getElementById('');
// initialize state
let win = 0;
let loss = 0;
const winLoss = (Math.floor((win / loss) * 100));
let num = 1;
// const num = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
btn.addEventListener('click', () =>{
    const guess = document.getElementById('num-input').value;
    const guessN = Number(guess);
    if (checkNumber(guessN, num) === true){
        win++;
    } else {
        loss++;
    }
    console.log(win, loss);
});

btnR.addEventListener('click', () =>{
    win = 0;
    loss = 0;
});