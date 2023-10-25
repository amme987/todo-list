import { taskList } from "./addTasks";

export function displayTask() {
  const main = document.querySelector("main");
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

    row.append(title, date, priority);

    // Loop through keys in taskList (title/description/date/priority)
    for (let keys in taskList[tasks]) {
      if (keys === "title") {
        title.append(inputTitle, taskList[tasks][keys]);
      } else if (keys === "date") {
        date.textContent = taskList[tasks][keys];
      } else if (keys === "priority") {
        priority.textContent = taskList[tasks][keys];
      }
    }
  }
}
