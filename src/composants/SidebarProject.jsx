import Button from "./Button";
export default function SidebarProject({ projectsData, onStartAddProject }) {
    return (
        <aside id="sidebar" className="w-80 min-w-64 p-8">
            <h2>Your project</h2>
            <Button
                onClick={onStartAddProject}
                style={{ backgroundColor: "#00803b", marginTop: "20px" }}
            >
                + Add project
            </Button>

            {projectsData.map((project) => (
                <Button
                    id={project.id}
                    className="btn-project-list w-full text-left"
                    key={project.id}
                >
                    {project.title}
                </Button>
            ))}
        </aside>
    );
}
