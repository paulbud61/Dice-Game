let randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomImage1 = document.querySelector(".img1");

randomImage1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImage2 = document.querySelector(".img2");

randomImage2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

let titlePage = document.querySelector("h1");

function changeTitle() {
  if (randomNumber1 > randomNumber2) {
    titlePage.innerHTML = "Player 1 won";
  } else if (randomNumber2 > randomNumber1) {
    titlePage.innerHTML = "Player 2 won";
  } else {
    titlePage.innerHTML = "Draw";
  }
}
changeTitle();
