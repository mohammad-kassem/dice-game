function playDice(){
    let dice_number_palyer1 =  Math.floor(Math.random() * 6) + 1;
    let dice_number_palyer2 =  Math.floor(Math.random() * 6) + 1;
    return [dice_number_palyer1, dice_number_palyer2];

}

function displayDice(dice_number_palyer1, dice_number_player2){
    image = document.getElementsByTagName("img")[0];
    image.src = `./images/dice${dice_number_palyer1}.png`;
    image = document.getElementsByTagName("img")[1];
    image.src = `./images/dice${dice_number_player2}.png`;
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
    displayDice(dice_number[0], dice_number[1]);
    gameStatus(dice_number[0], dice_number[1]);
}

game();
