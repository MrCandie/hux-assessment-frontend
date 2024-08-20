import { useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import PropTypes from "prop-types";

export default function Header({ title }) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {showMenu && <MobileMenu closeModal={() => setShowMenu(false)} />}
      <header className="w-full flex items-center shadow-xl justify-between bg-white px-4 lg:px-10 py-4">
        <div className="flex items-center gap-4">
          <div onClick={() => setShowMenu(true)} className="block lg:hidden">
            <AiOutlineMenu size={24} />
          </div>
          <h2 className="text-base lg:text-[18px] font-bold text-black">
            {title}
          </h2>
        </div>
        <button
          onClick={() => navigate("/contact/create")}
          className="bg-[#ef4f51] p-2 lg:p-4 text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
          Add Contact
        </button>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};
