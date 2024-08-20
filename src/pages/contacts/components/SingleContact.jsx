import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SingleContact() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/contact/ghtegrtresaw")}
      className="w-full flex items-start hover:opacity-80 cursor-pointer justify-between gap-4">
      <div className="w-[30px] h-[30px] rounded-full bg-red-300"></div>
      <div className="flex-1 flex flex-col items-start gap-3">
        <h2 className="text-base font-medium text-gray-600 capitalize">
          mr candie
        </h2>
        <h2 className="text-base font-medium text-gray-400 capitalize">
          2349087654345
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt />
        <FaEye />
      </div>
    </div>
  );
}
