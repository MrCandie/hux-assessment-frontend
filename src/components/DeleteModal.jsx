import PropTypes from "prop-types";
import Modal from "./Modal";

export default function DeleteModal({ closeModal }) {
  return (
    <Modal closeModal={closeModal}>
      <div className="w-full flec flex-col gap-4">
        <h2 className="text-base">Are you sure you want to delete mr candie</h2>
        <div className="w-full flex mt-6 items-end justify-end gap-4">
          <button
            onClick={closeModal}
            className="text-[#ef4f51] p-2  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
            Cancel
          </button>
          <button className="bg-[#ef4f51] p-2 text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
}

DeleteModal.propTypes = {
  closeModal: PropTypes.func,
};
