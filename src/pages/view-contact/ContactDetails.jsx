import { useNavigate } from "react-router-dom";
import ReusableContactInfo from "../../components/ReusableContactInfo";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState, useEffect } from "react";
import DeleteModal from "../../components/DeleteModal";
import PropTypes from "prop-types";

export default function ContactDetails({ contact }) {
  const [showModal, setShowModal] = useState(false);
  const [label, setLabel] = useState("");
  const navigate = useNavigate();
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
    <>
      {showModal && (
        <DeleteModal
          id={contact?.id}
          name={`${contact?.firstName} ${contact?.lastName}`}
          closeModal={() => setShowModal(false)}
        />
      )}
      <div className="w-full bg-white h-full p-4 flex flex-col items-center">
        <div className="w-full flex items-end justify-end gap-4">
          <button onClick={() => navigate(`/contact/${contact?.id}/edit`)}>
            <MdEdit size={20} />
          </button>
          <button onClick={() => setShowModal(true)}>
            <MdDelete color="red" size={20} />
          </button>
        </div>
        <div className=" w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] flex items-center justify-center rounded-full bg-red-100 font-bold text-[30px] text-black">
          {label}
        </div>
        <div className="w-full flex items-start flex-col gap-4">
          <ReusableContactInfo title="Name" text={name} />
          <ReusableContactInfo title="Phone Number" text={contact?.phone} />
          <ReusableContactInfo title="Email" text={contact?.email} />
          <ReusableContactInfo
            title="Relationship"
            text={contact?.relationship}
          />
          <ReusableContactInfo title="Birthday" text={contact?.birthday} />
          <ReusableContactInfo
            title="Creation Date"
            text={new Date(contact?.createdAt).toLocaleString()}
          />
        </div>
      </div>
    </>
  );
}

ContactDetails.propTypes = {
  contact: PropTypes.object,
};
