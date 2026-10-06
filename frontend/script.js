async function loadTasks() {
  const res = await fetch("/api/tasks");
  const data = await res.json();
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  data.tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  });
}

document.getElementById("addBtn").addEventListener("click", async () => {
  const task = document.getElementById("taskInput").value;
  if (!task) return;
  await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ task })
  });
  document.getElementById("taskInput").value = "";
  loadTasks();
});

// Load tasks when page opens
loadTasks();
