import { taskList } from "./addTasks";
import { openForm } from "./popupForm";
import { displayTask } from "./displayTasks";

const tasks = document.querySelector("body > div.tasks > main");
tasks.addEventListener("click", e => {
  if (e.target.matches(".edit")) {
    openForm("tasks");
  } else if (e.target.matches(".delete")) {
    taskList.splice(e.target.closest("article").id, 1);
  }
  displayTask();
});
