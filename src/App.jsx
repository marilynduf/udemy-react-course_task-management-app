import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import Project from "../src/composants/Project";
import NoProjectSelected from "../src/composants/NoProjectSelected";
import { useState, useRef } from "react";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
    });

    // Add project function
    function handleAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    // Cancel function
    function handleCancel() {}
    // Cancel function
    function handleSave() {}

    let content;
    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProject handleSave={handleSave} handleCancel={handleCancel} />
        );
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected handleAddProject={handleAddProject} />;
    }

    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full bg-white">
                <SidebarProject handleAddProject={handleAddProject} />
                <main className="flex-1 p-8">
                    {content}
                    {/* {false && <Project />} */}
                </main>
            </div>
        </>
    );
}

export default App;
