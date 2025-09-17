import Button from "./Button";
import { useRef } from "react";
export default function SidebarProject({
    projectsData,
    onStartAddProject,
    onSelectProject,
    selectedProjectId,
}) {
    const projectId = useRef();

    return (
        <aside id="sidebar" className="w-80 min-w-64 p-8">
            <h2>Your project</h2>
            <Button
                onClick={onStartAddProject}
                style={{ backgroundColor: "#00803b", marginTop: "20px" }}
            >
                + Add project
            </Button>

            {projectsData.map((project) => {
                let cssClasses = `btn-project-list w-full text-left px-2 py-1 rounded-sm hover:text-stone-200 hover:bg-stone-800`;
                if (project.id === selectedProjectId) {
                    cssClasses += " bg-stone-800 text-stone-200";
                } else {
                    cssClasses += " text-stone-400";
                }
                return (
                    <Button
                        ref={projectId}
                        onClick={onSelectProject}
                        id={project.id}
                        className={cssClasses}
                        key={project.id}
                    >
                        {project.title}
                    </Button>
                );
            })}
        </aside>
    );
}
