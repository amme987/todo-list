import { displayTask } from "./displayTasks";
import { closeForm, form } from "./popupForm";
import { projectTasks as taskList } from "./projects";
import { storage } from "./storage";

class Task {
  constructor(title, description, date, priority, checked) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.checked = checked;
  }
}

// Initial listeners: addTaskToList, closeForm, displayTask
const initialEvents = () => {
  closeForm();
  addTaskToList();
  displayTask();
  storage();
};

function addTaskToList() {
  const task = new Task(
    form().title,
    form().description,
    form().date,
    form().priority,
    false
  );
  taskList.push(task);
}

export { taskList, initialEvents };
