import { useState } from "react";
import { jsx } from "react/jsx-runtime";
export default function Task({ onAddTask, onDeleteTask, projectTasks }) {
    const [enteredText, setEnteredText] = useState("");
    function handleOnChange(e) {
        setEnteredText(e.target.value);
    }
    function handleOnClick() {
        onAddTask(enteredText);
        setEnteredText("");
    }
    function handleDeleteTask(taskId) {
        onDeleteTask(taskId);
    }

    return (
        <section className="tasks">
            <h2>Task</h2>
            <input
                type="text"
                onChange={(e) => handleOnChange(e)}
                value={enteredText}
            />
            <button className="btn-add btn-task" onClick={handleOnClick}>
                Add task
            </button>

            <ul className="tasks-list">
                {projectTasks.map((task) => {
                    return (
                        <div className="flex items-center">
                            <li key={task.id}>{task.text}</li>
                            <button
                                onClick={() => handleDeleteTask(task.id)}
                                className="btn-delete-task"
                            >
                                delete
                            </button>
                        </div>
                    );
                })}
            </ul>
        </section>
    );
}
