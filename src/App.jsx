import SidebarProject from "../src/composants/SidebarProject";
import NewProject from "../src/composants/NewProject";
import imgPaperPencil from "../src/assets/no-projects.png";
import { useState } from "react";

function App() {
    const [addingNewProject, setAddingNewProject] = useState(false);

    function handleAddProjectClick() {
        setAddingNewProject(true);
    }
    function handleCancel() {
        setAddingNewProject(false);
    }
    function handleSave() {
        console.log(titre.current.value);
    }
    return (
        <>
            <h1 className="my-8 text-center text-5xl font-bold">
                Marilyn's task managment app
            </h1>
            <div className="flex h-full bg-white">
                <SidebarProject handleAddProjectClick={handleAddProjectClick} />
                <main className="flex-1 p-8">
                    {!addingNewProject && (
                        <div className="flex flex-col items-center">
                            <img
                                src={imgPaperPencil}
                                alt="Paper et pencil image"
                            />
                            <p>No Project Selected</p>
                            <p>
                                Select a project or get started with a new one
                            </p>
                            <button onClick={handleAddProjectClick}>
                                + Create new project
                            </button>
                        </div>
                    )}

                    {addingNewProject && (
                        <NewProject
                            handleSave={handleSave}
                            handleCancel={handleCancel}
                        />
                    )}
                </main>
            </div>
        </>
    );
}

export default App;
