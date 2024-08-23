import Image from "./Image";
import Menu from "./Menu";

export default function SideMenu() {
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
      <Menu />
    </nav>
  );
}
