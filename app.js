//creating a list that contain objects. An  object is a task and conatains all it's caracteristics
const tasks = [];

// Selecting all the dom element from the index.html that we will use later
const tbody = document.querySelector("#tbody");
const nameInput = document.querySelector("#name");
const deadlineInput = document.querySelector("#deadline");
const importantInput = document.querySelector("#important");
const addButton = document.querySelector("#add");

addButton.addEventListener("click", () => {
  const name = nameInput.value;
  const deadline = deadlineInput.value;
  const important = importantInput.checked;

  //creating the object of the task with the values
  const task = {
    name,
    deadline,
    important,
  };
  tasks.push(task);

  updateview();
});

const updateview = () => {
  //removing the table body
  tbody.innerHTML = "";
  // creating the new body with the updated informations
  tasks.forEach((task, index) => {
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
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      //function to delete the task from the array
      tasks.splice(index, 1);
      //then we update the view
      updateview();
    });

    //append all the child
    deleteTd.appendChild(deleteButton);
    tr.appendChild(nameTd);
    tr.appendChild(deadlineTd);
    tr.appendChild(deleteTd);
    tbody.appendChild(tr);
  });
};

updateview();
