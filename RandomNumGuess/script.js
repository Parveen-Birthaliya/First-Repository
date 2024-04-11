const randomNum = parseInt(Math.random()*100+1);

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const LowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p');

let preguess = [];
let numguess = 1

let playgame = true

if(playgame){
  submit.addEventListener('click' , function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateguess(guess);
  });
}
function validateguess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }
  else if(guess<1){
    alert('Please enter a valid number')
  }else if(guess>100){
    alert('Please enter a valid number')
  }else{
    preguess.push(guess)
    if(numguess === 11){
    displayguess(guess)
    displaymessage(`Game over, Random number was ${randomNum}` )
    endgame()
    }else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess){
  if(guess === randomNum){
    displaymessage('You guessed right')
  } else if(guess < randomNum){
    displaymessage('Your Number is too low')
  }else if(guess > randomNum){
    displaymessage('Your Number is too high')
  }
}
function displaymessage(message){
  LowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function displayguess(guess){
    userInput.value=''
    guessSlot.innerHTML +=`${guess}`
    numguess++;
    remaining.innerHTML = `${11-numguess}`
}
function endgame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame" > new game </h2>`;
  startOver.appendChild(p)
  playgame(false);
  newGame();
}
function newGame(){
  const newGamebutton = document.querySelector('#newGame')
  newGamebutton.addEventListener('click' , function(e){
    randomNum = parseInt(Math.random()*100 + 1);
    preguess=[]
    
    numguess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numguess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playgame =true
  })
}

