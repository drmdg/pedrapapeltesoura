let cptChoice="";
let playerSelection="";


function playRound(playerSelection,cptChoice){

    switch(playerSelection){

        case "papel":
            if(cptChoice=="papel"){
                console.log("It's a tie!");
            }else if(cptChoice=="pedra"){
                console.log("You win!");
            }else{
                console.log("You lose!");
            }
            break;
        case "pedra":
            if(cptChoice=="papel"){
                console.log("You lose!");
            }else if(cptChoice=="pedra"){
                console.log("It's a tie!");
            }else{
                console.log("You win!");
            }
            break;
        case "tesoura":
            if(cptChoice=="papel"){
                console.log("You win!");
            }else if(cptChoice=="pedra"){
                console.log("You lose!");
            }else{
                console.log("It's a tie!");
            }
            break;
        default: console.log("Entrada Incorreta.");
    }

}

function getComputerChoice(){
    let options=["pedra","papel","tesoura"];
    let computerChoice="";
    let x=0;
    x= Math.floor(Math.random()*3);
    return options[x];
}
cptChoice = getComputerChoice();
playerSelection=prompt("Faça sua jogada:").toLowerCase();
playRound(playerSelection,cptChoice);


