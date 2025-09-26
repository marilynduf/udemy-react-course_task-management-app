import { useState } from "react";
import { jsx } from "react/jsx-runtime";
export default function Task({ onAddTask, onDeleteTask, projectTasks }) {
    const [enteredText, setEnteredText] = useState("");
    function handleOnChange(e) {
        setEnteredText(e.target.value);
    }
    function handleOnClick() {
        if (enteredText.trim() === "") {
            return;
        }
        onAddTask(enteredText);
        setEnteredText("");
    }
    function handleDeleteTask(taskId) {
        onDeleteTask(taskId);
    }

    return (
        <section className="tasks">
            <div className="tasks-add-area">
                <h2>Task</h2>
                <input
                    type="text"
                    onChange={(e) => handleOnChange(e)}
                    value={enteredText}
                />
                <button
                    className="btn-add btn-add-task"
                    onClick={handleOnClick}
                >
                    Add task
                </button>
            </div>

            <ul className="tasks-list">
                {projectTasks.length !== 0 ? (
                    projectTasks.map((task) => {
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
                    })
                ) : (
                    <p className="msg-no-tasks">Pas de tâche dans ce projet</p>
                )}
            </ul>
        </section>
    );
}
