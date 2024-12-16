let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let btns = document.querySelectorAll(".hero button");
let show = document.querySelector(".show");
let computershow = document.querySelector(".computer-show");
let heroitem = document.querySelector(".hero");
let sonuc = document.querySelector(".sonuc");
let sonucyazi = document.querySelector(".sonucyazi");
let tryagain = document.querySelector(".tryagain");
let gameShow = document.querySelector(".game-show");
let scorepoint = document.querySelector(".scorepoint");
let rules = document.querySelector(".rules");
let rulesShow = document.querySelector(".rules-show");
let X = document.querySelector(".X");
let mbX = document.querySelector(".mbX");


let game = [paper, scissors, rock];
let randomchoice = Math.round(Math.random() * 2);
let computerchoice = game[randomchoice];

let toplam = 0;
gameShow.style.display = "none";

function handleTipClick() {
  show.innerHTML = this.innerHTML;
  computershow.innerHTML = computerchoice.innerHTML;
  heroitem.style.display = "none";
  sonuc.style.display = "flex";
  gameShow.style.display = "flex";

  if (this.innerHTML === computerchoice.innerHTML) {
    sonucyazi.innerText = "Berabere";
  } else if (
    this.innerHTML === paper.innerHTML &&
    computerchoice.innerHTML === rock.innerHTML
  ) {
    sonucyazi.innerText = "Oyuncu Kazandı";
    toplam++;
    scorepoint.innerText = toplam;
  } else if (
    this.innerHTML === scissors.innerHTML &&
    computerchoice.innerHTML === paper.innerHTML
  ) {
    sonucyazi.innerText = "Oyuncu Kazandı";
    toplam++;
    scorepoint.innerText = toplam;
  } else if (
    this.innerHTML === rock.innerHTML &&
    computerchoice.innerHTML === scissors.innerHTML
  ) {
    sonucyazi.innerText = "Oyuncu Kazandı";
    toplam++;
    scorepoint.innerText = toplam;
  } else {
    sonucyazi.innerText = "Oyuncu Kaybetti";
    toplam--;
    scorepoint.innerText = toplam;
  }
  return computerchoice;
}

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", handleTipClick);
}


function handleResetClick() {
  heroitem.style.display = "flex";
  sonuc.style.display = "flex";
  gameShow.style.display = "none";
  let randomchoice2 = Math.round(Math.random() * 2);
  computerchoice = game[randomchoice2];
}

tryagain.addEventListener("click", handleResetClick);


function handleRulesClick() {
  rulesShow.style.display = "flex";
}

rules.addEventListener("click", handleRulesClick);


function handleXClick() {
  rulesShow.style.display = "none";
}

X.addEventListener("click", handleXClick);
mbX.addEventListener("click", handleXClick);

