let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let score = [];
let btns = ["yellow", "red", "purple", "green"];
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});
function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = ` level${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);

  gameFlash(randBtn);
}

function checkAns() {
  let idx = userSeq.length - 1;
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = `Game over .Press any key to start. your score-${level}`;

    reset();
  }
}
function btnpress() {
  let btn = this;
  userFlash(btn);
  userColor = this.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAns();
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}
function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  score.push(level);

  level = 0;

  highScore(score);
}
function highScore() {
  for (let i = 0; i < score.length; i++) {
    if (score[i] < score[i - 1]) {
      score[i] = score[i - 1];
    }
  }
  console.log(score);
}
