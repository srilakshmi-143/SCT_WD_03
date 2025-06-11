function submitQuiz() {
  let score = 0;
  let totalQuestions = 6;

  // Question 1: Single select
  const q1 = document.querySelector('input[name="q1"]:checked');
  if (q1 && q1.value === "C") score++;

  // Question 2: Multi-select
  const q2Checked = document.querySelectorAll('input[name="q2"]:checked');
  const selectedValues = Array.from(q2Checked).map(cb => cb.value);
  const correctQ2 = ["A", "C", "D"];
  if (
    selectedValues.length === correctQ2.length &&
    selectedValues.every(v => correctQ2.includes(v))
  ) {
    score++;
  }

  // Question 3: Fill in the blank
  const q3 = document.querySelector('input[name="q3"]').value.trim().toLowerCase();
  if (q3 === "debugging" || q3 === "debug") score++;
  // Question 4: Single select
  const q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "A") score++;
// Question 5: Fill in the blank
  const q5 = document.querySelector('input[name="q5"]').value.trim().toLowerCase();
  if (q5 === "cascading style sheets") score++;
  // Question 6: Fill in the blank
  const q6 = document.querySelector('input[name="q6"]').value.trim().toLowerCase();
  if (q6 === "hypertext markup language") score++;
  // Show result
  const result = document.getElementById("result");
  result.innerHTML = `🎯 You scored ${score} out of ${totalQuestions}.<br>`;
  if (score === totalQuestions) {
    result.innerHTML += "🏆 Excellent job!";
  } else if (score >= totalQuestions / 2) {
    result.innerHTML += "👍 Good effort!";
  } else {
    result.innerHTML += "📘 Keep practicing!";
  }
}
