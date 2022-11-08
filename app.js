//creating a list that contain objects. An  object is a task and conatains all it's caracteristics
//adding some data for having something to show
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

  const task = {
    name,
    deadline,
    important,
  };
  console.log(important);
  tasks.push(task);

  updateview();
});

const updateview = () => {
  tbody.innerHTML = "";
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
    deleteButton.textContent = "Supprimer";
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      updateview();
      console.log(index);
    });

    deleteTd.appendChild(deleteButton);
    tr.appendChild(nameTd);
    tr.appendChild(deadlineTd);
    tr.appendChild(deleteTd);
    tbody.appendChild(tr);
  });
};

updateview();
