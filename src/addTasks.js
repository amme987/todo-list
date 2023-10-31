import { displayTask } from "./displayTasks";
import { closeForm } from "./popupForm";

export let taskList = [];

const add = document.querySelector("#tasks .add");

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
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  // Know which radio button is checked
  const priority = document.querySelector("input[type='radio']:checked").value;

  const test = new Task(title, description, date, priority);
  taskList.push(test);
}
