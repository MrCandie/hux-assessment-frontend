import AlertComponent from "../../components/Alert";
import AppWrapper from "../../components/AppWrapper";
import ContactForm from "../../components/ContactForm";
import Loader from "../../components/Loader";
import useEditContact from "../../hooks/useEditContact";

export default function EditContact() {
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
          />
        </div>
      </AppWrapper>
    </>
  );
}
