import { taskList } from "./addTasks";
import { storage } from "./storage";

export function displayTask() {
  const main = document.querySelector(".tasks main");

  main.textContent = "";

  // Loop through taskList
  for (const tasks in taskList) {
    // Row for each task to go in
    const row = document.createElement("article");
    main.appendChild(row);
    row.setAttribute("id", tasks);

    const title = document.createElement("label");

    // Create checkbox input to attach to title label
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "checkbox");
    inputTitle.setAttribute("name", "title");

    const date = document.createElement("div");
    date.classList.add("date");

    const priority = document.createElement("div");
    priority.classList.add("priority");

    // Menu element with button options to edit/delete task
    const menu = document.createElement("menu");
    const edit = document.createElement("input");
    menu.appendChild(document.createElement("li")).appendChild(edit);
    edit.setAttribute("type", "image");
    edit.setAttribute("class", "edit");
    edit.setAttribute("src", "/src/edit.svg");
    const remove = document.createElement("input");
    menu.appendChild(document.createElement("li")).appendChild(remove);
    remove.setAttribute("type", "image");
    remove.setAttribute("class", "delete");
    remove.setAttribute("src", "/src/delete.svg");
    row.append(title, date, priority, menu);

    // Loop through keys in taskList (title/description/date/priority)
    for (let keys in taskList[tasks]) {
      if (keys === "title") {
        title.append(inputTitle, taskList[tasks][keys]);
      } else if (keys === "date") {
        date.textContent = taskList[tasks][keys];
      } else if (keys === "priority") {
        priority.textContent = taskList[tasks][keys];
        switch (priority.textContent) {
          case "low":
            priority.style.color = "green";
            priority.style.backgroundColor = "#f1f8e9";
            break;
          case "medium":
            priority.style.color = "#d17300";
            priority.style.backgroundColor = "#fff3e0";
            break;
          case "high":
            priority.style.color = "#d70000";
            priority.style.backgroundColor = "#fbe9e7";
        }
      }
    }
    // Mark checkbox on DOM as "checked"
    if (taskList[tasks].checked) {
      inputTitle.checked = true;
    }
  }
}

// Keep track of checkboxes when user clicks on task
document.querySelector(".tasks main").addEventListener("click", e => {
  if (e.target.matches("input[type='checkbox']")) {
    const checkbox = e.target.checked;
    const id = e.target.closest("article").id;

    // If checkbox is checked, mark "checked" as true on taskList, else mark as false
    taskList[id].checked = checkbox ? true : false;
    storage();
  }
});
