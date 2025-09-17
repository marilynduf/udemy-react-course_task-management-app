export default function Project({ project }) {
    // Add formatted date here

    return (
        <>
            <div>
                <h2>{project.title}</h2>
                <button>Delete</button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <p>TASKS</p>
        </>
    );
}
