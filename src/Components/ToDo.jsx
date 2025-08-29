import React, { useState } from "react"

function ToDo() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function addTasks() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }

    }

    function deleteTask(index) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <div className="to-do-list">
            <h2 className="my-4 text-xl">TO DO LIST</h2>
            <div className="flex flex-row w-full">
                <input type="text" placeholder="Enter a task" className="border px-2 w-full rounded" value={newTask} onChange={handleChange} />
                <button onClick={addTasks} className="addBtn">Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <div className="task-list">
                        <li key={index} className="li">{task}
                            <button className="m-1" onClick={() => deleteTask(index)}>Delete</button>
                            <button className="m-1" onClick={() => moveTaskUp(index)} >Up</button>
                            <button className="m-1" onClick={() => moveTaskDown(index)} >Down</button>
                        </li>

                    </div>)}
            </ol>

        </div>
    );
}
export default ToDo