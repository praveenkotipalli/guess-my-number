'use strict';

// console.log(document.querySelector('.message').textContent)

// document.querySelector('.message').textContent = "Correct Number !🥳"

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;

// console.log(document.querySelector('.guess').value)

let secretNumber=Math.trunc(Math.random()*20) + 1;
// document.querySelector('.number').textContent=number;

console.log(secretNumber);

let score=20;

document.querySelector('.again').addEventListener('click',function () {
    score=20;

    secretNumber=Math.trunc(Math.random()*20) + 1;

    console.log(secretNumber);

    document.querySelector('.score').textContent=score;

    document.querySelector('body').style.backgroundColor="#222";

    document.querySelector('.number').textContent="?";

    document.querySelector('.guess').value="";

    document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('.number').style.width="15rem";

})

document.querySelector('.check').addEventListener('click', function () {
    const guess=Number(document.querySelector('.guess').value)
    // console.log(guess);
    
    
    if(!guess){
        document.querySelector('.message').textContent='⛔ No number !';
    }else if(guess === secretNumber){
        if(score>0){

            let highScore=score;

            document.querySelector('.number').textContent=secretNumber;

            document.querySelector('.highscore').textContent=highScore;

            document.querySelector('.message').textContent = "🥳 Correct Number !";

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width="30rem";
            
        }else{
            document.querySelector('.message').textContent = "😭 You lost the game, try again !";
        }
     }else{
        if(score>0){
            document.querySelector('.message').textContent=guess>secretNumber?'📈 Too high !!':'📉 Too low !!';

            score--;

            document.querySelector('.score').textContent=score;

            document.querySelector('body').style.backgroundColor = '#222';

        }else{
            document.querySelector('.message').textContent = "😭 You lost the game, try again !";
        }
     }
    //else if(guess>secretNumber){
    //     if(score>0){
    //         document.querySelector('.message').textContent = "📈 Too high !!";
    //         score--;
    //         document.querySelector('.score').textContent=score;

    //         document.querySelector('body').style.backgroundColor = '#222';
    //     }else{
    //         document.querySelector('.message').textContent = "😭 You lost the game, try again !";
    //     }
    // }else{
    //     if(score>0){
    //         document.querySelector('.message').textContent = "📉 Too low !!";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //         document.querySelector('body').style.backgroundColor = '#222';
    //     }else{
            
    //         document.querySelector('.message').textContent = "😭 You lost the game, try again !";
    //     }
        
    // }
    
});