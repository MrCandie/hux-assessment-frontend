import NavLinkComponent from "./NavLink";
import { IoMdContacts } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-4">
      <NavLinkComponent
        icon={<IoMdContacts />}
        title="Contacts"
        path="/contact"
      />
      <NavLinkComponent icon={<FaUser />} title="Profile" path="/profile" />
      <div
        onClick={() => navigate("/login")}
        className="w-full cursor-pointer flex items-center gap-4 text-base font-medium p-4">
        <MdLogout />
        Logout
      </div>
    </div>
  );
}
