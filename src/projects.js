import { closeForm } from "./popupForm";

let projectList = [];
const add = document.querySelector("#projects .add");

// class Project {
//   constructor(title, description, date, priority) {
//     this.title = title;
//     this.description = description;
//     this.date = date;
//     this.priority = priority;
//   }
// }

add.addEventListener("click", () => {
  closeForm();
  addProjectToList();
  displayProject();
});

function addProjectToList() {
  const name = document.getElementById("project-name").value;
  projectList.push(name);
}

function displayProject() {
  const main = document.querySelector(".projects main");
  main.textContent = "";

  for (const projects of projectList) {
    console.log(projects);
    const div = document.createElement("div");
    main.appendChild(div);
    div.textContent = projects;
  }
}
