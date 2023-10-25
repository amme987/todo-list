// Open and close popup form
const newTask = document.querySelector(".new-task");
const overlay = document.querySelector(".overlay");
newTask.addEventListener("click", openForm);
overlay.addEventListener("click", closeForm);

function openForm() {
  document.querySelector("form").style.display = "flex";
  overlay.style.display = "block";
}
function closeForm() {
  document.querySelector("form").style.display = "none";
  overlay.style.display = "none";
}

// Set default value of date input to current date
(function () {
  const date = document.querySelector("input[type='date']");
  const today = new Date();
  const month = today.getMonth() + 1;

  const dateFormat = `${today.getFullYear()}-${month
    .toString()
    .padStart(2, 0)}-${today.getDate()}`;

  date.setAttribute("value", dateFormat);
})();

export { closeForm };
