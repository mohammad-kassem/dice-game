function playDice(){
    let dice_number =  Math.floor(Math.random() * 6) + 1;
    return dice_number;

}

function displayDice(dice_number){
    image = document.getElementsByTagName("img")[0];
    image.src = `./images/dice${dice_number}.png`;
    image = document.getElementsByTagName("img")[1];
    image.src = `./images/dice${dice_number}.png`;
}

function gameStatus(player1_number, player2_number){
    let result = document.getElementsByTagName("h1")[0];
    let result_message = ""
    if (player1_number > player2_number){
        result_message = "🚩 Play 1 Wins!";

    } 
    else if (player1_number < player2_number){
        result_message = "🚩 Play 2 Wins!";

    }
    else result_message = "Draw!"

    result.innerText = result_message;

}

function game(){
    dice_number = playDice();
    displayDice(dice_number);
    gameStatus(dice_number, dice_number);
}

game();
