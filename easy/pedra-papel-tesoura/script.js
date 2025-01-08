const pcOptions = ["📄 Papel", "✂️ Tesoura", "⛰️ Pedra"];

const perdeu = "Você perdeu!";
const ganhou = "Você ganhou!";
const empate = "Empate!";

function showresult(choice) {
  const randomPc = Math.floor(Math.random() * pcOptions.length);
  const pcChoice = pcOptions[randomPc];

  document.getElementById("pc-choice").innerHTML = pcChoice;
  document.getElementById("user-choice").innerHTML = choice;

  let result;
  if (choice === pcChoice) {
    result = empate;
  } else if (
    (choice === "📄 Papel" && pcChoice === "⛰️ Pedra") ||
    (choice === "✂️ Tesoura" && pcChoice === "📄 Papel") ||
    (choice === "⛰️ Pedra" && pcChoice === "✂️ Tesoura")
  ) {
    result = ganhou;
  } else {
    result = perdeu;
  }

  document.getElementById("result").innerHTML = result;
}
