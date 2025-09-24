import Task from "../composants/Task";
export default function Project({
    project,
    onDeleteProject,
    onAddTask,
    onDeleteTask,
    projectTasks,
}) {
    return (
        <>
            <div className="flex justify-between">
                <h2>{project.title}</h2>
                <button onClick={onDeleteProject} className="btn-cancel">
                    Delete project
                </button>
            </div>
            <p>{project.dueDate}</p>
            <p>{project.description}</p>
            <Task
                onAddTask={onAddTask}
                project={project}
                projectTasks={projectTasks}
                onDeleteTask={onDeleteTask}
            ></Task>
        </>
    );
}
