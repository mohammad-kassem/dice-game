function playDice(){
    var dice_number =  Math.floor(Math.random() * 6) + 1;
    return dice_number;

}

function displayDice(dice_number){
    image = document.getElementsByTagName("img")[0];
    image.src = `./images/dice${dice_number}.png`;
    image = document.getElementsByTagName("img")[1];
    image.src = `./images/dice${dice_number}.png`;
}

function game(){
    dice_number = playDice();
    displayDice(dice_number);
}

game();
