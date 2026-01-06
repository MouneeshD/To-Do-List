let tasks = []

function addTask(){
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (task === ""){
        alert("Please enter a task");
        return;
    }

    tasks.push({task,date,time});
    viewTask();

    document.getElementById("task").value="";
    document.getElementById("date").value="";
    document.getElementById("time").value="";
}

function viewTask() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((t, index) => {
        let taskItem = document.createElement("div");
        taskItem.className = "task-item";

        taskItem.innerHTML = `
            <div class="task-content">
                <div class="task-text">
                    <strong>${t.task}</strong><br>
                    <small>${t.date} ${t.time}</small>
                </div>
                <div class="task-actions">
                    <button onclick="editTask(${index})">Edit</button>
                    <button onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>
        `;

        taskList.appendChild(taskItem);
    });
}

function deleteTask(index){
         tasks.splice(index,1);
         viewTask();
}

function editTask(index){
       let newTask = prompt("Edit task" , tasks[index].task);
       let newDate = prompt("Edit date" , tasks[index].date);
       let newTime = prompt("Edit time" , tasks[index].time);

       if(newTask !== null && newTask !== ""){
           tasks[index].task = newTask;
           tasks[index].date = newDate;
           tasks[index].time = newTime;
           viewTask();
       }
}
