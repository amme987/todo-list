import { displayTask } from "./displayTasks";
import { closeForm } from "./popupForm";
// import { taskList } from "./projects";

// let taskList = [];

const add = document.querySelector("#tasks .add");

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

export function clickAddTask(taskList) {
  add.addEventListener("click", () => {
    // console.log(taskList);
    closeForm("tasks");
    addTaskToList(taskList);
    displayTask(taskList);
  });
}

function addTaskToList(taskList) {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  // Know which radio button is checked
  const priority = document.querySelector("input[type='radio']:checked").value;

  const task = new Task(title, description, date, priority);
  taskList.push(task);
}

// export { taskList };
