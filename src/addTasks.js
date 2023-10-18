import { closeForm } from "./popupForm";

// Add new task to list
let taskList = [];

const add = document.querySelector(".add");

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

add.addEventListener("click", () => {
  closeForm();
  addTaskToList();
  displayTask();
});

function addTaskToList() {
  const main = document.querySelector("main label");

  const title = document.getElementById("form-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  const priority = document.querySelector("input[type='radio']").id;

  const test = new Task(title, description, date, priority);
  taskList.push(test);
}

function displayTask() {
  const title = document.querySelector("label[for='title']");
  const date = document.querySelector(".date");
  const priority = document.querySelector("div.priority");

  console.log(taskList);
  // Loop through taskList
  for (let tasks of taskList) {
    // Loop through keys in taskList (title/description/date/priority)
    for (let keys in tasks) {
      if (keys === "title") {
        title.textContent = tasks[keys];
      } else if (keys === "date") {
        date.textContent = tasks[keys];
      } else if (keys === "priority") {
        priority.textContent = tasks[keys];
      }
    }
  }
}

// TODO: Make new task show up with checkbox, title, due date, priority
// Have priority display on main list