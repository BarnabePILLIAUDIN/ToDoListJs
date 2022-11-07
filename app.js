//creating a list that contain objects. An  object is a task and conatains all it's caracteristics
//adding some data for having something to show
const tasks = [
  {
    id: 1,
    name: "Finish the task manager",
    deadline: "08/11/2022",
    important: true,
  },
  {
    id: 2,
    name: "Another task",
    deadline: "09/11/2022",
    important: false,
  },
];

// Selecting all the dom element from the index.html that we will use later
const tbody = document.querySelector("#tbody");
const nameInput = document.querySelector("#name");
const deadlineInput = document.querySelector("#deadline");
const importantInput = document.querySelector("#important");

tasks.forEach((task) => {
  const tr = document.createElement("tr");
  if (task.important) {
    tr.classList = "bg-danger text-light";
  } else {
    tr.classList = "bg-success text-light";
  }
  const nameTd = document.createElement("td");
  nameTd.textContent = task.name;
  const deadlineTd = document.createElement("td");
  deadlineTd.textContent = task.deadline;
  const deleteTd = document.createElement("td");
  const deleteButton = document.createElement("button");
  deleteButton.classList = "btn btn-warning";
  deleteButton.textContent = "Supprimer";

  deleteTd.appendChild(deleteButton);
  tr.appendChild(nameTd);
  tr.appendChild(deadlineTd);
  tr.appendChild(deleteTd);
  tbody.appendChild(tr);
});
