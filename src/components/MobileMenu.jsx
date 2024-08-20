import Overlay from "./Overlay";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "./Menu";
import Image from "./Image";
import PropTypes from "prop-types";

export default function MobileMenu({ closeModal }) {
  return (
    <Overlay closeModal={closeModal}>
      <div
        className="flex h-screen flex-col absolute w-[80%]  bg-white top-0 left-0 rounded-r-xl"
        onClick={(e) => e.stopPropagation()}>
        <div
          className="absolute top-0 right-0 m-2 cursor-pointer"
          onClick={closeModal}>
          <IoCloseSharp color="red" size={24} />
        </div>
        <nav className="w-full pt-10 h-full flex items-center flex-col gap-4 bg-white">
          <div className="">
            <Image
              src="/logo.png"
              fit="contain"
              alt="mobile book logo"
              height="150px"
            />
          </div>
          <Menu />
        </nav>
      </div>
    </Overlay>
  );
}

MobileMenu.propTypes = {
  closeModal: PropTypes.func,
};
