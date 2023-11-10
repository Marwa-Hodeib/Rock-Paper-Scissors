let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  const userID = document.getElementById(user);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user}  beats ${computer}  You Winnnn!!`;
  userID.classList.add("yellow-glow");
  setTimeout(() => {
    userID.classList.remove("yellow-glow");
  }, 500);
}

function lose(user, computer) {
  const userID = document.getElementById(user);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${user}  looses to ${computer}  You Lost :(`;
  userID.classList.add("red-glow");
  setTimeout(() => {
    userID.classList.remove("red-glow");
  }, 500);
}

function draw(user, computer) {
  const userID = document.getElementById(user);
  result_p.innerHTML = `${user}  same as ${computer}  It's a Drawww :$`;
  userID.classList.add("purple-glow");
  setTimeout(() => {
    userID.classList.remove("purple-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      lose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", () => {
    game("rock");
  });

  paper_div.addEventListener("click", () => {
    game("paper");
  });

  scissors_div.addEventListener("click", () => {
    game("scissors");
  });
}
main();
