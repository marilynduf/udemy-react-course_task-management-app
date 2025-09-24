import { useState } from "react";
export default function Task({ onAddTask, project, projectTasks }) {
    const [enteredText, setEnteredText] = useState("");
    function handleOnChange(e) {
        setEnteredText(e.target.value);
    }
    function handleOnClick() {
        onAddTask(enteredText);
        setEnteredText("");
    }

    return (
        <>
            <h2>Task</h2>
            <input
                type="text"
                onChange={(e) => handleOnChange(e)}
                value={enteredText}
            />
            <button className="btn-add" onClick={handleOnClick}>
                Add task
            </button>

            <ul>
                {projectTasks.map((task) => {
                    return (
                        <div className="flex items-center">
                            <li key={task.id}>{task.text}</li>
                            <button className="btn-delete-task">delete</button>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}
