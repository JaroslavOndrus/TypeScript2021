console.log(RockPaperScissors("rock","scissors"));

function RockPaperScissors(player1:string, player2:string){
    if(player1 == "rock" && player2 == "rock" || player1 == "scissors" && player2 == "scissors" || player1 == "paper" && player2 == "paper"){
        return "TIE";
    }
    else if(player1 == "rock" && player2 == "scissors" || player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock"){
        return "PLAYER 1 WINS!";
    }
    else{
        return "PLAYER 2 WINS!";
    }
}