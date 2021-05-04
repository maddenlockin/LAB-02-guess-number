// import functions and grab DOM elements
import { pickNumber , checkNumber } from './func.js';
// const guess = document.getElementById('');
const btn = document.getElementById('sub-btn');
const btnR = document.getElementById('sub-btn');
// const outDiv = document.getElementById('');
// initialize state
let win = 0;
let lost = 0;
let guessNum = 5;
let num = setInterval(pickNumber(), 300000);

// set event listeners to update state and DOM
btn.addEventListener('click', () =>{
    
  console.log(num);
});

btnR.addEventListener('click', () =>{
    num = setInterval(pickNumber(), 300000);
});