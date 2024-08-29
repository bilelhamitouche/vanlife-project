import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-8 justify-center items-center p-8">
      <Link
        to="/"
        className="mr-auto text-2xl font-bold text-black">
        #VANLIFE
      </Link>
      <NavLink
        to="/host"
        className={({ isActive }) =>
          isActive
            ? "text-black font-bold underline"
            : "text-gray-700 hover:underline"
        }>
        Host
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-black font-bold underline"
            : "text-gray-700 hover:underline"
        }>
        About
      </NavLink>
      <NavLink
        to="/vans"
        className={({ isActive }) =>
          isActive
            ? "text-black font-bold underline"
            : "text-gray-700 hover:underline"
        }>
        Vans
      </NavLink>
    </nav>
  );
}

export default Navbar;
