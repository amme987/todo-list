import { closeForm } from "./popupForm";
import { displayTask } from "./displayTasks";

let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
  }

  taskList = [];
}

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
}

const projects = document.querySelector("body > nav > main");
// Export taskList corresponding to project selected
export let projectTasks;

projects.addEventListener("click", e => {
  const id = e.target.id.slice(1);
  projectTasks = projectList[id].taskList;
  displayTask(projectTasks);
});
