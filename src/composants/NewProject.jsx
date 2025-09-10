import Input from "./Input";

export default function NewProject({
    handleCancel,
    handleSave,
    titleRef,
    descriptionRef,
    dueDateRef,
}) {
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
            <Input ref={titleRef} label="Title" type="text"></Input>
            <Input
                ref={descriptionRef}
                label="description"
                type="text"
                useTag="textarea"
            ></Input>
            <Input ref={dueDateRef} label="Due date" type="date"></Input>
        </>
    );
}
