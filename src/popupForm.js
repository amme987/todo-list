const overlay = document.querySelector(".overlay");
const cancel = document.querySelectorAll(".cancel");

const formButtons = document.querySelectorAll(".form");
formButtons.forEach(button => {
  button.addEventListener("click", e => {
    // Account for both forms
    if (e.target.id === "add-project") {
      openForm("projects");
    } else {
      openForm("tasks");
    }
  });
});

overlay.addEventListener("click", closeForm);
cancel.forEach(button => button.addEventListener("click", closeForm));

function openForm(form) {
  document.getElementById(form).style.display = "flex";
  overlay.style.display = "block";

  // Select button on form-header that is not the 'cancel' button (add/done)
  document.querySelector(
    "#tasks > div.form-header > button:not(.cancel)"
  ).textContent = "Add";

  document.querySelector("#tasks .form-header div").textContent = "New Task";
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
