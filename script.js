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


let playerScore=0;
let computerScore=0;
let round=1;

function playRound(playerChoice,computerChoice){
    let winner=getWinner(playerChoice,computerChoice);
    let msg="";
    
    switch(winner){
        case 'player win':
            msg = ` player choice: ${playerChoice}  computer choice: ${computerChoice}\n
            winner: player in round ${round++} with score ${++playerScore}`;
            break;
        case 'computer win':
            msg = `winner: computer in round ${round++} with score ${++computerScore}`;

            break;
        case 'draw':
            msg='draw';
            round++;
            break;
        default:
            break;
        
    }
    console.log(msg);
    


}

const playerButtons=document.querySelectorAll('.choiceBtn');
playerButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        let playerChoice=button.getAttribute('id');
        playRound(playerChoice,getComputerChoice());
        


        
    })
    
})



/*for (let i = 0; i <= 5; i++) {
  
console.log("****************round********************* %d",i);

playerChoice="rock";
computerChoice=getComputerChoice();
console.log("player choice :"+String(playerChoice));
console.log("computer choice :"+String(computerChoice));
console.log(getWinner(playerChoice,computerChoice));
}*/