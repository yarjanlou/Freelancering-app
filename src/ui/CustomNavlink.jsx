import { NavLink } from "react-router-dom";

function CustomNavlink({ children, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className="flex items-center gap-x-2 rounded-lg px-4 py-2 text-secondary-600 transition-all duration-300 hover:bg-primary-100/80 hover:text-primary-900 aria-[current=page]:bg-primary-100/80 aria-[current=page]:text-primary-900"
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavlink;
