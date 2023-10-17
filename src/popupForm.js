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

export default closeForm;
