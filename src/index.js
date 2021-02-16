document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.getElementById("tasks");
    const taskDescription = document.getElementById("new-task-description");
    const newTaskForm = document.getElementById("create-task-form");
    
    
    newTaskForm.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const newli = document.createElement("LI");
      const textnode = document.createTextNode(taskDescription.value);
      newli.appendChild(textnode);
      
      newli.innerHTML += `<button id=${taskDescription.value}>X</button>`

      taskList.appendChild(newli);
    });

    taskList.addEventListener("click", function(event) {
      if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();
      }
    })

});
