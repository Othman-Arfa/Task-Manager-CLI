# 📋 Task Manager CLI

> A command-line task manager built with pure JavaScript and Node.js — because real backend developers don't need buttons. 😎

---

## 🎯 What is this?

This is a **Task Manager CLI** — a terminal-based tool that lets you:

- ✅ Add tasks
- 📋 List all tasks (with fancy emojis!)
- ✅ Mark tasks as complete
- 🗑️ Delete tasks
- 💾 Save everything to a JSON file (so your tasks survive a PC crash)

No frameworks. No databases. Just **pure JavaScript** and the **Node.js `fs` module**.

---

## 🚀 Why I Built This

I wanted to test everything I learned about JavaScript:

| Concept | How I used it |
|---------|---------------|
| Arrays & Objects | Storing tasks |
| `.find()`, `.filter()`, `.map()` | Finding, filtering, and transforming tasks |
| `for...of` loops | Displaying tasks |
| Async/Await + Try/Catch | Handling file operations safely |
| Node.js `fs` module | Saving and loading tasks from a file |

This project is the **culmination of my JavaScript learning** — and it works! (Mostly. Sometimes. 😅)

---

## 🛠️ Features

| Feature | Description |
|---------|-------------|
| ➕ **Add Task** | Add a new task with an auto-generated ID |
| 📋 **List Tasks** | View all tasks with status emojis (🔲 pending, ✅ done, 🔄 in progress) |
| ✅ **Complete Task** | Mark a task as done by ID |
| 🗑️ **Delete Task** | Permanently delete a task by ID |
| 💾 **Auto-Save** | Every change is saved to `tasks.json` automatically |

---

## 📦 Tech Stack

- **Language:** JavaScript (ES6+)
- **Runtime:** Node.js
- **Modules:** Built-in `fs` (file system)
- **No dependencies!** (Zero `npm install` required)

---

## 🏃 How to Run

### 1. Clone the repo

```bash
git clone https://github.com/othman-arfa/task-manager-cli.git
cd task-manager-cli
```

## Run the project
``` bash
node task.js
That's it! No installation, no dependencies, no headaches.
```
## 📝 Usage Examples
Add a task
javascript
addTask("Learn Express.js");
// Output: ✅ Task added: "Learn Express.js" (ID: 4)
List all tasks
javascript
listTasks();
// Output:
// 📋 You have 5 task(s):
// ────────────────────────────────────────
// [1] 🔄 Become a Backend Dev (In Progress)
// [2] 🔲 Learn Express.js (Pending)
// [3] ✅ Buy milk (Done)
Complete a task
javascript
completeTask(2);
// Output: ✅ Task "Learn Express.js" marked as done!
Delete a task
javascript
deleteTask(3);
// Output: 🗑️ Task "Buy milk" deleted!
📂 Project Structure
text
task-manager-cli/
├── task.js          # Main application code
├── tasks.json       # Auto-generated file (your tasks!)
└── README.md        # This file

## 🧠 What I Learned

fs module — Reading and writing files synchronously

Array methods — .find(), .filter(), .map(), .forEach()

Async/Await — Making file operations safe with try...catch

Error handling — Preventing crashes from malformed JSON

Emoji display — Making the terminal less boring 😄

## 🔮 What's Next?
I'm planning to:

🌐 Turn this into a REST API with Node.js + Express

🗄️ Connect it to a real database (PostgreSQL or MongoDB)

🔐 Add authentication so users can have their own task lists

## 🙌 Acknowledgments
Built entirely by me, with a little help from Google, Stack Overflow, and a lot of coffee. ☕

## 📜 License
MIT — use it, share it, break it, fix it.

Made with 💻, ☕, and a lot of debugging.
