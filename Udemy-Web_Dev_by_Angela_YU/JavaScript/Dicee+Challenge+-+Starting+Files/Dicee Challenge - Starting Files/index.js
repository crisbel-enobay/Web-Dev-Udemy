//randomize image source dice 1-6 png
// first images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageRandomSource1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imageRandomSource1);
// second images
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageRandomSource2 = "images/dice" + randomNumber2 + ".png";
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src", imageRandomSource2);

// condition to win
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins";
}
else{
    document.querySelector("h1").textContent="Its a tie";
}