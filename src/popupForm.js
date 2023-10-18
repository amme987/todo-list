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

// Handle user input for priority buttons
const buttons = document.querySelectorAll("input[type='radio']");

console.log(buttons);

// for (const button of buttons) {
//   button.addEventListener("click", e => {
//     e.preventDefault();
//     let priority = e.target.value;
//   });
// }

buttons.forEach(button => {
  button.addEventListener("click", e => {
    console.log(e.target.id);
  });
});

// console.log(`priority: ${priority()}`);

export { closeForm };
