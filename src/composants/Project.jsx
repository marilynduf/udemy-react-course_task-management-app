export default function Project({ project }) {
    console.log("PROJECT rendered");

    // Add formatted date here

    return (
        <>
            <div>
                <h2>TITLE</h2>
                <button>Delete</button>
            </div>
            <p>DATE</p>
            <p>DESCRIPTION</p>
            <p>TASKS</p>
        </>
    );
}
