import Image from "./Image";
import PropTypes from "prop-types";

export default function AuthWrapper({ children, title }) {
  return (
    <div className="w-full flex items-center justify-between h-screen">
      <div className="w-[50%] hidden lg:flex h-full">
        <Image src="/auth.jpg" height="100vh" alt="contact app" />
      </div>
      <div className="flex-1 flex items-center justify-center flex-col gap-4 h-full px-4 lg:px-[7rem]">
        <h1
          style={{ lineHeight: "40px" }}
          className="text-[30px] lg:text-[36px] text-black font-bold mb-10">
          {title}
        </h1>
        {children}
      </div>
    </div>
  );
}

AuthWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
