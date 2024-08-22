import AppWrapper from "../../components/AppWrapper";
import AlertComponent from "../../components/Alert";
import Loader from "../../components/Loader";
import useCreateContact from "../../hooks/useCreateContact";
import ContactForm from "../../components/ContactForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateContact() {
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
  } = useCreateContact();
  return (
    <>
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <AppWrapper title="Create Contact">
        <div className="w-full flex items-center jjustify-center h-full">
          <ContactForm
            loading={loading}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
          />
        </div>
      </AppWrapper>
    </>
  );
}
