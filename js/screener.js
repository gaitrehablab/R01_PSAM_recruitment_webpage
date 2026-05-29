var questions = [
  { text: "Have you had a stroke at least 6 months ago?", passOn: "yes" },
  { text: "Are you between 18 and 85 years old?", passOn: "yes" },
  { text: "Can you walk independently for at least 2–5 minutes without stopping?", passOn: "yes" },
  { text: "Have you been diagnosed with another neurological condition (e.g., Parkinson’s disease, multiple sclerosis, traumatic brain injury)?", passOn: "no" },
  { text: "Are you currently receiving physical therapy with walking-related goals?", passOn: "no" },
  { text: "Do you have any MRI contraindications (e.g., metal implants, pacemaker, claustrophobia)?", passOn: "no" }
];

var current = 0;
var total = questions.length;
var finished = false;

var questionText = document.getElementById("question-text");
var stepInfo = document.getElementById("step-info");
var progress = document.getElementById("progress");
var questionArea = document.getElementById("question-area");
var resultPass = document.getElementById("result-pass");
var resultFail = document.getElementById("result-fail");
var btnYes = document.getElementById("btn-yes");
var btnNo = document.getElementById("btn-no");

function showQuestion() {
  questionText.textContent = questions[current].text;
  stepInfo.textContent = "Question " + (current + 1) + " of " + total;
  progress.style.width = ((current + 1) / total * 100) + "%";
}

function answer(value) {
  if (finished) return;
  var q = questions[current];
  if ((q.passOn === "yes" && value !== "yes") || (q.passOn === "no" && value !== "no")) {
    finished = true;
    questionArea.style.display = "none";
    stepInfo.style.display = "none";
    resultFail.classList.add("active");
    return;
  }
  current++;
  if (current >= total) {
    finished = true;
    questionArea.style.display = "none";
    stepInfo.style.display = "none";
    progress.style.width = "100%";
    resultPass.classList.add("active");
    return;
  }
  showQuestion();
}

btnYes.addEventListener("click", function() { answer("yes"); });
btnNo.addEventListener("click", function() { answer("no"); });

showQuestion();
