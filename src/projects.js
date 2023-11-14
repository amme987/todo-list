import { closeForm } from "./popupForm";
import { clickAddTask } from "./addTasks";
import { displayTask } from "./displayTasks";

let projectList = [];
const add = document.querySelector("#projects .add");

class Project {
  constructor(name) {
    this.name = name;
  }

  taskList = [];
}

add.addEventListener("click", () => {
  closeForm("projects");
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
// console.log(projects.children);

projects.addEventListener("click", e => {
  // if (e.target.matches("div")) {
  const id = e.target.id.slice(1);
  console.log(projectList[id]);
  displayTask(projectList[id].taskList);
  clickAddTask(projectList[id].taskList);
  // }
});
// TODO: Fix issue where multiple tasks are being added. Related to
// clicking the same project multiple times
