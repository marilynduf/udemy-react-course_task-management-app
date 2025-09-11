export default function Input({ label, useTag = "input", ...props }) {
    const UseTag = useTag;
    return (
        <div className="mb-8">
            <label className="block" htmlFor={label}>
                {label}
            </label>
            <UseTag id={label} {...props} />
        </div>
    );
}
