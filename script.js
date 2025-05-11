const addQuestionButton = document.getElementById("add-question-button");
const addQuestionForm = document.getElementById("add-question-form");
const questionName = document.getElementById("question-name")
const topic = document.getElementById("topic")
const difficulty = document.getElementById("difficulty")
const platform = document.getElementById("platform")
const link = document.getElementById("link")
const status = document.getElementById("status")
const date = document.getElementById("date")
const notes = document.getElementById("notes")

addQuestionButton.addEventListener("click", function () {
  addQuestionForm.style.visibility = "visible";
  addQuestionButton.style.visibility = "hidden";
});


addQuestionForm.addEventListener("submit",function(event){
  event.preventDefault();
})

