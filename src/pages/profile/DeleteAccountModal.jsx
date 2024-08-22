import PropTypes from "prop-types";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import useDeleteAccount from "../../hooks/useDeleteAccount";
import Loader from "../../components/Loader";

export default function DeleteAccountModal({ closeModal, name }) {
  const { progress, setProgress, handleSubmit, loading, setValue, value } =
    useDeleteAccount(name);
  return (
    <>
      <Loader progress={progress} setProgress={setProgress} />
      <Modal closeModal={closeModal}>
        <div className="w-full flec flex-col gap-4">
          <h2 className="text-base">{`Are you sure you want to delete your account?`}</h2>
          <Input
            label={`Enter ${name} to continue`}
            placeholder={`Enter ${name} to continue`}
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div className="w-full flex mt-6 items-end justify-end gap-4">
            <button
              onClick={closeModal}
              className="text-[#ef4f51] p-2  font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Cancel
            </button>
            <button
              disabled={value !== name}
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

DeleteAccountModal.propTypes = {
  closeModal: PropTypes.func,
  name: PropTypes.string,
};
