// Open and close popup form
const newTask = document.querySelector(".new-task");
const overlay = document.querySelector(".overlay");
newTask.addEventListener("click", openForm);
overlay.addEventListener("click", closeForm);

function openForm() {
  document.querySelector("form").style.display = "flex";
  overlay.style.display = "block";
}

function closeForm() {
  document.querySelector("form").style.display = "none";
  overlay.style.display = "none";
}

// Add new task to list
let taskList = [];

const add = document.querySelector(".add");

class Task {
  constructor(title, description, date) {
    this.title = title;
    this.description = description;
    this.date = date;
    // this.priority = priority;
  }
}

add.addEventListener("click", () => {
  closeForm();
  addTaskToList();
});

function addTaskToList() {
  const main = document.querySelector("main label");

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  // const priority = document.getElementById("priority").value;

  const test = new Task(title, description, date);
}

function displayTask() {
  taskList.push(test);
  for (let tasks of taskList) {
    console.log(Object.values(tasks));
  }
  console.log(taskList);
  // main.textContent = taskList[0].date.value;
}

// TODO: Make new task show up with checkbox, title, due date, priority
// Start by having values of taskList display on main list
