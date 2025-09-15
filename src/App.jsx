import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import Project from "../src/composants/Project";
import NoProjectSelected from "../src/composants/NoProjectSelected";
import { useState } from "react";

function App() {
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
        setProjectsState((prevState) => {
            const newProject = {
                ...projectData,
                id: Math.random(),
            };
            return {
                ...prevState,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    // Cancel function
    function handleCancel() {}

    let content;
    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject
                handleCancel={handleCancel}
                handleAddProject={handleAddProject}
            />
        );
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <NoProjectSelected handleAddProject={handleStartAddProject} />
        );
    }

    console.log(projectsState);

    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full bg-white">
                <SidebarProject
                    projectsData={projectsState.projects}
                    handleAddProject={handleStartAddProject}
                />
                <main className="flex-1 p-8">
                    {content}
                    {/* {false && <Project />} */}
                </main>
            </div>
        </>
    );
}

export default App;
