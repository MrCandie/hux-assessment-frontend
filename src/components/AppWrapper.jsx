import SideMenu from "./SideMenu";
import Header from "./Header";
import PropTypes from "prop-types";

export default function AppWrapper({ title, children }) {
  return (
    <div className="w-full flex items-center h-screen overflow-hidden ">
      <SideMenu />
      <div className="flex-1 flex flex-col items-start h-full">
        <Header title={title} />

        {children}
      </div>
    </div>
  );
}

AppWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
