import { closeForm } from "./popupForm";

// Add new task to list
let taskList = [];

const add = document.querySelector(".add");

class Task {
  constructor(title, description, date, priority) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
  }
}

add.addEventListener("click", () => {
  closeForm();
  addTaskToList();
  displayTask();
});

function addTaskToList() {
  // const main = document.querySelector("main label");

  const title = document.getElementById("form-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  let priority = document.querySelectorAll("input[type='radio']");

  // Get priority based on radio button selected
  priority.forEach(item => {
    if (item.checked === true) {
      priority = item.value;
    }
  });

  const test = new Task(title, description, date, priority);
  taskList.push(test);
}

function displayTask() {
  const main = document.querySelector("main");
  main.textContent = "";

  // Loop through taskList
  for (const tasks in taskList) {
    const title = document.createElement("label");

    // Create checkbox input to attach to title label
    const inputTitle = document.createElement("input");
    inputTitle.setAttribute("type", "checkbox");
    inputTitle.setAttribute("id", tasks);

    const date = document.createElement("div");
    date.classList.add("date");

    const priority = document.createElement("div");
    priority.classList.add("priority");

    main.append(title, date, priority);

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

// TODO: Have multiple tasks display at once
// Make tasks look better
