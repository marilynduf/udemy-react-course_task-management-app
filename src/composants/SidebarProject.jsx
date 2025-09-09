export default function SidebarProject({ handleAddProjectClick }) {
    return (
        <aside id="sidebar" className="w-80 min-w-64 p-8">
            <h2>Your project</h2>
            <button
                onClick={handleAddProjectClick}
                style={{ backgroundColor: "#00803b", marginTop: "20px" }}
            >
                + Add project
            </button>
        </aside>
    );
}
