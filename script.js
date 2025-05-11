const addQuestionButton = document.getElementById("add-question-button");
const addQuestionForm = document.getElementById("add-question-form");
addQuestionButton.addEventListener("click", function () {
  addQuestionForm.style.visibility = "visible";
  addQuestionButton.style.visibility = "hidden";
});
