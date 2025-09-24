import Task from "../composants/Task";
export default function Project({
    project,
    onDeleteProject,
    onAddTask,
    projectTasks,
}) {
    return (
        <>
            <div>
                <h2>{project.title}</h2>
                <button onClick={onDeleteProject} className="btn-cancel">
                    Delete
                </button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <Task
                onAddTask={onAddTask}
                project={project}
                projectTasks={projectTasks}
            ></Task>
        </>
    );
}
