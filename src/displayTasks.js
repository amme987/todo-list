export function displayTask(taskList) {
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

    // const details = document.createElement("details");
    // const summary = document.createElement("summary");

    // Menu element with button options to edit/delete task
    const menu = document.createElement("menu");
    row.appendChild(menu);
    const edit = document.createElement("li");
    edit.appendChild(document.createElement("button")).textContent = "Edit";
    const remove = document.createElement("li");
    remove.appendChild(document.createElement("button")).textContent = "Delete";
    menu.append(edit, remove);
    row.append(title, date, priority, menu);
    // details.append(summary);

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
