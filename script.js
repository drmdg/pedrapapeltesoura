let cptChoice="";
let playerSelection="";


function playRound(playerSelection,cptChoice){

    let output=document.getElementById("output");
    

   
    switch(playerSelection){

        case "papel":
            if(cptChoice=="papel"){
                output.innerText="It's a tie!";
            }else if(cptChoice=="pedra"){
                output.innerText="You win!";
            }else{
               output.innerText="You lose!";
            }
            break;
        case "pedra":
            if(cptChoice=="papel"){
                output.innerText="You lose!";
            }else if(cptChoice=="pedra"){
                output.innerText="It's a tie!";
            }else{
                output.innerText="You win!";
            }
            break;
        case "tesoura":
            if(cptChoice=="papel"){
                output.innerText="You win!";
            }else if(cptChoice=="pedra"){
                output.innerText="You lose!";
            }else{
                output.innerText="It's a tie!";
            }
            break;
        default: output.innerText="Entrada Incorreta.";
    }


}

function getComputerChoice(){
    let options=["pedra","papel","tesoura"];
    let computerChoice="";
    let x=0;
    x= Math.floor(Math.random()*3);
    return options[x];
}



    document.addEventListener("click",e =>{
    if(e.target.id){
        cptChoice = getComputerChoice();
        playRound(e.target.id,cptChoice);
    }
});


