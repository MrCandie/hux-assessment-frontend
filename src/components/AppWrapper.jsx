import SideMenu from "./SideMenu";
import Header from "./Header";
import PropTypes from "prop-types";
import GoBack from "./GoBack";

export default function AppWrapper({ title, children, show = true }) {
  return (
    <div className="w-full flex items-center h-full lg:h-screen overflow-hidden ">
      <SideMenu />
      <div className="flex-1 flex flex-col items-start h-full">
        <Header title={title} />
        {show && <GoBack />}
        {children}
      </div>
    </div>
  );
}

AppWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
  show: PropTypes.bool,
};
