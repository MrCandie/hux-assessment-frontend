import PropTypes from "prop-types";

export default function Input({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  required = true,
  readOnly = false,
}) {
  return (
    <div className="w-full flex items-start gap-4 flex-col">
      <label
        htmlFor={id}
        className="text-base text-[#333] font-medium capitalize">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className="outline-none bg-gray-100 rounded-md border w-full p-4"
        required={required}
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
};
