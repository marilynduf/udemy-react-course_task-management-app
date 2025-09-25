import Button from "./Button";
import imgPaperPencil from "../assets/no-projects.png";
export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="mt-[60px] flex flex-col items-center">
            <img src={imgPaperPencil} alt="Paper et pencil image" />
            <h2 className="my-[20px]">No Project Selected</h2>
            <p className="mb-[30px]">
                Select a project or get started with a new one
            </p>
            <Button className="btn-add" onClick={onStartAddProject}>
                + Add project
            </Button>
        </div>
    );
}
