import { FaPhoneAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function SingleContact({ contact }) {
  const navigate = useNavigate();
  const [label, setLabel] = useState("");
  const name = `${contact?.firstName} ${contact?.lastName}`;

  useEffect(() => {
    const abbreviation = name.split(" ");

    let alias;
    if (abbreviation.length > 1) {
      alias = `${abbreviation[0][0]?.toUpperCase()}${abbreviation[1][0]?.toUpperCase()}`;
      setLabel(alias);
      return;
    }
    alias = `${abbreviation[0][0]?.toUpperCase()}${abbreviation[0][1]?.toUpperCase()}`;
  }, [name]);

  return (
    <div
      onClick={() => navigate(`/contact/${contact?.id}`)}
      className="w-full border-b py-2 border-b-[#ccc] flex items-center hover:opacity-80 cursor-pointer justify-between gap-4">
      <div className="w-[35px] h-[35px] rounded-full bg-red-300 flex items-center justify-center text-[14px] text-center font-medium">
        {label}
      </div>
      <div className="flex-1 flex flex-col items-start gap-1">
        <h2 className="text-base font-medium text-gray-600 capitalize">
          {name}
        </h2>
        <h2 className="text-base font-medium text-gray-400 capitalize">
          {contact?.phone}
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <FaPhoneAlt />
        <FaEye />
      </div>
    </div>
  );
}

SingleContact.propTypes = {
  contact: PropTypes.object,
};
