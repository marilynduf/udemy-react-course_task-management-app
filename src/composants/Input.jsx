export default function Input({ label, useTag = "input", ...props }) {
    const UseTag = useTag;
    return (
        <div className="mb-8">
            <label htmlFor="">{label}</label>
            <UseTag {...props} />
        </div>
    );
}
