import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function NavLinkComponent({ title, icon, path }) {
  return (
    <NavLink
      to={path}
      className="w-full flex items-center gap-4 text-base font-medium p-4">
      {icon}
      {title}
    </NavLink>
  );
}

NavLinkComponent.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.element,
  path: PropTypes.string,
};
