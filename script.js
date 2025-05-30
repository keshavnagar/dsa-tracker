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
const table = document.querySelector("table")
const questionList=[];



addQuestionForm.addEventListener("submit",function(event){
  event.preventDefault();
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

addRowToTable(addQuestionObject);

})

function addRowToTable(q){
  //  select tbody element 
  const tbody = document.querySelector("tbody")
  // create a new row 
  const row = document.createElement("tr")
  // we create particular cells for each data like td
  const questionCell = document.createElement("td")
  questionCell.textContent = q.questionName;
  const topicCell = document.createElement("td")
  topicCell.textContent = q.topic;
  const difficultyCell = document.createElement("td")
  difficultyCell.textContent = q.difficulty;
  const platformCell = document.createElement("td")
  platformCell.textContent = q.platform;
  const linkCell = document.createElement("td")
  linkCell.textContent = q.link
  const statusCell = document.createElement("td")
  statusCell.textContent = q.status
  const dateCell = document.createElement("td")
  dateCell.textContent = q.date;
  const notesCell = document.createElement("td")
  notesCell.textContent = q.notes;
  // fill the data in a row 
  row.appendChild(questionCell)
  row.appendChild(topicCell)
  row.appendChild(difficultyCell)
  row.appendChild(platformCell)
  row.appendChild(linkCell)
  row.appendChild(statusCell)
  row.appendChild(dateCell)
  row.appendChild(notesCell)
  // fill the row in a table body 
  tbody.appendChild(row);
  table.style.visibility = "visible";
}






