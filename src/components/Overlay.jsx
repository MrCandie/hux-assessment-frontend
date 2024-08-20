import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Overlay = ({ closeModal, children }) => {
  return createPortal(
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm"
      onClick={closeModal}>
      {children}
    </div>,
    document.getElementById("portal")
  );
};

Overlay.propTypes = {
  closeModal: PropTypes.func,
  children: PropTypes.element,
};

export default Overlay;
