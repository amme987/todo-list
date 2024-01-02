import "./style.css";
import "./addTasks.js";
import "./projects.js";
import "./modifyTasks.js";
import "./storage.js";

// Refreshes page when user manually chooses to clear or delete from local storage
window.addEventListener("storage", () => document.location.reload());
