import PropTypes from "prop-types";

export default function Input({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
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
        className="outline-none bg-gray-100 rounded-md border w-full p-4"
        required
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
};
