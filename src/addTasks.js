import { displayTask } from "./displayTasks";
import { closeForm, form } from "./popupForm";
import { projectList, projectTasks as taskList } from "./projects";

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

// Initial listeners: addTaskToList, closeForm, displayTask
const initialEvents = () => {
  closeForm();
  addTaskToList();
  displayTask();
  taskStorage();
};

function addTaskToList() {
  const task = new Task(
    form().title,
    form().description,
    form().date,
    form().priority
  );
  taskList.push(task);
}

// Save task to localStorage each time a new task is created
function taskStorage() {
  localStorage.setItem("project", JSON.stringify(projectList));
}

export { taskList, initialEvents, addTaskToList, taskStorage };
