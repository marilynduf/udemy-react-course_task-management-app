import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({ handleCancel, onAddProject }) {
    const modal = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const duDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDescription = descriptionRef.current.value;
        const enteredDueDate = duDateRef.current.value;

        if (
            enteredTitle.trim() === "" ||
            enteredDescription.trim() === "" ||
            enteredDueDate.trim() === ""
        ) {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="ok">
                <h2>Error in form</h2>
            </Modal>
            <h2>Ajouter un nouveau projet</h2>
            <div className="flex justify-end">
                <button onClick={handleCancel} className="btn-cancel">
                    Cancel
                </button>
                <button onClick={handleSave} className="btn-safe">
                    Save
                </button>
            </div>
            <div>
                <Input ref={titleRef} label="Title" type="text"></Input>
                <Input
                    ref={descriptionRef}
                    label="Description"
                    type="text"
                    useTag="textarea"
                ></Input>
                <Input ref={duDateRef} label="Due date" type="date"></Input>
            </div>
        </>
    );
}
