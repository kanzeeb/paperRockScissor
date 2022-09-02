let moveList = ['paper', 'rock', 'scissors'];
let tieMsg = 'Tie';
let loseMsg = 'YOU DIED';
let winMsg = 'PREY SLAUGHTERED';
let counter = 0;  
let test = 0;

function computerPlay() {
    indexMove = Math.floor(Math.random() * 3);    
    computerMove = moveList[indexMove];
    return computerMove;
}
function startGame() {    
    userInput = prompt('Whats your move?');
    userMove = userInput.toLowerCase();   
    if (!userMove || !userMove.match(/^[a-z]+$/i)) {
        console.log("Only letters are allowed");        
        startGame()
    }    
    else if (userMove  != 'paper' & userMove != 'rock' & userMove != 'scissors') {
        console.log('move not allowed');
        startGame()
    } 
    else if (userInput = null) {
        console.log('game interrupt');
    } 
    else {        
        endGame(userMove);        
    }       
}

function endGame(move1) {    
    let move2 = computerPlay();          
    let result = '';    
    // console.log(`player move is ${move1}`);
    // console.log(`computer move is ${move2}`);
    if (move1 == move2) {
        result = tieMsg;
    }
    else if ((move1 == moveList[0] & move2 == moveList[1])
            || (move1 == moveList[1] & move2 == moveList[2])
            || (move1 == moveList[2] & move2 == moveList[0])        
    ) {
        result = winMsg;                        
    }
    else {
        result = loseMsg;          
    }                 
    console.log(result);
    result == winMsg ? counter = counter + 1 : null          
    test = counter;      
    return test;
}

function round(n) {       
    for(let i = 0; i < n; i++){
        startGame();        
    }   
    test >= 3 ? console.log('Player Wins!!!') : console.log('You Lose!');
}

round(5);
