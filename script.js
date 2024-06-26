let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const Uscore=document.querySelector("#user-score");
const Cscore=document.querySelector("#comp-score");
const reset=document.querySelector(".reset");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
};

const drawGame=()=>{
    msg.innerText="Game is a Draw.Play Again";
    msg.style.backgroundColor="grey";
}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        Uscore.innerText=userScore;
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        Cscore.innerText=compScore;
        msg.innerText=`You loose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }

}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;   
        if(userChoice==="rock"){
            userWin=compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});

reset.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    Uscore.innerText=0;
    Cscore.innerText=0;
    msg.innerText="Play a Move";
    msg.style.backgroundColor="#081b31";
});

