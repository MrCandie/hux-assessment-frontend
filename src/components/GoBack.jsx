import { LiaLessThanSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function GoBack({ title }) {
  const navigate = useNavigate();
  return (
    <div className="py-4 flex items-center w-full gap-4 px-4 border-b border-b-gray-100">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-200 rounded-md flex items-center gap-4 p-2"
        size="sm">
        <LiaLessThanSolid /> Back
      </button>
      <h2
        size={{ lg: "sm", md: "sm", base: "xs" }}
        color="#333"
        fontWeight="medium">
        {title}
      </h2>
    </div>
  );
}
GoBack.propTypes = {
  title: PropTypes.string,
};
