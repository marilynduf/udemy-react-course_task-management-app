import Input from "./Input";

export default function NewProject({ handleCancel, handleSave, ...props }) {
    return (
        <>
            <h2>Ajouter un nouveau projet</h2>
            <div className="flex justify-end">
                <button onClick={handleCancel} className="btn-cancel">
                    Cancel
                </button>
                <button onClick={handleSave} className="btn-safe">
                    Save
                </button>
            </div>
            <Input label="Title" type="text"></Input>
            <Input label="description" type="text" useTag="textarea"></Input>
            <Input label="Due date" type="date"></Input>
        </>
    );
}
