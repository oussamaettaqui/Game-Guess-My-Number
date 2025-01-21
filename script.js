'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
//  document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click',  function(){
    const guess = Number(document.querySelector('.guess').value);
    // when there no input
    if (!guess)
    {
        document.querySelector('.message').textContent = 'No number!';

    // when playe wins
    }else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    // when is guess to high
    }else if (guess  > secretNumber){
        if (score > 0){
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    // when is guess to low
    }else if (guess  < secretNumber){
        if (score > 0){
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('body').style.backgroundColor = 'red';
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.guess').value = '';
})