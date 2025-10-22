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
            <h2 className="mb-4 mt-20 ml-12 font-heading font-semibold text-xl">TO DO LIST</h2>
            <div className="flex flex-row w-3/4 ml-12">
                <input type="text" placeholder="Enter a task" className="border px-2 w-full rounded" value={newTask} onChange={handleChange} />
                <button onClick={addTasks} className="addBtn">Add</button>
            </div>
            <ol>
                {tasks.map((task, index) =>
                    <div className="task-list  w-5/6">
                        <li key={index} className="li flex flex-row items-center justify-center list-none bg-white shadow-sm ml-12"><p className="">{task}</p>
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