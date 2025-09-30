import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import Project from "../src/composants/Project";
import NoProjectSelected from "../src/composants/NoProjectSelected";
import { tasksReducer } from "./composants/reducers/task.reducer";
import { projectReducer } from "./composants/reducers/project.reducer";
import { useState, useReducer } from "react";

function App() {
    const [projectState, dispatchProjectAcions] = useReducer(projectReducer, {
        selectedProjectId: undefined,
        projects: [],
    });

    const [tasksState, dispatchTasksAcions] = useReducer(tasksReducer, {
        tasks: [],
    });

    function handleAddTask(text) {
        const projectId = projectState.selectedProjectId;
        console.log(projectId);
        dispatchTasksAcions({
            type: "ADD_TASK",
            payload: { text: text, selectedProjectIdTest: projectId },
        });
    }

    function handleStartAddProject() {
        dispatchProjectAcions({
            type: "START_PROJECT",
        });
    }

    function handleAddProject(projectData) {
        dispatchProjectAcions({
            type: "ADD_PROJECT",
            payload: { data: projectData },
        });
    }

    function handleCancel() {
        dispatchProjectAcions({
            type: "CANCEL_PROJECT",
        });
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: undefined,
        }));
    }

    function handleSelectProject(id) {
        dispatchProjectAcions({
            type: "SELECT_PROJECT",
            payload: { projectId: id },
        });
    }

    function handleDeleteProject() {
        dispatchProjectAcions({
            type: "DELETE_PROJECT",
        });
    }

    function onDeleteTask(taskId) {
        dispatchTasksAcions({ type: "DELETE_TASK", payload: { id: taskId } });
    }

    const selectedProject = projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId
    );

    const projectTasks = tasksState.tasks.filter(
        (task) => task.projectIdInTask === projectState.selectedProjectId
    );

    let content = (
        <Project
            onDeleteProject={handleDeleteProject}
            onAddTask={handleAddTask}
            project={selectedProject}
            projectTasks={projectTasks}
            onDeleteTask={onDeleteTask}
        />
    );
    if (projectState.selectedProjectId === null) {
        content = (
            <NewProject
                onAddProject={handleAddProject}
                onCancelProject={handleCancel}
            />
        );
    } else if (projectState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }

    return (
        <>
            <h1 className="my-8 text-center text-5xl">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full bg-white">
                <SidebarProject
                    projectsData={projectState.projects}
                    onStartAddProject={handleStartAddProject}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectState.selectedProjectId}
                />
                <main className="flex-1 p-8">{content}</main>
            </div>
        </>
    );
}

export default App;
