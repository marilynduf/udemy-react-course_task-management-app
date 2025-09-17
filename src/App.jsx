import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import Project from "../src/composants/Project";
import NoProjectSelected from "../src/composants/NoProjectSelected";
import { useState } from "react";

function App() {
    console.log("render APP");
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
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
        console.log("got in handleAddProject");
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

    let content = <Project />;
    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAddProject={handleAddProject} />;
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected onStartAddProject={handleStartAddProject} />
        );
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    console.log(projectsState.selectedProjectId);
    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full bg-white">
                <SidebarProject
                    projectsData={projectsState.projects}
                    onStartAddProject={handleStartAddProject}
                    onSelectProject={handleSelectProject}
                />
                <main className="flex-1 p-8">{content}</main>
            </div>
        </>
    );
}

export default App;
