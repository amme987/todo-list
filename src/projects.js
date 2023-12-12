import { closeForm } from "./popupForm";
import { displayTask } from "./displayTasks";

let projectList = [];
export let projectTasks;

class Project {
  constructor(name) {
    this.name = name;
  }

  taskList = [];
}

// Display default project when user first opens the app
(function () {
  const defaultProject = new Project("Personal");
  projectList.push(defaultProject);
  displayProject();
})();

const add = document.querySelector("#projects .add");
add.addEventListener("click", () => {
  closeForm();
  addProjectToList();
  displayProject();
});

function addProjectToList() {
  const project = new Project(document.getElementById("project-name").value);
  projectList.push(project);
}

function displayProject() {
  const main = document.querySelector(".projects main");
  main.textContent = "";

  for (const projects in projectList) {
    const div = document.createElement("div");
    main.appendChild(div);
    // p{index} for unique project id
    div.setAttribute("id", `p${projects}`);
    div.textContent = projectList[projects].name;
  }

  // Updates current taskList and displays blank list when new project is displayed
  projectTasks = projectList[projectList.length - 1].taskList;
  displayTask();
}

// Display taskList corresponding to project selected
const projects = document.querySelector("body > nav > main");
projects.addEventListener("click", e => {
  const id = e.target.id.slice(1);
  projectTasks = projectList[id].taskList;
  displayTask();
});
