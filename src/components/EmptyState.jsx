import PropTypes from "prop-types";

export default function EmptyState({ title, icon, onClick }) {
  return (
    <div className="w-full h-[30vh]  flex items-center justify-center flex-col gap-4">
      <h2 className="text-base font-medium text-center">{title}</h2>
      <button onClick={() => onClick()} className="text-[#ef4f51]">
        {icon}
      </button>
    </div>
  );
}

EmptyState.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  onClick: PropTypes.func,
};
