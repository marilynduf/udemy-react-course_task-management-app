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
            <p className="project-date">{project.dueDate}</p>
            <p className="mb-[20px] mt-[20px]">{project.description}</p>
            <Task
                onAddTask={onAddTask}
                project={project}
                projectTasks={projectTasks}
                onDeleteTask={onDeleteTask}
            ></Task>
        </>
    );
}
