
var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomDiceImgSrc1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomDiceImgSrc1);
document.querySelector(".img2").setAttribute("src", randomDiceImgSrc2);

var title = document.querySelector("h1");

if (randomNumber1 === randomNumber2) {
    title.innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🎉Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "🎉Player 2 Wins!";
}




