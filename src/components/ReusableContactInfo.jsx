import PropTypes from "prop-types";

export default function ReusableContactInfo({ title, text }) {
  return (
    <div className="w-full flex flex-col gap-2 border-b border-b-[#ccc] py-2">
      <h2 className="text-base lg:text-[18px] font-semibold capitalize">
        {title}
      </h2>
      <h3 className="text-[14px] lg:text-base font-normal capitalize">
        {text}
      </h3>
    </div>
  );
}

ReusableContactInfo.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
