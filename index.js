var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");
 

document.querySelector("h1").innerHTML = randomNumber1 === randomNumber2 ? "It's a Draw!" : "Player " + (randomNumber1 > randomNumber2 ? "1" : "2") + " Wins !";