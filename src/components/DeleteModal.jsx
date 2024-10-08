import PropTypes from "prop-types";
import Modal from "./Modal";
import useDeleteContact from "../hooks/useDeleteContact";
import AlertComponent from "./Alert";
import Loader from "./Loader";

export default function DeleteModal({ closeModal, name, id }) {
  const {
    progress,
    open,
    type,
    message,
    handleSubmit,
    setOpen,
    setProgress,
    loading,
  } = useDeleteContact(id);
  return (
    <>
      <AlertComponent
        open={open}
        type={type}
        message={message}
        onClose={() => setOpen(false)}
      />
      <Loader progress={progress} setProgress={setProgress} />
      <Modal closeModal={closeModal}>
        <div className="w-full flec flex-col gap-4">
          <h2 className="text-base">{`Are you sure you want to delete ${name}`}</h2>
          <div className="w-full flex mt-6 items-end justify-end gap-4">
            <button
              onClick={closeModal}
              className="text-[#ef4f51] p-2  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#ef4f51] p-2 text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              {loading ? "Loading..." : "Delete"}
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}

DeleteModal.propTypes = {
  closeModal: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
};
