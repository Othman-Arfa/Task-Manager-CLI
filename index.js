const fs = require('fs');
const TASKS_FILE = 'tasks.json';

// Phase 1: Data Structure
let tasks = [];

// Phase 4: Load & Save
function loadTasks() {
    try {
        if (fs.existsSync(TASKS_FILE)) {
            const data = fs.readFileSync(TASKS_FILE, 'utf8');
            tasks = JSON.parse(data);
            console.log(`📂 Loaded ${tasks.length} task(s) from file.`);
        } else {
            console.log("📂 No saved tasks found. Starting fresh.");
        }
    } catch (error) {
        console.log("❌ Error loading tasks:", error.message);
    }
}

function saveTasks() {
    try {
        fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
        console.log("💾 Tasks saved to file.");
    } catch (error) {
        console.log("❌ Error saving tasks:", error.message);
    }
}

// Phase 2: Add Tasks
function addTask(title) {
    const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;
    const newTask = {
        id: newId,
        title: title,
        status: "Pending",
    };
    tasks.push(newTask);
    console.log(`✅ Task added: "${newTask.title}" (ID: ${newId})`);
    saveTasks();
    return newTask;
}

// Phase 3: List Tasks
function listTasks() {
    if (tasks.length === 0) {
        console.log("📋 No tasks found!");
        return;
    }
    console.log(`\n📋 You have ${tasks.length} task(s):`);
    console.log("─".repeat(40));
    const sortedTasks = [...tasks].sort((a, b) => a.id - b.id);
    for (const task of sortedTasks) {
        let statusEmoji = "🔲";
        if (task.status === "Done" || task.status === "done") {
            statusEmoji = "✅";
        } else if (task.status === "In Progress" || task.status === "Pending") {
            statusEmoji = "🔄";
        }
        console.log(`[${task.id}] ${statusEmoji} ${task.title} (${task.status})`);
    }
}

// Phase 5: Complete Task
function completeTask(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        console.log(`❌ Task with ID ${id} not found!`);
        return;
    }
    task.status = "Done";
    console.log(`✅ Task "${task.title}" marked as done!`);
    saveTasks();
}

// Phase 6: Delete Task
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log(`❌ Task with ID ${id} not found!`);
        return;
    }
    const deletedTask = tasks.splice(index, 1)[0];
    console.log(`🗑️ Task "${deletedTask.title}" deleted!`);
    saveTasks();
}

// ===== TESTING =====
loadTasks();
listTasks();
addTask("Learn Express.js");
addTask("Build a REST API");
listTasks();
completeTask(1);
listTasks();
deleteTask(3);
listTasks();