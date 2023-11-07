// Open and close popup form
const overlay = document.querySelector(".overlay");

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

function openForm(form) {
  document.getElementById(form).style.display = "flex";
  overlay.style.display = "block";
}

function closeForm() {
  // Close form that is currently being shown
  document.querySelector("form[style='display: flex;']").style.display = "none";
  overlay.style.display = "none";
}

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

export { closeForm };
