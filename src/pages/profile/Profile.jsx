import { useState, useEffect } from "react";
import AlertComponent from "../../components/Alert";
import AppWrapper from "../../components/AppWrapper";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import useProfile from "../../hooks/useProfile";
import DeleteAccountModal from "./DeleteAccountModal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Profile() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

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
  const [label, setLabel] = useState("");

  const name = formData?.name || "";

  useEffect(() => {
    const abbreviation = name.split(" ");

    let alias;
    if (abbreviation.length > 1) {
      alias = `${abbreviation[0][0]?.toUpperCase() || ""}${
        abbreviation[1][0]?.toUpperCase() || ""
      }`;
      setLabel(alias);
      return;
    }
    alias = `${abbreviation[0][0]?.toUpperCase() || ""}${
      abbreviation[0][1]?.toUpperCase() || ""
    }`;
  }, [name]);

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
            <div className=" w-[100px] mb-10 mx-auto lg:w-[150px] h-[100px] lg:h-[150px] flex items-center justify-center rounded-full bg-red-100 font-bold text-[30px] text-black">
              {label}
            </div>
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
