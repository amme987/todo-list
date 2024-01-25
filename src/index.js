import "./style.css";
import "./addTasks.js";

// Refreshes page when user manually chooses to clear or delete from local storage
window.addEventListener("storage", () => document.location.reload());
