const questions = [
  "新しいことに挑戦するのが好き？",
  "人と話すのが好き？",
  "計画を立てて行動するのが得意？",
  "一人の時間が好き？"
];

let current = 0;
let score = 0;

function answer(isYes) {
  if (isYes) score++;
  current++;

  if (current < questions.length) {
    document.getElementById("question").textContent = questions[current];
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("questionBox").style.display = "none";
  document.getElementById("resultBox").style.display = "block";

  let result = "";
  if (score === 4) {
    result = "あなたは冒険家タイプです！";
  } else if (score >= 2) {
    result = "あなたはバランスタイプです！";
  } else {
    result = "あなたは内向的なタイプです！";
  }

  document.getElementById("resultText").textContent = result;
}

function restart() {
  current = 0;
  score = 0;
  document.getElementById("questionBox").style.display = "block";
  document.getElementById("resultBox").style.display = "none";
  document.getElementById("question").textContent = questions[0];
}

// 初期表示
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("question").textContent = questions[0];
});

