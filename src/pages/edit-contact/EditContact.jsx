import { useNavigate } from "react-router-dom";
import AlertComponent from "../../components/Alert";
import AppWrapper from "../../components/AppWrapper";
import ContactForm from "../../components/ContactForm";
import Loader from "../../components/Loader";
import useEditContact from "../../hooks/useEditContact";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function EditContact() {
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

  const {
    formData,
    setFormData,
    loading,
    progress,
    open,
    type,
    message,
    handleSubmit,
    setOpen,
    setProgress,
  } = useEditContact();
  return (
    <>
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <AppWrapper title="Edit Contact">
        <div className="w-full flex items-center jjustify-center h-full">
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            loading={loading}
            handleSubmit={handleSubmit}
            title="Save"
          />
        </div>
      </AppWrapper>
    </>
  );
}
