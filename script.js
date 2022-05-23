function generateDiceNumbers(){
    let palyer1_dice_number =  Math.floor(Math.random() * 6) + 1;
    let player2_dice_number =  Math.floor(Math.random() * 6) + 1;
    return [palyer1_dice_number, player2_dice_number];

}

function displayDice(player1_dice_number, player2_dice_number){
    image = document.getElementsByTagName("img")[0];
    image.src = `./images/dice${player1_dice_number}.png`;
    image = document.getElementsByTagName("img")[1];
    image.src = `./images/dice${player2_dice_number}.png`;
}

function gameStatus(player1_dice_number, player2_dice_number){
    let result = document.getElementsByTagName("h1")[0];
    let result_message = ""
    if (player1_dice_number > player2_dice_number){
        result_message = "🚩 Play 1 Wins!";

    } 
    else if (player1_dice_number < player2_dice_number){
        result_message = "🚩 Play 2 Wins!";

    }
    else result_message = "Draw!"

    result.innerText = result_message;

}

function playDice(){
    dice_number = generateDiceNumbers();
    displayDice(dice_number[0], dice_number[1]);
    gameStatus(dice_number[0], dice_number[1]);
}

playDice();
