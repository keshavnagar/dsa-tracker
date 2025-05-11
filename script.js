const addQuestionButton = document.getElementById("add-question-button");
const addQuestionForm = document.getElementById("add-question-form");
const questionName = document.getElementById("question-name")
const topic = document.getElementById("topic")
const difficulty = document.getElementById("difficulty")
const platform = document.getElementById("platform")
const link = document.getElementById("link")
const questionStatus = document.getElementById("status")
const date = document.getElementById("date")
const notes = document.getElementById("notes")

addQuestionButton.addEventListener("click", function () {
  addQuestionForm.style.visibility = "visible";
  addQuestionButton.style.visibility = "hidden";
});


addQuestionForm.addEventListener("submit",function(event){
  event.preventDefault();
})

// create new object to track all these fields of add question form

const addQuestionObject = {
  questionName : questionName.value.trim(),
  topic : topic.value.trim(),
  difficulty : difficulty.value.trim(),
  platform : platform.value.trim(),
  link : link.value.trim(),
  status : questionStatus.value.trim(),
  date : date.value.trim(),
  notes : notes.value.trim()
}