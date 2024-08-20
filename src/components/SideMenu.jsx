import Image from "./Image";
import NavLinkComponent from "./NavLink";
import { MdLogout } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SideMenu() {
  const navigate = useNavigate();
  return (
    <nav className="w-[20%] hidden pt-10 h-full lg:flex items-center lg:flex-col gap-4 bg-white">
      <div className="">
        <Image
          src="/logo.png"
          fit="contain"
          alt="mobile book logo"
          height="150px"
        />
      </div>
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
    </nav>
  );
}
