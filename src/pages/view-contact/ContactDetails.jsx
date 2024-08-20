import { useNavigate } from "react-router-dom";
import ReusableContactInfo from "../../components/ReusableContactInfo";
import { MdEdit, MdDelete } from "react-icons/md";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal";

export default function ContactDetails() {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {showModal && <DeleteModal closeModal={() => setShowModal(false)} />}
      <div className="w-full bg-white h-full p-4 flex flex-col items-center">
        <div className="w-full flex items-end justify-end gap-4">
          <button onClick={() => navigate(`/contact/cdfsfds/edit`)}>
            <MdEdit size={20} />
          </button>
          <button onClick={() => setShowModal(true)}>
            <MdDelete color="red" size={20} />
          </button>
        </div>
        <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full bg-red-100 font-bold text-[30px] text-black">
          AO
        </div>
        <div className="w-full flex items-start flex-col gap-4">
          <ReusableContactInfo title="Name" text="mr candie" />
          <ReusableContactInfo title="Phone Number" text="09087654321" />
          <ReusableContactInfo title="Email" text="mrcandie@gmail.com" />
          <ReusableContactInfo title="Relationship" text="sister" />
          <ReusableContactInfo title="Birthday" text="april 20,2000" />
          <ReusableContactInfo
            title="Creation Date"
            text={new Date().toLocaleString()}
          />
        </div>
      </div>
    </>
  );
}
