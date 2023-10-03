import "./style.css";
// todo: design popup for adding todo to list
const addTask = document.querySelector(".add");
const overlay = document.querySelector(".overlay");
addTask.addEventListener("click", openForm);
overlay.addEventListener("click", closeForm);

function openForm() {
  document.querySelector("form").style.display = "flex";
  overlay.style.display = "block";
}

function closeForm() {
  document.querySelector("form").style.display = "none";
  overlay.style.display = "none";
}
