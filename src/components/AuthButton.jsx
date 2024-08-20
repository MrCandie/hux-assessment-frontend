import PropTypes from "prop-types";

export default function AuthButton({ title }) {
  return (
    <button className="w-full bg-[#ef4f51] hover:shadow-lg h-[60px] rounded-md text-white font-medium text-base">
      {title}
    </button>
  );
}

AuthButton.propTypes = {
  title: PropTypes.string,
};
