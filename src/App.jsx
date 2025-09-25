import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import Project from "../src/composants/Project";
import NoProjectSelected from "../src/composants/NoProjectSelected";
import { useState } from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    // Add project function
    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleCancel() {
        setProjectsState((prevState) => ({
            ...prevState,
            selectedProjectId: undefined,
        }));
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            };
        });
    }

    function handleAddTask(text) {
        setProjectsState((prevState) => {
            const newTask = {
                id: Math.random(),
                text: text,
                projectId: prevState.selectedProjectId,
            };
            return {
                ...prevState,
                tasks: [...prevState.tasks, newTask],
            };
        });
    }

    function onDeleteTask(taskId) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                tasks: prevState.tasks.filter((task) => task.id !== taskId),
            };
        });
    }

    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
    );

    const projectTasks = projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId
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
    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject
                onAddProject={handleAddProject}
                onCancelProject={handleCancel}
            />
        );
    } else if (projectsState.selectedProjectId === undefined) {
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
                    projectsData={projectsState.projects}
                    onStartAddProject={handleStartAddProject}
                    onSelectProject={handleSelectProject}
                    selectedProjectId={projectsState.selectedProjectId}
                />
                <main className="flex-1 p-8">{content}</main>
            </div>
        </>
    );
}

export default App;
