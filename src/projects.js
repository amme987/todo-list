import { closeForm } from "./popupForm";
import { displayTask } from "./displayTasks";
import { defaultProject, storage } from "./storage";

let projectList = [];
let projectTasks;

class Project {
  constructor(name) {
    this.name = name;
  }

  taskList = [];
}

defaultProject();

const add = document.querySelector("#projects .add");
add.addEventListener("click", () => {
  closeForm();
  addProjectToList();
  displayProject();
  currentProject();
  storage();
});

function addProjectToList() {
  const project = new Project(document.getElementById("project-name").value);
  projectList.push(project);
}

// When a new project is added to the list, it automatically becomes the new current project
function currentProject() {
  localStorage.setItem("currentProject", projectList.length - 1);
  document.getElementById(`p${projectList.length - 1}`).style.backgroundColor =
    "pink";
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

  // Updates current taskList based on selected project
  projectTasks = projectList[localStorage.getItem("currentProject")].taskList;
  displayTask();
}

// Display taskList corresponding to project selected
const projects = document.querySelector("body > nav > main");
projects.addEventListener("click", e => {
  const id = e.target.id.slice(1);

  // Remove background color on previous selection
  projects
    .querySelectorAll("div")
    .forEach(div => div.style.removeProperty("background-color"));

  // Set background color on current selection
  e.target.style.backgroundColor = "pink";

  localStorage.setItem("currentProject", id);

  projectTasks = projectList[id].taskList;
  displayTask();
});

export { projectList, projectTasks, Project, displayProject };
