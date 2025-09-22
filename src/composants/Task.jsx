export default function Task({ onAddTask, project }) {
    // function onAddTask() {
    //     onAddTask();
    // }

    return (
        <>
            <h2>Task</h2>
            <button onClick={onAddTask}>Add task</button>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </>
    );
}
