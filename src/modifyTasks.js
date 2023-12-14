import { taskList, initialEvents, addTaskToList } from "./addTasks";
import { openForm, closeForm, form } from "./popupForm";
import { displayTask } from "./displayTasks";

const tasks = document.querySelector("body > div.tasks > main");
tasks.addEventListener("click", e => {
  const id = e.target.closest("article").id;
  if (e.target.matches(".edit")) {
    changeToDone();
    displayTaskForm(taskList[id]);
    modifyTask(taskList[id]);
  } else if (e.target.matches(".delete")) {
    taskList.splice(id, 1);
    displayTask();
  }
});

function displayTaskForm(task) {
  document.getElementById("task-title").value = task.title;
  document.getElementById("description").value = task.description;
  document.getElementById("date").value = task.date;
  document.querySelector(`input[value=${task.priority}]`).checked = true;
}

function modifyTask(task) {
  document.querySelector("#tasks .done").addEventListener(
    "click",
    () => {
      closeForm();
      task.title = form().title;
      displayTask();
    },
    { once: true }
  );
}

function changeToDone() {
  openForm("tasks");

  // Select button on form-header that is not the 'cancel' button (add/done)
  const done = document.querySelector(
    "#tasks > div.form-header > button:not(.cancel)"
  );

  done.removeEventListener("click", initialEvents);

  done.setAttribute("class", "done");
  done.textContent = "Done";
  document.querySelector("#tasks .form-header div").textContent =
    "Task Details";
}