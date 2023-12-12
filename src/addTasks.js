import { displayTask } from "./displayTasks";
import { closeForm, form } from "./popupForm";
import { projectTasks as taskList } from "./projects";

const add = document.querySelector("#tasks .add");

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

add.addEventListener(
  "click",
  () => {
    closeForm();
    addTaskToList();
    displayTask();
  },
  { once: true }
);

function addTaskToList() {
  const task = new Task(
    form().title,
    form().description,
    form().date,
    form().priority
  );
  taskList.push(task);
}

export { taskList, addTaskToList };
