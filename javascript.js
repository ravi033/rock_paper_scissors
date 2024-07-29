function getComputerChoice(max){
    var value = Math.floor(Math.random() * max)
    switch(value){
        case 1:
            return "ROCK";
            break;
        
        case 2:
            return "PAPER";
            break;
        
        default:
            return "SCISSORS";
    }
}

function getHumanChoice(){
    let userChoice = prompt("Select your choice from ROCK , PAPER , SCISSORS: ").toUpperCase();
    if (userChoice != "ROCK" && userChoice != "PAPER" && userChoice != "SCISSORS" ){
        console.log("INVALID CHOICE. Select your choice from ROCK , PAPER , SCISSORS");
        getHumanChoice();
    }else{
        return userChoice;
    }
}

function playRound(){
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(3);
    console.log("Computer selected "+computerChoice);
    console.log("You selected "+humanChoice);
    if (humanChoice == computerChoice){
        console.log("It's a TIE. Proceed with next round");
    }else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log("You LOSE. PAPER beats ROCK. Proceed with next round");
        computerScore+=1;
    }else if(humanChoice == "ROCK" && computerChoice == "SCISSORS"){
        console.log("You WON. ROCK beats SCISSORS. Proceed with next round");
        humanScore+=1;
    }else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        console.log("You WON. PAPER beats ROCK. Proceed with next round");
        humanScore+=1;
    }else if(humanChoice == "PAPER" && computerChoice == "SCISSORS"){
        console.log("You LOSE. SCISSORS cut PAPER. Proceed with next round");
        computerScore+=1;;
    }else if(humanChoice == "SCISSORS" && computerChoice == "PAPER"){
        console.log("You WON. SCISSORS cut PAPER. Proceed with next round");
        humanScore+=1;
    }else if(humanChoice == "SCISSORS" && computerChoice == "ROCK"){
        console.log("You LOSE. ROCK beats SCISSORS. Proceed with next round");
        computerScore+=1;
    }

}

console.log("Starting the game!!!")
let humanScore = 0;
let computerScore = 0;
for(let i=0;i<5;i++){
    playRound();
    console.log("SCORES: You - "+humanScore + " Computer - "+computerScore);
}
if (humanScore > computerScore){
    console.log("You WON. Congratulations!!!!!!");
    console.log("FINAL SCORES: You - "+humanScore + " Computer - "+computerScore);
} else if(humanScore < computerScore){
    console.log("HARD LUCK. You LOSE........");
    console.log("FINAL SCORES: You - "+humanScore + " Computer - "+computerScore);
} else{
    console.log("AH!!!  IT'S A TIE")
}