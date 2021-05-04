export function pickNumber(number){
    number = Math.ceil(Math.random() * 20);
    
    return number;
}

export function checkNumber(number, guess){
    if (number === guess){
        return true;
    } else {
        return false;
    }
}
