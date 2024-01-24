import { projectList, Project, displayProject } from "./projects";

function defaultProject() {
  // If storage hasn't been populated, display default project
  if (!localStorage.getItem("project")) {
    projectList = [new Project("Personal")];
    storage();
    localStorage.setItem("currentProject", 0);
    displayProject();

    // If storage has projects and a project Selection, display projects and selection
  } else {
    projectList = JSON.parse(localStorage.getItem("project"));
    displayProject();
  }

  document.getElementById(
    `p${localStorage.getItem("currentProject")}`
  ).style.backgroundColor = "pink";
}

// Save to localStorage each time a new project/task is created
function storage() {
  localStorage.setItem("project", JSON.stringify(projectList));
}

export { defaultProject, storage };
