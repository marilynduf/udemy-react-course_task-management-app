import Button from "./Button";
import imgPaperPencil from "../assets/no-projects.png";
export default function NoProjectSelected({ handleAddProject }) {
    return (
        <div className="flex flex-col items-center">
            <img src={imgPaperPencil} alt="Paper et pencil image" />
            <h2>No Project Selected</h2>
            <p>Select a project or get started with a new one</p>
            <Button onClick={handleAddProject}>+ Add project</Button>
        </div>
    );
}
