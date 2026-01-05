let tasks = []; 

function addTask() {
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

  
    tasks.push({ task, date, time });

    viewTask();
    
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
}

function viewTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 

    tasks.forEach(t => {
        let taskItem = document.createElement("div");
        taskItem.className = "task-item";

        taskItem.innerHTML = `
            <p>
                <strong>${t.task}</strong><br>
                <small>${t.date} ${t.time}</small>
            </p>
        `;

        taskList.appendChild(taskItem);
    });
}
