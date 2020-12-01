var randomNumber1 = Math.floor((Math.random()*6)+1); //Get P1 random number
var randomNumber2 = Math.floor((Math.random()*6)+1); //Get P2 random number
var resultP1 = document.querySelector(".img1").setAttribute("src", "images/dice"+(randomNumber1)+".png");
var resultP2 = document.querySelector(".img2").setAttribute("src", "images/dice"+(randomNumber2)+".png");

function result() {
    if (randomNumber1 > randomNumber2) {
         document.querySelector("h1").innerHTML = "Player one wins!";
    }

    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player two wins!";
   }

   else {
        document.querySelector("h1").innerHTML = "Draw";
   }
}

