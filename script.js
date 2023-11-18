function getComputerChoice(){
    let choice=Math.round(Math.random()*(3-1))+1;
    switch (choice) {
        case 1:
            return 'rock';
            
            break;
        case 2:
            return 'paper';
            
            break;
        case 3:
            return 'scissors';
            
            break;
            
    
        default:
            break;
    }
}

function getWinner(playerChoice,computerChoice){
    switch(true){
        case playerChoice==computerChoice:
            return('draw');
            break;
        case playerChoice=="rock" && computerChoice=="paper":
            return('computer win');
            break;
        case playerChoice=="rock" && computerChoice=="scissors":
            return('player win');
            break;
        case playerChoice=="paper" && computerChoice=="scissors":
            return('computer win');
            break;
        case playerChoice=="paper" && computerChoice=="rock":
            return('player win');
            break;
        case playerChoice=="scissors" && computerChoice=="rock":
            return('computer win');
            break;
        case playerChoice=="scissors" && computerChoice=="paper":
            return('player win');
            break;
        default:
            break;
        

    }

}
const startBtn=document.querySelector("#start");
const validateBtn=document.querySelector('.validate');
const NameInput=document.querySelector('#name');
const popup=document.querySelector('.popup');
const game=document.querySelector(".game");



window.scrollTo({ top: 0, behavior: 'smooth' })

startBtn.addEventListener('click', () => {
    
 

    // Toggle the popup
    popup.classList.toggle('inactive');
});

validateBtn.addEventListener('click',()=>{
if(NameInput.value!=""){
    popup.classList.toggle('inactive');
    game.classList.toggle('inactive');
    startBtn.disabled=true;
    playerName=NameInput.value;
    // Scroll to the section
    document.querySelector('.game').scrollIntoView({ behavior: 'smooth' });
}

})





const result=document.querySelector("#result");
let playerScore=0;
let computerScore=0;
let round=1;

function setStyling(color) {
    result.style.color = color;
}

function playRound(playerChoice, computerChoice) {
    let winner = getWinner(playerChoice, computerChoice);
    let msg = "";

    switch (winner) {
        case 'player win':
            msg = `You win this round! (${playerChoice} beats ${computerChoice})`;
            setStyling('green');
            playerScore++;
            round++
            break;
        case 'computer win':
            msg = `Computer wins this round! (${computerChoice} beats ${playerChoice})`;
            setStyling('red');
            computerScore++;
            round++
            break;
        case 'draw':
            msg = `It's a draw! Both chose ${playerChoice}`;
            setStyling('gray');
            round++;
            break;
        default:
            break;
    }
    result.textContent = msg;
}

const playerButtons=document.querySelectorAll('.choiceBtn');
playerButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let playerChoice=button.getAttribute('id');
        if (round<=5){
        playRound(playerChoice,getComputerChoice());
        }
        else{
            switch(true){
                case playerScore>computerScore:
                    setStyling('green');
                    result.textContent=`the final winner is ${playerName} with score: ${playerScore} `;
                    break;
                case playerScore<computerScore:
                    setStyling('red');
                    result.textContent=`the final winner is computer with score: ${computerScore} `;
                    break;
                default:
                    setStyling('gray');
                    result.textContent="results of final round Draw";
                    break;

                    
            }
            
            setTimeout(function() {
                location.reload();
            }, 2000);
            
        }
        
        


        
    })
    
})






