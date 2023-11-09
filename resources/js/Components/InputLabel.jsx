export default function InputLabel({ value, is_required, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-gray-700 ` + className}>
            {value ? value : children} {is_required ? <span className="text-red-500">*</span>:null}
        </label>
    );
}
