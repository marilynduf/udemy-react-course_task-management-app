import Button from "./Button";
import imgPaperPencil from "../assets/no-projects.png";
export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="flex flex-col items-center">
            <img src={imgPaperPencil} alt="Paper et pencil image" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <Button className="btn-add" onClick={onStartAddProject}>
                + Add project
            </Button>
        </div>
    );
}
