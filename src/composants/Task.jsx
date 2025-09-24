import { useState } from "react";
export default function Task({ onAddTask, project }) {
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
            <button onClick={handleOnClick}>Add task</button>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
}
