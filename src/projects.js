import { closeForm } from "./popupForm";
import { displayTask } from "./displayTasks";

let projectList = [];
let projectTasks;

class Project {
  constructor(name) {
    this.name = name;
  }

  taskList = [];
}

// If storage hasn't been populated, display default project; else display local storage projects
if (localStorage.length === 0) {
  projectList = [new Project("Personal")];
} else {
  projectList = JSON.parse(localStorage.getItem("project"));
}

displayProject();

const add = document.querySelector("#projects .add");
add.addEventListener("click", () => {
  closeForm();
  addProjectToList();
  displayProject();
  projectStorage();
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

// Save project to localStorage each time a new project is created
function projectStorage() {
  localStorage.setItem("project", JSON.stringify(projectList));
}

// Display taskList corresponding to project selected
const projects = document.querySelector("body > nav > main");
projects.addEventListener("click", e => {
  const id = e.target.id.slice(1);
  projectTasks = projectList[id].taskList;
  displayTask();
});

export { projectList, projectTasks };
