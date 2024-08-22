import { useState } from "react";
import AlertComponent from "../../components/Alert";
import AppWrapper from "../../components/AppWrapper";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import useProfile from "../../hooks/useProfile";
import DeleteAccountModal from "./DeleteAccountModal";

export default function Profile() {
  const {
    formData,
    setProgress,
    progress,
    open,
    type,
    loading,
    setFormData,
    handleSubmit,
    setOpen,
    message,
  } = useProfile();
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <DeleteAccountModal
          closeModal={() => setShowModal(false)}
          name={formData.name}
        />
      )}
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <AppWrapper title="Profile">
        <div className="w-full flex items-center justify-center h-full">
          <div className="w-full lg:w-[50%] bg-white justify-center mx-auto p-4 flex flex-col gap-4">
            <Input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              label="Full Name"
              value={formData.name}
            />
            <Input readOnly label="Email" value={formData.email} />
            <div className="w-full flex items-center justify-between">
              <button
                onClick={handleSubmit}
                className="bg-[#ef4f51] text-white py-2 px-6  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
                {loading ? "Loading..." : "Save"}
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="text-[#ef4f51] p-2  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </AppWrapper>
    </>
  );
}
