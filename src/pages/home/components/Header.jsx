import { Link } from "react-router-dom";
import Image from "../../../components/Image";
import Slide from "../../../animations/Slide";

export default function Header() {
  return (
    <Slide>
      <header className="w-full px-4 lg:px-10-white flex items-center justify-between border-b border-b-gray.100 shadow-md">
        <div className="w-[120px]">
          <Image src="/logo.png" alt="mobile book" height="80px" />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="lg:bg-[#ef4f51] p-2 lg:p-2 text-[#ef4f51] bg-white lg:text-white font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Login
            </button>
          </Link>
          <Link className="hidden lg:block" to="/register">
            <button className="text-[#ef4f51] p-2 lg:p-2 bg font-medium text-center rounded-md hover:rounded-md hover:opacity-80">
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    </Slide>
  );
}
