import { initialEvents } from "./addTasks";
import { controller } from "./modifyTasks";

const overlay = document.querySelector(".overlay");
const cancel = document.querySelectorAll(".cancel");

const add = document.querySelector(
  "#tasks > div.form-header > button:not(.cancel)"
);

const formButtons = document.querySelectorAll(".form");
formButtons.forEach(button => {
  button.addEventListener("click", e => {
    // Account for both forms
    if (e.target.id === "add-project") {
      openForm("projects");
    } else {
      openForm("tasks");
      add.addEventListener("click", e => {
        if (
          !document.getElementById("task-title").validity.valueMissing &&
          !document.getElementById("description").validity.valueMissing
        ) {
          e.preventDefault();
          initialEvents();
        }
      }); //Add check for required fields here
      add.setAttribute("class", "add");
      add.textContent = "Add";

      document.querySelector("#tasks .form-header div").textContent =
        "New Task";
    }
  });
});

overlay.addEventListener("click", () => {
  // Clear form so that previous form inputs aren't shown when adding new tasks
  document.getElementById("tasks").reset();

  // Remove event listeners
  controller.abort();

  closeForm();
});
cancel.forEach(button =>
  button.addEventListener("click", () => {
    // Remove event listeners
    controller.abort();

    closeForm();
  })
);

function openForm(form) {
  document.getElementById(form).reset();
  document.getElementById(form).style.display = "flex";
  overlay.style.display = "block";
}

function closeForm() {
  // Close form that is currently being shown
  document.querySelector("form[style='display: flex;']").style.display = "none";
  overlay.style.display = "none";
}

// Returns form elements for easy access in other functions
const formElements = function () {
  const title = document.getElementById("task-title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("date").value;
  // Know which radio button is checked
  const priority = document.querySelector("input[type='radio']:checked").value;
  return { title, description, date, priority };
};

// Set default value of date input to current date
(function () {
  const date = document.querySelector("input[type='date']");
  const today = new Date();
  const month = today.getMonth() + 1;

  const dateFormat = `${today.getFullYear()}-${month
    .toString()
    .padStart(2, 0)}-${today.getDate().toString().padStart(2, 0)}`;

  date.setAttribute("value", dateFormat);
})();

export { openForm, closeForm, formElements as form };
