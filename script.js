function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();
  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Mark completed on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
