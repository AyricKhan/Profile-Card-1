const toggleBtn = document.getElementById("toggle-btn");
const hobbyList = document.getElementById("hobby-list");

toggleBtn.addEventListener("click", () => {
  hobbyList.classList.toggle("hidden");
  toggleBtn.textContent = hobbyList.classList.contains("hidden") ? "Show Hobbies" : "Hide Hobbies";
});
