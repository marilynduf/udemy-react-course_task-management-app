export default function Input({ ref, label, type, useTag = "input" }) {
    const UseTag = useTag;
    return (
        <div className="mb-8">
            <label htmlFor="">{label}</label>
            <UseTag ref={ref} type={type} />
        </div>
    );
}
