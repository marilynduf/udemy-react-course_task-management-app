export default function Input({ label, type, useTag = "input" }) {
    const UseTag = useTag;
    return (
        <div className="mb-8">
            <label htmlFor="">{label}</label>
            <UseTag type={type} />
        </div>
    );
}
