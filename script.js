

const guessInputEl = document.getElementById('guess');
const buttonEl = document.getElementById('Button');
const messageEl = document.getElementById('message');

let randomNumber = Math.trunc(Math.random() * 100 + 1);
console.log(randomNumber);

buttonEl.addEventListener('click',function(){
    let guess = Number(guessInputEl.value);
    if(!guess || guess < 1 || guess > 100){
      messageEl.innerText = `Enter the vaild number`; 
    } 
    else if (guess === randomNumber){
      messageEl.innerText = `you have guessed ${guess}.you have won the game`;       
    } 
    else if (guess > randomNumber){
      messageEl.innerText = `you have guessed ${guess}.you have guessed too high`;        
    } 
    else {
      messageEl.innerText = `you have guessed ${guess}.you have guessed too low`;  
    } });

    






