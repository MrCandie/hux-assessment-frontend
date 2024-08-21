import PropTypes from "prop-types";

export default function Select({
  label,
  type,
  id,
  placeholder,
  value,
  onChange,
  options = [],
  required = true,
}) {
  return (
    <div className="w-full flex items-start gap-4 flex-col">
      <label
        htmlFor={id}
        className="text-base text-[#333] font-medium capitalize">
        {label}
      </label>
      <select
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        className="outline-none bg-gray-100 rounded-md border w-full p-4"
        required={required}>
        <option>{placeholder}</option>
        {options.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  required: PropTypes.bool,
};
