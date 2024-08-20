import Overlay from "./Overlay";
import { IoCloseSharp } from "react-icons/io5";
import PropTypes from "prop-types";

export default function Modal({ closeModal, children }) {
  return (
    <Overlay closeModal={closeModal}>
      <div
        className="flex flex-col absolute w-[90%] lg:w-[450px] p-[2rem] bg-white top-[20%] rounded-xl"
        onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-0 right-0 m-2 cursor-pointer"
          onClick={closeModal}>
          <IoCloseSharp color="red" />
        </div>
        {children}
      </div>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.element,
};
